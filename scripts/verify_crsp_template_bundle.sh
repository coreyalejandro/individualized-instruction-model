#!/usr/bin/env bash
# verify_crsp_template_bundle.sh
# C-RSP v4.0 — Bundle verification script
# Project: individualized-instruction-model

set -e

PROJ_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ERRORS=0

check_file() {
  local path="$PROJ_ROOT/$1"
  if [ -f "$path" ]; then
    echo "OK  $1"
  else
    echo "MISSING  $1"
    ERRORS=$((ERRORS + 1))
  fi
}

echo "=== C-RSP Template Bundle Verification ==="
echo "Project root: $PROJ_ROOT"
echo ""

echo "--- Authority Files ---"
check_file "THE_LIVING_CONSTITUTION.md"
check_file "CLAUDE.md"
check_file "MASTER_PROJECT_INVENTORY.json"
check_file "BUILD_CONTRACT.md"
check_file "contract-schema.json"
check_file "CRSP_OUTCOME_TEMPLATE.md"
check_file "scripts/verify_crsp_template_bundle.sh"

echo ""
echo "--- Contract Artifacts ---"
check_file "CRSP-MENTAL-MODELS-FIRST-COURSE-SEQUENCE-001.json"
check_file "CRSP-MENTAL-MODELS-FIRST-COURSE-SEQUENCE-001.md"

echo ""
echo "--- Content Artifacts ---"
check_file "content/course-sequence/mental-models-first.sequence.json"
check_file "content/course-sequence/mental-models-first.sequence.md"
check_file "content/modules/01-mental-models-for-agent-architecture.md"
check_file "content/modules/02-task-analysis-lesson-plan-beneath-every-prompt.md"
check_file "content/modules/03-bilingual-systems-human-legible-machine-legible.md"
check_file "content/modules/04-human-agent-relationships-trust-priority-communication.md"
check_file "content/modules/05-contracting-vs-prompting-minimal-contract-window.md"
check_file "content/modules/10-culminating-project-domain-specific-agent-with-vt.md"

echo ""
echo "--- Evidence Files ---"
check_file "verification/CRSP-MENTAL-MODELS-FIRST-COURSE-SEQUENCE-001/baseline_course_inventory.json"
check_file "verification/CRSP-MENTAL-MODELS-FIRST-COURSE-SEQUENCE-001/course_sequence_verification.json"
check_file "verification/CRSP-MENTAL-MODELS-FIRST-COURSE-SEQUENCE-001/analogy_throughline_verification.json"
check_file "verification/CRSP-MENTAL-MODELS-FIRST-COURSE-SEQUENCE-001/vt_presence_verification.json"
check_file "verification/CRSP-MENTAL-MODELS-FIRST-COURSE-SEQUENCE-001/content_diff_summary.md"
check_file "verification/CRSP-MENTAL-MODELS-FIRST-COURSE-SEQUENCE-001/lifecycle.jsonl"

echo ""
if [ "$ERRORS" -eq 0 ]; then
  echo "BUNDLE VERIFICATION: PASS (0 missing files)"
  exit 0
else
  echo "BUNDLE VERIFICATION: FAIL ($ERRORS missing files)"
  exit 1
fi
