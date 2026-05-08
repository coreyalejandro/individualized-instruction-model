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
      "Tool calls are 'homework'—work done outside the main conversation"
    ],
    transcript: `One of the first things people notice when they start working with AI agents is how quickly the vocabulary multiplies. Orchestration. Context windows. Tool augmentation. Retrieval pipelines. Each term points at something real, but without a way to hold them all together, they accumulate rather than clarify. The concepts start to feel more complicated than they actually are.

The most useful thing you can do early on is find a mental model—a familiar framework you already understand that the new concepts can attach to. A good mental model doesn't simplify things to the point of being wrong. It gives you somewhere to put new information so it stays organized and connected.

The framework we use throughout this course is a classroom. Not as a loose comparison, but as an actual map — every part of the classroom corresponds to a real part of how an agent works.

The teacher is your prompt. When a teacher walks into class, she brings her preparation: what she wants students to learn, how she'll explain it, what success looks like. Your prompt does the same thing for an agent. It carries the instruction, the intent, and—when it's well-written—a sense of what a good outcome looks like. A prepared teacher produces focused students. A clear prompt produces reliable agents.

The student is the AI model itself — the thing that reads your instructions and produces a response. Students arrive with different backgrounds, different strengths, different gaps. Some have strong reading comprehension and struggle with math. Some are quick but need structure. AI models have their own profiles too—areas where they reason well, areas where they're prone to drift, knowledge that ends at a certain point in time. Understanding your model's tendencies is part of the work, the same way a good teacher understands her students.

The textbook is your knowledge base—the reference material the agent can draw on. This might be documents you've provided in the prompt, content retrieved from a database, or knowledge baked in through training. A well-organized textbook helps students give better answers. Well-structured reference material helps agents give better ones too.

The classroom is your context window. This is one of the most important mappings to internalize. A classroom has a fixed capacity—only so many people fit, only so much can stay on the board at once. Your context window works the same way. It holds a finite amount of information during any given interaction. When you try to fit too much in, things start to fall off. Understanding context as a physical space, with real limits, changes how you think about what to include and what to leave out.

Homework is tool use. When a teacher assigns homework, she's asking students to do work outside of class and bring back what they find. When an agent makes a tool call, it's doing something similar—reaching outside the conversation to retrieve information, run a calculation, or interact with an external system, then returning with the result. The main lesson happens in the classroom; the research happens elsewhere.

The report card is your evaluation. It's the honest accounting of how things went. Teachers grade against rubrics—defined criteria applied consistently. Agent evaluations work the same way. A good report card doesn't just say "passing" or "failing." It shows which criteria were met and which weren't, so you know exactly what to address.

When you're designing a new agent system, it helps to sketch it in these terms first. Who's the teacher? What's the textbook? How big is the classroom, and what are you putting in it? What homework is being assigned? How will the report card be filled out? These questions don't replace technical decisions—they precede them. They help you see the structure of what you're building before you start building it.

The same model is useful when things go wrong. If the agent keeps producing inconsistent outputs, the issue is usually in the teacher—the instruction isn't clear enough, or it's asking for too many things at once. If the outputs are shallow or miss important context, the issue is often in the textbook. If the responses start to degrade partway through a long session, the classroom is probably overcrowded.

These aren't rules so much as a way of seeing. Once the mapping becomes natural, you stop having to think through each piece separately. The whole system starts to feel like one familiar thing.`
  },
  {
    id: 2,
    slug: "task-analysis",
    title: "Task Analysis: The Lesson Plan Beneath Every Prompt",
    description: "Decompose any goal into discrete, sequenced sub-tasks before writing a prompt—because every good teacher writes a lesson plan before walking into the classroom.",
    duration: "10 min",
    concepts: ["Task Decomposition", "Dependency Mapping", "Prompt Scaffolding", "Prerequisite Analysis"],
    learningObjectives: [
      "Break any goal into clear, ordered steps before writing a prompt",
      "Spot which steps depend on earlier steps being done first",
      "Use that breakdown as the foundation for every instruction you write"
    ],
    keyTakeaways: [
      "A prompt without a task analysis is a lesson without a lesson plan",
      "Steps describe work to be done, not results you hope to receive",
      "Hidden dependencies are one of the most common reasons prompts fail"
    ],
    transcript: `Before a teacher walks into a classroom, there's work that nobody sees. She's thought through what students already know, what they need to learn, and what order makes sense. She's identified where confusion is likely to arise. She's figured out which ideas depend on other ideas, so she doesn't introduce something before its foundation is in place. The lesson plan exists before the lesson does.

This invisible work is what separates a clear, effective lesson from one that technically covers the material but leaves students piecing things together on their own. The content might be the same. What's different is the preparation.

Task analysis is that preparation applied to working with agents. It's the practice of thinking through a goal carefully—breaking it into steps, figuring out the order, naming what each step depends on—before you write a single instruction.

The reason this matters is that agents follow what you say, not what you mean. If your instruction skips a step, the agent doesn't fill it in from context the way a person might. It either guesses—sometimes well, often not—or it produces something that answers the literal question while missing the actual point. Task analysis is how you catch those gaps before they become problems.

The process starts with a single clear question: what does "done" actually look like? Not in general terms, but specifically. If someone handed you the finished output, what would you see? What would be true that isn't true right now? Getting this right is harder than it sounds. Vague goals produce vague task analyses, which produce vague prompts, which produce outputs that require another round of work to interpret and revise.

Once you have a clear picture of the end state — the finished product, what done actually looks like — you work backward. What has to happen just before that? What has to happen before that? You're drawing the path from where things are now to where you want them to be, one step at a time.

As you do this, you start to see which steps can only happen after other steps are done — the way a student needs to understand fractions before working with ratios, or decimals before working with percentages. In a prompt, these ordering requirements tell you what information needs to be present before a given instruction makes sense. If the agent needs to evaluate quality, it needs criteria before it starts evaluating. If it needs to summarize a document, it needs the document before it starts summarizing.

This might sound like a lot of work before you've written anything. In practice, it saves time. Most prompt revision cycles exist because something in the task structure wasn't thought through before the instruction was written. The agent produced something technically correct but functionally off, because the prompt didn't reflect how the work actually needed to flow. Task analysis is how you get that clarity first.

It doesn't have to be elaborate. For a simple task, a few sentences might be enough. For something more complex, you might spend ten or fifteen minutes sketching the structure before writing any instructions. The length of the analysis matches the complexity of the task.

The thing to notice, once you start doing this, is how often the analysis reveals assumptions you were making without realizing it. You assumed the agent would know to check for exceptions. You assumed it would handle missing data gracefully. You assumed it would stop at a certain point rather than continuing. These assumptions only become visible when you slow down and walk through the steps. The task analysis is where you find them before the agent does.`
  },
  {
    id: 3,
    slug: "bilingual-systems",
    title: "Bilingual Systems: Human-Legible and Machine-Legible Instruction",
    description: "Learn when to write prose, when to write schema, and how to maintain paired bilingual document systems where human understanding and machine enforcement never drift apart.",
    duration: "10 min",
    concepts: ["Document Architecture", "Schema Design", "Paired Artifacts", "Enforcement Boundaries"],
    learningObjectives: [
      "Tell the difference between instructions written for people and instructions written for systems",
      "Design paired documents where the plain-language version and the structured version say the same thing",
      "Know when a rule needs to be structured to be applied consistently"
    ],
    keyTakeaways: [
      "The syllabus explains; the grading grid governs",
      "Any rule that needs to be applied the same way every time should be written as structure, not prose",
      "When you update one version of a paired document, you update both — they're one thing in two forms"
    ],
    transcript: `Most written communication doesn't have to make a choice. A memo, an email, an explanation—these are written for people who read with judgment. They can infer intent when something is ambiguous. They can adapt when the instructions don't quite cover their situation. Human readers fill gaps.

Agents don't fill gaps. They execute against what's there. Which means the same document that a person can work from might not be the right document for an agent to work from. They serve different needs, and recognizing that difference is the start of writing better instructions for both.

The distinction the course draws is between human-legible and machine-legible instruction. Human-legible means written for someone who brings context, judgment, and the ability to read between the lines. Machine-legible means structured for a system that parses exactly what's written and nothing more. Both are useful. They're not the same thing.

Think about the difference between a course syllabus and a grading rubric. The syllabus is a conversation. It describes the arc of the course, explains why the topics are taught in that order, sets expectations in a way that feels collegial. A student reads it and gets a sense of what the class is for. That kind of understanding requires prose.

The grading rubric is different. It's a table. It has specific criteria, point values, and thresholds. It needs to produce the same result when two different instructors apply it to the same student essay. Consistency requires structure. Explanation isn't the goal—precision is.

Both documents are about the same course. They're not interchangeable.

In agent work, this shows up constantly. You might write a long, careful explanation of what you want an agent to do—and the explanation is good, the person reading it would understand exactly what to produce. But the agent drifts, or interprets a phrase in an unexpected way, or applies a judgment call you didn't intend. Not because the agent is broken. Because the document was written for human judgment, and the agent doesn't have that kind of judgment available.

When you need the agent to consistently apply a rule, the rule needs to be written in a form the agent can apply without interpreting. That usually means structure: clear fields, explicit conditions, stated thresholds. Not because the agent is unintelligent — it's because an unambiguous rule produces the same result every time, and an ambiguous one doesn't.

This is also where paired documents become useful. The same content exists in two forms: a human-readable version that explains the intent and context, and a structured version that the agent works from. They're kept in sync deliberately. If you update one, you update the other. The prose version is for understanding. The structured version is for consistency.

The discipline here isn't about writing everything formally. Most communication doesn't need that. It's about recognizing when you're writing something that needs to hold up the same way every time—an evaluation criterion, a scope boundary, a definition that determines behavior—and giving it the form that makes that possible.

When you're not sure which form to use, ask what happens if two people interpret this differently. If consistent interpretation matters, you probably need structure. If nuance and context matter more, prose serves better. Most real documents need some of both.`
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
    transcript: `Working with an agent is a kind of ongoing collaboration. You give instructions, the agent produces something, you adjust, it responds. That back and forth has a shape to it—and like any ongoing collaboration, the shape matters.

When a collaboration works well, it's usually because both parties have a shared understanding of a few basic things: what the goal is, whose job is whose, how to communicate when something isn't working, and what to do when expectations don't match. Those things don't need to be spelled out every time in a healthy working relationship. They're built into how the two parties interact.

With agents, those things do need to be spelled out. Not because the agent is difficult, but because it doesn't arrive with assumptions about how the collaboration should work. It works from what you give it. If what you give it is unclear about the goal, or silent about priorities, or inconsistent from session to session, the agent produces outputs that reflect that. It's not failing—it's working with what it has.

This is where thinking in terms of a relationship becomes useful. A teacher and a student have a relationship with norms. The teacher shows up prepared and consistent. The student commits to the work. Both know what respect looks like in this context. Neither is guessing at the other's expectations. The relationship runs smoothly because those expectations are clear and stable.

The same norms apply to working with agents, even though the agent isn't a person. When your instructions are prepared and consistent, the agent can work reliably. When you're clear about what matters most, the agent can make good choices when trade-offs arise. When you communicate carefully about what you want and why, you get outputs that reflect that care.

One place this shows up clearly is in priorities. A teacher with more material than time has to make choices. She chooses based on what's most important for the students to leave with. An agent with a complex instruction faces the same situation—if everything is weighted equally, it has to guess which thing you'd protect if you couldn't have all of it. If you've told it what matters most, it can make that call in a way that matches your actual intent.

Another place it shows up is in how you handle things when they go wrong. When a student misunderstands something, a good teacher asks what in the explanation might have created that misunderstanding. The instinct to look at the instruction first—rather than attributing the confusion to the student—is part of what makes the collaboration productive. With agents, the same instinct serves you well. When the output is off, the first question is usually whether the instruction was clear, not whether the agent was failing.

This isn't about being gentle or protective of the agent. It's about being accurate. Most of the time, when an agent produces something unexpected, the cause can be found in the instruction. That's actually good news—instructions are something you can improve.

The relationship frame also clarifies what it means to build something well over time. You're not just issuing prompts and evaluating outputs. You're developing an understanding of how this particular agent responds to different kinds of instructions, where it tends to be strong, where it tends to need more structure. That understanding accumulates. And the more clearly you articulate it—to yourself and in your instructions—the more reliably the collaboration produces what you're looking for.`
  },
  {
    id: 5,
    slug: "contracting-vs-prompting",
    title: "Contracting vs. Prompting: The Minimal Contract Window",
    description: "A prompt is a verbal instruction. A contract is a signed assignment sheet. Learn the structural difference and write your first Verification and Truth statement.",
    duration: "12 min",
    concepts: ["Contract Structure", "Verification and Truth", "Enforcement Boundaries", "Acceptance Criteria"],
    learningObjectives: [
      "Tell the difference between a prompt and a contract — not by how detailed they are, but by how they're built",
      "Write a minimal contract with all five required parts",
      "Produce a Verification and Truth statement with all four required categories"
    ],
    keyTakeaways: [
      "A prompt tells the agent what to do. A contract also defines what done looks like and how you'll know.",
      "The V&T Statement has four required categories: EXISTS, DOES NOT EXIST, UNVERIFIED, FUNCTIONAL STATUS",
      "A V&T Statement that leaves out failures is not an honest one"
    ],
    transcript: `There's a difference between asking someone to do something and making an agreement with them about what they'll do.

An ask is informal. You describe what you want, they use their judgment to figure out what you mean, and something comes back. If it's not quite right, you ask again. This works reasonably well between people who share context and trust each other's interpretation. It's how most conversations work.

An agreement is different. It names the outcome explicitly. It says what's included and what isn't. It defines what "done" means before the work starts, not after. And it has a way of verifying that what came back matches what was asked for.

Most people who work with agents are asking. The prompts are thoughtful, sometimes elaborate—but they're still asks. The agent interprets, produces something, and you evaluate it against an unstated standard. If it misses, you try to explain more clearly. This cycle is familiar.

Contracting is a different practice. It shifts the work earlier. Before you write the instruction, you write down what you're actually after: the specific outcome, the boundaries, what counts as a good result and what doesn't. The instruction becomes a delivery mechanism for an agreement you've already made with yourself.

The classroom version of this is the assignment sheet. A verbal assignment—"write a three-page essay on a historical event"—leaves most of the definition to the student. A written assignment sheet says: the essay is between 800 and 1000 words, it covers a specific event from a specific period, it includes at least two primary sources, it makes a clear argument in the opening paragraph, and it will be graded against four named criteria. The student knows what they're being asked to produce. The teacher knows what she'll be grading. They're working from the same definition.

The minimal version of that agreement—the smallest version that still makes it a contract rather than an ask—has a few parts. A single clear statement of the outcome you're trying to reach. A description of what's in scope and what's out. A list of conditions that, if all true, mean the work is done. A list of conditions that should stop the work if any of them are true. And one more thing: a commitment to report honestly on what happened.

That last part is the Verification and Truth statement. It's the equivalent of the teacher looking at the graded essay and writing a note that says: this criterion was met, this one wasn't, this one I can't assess from the essay alone. It's an honest accounting after the work is done.

The V&T statement has four parts. What was produced—named specifically, not summarized. What wasn't produced—the things that were part of the agreement but didn't come back. What can't be assessed from the evidence available. And a plain statement of where things stand at the end.

That fourth category is often uncomfortable to write. It's easy to report what worked. It's harder to report what didn't, or to admit that you can't tell whether something actually worked. But that discomfort is useful. The practice of writing an honest V&T statement builds the habit of distinguishing between what you know and what you're assuming—which is one of the most valuable habits you can develop when working with agents.

You don't need to write a full contract for every interaction. Simple tasks are fine as asks. What the contract practice gives you is a framework for the interactions where it matters—where you need a specific outcome, where precision is worth the extra work up front, where you want to be able to verify afterwards whether what came back is actually what you were after.`
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
      "Apply task analysis, paired documents, contracting, and evaluation to a single agent you build yourself",
      "Write the contract before you build anything, not after",
      "Deliver your work with a truthful V&T statement based on what actually happened"
    ],
    keyTakeaways: [
      "The V&T Statement is the graduation requirement — no honest accounting, no grade",
      "Every document you produce has a plain-language version and a structured version",
      "Reporting incompleteness honestly is more valuable than hiding it"
    ],
    transcript: `Everything in this course has been building toward a single question: can you actually do it?

Not demonstrate that you understood a concept. Not summarize what a V&T statement is. Build something—a real agent, for a domain you know, that does something useful—and document it honestly from start to finish.

That's the capstone.

The domain is your choice. Pick something you actually know. The concepts you've learned transfer to any field, but the quality of what you build depends on how well you understand the subject matter. If you know education, build something for educators. If you know healthcare administration, or legal research, or supply chain logistics, build for that. The agent should do something that makes sense in a context you can actually evaluate.

Before you write any code or any prompt, do the task analysis. Describe the end state you're trying to reach in one concrete sentence. Then work out what steps get you there, in what order, and what each step depends on. This is your lesson plan. Hold onto it—it becomes part of what you submit.

With the task analysis in hand, write the contract. One sentence for the objective. A clear scope that names what's included and what isn't—the things your agent will do and the things it explicitly won't. Acceptance criteria that are specific enough to check. Stop conditions that would tell you something has gone wrong. And a placeholder for the V&T statement, which you'll fill in last.

Then design the paired documents: a human-readable description of your agent and how it works, and a structured representation of the same content that an automated process could evaluate. These don't have to be elaborate. They have to be accurate, and they have to correspond to each other.

Now build. Work from the contract. When you hit a place where the task analysis was wrong, go back and fix it—don't route around it in the implementation. The contract is the source of truth, not something to work around.

Build your evaluation. Write at least three criteria you can actually check—not "the output is high quality" but specific, observable conditions. Run it. Record what passes and what doesn't.

Then write the V&T statement. This is the thing you've been working toward, and it's the thing most people skip or soften. Don't.

What was produced: name each file or document by where it actually lives, not by a general description. What wasn't produced: name every deliverable that was in scope but didn't happen. What can't be confirmed: name every claim in your documentation that the evidence doesn't actually support. And a plain statement of where things stand—what works, what doesn't, and what you'd need to do for it to work completely.

An honest V&T statement for an incomplete build is worth more than a polished summary for a build that has hidden gaps. The incomplete is fixable. The hidden gap tends to stay hidden until it becomes a real problem.

What you submit is five things: the task analysis, the contract, the paired documents, the evaluation results, and the V&T statement. Together, they're the record of a build that was designed with intention, executed with care, and reported truthfully. That's what the report card is grading.`
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
