# Bash Snippets

Useful shell functions and one-liners.

---

## File & Directory Operations

### Find and delete files by pattern
```bash
find . -name "*.tmp" -exec rm {} \;
find . -name "node_modules" -type d -exec rm -rf {} +
```

### Watch file changes and run command (macOS)
```bash
fswatch Dockerfile | xargs -n1 -I{} docker build . -t image:tag
```

### Create swap file (Linux)
```bash
fallocate -l 1G /tmpswap && chmod 600 /tmpswap && mkswap /tmpswap && swapon /tmpswap
```

---

## Text Processing

### TSV to bordered table
```bash
tsv_to_table() {
  column -t -s $'\t' | awk '
    NR==1 {
      for(i=1;i<=NF;i++) w[i]=length($i)
      for(i=1;i<=NF;i++) if(w[i]<length($i)) w[i]=length($i)
    }
    {
      for(i=1;i<=NF;i++) if(w[i]<length($i)) w[i]=length($i)
    }
    END {
      for(i=1;i<=NR;i++) {
        printf "| "
        for(j=1;j<=NF;j++) printf "%-*s | ", w[j], a[i,j]
        print ""
        if(i==1) {
          printf "|-"
          for(j=1;j<=NF;j++) { for(k=1;k<=w[j];k++) printf "-"; printf "-|-" }
          print ""
        }
      }
    }
    { for(i=1;i<=NF;i++) a[NR,i]=$i }
  '
}
```

### Extract JWT payload
```bash
echo "$JWT" | jq -R 'split(".") | .[1] | @base64d | fromjson'
```

---

## Process & Port Management

### List open ports with process info
```bash
lsof -iTCP -sTCP:LISTEN -n -P | awk 'NR>1 {print $9, $1, $2}' | sort -t: -k2 -n
```

### Quick HTTP server
```bash
python -m http.server 8111
npx serve@latest ./dist
```

---

## Process Debugging (macOS)

### Sample a hung process
```bash
sample <pid> <duration_seconds>
# Example: sample 27079 1
```

**What it does:** Captures stack traces at 1ms intervals to show where threads are spending time. Output goes to `/tmp/<process>_<timestamp>.sample.txt`.

**Use case:** Diagnosing why a process is stuck — e.g., Bun waiting on a file lock, a binary deadlocked on I/O.

**Reading the output:**
- **Call graph** — nested stack traces showing what each thread is doing
- **Sort by top of stack** — summary of where time is spent (the "hot" syscalls)

Common blocking syscalls you'll see:
| Syscall | Meaning |
|---------|---------|
| `kevent64` | Waiting for I/O events (normal for event loops) |
| `__ulock_wait2` | Waiting on a lock — potential deadlock |
| `__psynch_cvwait` | Waiting on a condition variable |
| `__workq_kernreturn` | Thread pool idle (normal) |

**Comparison to Linux tools:**
- `strace` traces syscalls (what the process is *doing*)
- `sample` captures stack traces (where the process is *stuck*)
- For syscall-level detail on macOS, use `dtruss` (requires SIP disabled)

### Case Study: Claude Code CLI hang on multi-user Mac

**Symptom:** CLI hangs on launch, `sample` shows all threads blocked on `__ulock_wait2` (lock wait).

**Diagnosis:**
```bash
ls -la /tmp/claude
# drwxr-xr-x  5 one  wheel  160 29 Jan 07:20 ...
```
Directory owned by user `one`, but running as user `arinco`. Permission `755` means other users can read but not write → CLI blocked waiting to acquire a lock it can't create.

**Fix:**
```bash
sudo rm -rf /tmp/claude
```
CLI recreates the directory with correct ownership on next launch.

**Root cause:** Tool uses hardcoded `/tmp/claude` instead of user-specific path like `/tmp/claude-$USER`. First user to run "claims" the directory; subsequent users get blocked.

---

## Git Helpers

### Clean up merged branch
```bash
alias branchclean='CURRENT_BRANCH=$(git branch | grep "^*" | awk '\''{print $2}'\''); \
  [[ ! -z "$CURRENT_BRANCH" ]] && [[ "$CURRENT_BRANCH" != "main" ]] && \
  git checkout main && git pull && git branch -d $CURRENT_BRANCH'
```

### Get semantic version tags (sorted)
```bash
git tag --merged | grep -E '^\d+\.\d+\.\d+' | sort -V -r
```

### Diff specific file pattern
```bash
git diff HEAD~1 -- '**/package.json'
```

### Show file at specific commit
```bash
git --no-pager show HEAD~1:./config.yaml
```

---

## Docker Helpers

### PostgreSQL dump via Docker
```bash
pgdmp() {
  if [[ -t 0 ]]; then
    DOCKER_SWITCHES="-it"
  else
    DOCKER_SWITCHES="-i"
  fi
  docker run --log-driver=none $DOCKER_SWITCHES \
    -e PGPASSWORD="$PGPASSWORD" postgres:15 \
    /usr/bin/pg_dump -h $PGHOST -d $PGDB -U $PGUSER "$@"
}
```

### Run command with echo (for scripts)
```bash
run() {
  echo "+ $*" >&2
  "$@" || { echo "FAILED: $*" >&2; return 1; }
}
```

---

## Azure Container Registry

### Get repo space usage
```bash
acr_repo_space_usage() {
  local registry=$1
  az acr repository list --name $registry -o tsv | while read repo; do
    size=$(az acr manifest list-metadata --registry $registry --name $repo --query "[].imageSize" -o tsv | awk '{s+=$1} END {print s}')
    echo "$repo $size"
  done | sort -k2 -n -r
}
```

### Delete excess tags (keep latest N)
```bash
acr_repo_tag_delete_excess() {
  local registry=$1 repo=$2 keep=${3:-10}
  az acr manifest list-metadata --registry $registry --name $repo \
    --orderby time_desc --query "[].tags[0]" -o tsv | tail -n +$((keep+1)) | \
    xargs -I{} az acr repository delete --name $registry --image "$repo:{}" --yes
}
```

---

## Kubernetes Helpers

### Get external IP (NAT gateway)
```bash
kubectl run -it --rm get-ip --image=curlimages/curl:latest --restart=Never -- curl -s ifconfig.me/ip
```

### Batch delete pods by pattern
```bash
kubectl get pods | grep temporal | awk '{print "kubectl delete pod "$1" &"}' | sh
```

### Check TLS certificate expiry
```bash
openssl x509 -in <(kubectl get secret tls-secret -o yaml | yq '.data["tls.crt"]' | base64 -d) -enddate -noout
```

---

## Cloud Metadata

### GCP instance metadata
```bash
curl -H "Metadata-Flavor: Google" http://metadata.google.internal/computeMetadata/v1/instance/attributes/user-data
```

### Azure VM metadata
```bash
curl -s -H Metadata:true "http://169.254.169.254/metadata/instance?api-version=2021-02-01" | jq -r '.compute.userData' | base64 -d
```

---

## Cron

### Run on reboot (Linux)
```bash
# /etc/crontab - needs trailing newline, 600 permissions
@reboot username /path/to/command
```

---

## Related

- [[Git Snippets]] - More version control commands
- [[Docker Snippets]] - Container operations
- [[Kubernetes Snippets]] - Cluster management
