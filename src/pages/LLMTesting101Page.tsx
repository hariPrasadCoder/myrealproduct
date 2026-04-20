import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const css = `
.llm101 {
  --ink: #1C1917;
  --ink2: #44403C;
  --ink3: #78716C;
  --paper: #FAFAF9;
  --paper2: #F5F5F4;
  --paper3: #E7E5E4;
  --accent: #453DC8;
  --accent-bg: #EEECFB;
  --accent-mid: #827AFF;
  --green: #15803D;
  --green-bg: #DCFCE7;
  --amber: #B45309;
  --amber-bg: #FEF3C7;
  --blue: #1D4ED8;
  --blue-bg: #DBEAFE;
  --red: #B91C1C;
  --red-bg: #FEE2E2;
  --border: #E7E5E4;
  --mono: 'DM Mono', monospace;
  --serif: 'Fraunces', Georgia, serif;
  background: var(--paper);
  color: var(--ink);
  font-family: var(--serif);
  font-weight: 300;
  line-height: 1.6;
  min-height: 100vh;
}

.llm101 *, .llm101 *::before, .llm101 *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* HEADER */
.llm101 .cc-header {
  padding: 36px 48px 32px;
  border-bottom: 1.5px solid var(--ink);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.llm101 .cc-eyebrow {
  font-family: var(--mono);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--ink3);
  margin-bottom: 6px;
}

.llm101 .cc-header h1 {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.0;
  letter-spacing: -0.03em;
  color: var(--ink);
  font-family: var(--serif);
}

.llm101 .cc-header h1 em {
  font-style: italic;
  font-weight: 300;
  color: var(--accent);
  font-family: var(--serif);
}

.llm101 .cc-byline {
  text-align: right;
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink3);
  line-height: 1.8;
}
.llm101 .cc-byline strong {
  color: var(--ink);
  font-weight: 500;
  display: block;
  font-size: 13px;
}
.llm101 .cc-byline a,
.llm101 .cc-footer-text a {
  color: inherit;
  text-decoration: none;
}
.llm101 .cc-byline a:hover,
.llm101 .cc-footer-text a:hover {
  color: var(--accent);
}

/* GRID */
.llm101 .cc-row {
  display: grid;
  border-bottom: 1px solid var(--border);
}
.llm101 .cc-row-2   { grid-template-columns: 1fr 1fr; }
.llm101 .cc-row-3   { grid-template-columns: 1fr 1fr 1fr; }
.llm101 .cc-row-4   { grid-template-columns: 1fr 1fr 1fr 1fr; }
.llm101 .cc-row-12  { grid-template-columns: 1fr 2fr; }
.llm101 .cc-row-21  { grid-template-columns: 2fr 1fr; }

.llm101 .cc-cell {
  padding: 24px 28px;
  border-right: 1px solid var(--border);
}
.llm101 .cc-cell:last-child { border-right: none; }

/* LABELS */
.llm101 .cc-label {
  font-family: var(--mono);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--ink3);
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 7px;
}
.llm101 .cc-label::before {
  content: '';
  display: inline-block;
  width: 16px;
  height: 1.5px;
  background: var(--accent);
  flex-shrink: 0;
}

.llm101 .cc-section-h {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: 12px;
}
.llm101 .cc-section-h em {
  font-style: italic;
  font-weight: 300;
  color: var(--ink2);
}

.llm101 .cc-body {
  font-size: 12.5px;
  color: var(--ink2);
  line-height: 1.65;
  font-weight: 300;
}
.llm101 .cc-body strong {
  font-weight: 600;
  color: var(--ink);
}

/* CODE */
.llm101 .cc-code-block {
  font-family: var(--mono);
  font-size: 10.5px;
  background: var(--ink);
  color: #D4D0CC;
  border-radius: 6px;
  padding: 12px 14px;
  margin: 10px 0;
  line-height: 1.9;
  white-space: pre;
  overflow-x: auto;
}
.llm101 .cc-code-block .co { color: #6B7280; }
.llm101 .cc-code-block .cm { color: #A78BFA; }
.llm101 .cc-code-block .fl { color: #6EE7B7; }
.llm101 .cc-code-block .st { color: #FCA5A5; }
.llm101 .cc-code-block .kw { color: #93C5FD; }

.llm101 code {
  font-family: var(--mono);
  font-size: 10.5px;
  background: var(--paper3);
  color: var(--accent);
  padding: 1px 5px;
  border-radius: 3px;
  font-weight: 500;
}

/* ITEMS */
.llm101 .cc-item {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  margin-bottom: 9px;
}
.llm101 .cc-item:last-child { margin-bottom: 0; }

.llm101 .cc-icmd {
  font-family: var(--mono);
  font-size: 10.5px;
  font-weight: 500;
  color: var(--accent);
  background: var(--accent-bg);
  border: 1px solid #C4BFEF;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  flex-shrink: 0;
  line-height: 1.7;
}

.llm101 .cc-icmd-red   { color: var(--red);   background: var(--red-bg);   border-color: #FECACA; }
.llm101 .cc-icmd-green { color: var(--green);  background: var(--green-bg); border-color: #BBF7D0; }
.llm101 .cc-icmd-amber { color: var(--amber);  background: var(--amber-bg); border-color: #FDE68A; }
.llm101 .cc-icmd-blue  { color: var(--blue);   background: var(--blue-bg);  border-color: #BFDBFE; }
.llm101 .cc-icmd-gray  { color: var(--ink2);   background: var(--paper3);   border-color: var(--border); }

.llm101 .cc-idesc {
  font-size: 12px;
  color: var(--ink2);
  line-height: 1.5;
  font-weight: 300;
  padding-top: 2px;
}
.llm101 .cc-idesc strong {
  font-weight: 600;
  color: var(--ink);
}

.llm101 .cc-hr { border: none; border-top: 1px solid var(--border); margin: 12px 0; }

/* PILLS */
.llm101 .cc-pill {
  display: inline-block;
  font-family: var(--mono);
  font-size: 8.5px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 2px 7px;
  border-radius: 20px;
  vertical-align: middle;
}
.llm101 .cc-pill-teal   { background: var(--accent-bg); color: var(--accent); }
.llm101 .cc-pill-green  { background: var(--green-bg);  color: var(--green); }
.llm101 .cc-pill-amber  { background: var(--amber-bg);  color: var(--amber); }
.llm101 .cc-pill-red    { background: var(--red-bg);    color: var(--red); }
.llm101 .cc-pill-blue   { background: var(--blue-bg);   color: var(--blue); }

/* EVAL TYPE CARDS */
.llm101 .cc-eval-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9px;
  margin-top: 4px;
}
.llm101 .cc-eval-card {
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 13px;
}
.llm101 .cc-eval-card.hl {
  border-color: var(--accent);
  background: #F5F4FD;
}
.llm101 .cc-eval-num {
  font-family: var(--mono);
  font-size: 20px;
  font-weight: 500;
  color: var(--paper3);
  line-height: 1;
  margin-bottom: 4px;
}
.llm101 .cc-eval-name {
  font-family: var(--mono);
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--ink);
  margin-bottom: 4px;
}
.llm101 .cc-eval-desc {
  font-size: 11.5px;
  color: var(--ink3);
  line-height: 1.5;
  font-weight: 300;
}
.llm101 .cc-eval-when {
  font-family: var(--mono);
  font-size: 8.5px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent);
  margin-top: 5px;
  font-weight: 500;
}

/* TOOL CARDS */
.llm101 .cc-tool-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 8px;
}
.llm101 .cc-tool-card {
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 11px 12px;
}
.llm101 .cc-tool-name {
  font-family: var(--mono);
  font-size: 11px;
  font-weight: 500;
  color: var(--ink);
  margin-bottom: 3px;
}
.llm101 .cc-tool-tag {
  font-family: var(--mono);
  font-size: 8px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
  font-weight: 500;
  margin-bottom: 4px;
}
.llm101 .cc-tool-desc {
  font-size: 11px;
  color: var(--ink3);
  line-height: 1.5;
  font-weight: 300;
}

/* TAGLINE */
.llm101 .cc-tagline {
  font-size: 12.5px;
  font-style: italic;
  color: var(--ink3);
  border-left: 2.5px solid var(--accent-mid);
  padding-left: 10px;
  margin: 10px 0;
  line-height: 1.5;
  font-weight: 300;
}

/* INFO BOX */
.llm101 .cc-info-box {
  border: 1px solid #C4BFEF;
  background: #F5F4FD;
  border-radius: 6px;
  padding: 11px 13px;
  margin-top: 10px;
}
.llm101 .cc-info-head {
  font-family: var(--mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent);
  font-weight: 500;
  margin-bottom: 5px;
}
.llm101 .cc-info-body {
  font-size: 11.5px;
  color: #2D2580;
  line-height: 1.5;
  font-weight: 300;
}

/* WARN BOX */
.llm101 .cc-warn-box {
  border: 1px solid #FECACA;
  background: #FFF5F5;
  border-radius: 6px;
  padding: 11px 13px;
  margin-top: 10px;
}
.llm101 .cc-warn-head {
  font-family: var(--mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--red);
  font-weight: 500;
  margin-bottom: 5px;
}
.llm101 .cc-warn-body {
  font-size: 11.5px;
  color: #7F1D1D;
  line-height: 1.5;
  font-weight: 300;
}

/* CHECKLIST */
.llm101 .cc-check {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  margin-bottom: 7px;
  font-size: 12px;
  color: var(--ink2);
  line-height: 1.4;
  font-weight: 300;
}
.llm101 .cc-check::before {
  content: '○';
  font-family: var(--mono);
  font-size: 10px;
  color: var(--accent);
  flex-shrink: 0;
  margin-top: 1px;
}
.llm101 .cc-check strong { color: var(--ink); font-weight: 600; }

/* FOOTER */
.llm101 .cc-footer {
  border-top: 1.5px solid var(--ink);
  padding: 12px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.llm101 .cc-footer-text {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--ink3);
}
.llm101 .cc-footer-text strong {
  color: var(--ink);
  font-weight: 500;
}

@media (max-width: 768px) {
  .llm101 .cc-header {
    padding: 24px 20px 20px;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
  .llm101 .cc-header h1 { font-size: 32px; }
  .llm101 .cc-byline { text-align: left; }
  .llm101 .cc-row-2,
  .llm101 .cc-row-3,
  .llm101 .cc-row-4,
  .llm101 .cc-row-12,
  .llm101 .cc-row-21 { grid-template-columns: 1fr; }
  .llm101 .cc-cell { border-right: none; border-bottom: 1px solid var(--border); padding: 20px; }
  .llm101 .cc-cell:last-child { border-bottom: none; }
  .llm101 .cc-eval-grid { grid-template-columns: 1fr 1fr; }
  .llm101 .cc-tool-grid { grid-template-columns: 1fr; }
  .llm101 .cc-footer { padding: 12px 20px; flex-direction: column; gap: 4px; align-items: flex-start; }
}
`;

