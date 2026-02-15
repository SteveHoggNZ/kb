# Kubernetes Snippets

kubectl commands, debugging, and cluster operations.

---

## Debugging

### Run temporary pod
```bash
kubectl run -it --rm test --image=ubuntu:latest --restart=Never -- bash
```

### Run psql via kubectl
```bash
kubectl run --rm -i --tty psql-cli-tmp \
  --image=postgres:15 \
  --restart=Never \
  --env "PGHOST=$PGHOST" \
  --env "PGPASSWORD=$PGPASSWORD" \
  -- psql -U $PGUSER $PGDB
```

### Get external IP (for NAT gateway testing)
```bash
kubectl apply -f - <<EOF
apiVersion: batch/v1
kind: Job
metadata:
  name: get-external-ip
spec:
  template:
    spec:
      containers:
      - name: get-ip
        image: curlimages/curl:latest
        command: ["curl", "-s", "ifconfig.me/ip"]
      restartPolicy: Never
  backoffLimit: 4
EOF

# Wait and get result
kubectl wait --for=condition=complete job/get-external-ip
kubectl logs job/get-external-ip
kubectl delete job get-external-ip
```

---

## Port Forwarding

### Forward to service
```bash
kubectl port-forward svc/service-name 8080:80
```

### Forward to specific pod
```bash
kubectl port-forward $(kubectl get pods -l app=myapp -o name | head -1) 8080:80
```

### Forward Temporal web UI
```bash
kubectl -n $NAMESPACE port-forward $(kubectl get pods | grep temporal-web | awk '{print $1}') 8088:8088
```

---

## TLS & Certificates

### List TLS secrets
```bash
kubectl get secrets --field-selector type=kubernetes.io/tls
```

### Check certificate expiry
```bash
openssl x509 -in <(kubectl get secret tls-secret -o yaml | yq '.data["tls.crt"]' | base64 -d) -enddate -noout
```

### Verify cert matches key (modulus check)
```bash
# Get cert modulus
kubectl get secret tls-secret -o yaml | yq '.data["tls.crt"]' | base64 -d | openssl x509 -noout -modulus | md5

# Get key modulus
kubectl get secret tls-secret -o yaml | yq '.data["tls.key"]' | base64 -d | openssl rsa -noout -modulus | md5

# Should match!
```

---

## Pod Management

### Delete pods by pattern
```bash
kubectl get pods | grep pattern | awk '{print $1}' | xargs kubectl delete pod
```

### Delete pods in parallel
```bash
kubectl get pods | grep temporal | awk '{print "kubectl delete pod "$1" &"}' | sh
```

### Force delete stuck pod
```bash
kubectl delete pod pod-name --grace-period=0 --force
```

---

## Logs & Events

### Stream logs with labels
```bash
kubectl logs -f -l app=myapp --all-containers
```

### Get events sorted by time
```bash
kubectl get events --sort-by='.lastTimestamp'
```

---

## Secrets

### Create secret from literal
```bash
kubectl create secret generic my-secret --from-literal=key=value
```

### Decode secret value
```bash
kubectl get secret my-secret -o jsonpath='{.data.key}' | base64 -d
```

---

## Helm

### List all releases (including failed)
```bash
helm ls --all-namespaces -a
```

### Rollback failed release
```bash
helm rollback release-name revision-number
```

### Debug template rendering
```bash
helm template release-name ./chart --debug
```

---

## Ingress

### Add custom headers via annotation
```yaml
metadata:
  annotations:
    nginx.ingress.kubernetes.io/configuration-snippet: |
      more_set_headers "X-Custom-Header: value";
```

### WebSocket support
```yaml
metadata:
  annotations:
    nginx.ingress.kubernetes.io/proxy-http-version: "1.1"
    nginx.ingress.kubernetes.io/proxy-set-headers: "Upgrade $http_upgrade"
```

---

## AKS Specific

### Enable monitoring
```bash
az aks enable-addons --addons monitoring \
  --name cluster-name \
  --resource-group rg-name \
  --workspace-resource-id $WORKSPACE_ID
```

### Get credentials
```bash
az aks get-credentials --resource-group rg-name --name cluster-name
```

---

## Fixes

### Volume node affinity conflict
PV zone must match node zone. Fix: delete PVC/PV and redeploy.

### Ingress showing Kubernetes Fake Certificate
1. Check cert/key modulus match
2. Verify secret exists in correct namespace
3. Check ingress TLS configuration

---

## Related

- [[Docker Snippets]] - Container basics
- [[Bash Snippets]] - Shell commands
- [[Cloud CLI Snippets]] - Azure/GCP kubectl setup
