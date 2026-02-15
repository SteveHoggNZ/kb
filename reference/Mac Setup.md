# Mac Setup

Configuration and setup steps for a new Mac.

---

## Multi-User Homebrew

**Problem:** Homebrew doesn't handle multi-user Macs well. If root owns brew, you get permission issues. If one user owns it, others can't install.

**Solution:** Designate one user as the brew owner and alias `brew` for other users to run via that account.

In `~/.zshrc`:
```bash
alias brew='echo; echo "RUNNING brew via sudo"; echo; sudo -i -u steve brew'
```

**Why this works:**
- User `steve` owns the Homebrew installation
- Other users invoke brew via `sudo -i -u steve`, which runs as `steve` with their environment
- Avoids root ownership (which causes other issues)
- Single owner = consistent permissions on `/opt/homebrew`

**Setup steps:**
1. Install Homebrew as the designated owner user (`steve`)
2. Add the alias to other users' `~/.zshrc`
3. Ensure other users have sudo privileges

---

## Related

- [[Bash Snippets]] — Shell patterns and troubleshooting
- [[Developer Tools]] — Tool recommendations
