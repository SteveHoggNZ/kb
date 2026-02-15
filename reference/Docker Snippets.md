# Docker Snippets

Container operations, DevContainers, and troubleshooting.

---

## Cleanup

```bash
# Remove all unused images
docker image prune -a

# Remove all unused volumes
docker volume prune

# Fix "max depth exceeded" error
docker images | grep vsc_ | awk '{print $3}' | xargs docker rmi -f
```

---

## Building

### Multi-architecture build
```bash
docker buildx create --use
docker buildx build --platform linux/amd64 -t image:tag .
docker buildx build --platform linux/amd64,linux/arm64 -t image:tag --push .
```

### Build from stdin (inline Dockerfile)
```bash
echo "FROM image:tag\nRUN cmd" | docker build -t name:tag -f - .
```

### Pass secrets during build
```bash
docker build . -t image:tag --secret id=mysecret,src=/dev/stdin < <(echo "$SECRET")
```

---

## Running

### Interactive shell
```bash
docker run -it --rm ubuntu:latest bash
```

### Access host from container
```bash
# In docker run
--add-host=host.docker.internal:host-gateway

# In docker-compose.yml
extra_hosts:
  - "host.docker.internal:host-gateway"
```

### Tail logs (simulated for testing)
```bash
docker run -it ubuntu bash -c "( while true; do date >> /tmp/log.txt; sleep 1; done & ) && tail -f /tmp/log.txt"
```

---

## DevContainers

### SSH agent forwarding
DevContainers automatically forward `SSH_AUTH_SOCK` - no config needed.

### Fix ownership issues
```json
// devcontainer.json
"remoteUser": "vscode",
"containerUser": "vscode",
"updateRemoteUserUID": true
```

### Cursor DevContainers indexing (ARM64)
```bash
# If indexing fails on ARM64
npm install @anysphere/file-service-linux-arm64-gnu
```

---

## Colima (Docker Desktop alternative)

### Start with custom resources
```bash
colima start --cpu 4 --memory 8 --disk 100
```

### Edit running VM
```bash
colima stop
colima start --edit
```

### Fix connection issues
```bash
colima stop && colima delete && colima start
```

---

## Registry Operations

### Push to GCP Artifact Registry
```bash
gcloud auth print-access-token | docker login -u oauth2accesstoken --password-stdin https://us-west1-docker.pkg.dev
docker push us-west1-docker.pkg.dev/project/repo/image:tag
```

---

## Compose Patterns

### Shared volumes for caching
```yaml
services:
  app:
    volumes:
      - node_modules:/app/node_modules
      - poetry_cache:/root/.cache/pypoetry

volumes:
  node_modules:
  poetry_cache:
```

### Tailscale sidecar
```yaml
services:
  tailscale:
    image: tailscale/tailscale:latest
    hostname: my-service
    environment:
      - TS_AUTHKEY=${TS_AUTHKEY}
      - TS_STATE_DIR=/var/lib/tailscale
    volumes:
      - tailscale-state:/var/lib/tailscale
    cap_add:
      - NET_ADMIN
      - SYS_MODULE

  app:
    network_mode: service:tailscale
    depends_on:
      - tailscale
```

---

## Debugging

### Check image layers
```bash
# Install dive
brew install dive

# Analyze image
dive image:tag
```

### Inspect volume location
```bash
docker volume inspect volume-name
```

### Socket sharing caveat
When `/var/run/docker.sock` is mounted inside a container, volume paths in `docker run` commands are relative to the **host**, not the container.

---

## Fixes

### Old Debian repos 404
```dockerfile
# Change deb.debian.org to archive.debian.org
# Remove stretch-updates from sources.list
RUN sed -i 's/deb.debian.org/archive.debian.org/g' /etc/apt/sources.list && \
    sed -i '/stretch-updates/d' /etc/apt/sources.list
```

### NGINX resolver in Docker
```nginx
# Fix "no resolver defined" error
resolver 127.0.0.11;
```

---

## Related

- [[Kubernetes Snippets]] - Container orchestration
- [[Bash Snippets]] - Shell commands
