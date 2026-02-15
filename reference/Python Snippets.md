# Python Snippets

Package management, environment setup, and common patterns.

---

## UV (Modern Package Manager)

```bash
# Create environment and install
uv venv && source .venv/bin/activate && uv pip install -r pyproject.toml

# Add packages
uv add phidata
uv pip install -e ".[dev]"

# Add local editable package (monorepo)
uv add --editable ../../internal/package-name
```

### Migrate from Poetry to UV
```bash
uvx pdm import pyproject.toml
```

---

## Poetry

### Setup
```bash
poetry config virtualenvs.in-project true
poetry config virtualenvs.create true
poetry install
```

### Fix wrong venv
```bash
rm -rf /home/vscode/.cache/pypoetry
poetry env remove --all
poetry install
```

### Fix stuck resolving dependencies
```bash
PYENV_VERSION=3.8.10 python -m pip install --upgrade pip poetry
```

### Fix hash mismatch errors
```bash
rm -fr ~/Library/Caches/pypoetry/
# or
poetry cache clear . --all
```

### Show dependency tree
```bash
poetry show --tree
```

### Monorepo local package
```toml
# pyproject.toml
[tool.poetry]
packages = [{ include = "mypackage" }]
```

---

## pyenv

```bash
# Set local Python version
pyenv local 3.10

# Create venv with specific version
pyenv exec python -m venv .venv
source .venv/bin/activate
```

---

## pip

### Download packages for offline install
```bash
pip download --only-binary :all: --no-deps --dest ./packages package-name
```

### Show package dependencies
```bash
pip show package-name | grep ^Requires | sed 's/^Requires: //' | sed 's/,/\n/g'
```

### Export requirements from Poetry
```bash
python -m poetry export -f requirements.txt --output requirements.txt
```

---

## Databricks

### Get notebook name
```python
notebook_name = dbutils.notebook.entry_point.getDbutils().notebook().getContext().notebookPath().get().split("/")[-1]
```

### Get all widget values
```python
bindings = dbutils.notebook.entry_point.getCurrentBindings()
```

### Mount Azure storage
```python
dbutils.fs.mount(
  source=f"abfss://{container}@{storage}.dfs.core.windows.net/",
  mount_point="/mnt/mount-point",
  extra_configs={
    f"fs.azure.account.oauth2.client.id.{storage}.dfs.core.windows.net": client_id,
    f"fs.azure.account.oauth2.client.secret.{storage}.dfs.core.windows.net": client_secret,
    f"fs.azure.account.oauth2.client.endpoint.{storage}.dfs.core.windows.net": f"https://login.microsoftonline.com/{tenant_id}/oauth2/token"
  }
)
```

### Calculate folder size on DBFS
```python
def get_folder_size(path):
    total = 0
    for f in dbutils.fs.ls(path):
        if f.isDir():
            total += get_folder_size(f.path)
        else:
            total += f.size
    return total
```

### Install package on all worker nodes
```python
def install_on_workers(package_path):
    import subprocess
    def install(iterator):
        subprocess.run(["pip", "install", package_path], check=True)
        yield 1

    sc.parallelize(range(100), 100).mapPartitions(install).collect()
```

---

## Logging

### Configure notebook logging
```python
import logging
from os import environ

logger = logging.getLogger(__name__)
logger.setLevel(environ.get('LOGLEVEL', 'WARNING'))
```

### Flush handlers (ensure logs ship)
```python
for handler in logger.handlers:
    handler.acquire()
    handler.flush()
    handler.release()
```

---

## Database

### Always close connections (prevent locks)
```python
try:
    cursor = conn.cursor()
    cursor.execute(query)
    result = cursor.fetchall()
finally:
    cursor.close()
    conn.close()
```

---

## Testing

### Run all tests (not individual files)
```bash
poetry run pytest tests/unit -v
poetry run pytest tests/integration -v
```

---

## Fixes

### protobuf "Descriptors cannot be created directly"
```bash
# Downgrade protobuf
pip install protobuf==3.17.3
# Or set environment variable
export PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION=python
```

### pg_config not found (psycopg2)
```bash
apt update && apt install -y build-essential libpq-dev python3-dev
```

### matplotlib freetype dependency
```bash
apt-get update && apt-get install -y libfreetype6-dev
```

### virtualenv CPython2macOsFramework error
```bash
pip uninstall virtualenv
pip install virtualenv
```

---

## Related

- [[Bash Snippets]] - Shell scripting
- [[Database Snippets]] - PostgreSQL patterns
