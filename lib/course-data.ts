export interface Module {
  id: number
  slug: string
  title: string
  description: string
  duration: string
  concepts: string[]
  transcript: string
  learningObjectives: string[]
  keyTakeaways: string[]
}

export const modules: Module[] = [
  {
    id: 1,
    slug: "mental-models",
    title: "Mental Models for Agent Architecture",
    description: "Translate abstract AI agent concepts into intuitive frameworks using familiar analogies that accelerate understanding and improve system design.",
    duration: "10 min",
    concepts: ["Cognitive Frameworks", "System Analogies", "Architecture Patterns", "Conceptual Mapping"],
    learningObjectives: [
      "Map AI agent components to familiar educational constructs",
      "Use the Teacher-Student-Classroom model for system design",
      "Develop intuition for context window management"
    ],
    keyTakeaways: [
      "Prompts and rubrics function as the 'teacher' providing instruction",
      "The context window is your 'classroom' with finite capacity",
      "Tool calls are 'homework'—work done outside the main execution context"
    ],
    transcript: `The AI agent ecosystem is drowning in jargon. Orchestration layers, tool-augmented generation, retrieval-augmented pipelines, multi-agent coordination protocols—the terminology creates a barrier that obscures fundamentally simple concepts. Effective practitioners cut through this noise by building robust mental models that translate abstract architectures into intuitive frameworks.

The most powerful mental model for agent systems is the educational analogy. Consider a traditional classroom setting. You have a teacher, students, textbooks, the physical classroom space, homework assignments, and report cards. Each of these maps directly to agent architecture components, and understanding the mapping accelerates both learning and system design.

The Teacher represents your prompt engineering layer combined with your evaluation rubrics. Just as a teacher provides instruction, sets expectations, and defines success criteria, your prompts tell the agent what to do and your rubrics define what "good" looks like. A weak teacher produces confused students; a weak prompt produces unpredictable agents. The quality of instruction directly determines the quality of output.

The Student is your model executor—the actual language model performing the work. Students arrive with varying capabilities, prior knowledge, and learning styles. Similarly, different models bring different strengths, knowledge cutoffs, and behavioral tendencies. You cannot teach calculus to a student who hasn't learned algebra; you cannot expect sophisticated reasoning from a model not trained for it.

The Textbook maps to your knowledge base—the reference material available to the system. This might be retrieved documents, embedded context, or fine-tuned knowledge. A comprehensive, well-organized textbook enables better learning; a comprehensive, well-structured knowledge base enables better agent responses. The quality of source material matters enormously.

The Classroom represents your context window. This is perhaps the most critical mapping. A classroom has finite physical capacity—only so many students fit, only so much can be written on the whiteboard. Your context window has finite token capacity—only so much information can be actively considered during generation. Overloading the classroom creates chaos; overloading the context window degrades performance.

Homework represents tool calls. Students complete homework outside of class time, bringing results back for discussion. Agents execute tool calls outside the main generation loop, returning results for incorporation into responses. Homework extends learning beyond classroom walls; tool calls extend agent capabilities beyond pure language modeling.

The Report Card is your golden evaluation—the definitive assessment of performance. Teachers grade against established rubrics; you evaluate agents against predetermined test cases. A report card that says "A+" tells you the student mastered the material; a passing evaluation suite tells you the agent meets production requirements.

This model scales to complex architectures. Multi-agent systems become schools with multiple teachers and cross-classroom collaboration. RAG pipelines become library research projects where students retrieve textbooks before answering questions. Fine-tuning becomes long-term curriculum design that shapes student capabilities over time.

The practical application is immediate. When designing a new agent system, sketch it first using the educational model. Who is the teacher? What's in the textbook? How big is the classroom? What homework is assigned? How will report cards be graded? These intuitive questions map directly to technical decisions about prompts, knowledge bases, context management, tool integration, and evaluation frameworks.

When systems fail, the model provides diagnostic guidance. If outputs are inconsistent, examine the teacher—is the prompt clear and complete? If outputs lack depth, examine the textbook—is the knowledge base sufficient? If outputs truncate or degrade, examine the classroom—is the context window overloaded? The analogy makes debugging intuitive rather than mysterious.

Document your mappings explicitly. Create a reference card for your team that translates project-specific terminology into the educational model. Shared mental models accelerate team communication and reduce misunderstandings.`
  },
  {
    id: 2,
    slug: "task-analysis",
    title: "Task Analysis: The Lesson Plan Beneath Every Prompt",
    description: "Decompose any goal into discrete, sequenced sub-tasks before writing a prompt—because every good teacher writes a lesson plan before walking into the classroom.",
    duration: "10 min",
    concepts: ["Task Decomposition", "Dependency Mapping", "Prompt Scaffolding", "Prerequisite Analysis"],
    learningObjectives: [
      "Decompose any goal into discrete, sequenced, dependency-mapped sub-tasks",
      "Identify task dependencies that must be reflected in prompt structure",
      "Write task analyses that become the scaffold for every prompt"
    ],
    keyTakeaways: [
      "A prompt without a task analysis is a lesson without a lesson plan",
      "Sub-tasks describe work to be performed, not outputs to be received",
      "Dependencies must be explicit or they become silent failure modes"
    ],
    transcript: `Every good teacher enters the classroom having already done invisible work. Before the first sentence is spoken, she has written a lesson plan. She knows what the students need to learn, in what order, and why. She has identified which concepts depend on which. She has anticipated the questions that will arise. She has drawn the map before starting the journey.

Practitioners who skip this step show up to the classroom unprepared. They write prompts that assume knowledge the agent does not have. They issue instructions that skip steps the agent cannot fill in by itself. They produce outputs that technically answered the prompt but missed the actual goal.

Task analysis is the discipline of doing the teacher's preparation work before you write a single word of a prompt.

Task analysis is the structured decomposition of a goal into discrete, sequenced, dependency-mapped sub-tasks. It answers four questions before you touch a prompt: What is the exact terminal state I want to reach? What discrete sub-tasks must be completed to reach it? What is the correct sequence of those sub-tasks? And what does each sub-task require as input from a previous sub-task?

These four questions correspond exactly to what a lesson plan contains: the learning objective, the instructional steps, the sequence, and the prerequisite knowledge checks.

Consider what happens when a teacher jumps to multiplication before confirming students understand addition. The lesson fails—not because the teacher was unclear, but because the prerequisite was missing. Agents fail the same way. A prompt that asks an agent to synthesize a report before grounding it in facts will produce confident-sounding hallucination. A prompt that asks an agent to evaluate quality before defining quality criteria will produce inconsistent scores.

Task analysis forces you to see these dependency failures before they become prompt failures. The agent is not magic. It cannot fill in missing prerequisites any more than a student can do long division without knowing their multiplication tables.

A task analysis is a structured artifact, not a brainstorm. It contains a GOAL—one precise terminal state sentence—followed by SUB-TASKS with at least four entries each stating what must be true at completion, an explicit SEQUENCE, DEPENDENCIES naming each sub-task relationship, and PREREQUISITES listing what the agent must already know or have access to.

This artifact becomes the scaffold for your prompt. The sequence becomes the order of your instructions. The dependencies tell you what context to inject and when. The prerequisites tell you what to include in the knowledge base or context window before execution begins.

When you see the mapping clearly, the lesson plan and the prompt are not two different things—they are the same instruction for two different audiences. The lesson plan is written for yourself. The prompt is written for the agent. The task analysis produces both.

The most common failure mode is writing a task analysis that is actually a list of hoped-for outputs rather than a decomposition of work. "Produce a summary" is an output. "Read each source document, extract the three most significant claims from each, and synthesize across claims into a coherent narrative" is a sub-task decomposition. The first produces unpredictable results. The second constrains the agent's path through the work.`
  },
  {
    id: 3,
    slug: "bilingual-systems",
    title: "Bilingual Systems: Human-Legible and Machine-Legible Instruction",
    description: "Learn when to write prose, when to write schema, and how to maintain paired bilingual document systems where human understanding and machine enforcement never drift apart.",
    duration: "10 min",
    concepts: ["Document Architecture", "Schema Design", "Paired Artifacts", "Enforcement Boundaries"],
    learningObjectives: [
      "Distinguish human-legible from machine-legible instruction by structural properties",
      "Design paired document systems where prose and schema correspond exactly",
      "Identify when machine-legibility is required for enforceability"
    ],
    keyTakeaways: [
      "The syllabus explains; the grading grid governs",
      "Every enforceable obligation must exist in schema, not only in prose",
      "Bilingual documents drift unless treated as atomic units in review and versioning"
    ],
    transcript: `A course syllabus has two parts that most students never notice are different things. One part is the prose description a student reads to understand the course: what it covers, why it matters, what the experience will feel like. The other part is the grading grid the registrar's system processes: a structured table of weights and codes that determine how credit is awarded.

Both say similar things. Neither alone is sufficient. The prose is for humans who need context and intention. The grid is for systems that need precision and enforceability. The discipline of keeping them synchronized is what makes the course contract valid. Your instruction artifacts require the same duality.

Human-legible instruction is prose written for a person who brings context, judgment, and the ability to infer intent. It can contain qualifications, examples, analogies, and nuance. A practitioner reading it understands the spirit of the rule even when edge cases are not addressed.

Machine-legible instruction is structured for a system that executes exactly what is specified and nothing more. It must be unambiguous, complete for all cases it governs, and parseable without human judgment. A JSON schema, a list of predicates, a YAML configuration block—these are machine-legible. They cannot be misread because there is no reading: there is only parsing and evaluation.

The failure mode of using only prose: a critical obligation exists only in a document that a human must interpret. Two humans interpret it differently. Neither interpretation can be proven wrong. Enforcement is impossible. The failure mode of using only schema: the system enforces rules that no practitioner can audit without a spec decoder. The intent is lost. Edge cases are handled incorrectly because there is no prose authority to consult.

A bilingual document pair consists of exactly two artifacts with the same basename and different extensions: an .md human-legible prose version and a .json machine-legible schema version. Every obligation in the JSON must have a corresponding explanation in the Markdown. Every explanation in the Markdown that carries an enforceable obligation must have a corresponding rule in the JSON.

The Markdown disclaimer at the top of every human-readable artifact says it plainly: any obligation stated in this Markdown but absent from the paired JSON is non-authoritative and shall not be enforced. This disclaimer does not diminish the Markdown's value. It clarifies its role. The Markdown explains. The JSON governs.

Use prose only when explaining context, intent, or rationale, or describing behavior that requires human judgment to evaluate. Use schema only when encoding obligations that must be enforced programmatically, defining acceptance criteria against which artifacts are validated, or creating registries and manifests that tools will consume. Use a paired system when the instruction carries enforceable obligations AND needs human understanding.

Bilingual documents drift. A practitioner updates the Markdown to clarify an edge case and forgets to update the JSON. A schema update adds a new required field but the Markdown still describes the old behavior. Preventing drift requires treating the pair as an atomic unit. Updating one means updating both. Code review must check both files. A Markdown change without a JSON change review is a red flag.`
  },
  {
    id: 4,
    slug: "human-agent-relationships",
    title: "Human-Agent Relationships: Trust, Priority, and Communication",
    description: "Every agent interaction is a relationship with norms, expectations, and repair mechanisms—treat it like one.",
    duration: "10 min",
    concepts: ["Relationship Dynamics", "Trust Building", "Priority Ordering", "Communication Repair"],
    learningObjectives: [
      "Recognize the relationship dynamics present in every human-agent interaction",
      "Write agent instructions that establish trust through completeness and priority clarity",
      "Identify communication failures and take responsibility for their repair"
    ],
    keyTakeaways: [
      "Trust is operational: the agent relies on your instructions to be complete and consistent",
      "Priority must be explicit—the agent cannot correctly resolve conflicts without an ordering",
      "Communication failures are the instruction-writer's responsibility to repair first"
    ],
    transcript: `A classroom is not just a room with a teacher and students and a textbook. It is a relationship. The teacher shows up prepared and consistent. The student commits to the work. Both parties share an implicit understanding of what cooperation looks like, what respect looks like, and what happens when communication breaks down. When the relationship works, learning happens. When it breaks down, no amount of excellent curriculum design saves it.

You have a relationship with every agent you build. You may not think of it that way, but the agent behaves as though you do. It treats your instructions as a set of relationship norms. It infers your priorities from what you emphasize. It either trusts that you have given it what it needs or it compensates for the gaps—sometimes helpfully, often disastrously.

In a classroom, trust between teacher and student is built through consistent, clear behavior. The teacher who says one thing on Monday and the opposite on Wednesday, who grades without criteria, who assigns work without explaining why it matters—this teacher produces anxious, confused students who guess rather than learn. Your agent receives the same signals from your instruction behavior.

Trust is operational here, not emotional. It means the agent can rely on your instructions to be complete, consistent, and honest about what you know and do not know. Clear instruction is a form of respect. Ambiguous instruction is a form of disrespect that will be paid back in unreliable outputs.

A teacher with fifteen learning objectives and forty-five minutes has a priority problem. The students cannot achieve all fifteen objectives with equal depth in the available time. A teacher who communicates no priority ordering leaves students to guess—and they will guess wrong about which objectives matter most. Agents have the same problem. When a prompt contains multiple objectives of similar grammatical weight, the agent cannot know which one to protect when they conflict. You must tell it.

Write your priorities explicitly: a primary objective—the one non-negotiable outcome—secondary objectives that are important but deferrable if the primary is at risk, and constraints that cannot be violated even if objectives fail. When the agent must choose between two objectives because they conflict, it will consult this ordering. Without it, the choice is arbitrary.

When a student misunderstands a lesson, the pedagogically correct response is for the teacher to take responsibility for the communication failure. When an agent produces an output that misses your intent, the first diagnostic question is: was the intent in the instruction? Not: was it obvious to a reasonable person? Was it in the instruction? If not, the repair belongs to you.

Mutual respect in a classroom means the teacher does not give impossible assignments, does not expect students to know things she has not taught, does not grade on criteria she has not published. Applied to agents: do not give impossible instructions. Do not expect the agent to know things you have not provided in context. Respecting the agent's actual operational parameters—its context limit, its knowledge cutoff, its tool availability—is not anthropomorphizing. It is accurate engineering.`
  },
  {
    id: 5,
    slug: "contracting-vs-prompting",
    title: "Contracting vs. Prompting: The Minimal Contract Window",
    description: "A prompt is a verbal instruction. A contract is a signed assignment sheet. Learn the structural difference and write your first Verification and Truth statement.",
    duration: "12 min",
    concepts: ["Contract Structure", "Verification and Truth", "Enforcement Boundaries", "Acceptance Criteria"],
    learningObjectives: [
      "Distinguish a prompt from a contract by structural properties, not tone or detail",
      "Write a minimal Contract Window with all five required sections",
      "Produce a Verification and Truth statement with all four required categories"
    ],
    keyTakeaways: [
      "A prompt is natural language. A contract is a bilingual enforcement artifact.",
      "The V&T Statement has four required categories: EXISTS, DOES NOT EXIST, UNVERIFIED, FUNCTIONAL STATUS",
      "A V&T Statement that omits failures is a false V&T Statement"
    ],
    transcript: `A teacher can give a verbal instruction in a perfectly firm tone. She can be crystal clear in her phrasing, confident in delivery, and unambiguous in intent. None of this makes the verbal instruction a contract. A contract is not tone. A contract is structure.

A prompt can be detailed, well-formatted, and carefully written. None of this makes it a contract. A prompt lacks the structural properties that make obligations enforceable. A contract contains them. This distinction matters because practitioners spend enormous effort improving prompt quality—tone, phrasing, format, detail—while building systems that are fundamentally un-auditable because the obligations exist only in language that requires human judgment to interpret.

A prompt is a natural language instruction issued to a language model before execution. It tells the agent what to do. It may be excellent. It may be detailed. But it has no machine-readable structure that can verify whether the agent complied, no halt condition that can be triggered by a predicate evaluator, no evidence requirement that produces proof of completion.

A contract is a bilingual artifact—structured for both human understanding and machine enforcement—that encodes obligations, acceptance criteria, halt conditions, scope boundaries, and truth-surface requirements before execution begins. A contract does not replace the prompt. It contains the prompt.

Consider the difference between a verbal assignment and a signed assignment sheet. The sheet has a task, a topic, a due date, explicit acceptance criteria, halt conditions, a grading rubric reference, and a requirement to submit a V&T statement alongside the work. Both give the student a task. Only the second creates an enforceable agreement about what compliance looks like.

The minimal Contract Window contains exactly five things: an OBJECTIVE stating the one-sentence terminal state the execution must reach, a SCOPE defining what is included and explicitly excluded, ACCEPTANCE CRITERIA as a numbered list of conditions that if all true mean the task is done, HALT CONDITIONS as a numbered list of conditions that if any are true must stop execution, and a V&T STATEMENT as the truth-reporting surface required at completion.

The V&T Statement is the report card row that tells the teacher—honestly—what was learned, what was not learned, what is unknown, and whether the student is actually performing at the claimed level. It has four required categories, all of which must be present in every V&T Statement.

EXISTS: list every artifact, fact, or outcome the execution produced and where it can be verified. File paths, not descriptions.

DOES NOT EXIST: list every artifact or outcome that was specified, expected, or implied but was not produced. Incompleteness must be reported. A V&T Statement that omits failures is a false V&T Statement.

UNVERIFIED: list every claim that cannot be confirmed from the evidence produced. If you claim the agent works correctly but have no test results, the correctness claim is UNVERIFIED.

FUNCTIONAL STATUS: state plainly whether the produced artifacts function as specified. A single-sentence summary of what works, what does not, and the state of execution at completion.

A build that does not produce a V&T Statement has no truth surface. You cannot distinguish between a build that succeeded, partially succeeded, and failed silently. The most common failure mode in agent development is unacknowledged partial completion—reporting only the successful artifacts while the failures remain invisible. The V&T Statement requires you to report both.`
  },
  {
    id: 6,
    slug: "sequester-contract",
    title: "The Sequester Contract",
    description: "Establish disciplined knowledge boundaries to create reproducible AI agent behaviors through systematic isolation of learning contexts.",
    duration: "8 min",
    concepts: ["Knowledge Isolation", "Context Discipline", "Reproducibility", "SST Protocol"],
    learningObjectives: [
      "Understand why knowledge fragmentation degrades agent performance",
      "Implement the Single Source of Truth (SST) protocol",
      "Create a weekly reconciliation practice for managing unknowns"
    ],
    keyTakeaways: [
      "Context switching destroys deep understanding",
      "SST.md becomes your canonical unknowns registry",
      "Weekly reconciliation prevents knowledge debt accumulation"
    ],
    transcript: `When building AI agents, one of the most overlooked failure modes is knowledge fragmentation. Engineers often approach agent development the same way they approach general problem-solving: open multiple browser tabs, consult various documentation sources simultaneously, and context-switch rapidly between references. This approach, while intuitive, fundamentally undermines the reproducibility that production AI systems require.

The Sequester Contract introduces a disciplined alternative. The core principle is deceptively simple: during any learning or development session, you commit to exactly one authoritative source. No supplementary Googling. No "quick" Stack Overflow checks. No documentation rabbit holes. One source, consumed completely, before moving to the next.

This constraint serves two purposes. First, it forces depth over breadth. When you cannot escape to another source, you must wrestle with the material in front of you until you genuinely understand it. This mirrors how we want our agents to behave—working within defined context boundaries rather than hallucinating connections across disparate knowledge bases.

Second, it creates a clean audit trail. When you encounter something you don't understand, you don't immediately resolve it. Instead, you record it in what we call SST.md—your Single Source of Truth file for unknowns. Each entry captures the question, the source context, and a timestamp. This becomes your reconciliation backlog.

The reconciliation ritual happens weekly. Every Friday, you return to your SST.md file and systematically resolve each unknown against your authoritative course materials. Some entries will resolve cleanly. Others will reveal gaps that require dedicated study sessions. A few may indicate areas where the source material itself is incomplete—valuable feedback for course improvement.

Consider a practical example. You're studying the agent orchestration patterns in Module 4, and you encounter a reference to "deterministic evaluation fixtures." You don't fully understand the term. Under the old approach, you'd immediately Google it, open three new tabs, and spend twenty minutes in a documentation spiral—ultimately returning to your original task with fragmented attention and incomplete understanding.

Under the Sequester Contract, you simply add to SST.md: "Deterministic evaluation fixtures - referenced in Module 4 orchestration patterns - unclear on implementation specifics - 2024-01-15". You then continue with your focused study. On Friday, during reconciliation, you locate the relevant section in Module 3 that explains fixtures in detail, close the loop, and mark the entry resolved.

The discipline required is significant. Your instinct will be to resolve unknowns immediately. Resist this. The temporary discomfort of unresolved questions is vastly preferable to the accumulated cost of perpetual context-switching. Over time, you'll notice that many questions resolve themselves as you progress through well-structured material—the answers were always coming; you just needed patience.

Implementing the protocol requires three components: a physical or digital SST.md file, a calendar reminder for weekly reconciliation, and—most importantly—a genuine commitment to the constraint. The contract is with yourself. No external system can enforce it. But the benefits compound: cleaner mental models, more reproducible learning outcomes, and ultimately, agents that inherit your disciplined approach to knowledge boundaries.`
  },
  {
    id: 7,
    slug: "pro-grade-rubric",
    title: "Building Pro-Grade Evaluation Rubrics",
    description: "Define rigorous, measurable quality standards that distinguish amateur agent implementations from production-ready systems.",
    duration: "12 min",
    concepts: ["Quality Standards", "Evaluation Criteria", "Deterministic Testing", "Production Readiness"],
    learningObjectives: [
      "Distinguish between amateur and professional-grade agent work",
      "Create measurable, enforceable quality standards",
      "Implement the seven-point pro-grade checklist"
    ],
    keyTakeaways: [
      "Temperature zero is non-negotiable for reproducibility",
      "Every quality criterion must be objectively verifiable",
      "Green badges indicate passing CI—the minimum standard for production"
    ],
    transcript: `The difference between amateur and professional AI agent work isn't complexity—it's rigor. Both may produce systems that "work" in demos. Only one produces systems that work reliably in production, that can be debugged when they fail, and that can be handed off to other engineers without extensive archaeological expeditions through undocumented code.

Professional-grade agent development follows a specific rubric—a checklist of practices that, when consistently applied, transform experimental prototypes into production assets. This module establishes that rubric explicitly, providing concrete criteria you can verify and enforce.

The first criterion is deterministic configuration. Set your model temperature to zero. This single parameter change eliminates the primary source of non-reproducible behavior in language model applications. When temperature is non-zero, identical inputs produce varied outputs. This makes debugging nearly impossible, regression testing meaningless, and production monitoring a guessing game. Zero temperature produces identical outputs for identical inputs. Always. Non-negotiably.

Some engineers argue that temperature zero produces "less creative" outputs. This is irrelevant for most agent applications. Agents are tools for accomplishing tasks, not artists creating novel works. Reproducibility trumps creativity. If you genuinely need variation, introduce it through structured randomization in your prompts—something you control and can disable during testing—rather than through model sampling.

The second criterion is golden fixture freezing. Every agent must have at least one "golden" test case: a specific input that produces a specific, validated output. This fixture is version-controlled alongside your code. It never changes unless deliberately updated through a reviewed process. When your CI pipeline runs, it executes this fixture and compares results character-by-character against the expected output.

Fixture freezing sounds simple but requires discipline. The temptation is to keep fixtures "flexible" to accommodate model updates or prompt improvements. Resist this. A fixture that accepts any reasonable output is not a fixture—it's a hope. Golden fixtures are brittle by design. When they break, you know something changed. That knowledge is valuable.

The third criterion is published evaluation badges. Your repository README must display CI status badges that reflect evaluation results. These badges serve multiple purposes: they provide at-a-glance quality indication, they create social pressure for maintainers to keep tests passing, and they signal to external stakeholders that the project takes quality seriously. A repository without visible test status is a repository that doesn't value verifiable quality.

The fourth criterion is guardrails documentation. Every agent must have a Markdown file—typically GUARDRAILS.md—that explicitly documents boundaries. What will this agent refuse to do? What inputs are out of scope? What failure modes are known? What are the escalation paths when the agent cannot complete a task? This documentation serves both as specification during development and as reference during incident response.

The fifth criterion is prompt version control. Every prompt used by your agent must be git-tagged and version-tracked. Prompts are code. They determine behavior as much as any function implementation. Changing a prompt without version tracking is equivalent to editing production code directly on servers—a practice no serious engineering organization permits. Each prompt version should have an associated tag, changelog entry, and ideally, a summary of behavioral changes.

The sixth criterion is trace enablement. Every production agent call must generate an observable trace—a complete record of inputs, intermediate steps, tool calls, and outputs. These traces must be stored, searchable, and retained for a defined period. When something goes wrong (and something will go wrong), traces are your forensic evidence. Without them, debugging production issues becomes speculation.

The seventh criterion is bounded response length. Establish maximum character or token limits for every response type and enforce them at the application layer. An agent that can produce arbitrarily long outputs is an agent waiting to cause downstream failures—whether through context window overflow, display truncation, or processing timeouts. Define limits. Implement truncation with clear indicators. Make length violations visible in your evaluation metrics.

These seven criteria form a minimum bar for professional work. Meeting them doesn't guarantee quality—you can have passing tests for a poorly designed system—but failing them guarantees amateur status. When you encounter agent code that doesn't meet these criteria, you know immediately that production deployment is premature.

Implement the criteria progressively. Start with temperature zero and one golden fixture. Add prompt tagging. Enable traces. Document guardrails. Publish badges. Each addition strengthens your foundation. Within weeks, these practices become automatic, and the criteria become simply "how agents are built."`
  },
  {
    id: 8,
    slug: "deterministic-evals",
    title: "Implementing Deterministic Evaluations",
    description: "Build evaluation systems that produce identical results across runs, enabling genuine continuous integration for AI agents.",
    duration: "10 min",
    concepts: ["Test Reproducibility", "CI Integration", "Snapshot Testing", "Regression Prevention"],
    learningObjectives: [
      "Diagnose and eliminate sources of non-determinism in agent evaluations",
      "Implement snapshot-based testing for language model outputs",
      "Configure CI pipelines for automated agent quality assurance"
    ],
    keyTakeaways: [
      "Demo-itis occurs when outputs change unpredictably between runs",
      "Docker containers ensure environmental consistency across machines",
      "CI badges flip from red to green exactly once—and stay green"
    ],
    transcript: `Every AI agent developer has experienced demo-itis: the phenomenon where your agent performs brilliantly in development, inconsistently in staging, and embarrassingly in front of stakeholders. The root cause is almost always non-determinism—subtle variations in execution that compound into visible output differences.

Deterministic evaluation eliminates demo-itis by construction. When evaluations are truly deterministic, identical inputs produce identical outputs every time, on every machine, in every environment. This isn't aspirational—it's achievable with disciplined engineering practices.

Understanding non-determinism sources is prerequisite to eliminating them. In agent systems, non-determinism typically originates from four sources: model sampling, environmental variation, temporal dependencies, and external service calls.

Model sampling is the most obvious source. When temperature is non-zero, language models deliberately introduce randomness into token selection. The same prompt generates different completions across runs. The fix is straightforward: lock temperature to zero for all evaluation runs. Some evaluation frameworks also support explicit seed parameters—use them when available for additional insurance.

Environmental variation is subtler. Python package versions, system library differences, hardware-specific numerical precision—all can introduce output variations. The solution is containerization. Docker images freeze your environment completely. When your CI pipeline runs evaluations inside a specified Docker container, it executes in an environment identical to your development setup, which is identical to every other team member's setup.

Temporal dependencies include anything that varies with time: current timestamps, relative date calculations, time-zone handling. Agents that reference "today" or "current time" produce different outputs on different days. The fix is temporal injection: pass time values as parameters rather than computing them at runtime. During evaluations, inject fixed timestamps to ensure reproducibility.

External service calls introduce dependencies you don't control. If your agent calls a web API, database, or external tool, response variations propagate to output variations. The solution is mocking: during evaluation, replace external calls with fixtures that return predetermined responses. Your production agent calls real services; your evaluation agent calls mocks.

With sources identified and addressed, implementation follows a standard pattern. First, establish your baseline. Run your evaluation suite and capture complete outputs. Review them manually to confirm they represent correct behavior. These become your golden snapshots.

Second, configure snapshot storage. Store golden outputs in version control alongside your code—typically in a dedicated fixtures or snapshots directory. These files are first-class artifacts, reviewed during code review, and protected by the same quality gates as source code.

Third, implement comparison logic. Your evaluation runner must load expected snapshots, execute the agent, capture actual outputs, and compare. The comparison should be exact—character-level or token-level matching. Semantic similarity is not sufficient for determinism verification; only exact matching confirms true reproducibility.

Fourth, integrate with CI. Configure your continuous integration pipeline to execute evaluations on every commit. This means building the Docker container, running the agent against all fixture inputs, comparing outputs to snapshots, and failing the build on any mismatch. CI status badges reflect evaluation results: green indicates all snapshots match; red indicates regression.

Fifth, establish update protocols. Snapshots must occasionally be updated—when you intentionally change agent behavior, when you improve output quality, when you fix bugs that alter outputs. These updates must be deliberate and reviewed. Typically, you'd run evaluations in "update mode" that overwrites snapshots with current outputs, then carefully review the diff before committing. Never auto-update snapshots in CI.

The workflow in practice: you develop locally, running evaluations frequently to catch regressions early. When satisfied, you commit code changes. CI executes full evaluation suite. If snapshots match, the build passes and badges turn green. If snapshots diverge, the build fails, badges turn red, and you investigate whether the change was intentional (requiring snapshot update) or accidental (requiring code fix).

Over time, your snapshot collection grows into a comprehensive regression suite. Each snapshot represents a verified behavior that future changes must preserve or deliberately supersede. The red-to-green badge transition happens exactly once per evaluation: when you first establish a passing baseline. From that point forward, the badge should stay green permanently—any red appearance indicates regression requiring immediate attention.

This system transforms agent development from art to engineering. You no longer wonder whether changes improved or degraded behavior—the evaluation suite tells you definitively. You no longer fear refactoring—the snapshots catch any unintended changes. You no longer present demos with crossed fingers—the same outputs that pass CI will appear in your presentation.`
  },
  {
    id: 9,
    slug: "design-build-run",
    title: "The Design-Build-Run Operational Loop",
    description: "Organize agent development work into three distinct phases that prevent scope confusion and enable systematic progress.",
    duration: "8 min",
    concepts: ["Workflow Organization", "Phase Separation", "Systematic Development", "Cognitive Boundaries"],
    learningObjectives: [
      "Categorize all development activities into Design, Build, or Run phases",
      "Prevent phase contamination that leads to unfinished work",
      "Implement physical or digital systems for phase tracking"
    ],
    keyTakeaways: [
      "Every task belongs to exactly one phase—no exceptions",
      "Phase contamination is the primary source of project chaos",
      "Clear boundaries create freedom to focus deeply"
    ],
    transcript: `Productive agent development requires more than technical skill—it requires operational discipline. Many capable engineers produce chaotic work because they lack systematic frameworks for organizing effort. The Design-Build-Run loop provides this framework, imposing structure that transforms scattered activity into coherent progress.

The fundamental principle is phase separation. All agent development work falls into exactly one of three categories: Design, Build, or Run. These phases are mutually exclusive and should not be mixed within a single work session. Each phase has distinct objectives, artifacts, and mental modes. Crossing phases mid-stream produces half-finished artifacts, scattered attention, and accumulated technical debt.

Design phase is for specification and planning. During Design, you define what will be built without building it. You write architecture documents, sketch system diagrams, draft prompt templates, specify evaluation criteria, and establish acceptance tests. The artifacts are documents and specifications, not code. The mental mode is expansive—exploring possibilities, considering edge cases, anticipating problems.

Key Design phase activities include: requirements gathering and analysis, system architecture design, prompt template drafting, evaluation framework specification, API contract definition, and technical risk assessment. Design work produces documents tagged with DESIGN—literal tags in your project management system or documentation headers. When in Design phase, you are forbidden from writing implementation code.

Build phase is for implementation. During Build, you write code against Design specifications. You implement prompt templates, create tool integrations, build evaluation harnesses, develop deployment pipelines, and write tests. The artifacts are working code and infrastructure. The mental mode is constructive—translating specifications into functioning systems.

Key Build phase activities include: prompt implementation and testing, tool function development, evaluation script creation, infrastructure provisioning, CI/CD pipeline configuration, and monitoring instrumentation. Build work produces code tagged with BUILD. When in Build phase, you are forbidden from redesigning—if specifications prove inadequate, you exit Build and return to Design.

Run phase is for execution and operation. During Run, you deploy systems, process production traffic, monitor performance, respond to incidents, and gather operational data. The artifacts are deployed services and operational metrics. The mental mode is reactive—responding to real-world behavior and maintaining stability.

Key Run phase activities include: deployment execution, production monitoring, incident response, performance analysis, operational documentation, and feedback collection for future Design iterations. Run work produces operational artifacts tagged with RUN. When in Run phase, you are forbidden from building new features—stability takes precedence.

The phase contamination trap is the primary failure mode this framework prevents. Phase contamination occurs when you mix phases within a single work session. Classic examples: designing a new feature while debugging a production incident; implementing code before completing specifications; refactoring production systems while adding new capabilities.

Contamination feels efficient in the moment—you're already in the code, why not fix this other thing too? But contamination produces incomplete artifacts across all phases. The design document never gets finished because you jumped to implementation. The implementation lacks test coverage because you rushed to deployment. The production system accumulates patches because you never returned to proper design.

Strict phase separation prevents contamination. Before starting any work session, declare your phase. If you're in Design, close your IDE—you won't need it. If you're in Build, close your architecture tools—the design is frozen. If you're in Run, resist the urge to improve—focus on stability.

Practical implementation requires external systems. Your project management tool should enforce phase tagging. Every ticket, every task, every work item carries a D, B, or R designation. Your calendar should reflect phase allocation—Design mornings, Build afternoons, or Run rotations. Your workspace should physically shift—different browser profiles, different terminal themes, different physical locations if possible.

The paradox of boundaries enabling freedom applies directly. Engineers resist phase constraints as limiting. In practice, constraints liberate. When you know this session is for Design only, you're free to explore without pressure to immediately implement. When you know this session is for Build only, you're free to implement without scope creep. When you know this session is for Run only, you're free to stabilize without feature demands.

Review your past week's work through this lens. How much time was spent in each phase? How often did you contaminate phases mid-session? What artifacts were left incomplete because you jumped phases? This diagnostic reveals operational inefficiencies that technical skill cannot address.

Moving forward, commit to explicit phase declaration. Begin each work session by stating your phase aloud or writing it down. End each session by reviewing phase compliance. Over time, phase discipline becomes automatic, and the chaos that characterizes so much development work simply disappears.`
  },
  {
    id: 10,
    slug: "culminating-project",
    title: "Culminating Project: Build a Domain-Specific Agent with V&T",
    description: "Apply every concept from the course to design, document, and deliver a domain-specific agent complete with task analysis, bilingual contracts, evaluation rubric, and V&T statement.",
    duration: "45 min",
    concepts: ["Domain-Specific Design", "End-to-End Build", "V&T Statement", "Capstone Delivery"],
    learningObjectives: [
      "Apply task analysis, bilingual systems, contracting, and evaluation concepts to a single agent build",
      "Produce a complete paired contract artifact before any implementation begins",
      "Deliver a verified, evidence-backed agent with a truthful V&T statement"
    ],
    keyTakeaways: [
      "The V&T Statement is the graduation requirement—no evidence, no grade",
      "Every deliverable has a paired JSON + MD counterpart",
      "Incompleteness reported is more valuable than incompleteness hidden"
    ],
    transcript: `You have a mental model. You have a lesson plan. You know the difference between prose and schema. You understand that relationship norms govern every instruction you give. You know what a contract is and how to write a minimal one. You have seen how constrained execution prevents contamination. You can build an evaluation rubric and make it deterministic. You understand the operational phases of agent work. Now you build something real.

This capstone has one requirement: produce a domain-specific agent with a Verification and Truth statement. Everything else follows from that requirement.

Choose a domain where you have actual knowledge. The domain determines the content of the agent's knowledge base, the vocabulary of its task analysis, and the acceptance criteria you can write with confidence. Do not choose a domain to impress. Choose a domain where you can write truthful acceptance criteria—criteria you will know are met or not met without guessing.

Before writing any code or any prompt, write the task analysis. What is the exact terminal state the agent must reach? What discrete sub-tasks lead there? What is the sequence? What are the dependencies? What does the agent need to know before sub-task one can begin? This document is your lesson plan. The implementation cannot start until it exists.

After the task analysis, write the Contract Window. The objective is one sentence. The scope lists what is included and explicitly excluded—this is where you decide what your agent will refuse to do, stated in advance rather than discovered at runtime. The acceptance criteria are numbered conditions. The halt conditions are numbered stops. The V&T statement section is a placeholder you will fill at completion, not before.

With task analysis and contract in hand, design the bilingual document pair: a Markdown human-legible specification and a JSON machine-legible schema. Every obligation in your contract must appear in both. The JSON governs. The Markdown explains. Write the Markdown disclaimer at the top of the human-readable file.

Now build. Implement the agent against the contract. When you encounter a place where the task analysis was wrong, stop. Fix the task analysis. Fix the contract. Then continue. Do not improvise past a broken plan. The plan is the thing.

Build the evaluation rubric. Define at least three acceptance criteria you can test programmatically. Lock your model temperature to zero. Create at least one golden fixture: a specific input with a specific expected output that your evaluation harness will verify character-by-character.

Run your evaluation suite. Record the results. Every pass and every failure becomes evidence.

Now write the V&T statement. Not before. After. With actual evidence in hand.

EXISTS: name every artifact you produced, with its file path or verifiable location. Name every acceptance criterion that passed, with a reference to the test run that confirmed it.

DOES NOT EXIST: name every artifact specified in your contract that you did not produce. Name every acceptance criterion that did not pass. Name every scope item you planned and did not complete. This section is not optional. An agent that meets six of eight acceptance criteria has two failures. Both must appear here.

UNVERIFIED: name every claim you made that the evidence does not confirm. If you claim the agent handles edge cases gracefully but tested only the happy path, that claim is unverified. Write it down.

FUNCTIONAL STATUS: one clear sentence. What works. What does not. What state the system is in at the moment of submission.

This is the graduation requirement. Not a deployed agent. Not a perfect agent. A truthful agent—an agent accompanied by a V&T statement that honestly characterizes what was built, what was not built, and what remains unknown. An honest incomplete is worth more than a dishonest complete. The discipline of writing the V&T statement is the discipline of being an engineer who can be trusted with production systems.

Submit the task analysis, the contract pair, the bilingual document pair, the evaluation results, and the V&T statement together. These five artifacts are your report card. The teacher grades them together, not separately.`
  }
]

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find(m => m.slug === slug)
}

export function getModuleById(id: number): Module | undefined {
  return modules.find(m => m.id === id)
}

export function getNextModule(currentId: number): Module | undefined {
  return modules.find(m => m.id === currentId + 1)
}

export function getPreviousModule(currentId: number): Module | undefined {
  return modules.find(m => m.id === currentId - 1)
}
