# Supply Chain Security

Protecting your build pipeline, dependencies, and CI/CD from attacks that compromise packages upstream of your code.

---

## The Mini Shai-Hulud Attack (May 2026)

A major supply chain attack targeting the NPM registry through GitHub Actions, demonstrating how a single CI misconfiguration can cascade across hundreds of packages.

### Attack Chain

1. **Entry point:** Attacker exploited `pull_request_target` trigger in GitHub Actions. This trigger runs PR code *in the context of the main repo*, granting access to its secrets and cache — even from a fork's PR.
2. **Pivot:** Malware poisoned the CI cache and stole NPM publish tokens from the TanStack project.
3. **Spread:** Automatically published 84 compromised TanStack packages. "Wormed" through other maintainers' systems, eventually affecting 169+ packages across NPM and PyPI.
4. **Payload:** Embedded itself in VS Code, stole GitHub tokens, and included a "war crime mode" — a dead man's switch that wiped the user's root directory if the stolen token expired.

### Key Lesson: `pull_request_target` Is Dangerous

`pull_request_target` runs workflows from the *base branch* but in the *context of the base repo* — meaning a forked PR can access secrets. This is by design (GitHub documents it), but it's a footgun that many projects misconfigure.

**Rule:** Never use `pull_request_target` with `actions/checkout` that checks out the PR's code. If you must use it, ensure the workflow never executes untrusted code from the PR.

```yaml
# DANGEROUS — gives forked PR access to repo secrets
on:
  pull_request_target:
    # This runs in main repo context with secrets available
    # If you checkout the PR code, the attacker's code runs with your secrets

# SAFE — only runs code from your own repo
on:
  pull_request:
    # This runs in the fork's context — no access to base repo secrets
```

---

## PNPM Supply Chain Protections (v11+)

Three features in PNPM 11 designed to mitigate supply chain attacks. All should be configured in `.npmrc` or `pnpm-workspace.yaml`.

### 1. Minimum Release Age

Refuse any package published less than a configurable window (e.g. 24 hours). Gives the security community time to detect and pull malicious packages before they reach your machine.

```ini
# .npmrc
minimum-release-age=1d
```

### 2. Block Exotic Sub-Dependencies

Prevents transitive dependencies from pointing to random Git repos or external URLs. Forces all code to come through the verified registry.

```ini
# .npmrc
block-exotic-subdependencies=true
```

### 3. Approved Builds (Script Blocking)

Most malware executes via `postinstall` scripts. PNPM 11 blocks all install scripts by default. You manually whitelist trusted packages.

```ini
# .npmrc
side-effects-cache=true
ignore-scripts=true

# Whitelist specific packages that need install scripts
# pnpm-workspace.yaml or package.json
```

### Summary

| Feature | What It Does | Threat Mitigated |
|---------|-------------|-----------------|
| **Release Age** | Rejects very new packages | Zero-day malicious publishes |
| **Exotic Blocks** | Blocks non-registry URLs in transitive deps | Smuggling code from unverified sources |
| **Approved Builds** | Disables install scripts by default | Malware executing during `npm install` |

---

## General Principles

- **Pin dependencies by lockfile, review diffs on update.** Don't blindly `pnpm update` — review what changed.
- **Minimise your dependency surface.** Every dependency is an attack vector. Fewer deps = smaller surface.
- **Audit CI secrets access.** Which workflows can access publish tokens? Can a forked PR trigger them?
- **Use scoped tokens with expiry.** NPM granular access tokens with short TTLs limit blast radius.
- **Monitor for unusual publishes.** Tools like Socket.dev flag suspicious package updates.

---

## See Also

- [[Developer Tools]] — pnpm, security scanners (Trivy, Semgrep)
- [[Docker Snippets]] — Container security (base image pinning, BuildKit cache mounts)
- [[Git Snippets]] — Git workflow patterns

## Sources

- [Fireship — Mini Shai-Hulud Supply Chain Attack (YouTube)](http://www.youtube.com/watch?v=gwTQLZSIlsU)

---

*Created [[2026-04-14]] — Mini Shai-Hulud attack analysis and PNPM 11 supply chain protections*
