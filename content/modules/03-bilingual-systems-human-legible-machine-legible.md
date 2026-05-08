# Module 03: Bilingual Systems — Human-Legible and Machine-Legible Instruction
<!-- status: new_module | module_number: 3 -->
<!-- education_analogy: syllabus_prose, grade_rubric_grid, paired_curriculum, translation_discipline -->

## Two Languages in Every Classroom

A course syllabus has two parts that most students never notice are
different things. One part is the prose description a student reads to
understand the course: what it covers, why it matters, what the
experience will feel like. The other part is the grading grid the
registrar's system processes: a structured table of weights and codes
that determine how credit is awarded.

Both say similar things. Neither alone is sufficient. The prose is for
humans who need context and intention. The grid is for systems that need
precision and enforceability. The discipline of keeping them synchronized
is what makes the course contract valid.

Your instruction artifacts require the same duality.

## Human-Legible vs. Machine-Legible

Human-legible instruction is prose written for a person who brings
context, judgment, and the ability to infer intent. It can contain
qualifications, examples, analogies, and nuance. A practitioner reading
it understands the spirit of the rule even when edge cases are not
addressed.

Machine-legible instruction is structured for a system that executes
exactly what is specified and nothing more. It must be unambiguous,
complete for all cases it governs, and parseable without human judgment.
A JSON schema, a list of predicates, a YAML configuration block—these are
machine-legible. They cannot be misread because there is no reading:
there is only parsing and evaluation.

The failure mode of using only prose: a critical obligation exists only
in a document that a human must interpret. Two humans interpret it
differently. Neither interpretation can be proven wrong. Enforcement is
impossible.

The failure mode of using only schema: the system enforces rules that no
practitioner can audit without a spec decoder. The intent is lost. Edge
cases that the schema authors never anticipated are handled incorrectly
because there is no prose authority to consult.

The solution is a bilingual document system.

## The Paired Document Pattern

A bilingual document pair consists of exactly two artifacts with the
same basename and different extensions:

```
instruction.md   <- human-legible prose version
instruction.json <- machine-legible schema version
```

Every obligation in the JSON must have a corresponding explanation in
the Markdown. Every explanation in the Markdown that carries an
enforceable obligation must have a corresponding rule in the JSON. The
Markdown disclaimer at the top of every human-readable artifact says it
plainly:

  Any obligation stated in this Markdown but absent from the paired JSON
  is non-authoritative and shall not be enforced.

This disclaimer does not diminish the Markdown's value. It clarifies its
role. The Markdown explains. The JSON governs.

## When Each Format Is Required

Use prose only when:
- Explaining context, intent, or rationale
- Describing behavior that requires human judgment to evaluate
- Communicating with audiences who need meaning, not just rules

Use schema only when:
- Encoding obligations that must be enforced programmatically
- Defining acceptance criteria against which artifacts are validated
- Creating registries, inventories, or manifests that tools will consume

Use a paired system when:
- The instruction carries enforceable obligations AND needs human understanding
- The artifact will be read by both practitioners and systems
- Auditability requires both a human-readable rationale and a machine-parseable record

## The Synchronization Discipline

Bilingual documents drift. A practitioner updates the Markdown to clarify
an edge case and forgets to update the JSON. A schema update adds a new
required field but the Markdown still describes the old behavior. Drift
produces disagreement between the two layers, and when disagreement
exists, one of them must be authoritative. The contract declares which
one: the JSON governs.

Preventing drift requires treating the pair as an atomic unit. Updating
one means updating both. Code review must check both files. Version tags
must apply to both. A Markdown change without a JSON change review is
a red flag.

## Applying This to Agent Instruction

Every module you write for an agent-based system has two audiences: the
practitioner who maintains it and the system that enforces it. Write for
both, simultaneously, in a paired bilingual document. Your task analysis
becomes both a prose explanation of what the agent must do and a JSON
object that a verifier can check. Your evaluation rubric becomes both a
prose description of quality and a machine-readable checklist. Your
Contract Window, introduced in the next module, is by definition a
bilingual artifact—its machine law layer and human explanation layer
serve the same contract from two different angles.

## Learning Objectives

- Distinguish human-legible from machine-legible instruction by structural properties
- Design paired document systems where prose and schema correspond exactly
- Apply the Markdown disclaimer correctly in every human-readable artifact
- Identify when machine-legibility is required for enforceability

## Key Takeaways

- The syllabus is human-legible; the grading grid is machine-legible; both are required
- Every enforceable obligation must exist in schema, not only in prose
- Prose explains. JSON governs.
- Bilingual documents drift unless treated as atomic units in review and versioning
- The Markdown disclaimer does not weaken the prose—it clarifies its authority role

## Practice Prompts

1. Take any single-format Markdown instruction document you have written
   or seen. Write the paired JSON schema. Identify which obligations were
   implicit in the prose and required a judgment call to encode.

2. A colleague updates the Markdown description of an acceptance criterion
   but does not update the corresponding JSON predicate. What is the
   governance consequence? What is the practical consequence?

3. Design a bilingual instruction pair for a simple data-cleaning agent:
   one prose description of what the agent must do, and one JSON schema
   encoding the same rules as machine-evaluable predicates.
