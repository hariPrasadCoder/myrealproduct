import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const css = `
.cc101 {
  --ink: #1C1917;
  --ink2: #44403C;
  --ink3: #78716C;
  --paper: #FAFAF9;
  --paper2: #F5F5F4;
  --paper3: #E7E5E4;
  --accent: #7C3AED;
  --accent-bg: #EDE9FE;
  --accent-mid: #A78BFA;
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

.cc101 *, .cc101 *::before, .cc101 *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* HEADER */
.cc101 .cc-header {
  padding: 36px 48px 32px;
  border-bottom: 1.5px solid var(--ink);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.cc101 .cc-eyebrow {
  font-family: var(--mono);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--ink3);
  margin-bottom: 6px;
}

.cc101 .cc-header h1 {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.0;
  letter-spacing: -0.03em;
  color: var(--ink);
  font-family: var(--serif);
}

.cc101 .cc-header h1 em {
  font-style: italic;
  font-weight: 300;
  color: var(--accent);
  font-family: var(--serif);
}

.cc101 .cc-byline {
  text-align: right;
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink3);
  line-height: 1.8;
}
.cc101 .cc-byline strong {
  color: var(--ink);
  font-weight: 500;
  display: block;
  font-size: 13px;
}
.cc101 .cc-byline a,
.cc101 .cc-footer-text a {
  color: inherit;
  text-decoration: none;
}
.cc101 .cc-byline a:hover,
.cc101 .cc-footer-text a:hover {
  color: var(--accent);
}

/* GRID */
.cc101 .cc-row {
  display: grid;
  border-bottom: 1px solid var(--border);
}
.cc101 .cc-row-2   { grid-template-columns: 1fr 1fr; }
.cc101 .cc-row-3   { grid-template-columns: 1fr 1fr 1fr; }
.cc101 .cc-row-4   { grid-template-columns: 1fr 1fr 1fr 1fr; }
.cc101 .cc-row-12  { grid-template-columns: 1fr 2fr; }

.cc101 .cc-cell {
  padding: 24px 28px;
  border-right: 1px solid var(--border);
}
.cc101 .cc-cell:last-child { border-right: none; }

/* LABELS */
.cc101 .cc-label {
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
.cc101 .cc-label::before {
  content: '';
  display: inline-block;
  width: 16px;
  height: 1.5px;
  background: var(--accent);
  flex-shrink: 0;
}

.cc101 .cc-section-h {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: 12px;
}
.cc101 .cc-section-h em {
  font-style: italic;
  font-weight: 300;
  color: var(--ink2);
}

.cc101 .cc-body {
  font-size: 12.5px;
  color: var(--ink2);
  line-height: 1.65;
  font-weight: 300;
}
.cc101 .cc-body strong {
  font-weight: 600;
  color: var(--ink);
}

/* CODE */
.cc101 .cc-code-block {
  font-family: var(--mono);
  font-size: 11px;
  background: var(--ink);
  color: #D4D0CC;
  border-radius: 6px;
  padding: 12px 14px;
  margin: 10px 0;
  line-height: 1.9;
  white-space: pre;
}
.cc101 .cc-code-block .co { color: #6B7280; }
.cc101 .cc-code-block .cm { color: #A78BFA; }
.cc101 .cc-code-block .fl { color: #6EE7B7; }
.cc101 .cc-code-block .st { color: #FCA5A5; }

.cc101 code {
  font-family: var(--mono);
  font-size: 10.5px;
  background: var(--paper3);
  color: var(--accent);
  padding: 1px 5px;
  border-radius: 3px;
  font-weight: 500;
}

/* ITEMS */
.cc101 .cc-item {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  margin-bottom: 9px;
}
.cc101 .cc-item:last-child { margin-bottom: 0; }

.cc101 .cc-icmd {
  font-family: var(--mono);
  font-size: 10.5px;
  font-weight: 500;
  color: var(--accent);
  background: var(--accent-bg);
  border: 1px solid #DDD6FE;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  flex-shrink: 0;
  line-height: 1.7;
}

.cc101 .cc-icmd-red   { color: var(--red);   background: var(--red-bg);   border-color: #FECACA; }
.cc101 .cc-icmd-green { color: var(--green);  background: var(--green-bg); border-color: #BBF7D0; }
.cc101 .cc-icmd-amber { color: var(--amber);  background: var(--amber-bg); border-color: #FDE68A; }
.cc101 .cc-icmd-blue  { color: var(--blue);   background: var(--blue-bg);  border-color: #BFDBFE; }
.cc101 .cc-icmd-gray  { color: var(--ink2);   background: var(--paper3);   border-color: var(--border); }

.cc101 .cc-idesc {
  font-size: 12px;
  color: var(--ink2);
  line-height: 1.5;
  font-weight: 300;
  padding-top: 2px;
}
.cc101 .cc-idesc strong {
  font-weight: 600;
  color: var(--ink);
}

.cc101 .cc-hr { border: none; border-top: 1px solid var(--border); margin: 12px 0; }

/* PILLS */
.cc101 .cc-pill {
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
.cc101 .cc-pill-purple { background: var(--accent-bg); color: var(--accent); }
.cc101 .cc-pill-green  { background: var(--green-bg);  color: var(--green); }
.cc101 .cc-pill-amber  { background: var(--amber-bg);  color: var(--amber); }
.cc101 .cc-pill-red    { background: var(--red-bg);    color: var(--red); }

/* PLAN CARDS */
.cc101 .cc-plan-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9px;
  margin-top: 4px;
}
.cc101 .cc-plan-card {
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 13px;
}
.cc101 .cc-plan-price {
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -0.02em;
  font-family: var(--serif);
  line-height: 1;
  margin-bottom: 2px;
}
.cc101 .cc-plan-price span {
  font-size: 12px;
  font-weight: 300;
  color: var(--ink3);
}
.cc101 .cc-plan-name {
  font-family: var(--mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ink3);
  margin-bottom: 7px;
}
.cc101 .cc-plan-desc {
  font-size: 11.5px;
  color: var(--ink2);
  line-height: 1.55;
  font-weight: 300;
}
.cc101 .cc-plan-max {
  border-color: var(--accent);
  background: #FAFAFF;
}
.cc101 .cc-plan-max .cc-plan-price { color: var(--accent); }
.cc101 .cc-plan-max .cc-plan-name  { color: var(--accent); }

/* WHERE TO USE */
.cc101 .cc-use-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 9px;
  margin-top: 4px;
}
.cc101 .cc-use-card {
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 12px 12px 10px;
}
.cc101 .cc-use-card.hl { border-color: var(--accent); background: #FAFAFF; }
.cc101 .cc-use-num {
  font-family: var(--mono);
  font-size: 20px;
  font-weight: 500;
  color: var(--paper3);
  line-height: 1;
  margin-bottom: 6px;
}
.cc101 .cc-use-title {
  font-family: var(--mono);
  font-size: 10.5px;
  font-weight: 500;
  color: var(--ink);
  margin-bottom: 3px;
}
.cc101 .cc-use-desc  {
  font-size: 11.5px;
  color: var(--ink3);
  line-height: 1.5;
  font-weight: 300;
}
.cc101 .cc-use-rec {
  font-family: var(--mono);
  font-size: 8.5px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent);
  margin-top: 5px;
  font-weight: 500;
}

/* TAGLINE */
.cc101 .cc-tagline {
  font-size: 12.5px;
  font-style: italic;
  color: var(--ink3);
  border-left: 2.5px solid var(--accent-mid);
  padding-left: 10px;
  margin: 10px 0;
  line-height: 1.5;
  font-weight: 300;
}

/* CONTEXT BAR */
.cc101 .cc-ctx-bar {
  display: flex;
  height: 7px;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 5px;
}
.cc101 .cc-ctx-g { background: #22C55E; flex: 7; }
.cc101 .cc-ctx-y { background: #EAB308; flex: 2; }
.cc101 .cc-ctx-r { background: #EF4444; flex: 1; }
.cc101 .cc-ctx-labels {
  display: flex;
  justify-content: space-between;
  font-family: var(--mono);
  font-size: 9px;
  color: var(--ink3);
  margin-bottom: 10px;
}

/* WARNING BOX */
.cc101 .cc-warn-box {
  border: 1px solid #FECACA;
  background: #FFF5F5;
  border-radius: 6px;
  padding: 11px 13px;
  margin-top: 10px;
}
.cc101 .cc-warn-head {
  font-family: var(--mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--red);
  font-weight: 500;
  margin-bottom: 5px;
}
.cc101 .cc-warn-body {
  font-size: 11.5px;
  color: #7F1D1D;
  line-height: 1.5;
  font-weight: 300;
}

/* FOOTER */
.cc101 .cc-footer {
  border-top: 1.5px solid var(--ink);
  padding: 12px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cc101 .cc-footer-text {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--ink3);
}
.cc101 .cc-footer-text strong {
  color: var(--ink);
  font-weight: 500;
}

@media (max-width: 768px) {
  .cc101 .cc-header {
    padding: 24px 20px 20px;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
  .cc101 .cc-header h1 { font-size: 32px; }
  .cc101 .cc-byline { text-align: left; }
  .cc101 .cc-row-2,
  .cc101 .cc-row-3,
  .cc101 .cc-row-4,
  .cc101 .cc-row-12 { grid-template-columns: 1fr; }
  .cc101 .cc-cell { border-right: none; border-bottom: 1px solid var(--border); padding: 20px; }
  .cc101 .cc-cell:last-child { border-bottom: none; }
  .cc101 .cc-plan-grid { grid-template-columns: 1fr 1fr; }
  .cc101 .cc-use-grid { grid-template-columns: 1fr; }
  .cc101 .cc-footer { padding: 12px 20px; flex-direction: column; gap: 4px; align-items: flex-start; }
}
`;