export default function LLMTesting101Page() {
  return (
    <>
      <Helmet>
        <title>LLMOps 101 — Cheatsheet by Hari Prasad</title>
        <meta
          name="description"
          content="A practical LLMOps cheatsheet: LLM evals, LLM-as-judge, golden datasets, LiteLLM AI gateway, Langfuse observability, prompt versioning, and cost tracking. By Hari Prasad of MyRealProduct."
        />
        <link rel="canonical" href="https://www.myrealproduct.com/resources/llmops-101" />
        <meta property="og:title" content="LLMOps 101 — Cheatsheet by Hari Prasad" />
        <meta
          property="og:description"
          content="A practical LLMOps cheatsheet: LLM evals, LLM-as-judge, golden datasets, LiteLLM AI gateway, Langfuse observability, prompt versioning, and cost tracking."
        />
        <meta property="og:url" content="https://www.myrealproduct.com/resources/llmops-101" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "LLMOps 101 — Cheatsheet",
          "description": "A practical LLMOps cheatsheet: LLM evals, LLM-as-judge, golden datasets, LiteLLM AI gateway, Langfuse observability, prompt versioning, and cost tracking.",
          "url": "https://www.myrealproduct.com/resources/llmops-101",
          "author": { "@type": "Person", "name": "Hari Prasad", "url": "https://www.myrealproduct.com" },
          "publisher": { "@type": "Organization", "name": "MyRealProduct", "url": "https://www.myrealproduct.com" },
          "isAccessibleForFree": true,
          "inLanguage": "en"
        })}</script>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,700;1,9..144,300&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="llm101">

        {/* HEADER */}
        <div className="cc-header">
          <div>
            <div className="cc-eyebrow">Resources &nbsp;—&nbsp; 2026</div>
            <h1>LLMOps<br /><em>101</em></h1>
          </div>
          <div className="cc-byline">
            <strong>Hari Prasad</strong>
            MyRealProduct &nbsp;•&nbsp; <Link to="/">myrealproduct.com</Link>
          </div>
        </div>

        {/* ROW 1 — Intro + The 4 Eval Types */}
        <div className="cc-row cc-row-12">

          <div className="cc-cell">
            <div className="cc-label">Why this matters</div>
            <div className="cc-section-h">LLMs need<br /><em>different</em> testing</div>
            <p className="cc-body">Traditional unit tests don't work for LLMs. Outputs are <strong>non-deterministic</strong> — the same input can produce different responses. You need <strong>probabilistic evaluation</strong> across many examples.</p>
            <div className="cc-tagline">You can't assert equality. You evaluate quality.</div>
            <p className="cc-body" style={{ marginTop: 8 }}>The goal: catch <strong>regressions before users do</strong>. Every prompt change, model swap, or RAG update should run through evals. Treat your LLM like a service with an SLA, not a black box.</p>
            <div className="cc-hr" />
            <div className="cc-info-box" style={{ marginTop: 0 }}>
              <div className="cc-info-head">The core question</div>
              <div className="cc-info-body">Is my LLM doing what I built it to do — accurately, safely, and consistently — across the full range of inputs my users will send?</div>
            </div>
          </div>

          <div className="cc-cell">
            <div className="cc-label">Evaluation types</div>
            <div className="cc-section-h">The <em>4 layers</em> of LLM evals</div>
            <div className="cc-eval-grid">
              <div className="cc-eval-card">
                <div className="cc-eval-num">01</div>
                <div className="cc-eval-name">Exact / Rule-based</div>
                <div className="cc-eval-desc">Assert specific strings, JSON schema, regex patterns. Fast, cheap, deterministic.</div>
                <div className="cc-eval-when">Use for: structured outputs, JSON, code</div>
              </div>
              <div className="cc-eval-card hl">
                <div className="cc-eval-num">02</div>
                <div className="cc-eval-name">LLM-as-Judge</div>
                <div className="cc-eval-desc">Use a stronger model to score responses for quality, accuracy, tone. Scales well.</div>
                <div className="cc-eval-when">★ Most versatile — use often</div>
              </div>
              <div className="cc-eval-card">
                <div className="cc-eval-num">03</div>
                <div className="cc-eval-name">Golden Dataset</div>
                <div className="cc-eval-desc">Curated input/output pairs. Run against them after every change to catch regressions.</div>
                <div className="cc-eval-when">Use for: regression, release gates</div>
              </div>
              <div className="cc-eval-card">
                <div className="cc-eval-num">04</div>
                <div className="cc-eval-name">Human Review</div>
                <div className="cc-eval-desc">Manual annotation for nuanced quality. Slow but ground truth. Use to build golden sets.</div>
                <div className="cc-eval-when">Use for: calibrating auto-evals</div>
              </div>
            </div>
            <p className="cc-body" style={{ marginTop: 10, fontSize: 11, fontStyle: 'italic', color: 'var(--ink3)' }}>
              In practice: combine all four. Rules for structure, LLM-as-judge for quality, golden dataset for regression, human review to bootstrap.
            </p>
          </div>

        </div>

        {/* ROW 2 — What to test + LLM-as-judge + Golden Datasets */}
        <div className="cc-row cc-row-3">

          <div className="cc-cell">
            <div className="cc-label">Eval dimensions</div>
            <div className="cc-section-h">What to <em>test</em></div>
            <div className="cc-item">
              <span className="cc-icmd">Correctness</span>
              <span className="cc-idesc">Does the answer match the reference? Factually accurate?</span>
            </div>
            <div className="cc-item">
              <span className="cc-icmd">Faithfulness</span>
              <span className="cc-idesc">For RAG: does the response stick to source docs? No hallucination?</span>
            </div>
            <div className="cc-item">
              <span className="cc-icmd">Relevance</span>
              <span className="cc-idesc">Is the answer actually on-topic and useful for the question?</span>
            </div>
            <div className="cc-item">
              <span className="cc-icmd cc-icmd-amber">Consistency</span>
              <span className="cc-idesc">Same question → same answer (run 3–5× and compare)</span>
            </div>
            <div className="cc-item">
              <span className="cc-icmd cc-icmd-blue">Format</span>
              <span className="cc-idesc">Valid JSON? Correct schema? Required fields present?</span>
            </div>
            <div className="cc-item">
              <span className="cc-icmd cc-icmd-red">Safety</span>
              <span className="cc-idesc">No harmful, biased, or off-policy content. Test adversarial prompts.</span>
            </div>
            <div className="cc-item">
              <span className="cc-icmd cc-icmd-gray">Latency</span>
              <span className="cc-idesc">Time to first token, total latency. Flag p95 regressions.</span>
            </div>
            <div className="cc-hr" />
            <p className="cc-body" style={{ fontSize: 11, fontStyle: 'italic', color: 'var(--ink3)' }}>Also test edge cases: empty input, very long context, multilingual, ambiguous queries, jailbreak attempts.</p>
          </div>

          <div className="cc-cell">
            <div className="cc-label">Automated scoring</div>
            <div className="cc-section-h">LLM-as-<em>Judge</em></div>
            <p className="cc-body" style={{ fontSize: 12, marginBottom: 8 }}>Use a powerful model (Claude Opus, GPT-4o) to score your production model's responses. Return structured JSON scores.</p>
            <div className="cc-code-block" style={{ fontSize: 10 }}>
