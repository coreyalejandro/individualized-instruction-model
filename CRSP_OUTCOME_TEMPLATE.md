# CRSP Outcome Template v4.0

> This template governs the structure of all C-RSP outcome documents
> produced by contracts governed by THE_LIVING_CONSTITUTION.md.

## Required Sections

Every C-RSP outcome document must contain:

1. CONTRACT_ID: The contract that produced this outcome
2. EXECUTION_TIMESTAMP: UTC ISO 8601
3. LIFECYCLE_STATE: The state at time of outcome recording
4. OPERATIONS_EXECUTED: List of step_ids executed
5. ARTIFACTS_PRODUCED: List of generated paths with sizes
6. INVARIANTS_CHECKED: Each invariant with PASS or FAIL
7. HALT_CONDITIONS_EVALUATED: Any triggered halts
8. V&T_STATEMENT: Four-category truth surface

## V&T Statement Format

EXISTS:
  [list artifacts and facts confirmed to exist with paths]

DOES NOT EXIST:
  [list artifacts and outcomes that were not produced]

UNVERIFIED:
  [list claims that cannot be confirmed from available evidence]

FUNCTIONAL STATUS:
  [single-sentence summary of execution outcome and system state]