export default function ClaudeCode101Page() {
  return (
    <>
      <Helmet>
        <title>Claude Code 101 — Cheatsheet by Hari Prasad</title>
        <meta
          name="description"
          content="A practical Claude Code cheatsheet covering installation, plans, /init, CLAUDE.md, context management, plan mode, and more. By Hari Prasad of MyRealProduct."
        />
        <link rel="canonical" href="https://www.myrealproduct.com/resources/claude-code-101" />
        <meta property="og:title" content="Claude Code 101 — Cheatsheet by Hari Prasad" />
        <meta
          property="og:description"
          content="A practical Claude Code cheatsheet covering installation, plans, /init, CLAUDE.md, context management, plan mode, and more."
        />
        <meta property="og:url" content="https://www.myrealproduct.com/resources/claude-code-101" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,700;1,9..144,300&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="cc101">

        {/* HEADER */}
        <div className="cc-header">
          <div>
            <div className="cc-eyebrow">Intro Session &nbsp;—&nbsp; 2026</div>
            <h1>Claude <em>Code</em><br />Cheatsheet</h1>
          </div>
          <div className="cc-byline">
            <strong>Hari Prasad</strong>
            MyRealProduct &nbsp;•&nbsp; <Link to="/">myrealproduct.com</Link>
          </div>
        </div>

        {/* ROW 1 — Intro + Where to use */}
        <div className="cc-row cc-row-12">

          <div className="cc-cell">
            <div className="cc-label">What is it</div>
            <div className="cc-section-h">Short <em>intro</em></div>
            <p className="cc-body">Claude Code is an <strong>agentic coding tool</strong> that runs in your terminal. It reads files, writes code, runs commands, and works through problems on its own.</p>
            <div className="cc-tagline">Not a chatbot. An AI that actually does the work.</div>
            <p className="cc-body" style={{ marginTop: 8 }}>Describe what you want. Claude explores, plans, and builds. You watch, redirect, or step away entirely.</p>
          </div>

          <div className="cc-cell">
            <div className="cc-label">Access options</div>
            <div className="cc-section-h">Where to <em>use</em> it</div>
            <div className="cc-use-grid">
              <div className="cc-use-card hl">
                <div className="cc-use-num">01</div>
                <div className="cc-use-title">CLI / Terminal</div>
                <div className="cc-use-desc">Full power. Best experience. Run directly from any project folder in your terminal.</div>
                <div className="cc-use-rec">★ Preferred</div>
              </div>
              <div className="cc-use-card">
                <div className="cc-use-num">02</div>
                <div className="cc-use-title">claude.ai App</div>
                <div className="cc-use-desc">Web &amp; mobile. Great for questions, writing, ideation. No file system access.</div>
              </div>
              <div className="cc-use-card">
                <div className="cc-use-num">03</div>
                <div className="cc-use-title">VS Code Extension</div>
                <div className="cc-use-desc">Launches Claude Code inside your IDE. Also works with Cursor and Windsurf.</div>
              </div>
            </div>
          </div>

        </div>

        {/* ROW 2 — Plans + Install + Start/Stop */}
        <div className="cc-row cc-row-3">

          <div className="cc-cell">
            <div className="cc-label">Pricing</div>
            <div className="cc-section-h">Which <em>plan</em>?</div>
            <div className="cc-plan-grid">
              <div className="cc-plan-card">
                <div className="cc-plan-name">Pro</div>
                <div className="cc-plan-price">$20<span>/mo</span></div>
                <div className="cc-plan-desc" style={{ marginTop: 7 }}>
                  Good for hobby projects, learning, and occasional use.
                </div>
              </div>
              <div className="cc-plan-card cc-plan-max">
                <div className="cc-plan-name">Max</div>
                <div className="cc-plan-price">$100<span>/mo</span></div>
                <div className="cc-plan-desc" style={{ marginTop: 7, color: '#4C1D95' }}>
                  Enough for almost all serious, daily use. Full Opus access.
                </div>
              </div>
            </div>
            <p className="cc-body" style={{ marginTop: 10, fontSize: 11, color: 'var(--ink3)', fontStyle: 'italic' }}>A junior engineer costs more per hour than this per month.</p>
          </div>

          <div className="cc-cell">
            <div className="cc-label">Setup</div>
            <div className="cc-section-h">Installation</div>
            <div className="cc-code-block">
              <span className="co"># npm install (requires Node.js){'\n'}</span>
              <span className="cm">npm install -g @anthropic-ai/claude-code{'\n'}</span>
              {'\n'}
              <span className="co"># Native binary — faster, no Node needed{'\n'}</span>
              <span className="cm">claude install{'\n'}</span>
              {'\n'}
              <span className="co"># Migrate from npm to native{'\n'}</span>
              <span className="cm">claude migrate-installer</span>
            </div>
          </div>

          <div className="cc-cell">
            <div className="cc-label">Starting &amp; stopping</div>
            <div className="cc-section-h">Basic <em>session</em></div>
            <div className="cc-item" style={{ marginBottom: 12 }}>
              <span className="cc-icmd cc-icmd-green">claude</span>
              <span className="cc-idesc"><strong>Start</strong> a session. Run this inside your project folder. Claude reads your files from that directory.</span>
            </div>
            <div className="cc-item">
              <span className="cc-icmd cc-icmd-gray">/exit</span>
              <span className="cc-idesc"><strong>End</strong> the session and return to your normal terminal.</span>
            </div>
            <div className="cc-hr" />
            <div className="cc-item">
              <span className="cc-icmd cc-icmd-blue">/usage</span>
              <span className="cc-idesc">View your <strong>usage stats</strong> — activity graph, token usage, session history. Good to check regularly.</span>
            </div>
            <div className="cc-item">
              <span className="cc-icmd cc-icmd-blue">/mcp</span>
              <span className="cc-idesc">Manage <strong>MCP servers</strong> — connect external tools like Slack, Notion, GitHub, databases.</span>
            </div>
          </div>

        </div>

        {/* ROW 3 — /init + Files/Images + Skills */}
        <div className="cc-row cc-row-3">

          <div className="cc-cell">
            <div className="cc-label">Project setup</div>
            <div className="cc-section-h"><em>/init</em></div>
            <div className="cc-item">
              <span className="cc-icmd">/init</span>
              <span className="cc-idesc">Auto-generates <strong>CLAUDE.md</strong> from your project. Detects build system, test commands, and code patterns. <strong>Run once per project.</strong></span>
            </div>
            <div className="cc-tagline" style={{ marginTop: 10 }}>This is the first thing you should run in any new project.</div>
            <div className="cc-hr" />
            <div className="cc-label" style={{ marginTop: 4, marginBottom: 10 }}>CLAUDE.md</div>
            <p className="cc-body" style={{ fontSize: 12 }}>Claude reads this file at the <strong>start of every session</strong>. Your project rules, commands, and style guide live here — no need to repeat yourself.</p>
            <div className="cc-code-block" style={{ marginTop: 8, fontSize: 10.5 }}>
              <span className="co"># Commands{'\n'}</span>
              <span className="st">- Tests: pytest -v --cov{'\n'}</span>
              <span className="st">- Dev: npm run dev{'\n'}</span>
              <span className="co"># Rules{'\n'}</span>
              <span className="st">- Plan before coding{'\n'}</span>
              <span className="st">- Never touch migration files</span>
            </div>
            <div className="cc-item" style={{ marginTop: 8 }}>
              <span className="cc-icmd cc-icmd-gray">#</span>
              <span className="cc-idesc">Start a message with <strong>#</strong> to save it to CLAUDE.md memory permanently.</span>
            </div>
          </div>

          <div className="cc-cell">
            <div className="cc-label">Context input</div>
            <div className="cc-section-h">Files &amp; <em>images</em></div>
            <div className="cc-item">
              <span className="cc-icmd">@filename</span>
              <span className="cc-idesc">Tag a <strong>file</strong> to include it in context. E.g. <code>@src/app.py</code> or <code>@README.md</code></span>
            </div>
            <div className="cc-item" style={{ marginTop: 6 }}>
              <span className="cc-icmd cc-icmd-amber">Ctrl + V</span>
              <span className="cc-idesc"><strong>Paste an image</strong> directly into the prompt. Works for screenshots, error messages, UI mockups, diagrams.</span>
            </div>
            <div className="cc-hr" />
            <div className="cc-label" style={{ marginBottom: 10 }}>Voice input</div>
            <p className="cc-body" style={{ fontSize: 12, marginBottom: 8 }}>Use a voice-to-text app to <strong>dictate prompts</strong> instead of typing. Much faster for complex instructions.</p>
            <div className="cc-warn-box" style={{ borderColor: '#DDD6FE', background: '#FAFAFF' }}>
              <div className="cc-warn-head" style={{ color: 'var(--accent)' }}>★ Try this</div>
              <div className="cc-warn-body" style={{ color: '#3B0764', fontSize: 12 }}>
                <a href="https://tryvoiceink.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#3B0764', fontWeight: 600 }}>VoiceInk</a> (Mac) — dictate directly into Claude's prompt box. Pairs with Claude Code extremely well for longer instructions and code specs.
              </div>
            </div>
          </div>

          <div className="cc-cell">
            <div className="cc-label">Skills</div>
            <div className="cc-section-h">Skills</div>
            <p className="cc-body" style={{ fontSize: 12 }}>Markdown files that extend Claude's knowledge <strong>on demand.</strong> Unlike CLAUDE.md (every session), skills only load when relevant — keeps context lean.</p>
            <div className="cc-code-block" style={{ marginTop: 10, fontSize: 10.5 }}>
              <span className="co"># Create a skills folder{'\n'}</span>
              <span className="cm">mkdir -p .claude/skills/{'\n'}</span>
              {'\n'}
              <span className="co"># .claude/skills/deploy.md{'\n'}</span>
              <span className="st">---{'\n'}</span>
              <span className="st">name: deploy{'\n'}</span>
              <span className="st">description: Use when deploying.{'\n'}</span>
              <span className="st">---{'\n'}</span>
              <span className="st">Always run tests first.{'\n'}</span>
              <span className="st">Command: railway up --detach</span>
            </div>
            <div className="cc-item" style={{ marginTop: 8 }}>
              <span className="cc-icmd">/skill-name</span>
              <span className="cc-idesc">Invoke a skill directly, or Claude picks it up automatically when the task matches.</span>
            </div>
            <div className="cc-item">
              <span className="cc-icmd cc-icmd-blue">/plugin</span>
              <span className="cc-idesc">Browse installable plugin bundles — pre-built skills, hooks, and MCP servers.</span>
            </div>
            <p className="cc-body" style={{ marginTop: 8, fontSize: 11, color: 'var(--ink3)', fontStyle: 'italic' }}>Good skills to make: deploy steps, API conventions, coding patterns, onboarding docs.</p>
          </div>

        </div>

        {/* ROW 4 — Context mgmt + Modes + Danger */}
        <div className="cc-row cc-row-4">

          <div className="cc-cell">
            <div className="cc-label">Context management</div>
            <div className="cc-section-h"><em>/clear</em> &amp; <em>/compact</em></div>
            <div className="cc-item">
              <span className="cc-icmd cc-icmd-red">/clear</span>
              <span className="cc-idesc"><strong>Wipe context completely.</strong> Use every time you switch tasks. Stale context silently hurts quality.</span>
            </div>
            <div className="cc-item" style={{ marginTop: 6 }}>
              <span className="cc-icmd cc-icmd-amber">/compact</span>
              <span className="cc-idesc"><strong>Compress context</strong> mid-session without losing thread. Use when running long on one task.</span>
            </div>
            <div className="cc-hr" />
            <div className="cc-ctx-bar">
              <div className="cc-ctx-g" />
              <div className="cc-ctx-y" />
              <div className="cc-ctx-r" />
            </div>
            <div className="cc-ctx-labels"><span>0%</span><span>70%</span><span>90%+</span></div>
            <div className="cc-item">
              <span className="cc-pill cc-pill-green">0–70%</span>
              <span className="cc-idesc" style={{ fontSize: 11, paddingTop: 1 }}>Work freely</span>
            </div>
            <div className="cc-item">
              <span className="cc-pill cc-pill-amber">70–90%</span>
              <span className="cc-idesc" style={{ fontSize: 11, paddingTop: 1 }}>Run <code>/compact</code></span>
            </div>
            <div className="cc-item">
              <span className="cc-pill cc-pill-red">90%+</span>
              <span className="cc-idesc" style={{ fontSize: 11, paddingTop: 1 }}>Run <code>/clear</code> — mandatory</span>
            </div>
          </div>

          <div className="cc-cell">
            <div className="cc-label">Thinking mode</div>
            <div className="cc-section-h">Plan <em>mode</em></div>
            <div className="cc-tagline" style={{ marginBottom: 10 }}>"Plan first. Don't write any code yet."</div>
            <p className="cc-body" style={{ fontSize: 12, marginBottom: 10 }}>Forces Claude to think through the approach before touching files. You review, give feedback, then say "go."</p>
            <div className="cc-item">
              <span className="cc-icmd">/plan</span>
              <span className="cc-idesc">Activate plan mode via slash command</span>
            </div>
            <div className="cc-item">
              <span className="cc-icmd cc-icmd-amber">ultrathink</span>
              <span className="cc-idesc">Add to any prompt for <strong>deep reasoning</strong> — architecture, complex bugs, multi-step problems</span>
            </div>
            <div className="cc-hr" />
            <p className="cc-body" style={{ fontSize: 11, color: 'var(--ink3)', fontStyle: 'italic' }}>Use plan mode for anything that touches more than 3 files or involves a decision you can't easily undo.</p>
          </div>

          <div className="cc-cell">
            <div className="cc-label">Editing mode</div>
            <div className="cc-section-h">Edit <em>mode</em></div>
            <p className="cc-body" style={{ fontSize: 12, marginBottom: 10 }}>A focused mode for making <strong>targeted edits</strong> to existing files — line-level changes, find &amp; replace, surgical rewrites.</p>
            <div className="cc-item">
              <span className="cc-icmd">/edit</span>
              <span className="cc-idesc">Activate edit mode. Claude focuses on modifying specific parts of your codebase rather than generating new files.</span>
            </div>
            <div className="cc-hr" />
            <p className="cc-body" style={{ fontSize: 12, marginBottom: 8 }}>In edit mode, be explicit:</p>
            <div className="cc-code-block" style={{ fontSize: 10.5 }}>
              <span className="co"># Good edit prompts{'\n'}</span>
              <span className="st">Edit line 42 in auth.py to...{'\n'}</span>
              <span className="st">Change the return type of{'\n'}</span>
              <span className="st">  getUser() from any to User{'\n'}</span>
              <span className="st">Only touch the navbar component</span>
            </div>
          </div>

          <div className="cc-cell">
            <div className="cc-label">Advanced — use carefully</div>
            <div className="cc-section-h"><em>Skip</em> permissions</div>
            <div className="cc-warn-box">
              <div className="cc-warn-head">⚠ Use with caution</div>
              <div className="cc-warn-body">Skips all permission prompts. Claude runs autonomously without asking for approval on file writes, command execution, or deletions.</div>
            </div>
            <div className="cc-code-block" style={{ marginTop: 10, fontSize: 10.5 }}>
              <span className="co"># Flag at startup{'\n'}</span>
              <span className="cm">claude --dangerously-skip{'\n'}</span>
              <span className="cm">  -permissions{'\n'}</span>
              {'\n'}
              <span className="co"># Or via settings{'\n'}</span>
              <span className="cm">"bypassPermissions": true</span>
            </div>
            <p className="cc-body" style={{ marginTop: 10, fontSize: 11, color: 'var(--ink3)' }}>
              <strong style={{ color: 'var(--red)' }}>When to use:</strong> Automated pipelines, CI/CD, fully sandboxed environments, or when you trust the task completely and want zero interruptions.
            </p>
            <p className="cc-body" style={{ marginTop: 6, fontSize: 11, color: 'var(--red)' }}>
              Never use on production systems or any codebase you can't easily restore.
            </p>
          </div>

        </div>

        {/* FOOTER */}
        <div className="cc-footer">
          <div className="cc-footer-text"><strong>Hari Prasad</strong> &nbsp;—&nbsp; <Link to="/">myrealproduct.com</Link> &nbsp;•&nbsp; Claude Code Intro Session 2026</div>
          <div className="cc-footer-text">docs: <strong>code.claude.com/docs</strong></div>
        </div>

      </div>
    </>
  );
}