<span className="kw">import</span> <span className="cm">anthropic</span>, json{'\n'}
{'\n'}
<span className="kw">def</span> <span className="fl">llm_judge</span>(question, response, reference):{'\n'}
{'  '}client = anthropic.Anthropic(){'\n'}
{'  '}msg = client.messages.create({'\n'}
{'    '}model=<span className="st">"claude-opus-4-6"</span>,{'\n'}
{'    '}max_tokens=<span className="cm">256</span>,{'\n'}
{'    '}messages=[{'{'}<span className="st">"role"</span>: <span className="st">"user"</span>,{'\n'}
{'      '}<span className="st">"content"</span>: <span className="fl">f</span><span className="st">"""</span>{'\n'}
<span className="st">Rate this AI response (1–5):</span>{'\n'}
<span className="st">Q: </span><span className="fl">{'{'}question{'}'}</span>{'\n'}
<span className="st">Response: </span><span className="fl">{'{'}response{'}'}</span>{'\n'}
<span className="st">Reference: </span><span className="fl">{'{'}reference{'}'}</span>{'\n'}
<span className="st">Return JSON only:</span>{'\n'}
<span className="st">  {'{{'}"score": N, "reason": "..."{'}}'}"""</span>{'\n'}
{'    '}{'}'}]{'\n'}
{'  '}){'\n'}
{'  '}<span className="kw">return</span> json.loads(msg.content[<span className="cm">0</span>].text)
            </div>
            <div className="cc-hr" />
            <div className="cc-check"><strong>Use a stronger model</strong> as judge than the one you're testing</div>
            <div className="cc-check"><strong>Include reference answer</strong> when you have one — anchors scoring</div>
            <div className="cc-check"><strong>Ask for JSON output</strong> with score + reason for easy parsing</div>
            <div className="cc-check"><strong>Run 3 judges, take median</strong> — reduces single-judge variance</div>
          </div>

          <div className="cc-cell">
            <div className="cc-label">Regression testing</div>
            <div className="cc-section-h">Golden <em>Datasets</em></div>
            <p className="cc-body" style={{ fontSize: 12, marginBottom: 8 }}>50–200 manually curated input/output pairs. Run them after every prompt or model change to catch regressions.</p>
            <div className="cc-code-block" style={{ fontSize: 10 }}>
