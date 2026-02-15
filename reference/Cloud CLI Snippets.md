# Cloud CLI Snippets

AWS, Azure, and GCP command-line patterns.

---

## Azure CLI

### Authentication
```bash
# Interactive login
az login

# Service principal login
az login --service-principal -u $CLIENT_ID -p $CLIENT_SECRET --tenant $TENANT_ID

# Get access token
az account get-access-token --query accessToken -o tsv
```

### Key Vault
```bash
# Encrypt with Key Vault key
az keyvault key encrypt \
  --id 'https://vault.vault.azure.net/keys/key-name' \
  --algorithm RSA-OAEP \
  --value "$(echo 'secret' | base64)"

# Decrypt
az keyvault key decrypt \
  --id 'https://vault.vault.azure.net/keys/key-name' \
  --algorithm RSA-OAEP \
  --value "encrypted-base64"
```

### Graph API
```bash
# Get user's groups
az rest --method get --uri "https://graph.microsoft.com/v1.0/me/memberof"

# Force password change
az rest --method PATCH \
  --headers "Content-type=application/json" \
  --uri "https://graph.microsoft.com/v1.0/users/$USER_ID" \
  --body '{"passwordProfile":{"forceChangePasswordNextSignIn":true}}'

# Find service principal by app ID
az rest --method get \
  --uri "https://graph.microsoft.com/v1.0/servicePrincipals?\$filter=appId%20eq%20'$APP_ID'"
```

### Container Registry
```bash
# Enable public access
az acr update --name myacr --public-network-enabled true

# List repositories
az acr repository list --name myacr -o tsv

# Delete old images
az acr repository delete --name myacr --image "repo:tag" --yes
```

### Application Insights
```bash
# Query annotations
az rest --method get \
  --uri "https://management.azure.com/subscriptions/$SUB/resourceGroups/$RG/providers/microsoft.insights/components/$APP/Annotations?api-version=2015-05-01"
```

---

## GCP CLI

### Authentication
```bash
# User login (for CLI)
gcloud auth login

# Application default (for SDKs/Terraform)
gcloud auth application-default login

# Service account
gcloud auth activate-service-account --key-file=key.json
```

### Container Registry
```bash
# Configure Docker auth
gcloud auth configure-docker

# For Artifact Registry
gcloud auth print-access-token | docker login -u oauth2accesstoken --password-stdin https://us-west1-docker.pkg.dev
```

### KMS
```bash
# Encrypt
gcloud kms encrypt \
  --key $KEY_NAME \
  --keyring $KEYRING \
  --location global \
  --plaintext-file input.txt \
  --ciphertext-file output.enc

# Decrypt
gcloud kms decrypt \
  --key $KEY_NAME \
  --keyring $KEYRING \
  --location global \
  --ciphertext-file output.enc \
  --plaintext-file decrypted.txt
```

### Cloud-init Debugging
```bash
# Validate cloud-init config
cloud-init schema --system

# Query cloud-init data
cloud-init query --all

# View user data from metadata
curl -H "Metadata-Flavor: Google" \
  http://metadata.google.internal/computeMetadata/v1/instance/attributes/user-data
```

---

## AWS CLI

### Authentication
```bash
# Configure profile
aws configure --profile myprofile

# Use profile
export AWS_PROFILE=myprofile

# Get caller identity
aws sts get-caller-identity
```

### KMS
```bash
# Encrypt with KMS
aws kms encrypt \
  --region us-east-1 \
  --key-id alias/$KEY_ALIAS \
  --query 'CiphertextBlob' \
  --output text \
  --plaintext fileb://<(echo -n "$SECRET")
```

### S3
```bash
# Sync directory
aws s3 sync ./local s3://bucket/prefix

# Copy with metadata
aws s3 cp file.txt s3://bucket/ --metadata key=value
```

### ECR
```bash
# Login to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin $ACCOUNT.dkr.ecr.us-east-1.amazonaws.com

# List images
aws ecr list-images --repository-name repo-name
```

---

## Terraform

### Provider state operations
```bash
# Replace provider (e.g., databrickslabs to databricks)
terraform state replace-provider -auto-approve \
  databrickslabs/databricks databricks/databricks

# Taint resource for recreation
terraform taint module.adapter.azurerm_role_assignment.k8s_to_acr

# Import existing resource
terraform import aws_instance.example i-1234567890abcdef0
```

### Debug
```bash
# Enable trace logging
export TF_LOG=DEBUG
terraform plan
```

---

## SSL/TLS

### Check TLS ciphers
```bash
nmap --script ssl-enum-ciphers -p 443 hostname
```

### Verify CSR matches private key
```bash
# Get modulus from CSR
openssl req -noout -modulus -in request.csr | md5

# Get modulus from key
openssl rsa -noout -modulus -in private.key | md5

# Should match
```

### Check certificate expiry
```bash
openssl s_client -connect hostname:443 </dev/null 2>/dev/null | openssl x509 -noout -enddate
```

---

## Related

- [[Kubernetes Snippets]] - Cloud-native operations
- [[Bash Snippets]] - Shell patterns
