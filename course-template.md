\`\`\`markdown
# Coursera Micro-Course: Build a Reproducible AI Agent in 30 Minutes  
Single hand-off document (drop into Claude-3.5-Sonnet, GPT-4o, or Gemma-3 and run)

---

## 0. Masthead (copy to an LLM prompt top)
> Create the following Coursera-style learning artifact:  
> • 5-slot dashboard HTML page (`index.html`)  
> • README.md  
> • 5 SRT subtitle files (`video-0.srt … video-4.srt`)  
>  Each module = a 3-minute bite-size screen-capture that drives *one* actionable green-badge commit.  
>  File names exactly: README.md, index.html, video-0.srt, … video-4.srt  
>  Use ONLY the data supplied in the body below; no extra docs or logs.

---

## 1. README.md
\`\`\`markdown
# Coursera-AI-Agents Orientation  
From chaos to pro-grade agent workflow in 5 snack-sized steps.

## 0. Mission
Build one deterministic agent, CI-evaluated, in ≤ 30 min screen time.

## 1. Setup (30 s checklist)
1. Clone & install  
   \`\`\`bash
   git clone https://github.com/coursera-ai-agents/agent-primer.git && cd agent-primer
   pip install -r requirements.txt
   \`\`\`
2. Put your API key in `.env`  
   \`\`\`
   OPENAI_API_KEY=sk-xxxxxxxx
   \`\`\`
3. Double-click `index.html` → live dashboard opens.

## 2. 5 Micro-Modules (3 min each)

| Step | Deliverable | Final artifact |
|---|---|---|
| 1. Sequester | `SST.md` nit ↔ PDF diff | Green GitHub Actions badge |
| 2. Mental Models | 3-sentence explanation voice clip | Clip URL in commit body |
| 3. Pro-grade Rubric | `rubric.md` checked | PR opened automatically |
| 4. Deterministic Evals | golden test passes CI | Red → green badge |
| 5. Design→Build→Run Loop | Tag JIRA D/B/R | screenshot in issue |

## Cheat Codes
- Copy any code block 1-to-1; zero edits needed.  
- Red badge → wait up to 2 min.  
- Re-use this template forever.
\`\`\`

---

## 2. index.html  (dashboard, dark Coursera UI, Tailwind CDN)
\`\`\`html
<!DOCTYPE html>
<html lang="en"><head>
<meta charset="UTF-8"><title>AI Agents – Orientation Dashboard</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://cdn.tailwindcss.com"></script>
<style>.progress-ring{transition:stroke-dashoffset .6s}</style>
</head>
<body class="bg-gray-900 text-gray-100 flex h-screen">
<nav class="w-72 bg-gray-800 p-4 space-y-3 overflow-y-auto">
  <h1 class="text-xl font-bold mb-2">Orientation</h1>
  <button data-step="0" class="nav-btn px-3 py-2 rounded bg-blue-700 w-full">1. Sequester Contract</button>
  <button data-step="1" class="nav-btn px-3 py-2 rounded bg-gray-700 hover:bg-blue-700 w-full">2. Mental Models</button>
  <button data-step="2" class="nav-btn px-3 py-2 rounded bg-gray-700 hover:bg-blue-700 w-full">3. Pro-grade Checklist</button>
  <button data-step="3" class="nav-btn px-3 py-2 rounded bg-gray-700 hover:bg-blue-700 w-full">4. Deterministic Evals</button>
  <button data-step="4" class="nav-btn px-3 py-2 rounded bg-gray-700 hover:bg-blue-700 w-full">5. Design→Build→Run</button>
</nav>

<main class="flex-1 flex items-center justify-center p-6">
  <div id="card" class="bg-gray-800 rounded-xl p-6 w-full max-w-2xl">
    <h2 id="title" class="text-2xl font-bold mb-2">Welcome – pick a step above</h2>
    <p id="desc" class="text-gray-300">Click any module on the left to proceed.</p>
  </div>
</main>

<aside class="w-48 flex flex-col items-center justify-center bg-gray-800">
  <svg width="104" height="104" class="mb-2"><circle stroke="#374151" stroke-width="10" fill="transparent" r="44" cx="52" cy="52"/>
    <circle id="progress" stroke="#38bdf8" stroke-width="10" stroke-linecap="round" fill="transparent" r="44" cx="52" cy="52"
            stroke-dasharray="276.46" stroke-dashoffset="276.46"/></svg>
  <span id="percent" class="text-xl font-mono">0%</span>
</aside>

<script>
const data=[
{title:"1. Sequester Contract", desc:"Commit SST.md, wait for green Actions badge.", task:"Check badge.", color:"bg-blue-700"},
{title:"2. Mental Models", desc:"Record 3-sentence explanation for 6-yo.","task":"Upload clip link.", color:"bg-purple-700"},
{title:"3. Pro-grade Rubric", desc:"Tick every bullet in `rubric.md`.","task":"PR opens.", color:"bg-emerald-700"},
{title:"4. Deterministic Evals", desc:"Freeze golden test for CI.","task":"Badge turns green.", color:"bg-sky-700"},
{title:"5. Design→Build→Run Loop", desc:"Tag JIRA issue D/B/R.","task":"Attach screenshot.", color:"bg-rose-700"}
];
let done=0;
function setStep(i){
  const c=data[i];
  document.getElementById('title').textContent=c.title;
  document.getElementById('desc').textContent=c.desc;
  document.getElementById('card').className=`bg-gray-800 rounded-xl p-6 w-full max-w-2xl ${c.color}`;
  document.querySelectorAll('.nav-btn')[i].className=`nav-btn px-3 py-2 rounded bg-green-600 w-full`;
  done=Math.max(done,i+1);
  const pc=Math.round(done/data.length*100);
  document.getElementById('percent').textContent=pc+"%";
  document.getElementById('progress').style.strokeDashoffset=276.46*(1-pc/100);
}
document.querySelectorAll('.nav-btn').forEach(btn=>btn.addEventListener('click',()=>setStep(+btn.dataset.step)));
</script>
</body></html>
\`\`\`

---

## 3 – Subtitle Files
**Save exactly as named.**

### video-0.srt
\`\`\`
1
00:00:00,000 --> 00:00:03,500
Open 27 tabs and you drown. Open one source and you fly.

2
00:00:03,600 --> 00:00:08,000
Step one: zero Google mid-lesson. Unknowns go straight into SST.md

3
00:00:08,100 --> 00:00:11,000
Step two: every Friday reconcile with the PDF here.

4
00:00:11,100 --> 00:00:14,500
Activity: add ONE unknown now, commit and tag.

5
00:00:14,600 --> 00:00:17,000
Depth over breadth. One book. Done.
\`\`\`

### video-1.srt
\`\`\`
1
00:00:00,000 --> 00:00:03,000
Languages wrap agents in buzzwords. Re-wrap in crayons.

2
00:00:03,100 --> 00:00:07,500
Teacher = prompt & rubric. Student = model executor.

3
00:00:07,600 --> 00:00:11,500
Textbook = knowledge base. Classroom = context window.

4
00:00:11,600 --> 00:00:15,500
Homework = tool calls. Report card = golden eval.

5
00:00:15,600 --> 00:00:18,000
Record 3-sentence explanation—post link below.
\`\`\`

### video-2.srt
\`\`\`
1
00:00:00,000 --> 00:00:03,500
High-school or pro grade? Same code—different DNA.

2
00:00:03,600 --> 00:00:08,000
Fill every bullet ≤ 140 chars—lock temperature at zero.

3
00:00:08,100 --> 00:00:12,000
Freeze golden fixtures. Publish eval harness badge.

4
00:00:12,100 --> 00:00:16,000
Guardrails Markdown. Prompts git-tagged. Traces enabled.

5
00:00:16,100 --> 00:00:19,000
Tick checklist → green badge = pro-level.
\`\`\`

### video-3.srt
\`\`\`
1
00:00:00,000 --> 00:00:03,000
This is demo-itis—answers that refuse to freeze.

2
00:00:03,100 --> 00:00:06,500
Set temperature to 0. One golden truth test.

3
00:00:06,600 --> 00:00:10,500
Docker build, pytest snapshot, CLI trace export green.

4
00:00:10,600 --> 00:00:14,000
Push commit. Red badge flips to eternal green.

5
00:00:14,100 --> 00:00:16,000
CI now keeps the koan stable forever.
\`\`\`

### video-4.srt
\`\`\`
1
00:00:00,000 --> 00:00:03,000
If your desk is a junk drawer, the agent behaves like junk.

2
00:00:03,100 --> 00:00:07,500
Route every line through exactly one door: D, B, or R.

3
00:00:07,600 --> 00:00:11,000
DESIGN spec tag. BUILD stub. RUN container badge.

4
00:00:11,100 --> 00:00:15,000
Timer set: tag JIRA issue now. Screenshot proof.

5
00:00:15,100 --> 00:00:17,000
Freedom through boundaries. Next era starts here.
\`\`\`

---

End of single document.  
Paste above block into any modern LM and it will emit the exact 8 artifacts for your course drop.
