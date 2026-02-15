# Database Snippets

PostgreSQL queries, administration, and patterns.

---

## Database Size

### Get database size
```sql
SELECT pg_size_pretty(pg_database_size('database_name'));
```

### Get table sizes
```sql
SELECT
  relname as table_name,
  pg_size_pretty(pg_total_relation_size(relid)) as total_size
FROM pg_catalog.pg_statio_user_tables
ORDER BY pg_total_relation_size(relid) DESC;
```

### Get schema sizes
```sql
SELECT
  schemaname,
  pg_size_pretty(sum(pg_total_relation_size(relid))) as size
FROM pg_catalog.pg_statio_user_tables
GROUP BY schemaname
ORDER BY sum(pg_total_relation_size(relid)) DESC;
```

---

## Locks & Connections

### Find locked tables
```sql
SELECT * FROM pg_locks WHERE relation = 'table_name'::regclass;
```

### Kill specific connection
```sql
SELECT pg_terminate_backend(pid);
```

### Kill all connections to database
```sql
SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE datname = 'database_name' AND pid <> pg_backend_pid();
```

### View active connections
```sql
SELECT pid, usename, application_name, client_addr, state, query
FROM pg_stat_activity
WHERE state != 'idle'
ORDER BY query_start;
```

---

## Permissions

### Grant schema access
```sql
GRANT USAGE ON SCHEMA myschema TO myuser;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA myschema TO myuser;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA myschema TO myuser;
```

### Fix "must be member of role" error
```sql
GRANT target_role TO CURRENT_USER;
```

### Make user owner of all tables in schema
```sql
DO $$
DECLARE r RECORD;
BEGIN
  FOR r IN SELECT tablename FROM pg_tables WHERE schemaname = 'myschema'
  LOOP
    EXECUTE 'ALTER TABLE myschema.' || r.tablename || ' OWNER TO newowner';
  END LOOP;
END $$;
```

---

## Batch Operations

### Loop update with PL/pgSQL
```sql
DO $$
DECLARE
  r RECORD;
BEGIN
  FOR r IN SELECT id FROM mytable WHERE condition LOOP
    UPDATE mytable SET column = 'value' WHERE id = r.id;
  END LOOP;
END $$;
```

---

## psql Commands

### Connect with environment variables
```bash
export PGHOST=localhost
export PGPORT=5432
export PGUSER=username
export PGPASSWORD=password
export PGDATABASE=database_name
psql
```

### Run query from command line
```bash
psql -c "SELECT * FROM table LIMIT 10"
```

### Execute file
```bash
psql -f script.sql
```

### Output to file (CSV)
```bash
psql -c "\copy (SELECT * FROM table) TO 'output.csv' CSV HEADER"
```

---

## Application Insights (Kusto-style)

### Query custom events with typed dimensions
```sql
customEvents
| where name == "Model generated"
| project
    timestamp,
    model_name = tostring(customDimensions['model_name']),
    model_id = tostring(customDimensions['model_id'])
| order by timestamp desc
```

### Sub-query pattern for correlated data
```sql
let recentOperations = toscalar(
   requests
   | where url has "runOptimisation"
   | summarize make_set(operation_Id, 100));
requests | where operation_Id in (recentOperations)
| union dependencies | where operation_Id in (recentOperations)
| union traces | where operation_Id in (recentOperations)
```

---

## Databricks SQL

### Get table size
```sql
DESCRIBE DETAIL catalog.schema.table
-- Look at sizeInBytes column
```

### Query Delta table history
```sql
DESCRIBE HISTORY catalog.schema.table
```

---

## Vector Search (pgvector)

### Create extension
```sql
CREATE EXTENSION IF NOT EXISTS vector;
```

### Create table with vector column
```sql
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  content TEXT,
  embedding vector(1536)
);
```

### Similarity search
```sql
SELECT id, content, 1 - (embedding <=> $1) as similarity
FROM items
ORDER BY embedding <=> $1
LIMIT 10;
```

### Hybrid search (vector + keyword + reranking)
```sql
WITH vector_results AS (
  SELECT id, content, 1 - (embedding <=> $1) as vector_score
  FROM items
  ORDER BY embedding <=> $1
  LIMIT 100
),
keyword_results AS (
  SELECT id, content, ts_rank(to_tsvector(content), plainto_tsquery($2)) as keyword_score
  FROM items
  WHERE to_tsvector(content) @@ plainto_tsquery($2)
)
SELECT COALESCE(v.id, k.id) as id,
       COALESCE(v.content, k.content) as content,
       COALESCE(v.vector_score, 0) * 0.7 + COALESCE(k.keyword_score, 0) * 0.3 as combined_score
FROM vector_results v
FULL OUTER JOIN keyword_results k ON v.id = k.id
ORDER BY combined_score DESC
LIMIT 20;
```

---

## Related

- [[Python Snippets]] - Database connection patterns
- [[Bash Snippets]] - psql helpers