<span className="co"># dataset.json — add to version control{'\n'}</span>
dataset = [{'\n'}
{'  '}{'{'}
{'    '}<span className="st">"input"</span>: <span className="st">"What is RAG?"</span>,{'\n'}
{'    '}<span className="st">"expected"</span>: <span className="st">"Retrieval Augmented..."</span>,{'\n'}
{'    '}<span className="st">"tags"</span>: [<span className="st">"definition"</span>, <span className="st">"core"</span>]{'\n'}
{'  '}{'}'},  <span className="co">... 50-200 examples</span>{'\n'}
]{'\n'}
{'\n'}
<span className="co"># Eval loop{'\n'}</span>
results = []{'\n'}
<span className="kw">for</span> item <span className="kw">in</span> dataset:{'\n'}
{'  '}actual = call_my_llm(item[<span className="st">"input"</span>]){'\n'}
{'  '}score = llm_judge(item[<span className="st">"input"</span>],{'\n'}
{'               '}actual, item[<span className="st">"expected"</span>]){'\n'}
{'  '}results.append(score){'\n'}
{'\n'}
pass_rate = <span className="fl">sum</span>(s[<span className="st">"score"</span>] &gt;= <span className="cm">4</span>{'\n'}
{'  '}<span className="kw">for</span> s <span className="kw">in</span> results) / <span className="fl">len</span>(results){'\n'}
<span className="fl">print</span>(<span className="fl">f</span><span className="st">"Pass rate: </span><span className="fl">{'{'}pass_rate:.1%{'}'}</span><span className="st">"</span>)
            </div>
            <div className="cc-info-box" style={{ marginTop: 6 }}>
              <div className="cc-info-head">Building your dataset</div>
              <div className="cc-info-body">Start with real user queries. Add cases when bugs surface in prod. Tag by category (edge cases, core flows, safety). Aim: &gt;85% pass rate before shipping.</div>
            </div>
          </div>

        </div>

        {/* ROW 3 — LiteLLM + Langfuse + Promptfoo */}
        <div className="cc-row cc-row-3">

          <div className="cc-cell">
            <div className="cc-label">AI gateway</div>
            <div className="cc-section-h">LiteLLM &amp;<br /><em>fallbacks</em></div>
            <p className="cc-body" style={{ fontSize: 12, marginBottom: 8 }}>One unified interface for all LLM providers. Switch models, add fallbacks, rate limit, and track costs without changing your app code.</p>
            <div className="cc-code-block" style={{ fontSize: 10 }}>
