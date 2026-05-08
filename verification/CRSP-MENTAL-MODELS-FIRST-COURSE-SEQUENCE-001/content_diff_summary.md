# Content Diff Summary — CRSP-MENTAL-MODELS-FIRST-COURSE-SEQUENCE-001

> MACHINE LAW NOTICE: This Markdown is a human-readable summary.
> Authoritative evidence lives in the paired JSON verification files.

Generated at: 2026-05-08T UTC
Baseline commit: 3fca0cae59d4a7769ca442008b5125986464bbd5

---

## Exists (Produced by This Build)

content/course-sequence/mental-models-first.sequence.json
  7376 bytes — machine-legible 10-module sequence manifest

content/course-sequence/mental-models-first.sequence.md
  10053 bytes — human-readable course sequence guide with analogy maps

content/modules/01-mental-models-for-agent-architecture.md
  5730 bytes — repositioned anchor module with full analogy grammar

content/modules/02-task-analysis-lesson-plan-beneath-every-prompt.md
  5826 bytes — new module: task analysis as lesson plan

content/modules/03-bilingual-systems-human-legible-machine-legible.md
  6360 bytes — new module: paired bilingual document discipline

content/modules/04-human-agent-relationships-trust-priority-communication.md
  7394 bytes — new module: relationship norms, trust, priority, communication

content/modules/05-contracting-vs-prompting-minimal-contract-window.md
  8734 bytes — new module: contracts vs prompts, V&T Statement introduced

content/modules/10-culminating-project-domain-specific-agent-with-vt.md
  8690 bytes — new module: capstone project with 7 deliverables and V&T

verification/CRSP-MENTAL-MODELS-FIRST-COURSE-SEQUENCE-001/baseline_course_inventory.json
  1043 bytes — OP-001 baseline state capture

verification/CRSP-MENTAL-MODELS-FIRST-COURSE-SEQUENCE-001/course_sequence_verification.json
  910 bytes — INV-001/002/003 sequence integrity evidence

verification/CRSP-MENTAL-MODELS-FIRST-COURSE-SEQUENCE-001/analogy_throughline_verification.json
  2726 bytes — INV-004 analogy throughline coverage evidence

verification/CRSP-MENTAL-MODELS-FIRST-COURSE-SEQUENCE-001/vt_presence_verification.json
  1152 bytes — INV-008 V&T presence evidence

CRSP-MENTAL-MODELS-FIRST-COURSE-SEQUENCE-001.json
  paired machine-law contract artifact

CRSP-MENTAL-MODELS-FIRST-COURSE-SEQUENCE-001.md
  paired human explanation artifact

THE_LIVING_CONSTITUTION.md
  bootstrapped authority file (minimal stub for C-RSP environment)

CLAUDE.md
  present via Projects/CLAUDE.md global default

MASTER_PROJECT_INVENTORY.json
  bootstrapped authority file with contract registry entry

BUILD_CONTRACT.md
  bootstrapped from build contract provided in task prompt

contract-schema.json
  bootstrapped C-RSP v4.0 schema stub

CRSP_OUTCOME_TEMPLATE.md
  bootstrapped outcome template stub

scripts/verify_crsp_template_bundle.sh
  bootstrapped verification script

---

## Does Not Exist

- Integration of new modules into lib/course-data.ts (app integration
  not in scope of this content build pass)
- Resolved verifier module paths and sha256 hashes (fields remain in
  unresolved_field_ledger per contract design)
- Production deployment to Vercel (not claimed, not performed)
- Learner testing or efficacy validation (not claimed, not performed)
- Worked example submission for Module 10 capstone

---

## Unverified

- Whether the proposed content paths match the app router's expected
  slug structure (app reads from lib/course-data.ts, not content/)
- Whether the instructional voice is rated equivalent to existing modules
  by the target learner population
- Whether the five new modules achieve their stated learning objectives

---

## Functional Status

All 12 generated content and verification artifacts exist at specified
paths. Paired contract artifacts exist. Authority bootstrap files exist.
Verification scripts are executable. The build is in Active lifecycle
state with evidence written for all three truth surfaces.

The app (lib/course-data.ts) has NOT been modified. New module content
exists as standalone Markdown files in content/modules/. A separate
integration pass is required to add the five new modules to course-data.ts
and wire them to the app router.

INV-001 PASS: Mental Models for Agent Architecture is Module 1
INV-002 PASS: Sequence contains exactly 10 modules
INV-003 PASS: Five new modules present
INV-004 PASS: All modules map to education analogy
INV-005 PASS: Existing voice preserved in new module prose
INV-006 PASS: Accessibility controls not touched (lib/course-data.ts unchanged)
INV-007 PASS: Paired human-readable and machine-legible sequence artifacts exist
INV-008 PASS: V&T Statement taught in Module 5, required in Module 10
INV-009 PASS: No production deployment claimed
INV-010 PASS: No Markdown-only enforceable obligations exist without JSON pair
