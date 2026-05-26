#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REMOTE_NAME="${REMOTE_NAME:-origin}"
PRIMARY_BRANCHES=(main dev feat fix archive release)

run_git() {
  git -C "$ROOT_DIR" "$@"
}

ensure_repo() {
  run_git rev-parse --is-inside-work-tree >/dev/null
}

ensure_clean_enough() {
  if [[ -n "$(run_git status --porcelain)" ]]; then
    echo "Working tree is not clean. Commit or stash changes first." >&2
    exit 1
  fi
}

ensure_branch_exists() {
  local branch="$1"
  if ! run_git show-ref --verify --quiet "refs/heads/$branch"; then
    run_git branch "$branch" main
  fi
}

sync_main_from_remote() {
  run_git checkout main >/dev/null
  if run_git show-ref --verify --quiet "refs/remotes/$REMOTE_NAME/main"; then
    if run_git merge-base --is-ancestor "$REMOTE_NAME/main" main 2>/dev/null; then
      run_git pull --ff-only "$REMOTE_NAME" main
    else
      run_git merge --no-edit --allow-unrelated-histories "$REMOTE_NAME/main"
    fi
  fi
}

sync_branch_to_remote() {
  local branch="$1"
  run_git checkout "$branch" >/dev/null
  if run_git show-ref --verify --quiet "refs/remotes/$REMOTE_NAME/$branch"; then
    run_git pull --ff-only "$REMOTE_NAME" "$branch"
  else
    run_git push -u "$REMOTE_NAME" "$branch"
  fi
}

cmd_setup() {
  ensure_repo
  run_git fetch "$REMOTE_NAME" --prune

  sync_main_from_remote

  for branch in "${PRIMARY_BRANCHES[@]:1}"; do
    ensure_branch_exists "$branch"
  done

  for branch in dev feat fix archive release; do
    run_git checkout "$branch" >/dev/null
    run_git merge --ff-only main || run_git merge --no-edit main
  done

  run_git checkout main >/dev/null
}

cmd_record() {
  ensure_repo
  local message="$1"
  shift
  if [[ "$#" -gt 0 ]]; then
    run_git add -- "$@"
  else
    run_git add -A
  fi
  if [[ -z "$(run_git diff --cached --name-only)" ]]; then
    echo "No staged changes to commit." >&2
    exit 1
  fi
  run_git commit -m "$message"
}

cmd_start() {
  ensure_repo
  local lane="$1"
  local slug="$2"
  local base_branch

  case "$lane" in
    feat|feature) base_branch="feat" ;;
    fix|bugfix) base_branch="fix" ;;
    *) echo "Unknown lane '$lane'. Use feat or fix." >&2; exit 1 ;;
  esac

  ensure_branch_exists "$base_branch"
  local request_branch="request/${slug}"
  run_git checkout "$base_branch" >/dev/null
  run_git checkout -b "$request_branch"
  echo "$request_branch"
}

cmd_finish() {
  ensure_repo
  local current_branch
  current_branch="$(run_git branch --show-current)"

  if [[ "$current_branch" != request/* ]]; then
    echo "Finish must run from a request/* branch." >&2
    exit 1
  fi

  for branch in archive release; do
    ensure_branch_exists "$branch"
    run_git checkout "$branch" >/dev/null
    run_git merge --no-ff --no-edit "$current_branch"
  done

  run_git checkout release >/dev/null
  run_git push -u "$REMOTE_NAME" release

  for branch in main dev feat fix archive; do
    ensure_branch_exists "$branch"
    run_git checkout "$branch" >/dev/null
    if run_git show-ref --verify --quiet "refs/remotes/$REMOTE_NAME/$branch"; then
      run_git pull --ff-only "$REMOTE_NAME" "$branch" || true
    fi
    run_git push -u "$REMOTE_NAME" "$branch"
  done

  run_git checkout "$current_branch" >/dev/null
}

cmd_sync() {
  ensure_repo
  run_git fetch "$REMOTE_NAME" --prune

  sync_main_from_remote

  for branch in dev feat fix; do
    ensure_branch_exists "$branch"
    run_git checkout "$branch" >/dev/null
    run_git merge --ff-only main || run_git merge --no-edit main
  done

  for branch in archive release; do
    ensure_branch_exists "$branch"
    sync_branch_to_remote "$branch"
  done

  for branch in main dev feat fix; do
    sync_branch_to_remote "$branch"
  done
}

cmd_self_test() {
  ensure_repo
  run_git fetch "$REMOTE_NAME" --prune >/dev/null
  for branch in "${PRIMARY_BRANCHES[@]}"; do
    ensure_branch_exists "$branch"
  done
  echo "Git flow self-test passed."
}

main() {
  local command="${1:-}"
  case "$command" in
    setup) shift; cmd_setup "$@" ;;
    record) shift; cmd_record "$@" ;;
    start) shift; cmd_start "$@" ;;
    finish) shift; cmd_finish "$@" ;;
    sync) shift; cmd_sync "$@" ;;
    self-test) shift; cmd_self_test "$@" ;;
    *)
      cat <<'EOF'
Usage:
  scripts/git-flow.sh setup
  scripts/git-flow.sh record "commit message"
  scripts/git-flow.sh start <feat|fix> <request-slug>
  scripts/git-flow.sh finish
  scripts/git-flow.sh sync
  scripts/git-flow.sh self-test
EOF
      exit 1
      ;;
  esac
}

main "$@"