<span className="co"># pip install litellm{'\n'}</span>
<span className="kw">import</span> <span className="cm">litellm</span>{'\n'}
{'\n'}
response = litellm.completion({'\n'}
{'  '}model=<span className="st">"claude-opus-4-6"</span>,{'\n'}
{'  '}messages=[{'{'}
{'    '}<span className="st">"role"</span>: <span className="st">"user"</span>,{'\n'}
{'    '}<span className="st">"content"</span>: prompt{'\n'}
{'  '}{'}'}{'}'},]{'\n'}
{'  '}<span className="co"># Auto-fallback if Claude fails{'\n'}</span>
{'  '}fallbacks=[{'\n'}
{'    '}<span className="st">"gpt-4o"</span>,{'\n'}
{'    '}<span className="st">"claude-3-5-haiku-20241022"</span>{'\n'}
{'  '}],{'\n'}
{'  '}num_retries=<span className="cm">2</span>,{'\n'}
{'  '}timeout=<span className="cm">30</span>,{'\n'}
)
            </div>
            <div className="cc-hr" />
            <div className="cc-item">
              <span className="cc-icmd cc-icmd-green">Fallback</span>
              <span className="cc-idesc">Primary fails → auto-retry with backup model. Zero downtime.</span>
            </div>
            <div className="cc-item">
              <span className="cc-icmd cc-icmd-blue">Load balance</span>
              <span className="cc-idesc">Spread traffic across providers to avoid rate limits at scale.</span>
            </div>
            <div className="cc-item">
              <span className="cc-icmd cc-icmd-amber">Proxy mode</span>
              <span className="cc-idesc">Deploy as a server. Drop-in OpenAI-compatible proxy for your whole team.</span>
            </div>
            <p className="cc-body" style={{ marginTop: 8, fontSize: 11, fontStyle: 'italic', color: 'var(--ink3)' }}>Also: Portkey, OpenRouter for hosted gateway options.</p>
          </div>

          <div className="cc-cell">
            <div className="cc-label">Observability</div>
            <div className="cc-section-h">Langfuse &amp;<br /><em>LangSmith</em></div>
            <p className="cc-body" style={{ fontSize: 12, marginBottom: 8 }}>Trace every LLM call — prompt, response, tokens, latency, cost. Debug in production, run evals, compare prompts.</p>
            <div className="cc-code-block" style={{ fontSize: 10 }}>
