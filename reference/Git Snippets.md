# Git Snippets

Version control commands and workflow patterns.

---

## History & Diffs

### Full history including deletions
```bash
git log --full-history -- path/to/file
```

### Diff specific file pattern
```bash
git diff HEAD~1 -- '**/package.json'
```

### Show file at specific commit
```bash
git --no-pager show HEAD~1:./config.yaml
```

### Diff with no pager, minimal context
```bash
git -c pager.diff=false diff HEAD~1 --unified=0
```

### Compare branches
```bash
git log main..feature-branch --oneline
git diff main...feature-branch
```

---

## Tags

### Get semantic version tags (sorted)
```bash
git tag --merged | grep -E '^\d+\.\d+\.\d+' | sort -V -r
```

### Force update tag
```bash
git tag -d 0.0.21 && git tag 0.0.21 && git push --force origin 0.0.21
```

### Delete remote tag
```bash
git push origin --delete tag-name
```

---

## Branches

### Clean up merged branch
```bash
alias branchclean='CURRENT_BRANCH=$(git branch | grep "^*" | awk '\''{print $2}'\''); \
  [[ ! -z "$CURRENT_BRANCH" ]] && [[ "$CURRENT_BRANCH" != "main" ]] && \
  git checkout main && git pull && git branch -d $CURRENT_BRANCH'
```

### Delete all merged branches
```bash
git branch --merged main | grep -v "main" | xargs git branch -d
```

### Unshallow clone (for CI)
```bash
git fetch --unshallow origin || git fetch || true
```

---

## Remotes

### Add secondary remote and push
```bash
git remote add secondary git@host.com:org/repo.git
git push secondary main --force
```

### Mirror to Azure DevOps
```bash
# Fix "src refspec master does not match any"
git fetch --unshallow origin || git fetch || true
git push --mirror https://dev.azure.com/org/project/_git/repo
```

---

## Stash

### Stash with message
```bash
git stash push -m "work in progress"
```

### Apply specific stash
```bash
git stash list
git stash apply stash@{2}
```

---

## Parsing Git Output

### Use Unicode separators for reliable parsing
```bash
# In scripts, use unusual separators that won't appear in commit messages
git log --format="%H§%s§%an" | while IFS='§' read hash subject author; do
  echo "Hash: $hash, Subject: $subject, Author: $author"
done
```

---

## Useful Configs

### Auto-prune on fetch
```bash
git config --global fetch.prune true
```

### Default branch name
```bash
git config --global init.defaultBranch main
```

### Rebase by default on pull
```bash
git config --global pull.rebase true
```

---

## Related

- [[Bash Snippets]] - Shell scripting
- [[GitLab CI Reference]] - CI/CD pipelines
