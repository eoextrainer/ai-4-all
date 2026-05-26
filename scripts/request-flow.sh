#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
FLOW_SCRIPT="$ROOT_DIR/scripts/git-flow.sh"

main() {
  local command="${1:-}"
  shift || true

  case "$command" in
    feat)
      exec "$FLOW_SCRIPT" start feat "$@"
      ;;
    fix)
      exec "$FLOW_SCRIPT" start fix "$@"
      ;;
    setup|record|finish|sync|self-test)
      exec "$FLOW_SCRIPT" "$command" "$@"
      ;;
    help|--help|-h|"")
      cat <<'EOF'
Usage:
  scripts/request-flow.sh feat <request-slug>
  scripts/request-flow.sh fix <request-slug>
  scripts/request-flow.sh record "commit message" [files...]
  scripts/request-flow.sh finish
  scripts/request-flow.sh setup
  scripts/request-flow.sh sync
  scripts/request-flow.sh self-test
EOF
      ;;
    *)
      echo "Unknown command '$command'. Run scripts/request-flow.sh help." >&2
      exit 1
      ;;
  esac
}

main "$@"