<span className="co"># pip install langfuse{'\n'}</span>
<span className="kw">from</span> <span className="cm">langfuse.decorators</span> <span className="kw">import</span>{'\n'}
{'  '}observe, langfuse_context{'\n'}
{'\n'}
<span className="cm">@observe()</span>  <span className="co"># auto-traces everything{'\n'}</span>
<span className="kw">def</span> <span className="fl">generate</span>(user_input: str) -&gt; str:{'\n'}
{'  '}response = llm_call(user_input){'\n'}
{'\n'}
{'  '}<span className="co"># Attach a quality score{'\n'}</span>
{'  '}langfuse_context.score_current_observation({'\n'}
{'    '}name=<span className="st">"quality"</span>,{'\n'}
{'    '}value=<span className="cm">0.9</span>,   <span className="co"># from eval{'\n'}</span>
{'    '}comment=<span className="st">"accurate + concise"</span>{'\n'}
{'  '}){'\n'}
{'  '}<span className="kw">return</span> response
            </div>
            <div className="cc-hr" />
            <p className="cc-body" style={{ fontSize: 12, marginBottom: 8 }}>What to trace on every call:</p>
            <div className="cc-item">
              <span className="cc-pill cc-pill-teal">prompt</span>
              <span className="cc-idesc" style={{ fontSize: 11 }}>Full system + user prompt with variables resolved</span>
            </div>
            <div className="cc-item">
              <span className="cc-pill cc-pill-blue">tokens</span>
              <span className="cc-idesc" style={{ fontSize: 11 }}>Input + output tokens. Calculate cost per trace.</span>
            </div>
            <div className="cc-item">
              <span className="cc-pill cc-pill-green">latency</span>
              <span className="cc-idesc" style={{ fontSize: 11 }}>Time-to-first-token and total time. Alert on p95 spikes.</span>
            </div>
            <div className="cc-item">
              <span className="cc-pill cc-pill-amber">session</span>
              <span className="cc-idesc" style={{ fontSize: 11 }}>Group traces by user session to debug multi-turn flows.</span>
            </div>
            <div className="cc-item">
              <span className="cc-pill cc-pill-red">errors</span>
              <span className="cc-idesc" style={{ fontSize: 11 }}>Rate limit hits, timeouts, malformed outputs.</span>
            </div>
          </div>

          <div className="cc-cell">
            <div className="cc-label">Eval &amp; observability tools</div>
            <div className="cc-section-h">Pick <em>one</em> and go deep</div>
            <p className="cc-body" style={{ fontSize: 12, marginBottom: 10 }}>All three do tracing + evals. Pick based on your stack — they each have a slightly different focus.</p>
            <div className="cc-tool-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="cc-tool-card" style={{ borderColor: 'var(--accent)', background: '#F5F4FD' }}>
                <div className="cc-tool-name">Langfuse</div>
                <div className="cc-tool-tag">Open source · self-hostable</div>
                <div className="cc-tool-desc">Tracing, evals, prompt registry, dataset management. Free to self-host. Best all-in-one for most teams not already in LangChain.</div>
              </div>
              <div className="cc-tool-card">
                <div className="cc-tool-name">LangSmith</div>
                <div className="cc-tool-tag">LangChain ecosystem</div>
                <div className="cc-tool-desc">Deep integration if you use LangChain/LangGraph. Tracing + eval datasets built-in. Hosted only.</div>
              </div>
              <div className="cc-tool-card">
                <div className="cc-tool-name">Braintrust</div>
                <div className="cc-tool-tag">Hosted · SDK-first</div>
                <div className="cc-tool-desc">Polished DX. SDK wraps your LLM calls, captures traces, runs evals, shows diffs between prompt versions.</div>
              </div>
            </div>
            <div className="cc-info-box" style={{ marginTop: 8 }}>
              <div className="cc-info-head">Rule of thumb</div>
              <div className="cc-info-body">Start with Langfuse — free, open source, works with any framework. Switch to LangSmith only if you're deep in the LangChain ecosystem.</div>
            </div>
          </div>

        </div>

        {/* ROW 4 — RAGAS + Prompt versioning + Cost + Checklist */}
        <div className="cc-row cc-row-4">

          <div className="cc-cell">
            <div className="cc-label">RAG-specific evals</div>
            <div className="cc-section-h">RAG eval<br /><em>dimensions</em></div>
            <p className="cc-body" style={{ fontSize: 12, marginBottom: 8 }}>Standard evals miss retrieval bugs. For RAG, test these four things separately using LLM-as-judge.</p>
            <div className="cc-item">
              <span className="cc-icmd cc-icmd-green">Faithfulness</span>
              <span className="cc-idesc" style={{ fontSize: 11 }}>Is every claim in the answer supported by the retrieved docs? The core hallucination check.</span>
            </div>
            <div className="cc-item">
              <span className="cc-icmd">Answer Relevance</span>
              <span className="cc-idesc" style={{ fontSize: 11 }}>Does the response actually answer what was asked?</span>
            </div>
            <div className="cc-item">
              <span className="cc-icmd cc-icmd-blue">Context Recall</span>
              <span className="cc-idesc" style={{ fontSize: 11 }}>Did retrieval surface the right chunks? (compare against a reference answer)</span>
            </div>
            <div className="cc-item">
              <span className="cc-icmd cc-icmd-amber">Context Noise</span>
              <span className="cc-idesc" style={{ fontSize: 11 }}>Were retrieved chunks relevant, or did irrelevant context confuse the model?</span>
            </div>
            <div className="cc-tagline" style={{ marginTop: 10 }}>Test each dimension separately. A response can be relevant but unfaithful — or faithful but miss the question entirely.</div>
          </div>

          <div className="cc-cell">
            <div className="cc-label">Prompt management</div>
            <div className="cc-section-h">Versioning &amp;<br /><em>A/B testing</em></div>
            <p className="cc-body" style={{ fontSize: 12, marginBottom: 8 }}>Your prompt is your product. Version it like code. Never edit a live prompt without running evals first.</p>
            <div className="cc-check"><strong>Store prompts in git</strong> — track every change, link eval results in the PR description</div>
            <div className="cc-check"><strong>Use a prompt registry</strong> — Langfuse and LangSmith both store versioned prompts with rollback</div>
            <div className="cc-check"><strong>A/B test variants</strong> — route 10% of traffic to the new prompt, compare eval scores before full rollout</div>
            <div className="cc-check"><strong>Separate template from data</strong> — use variables like <code>{'{'}user_input{'}'}</code> so your prompt text stays readable</div>
            <div className="cc-check"><strong>Log the prompt version</strong> with every trace — so you can pinpoint which prompt version caused a quality drop</div>
            <div className="cc-tagline" style={{ marginTop: 8 }}>Treat your prompt like a software artifact. If it's not versioned, you can't roll back.</div>
          </div>

          <div className="cc-cell">
            <div className="cc-label">Cost & performance</div>
            <div className="cc-section-h">Tracking<br /><em>costs</em></div>
            <p className="cc-body" style={{ fontSize: 12, marginBottom: 10 }}>LLM costs are invisible until they're not. Track per-call cost from day one. LiteLLM auto-calculates cost per response — pipe it to Langfuse for dashboards by model, user, and feature.</p>
            <div className="cc-hr" />
            <div className="cc-item">
              <span className="cc-pill cc-pill-green">Cache</span>
              <span className="cc-idesc" style={{ fontSize: 11 }}>Semantic caching (GPTCache, LiteLLM cache) cuts costs 30–60% on repetitive queries</span>
            </div>
            <div className="cc-item">
              <span className="cc-pill cc-pill-amber">Route</span>
              <span className="cc-idesc" style={{ fontSize: 11 }}>Use small/cheap models for simple queries, large models for complex ones</span>
            </div>
            <div className="cc-item">
              <span className="cc-pill cc-pill-blue">Batch</span>
              <span className="cc-idesc" style={{ fontSize: 11 }}>Anthropic/OpenAI batch APIs: 50% discount for async, non-realtime tasks</span>
            </div>
            <div className="cc-item">
              <span className="cc-pill cc-pill-red">Alert</span>
              <span className="cc-idesc" style={{ fontSize: 11 }}>Set cost alerts. A bug in a loop can generate $1k+ in minutes.</span>
            </div>
          </div>

          <div className="cc-cell">
            <div className="cc-label">Ship checklist</div>
            <div className="cc-section-h">LLMOps<br /><em>checklist</em></div>
            <p className="cc-body" style={{ fontSize: 11, marginBottom: 10, color: 'var(--ink3)', fontStyle: 'italic' }}>Before going to production:</p>
            <div className="cc-check"><strong>Golden dataset</strong> created (50+ examples, &gt;85% pass)</div>
            <div className="cc-check"><strong>LLM-as-judge</strong> eval running in CI on every PR</div>
            <div className="cc-check"><strong>Tracing enabled</strong> — every call logged with tokens + cost</div>
            <div className="cc-check"><strong>Fallback model</strong> configured via LiteLLM</div>
            <div className="cc-check"><strong>Prompt versioned</strong> in registry with rollback path</div>
            <div className="cc-check"><strong>Cost alerts</strong> set at reasonable thresholds</div>
            <div className="cc-check"><strong>Safety eval</strong> — adversarial inputs tested</div>
            <div className="cc-check"><strong>Latency SLA</strong> defined and monitored (p95)</div>
            <div className="cc-warn-box" style={{ marginTop: 10 }}>
              <div className="cc-warn-head">Most common mistake</div>
              <div className="cc-warn-body">Shipping a prompt change without re-running evals. "It looks good in testing" is not an eval strategy.</div>
            </div>
          </div>

        </div>

        {/* FOOTER */}
        <div className="cc-footer">
          <div className="cc-footer-text"><strong>Hari Prasad</strong> &nbsp;—&nbsp; <Link to="/">myrealproduct.com</Link> &nbsp;•&nbsp; LLMOps 101</div>
          <div className="cc-footer-text">also: <strong><Link to="/resources/claude-code-101">Claude Code 101 →</Link></strong></div>
        </div>

      </div>
    </>
  );
}
