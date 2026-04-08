<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex">
<title>AI-SDLC — From Copilot to Agentic Workflows</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #0a0a0f;
    --surface: #12121a;
    --surface-2: #1a1a26;
    --surface-3: #22222f;
    --border: #2a2a3a;
    --text: #e4e4ef;
    --text-muted: #8888a0;
    --text-dim: #5a5a72;
    --accent: #7c5cfc;
    --accent-light: #9b7fff;
    --accent-glow: rgba(124, 92, 252, 0.15);
    --accent-2: #00d4aa;
    --accent-2-glow: rgba(0, 212, 170, 0.12);
    --accent-3: #ff6b8a;
    --orange: #e8913a;
    --orange-glow: rgba(232, 145, 58, 0.15);
    --blue: #5b8def;
    --teal: #3bbfa0;
    --yellow: #f0c040;
    --pink: #e85b8a;
    --purple: #9b7fff;
    --gradient-1: linear-gradient(135deg, #7c5cfc 0%, #00d4aa 100%);
    --gradient-2: linear-gradient(135deg, #7c5cfc 0%, #ff6b8a 100%);
    --gradient-text: linear-gradient(135deg, #9b7fff 0%, #00d4aa 100%);
    --radius: 12px;
    --radius-sm: 8px;
    --shadow: 0 4px 24px rgba(0,0,0,0.3);
    --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.7;
    font-size: 16px;
    min-height: 100vh;
    overflow-x: hidden;
  }

  body::before {
    content: '';
    position: fixed;
    top: -50%; left: -50%;
    width: 200%; height: 200%;
    background: radial-gradient(ellipse at 30% 20%, rgba(124, 92, 252, 0.06) 0%, transparent 50%),
                radial-gradient(ellipse at 70% 80%, rgba(0, 212, 170, 0.04) 0%, transparent 50%);
    z-index: -1;
    animation: bgShift 20s ease-in-out infinite alternate;
  }
  @keyframes bgShift { 0% { transform: translate(0,0); } 100% { transform: translate(-5%,3%); } }

  /* ─── Header ─── */
  .site-header {
    position: sticky; top: 0; z-index: 100;
    background: rgba(10, 10, 15, 0.85);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
  }
  .header-inner {
    max-width: 1100px; margin: 0 auto; padding: 0 2rem;
    display: flex; align-items: center; justify-content: space-between; height: 64px;
  }
  .logo {
    font-weight: 700; font-size: 1.1rem;
    background: var(--gradient-text); -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    letter-spacing: -0.02em;
  }
  .tab-nav { display: flex; gap: 2px; background: var(--surface); border-radius: 10px; padding: 3px; }
  .tab-btn {
    padding: 8px 18px; border: none; background: transparent; color: var(--text-muted);
    font-family: inherit; font-size: 0.85rem; font-weight: 500; border-radius: 8px;
    cursor: pointer; transition: var(--transition); white-space: nowrap;
  }
  .tab-btn:hover { color: var(--text); background: var(--surface-2); }
  .tab-btn.active { color: #fff; background: var(--accent); box-shadow: 0 2px 12px rgba(124, 92, 252, 0.3); }

  /* ─── Pages ─── */
  .page { display: none; animation: fadeIn 0.4s ease; }
  .page.active { display: block; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
  .container { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }

  /* ─── Hero ─── */
  .hero { padding: 5rem 0 4rem; text-align: center; }
  .hero-badge {
    display: inline-block; padding: 6px 16px; border-radius: 20px;
    border: 1px solid var(--border); background: var(--surface);
    color: var(--accent-light); font-size: 0.8rem; font-weight: 500;
    margin-bottom: 1.5rem; letter-spacing: 0.04em; text-transform: uppercase;
  }
  .hero h1 {
    font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800;
    letter-spacing: -0.03em; line-height: 1.1; margin-bottom: 1.5rem;
  }
  .hero h1 .gradient {
    background: var(--gradient-text); -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
  .hero .subtitle {
    font-size: 1.2rem; color: var(--text-muted); max-width: 640px;
    margin: 0 auto 2.5rem; font-weight: 400; line-height: 1.6;
  }

  /* ─── Content sections ─── */
  .content-section { padding: 3rem 0; }
  .content-section + .content-section { border-top: 1px solid var(--border); }
  .section-label {
    font-size: 0.75rem; font-weight: 600; text-transform: uppercase;
    letter-spacing: 0.1em; color: var(--accent-light); margin-bottom: 0.75rem;
  }
  .content-section h2 { font-size: 1.8rem; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 1rem; line-height: 1.2; }
  .content-section h3 { font-size: 1.2rem; font-weight: 600; margin: 2rem 0 0.75rem; color: var(--text); }
  .content-section p { color: var(--text-muted); margin-bottom: 1.25rem; max-width: 720px; }
  .content-section p.wide { max-width: none; }
  .center-text { text-align: center; margin-left: auto; margin-right: auto; }

  /* ─── Cards ─── */
  .card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.25rem; margin: 2rem 0; }
  .card-grid.three { grid-template-columns: repeat(3, 1fr); }
  .card {
    background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius);
    padding: 1.75rem; transition: var(--transition); position: relative; overflow: hidden;
  }
  .card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: var(--gradient-1); opacity: 0; transition: var(--transition);
  }
  .card:hover { border-color: rgba(124, 92, 252, 0.3); transform: translateY(-2px); box-shadow: 0 8px 32px rgba(124, 92, 252, 0.08); }
  .card:hover::before { opacity: 1; }
  .card-icon {
    width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center;
    font-size: 1.25rem; margin-bottom: 1rem; background: var(--accent-glow); border: 1px solid rgba(124, 92, 252, 0.2);
  }
  .card-icon.green { background: var(--accent-2-glow); border-color: rgba(0, 212, 170, 0.2); }
  .card-icon.pink { background: rgba(255, 107, 138, 0.1); border-color: rgba(255, 107, 138, 0.2); }
  .card-icon.orange { background: var(--orange-glow); border-color: rgba(232, 145, 58, 0.2); }
  .card h4 { font-size: 1.05rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--text); }
  .card p { font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0; }

  /* ─── Tactic Cards ─── */
  .tactic-card {
    background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius);
    padding: 2rem; transition: var(--transition); position: relative; overflow: hidden;
  }
  .tactic-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
    opacity: 0; transition: var(--transition);
  }
  .tactic-card:hover { border-color: rgba(124, 92, 252, 0.3); transform: translateY(-2px); box-shadow: 0 8px 32px rgba(124, 92, 252, 0.08); }
  .tactic-card:hover::before { opacity: 1; }
  .tactic-card .tactic-icon {
    width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center;
    font-size: 1.4rem; margin-bottom: 1.25rem;
  }
  .tactic-card h4 { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text); }
  .tactic-card .tactic-desc { font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1rem; }
  .tactic-card .tactic-prompt {
    font-size: 0.82rem; color: var(--text); line-height: 1.5;
    padding: 1rem 1.25rem; border-radius: var(--radius-sm);
    background: rgba(124, 92, 252, 0.04); border: 1px solid rgba(124, 92, 252, 0.12);
    font-style: italic;
  }
  .tactic-card .tactic-why {
    font-size: 0.78rem; color: var(--text-dim); margin-top: 1rem; line-height: 1.5;
    padding-top: 0.75rem; border-top: 1px solid var(--border);
  }
  .tactic-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 1.25rem; margin: 2rem 0; }

  /* ─── Stacked Layers Diagram ─── */
  .stack-diagram {
    display: flex; align-items: center; justify-content: center; gap: 3rem;
    margin: 3rem 0; padding: 2rem 0;
  }
  .stack-visual { position: relative; width: 420px; height: 280px; perspective: 800px; }
  .stack-layer {
    position: absolute; left: 50%; border-radius: 10px;
    transform-style: preserve-3d;
    transform: translateX(-50%) rotateX(25deg) rotateZ(-5deg);
    box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    display: flex; align-items: center; padding-left: 24px;
    font-weight: 600; font-size: 0.95rem; letter-spacing: 0.01em;
    transition: all 0.4s ease;
  }
  .stack-layer:hover { transform: translateX(-50%) rotateX(25deg) rotateZ(-5deg) translateY(-6px); }
  .stack-layer.prompting {
    width: 320px; height: 55px; bottom: 10px;
    background: linear-gradient(135deg, #3a3a52, #4a4a64); color: #b0b0c8;
  }
  .stack-layer.context {
    width: 350px; height: 60px; bottom: 80px;
    background: linear-gradient(135deg, #4a6ea8, #5b8def); color: #fff;
  }
  .stack-layer.intent {
    width: 380px; height: 68px; bottom: 158px;
    background: linear-gradient(135deg, #d07828, #e8913a); color: #fff; font-size: 1.05rem;
  }
  .stack-labels { display: flex; flex-direction: column; gap: 0.5rem; max-width: 340px; }
  .stack-label-item { padding: 0.75rem 0; }
  .stack-label-item h4 { font-size: 1rem; font-weight: 700; margin-bottom: 0.25rem; }
  .stack-label-item p { font-size: 0.82rem; color: var(--text-muted); margin: 0; line-height: 1.5; }
  .stack-label-item.l-intent h4 { color: var(--orange); }
  .stack-label-item.l-context h4 { color: var(--blue); }
  .stack-label-item.l-prompting h4 { color: #8888a0; }

  .takeaway-banner {
    text-align: center; padding: 2rem; margin: 1.5rem 0;
    font-style: italic; font-size: 1.15rem; color: var(--text);
    border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
  }
  .takeaway-banner em { color: #fff; font-style: italic; }

  /* ─── Framework Grid ─── */
  .framework-wrap {
    display: flex; gap: 2rem; margin: 2.5rem 0; align-items: stretch;
  }
  .fw-layers { display: flex; flex-direction: column; gap: 6px; min-width: 170px; }
  .fw-layer-pill {
    display: flex; align-items: center; gap: 10px;
    padding: 10px 16px; border-radius: 8px; font-size: 0.8rem; font-weight: 600;
    text-transform: uppercase; letter-spacing: 0.04em; color: #fff;
  }
  .fw-layer-pill .fw-icon {
    width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
    background: rgba(255,255,255,0.15); font-size: 0.75rem;
  }
  .fw-layer-pill.vision { background: var(--blue); }
  .fw-layer-pill.strategy { background: var(--teal); }
  .fw-layer-pill.design { background: var(--teal); }
  .fw-layer-pill.impl { background: var(--orange); }
  .fw-layer-pill.verify { background: var(--pink); }
  .fw-layer-pill.ops { background: var(--purple); }

  .fw-grid-area {
    flex: 1; display: grid;
    grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(6, 1fr);
    gap: 6px;
  }
  .fw-col-header {
    font-size: 0.65rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.06em; text-align: center; padding: 6px 4px; border-radius: 6px;
    color: #fff; display: flex; align-items: center; justify-content: center;
  }
  .fw-col-header:nth-child(1) { background: var(--blue); }
  .fw-col-header:nth-child(2) { background: var(--teal); }
  .fw-col-header:nth-child(3) { background: var(--accent-light); }
  .fw-col-header:nth-child(4) { background: var(--purple); }
  .fw-cell {
    background: rgba(59, 191, 160, 0.06); border: 1px solid rgba(59, 191, 160, 0.12);
    border-radius: 6px; display: flex; align-items: center; justify-content: center;
  }
  .fw-dot {
    width: 14px; height: 14px; border-radius: 50%;
    border: 3px solid var(--teal); background: rgba(0,0,0,0.5);
  }
  .fw-dot.filled { background: var(--teal); }
  .fw-dot.purple-border { border-color: var(--purple); }
  .fw-dot.purple-filled { border-color: var(--purple); background: var(--purple); }
  .fw-cell:nth-child(4n+3) .fw-dot,
  .fw-cell:nth-child(4n+4) .fw-dot { border-color: var(--purple); }

  .fw-benefits {
    min-width: 200px; background: var(--surface); border: 1px solid var(--border);
    border-radius: var(--radius); padding: 1.5rem;
  }
  .fw-benefits h4 {
    font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em;
    color: var(--accent-light); margin-bottom: 1.25rem; font-weight: 700;
  }
  .fw-benefit-item { display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 1.25rem; }
  .fw-benefit-icon {
    width: 32px; height: 32px; min-width: 32px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center; font-size: 0.85rem;
  }
  .fw-benefit-icon.b1 { background: rgba(91, 141, 239, 0.15); border: 1px solid rgba(91, 141, 239, 0.3); }
  .fw-benefit-icon.b2 { background: var(--orange-glow); border: 1px solid rgba(232, 145, 58, 0.3); }
  .fw-benefit-icon.b3 { background: var(--accent-2-glow); border: 1px solid rgba(0, 212, 170, 0.3); }
  .fw-benefit-text { font-size: 0.8rem; font-weight: 600; color: var(--text); line-height: 1.4; }

  /* ─── Physics vs Law Visual ─── */
  .physics-visual {
    display: grid; grid-template-columns: 1fr 60px 1fr; gap: 0;
    align-items: stretch; margin: 2.5rem 0;
  }
  .pv-side {
    background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius);
    padding: 1.75rem;
  }
  .pv-side.physics { border-color: rgba(0, 212, 170, 0.3); background: linear-gradient(180deg, rgba(0, 212, 170, 0.04), var(--surface)); }
  .pv-side h4 {
    font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em;
    margin-bottom: 1.25rem; font-weight: 700;
  }
  .pv-side.law h4 { color: var(--text-dim); }
  .pv-side.physics h4 { color: var(--accent-2); }
  .pv-arrow-col {
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem;
  }
  .pv-arrow {
    font-size: 1.2rem; color: var(--accent-2); animation: arrowPulse 2s ease-in-out infinite;
  }
  @keyframes arrowPulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }
  .pv-row {
    display: flex; align-items: flex-start; gap: 0.75rem;
    padding: 0.75rem 0; border-bottom: 1px solid var(--border);
  }
  .pv-row:last-child { border-bottom: none; }
  .pv-icon-sm {
    width: 28px; height: 28px; min-width: 28px; border-radius: 6px;
    display: flex; align-items: center; justify-content: center; font-size: 0.8rem;
    background: rgba(255,255,255,0.03); border: 1px solid var(--border);
  }
  .pv-side.physics .pv-icon-sm { background: rgba(0, 212, 170, 0.08); border-color: rgba(0, 212, 170, 0.2); }
  .pv-row-text { font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; }
  .pv-side.physics .pv-row-text { color: var(--text); }

  /* ─── RPI Flow Diagram ─── */
  .rpi-flow {
    display: flex; align-items: stretch; gap: 0; margin: 2.5rem 0;
    position: relative;
  }
  .rpi-phase {
    flex: 1; padding: 2rem 1.5rem; background: var(--surface);
    border: 1px solid var(--border); position: relative;
  }
  .rpi-phase:first-child { border-radius: var(--radius) 0 0 var(--radius); }
  .rpi-phase:last-child { border-radius: 0 var(--radius) var(--radius) 0; }
  .rpi-phase:not(:last-child) { border-right: none; }
  .rpi-num {
    font-size: 3rem; font-weight: 800; line-height: 1;
    margin-bottom: 0.5rem; opacity: 0.15;
  }
  .rpi-phase:nth-child(1) .rpi-num { color: var(--blue); }
  .rpi-phase:nth-child(2) .rpi-num { color: var(--accent-2); }
  .rpi-phase:nth-child(3) .rpi-num { color: var(--orange); }
  .rpi-phase h4 { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; }
  .rpi-phase:nth-child(1) h4 { color: var(--blue); }
  .rpi-phase:nth-child(2) h4 { color: var(--accent-2); }
  .rpi-phase:nth-child(3) h4 { color: var(--orange); }
  .rpi-phase p { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem; }
  .rpi-artifact {
    display: inline-flex; align-items: center; gap: 0.4rem;
    background: var(--surface-2); border: 1px solid var(--border);
    border-radius: 6px; padding: 4px 10px; font-size: 0.75rem;
    font-family: 'SF Mono', 'Fira Code', monospace; color: var(--text);
  }
  .rpi-connector {
    position: absolute; right: -16px; top: 50%; transform: translateY(-50%);
    z-index: 2; width: 30px; height: 30px; border-radius: 50%;
    background: var(--surface-2); border: 2px solid var(--accent-2);
    display: flex; align-items: center; justify-content: center;
    font-size: 0.85rem; color: var(--accent-2);
  }
  .rpi-phase:last-child .rpi-connector { display: none; }

  /* ─── Information Diet Visual ─── */
  .diet-visual { display: flex; flex-direction: column; gap: 1rem; margin: 2rem 0; }
  .diet-row {
    display: grid; grid-template-columns: 140px 1fr 140px; gap: 1rem; align-items: center;
  }
  .diet-agent {
    background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-sm);
    padding: 0.75rem; text-align: center; font-size: 0.85rem; font-weight: 600;
  }
  .diet-agent.research { border-color: rgba(91, 141, 239, 0.3); color: var(--blue); }
  .diet-agent.plan { border-color: rgba(0, 212, 170, 0.3); color: var(--accent-2); }
  .diet-agent.implement { border-color: rgba(232, 145, 58, 0.3); color: var(--orange); }
  .diet-bar {
    height: 40px; border-radius: 6px; position: relative;
    display: flex; align-items: center; overflow: hidden;
  }
  .diet-fill {
    height: 100%; border-radius: 6px; display: flex; align-items: center;
    padding: 0 12px; font-size: 0.72rem; font-weight: 600; color: rgba(255,255,255,0.9);
    white-space: nowrap;
  }
  .diet-row.research .diet-fill { width: 100%; background: linear-gradient(90deg, rgba(91, 141, 239, 0.2), rgba(91, 141, 239, 0.08)); border: 1px solid rgba(91, 141, 239, 0.2); }
  .diet-row.plan .diet-fill { width: 30%; background: linear-gradient(90deg, rgba(0, 212, 170, 0.2), rgba(0, 212, 170, 0.08)); border: 1px solid rgba(0, 212, 170, 0.2); }
  .diet-row.implement .diet-fill { width: 25%; background: linear-gradient(90deg, rgba(232, 145, 58, 0.2), rgba(232, 145, 58, 0.08)); border: 1px solid rgba(232, 145, 58, 0.2); }
  .diet-output {
    font-size: 0.75rem; font-family: 'SF Mono', monospace; color: var(--text-muted);
    text-align: center;
  }

  /* ─── Feedback Loop Diagram ─── */
  .feedback-loop-diagram {
    display: flex; align-items: center; justify-content: center;
    gap: 0; margin: 2.5rem auto; max-width: 700px; position: relative;
  }
  .fl-step {
    display: flex; flex-direction: column; align-items: center; text-align: center;
    padding: 1.25rem 1rem; flex: 1;
  }
  .fl-circle {
    width: 56px; height: 56px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
    font-size: 1.5rem; margin-bottom: 0.75rem;
    border: 2px solid var(--border); background: var(--surface);
  }
  .fl-step:nth-child(1) .fl-circle { border-color: var(--blue); background: rgba(91, 141, 239, 0.08); }
  .fl-step:nth-child(2) .fl-circle { border-color: var(--accent-2); background: rgba(0, 212, 170, 0.08); }
  .fl-step:nth-child(3) .fl-circle { border-color: var(--accent-3); background: rgba(255, 107, 138, 0.08); }
  .fl-step:nth-child(4) .fl-circle { border-color: var(--orange); background: var(--orange-glow); }
  .fl-step h5 { font-size: 0.82rem; font-weight: 600; color: var(--text); margin-bottom: 0.25rem; }
  .fl-step p { font-size: 0.72rem; color: var(--text-muted); margin: 0; }
  .fl-arrow {
    font-size: 1.2rem; color: var(--accent-2); margin: 0 -0.5rem; margin-top: -2rem;
    flex-shrink: 0;
  }
  .fl-return-arrow {
    position: absolute; bottom: -30px; left: 15%; right: 15%;
    height: 24px; border: 2px solid var(--accent-3); border-top: none;
    border-radius: 0 0 20px 20px; opacity: 0.4;
  }
  .fl-return-arrow::after {
    content: ''; position: absolute; left: -6px; top: -2px;
    border: 5px solid transparent; border-right-color: var(--accent-3);
  }
  .fl-return-label {
    position: absolute; bottom: -52px; left: 50%; transform: translateX(-50%);
    font-size: 0.7rem; color: var(--accent-3); white-space: nowrap; font-weight: 500;
  }

  /* ─── Wow Moments Visual ─── */
  .wow-timeline {
    display: flex; gap: 1.5rem; margin: 2rem 0;
    position: relative;
  }
  .wow-timeline::before {
    content: ''; position: absolute; top: 40px; left: 0; right: 0;
    height: 2px; background: linear-gradient(90deg, var(--blue), var(--accent-2), var(--orange));
    opacity: 0.3;
  }
  .wow-moment {
    flex: 1; background: var(--surface); border: 1px solid var(--border);
    border-radius: var(--radius); padding: 1.5rem; text-align: center;
    position: relative; transition: var(--transition);
  }
  .wow-moment:hover { transform: translateY(-4px); box-shadow: 0 8px 32px rgba(0,0,0,0.3); }
  .wow-badge {
    width: 48px; height: 48px; border-radius: 50%; margin: 0 auto 1rem;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.5rem; position: relative; z-index: 1;
  }
  .wow-moment:nth-child(1) .wow-badge { background: rgba(91, 141, 239, 0.15); border: 2px solid var(--blue); }
  .wow-moment:nth-child(2) .wow-badge { background: rgba(0, 212, 170, 0.15); border: 2px solid var(--accent-2); }
  .wow-moment:nth-child(3) .wow-badge { background: rgba(232, 145, 58, 0.15); border: 2px solid var(--orange); }
  .wow-moment h4 { font-size: 0.95rem; font-weight: 600; margin-bottom: 0.5rem; }
  .wow-moment p { font-size: 0.82rem; color: var(--text-muted); margin: 0; }
  .wow-principle {
    display: inline-block; margin-top: 0.75rem; font-size: 0.7rem; font-weight: 600;
    text-transform: uppercase; letter-spacing: 0.06em; padding: 3px 10px;
    border-radius: 4px;
  }
  .wow-moment:nth-child(1) .wow-principle { color: var(--blue); background: rgba(91, 141, 239, 0.1); }
  .wow-moment:nth-child(2) .wow-principle { color: var(--accent-2); background: rgba(0, 212, 170, 0.1); }
  .wow-moment:nth-child(3) .wow-principle { color: var(--orange); background: var(--orange-glow); }

  /* ─── Exercise Steps ─── */
  .exercise-steps { display: flex; flex-direction: column; gap: 0; margin: 2rem 0; position: relative; }
  .exercise-steps::before {
    content: ''; position: absolute; left: 28px; top: 0; bottom: 0; width: 2px;
    background: linear-gradient(to bottom, var(--blue), var(--accent-2), var(--orange));
    opacity: 0.3;
  }
  .ex-step {
    display: flex; gap: 1.5rem; padding: 1.25rem 0; position: relative;
  }
  .ex-num {
    width: 56px; min-width: 56px; height: 56px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.1rem; font-weight: 800; z-index: 1;
    background: var(--surface); border: 2px solid var(--border);
  }
  .ex-step:nth-child(1) .ex-num { border-color: var(--text-dim); color: var(--text-dim); }
  .ex-step:nth-child(2) .ex-num { border-color: var(--pink); color: var(--pink); }
  .ex-step:nth-child(3) .ex-num { border-color: var(--blue); color: var(--blue); }
  .ex-step:nth-child(4) .ex-num { border-color: var(--accent-2); color: var(--accent-2); }
  .ex-step:nth-child(5) .ex-num { border-color: var(--orange); color: var(--orange); }
  .ex-body h4 { font-size: 1rem; font-weight: 600; margin-bottom: 0.3rem; }
  .ex-body p { font-size: 0.88rem; color: var(--text-muted); margin: 0; }
  .ex-tag {
    display: inline-block; margin-top: 0.5rem; font-size: 0.65rem; font-weight: 600;
    text-transform: uppercase; letter-spacing: 0.06em; padding: 2px 8px; border-radius: 4px;
    color: var(--accent-light); background: var(--accent-glow);
  }

  /* ─── Callout ─── */
  .callout {
    background: var(--accent-glow); border: 1px solid rgba(124, 92, 252, 0.2);
    border-radius: var(--radius); padding: 1.5rem 1.75rem; margin: 2rem 0;
  }
  .callout.green { background: var(--accent-2-glow); border-color: rgba(0, 212, 170, 0.2); }
  .callout p { color: var(--text); margin: 0; font-size: 0.95rem; max-width: none; }
  .callout strong { color: #fff; }

  /* ─── Code blocks ─── */
  .code-block {
    background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-sm);
    padding: 1.5rem; margin: 1.5rem 0; overflow-x: auto; position: relative;
  }
  .code-block .label {
    position: absolute; top: 0.75rem; right: 0.75rem;
    font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.08em;
    color: var(--text-dim); background: var(--surface-2); padding: 2px 8px; border-radius: 4px;
  }
  .code-block pre {
    font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
    font-size: 0.85rem; line-height: 1.7; color: var(--text-muted);
  }
  .code-block .comment { color: var(--text-dim); }
  .code-block .keyword { color: var(--accent-light); }
  .code-block .string { color: var(--accent-2); }
  .code-block .highlight-line { color: var(--text); }

  /* ─── Principle cards ─── */
  .principle {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: var(--radius); padding: 2rem; margin: 1.5rem 0;
    position: relative; overflow: hidden;
  }
  .principle .num {
    position: absolute; top: -10px; right: 20px;
    font-size: 5rem; font-weight: 800; color: rgba(124, 92, 252, 0.06); line-height: 1;
  }
  .principle h3 { font-size: 1.15rem; font-weight: 600; margin: 0 0 0.75rem; color: var(--text); }
  .principle p { font-size: 0.92rem; color: var(--text-muted); margin-bottom: 0.75rem; max-width: 640px; }
  .principle p:last-child { margin-bottom: 0; }

  /* ─── Comparison ─── */
  .comparison { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin: 2rem 0; }
  .compare-col { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.75rem; }
  .compare-col.highlight { border-color: rgba(124, 92, 252, 0.3); background: linear-gradient(180deg, rgba(124, 92, 252, 0.05), var(--surface)); }
  .compare-col h4 { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1rem; font-weight: 600; }
  .compare-col.old h4 { color: var(--text-dim); }
  .compare-col.highlight h4 { color: var(--accent-light); }
  .compare-col ul { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; }
  .compare-col li { font-size: 0.9rem; color: var(--text-muted); padding-left: 1.4rem; position: relative; }
  .compare-col li::before { position: absolute; left: 0; font-size: 0.85rem; }
  .compare-col.old li::before { content: '~'; color: var(--text-dim); }
  .compare-col.highlight li::before { content: '\2192'; color: var(--accent-light); }

  /* ─── Footer ─── */
  .site-footer { margin-top: 4rem; padding: 2rem 0; border-top: 1px solid var(--border); text-align: center; color: var(--text-dim); font-size: 0.8rem; }

  /* ─── Roadmap Stage ─── */
  .rm-stage {
    margin: 2.5rem 0; position: relative; padding-left: 4rem;
  }
  .rm-stage::before {
    content: ''; position: absolute; left: 22px; top: 0; bottom: 0; width: 3px;
    border-radius: 2px;
  }
  .rm-stage.s1::before { background: linear-gradient(to bottom, var(--accent-2), rgba(0,212,170,0.1)); }
  .rm-stage.s2::before { background: linear-gradient(to bottom, var(--blue), rgba(91,141,239,0.1)); }
  .rm-stage.s3::before { background: linear-gradient(to bottom, var(--accent-light), rgba(155,127,255,0.1)); }
  .rm-stage.s4::before { background: linear-gradient(to bottom, var(--orange), rgba(232,145,58,0.1)); }
  .rm-stage.s5::before { background: linear-gradient(to bottom, var(--accent), rgba(124,92,252,0.1)); }
  .rm-stage-marker {
    position: absolute; left: 0; top: 0;
    width: 46px; height: 46px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.1rem; font-weight: 800; z-index: 1;
    background: var(--surface); border: 3px solid var(--border);
  }
  .rm-stage.s1 .rm-stage-marker { border-color: var(--accent-2); color: var(--accent-2); }
  .rm-stage.s2 .rm-stage-marker { border-color: var(--blue); color: var(--blue); }
  .rm-stage.s3 .rm-stage-marker { border-color: var(--accent-light); color: var(--accent-light); }
  .rm-stage.s4 .rm-stage-marker { border-color: var(--orange); color: var(--orange); }
  .rm-stage.s5 .rm-stage-marker { border-color: var(--accent); color: var(--accent); }
  .rm-stage-header { margin-bottom: 1.5rem; }
  .rm-stage-header .rm-wave-tag {
    font-size: 0.6rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;
    padding: 2px 8px; border-radius: 4px; display: inline-block; margin-bottom: 0.4rem;
  }
  .rm-stage.s1 .rm-wave-tag { color: var(--accent-2); background: rgba(0,212,170,0.1); }
  .rm-stage.s2 .rm-wave-tag { color: var(--blue); background: rgba(91,141,239,0.1); }
  .rm-stage.s3 .rm-wave-tag { color: var(--accent-light); background: rgba(155,127,255,0.1); }
  .rm-stage.s4 .rm-wave-tag { color: var(--orange); background: rgba(232,145,58,0.1); }
  .rm-stage.s5 .rm-wave-tag { color: var(--accent); background: rgba(124,92,252,0.1); }
  .rm-stage-header h3 { font-size: 1.35rem; font-weight: 700; margin-bottom: 0.3rem; }
  .rm-stage.s1 .rm-stage-header h3 { color: var(--accent-2); }
  .rm-stage.s2 .rm-stage-header h3 { color: var(--blue); }
  .rm-stage.s3 .rm-stage-header h3 { color: var(--accent-light); }
  .rm-stage.s4 .rm-stage-header h3 { color: var(--orange); }
  .rm-stage.s5 .rm-stage-header h3 { color: var(--accent); }
  .rm-stage-header p { font-size: 0.9rem; color: var(--text-muted); margin: 0; }
  .rm-checklist {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 0.6rem; margin: 1rem 0;
  }
  .rm-check {
    display: flex; align-items: flex-start; gap: 0.6rem;
    padding: 0.6rem 0.75rem; border-radius: var(--radius-sm);
    background: var(--surface); border: 1px solid var(--border);
    transition: var(--transition); cursor: default;
  }
  .rm-check:hover { border-color: rgba(255,255,255,0.1); background: var(--surface-2); }
  .rm-checkbox {
    width: 18px; height: 18px; min-width: 18px; border-radius: 4px;
    border: 2px solid var(--border); margin-top: 1px;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.6rem; color: transparent; transition: var(--transition);
    cursor: pointer;
  }
  .rm-check.checked .rm-checkbox {
    border-color: var(--accent-2); background: var(--accent-2); color: #000;
  }
  .rm-check-text { font-size: 0.82rem; color: var(--text-muted); line-height: 1.4; }
  .rm-check.checked .rm-check-text { color: var(--text-dim); text-decoration: line-through; text-decoration-color: var(--text-dim); }
  .rm-check-text strong { color: var(--text); font-weight: 600; }
  .rm-check.checked .rm-check-text strong { color: var(--text-dim); }
  .rm-outcome {
    margin: 1.25rem 0 0.5rem; padding: 1rem 1.25rem;
    background: var(--surface); border-left: 3px solid var(--border);
    border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  }
  .rm-stage.s1 .rm-outcome { border-left-color: var(--accent-2); }
  .rm-stage.s2 .rm-outcome { border-left-color: var(--blue); }
  .rm-stage.s3 .rm-outcome { border-left-color: var(--accent-light); }
  .rm-stage.s4 .rm-outcome { border-left-color: var(--orange); }
  .rm-stage.s5 .rm-outcome { border-left-color: var(--accent); }
  /* ─── Resource links ─── */
  .rm-resources {
    margin: 1.25rem 0; display: flex; flex-direction: column; gap: 0.4rem;
  }
  .rm-resources-title {
    font-size: 0.65rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.08em; color: var(--text-dim); margin-bottom: 0.25rem;
    display: flex; align-items: center; gap: 0.4rem;
  }
  .rm-resource-link {
    display: flex; align-items: center; gap: 0.6rem;
    padding: 0.5rem 0.75rem; border-radius: var(--radius-sm);
    background: var(--surface); border: 1px solid var(--border);
    text-decoration: none; transition: var(--transition);
    font-size: 0.8rem; color: var(--text-muted); line-height: 1.3;
  }
  .rm-resource-link:hover {
    border-color: rgba(124, 92, 252, 0.3); background: var(--surface-2);
    color: var(--text);
  }
  .rm-resource-badge {
    font-size: 0.55rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.04em; padding: 2px 6px; border-radius: 3px;
    white-space: nowrap; min-width: fit-content;
  }
  .rm-resource-badge.gh-skill { background: rgba(0,212,170,0.1); color: var(--accent-2); border: 1px solid rgba(0,212,170,0.2); }
  .rm-resource-badge.ms-learn { background: rgba(91,141,239,0.1); color: var(--blue); border: 1px solid rgba(91,141,239,0.2); }
  .rm-resource-badge.cert { background: rgba(232,145,58,0.1); color: var(--orange); border: 1px solid rgba(232,145,58,0.2); }

  .rm-outcome-label {
    font-size: 0.6rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.08em; color: var(--text-dim); margin-bottom: 0.3rem;
  }
  .rm-outcome p { font-size: 0.85rem; color: var(--text); margin: 0; }

  /* ─── Progress bar ─── */
  .rm-progress-wrap { margin: 2rem 0 3rem; }
  .rm-progress-labels {
    display: flex; justify-content: space-between; margin-bottom: 0.5rem;
  }
  .rm-progress-label {
    font-size: 0.65rem; font-weight: 600; text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  .rm-progress-track {
    height: 8px; border-radius: 4px; background: var(--surface-2);
    overflow: hidden; position: relative;
  }
  .rm-progress-segments { display: flex; height: 100%; }
  .rm-seg {
    height: 100%; transition: width 0.6s ease;
  }
  .rm-seg:first-child { border-radius: 4px 0 0 4px; }
  .rm-seg:last-child { border-radius: 0 4px 4px 0; }
  .rm-seg.s1 { background: var(--accent-2); }
  .rm-seg.s2 { background: var(--blue); }
  .rm-seg.s3 { background: var(--accent-light); }
  .rm-seg.s4 { background: var(--orange); }
  .rm-seg.s5 { background: var(--accent); }

  /* ─── Wave Timeline ─── */
  .wave-timeline {
    display: flex; align-items: flex-start; gap: 0; margin: 2.5rem 0;
    position: relative; padding-top: 3rem;
  }
  .wave-timeline::before {
    content: ''; position: absolute; top: calc(3rem + 24px); left: 5%; right: 5%;
    height: 3px; background: linear-gradient(90deg, var(--accent-2), var(--blue), var(--accent-light), var(--accent));
    border-radius: 2px; opacity: 0.4;
  }
  .wave-card {
    flex: 1; display: flex; flex-direction: column; align-items: center;
    position: relative; padding: 0 0.5rem;
  }
  .wave-pip {
    width: 14px; height: 14px; border-radius: 50%; margin-bottom: 1.25rem;
    position: relative; z-index: 2;
  }
  .wave-card:nth-child(1) .wave-pip { background: var(--accent-2); box-shadow: 0 0 12px rgba(0,212,170,0.4); }
  .wave-card:nth-child(2) .wave-pip { background: var(--blue); box-shadow: 0 0 12px rgba(91,141,239,0.4); }
  .wave-card:nth-child(3) .wave-pip { background: var(--accent-light); box-shadow: 0 0 12px rgba(155,127,255,0.4); }
  .wave-card:nth-child(4) .wave-pip { background: var(--accent); box-shadow: 0 0 16px rgba(124,92,252,0.5); }
  .wave-label {
    font-size: 0.65rem; font-weight: 600; text-transform: uppercase;
    letter-spacing: 0.06em; padding: 3px 10px; border-radius: 12px;
    border: 1px solid var(--border); background: var(--surface);
    color: var(--text-muted); position: absolute; top: 0; white-space: nowrap;
  }
  .wave-card:nth-child(1) .wave-label { color: var(--accent-2); border-color: rgba(0,212,170,0.3); }
  .wave-card:nth-child(2) .wave-label { color: var(--blue); border-color: rgba(91,141,239,0.3); }
  .wave-card:nth-child(3) .wave-label { color: var(--accent-light); border-color: rgba(155,127,255,0.3); }
  .wave-card:nth-child(4) .wave-label { color: var(--accent); border-color: rgba(124,92,252,0.3); }
  .wave-body {
    background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius);
    padding: 1.5rem; text-align: center; width: 100%; transition: var(--transition);
    min-height: 280px; display: flex; flex-direction: column;
  }
  .wave-body:hover { transform: translateY(-3px); box-shadow: 0 8px 32px rgba(0,0,0,0.3); }
  .wave-card.current .wave-body {
    border-color: rgba(91,141,239,0.4);
    background: linear-gradient(180deg, rgba(91,141,239,0.06), var(--surface));
  }
  .wave-card.future .wave-body { opacity: 0.7; }
  .wave-body h4 { font-size: 1rem; font-weight: 700; margin-bottom: 0.3rem; }
  .wave-card:nth-child(1) .wave-body h4 { color: var(--accent-2); }
  .wave-card:nth-child(2) .wave-body h4 { color: var(--blue); }
  .wave-card:nth-child(3) .wave-body h4 { color: var(--accent-light); }
  .wave-card:nth-child(4) .wave-body h4 { color: var(--accent); }
  .wave-body .wave-subtitle { font-size: 0.78rem; color: var(--text-dim); margin-bottom: 1rem; }
  .wave-body p { font-size: 0.82rem; color: var(--text-muted); margin: 0; }
  .wave-icons {
    display: flex; align-items: center; justify-content: center; gap: 6px;
    margin: 1rem 0; flex-wrap: wrap;
  }
  .wave-icon-person {
    width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center;
    justify-content: center; font-size: 0.85rem;
  }
  .wi-human { background: rgba(91,141,239,0.2); border: 2px solid var(--blue); }
  .wi-agent { background: rgba(0,212,170,0.2); border: 2px solid var(--accent-2); }
  .wi-agent-dark { background: rgba(100,100,120,0.2); border: 2px solid #555; }
  .wi-plus { color: var(--text-dim); font-size: 1rem; font-weight: 300; }
  .wave-today {
    position: absolute; top: -0.5rem; left: 50%; transform: translateX(-50%);
    background: var(--accent); color: #fff; font-size: 0.6rem; font-weight: 700;
    padding: 2px 10px; border-radius: 10px; text-transform: uppercase; letter-spacing: 0.06em;
    white-space: nowrap;
  }

  /* ─── Adoption Path ─── */
  .adoption-path { display: flex; flex-direction: column; gap: 0; margin: 2rem 0; position: relative; }
  .adoption-path::before {
    content: ''; position: absolute; left: 28px; top: 0; bottom: 0; width: 3px;
    background: linear-gradient(to bottom, var(--accent-2), var(--blue), var(--accent-light), var(--accent));
    border-radius: 2px; opacity: 0.3;
  }
  .adopt-step {
    display: flex; gap: 1.5rem; padding: 1.5rem 0; position: relative;
  }
  .adopt-marker {
    width: 56px; min-width: 56px; height: 56px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.1rem; z-index: 1; background: var(--surface); border: 2px solid var(--border);
  }
  .adopt-step:nth-child(1) .adopt-marker { border-color: var(--accent-2); color: var(--accent-2); }
  .adopt-step:nth-child(2) .adopt-marker { border-color: var(--blue); color: var(--blue); }
  .adopt-step:nth-child(3) .adopt-marker { border-color: var(--accent-light); color: var(--accent-light); }
  .adopt-step:nth-child(4) .adopt-marker { border-color: var(--accent); color: var(--accent); }
  .adopt-body { flex: 1; }
  .adopt-body h4 { font-size: 1.05rem; font-weight: 600; margin-bottom: 0.3rem; }
  .adopt-body p { font-size: 0.88rem; color: var(--text-muted); margin-bottom: 0.75rem; }
  .adopt-examples {
    display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 0.5rem;
  }
  .adopt-chip {
    font-size: 0.7rem; font-weight: 500; padding: 3px 10px; border-radius: 6px;
    background: var(--surface); border: 1px solid var(--border); color: var(--text-muted);
  }
  .adopt-step:nth-child(1) .adopt-chip { border-color: rgba(0,212,170,0.2); color: var(--accent-2); }
  .adopt-step:nth-child(2) .adopt-chip { border-color: rgba(91,141,239,0.2); color: var(--blue); }
  .adopt-step:nth-child(3) .adopt-chip { border-color: rgba(155,127,255,0.2); color: var(--accent-light); }
  .adopt-step:nth-child(4) .adopt-chip { border-color: rgba(124,92,252,0.2); color: var(--accent); }

  /* ─── Maturity columns ─── */
  .maturity-cols {
    display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin: 2rem 0;
  }
  .maturity-col {
    background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius);
    padding: 1.75rem; position: relative; overflow: hidden;
  }
  .maturity-col::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  }
  .maturity-col.individual::before { background: linear-gradient(90deg, var(--accent-2), var(--blue)); }
  .maturity-col.team::before { background: linear-gradient(90deg, var(--accent-light), var(--accent)); }
  .maturity-col h4 {
    font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em;
    margin-bottom: 1.25rem; font-weight: 700;
  }
  .maturity-col.individual h4 { color: var(--accent-2); }
  .maturity-col.team h4 { color: var(--accent-light); }
  .maturity-item {
    display: flex; align-items: flex-start; gap: 0.75rem;
    padding: 0.6rem 0; border-bottom: 1px solid var(--border);
  }
  .maturity-item:last-child { border-bottom: none; }
  .maturity-item .mi-icon {
    width: 28px; height: 28px; min-width: 28px; border-radius: 6px;
    display: flex; align-items: center; justify-content: center; font-size: 0.8rem;
    background: rgba(255,255,255,0.03); border: 1px solid var(--border);
  }
  .maturity-col.individual .mi-icon { background: rgba(0,212,170,0.06); border-color: rgba(0,212,170,0.15); }
  .maturity-col.team .mi-icon { background: rgba(155,127,255,0.06); border-color: rgba(155,127,255,0.15); }
  .maturity-item .mi-text { font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; }
  .maturity-item .mi-text strong { color: var(--text); }

  /* ─── Responsive ─── */
  @media (max-width: 900px) {
    .stack-diagram { flex-direction: column; gap: 2rem; }
    .stack-visual { width: 320px; height: 220px; margin: 0 auto; }
    .stack-layer.prompting { width: 240px; }
    .stack-layer.context { width: 260px; }
    .stack-layer.intent { width: 280px; }
    .framework-wrap { flex-direction: column; }
    .fw-grid-area { grid-template-columns: repeat(4, 1fr); }
    .rpi-flow { flex-direction: column; }
    .rpi-phase { border-radius: var(--radius) !important; border: 1px solid var(--border) !important; }
    .rpi-connector { display: none !important; }
    .physics-visual { grid-template-columns: 1fr; }
    .pv-arrow-col { flex-direction: row; padding: 0.5rem 0; }
    .wow-timeline { flex-direction: column; }
    .wow-timeline::before { display: none; }
    .diet-row { grid-template-columns: 1fr; gap: 0.5rem; }
    .wave-timeline { flex-direction: column; gap: 1.5rem; padding-top: 0; }
    .wave-timeline::before { display: none; }
    .wave-label { position: static; margin-bottom: 0.5rem; }
    .wave-pip { display: none; }
    .wave-body { min-height: auto; }
    .wave-today { position: static; transform: none; margin-bottom: 0.5rem; }
    .maturity-cols { grid-template-columns: 1fr; }
    .rm-stage { padding-left: 3rem; }
    .rm-stage-marker { width: 38px; height: 38px; font-size: 0.9rem; }
    .rm-checklist { grid-template-columns: 1fr; }
    .rm-progress-labels { font-size: 0.55rem; }
    .feedback-loop-diagram { flex-direction: column; gap: 0.5rem; }
    .fl-arrow { transform: rotate(90deg); }
    .fl-return-arrow { display: none; }
    .fl-return-label { display: none; }
  }
  @media (max-width: 768px) {
    .header-inner { flex-direction: column; height: auto; padding: 1rem 1.5rem; gap: 0.75rem; }
    .tab-nav { overflow-x: auto; width: 100%; justify-content: flex-start; }
    .tab-btn { padding: 8px 14px; font-size: 0.8rem; }
    .hero { padding: 3rem 0 2rem; }
    .comparison { grid-template-columns: 1fr; }
    .card-grid { grid-template-columns: 1fr; }
    .card-grid.three { grid-template-columns: 1fr; }
    .container { padding: 0 1.25rem; }
  }
</style>
</head>
<body>

<!-- ═══════════ HEADER ═══════════ -->
<header class="site-header">
  <div class="header-inner">
    <div class="logo">AI-SDLC</div>
    <nav class="tab-nav" role="tablist">
      <button class="tab-btn active" onclick="showPage('vision')" role="tab">Vision</button>
      <button class="tab-btn" onclick="showPage('roadmap')" role="tab">Roadmap</button>
      <button class="tab-btn" onclick="showPage('overview')" role="tab">Foundations</button>
      <button class="tab-btn" onclick="showPage('tactics')" role="tab">Prompt Tactics</button>
      <button class="tab-btn" onclick="showPage('shift')" role="tab">Intent &amp; Context</button>
      <button class="tab-btn" onclick="showPage('patterns')" role="tab">Physics</button>
      <button class="tab-btn" onclick="showPage('methodology')" role="tab">Steel Thread</button>
      <button class="tab-btn" onclick="showPage('aisdlc')" role="tab">Scale</button>
    </nav>
  </div>
</header>

<!-- ═══════════ PAGE: VISION ═══════════ -->
<div id="vision" class="page active">
  <div class="container">
    <section class="hero">
      <div class="hero-badge">The Destination</div>
      <h1>Where We're <span class="gradient">Heading</span></h1>
      <p class="subtitle">Before the how, the why. AI isn't replacing developers — it's changing what developers do. The destination is a world where you define intent, and agents handle execution.</p>
    </section>

    <!-- ── The Shift ── -->
    <section class="content-section">
      <div class="section-label">The Big Picture</div>
      <h2>From Writing Code to Defining "Correct"</h2>
      <p>The core shift in AI-assisted development isn't about typing faster. It's about moving from <em>maker</em> to <em>architect of intent</em>. You stop writing every line and start defining what right looks like — then letting agents execute against that definition.</p>

      <div style="display: flex; gap: 3px; margin: 2.5rem 0;">
        <div style="flex: 1; padding: 1.75rem; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius) 0 0 var(--radius);">
          <div style="font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-dim); margin-bottom: 0.75rem;">Today</div>
          <div style="font-size: 1.15rem; font-weight: 700; color: var(--text-muted); margin-bottom: 0.5rem;">You write code</div>
          <div style="font-size: 0.85rem; color: var(--text-dim); line-height: 1.6;">Human reads ticket. Human researches codebase. Human writes implementation. Human writes tests. Human reviews their own work. AI occasionally autocompletes a line.</div>
        </div>
        <div style="flex: 1; padding: 1.75rem; background: linear-gradient(180deg, rgba(124,92,252,0.06), var(--surface)); border: 1px solid rgba(124,92,252,0.25); border-radius: 0 var(--radius) var(--radius) 0; position: relative;">
          <div style="font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--accent-light); margin-bottom: 0.75rem;">The Vision</div>
          <div style="font-size: 1.15rem; font-weight: 700; color: var(--text); margin-bottom: 0.5rem;">You define what correct looks like</div>
          <div style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.6;">You set intent: goals, constraints, success criteria, structural enforcement. Agents research, plan, and implement. Harnesses verify. You review outcomes, not code.</div>
        </div>
      </div>

      <div class="takeaway-banner">
        <em>Execution is becoming cheap. Clarity and verification are the new bottlenecks.</em>
      </div>
    </section>

    <!-- ── What Does It Look Like? ── -->
    <section class="content-section">
      <div class="section-label">The AI-Native SDLC</div>
      <h2>What You're Building Towards</h2>
      <p>In the AI-SDLC, every stage of the development lifecycle has agent participation — guided by intent, constrained by harnesses, connected by dense handoff artefacts. Here's what a single ticket looks like at maturity:</p>

      <div style="display: flex; flex-direction: column; gap: 4px; margin: 2rem 0;">
        <div style="display: flex; align-items: center; gap: 4px;">
          <div style="width: 150px; min-width: 150px; padding: 10px 14px; border-radius: 8px; background: rgba(0,212,170,0.1); border: 1px solid rgba(0,212,170,0.2); font-size: 0.78rem; font-weight: 600; color: var(--accent-2);">&#128196; Ticket Created</div>
          <div style="color: var(--text-dim);">&rarr;</div>
          <div style="flex: 1; padding: 10px 14px; border-radius: 8px; background: var(--surface); border: 1px solid var(--border); font-size: 0.82rem; color: var(--text-muted);"><strong style="color:var(--accent-2)">Research agent</strong> analyses the ticket, maps affected files, produces research.md</div>
        </div>
        <div style="display: flex; align-items: center; gap: 4px;">
          <div style="width: 150px; min-width: 150px; padding: 10px 14px; border-radius: 8px; background: rgba(91,141,239,0.1); border: 1px solid rgba(91,141,239,0.2); font-size: 0.78rem; font-weight: 600; color: var(--blue);">&#128208; Research Ready</div>
          <div style="color: var(--text-dim);">&rarr;</div>
          <div style="flex: 1; padding: 10px 14px; border-radius: 8px; background: var(--surface); border: 1px solid var(--border); font-size: 0.82rem; color: var(--text-muted);"><strong style="color:var(--blue)">Plan agent</strong> reads research.md, drafts implementation plan with risk register</div>
        </div>
        <div style="display: flex; align-items: center; gap: 4px;">
          <div style="width: 150px; min-width: 150px; padding: 10px 14px; border-radius: 8px; background: rgba(155,127,255,0.1); border: 1px solid rgba(155,127,255,0.2); font-size: 0.78rem; font-weight: 600; color: var(--accent-light);">&#9745; Human Review</div>
          <div style="color: var(--text-dim);">&rarr;</div>
          <div style="flex: 1; padding: 10px 14px; border-radius: 8px; background: var(--surface); border: 1px solid var(--border); font-size: 0.82rem; color: var(--text-muted);"><strong style="color:var(--accent-light)">You</strong> review the plan, adjust intent, approve or redirect</div>
        </div>
        <div style="display: flex; align-items: center; gap: 4px;">
          <div style="width: 150px; min-width: 150px; padding: 10px 14px; border-radius: 8px; background: rgba(232,145,58,0.1); border: 1px solid rgba(232,145,58,0.2); font-size: 0.78rem; font-weight: 600; color: var(--orange);">&#9889; Plan Approved</div>
          <div style="color: var(--text-dim);">&rarr;</div>
          <div style="flex: 1; padding: 10px 14px; border-radius: 8px; background: var(--surface); border: 1px solid var(--border); font-size: 0.82rem; color: var(--text-muted);"><strong style="color:var(--orange)">Implement agent</strong> follows plan step-by-step, self-corrects from test output</div>
        </div>
        <div style="display: flex; align-items: center; gap: 4px;">
          <div style="width: 150px; min-width: 150px; padding: 10px 14px; border-radius: 8px; background: rgba(124,92,252,0.1); border: 1px solid rgba(124,92,252,0.2); font-size: 0.78rem; font-weight: 600; color: var(--accent);">&#128640; PR Created</div>
          <div style="color: var(--text-dim);">&rarr;</div>
          <div style="flex: 1; padding: 10px 14px; border-radius: 8px; background: var(--surface); border: 1px solid var(--border); font-size: 0.82rem; color: var(--text-muted);"><strong style="color:var(--accent)">Review agent</strong> checks architecture, tests, style &mdash; you give final approval</div>
        </div>
      </div>

      <p>Notice: you're involved at <em>one</em> step &mdash; reviewing the plan. Everything else is agents operating within the guardrails you've built. That's the destination.</p>
    </section>

    <!-- ── Three Pillars ── -->
    <section class="content-section">
      <div class="section-label">Three Pillars</div>
      <h2>What Makes This Work</h2>
      <p>The vision rests on three ideas. Every tab on this site teaches you how to build one of them.</p>

      <div class="card-grid three">
        <div class="card" style="border-top: 2px solid var(--orange);">
          <div class="card-icon orange">&#127919;</div>
          <h4>Intent Engineering</h4>
          <p>Communicate goals, constraints, and success criteria &mdash; not exact words. Define the <em>shape</em> of the output, not the output itself. Move from crafting prompts to architecting agent interactions.</p>
        </div>
        <div class="card" style="border-top: 2px solid var(--accent-2);">
          <div class="card-icon green">&#128737;</div>
          <h4>Physics over Law</h4>
          <p>Don't tell agents what to do &mdash; make wrong things impossible. Tests, compilers, and linters are <em>physics</em>: structural constraints the agent can't ignore. Prompts are <em>law</em>: suggestions it might break.</p>
        </div>
        <div class="card" style="border-top: 2px solid var(--blue);">
          <div class="card-icon">&#128196;</div>
          <h4>Dense Handoff Artefacts</h4>
          <p>Compress hours of exploration into structured documents that carry intent forward. research.md, plan.md, handoff.md &mdash; each phase produces an artefact that feeds the next, so no context is wasted.</p>
        </div>
      </div>
    </section>

    <!-- ── The Wow Moment ── -->
    <section class="content-section">
      <div class="section-label">The Moment It Clicks</div>
      <h2>When You'll Know It's Working</h2>
      <p>There's a specific moment in the journey where everything comes together. It looks like this:</p>

      <div style="padding: 2rem; background: linear-gradient(135deg, rgba(0,212,170,0.04), rgba(124,92,252,0.04)); border: 1px solid rgba(0,212,170,0.15); border-radius: var(--radius); margin: 2rem 0;">
        <div style="font-size: 1rem; color: var(--text); line-height: 1.8;">
          An agent is refactoring a service class. It introduces a subtle type mismatch. The <strong style="color: var(--accent-3);">compiler refuses to build</strong>. The agent reads the error, fixes the type. It continues. A few steps later, it accidentally changes calculation order. A <strong style="color: var(--orange);">unit test fails</strong>: "Expected 42.99, got 38.50." The agent diagnoses the issue and fixes it. Finally, a missing DI registration throws a 500 error &mdash; caught by <strong style="color: var(--accent-2);">Playwright clicking "Add to Cart."</strong> Fixed. All green. No human touched the code.
        </div>
      </div>

      <p>That's three layers of physics catching three different classes of error. The harness is the teacher, not you. <em>That's</em> what you're building towards.</p>
    </section>

    <!-- ── Your Role Evolves ── -->
    <section class="content-section">
      <div class="section-label">Your Journey</div>
      <h2>How Your Role Changes</h2>
      <p>This isn't about AI taking your job. It's about your job becoming more impactful. The progression looks like this:</p>

      <div style="display: flex; gap: 3px; margin: 2rem 0;">
        <div style="flex: 1; padding: 1.5rem; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius) 0 0 var(--radius);">
          <div style="font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-dim); margin-bottom: 0.5rem;">Where you start</div>
          <div style="font-size: 1.1rem; font-weight: 700; color: var(--accent-2); margin-bottom: 0.5rem;">Maker</div>
          <div style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.5;">You write code. AI suggests lines. You accept or reject. The human does all the thinking and all the typing.</div>
        </div>
        <div style="flex: 1; padding: 1.5rem; background: var(--surface); border: 1px solid var(--border);">
          <div style="font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-dim); margin-bottom: 0.5rem;">Where you grow</div>
          <div style="font-size: 1.1rem; font-weight: 700; color: var(--orange); margin-bottom: 0.5rem;">Engineering Manager</div>
          <div style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.5;">You define the Definition of Done. You build the harnesses. Agents implement. You review outcomes, not individual lines.</div>
        </div>
        <div style="flex: 1; padding: 1.5rem; background: linear-gradient(180deg, rgba(124,92,252,0.04), var(--surface)); border: 1px solid rgba(124,92,252,0.2); border-radius: 0 var(--radius) var(--radius) 0;">
          <div style="font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--accent-light); margin-bottom: 0.5rem;">Where you're heading</div>
          <div style="font-size: 1.1rem; font-weight: 700; color: var(--accent); margin-bottom: 0.5rem;">Architect of Intent</div>
          <div style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.5;">You design the system of systems. Intent flows through docs, skills, harnesses, and pipelines. Agents coordinate agents. You set direction.</div>
        </div>
      </div>
    </section>

    <!-- ── What's Ahead ── -->
    <section class="content-section">
      <div class="section-label">The Path</div>
      <h2>How We Get There</h2>
      <p>The rest of this site is a progressive guide from where you are now to the vision above. Each tab builds on the last:</p>

      <div style="display: flex; align-items: stretch; gap: 3px; margin: 2rem 0; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 120px; padding: 1.25rem 1rem; border-radius: var(--radius) 0 0 var(--radius); background: linear-gradient(180deg, rgba(232,145,58,0.08), var(--surface)); border: 1px solid rgba(232,145,58,0.15); text-align: center; cursor: pointer;" onclick="showPage('roadmap'); document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); document.querySelectorAll('.tab-btn')[1].classList.add('active');">
          <div style="font-size: 1.3rem; margin-bottom: 0.3rem;">&#128506;</div>
          <div style="font-size: 0.72rem; font-weight: 700; color: var(--orange); margin-bottom: 0.2rem;">Roadmap</div>
          <div style="font-size: 0.62rem; color: var(--text-dim);">Your checklist</div>
        </div>
        <div style="flex: 1; min-width: 120px; padding: 1.25rem 1rem; background: linear-gradient(180deg, rgba(0,212,170,0.08), var(--surface)); border: 1px solid rgba(0,212,170,0.15); text-align: center; cursor: pointer;" onclick="showPage('overview'); document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); document.querySelectorAll('.tab-btn')[2].classList.add('active');">
          <div style="font-size: 1.3rem; margin-bottom: 0.3rem;">&#128218;</div>
          <div style="font-size: 0.72rem; font-weight: 700; color: var(--accent-2); margin-bottom: 0.2rem;">Foundations</div>
          <div style="font-size: 0.62rem; color: var(--text-dim);">Core concepts</div>
        </div>
        <div style="flex: 1; min-width: 120px; padding: 1.25rem 1rem; background: linear-gradient(180deg, rgba(240,192,64,0.08), var(--surface)); border: 1px solid rgba(240,192,64,0.15); text-align: center; cursor: pointer;" onclick="showPage('tactics'); document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); document.querySelectorAll('.tab-btn')[3].classList.add('active');">
          <div style="font-size: 1.3rem; margin-bottom: 0.3rem;">&#9889;</div>
          <div style="font-size: 0.72rem; font-weight: 700; color: var(--yellow); margin-bottom: 0.2rem;">Prompt Tactics</div>
          <div style="font-size: 0.62rem; color: var(--text-dim);">Hands-on techniques</div>
        </div>
        <div style="flex: 1; min-width: 120px; padding: 1.25rem 1rem; background: linear-gradient(180deg, rgba(91,141,239,0.08), var(--surface)); border: 1px solid rgba(91,141,239,0.15); text-align: center; cursor: pointer;" onclick="showPage('shift'); document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); document.querySelectorAll('.tab-btn')[4].classList.add('active');">
          <div style="font-size: 1.3rem; margin-bottom: 0.3rem;">&#128196;</div>
          <div style="font-size: 0.72rem; font-weight: 700; color: var(--blue); margin-bottom: 0.2rem;">Intent &amp; Context</div>
          <div style="font-size: 0.62rem; color: var(--text-dim);">Capture &amp; curate</div>
        </div>
        <div style="flex: 1; min-width: 120px; padding: 1.25rem 1rem; background: linear-gradient(180deg, rgba(155,127,255,0.08), var(--surface)); border: 1px solid rgba(155,127,255,0.15); text-align: center; cursor: pointer;" onclick="showPage('patterns'); document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); document.querySelectorAll('.tab-btn')[5].classList.add('active');">
          <div style="font-size: 1.3rem; margin-bottom: 0.3rem;">&#128737;</div>
          <div style="font-size: 0.72rem; font-weight: 700; color: var(--accent-light); margin-bottom: 0.2rem;">Physics</div>
          <div style="font-size: 0.62rem; color: var(--text-dim);">Structural enforcement</div>
        </div>
        <div style="flex: 1; min-width: 120px; padding: 1.25rem 1rem; background: linear-gradient(180deg, rgba(232,145,58,0.08), var(--surface)); border: 1px solid rgba(232,145,58,0.15); text-align: center; cursor: pointer;" onclick="showPage('methodology'); document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); document.querySelectorAll('.tab-btn')[6].classList.add('active');">
          <div style="font-size: 1.3rem; margin-bottom: 0.3rem;">&#128640;</div>
          <div style="font-size: 0.72rem; font-weight: 700; color: var(--orange); margin-bottom: 0.2rem;">Steel Thread</div>
          <div style="font-size: 0.62rem; color: var(--text-dim);">Prove it end-to-end</div>
        </div>
        <div style="flex: 1; min-width: 120px; padding: 1.25rem 1rem; border-radius: 0 var(--radius) var(--radius) 0; background: linear-gradient(180deg, rgba(124,92,252,0.08), var(--surface)); border: 1px solid rgba(124,92,252,0.15); text-align: center; cursor: pointer;" onclick="showPage('aisdlc'); document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); document.querySelectorAll('.tab-btn')[7].classList.add('active');">
          <div style="font-size: 1.3rem; margin-bottom: 0.3rem;">&#127758;</div>
          <div style="font-size: 0.72rem; font-weight: 700; color: var(--accent); margin-bottom: 0.2rem;">Scale</div>
          <div style="font-size: 0.62rem; color: var(--text-dim);">Team &amp; org</div>
        </div>
      </div>

      <div class="callout">
        <p><strong>Start with the Roadmap</strong> to see the full journey at a glance with interactive checklists, or jump to any tab that matches where you are right now. Every stage delivers value on its own — you don't need to reach Stage 5 to benefit.</p>
      </div>

      <div style="text-align: center; margin-top: 1.5rem;">
        <a href="cheat-sheet.html" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.5rem; background: rgba(124,92,252,0.1); border: 1px solid rgba(124,92,252,0.3); border-radius: var(--radius); color: var(--accent-light); text-decoration: none; font-size: 0.9rem; font-weight: 600; transition: all 0.2s;">&#128203; Open Cheat Sheets &amp; Bingo Card</a>
      </div>
    </section>
  </div>
</div>

<!-- ═══════════ PAGE: FOUNDATIONS ═══════════ -->
<div id="overview" class="page">
  <div class="container">
    <section class="hero">
      <div class="hero-badge">Stage 1 &mdash; Foundations</div>
      <h1>The <span class="gradient">Building Blocks</span></h1>
      <p class="subtitle">From prompting to intent engineering to physics thinking — the three layers that make AI agents reliable. This is the conceptual foundation everything else builds on.</p>
    </section>

    <!-- ── Stacked Layers Diagram ── -->
    <section class="content-section">
      <div class="section-label">The Three Layers</div>
      <h2>Intent Sits Above Everything Else</h2>
      <p>Prompting is the execution layer. Context engineering is about what the agent knows. Intent engineering is about how the goal is structured — workflows, boundaries, and destinations.</p>

      <div class="stack-diagram">
        <div class="stack-labels">
          <div class="stack-label-item l-intent">
            <h4>Intent Engineering</h4>
            <p>How the goal is structured. Workflows, boundaries, destinations. Architecting the machine interaction.</p>
          </div>
          <div class="stack-label-item l-context">
            <h4>Context Engineering</h4>
            <p>What the agent knows. RAG, vector databases, memory. Supplying the raw material.</p>
          </div>
          <div class="stack-label-item l-prompting">
            <h4>Prompting</h4>
            <p>Execution layer. The words you write. Necessary but not sufficient.</p>
          </div>
        </div>
        <div class="stack-visual">
          <div class="stack-layer intent">Intent Engineering</div>
          <div class="stack-layer context">Context Engineering</div>
          <div class="stack-layer prompting">Prompting</div>
        </div>
      </div>

      <div class="takeaway-banner">
        <em>We must shift our mindset from text-crafters to systems architects.</em>
      </div>
    </section>

    <!-- ── Physics vs Law Visual ── -->
    <section class="content-section">
      <div class="section-label">Core Insight</div>
      <h2>Laws vs Physics</h2>
      <p>Laws are instructions — they can be broken. Physics are structural constraints — they can't. Intent engineering encodes your goals as physics.</p>

      <div class="physics-visual">
        <div class="pv-side law">
          <h4>Law (Prompt Instructions)</h4>
          <div class="pv-row">
            <div class="pv-icon-sm">📝</div>
            <div class="pv-row-text">"Don't break existing behaviour"</div>
          </div>
          <div class="pv-row">
            <div class="pv-icon-sm">🎨</div>
            <div class="pv-row-text">"Follow the existing coding style"</div>
          </div>
          <div class="pv-row">
            <div class="pv-icon-sm">🧮</div>
            <div class="pv-row-text">"Make sure the cart logic is correct"</div>
          </div>
          <div class="pv-row">
            <div class="pv-icon-sm">🔤</div>
            <div class="pv-row-text">"Don't introduce type errors"</div>
          </div>
        </div>
        <div class="pv-arrow-col">
          <span class="pv-arrow">&rarr;</span>
          <span class="pv-arrow">&rarr;</span>
          <span class="pv-arrow">&rarr;</span>
          <span class="pv-arrow">&rarr;</span>
        </div>
        <div class="pv-side physics">
          <h4>Physics (Structural Enforcement)</h4>
          <div class="pv-row">
            <div class="pv-icon-sm">🎭</div>
            <div class="pv-row-text">Playwright E2E tests that fail if behaviour changes</div>
          </div>
          <div class="pv-row">
            <div class="pv-icon-sm">🔧</div>
            <div class="pv-row-text">Linter configured to enforce style rules</div>
          </div>
          <div class="pv-row">
            <div class="pv-icon-sm">🧪</div>
            <div class="pv-row-text">Unit tests that assert cart calculations</div>
          </div>
          <div class="pv-row">
            <div class="pv-icon-sm">⚙️</div>
            <div class="pv-row-text">C# compiler that refuses to build</div>
          </div>
        </div>
      </div>

      <div class="callout">
        <p><strong>The rule:</strong> If a human has to manually check something, the harness is incomplete. Encode every compliance check as an automated constraint.</p>
      </div>
    </section>
  </div>
</div>

<!-- ═══════════ PAGE: PROMPT TACTICS ═══════════ -->
<div id="tactics" class="page">
  <div class="container">
    <section class="hero" style="padding-bottom: 2rem;">
      <div class="hero-badge">Getting Started &mdash; Hands On</div>
      <h1>Prompt <span class="gradient">Tactics</span></h1>
      <p class="subtitle">Six techniques that make your interactions with AI agents dramatically more effective. Try them, then ask yourself: <em>why does this work?</em> Understanding the mechanism matters more than memorising the trick.</p>
    </section>

    <section class="content-section">
      <div class="section-label">The Tactics</div>
      <h2>Your Prompting Toolkit</h2>
      <p>These aren't magic incantations &mdash; they're structural patterns that exploit how language models reason. Each one changes the <em>shape</em> of the agent's thinking, not just the words you feed it. Once you see the pattern, you'll start combining them instinctively.</p>

      <div class="tactic-grid">

        <!-- Tactic 1: Visualisation -->
        <div class="tactic-card" style="border-top: 2px solid var(--blue);">
          <div class="tactic-icon" style="background: rgba(91,141,239,0.1); border: 1px solid rgba(91,141,239,0.2); color: var(--blue);">&#128202;</div>
          <h4>Visualisation</h4>
          <div class="tactic-desc">Agents can do more than text. Tables, Mermaid diagrams, flowcharts, and architecture maps are often clearer than paragraphs &mdash; and they force the agent to think structurally about relationships.</div>
          <div class="tactic-prompt">"Please create a Mermaid diagram to help me understand how the shopping cart flow works from UI to database."</div>
          <div class="tactic-why"><strong>Why it works:</strong> Generating a diagram requires the agent to identify entities, relationships, and flow direction &mdash; a deeper analysis than prose. The structured output format constrains the reasoning into something verifiable.</div>
        </div>

        <!-- Tactic 2: Prompt For Questions -->
        <div class="tactic-card" style="border-top: 2px solid var(--accent-2);">
          <div class="tactic-icon" style="background: rgba(0,212,170,0.1); border: 1px solid rgba(0,212,170,0.2); color: var(--accent-2);">&#10067;</div>
          <h4>Prompt For Questions</h4>
          <div class="tactic-desc">When you're uncertain, don't guess at a prompt. Instead, ask the agent to interview you. It will surface requirements and edge cases you hadn't considered &mdash; before any work begins.</div>
          <div class="tactic-prompt">"I don't know how to get started on this project. Please ask me some questions to help clarify things."</div>
          <div class="tactic-why"><strong>Why it works:</strong> This flips the interaction from "you guess what the agent needs" to "the agent tells you what it needs." It's requirements gathering &mdash; the same thing a good consultant does in a first meeting.</div>
        </div>

        <!-- Tactic 3: Reflection -->
        <div class="tactic-card" style="border-top: 2px solid var(--orange);">
          <div class="tactic-icon" style="background: rgba(232,145,58,0.1); border: 1px solid rgba(232,145,58,0.2); color: var(--orange);">&#128640;</div>
          <h4>Reflection</h4>
          <div class="tactic-desc">After an agent gives you a response, ask it to self-evaluate. If it rates itself below 10, ask it to do better. The gap between its first attempt and its "try harder" attempt is often surprising.</div>
          <div class="tactic-prompt">"Rate your response out of 10. If it isn't a 10, please generate an improved version."</div>
          <div class="tactic-why"><strong>Why it works:</strong> Self-evaluation activates a different reasoning mode. The agent compares its output against an implicit quality standard, identifies gaps, and produces a revised version that addresses them. It's a one-step feedback loop.</div>
        </div>

        <!-- Tactic 4: Group Simulation -->
        <div class="tactic-card" style="border-top: 2px solid var(--accent-light);">
          <div class="tactic-icon" style="background: rgba(155,127,255,0.1); border: 1px solid rgba(155,127,255,0.2); color: var(--accent-light);">&#128101;</div>
          <h4>Group Simulation</h4>
          <div class="tactic-desc">Explain a problem, then ask the agent to simulate a panel of experts. You'll get multiple perspectives, trade-offs, and dissenting views that a single-perspective answer would miss.</div>
          <div class="tactic-prompt">"Who would be a good group of people to ask about this and what would they say?"</div>
          <div class="tactic-why"><strong>Why it works:</strong> Assigning distinct personas forces the agent to consider the problem from multiple angles. A security engineer, a UX designer, and a product manager would each flag different risks. The simulation surfaces that diversity in a single response.</div>
        </div>

        <!-- Tactic 5: Ask For References -->
        <div class="tactic-card" style="border-top: 2px solid var(--accent-3);">
          <div class="tactic-icon" style="background: rgba(255,107,138,0.1); border: 1px solid rgba(255,107,138,0.2); color: var(--accent-3);">&#128214;</div>
          <h4>Ask For References</h4>
          <div class="tactic-desc">After an agent responds, ask it to support its claims with documentation. This forces it to distinguish between confident knowledge and speculation &mdash; and makes hallucinations visible.</div>
          <div class="tactic-prompt">"Please explain your conclusion, referencing documentation to support your claims."</div>
          <div class="tactic-why"><strong>Why it works:</strong> Asking for evidence forces the agent to ground its reasoning. If it can't cite a source, that's a signal the claim needs verification. This is the <em>provenance tagging</em> concept in action &mdash; EXTRACTED (from docs) vs INFERRED (AI reasoning).</div>
        </div>

        <!-- Tactic 6: Synthesis & Selective Amnesia -->
        <div class="tactic-card" style="border-top: 2px solid var(--accent);">
          <div class="tactic-icon" style="background: rgba(124,92,252,0.1); border: 1px solid rgba(124,92,252,0.2); color: var(--accent);">&#129504;</div>
          <h4>Synthesis &amp; Selective Amnesia</h4>
          <div class="tactic-desc">After a long conversation, ask the agent to summarise the <em>problem</em> while deliberately excluding all solutions discussed. Copy that summary into a fresh session. The new agent attacks the problem without anchoring bias.</div>
          <div class="tactic-prompt">"Please thoroughly summarise the problem we've been discussing in such a way that a third party can take over. Do not include any solutions we've covered."</div>
          <div class="tactic-why"><strong>Why it works:</strong> This is <em>information diets</em> applied to conversations. A long session accumulates stale context and anchoring effects &mdash; the same "Dumb Zone" problem that plagues code context. A fresh agent with a clean problem statement reasons from first principles.</div>
        </div>

      </div>
    </section>

    <!-- ── The Pattern Behind the Tactics ── -->
    <section class="content-section">
      <div class="section-label">The Deeper Pattern</div>
      <h2>Why These Work: Structural Thinking</h2>
      <p>Notice the common thread across all six tactics. Each one changes the <em>structure</em> of the interaction, not just the words. They shape what the agent pays attention to, how it reasons, and what it produces.</p>

      <div style="display: flex; flex-direction: column; gap: 4px; margin: 2rem 0;">
        <div style="display: grid; grid-template-columns: 160px 1fr 1fr; gap: 4px; align-items: center;">
          <div style="font-size: 0.72rem; font-weight: 600; color: var(--text-dim); text-align: right; padding-right: 0.5rem;">Tactic</div>
          <div style="font-size: 0.72rem; font-weight: 600; color: var(--text-dim);">What It Changes</div>
          <div style="font-size: 0.72rem; font-weight: 600; color: var(--text-dim);">Intent Engineering Parallel</div>
        </div>
        <div style="display: grid; grid-template-columns: 160px 1fr 1fr; gap: 4px; align-items: center;">
          <div style="padding: 8px 12px; text-align: right; font-size: 0.8rem; font-weight: 600; color: var(--blue);">Visualisation</div>
          <div style="padding: 8px 12px; background: var(--surface); border: 1px solid var(--border); border-radius: 6px; font-size: 0.8rem; color: var(--text-muted);">Output format &rarr; forces structural reasoning</div>
          <div style="padding: 8px 12px; background: var(--surface); border: 1px solid var(--border); border-radius: 6px; font-size: 0.8rem; color: var(--text-muted);">Intent scaffolding &mdash; defining the shape</div>
        </div>
        <div style="display: grid; grid-template-columns: 160px 1fr 1fr; gap: 4px; align-items: center;">
          <div style="padding: 8px 12px; text-align: right; font-size: 0.8rem; font-weight: 600; color: var(--accent-2);">Questions</div>
          <div style="padding: 8px 12px; background: var(--surface); border: 1px solid var(--border); border-radius: 6px; font-size: 0.8rem; color: var(--text-muted);">Direction of flow &rarr; agent leads discovery</div>
          <div style="padding: 8px 12px; background: var(--surface); border: 1px solid var(--border); border-radius: 6px; font-size: 0.8rem; color: var(--text-muted);">Research phase &mdash; explore before acting</div>
        </div>
        <div style="display: grid; grid-template-columns: 160px 1fr 1fr; gap: 4px; align-items: center;">
          <div style="padding: 8px 12px; text-align: right; font-size: 0.8rem; font-weight: 600; color: var(--orange);">Reflection</div>
          <div style="padding: 8px 12px; background: var(--surface); border: 1px solid var(--border); border-radius: 6px; font-size: 0.8rem; color: var(--text-muted);">Self-evaluation loop &rarr; iterative improvement</div>
          <div style="padding: 8px 12px; background: var(--surface); border: 1px solid var(--border); border-radius: 6px; font-size: 0.8rem; color: var(--text-muted);">Feedback loops &mdash; the harness teaches</div>
        </div>
        <div style="display: grid; grid-template-columns: 160px 1fr 1fr; gap: 4px; align-items: center;">
          <div style="padding: 8px 12px; text-align: right; font-size: 0.8rem; font-weight: 600; color: var(--accent-light);">Group Sim</div>
          <div style="padding: 8px 12px; background: var(--surface); border: 1px solid var(--border); border-radius: 6px; font-size: 0.8rem; color: var(--text-muted);">Perspective diversity &rarr; surfaces trade-offs</div>
          <div style="padding: 8px 12px; background: var(--surface); border: 1px solid var(--border); border-radius: 6px; font-size: 0.8rem; color: var(--text-muted);">Risk registers &mdash; predict what could go wrong</div>
        </div>
        <div style="display: grid; grid-template-columns: 160px 1fr 1fr; gap: 4px; align-items: center;">
          <div style="padding: 8px 12px; text-align: right; font-size: 0.8rem; font-weight: 600; color: var(--accent-3);">References</div>
          <div style="padding: 8px 12px; background: var(--surface); border: 1px solid var(--border); border-radius: 6px; font-size: 0.8rem; color: var(--text-muted);">Evidence grounding &rarr; reveals hallucinations</div>
          <div style="padding: 8px 12px; background: var(--surface); border: 1px solid var(--border); border-radius: 6px; font-size: 0.8rem; color: var(--text-muted);">Provenance tagging &mdash; EXTRACTED vs INFERRED</div>
        </div>
        <div style="display: grid; grid-template-columns: 160px 1fr 1fr; gap: 4px; align-items: center;">
          <div style="padding: 8px 12px; text-align: right; font-size: 0.8rem; font-weight: 600; color: var(--accent);">Sel. Amnesia</div>
          <div style="padding: 8px 12px; background: var(--surface); border: 1px solid var(--border); border-radius: 6px; font-size: 0.8rem; color: var(--text-muted);">Context reset &rarr; removes anchoring bias</div>
          <div style="padding: 8px 12px; background: var(--surface); border: 1px solid var(--border); border-radius: 6px; font-size: 0.8rem; color: var(--text-muted);">Information diets &mdash; fresh context windows</div>
        </div>
      </div>

      <div class="callout green">
        <p><strong>This is the bridge to intent engineering.</strong> These tactics work because they change the structure of the interaction. Intent engineering takes the same idea further &mdash; encoding structure into workflows, harnesses, and artefacts rather than individual prompts. Start here, then level up on the next tabs.</p>
      </div>
    </section>

    <!-- ── Try It Now ── -->
    <section class="content-section">
      <div class="section-label">Exercise</div>
      <h2>Try It Right Now</h2>
      <p>Open Copilot Chat in your IDE and try this sequence. It combines three tactics in one interaction:</p>

      <div class="exercise-steps">
        <div class="ex-step">
          <div class="ex-num">1</div>
          <div class="ex-body">
            <h4>Start with Questions</h4>
            <p>"I need to add a caching layer to our API. Please ask me 5 questions to understand what I need before suggesting an approach."</p>
            <span class="ex-tag">Prompt For Questions</span>
          </div>
        </div>
        <div class="ex-step">
          <div class="ex-num">2</div>
          <div class="ex-body">
            <h4>Visualise the Design</h4>
            <p>After answering the questions, ask: "Now create a Mermaid sequence diagram showing the cache hit and cache miss flows."</p>
            <span class="ex-tag">Visualisation</span>
          </div>
        </div>
        <div class="ex-step">
          <div class="ex-num">3</div>
          <div class="ex-body">
            <h4>Simulate a Review</h4>
            <p>"If I showed this design to a senior backend engineer, a security engineer, and a DBA &mdash; what would each of them say?"</p>
            <span class="ex-tag">Group Simulation</span>
          </div>
        </div>
        <div class="ex-step">
          <div class="ex-num">4</div>
          <div class="ex-body">
            <h4>Reflect and Improve</h4>
            <p>"Rate the design out of 10 based on their feedback. If it isn't a 10, revise it."</p>
            <span class="ex-tag">Reflection</span>
          </div>
        </div>
      </div>

      <div class="takeaway-banner" style="margin-top: 2rem;">
        <em>Four tactics, one conversation, better outcome than any single prompt could produce.</em><br>
        <span style="font-size: 0.85rem; color: var(--text-dim); font-style: normal;">This is prompt-level intent engineering. The next tabs show how to encode it into systems.</span>
      </div>
    </section>

    <!-- ── Structured Prompting Frameworks ── -->
    <section class="content-section">
      <div class="section-label">Frameworks</div>
      <h2>Structured Prompting <span class="gradient">Frameworks</span></h2>
      <p>The six tactics above are intuitive moves. These four frameworks give you <em>repeatable scaffolding</em> for prompts &mdash; each one builds on the last. Start with APE for quick tasks, graduate to COAST for complex scenarios. The <a href="cheat-sheet.html" style="color: var(--accent-2);">4S Framework</a> (Single, Specific, Short, Surround) underpins all of them.</p>

      <!-- APE -->
      <div style="margin: 2rem 0;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
          <span style="background: rgba(91,141,239,0.15); border: 1px solid rgba(91,141,239,0.3); color: var(--blue); font-size: 0.7rem; font-weight: 700; padding: 0.25rem 0.75rem; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.08em;">Zone 2 &mdash; Structured</span>
          <h3 style="margin: 0; font-size: 1.2rem;">A.P.E &mdash; Action, Purpose, Expectation</h3>
        </div>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">The simplest structured framework. Three components that turn a vague ask into a targeted prompt. Use this when you know what you want but need to be precise about it.</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem;">
          <div style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.25rem; border-top: 2px solid var(--blue);">
            <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--blue); font-weight: 700; margin-bottom: 0.5rem;">01 Action</div>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">State the specific task you need performed.</p>
            <div style="font-size: 0.8rem; color: var(--accent-3);">&cross; "Help me with my code"</div>
            <div style="font-size: 0.8rem; color: var(--accent-2);">&check; "Write a Python function that validates email addresses using regex"</div>
          </div>
          <div style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.25rem; border-top: 2px solid var(--blue);">
            <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--blue); font-weight: 700; margin-bottom: 0.5rem;">02 Purpose</div>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">Give context about the goal behind the action.</p>
            <div style="font-size: 0.8rem; color: var(--accent-3);">&cross; "Make a chart"</div>
            <div style="font-size: 0.8rem; color: var(--accent-2);">&check; "Create a bar chart comparing Q1-Q4 revenue for the board deck"</div>
          </div>
          <div style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.25rem; border-top: 2px solid var(--blue);">
            <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--blue); font-weight: 700; margin-bottom: 0.5rem;">03 Expectation</div>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">Define format, length, style, or constraints.</p>
            <div style="font-size: 0.8rem; color: var(--accent-3);">&cross; "Give me some test cases"</div>
            <div style="font-size: 0.8rem; color: var(--accent-2);">&check; "Generate 5 pytest unit tests with edge cases, using AAA pattern"</div>
          </div>
        </div>
      </div>

      <!-- RACE -->
      <div style="margin: 2rem 0;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
          <span style="background: rgba(0,212,170,0.15); border: 1px solid rgba(0,212,170,0.3); color: var(--accent-2); font-size: 0.7rem; font-weight: 700; padding: 0.25rem 0.75rem; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.08em;">Zone 3 &mdash; Advanced</span>
          <h3 style="margin: 0; font-size: 1.2rem;">R.A.C.E &mdash; Role, Action, Context, Expectation</h3>
        </div>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">Adds a <strong style="color: var(--accent-2);">Role</strong> dimension &mdash; assigning an expertise persona activates domain-specific vocabulary and patterns. Use when the task benefits from a specialist&rsquo;s perspective.</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
          <div style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.25rem; border-top: 2px solid var(--accent-2);">
            <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent-2); font-weight: 700; margin-bottom: 0.5rem;">01 Role</div>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">Assign a specific expertise.</p>
            <div style="font-size: 0.8rem; color: var(--accent-3);">&cross; "Help me review this code"</div>
            <div style="font-size: 0.8rem; color: var(--accent-2);">&check; "As a senior security engineer, review this auth module"</div>
          </div>
          <div style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.25rem; border-top: 2px solid var(--accent-2);">
            <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent-2); font-weight: 700; margin-bottom: 0.5rem;">02 Action</div>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">Specify exactly what to produce.</p>
            <div style="font-size: 0.8rem; color: var(--accent-3);">&cross; "Make this better"</div>
            <div style="font-size: 0.8rem; color: var(--accent-2);">&check; "Refactor to extract a reusable validation middleware"</div>
          </div>
          <div style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.25rem; border-top: 2px solid var(--accent-2);">
            <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent-2); font-weight: 700; margin-bottom: 0.5rem;">03 Context</div>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">Tech stack, constraints, dependencies.</p>
            <div style="font-size: 0.8rem; color: var(--accent-3);">&cross; "Fix the login bug"</div>
            <div style="font-size: 0.8rem; color: var(--accent-2);">&check; "Fix OAuth callback &mdash; Express 4, passport-google, session store in Redis"</div>
          </div>
          <div style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.25rem; border-top: 2px solid var(--accent-2);">
            <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent-2); font-weight: 700; margin-bottom: 0.5rem;">04 Expectation</div>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">Quality standards and deliverables.</p>
            <div style="font-size: 0.8rem; color: var(--accent-3);">&cross; "Write some tests"</div>
            <div style="font-size: 0.8rem; color: var(--accent-2);">&check; "Integration tests: 80% coverage, mock DB, test happy + error paths"</div>
          </div>
        </div>
      </div>

      <!-- COAST -->
      <div style="margin: 2rem 0;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
          <span style="background: rgba(232,145,58,0.15); border: 1px solid rgba(232,145,58,0.3); color: var(--orange); font-size: 0.7rem; font-weight: 700; padding: 0.25rem 0.75rem; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.08em;">Zone 4 &mdash; Comprehensive</span>
          <h3 style="margin: 0; font-size: 1.2rem;">C.O.A.S.T &mdash; Context, Objective, Actions, Scenario, Task</h3>
        </div>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">Five components for complex, multi-step work. COAST forces you to think about <strong style="color: var(--orange);">edge cases</strong> and <strong style="color: var(--orange);">acceptance criteria</strong> up front &mdash; it maps directly to Agent Mode task decomposition.</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.75rem;">
          <div style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1rem; border-left: 3px solid var(--orange);">
            <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--orange); font-weight: 700; margin-bottom: 0.4rem;">Context</div>
            <div style="font-size: 0.8rem; color: var(--accent-3);">&cross; "Help with my app"</div>
            <div style="font-size: 0.8rem; color: var(--accent-2);">&check; "React 18 + TypeScript, Next.js 14 App Router"</div>
          </div>
          <div style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1rem; border-left: 3px solid var(--orange);">
            <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--orange); font-weight: 700; margin-bottom: 0.4rem;">Objective</div>
            <div style="font-size: 0.8rem; color: var(--accent-3);">&cross; "Improve performance"</div>
            <div style="font-size: 0.8rem; color: var(--accent-2);">&check; "Reduce initial bundle below 200KB with code splitting"</div>
          </div>
          <div style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1rem; border-left: 3px solid var(--orange);">
            <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--orange); font-weight: 700; margin-bottom: 0.4rem;">Actions</div>
            <div style="font-size: 0.8rem; color: var(--accent-3);">&cross; "Set up the project"</div>
            <div style="font-size: 0.8rem; color: var(--accent-2);">&check; "1) Lazy routes 2) Split vendor chunks 3) Tree-shake utils"</div>
          </div>
          <div style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1rem; border-left: 3px solid var(--orange);">
            <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--orange); font-weight: 700; margin-bottom: 0.4rem;">Scenario</div>
            <div style="font-size: 0.8rem; color: var(--accent-3);">&cross; "Handle errors"</div>
            <div style="font-size: 0.8rem; color: var(--accent-2);">&check; "If Redis disconnects, fall back to in-memory; alert via PagerDuty"</div>
          </div>
          <div style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1rem; border-left: 3px solid var(--orange);">
            <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--orange); font-weight: 700; margin-bottom: 0.4rem;">Task</div>
            <div style="font-size: 0.8rem; color: var(--accent-3);">&cross; "Create a component"</div>
            <div style="font-size: 0.8rem; color: var(--accent-2);">&check; "DataGrid: sortable columns, virtual scroll, CSV export"</div>
          </div>
        </div>
      </div>

      <!-- GCSE -->
      <div style="margin: 2rem 0;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
          <span style="background: rgba(124,92,252,0.15); border: 1px solid rgba(124,92,252,0.3); color: var(--accent); font-size: 0.7rem; font-weight: 700; padding: 0.25rem 0.75rem; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.08em;">Zone 5 &mdash; Goal-Oriented</span>
          <h3 style="margin: 0; font-size: 1.2rem;">G.C.S.E &mdash; Goal, Context, Source, Expectations</h3>
        </div>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">The most intent-aligned framework. Start with the <strong style="color: var(--accent);">end state</strong>, provide the landscape, point to <strong style="color: var(--accent);">authoritative sources</strong>, and define quality standards. Maps directly to <code style="font-size: 0.8rem;">copilot-instructions.md</code> and Copilot Workspace goals.</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
          <div style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.25rem; border-top: 2px solid var(--accent);">
            <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent); font-weight: 700; margin-bottom: 0.5rem;">01 Goal</div>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">Start with the end state, not the process.</p>
            <div style="font-size: 0.8rem; color: var(--accent-3);">&cross; "Help me with authentication"</div>
            <div style="font-size: 0.8rem; color: var(--accent-2);">&check; "Implement SSO so users log in once across all three microservices"</div>
          </div>
          <div style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.25rem; border-top: 2px solid var(--accent);">
            <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent); font-weight: 700; margin-bottom: 0.5rem;">02 Context</div>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">Architecture, dependencies, constraints.</p>
            <div style="font-size: 0.8rem; color: var(--accent-3);">&cross; "We use microservices"</div>
            <div style="font-size: 0.8rem; color: var(--accent-2);">&check; "3 Node.js services behind Kong, shared Redis session store"</div>
          </div>
          <div style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.25rem; border-top: 2px solid var(--accent);">
            <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent); font-weight: 700; margin-bottom: 0.5rem;">03 Source</div>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">Reference authoritative material for grounding.</p>
            <div style="font-size: 0.8rem; color: var(--accent-3);">&cross; "Follow best practices"</div>
            <div style="font-size: 0.8rem; color: var(--accent-2);">&check; "Follow OWASP Top 10 and our internal auth-sdk v3.2 API contract"</div>
          </div>
          <div style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.25rem; border-top: 2px solid var(--accent);">
            <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent); font-weight: 700; margin-bottom: 0.5rem;">04 Expectations</div>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">Quality and format standards.</p>
            <div style="font-size: 0.8rem; color: var(--accent-3);">&cross; "Make it production ready"</div>
            <div style="font-size: 0.8rem; color: var(--accent-2);">&check; "TypeScript strict, 90% coverage, OpenAPI 3.1 spec included"</div>
          </div>
        </div>
      </div>

      <div class="callout green">
        <p><strong>Progression, not competition.</strong> APE &rarr; RACE &rarr; COAST &rarr; GCSE isn't about picking the "best" framework. It's about escalating precision as complexity increases. A quick utility function? APE. A cross-service architectural change? GCSE. Match the framework to the task.</p>
      </div>
    </section>

    <!-- ── Source Packs & Diagnosing Failures ── -->
    <section class="content-section">
      <div class="section-label">Operational</div>
      <h2>Source Packs &amp; Diagnosing Failures</h2>
      <p>Good frameworks get you close. These two operational patterns close the remaining gap &mdash; grounding the AI with curated inputs and systematically fixing broken outputs.</p>

      <div class="comparison" style="margin: 2rem 0;">
        <div class="compare-col highlight" style="border-color: rgba(0,212,170,0.3);">
          <h4 style="color: var(--accent-2);">Source Packs</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem;">A short, explicit bundle of information given to an AI <em>before</em> asking it to summarise, plan, refactor, or make decisions. Reduce hallucinations by constraining what the AI works with.</p>
          <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 1rem; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
            <div style="font-weight: 600; color: var(--accent-2); margin-bottom: 0.5rem;">A Source Pack contains:</div>
            <div>&bull; Source material (meeting notes, docs, code excerpts)</div>
            <div>&bull; Facts you're confident are true</div>
            <div>&bull; Open questions or unknowns</div>
            <div>&bull; Clear boundaries on what the AI may assume</div>
          </div>
          <div style="font-size: 0.85rem; padding: 0.75rem; background: rgba(0,212,170,0.08); border-radius: 6px; border-left: 3px solid var(--accent-2);">
            <strong style="color: var(--accent-2);">The rule:</strong> <em>"If something is not supported by the provided source material, omit it or label it as 'not found in source'."</em>
          </div>
        </div>
        <div class="compare-col" style="border-color: rgba(232,145,58,0.3);">
          <h4 style="color: var(--orange);">Diagnosing Failures</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem;">When AI output is poor, don't restart from scratch &mdash; diagnose the failure mode and apply the targeted fix.</p>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 0.75rem;">
              <div style="font-size: 0.75rem; font-weight: 700; color: var(--orange);">Missing Information</div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">The prompt lacks context. &rarr; Ask the AI to request missing info before answering.</div>
            </div>
            <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 0.75rem;">
              <div style="font-size: 0.75rem; font-weight: 700; color: var(--orange);">Wrong Structure</div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">Correct answer, unusable format. &rarr; Enforce a specific output structure (table, JSON, etc.).</div>
            </div>
            <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 0.75rem;">
              <div style="font-size: 0.75rem; font-weight: 700; color: var(--orange);">Wrong Level or Tone</div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">Too technical or too vague. &rarr; Specify audience explicitly ("explain for a senior PM").</div>
            </div>
            <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 0.75rem;">
              <div style="font-size: 0.75rem; font-weight: 700; color: var(--orange);">Untrusted Claims</div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">Claims can't be traced to a source. &rarr; Require a source quote per claim; use a Source Pack.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Trusting AI Output ── -->
    <section class="content-section">
      <div class="section-label">Trust &amp; Verification</div>
      <h2>Trusting AI Output: From Hallucination to <span class="gradient">Verification</span></h2>
      <p>As models get smarter, they prioritise helpfulness (guessing) over truthfulness (admitting ignorance). The output is fluent, so we stop checking. This is <strong>automation bias</strong> &mdash; and it's the single biggest risk in AI-assisted development. These structural rules make hallucinations visible.</p>

      <!-- Code Quality Loop -->
      <div style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.5rem; margin: 2rem 0;">
        <h3 style="font-size: 1rem; margin-bottom: 1rem; color: var(--text);">The Code Quality Loop</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; justify-content: center;">
          <span style="background: rgba(91,141,239,0.15); color: var(--blue); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.85rem; font-weight: 600;">Explore</span>
          <span style="color: var(--text-dim);">&rarr;</span>
          <span style="background: rgba(124,92,252,0.15); color: var(--accent); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.85rem; font-weight: 600;">Plan</span>
          <span style="color: var(--text-dim);">&rarr;</span>
          <span style="background: rgba(0,212,170,0.15); color: var(--accent-2); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.85rem; font-weight: 600;">Code</span>
          <span style="color: var(--text-dim);">&rarr;</span>
          <span style="background: rgba(232,145,58,0.15); color: var(--orange); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.85rem; font-weight: 600;">Validate</span>
          <span style="color: var(--text-dim);">&rarr;</span>
          <span style="background: rgba(255,107,138,0.15); color: var(--accent-3); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.85rem; font-weight: 600;">Repeat</span>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-dim); text-align: center; margin-top: 1rem;">AI accelerates each step, but humans control correctness. Same loop good engineers already follow &mdash; AI changes the speed, not the discipline.</p>
      </div>

      <!-- The Honesty Gap -->
      <div style="background: linear-gradient(135deg, rgba(255,107,138,0.08), rgba(232,145,58,0.08)); border: 1px solid rgba(255,107,138,0.2); border-radius: var(--radius); padding: 1.5rem; margin: 1.5rem 0;">
        <h3 style="font-size: 1rem; margin-bottom: 0.75rem; color: var(--accent-3);">The Honesty Gap</h3>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0.75rem;">For <strong>developers</strong>, hallucination manifests as code that looks idiomatic but calls non-existent APIs, uses deprecated patterns, or introduces subtle logic bugs. For <strong>product managers</strong>, it manifests as plausible-sounding but incorrect feature specs. It <em>reads</em> like expertise.</p>
        <p style="font-size: 0.85rem; color: var(--accent-3); font-weight: 600;">The risk: because the output is fluent, we stop checking. Trust is lost the moment a hallucination breaks a build or ships a wrong spec.</p>
      </div>

      <!-- Three Structural Rules -->
      <h3 style="font-size: 1.1rem; margin: 2rem 0 1rem;">Three Structural Rules &mdash; Physics in Practice</h3>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">Don't rely on the agent's "morals" or instructions &mdash; that's Law. Build the interaction's architecture so inaccuracy is structurally difficult &mdash; that's Physics.</p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin: 1.5rem 0;">
        <!-- Force Blanks -->
        <div class="tactic-card" style="border-top: 2px solid var(--blue);">
          <div class="tactic-icon" style="background: rgba(91,141,239,0.1); border: 1px solid rgba(91,141,239,0.2); color: var(--blue);">&#9744;</div>
          <h4>Force Blanks</h4>
          <div class="tactic-desc">In your SKILL.md or Custom Instructions, require the agent to leave code comments or fields blank if logic is ambiguous &mdash; with a mandatory "Reason for Blank" field. This makes uncertainty visible instead of hiding it behind a confident guess.</div>
          <div class="tactic-prompt">copilot-instructions.md: "If any business rule is ambiguous, leave a TODO comment with the reasoning instead of guessing."</div>
        </div>

        <!-- 3× Penalty -->
        <div class="tactic-card" style="border-top: 2px solid var(--orange);">
          <div class="tactic-icon" style="background: rgba(232,145,58,0.1); border: 1px solid rgba(232,145,58,0.2); color: var(--orange);">3&times;</div>
          <h4>The 3&times; Penalty</h4>
          <div class="tactic-desc">Explicitly weight the distribution: <em>"A wrong answer is 3&times; worse than a blank."</em> This recalibrates the model's helpfulness bias toward caution. When in doubt, it leaves a blank rather than guessing &mdash; which is exactly what you want.</div>
          <div class="tactic-prompt">"When in doubt between guessing and leaving a TODO, always leave the TODO. A wrong answer costs 3&times; more than a blank."</div>
        </div>

        <!-- Label Sources -->
        <div class="tactic-card" style="border-top: 2px solid var(--accent-2);">
          <div class="tactic-icon" style="background: rgba(0,212,170,0.1); border: 1px solid rgba(0,212,170,0.2); color: var(--accent-2);">&#128278;</div>
          <h4>Label Sources (Provenance)</h4>
          <div class="tactic-desc">Every output tagged with provenance: <strong style="color: var(--accent-2);">EXTRACTED</strong> (exact match from docs/codebase) or <strong style="color: var(--orange);">INFERRED</strong> (AI's derivation, with a one-sentence logic explanation). This makes the boundary between fact and guess instantly visible.</div>
          <div class="tactic-prompt">"Tag each claim: [EXTRACTED] with source reference, or [INFERRED] with your reasoning in one sentence."</div>
        </div>
      </div>

      <!-- The Self-Rating Trap -->
      <div style="background: var(--surface); border: 1px solid rgba(232,145,58,0.3); border-radius: var(--radius); padding: 1.5rem; margin: 2rem 0;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
          <span style="background: rgba(232,145,58,0.15); color: var(--orange); font-size: 0.7rem; font-weight: 700; padding: 0.25rem 0.75rem; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.08em;">Watch Out</span>
          <h3 style="margin: 0; font-size: 1.1rem;">The Self-Rating Trap</h3>
        </div>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0.75rem;">Remember the <em>Reflection</em> tactic &mdash; "rate your response out of 10"? It works brilliantly for <strong>creative drafts</strong> where the rating triggers an improvement loop. The model can genuinely improve a poem on its second pass.</p>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0.75rem;">But for <strong>extraction, logic, and code correctness</strong>, the confidence score comes from the same process that produced the error. If a model hallucinates a variable name, it will confidently rate itself "9/10" on that answer.</p>
        <div style="font-size: 0.85rem; padding: 0.75rem; background: rgba(232,145,58,0.08); border-radius: 6px; border-left: 3px solid var(--orange);">
          <strong style="color: var(--orange);">Key insight:</strong> Self-assessment works for generation. It fails for verification. You cannot ask the AI to be its own independent auditor &mdash; the verification must come from outside the system. That's why we use <em>Physics</em> (tests, linters, compilers) not <em>Law</em> (instructions).
        </div>
      </div>

      <!-- Inverted Causality -->
      <div style="background: var(--surface); border: 1px solid rgba(124,92,252,0.3); border-radius: var(--radius); padding: 1.5rem; margin: 2rem 0;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
          <span style="background: rgba(124,92,252,0.15); color: var(--accent); font-size: 0.7rem; font-weight: 700; padding: 0.25rem 0.75rem; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.08em;">Key Insight</span>
          <h3 style="margin: 0; font-size: 1.1rem;">Inverted Causality &mdash; Why This Works</h3>
        </div>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0.75rem;">In humans, expertise produces expert language. In LLMs, <strong style="color: var(--accent);">expert language produces expertise</strong>. Forcing vocabulary like EXTRACTED and INFERRED isn't just metadata &mdash; it restricts predictions to expert regions of the training data, shifting the mean toward quality and reducing variance.</p>
        <p style="font-size: 0.9rem; color: var(--text-muted);">This is the fundamental mechanism behind all structural rules: by constraining the <em>form</em> of the output, you constrain the <em>quality</em> of the reasoning.</p>
      </div>

      <!-- Safer Prompts -->
      <h3 style="font-size: 1.1rem; margin: 2rem 0 1rem;">Safer Prompts for Common Tasks</h3>
      <div style="display: flex; flex-direction: column; gap: 0.75rem; margin: 1rem 0;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
          <div style="background: rgba(255,107,138,0.08); border: 1px solid rgba(255,107,138,0.2); border-radius: var(--radius); padding: 1rem;">
            <div style="font-size: 0.75rem; font-weight: 700; color: var(--accent-3); margin-bottom: 0.5rem;">Instead of &ldquo;Refactor this code&rdquo;</div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">"Explain current behaviour, list risks, confirm tests exist, <em>then</em> refactor without changing behaviour."</div>
          </div>
          <div style="background: rgba(255,107,138,0.08); border: 1px solid rgba(255,107,138,0.2); border-radius: var(--radius); padding: 1rem;">
            <div style="font-size: 0.75rem; font-weight: 700; color: var(--accent-3); margin-bottom: 0.5rem;">Instead of &ldquo;Write tests&rdquo;</div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">"List edge cases first, then write tests that would fail if the implementation is wrong."</div>
          </div>
        </div>
        <div style="display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
          <div style="background: rgba(255,107,138,0.08); border: 1px solid rgba(255,107,138,0.2); border-radius: var(--radius); padding: 1rem;">
            <div style="font-size: 0.75rem; font-weight: 700; color: var(--accent-3); margin-bottom: 0.5rem;">Instead of &ldquo;Fix this bug&rdquo;</div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">"Describe the root cause, show what the correct behaviour should be, then propose the smallest safe fix."</div>
          </div>
        </div>
      </div>

      <!-- Your Checklist -->
      <div class="takeaway-banner" style="margin-top: 2rem;">
        <em>Your verification checklist:</em><br>
        <span style="font-size: 0.9rem; color: var(--text-muted); font-style: normal;">
          &#9744; Can the agent say "I don't know" in your workflow?<br>
          &#9744; Does every output carry provenance (EXTRACTED / INFERRED)?<br>
          &#9744; Is a wrong answer penalised more than a blank?<br>
          &#9744; Are you building with Law or Physics?
        </span>
      </div>

      <div style="text-align: center; margin-top: 1.5rem;">
        <a href="cheat-sheet.html" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.6rem 1.25rem; background: rgba(124,92,252,0.1); border: 1px solid rgba(124,92,252,0.3); border-radius: var(--radius); color: var(--accent-light); text-decoration: none; font-size: 0.85rem; font-weight: 600; transition: all 0.2s;">&#128203; Cheat Sheets &amp; Bingo Card &rarr;</a>
      </div>
    </section>
  </div>
</div>

<!-- ═══════════ PAGE: INTENT & CONTEXT ═══════════ -->
<div id="shift" class="page">
  <div class="container">
    <section class="hero" style="padding-bottom: 2rem;">
      <div class="hero-badge">Stages 2&ndash;3 &mdash; Capture Intent</div>
      <h1>Intent &amp; <span class="gradient">Context</span></h1>
      <p class="subtitle">Document what exists. Reverse-engineer the intent that was never written down. Engineer the context so agents get curated knowledge, not raw dumps.</p>
    </section>

    <section class="content-section">
      <div class="section-label">Comparison</div>
      <h2>What's Actually Different?</h2>
      <p>Prompt engineering treats the prompt as the product. Intent engineering treats the <em>entire system</em> — prompts, structure, feedback loops, constraints — as the product.</p>

      <div class="comparison">
        <div class="compare-col old">
          <h4>Prompt Engineering</h4>
          <ul>
            <li>Focus on exact wording and formatting</li>
            <li>Tricks, templates, and magic phrases</li>
            <li>One prompt, one response</li>
            <li>Hope the AI follows instructions</li>
            <li>Retry with different words when it fails</li>
            <li>All context in a single prompt</li>
          </ul>
        </div>
        <div class="compare-col highlight">
          <h4>Intent Engineering</h4>
          <ul>
            <li>Focus on goals, constraints, and success criteria</li>
            <li>Structural enforcement through tooling</li>
            <li>Multi-phase workflows with handoff artefacts</li>
            <li>Make wrong behaviour structurally impossible</li>
            <li>Feedback loops that teach the AI what failed</li>
            <li>Information diets — right context at right time</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ── Framework Grid ── -->
    <section class="content-section">
      <div class="section-label">Framework</div>
      <h2>Intent Across Layers and Workstreams</h2>
      <p>Intent engineering applies at every level — from vision through to operations — and spans all your workstreams. Each layer encodes intent in a different way.</p>

      <div class="framework-wrap">
        <div class="fw-layers">
          <div class="fw-layer-pill vision"><div class="fw-icon">&#9998;</div> Vision</div>
          <div class="fw-layer-pill strategy"><div class="fw-icon">&#9678;</div> Strategy</div>
          <div class="fw-layer-pill design"><div class="fw-icon">&#9635;</div> Design</div>
          <div class="fw-layer-pill impl"><div class="fw-icon">&#9881;</div> Implementation</div>
          <div class="fw-layer-pill verify"><div class="fw-icon">&#10003;</div> Verification</div>
          <div class="fw-layer-pill ops"><div class="fw-icon">&#9730;</div> Operations</div>
        </div>
        <div class="fw-grid-area">
          <div class="fw-col-header">Docs</div>
          <div class="fw-col-header">Harnesses</div>
          <div class="fw-col-header">Agent Skills</div>
          <div class="fw-col-header">Pipelines</div>
          <!-- Vision: docs=filled, harnesses=hollow, skills=hollow, pipelines=hollow -->
          <div class="fw-cell"><div class="fw-dot filled"></div></div>
          <div class="fw-cell"><div class="fw-dot"></div></div>
          <div class="fw-cell"><div class="fw-dot purple-border"></div></div>
          <div class="fw-cell"><div class="fw-dot purple-border"></div></div>
          <!-- Strategy: docs=filled, harnesses=filled, skills=hollow, pipelines=hollow -->
          <div class="fw-cell"><div class="fw-dot filled"></div></div>
          <div class="fw-cell"><div class="fw-dot filled"></div></div>
          <div class="fw-cell"><div class="fw-dot purple-border"></div></div>
          <div class="fw-cell"><div class="fw-dot purple-border"></div></div>
          <!-- Design: docs=filled, harnesses=filled, skills=filled, pipelines=hollow -->
          <div class="fw-cell"><div class="fw-dot filled"></div></div>
          <div class="fw-cell"><div class="fw-dot filled"></div></div>
          <div class="fw-cell"><div class="fw-dot purple-filled"></div></div>
          <div class="fw-cell"><div class="fw-dot purple-border"></div></div>
          <!-- Impl: docs=filled, harnesses=filled, skills=filled, pipelines=hollow -->
          <div class="fw-cell"><div class="fw-dot filled"></div></div>
          <div class="fw-cell"><div class="fw-dot filled"></div></div>
          <div class="fw-cell"><div class="fw-dot purple-filled"></div></div>
          <div class="fw-cell"><div class="fw-dot purple-border"></div></div>
          <!-- Verify: docs=hollow, harnesses=filled, skills=filled, pipelines=filled -->
          <div class="fw-cell"><div class="fw-dot"></div></div>
          <div class="fw-cell"><div class="fw-dot filled"></div></div>
          <div class="fw-cell"><div class="fw-dot purple-filled"></div></div>
          <div class="fw-cell"><div class="fw-dot purple-filled"></div></div>
          <!-- Ops: docs=hollow, harnesses=filled, skills=filled, pipelines=filled -->
          <div class="fw-cell"><div class="fw-dot"></div></div>
          <div class="fw-cell"><div class="fw-dot filled"></div></div>
          <div class="fw-cell"><div class="fw-dot purple-filled"></div></div>
          <div class="fw-cell"><div class="fw-dot purple-filled"></div></div>
        </div>
        <div class="fw-benefits">
          <h4>Core Benefits</h4>
          <div class="fw-benefit-item">
            <div class="fw-benefit-icon b1">&#9678;</div>
            <div class="fw-benefit-text">Deep Context Alignment</div>
          </div>
          <div class="fw-benefit-item">
            <div class="fw-benefit-icon b2">&#9889;</div>
            <div class="fw-benefit-text">Streamlined Execution</div>
          </div>
          <div class="fw-benefit-item">
            <div class="fw-benefit-icon b3">&#8593;</div>
            <div class="fw-benefit-text">Continuous Improvement</div>
          </div>
        </div>
      </div>
      <!-- Grid Legend -->
      <div style="display: flex; gap: 2rem; margin-top: 1rem; font-size: 0.72rem; flex-wrap: wrap;">
        <span style="display: flex; align-items: center; gap: 0.4rem;"><span style="width: 12px; height: 12px; border-radius: 50%; background: var(--teal); display: inline-block;"></span><span style="color: var(--text-muted);">Active — intent encoded here</span></span>
        <span style="display: flex; align-items: center; gap: 0.4rem;"><span style="width: 12px; height: 12px; border-radius: 50%; border: 3px solid var(--teal); background: rgba(0,0,0,0.5); display: inline-block;"></span><span style="color: var(--text-muted);">Possible — not yet adopted</span></span>
      </div>
    </section>

    <section class="content-section">
      <div class="section-label">Key Insight</div>
      <h2>Prompts Are Suggestions. Harnesses Are Guarantees.</h2>
      <p>A prompt says "please don't break the cart." A test suite says "the cart works or you don't proceed." Both communicate intent, but only one enforces it.</p>

      <div class="callout green">
        <p><strong>Think of it this way:</strong> Prompt engineering is writing a good brief. Intent engineering is writing a good brief, hiring a QA team, setting up CI/CD, and defining acceptance criteria — all encoded into the system the AI operates within.</p>
      </div>
    </section>

    <!-- ── Token Management (from Tokens page) ── -->
    <section class="content-section">
      <div class="section-label">Token Management</div>
      <h2>The Dumb Zone &amp; Why Tokens Matter</h2>
      <p>Past roughly 40% context usage, AI reasoning degrades sharply — the model becomes confident but wrong. Every token you waste on irrelevant context is a token the agent can't use for thinking. This is why curated context beats raw dumps.</p>

      <!-- Token budget bars -->
      <div style="margin: 2rem 0;">
        <div style="margin-bottom: 1.5rem;">
          <div style="font-size: 0.72rem; font-weight: 600; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.5rem;">Naive approach: dump everything</div>
          <div style="display: flex; height: 44px; border-radius: 8px; overflow: hidden; border: 1px solid var(--border);">
            <div style="width: 65%; background: rgba(255,107,138,0.15); border-right: 1px solid var(--border); display: flex; align-items: center; padding-left: 12px; font-size: 0.72rem; color: var(--accent-3); font-weight: 500;">Raw files (65%)</div>
            <div style="width: 20%; background: rgba(232,145,58,0.1); border-right: 1px solid var(--border); display: flex; align-items: center; padding-left: 8px; font-size: 0.72rem; color: var(--orange); font-weight: 500;">Prompts (20%)</div>
            <div style="width: 15%; background: rgba(91,141,239,0.08); display: flex; align-items: center; padding-left: 8px; font-size: 0.72rem; color: var(--blue); font-weight: 500;">Reasoning</div>
          </div>
        </div>
        <div>
          <div style="font-size: 0.72rem; font-weight: 600; color: var(--accent-2); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.5rem;">Intent-engineered: curated context</div>
          <div style="display: flex; height: 44px; border-radius: 8px; overflow: hidden; border: 1px solid rgba(0,212,170,0.2);">
            <div style="width: 15%; background: rgba(0,212,170,0.1); border-right: 1px solid var(--border); display: flex; align-items: center; padding-left: 10px; font-size: 0.72rem; color: var(--accent-2); font-weight: 500;">Artefact</div>
            <div style="width: 20%; background: rgba(124,92,252,0.08); border-right: 1px solid var(--border); display: flex; align-items: center; padding-left: 8px; font-size: 0.72rem; color: var(--accent-light); font-weight: 500;">Prompts (20%)</div>
            <div style="width: 65%; background: rgba(0,212,170,0.05); display: flex; align-items: center; padding-left: 12px; font-size: 0.72rem; color: var(--accent-2); font-weight: 500;">Reasoning (65%) &larr; this is what you want</div>
          </div>
        </div>
      </div>

      <p>Use LSP over grep for precise queries. Compress findings into dense artefacts. Start each RPI phase in a fresh context window. Every token should earn its place.</p>

      <!-- LSP How-To: Practical Examples -->
      <h3 style="margin-top: 2.5rem;">LSP in Practice: Queries That Change Everything</h3>
      <p>Here's what "use LSP over grep" actually looks like. These are real queries from the nopCommerce steel thread — the same ones that found critical gaps grep missed.</p>

      <div class="code-block" style="margin-top: 1.5rem;">
        <span class="label">Find References — Who calls this method?</span>
<pre>
<span class="comment">// LSP: textDocument/references on AddToCartAsync</span>
<span class="comment">// Returns: 14 callers across 8 files, with exact locations</span>

<span class="keyword">ShoppingCartController.cs</span>:<span class="string">617</span>  AddProductToCart_Catalog()
<span class="keyword">ShoppingCartController.cs</span>:<span class="string">680</span>  AddProductToCart_Details()
<span class="keyword">CheckoutController.cs</span>:<span class="string">243</span>     MigrateCart()
<span class="keyword">OrderProcessingService.cs</span>:<span class="string">891</span> ReOrder()
<span class="comment">// ... 10 more — grep found only 6 of these</span>
</pre>
      </div>

      <div class="code-block" style="margin-top: 1rem;">
        <span class="label">Document Symbols — Full map of a class</span>
<pre>
<span class="comment">// LSP: textDocument/documentSymbol on ShoppingCartService.cs</span>
<span class="comment">// Returns: 62 symbols — 31 fields, 1 constructor, 27 methods</span>

<span class="keyword">Fields (31):</span>  _catalogSettings, _aclService, _customerService ...
<span class="keyword">Methods (27):</span> AddToCartAsync, GetShoppingCartAsync,
              DeleteShoppingCartItemAsync, <span class="string">FindShoppingCartItemInTheCartAsync</span> ...
<span class="comment">// One query = complete class anatomy. No file-reading tokens spent.</span>
</pre>
      </div>

      <div class="code-block" style="margin-top: 1rem;">
        <span class="label">Type Hierarchy — What implements this interface?</span>
<pre>
<span class="comment">// LSP: typeHierarchy/subtypes on IShoppingCartService</span>
<span class="comment">// Returns: implementation chain with exact locations</span>

<span class="keyword">IShoppingCartService</span> <span class="comment">(interface, 22 methods)</span>
  └─ <span class="string">ShoppingCartService</span> <span class="comment">(src/Libraries/Nop.Services/Orders/)</span>
      <span class="comment">// Confirms: single implementation, safe to extract subset</span>

<span class="comment">// Compare: grep for "IShoppingCartService" returns 47 matches</span>
<span class="comment">// including imports, comments, and XML docs — all noise</span>
</pre>
      </div>

      <div class="callout" style="margin-top: 1.5rem;">
        <p><strong>How to enable LSP:</strong> In VS Code, the language server runs automatically. In agent workflows (Claude Code, Copilot agent mode), use MCP servers like <code style="font-size: 0.82rem;">@anthropic/lsp-mcp</code> to give agents LSP access. The key queries are <code style="font-size: 0.82rem;">find-references</code>, <code style="font-size: 0.82rem;">document-symbols</code>, and <code style="font-size: 0.82rem;">type-hierarchy</code> — these three cover 90% of research needs.</p>
      </div>
    </section>
  </div>
</div>

<!-- ═══════════ PAGE: STEEL THREAD ═══════════ -->
<div id="methodology" class="page">
  <div class="container">
    <section class="hero" style="padding-bottom: 2rem;">
      <div class="hero-badge">Stage 4 &mdash; Steel Thread</div>
      <h1>The <span class="gradient">Steel Thread</span></h1>
      <p class="subtitle">Pick one vertical slice. Apply RPI: Research with LSP, Plan with risk registers, Implement with feedback loops. Prove the methodology on your codebase.</p>
    </section>

    <!-- ── RPI Flow Diagram ── -->
    <section class="content-section">
      <div class="section-label">The Flow</div>
      <h2>Three Phases, Three Fresh Contexts</h2>
      <p>AI agents have limited context windows. RPI splits work into phases, each operating in a fresh context with only the artefacts it needs.</p>

      <div class="rpi-flow">
        <div class="rpi-phase">
          <div class="rpi-num">R</div>
          <h4>Research</h4>
          <p>Explore the codebase freely. No implementation, no planning — pure discovery. Trace flows, find files, document connections.</p>
          <div class="rpi-artifact">&#128196; research.md</div>
          <div class="rpi-connector">&rarr;</div>
        </div>
        <div class="rpi-phase">
          <div class="rpi-num">P</div>
          <h4>Plan</h4>
          <p>Read only research.md. Produce ordered implementation steps, interface definitions, risk areas, and test strategies.</p>
          <div class="rpi-artifact">&#128196; plan.md</div>
          <div class="rpi-connector">&rarr;</div>
        </div>
        <div class="rpi-phase">
          <div class="rpi-num">I</div>
          <h4>Implement</h4>
          <p>Read only plan.md. Execute each step, running the full test suite after every change. Don't proceed until green.</p>
          <div class="rpi-artifact">&#9989; Working code</div>
        </div>
      </div>

      <div class="callout" style="margin-top: 2.5rem;">
        <p><strong>Information diets:</strong> Each phase gets only what it needs. The Plan agent never sees raw code — only compressed research. The Implement agent never sees research — only the ordered plan. This prevents context waste and forces density.</p>
      </div>
    </section>

    <!-- ── Information Diet Visualization ── -->
    <section class="content-section">
      <div class="section-label">Information Diets</div>
      <h2>What Each Agent Sees</h2>
      <p>The width of each bar shows how much information each agent receives. Less is more — constrained input forces focused output.</p>

      <div class="diet-visual">
        <div class="diet-row research">
          <div class="diet-agent research">Research</div>
          <div class="diet-bar"><div class="diet-fill">Full codebase access</div></div>
          <div class="diet-output">&rarr; research.md</div>
        </div>
        <div class="diet-row plan">
          <div class="diet-agent plan">Plan</div>
          <div class="diet-bar"><div class="diet-fill">research.md</div></div>
          <div class="diet-output">&rarr; plan.md</div>
        </div>
        <div class="diet-row implement">
          <div class="diet-agent implement">Implement</div>
          <div class="diet-bar"><div class="diet-fill">plan.md</div></div>
          <div class="diet-output">&rarr; code</div>
        </div>
      </div>
    </section>

    <!-- ── Three Principles ── -->
    <section class="content-section">
      <div class="section-label">Three Principles</div>
      <h2>What Holds It Together</h2>

      <div class="principle">
        <div class="num">1</div>
        <h3>Decompose-Route-Recompose</h3>
        <p>Break complex work into phases, route each to a fresh context with exactly the artefacts it needs, then recompose the results. This works <em>with</em> context window limitations instead of fighting them.</p>
      </div>
      <div class="principle">
        <div class="num">2</div>
        <h3>Physics Thinking</h3>
        <p>Don't tell the agent what to do — make wrong things impossible. A failing test is worth a thousand prompt instructions. Structural constraints are your most reliable form of intent communication.</p>
      </div>
      <div class="principle">
        <div class="num">3</div>
        <h3>Harnesses Matter More Than Models</h3>
        <p>The test suite, the compiler, the linter — these are your real safety net. A mediocre model with a great harness outperforms a brilliant model with no guardrails. Invest in the harness first.</p>
      </div>
    </section>

    <!-- ── Case Study: nopCommerce (merged from In Practice) ── -->
    <section class="content-section">
      <div class="section-label">Case Study</div>
      <h2>The nopCommerce Steel Thread</h2>
      <p>nopCommerce is a 200k+ line .NET e-commerce platform. The steel thread: the shopping cart flow from "Add to cart" through controllers and services to the database. One vertical slice through the entire architecture.</p>

      <h3 style="margin-top: 2rem;">Brownfield Extraction: The Step-by-Step Process</h3>
      <p>Reverse-engineering documentation from an existing codebase is the most common starting point for teams adopting AI-SDLC. Here's the methodology, using the nopCommerce cart flow as a worked example.</p>

      <div style="display: flex; flex-direction: column; gap: 3px; margin: 2rem 0;">
        <div style="display: flex; gap: 12px; padding: 1.25rem; background: var(--surface); border: 1px solid rgba(0,212,170,0.15); border-radius: var(--radius-sm);">
          <div style="min-width: 36px; height: 36px; border-radius: 50%; background: rgba(0,212,170,0.1); border: 1px solid rgba(0,212,170,0.2); display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--accent-2); font-size: 0.85rem;">1</div>
          <div>
            <div style="font-weight: 600; color: var(--text); margin-bottom: 0.3rem;">Identify the Steel Thread</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">Pick the narrowest user flow that touches every layer. For nopCommerce: "click Add to Cart on a product page." This touches UI (Razor view) → JavaScript (AJAX handler) → Controller → Service → Repository → Database. <em>Don't try to document the whole system — one thread is enough.</em></div>
          </div>
        </div>
        <div style="display: flex; gap: 12px; padding: 1.25rem; background: var(--surface); border: 1px solid rgba(91,141,239,0.15); border-radius: var(--radius-sm);">
          <div style="min-width: 36px; height: 36px; border-radius: 50%; background: rgba(91,141,239,0.1); border: 1px solid rgba(91,141,239,0.2); display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--blue); font-size: 0.85rem;">2</div>
          <div>
            <div style="font-weight: 600; color: var(--text); margin-bottom: 0.3rem;">Trace with LSP, Not Grep</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">Use <code style="font-size:0.8rem">find-references</code> on the controller action to discover every caller. Use <code style="font-size:0.8rem">document-symbols</code> to map the service class (e.g., 62 symbols in ShoppingCartService.cs — 31 fields, 27 methods). Use <code style="font-size:0.8rem">type-hierarchy</code> to find all implementations. Record exact file paths and line numbers.</div>
          </div>
        </div>
        <div style="display: flex; gap: 12px; padding: 1.25rem; background: var(--surface); border: 1px solid rgba(155,127,255,0.15); border-radius: var(--radius-sm);">
          <div style="min-width: 36px; height: 36px; border-radius: 50%; background: rgba(155,127,255,0.1); border: 1px solid rgba(155,127,255,0.2); display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--accent-light); font-size: 0.85rem;">3</div>
          <div>
            <div style="font-weight: 600; color: var(--text); margin-bottom: 0.3rem;">Produce Dense Research</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">Compress the trace into a structured <code style="font-size:0.8rem">research.md</code>: Entry Point → Controller Layer → Service Layer → Data Access → Observations. Include caller counts, dependency lists, and blocking conditions. The nopCommerce research.md maps the full add-to-cart flow in ~2k lines — down from 200k.</div>
          </div>
        </div>
        <div style="display: flex; gap: 12px; padding: 1.25rem; background: var(--surface); border: 1px solid rgba(232,145,58,0.15); border-radius: var(--radius-sm);">
          <div style="min-width: 36px; height: 36px; border-radius: 50%; background: rgba(232,145,58,0.1); border: 1px solid rgba(232,145,58,0.2); display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--orange); font-size: 0.85rem;">4</div>
          <div>
            <div style="font-weight: 600; color: var(--text); margin-bottom: 0.3rem;">Plan the Extraction</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">Fresh agent reads only <code style="font-size:0.8rem">research.md</code>. Produces ordered steps: create interface → create implementation (copy, don't move) → register in DI → delegate from original → update controller. Each step ends with a verification command (<code style="font-size:0.8rem">dotnet build</code>, <code style="font-size:0.8rem">dotnet test</code>, <code style="font-size:0.8rem">npx playwright test</code>).</div>
          </div>
        </div>
        <div style="display: flex; gap: 12px; padding: 1.25rem; background: var(--surface); border: 1px solid rgba(124,92,252,0.15); border-radius: var(--radius-sm);">
          <div style="min-width: 36px; height: 36px; border-radius: 50%; background: rgba(124,92,252,0.1); border: 1px solid rgba(124,92,252,0.2); display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--accent); font-size: 0.85rem;">5</div>
          <div>
            <div style="font-weight: 600; color: var(--text); margin-bottom: 0.3rem;">Implement with the Harness Running</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">Fresh agent follows the plan. After every change: <code style="font-size:0.8rem">dotnet format --verify-no-changes && dotnet test && npx playwright test</code>. The harness catches type errors (compiler), logic regressions (unit tests), and broken UI flows (Playwright). The agent self-corrects from error messages. <em>No human code review needed during implementation.</em></div>
          </div>
        </div>
      </div>

      <div class="callout green">
        <p><strong>Why this works for brownfields:</strong> You're not asking AI to understand your whole codebase. You're giving it a compressed, verified map of one narrow flow — and a harness that catches mistakes structurally. The steel thread proves the methodology; then you repeat it for the next flow.</p>
      </div>
    </section>

    <!-- ── Exercise Steps ── -->
    <section class="content-section">
      <div class="section-label">The Exercises</div>
      <h2>Five Steps, Building on Each Other</h2>

      <div class="exercise-steps">
        <div class="ex-step">
          <div class="ex-num">0</div>
          <div class="ex-body">
            <h4>Get Orientated</h4>
            <p>Understand the codebase, the steel thread, and the key files. Context-setting for humans before agents enter the picture.</p>
          </div>
        </div>
        <div class="ex-step">
          <div class="ex-num">1</div>
          <div class="ex-body">
            <h4>Build the Harness</h4>
            <p>Write Playwright E2E tests and unit tests <em>before any refactoring</em>. The harness defines "correct" structurally. This is the most important step.</p>
            <span class="ex-tag">Harnesses &gt; Models</span>
          </div>
        </div>
        <div class="ex-step">
          <div class="ex-num">2</div>
          <div class="ex-body">
            <h4>Research the Steel Thread</h4>
            <p>Agent explores the add-to-cart flow end-to-end. Produces a dense research.md with every file, method, and connection documented.</p>
            <span class="ex-tag">RPI: Research</span>
          </div>
        </div>
        <div class="ex-step">
          <div class="ex-num">3</div>
          <div class="ex-body">
            <h4>Plan the Refactoring</h4>
            <p>Fresh agent reads only research.md. Produces an ordered plan with interface definitions, DI registration, and a risk register.</p>
            <span class="ex-tag">RPI: Plan</span>
          </div>
        </div>
        <div class="ex-step">
          <div class="ex-num">4</div>
          <div class="ex-body">
            <h4>Implement with Feedback Loops</h4>
            <p>Fresh agent follows the plan step-by-step, running the full test suite after each change. The harness catches mistakes; the agent learns from errors.</p>
            <span class="ex-tag">RPI: Implement + Physics</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Wow Moments ── -->
    <section class="content-section">
      <div class="section-label">The Wow Moments</div>
      <h2>When Physics Thinking Pays Off</h2>
      <p>Three moments where you see the methodology working in real time:</p>

      <div class="wow-timeline">
        <div class="wow-moment">
          <div class="wow-badge">&#128308;</div>
          <h4>Compiler Catches a Type Error</h4>
          <p>The agent introduces a subtle type mismatch. The C# compiler refuses to build. The agent reads the error, fixes the type, moves on. No human intervention.</p>
          <span class="wow-principle">Physics Thinking</span>
        </div>
        <div class="wow-moment">
          <div class="wow-badge">&#129514;</div>
          <h4>Unit Test Catches Logic Regression</h4>
          <p>The agent refactors the cart service and accidentally changes calculation order. "Expected 42.99, got 38.50." Diagnosed and fixed.</p>
          <span class="wow-principle">Harnesses &gt; Models</span>
        </div>
        <div class="wow-moment">
          <div class="wow-badge">&#127917;</div>
          <h4>Playwright Catches UI Regression</h4>
          <p>The service works, but a missing DI registration throws a 500 error. Playwright catches it by clicking "Add to cart." End-to-end verification.</p>
          <span class="wow-principle">All Three Together</span>
        </div>
      </div>
    </section>

    <!-- ── Success Criteria ── -->
    <section class="content-section">
      <div class="section-label">Success Criteria</div>
      <h2>How We Know It Worked</h2>

      <div class="code-block">
<pre>
<span class="string">&#10003;</span> <span class="highlight-line">Research before code — agent explored before touching anything</span>
<span class="string">&#10003;</span> <span class="highlight-line">Plan before implementation — ordered steps with risk analysis</span>
<span class="string">&#10003;</span> <span class="highlight-line">Harnesses before refactoring — tests existed before changes</span>
<span class="string">&#10003;</span> <span class="highlight-line">Feedback loops — test suite ran after every change</span>
<span class="string">&#10003;</span> <span class="highlight-line">Dense handoffs — research.md and plan.md carried intent forward</span>
<span class="string">&#10003;</span> <span class="highlight-line">Physics enforcement — compiler + tests caught real errors</span>
<span class="string">&#10003;</span> <span class="highlight-line">No manual checking — if the harness is green, the refactoring is correct</span>
</pre>
      </div>

      <div class="callout">
        <p><strong>The takeaway:</strong> The model doesn't matter as much as the methodology. A well-structured system — with phases, harnesses, and feedback loops — produces reliable results regardless of which AI you use.</p>
      </div>
    </section>
  </div>
</div>

<!-- ═══════════ PAGE: PHYSICS ═══════════ -->
<div id="patterns" class="page">
  <div class="container">
    <section class="hero" style="padding-bottom: 2rem;">
      <div class="hero-badge">Stage 3 &mdash; Build Physics</div>
      <h1>Physics &amp; <span class="gradient">Harnesses</span></h1>
      <p class="subtitle">Stop relying on prompts. Build structural enforcement — tests, linters, compilers — that make wrong agent behaviour impossible. These are the patterns that encode intent as physics.</p>
    </section>

    <section class="content-section">
      <div class="section-label">Pattern 1</div>
      <h2>Intent Scaffolding</h2>
      <p>Define the <em>shape</em> of the output: required sections, detail level, format, and location. The agent fills in the scaffold.</p>

      <div class="comparison">
        <div class="compare-col old">
          <h4>Vague</h4>
          <ul>
            <li>"Research how the shopping cart works in this codebase"</li>
          </ul>
        </div>
        <div class="compare-col highlight">
          <h4>Scaffolded</h4>
          <ul>
            <li>"Trace the add-to-cart flow from UI to database"</li>
            <li>"For each layer, identify files, methods, and line numbers"</li>
            <li>"Produce research.md with sections: Entry Point, Controller, Service, Data Access, Observations"</li>
            <li>"Save to docs/adc/extract-cart-service/research.md"</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="section-label">Pattern 2</div>
      <h2>Constraint Systems</h2>
      <p>Explicit negative instructions define the safe operating space. They prevent the most common failure modes.</p>

      <div class="code-block">
        <span class="label">Example</span>
<pre>
<span class="keyword">## Constraints</span>
<span class="highlight-line">- Do NOT modify the database schema</span>
<span class="highlight-line">- Do NOT change the plugin architecture</span>
<span class="highlight-line">- Do NOT proceed to the next step until all tests pass</span>
<span class="highlight-line">- Focus only on the shopping cart steel thread</span>
</pre>
      </div>
    </section>

    <section class="content-section">
      <div class="section-label">Pattern 3</div>
      <h2>Risk Registers as Intent</h2>
      <p>Predict what could go wrong and map each risk to the harness that catches it. This transforms "be careful" into "here's which test will fail."</p>

      <div class="card-grid three">
        <div class="card">
          <div class="card-icon pink">&#9888;</div>
          <h4>Circular DI Dependency</h4>
          <p><strong style="color:var(--accent-3)">Critical</strong> — App fails to start. All Playwright tests fail immediately.</p>
        </div>
        <div class="card">
          <div class="card-icon pink">&#9888;</div>
          <h4>Missing DI Registration</h4>
          <p><strong style="color:var(--accent-3)">Critical</strong> — InvalidOperationException. Caught by any E2E test.</p>
        </div>
        <div class="card">
          <div class="card-icon orange">&#9888;</div>
          <h4>Cart Total Miscalculation</h4>
          <p><strong style="color:var(--orange)">High</strong> — Unit test asserts "Expected 42.99, got 38.50."</p>
        </div>
      </div>
    </section>

    <!-- ── Feedback Loop Diagram ── -->
    <section class="content-section">
      <div class="section-label">Pattern 4</div>
      <h2>Feedback Loops as Self-Correction</h2>
      <p>Build mandatory checkpoints into the workflow. The error message itself becomes a remediation instruction.</p>

      <div class="feedback-loop-diagram">
        <div class="fl-step">
          <div class="fl-circle">&#9998;</div>
          <h5>Make Change</h5>
          <p>Execute one step from the plan</p>
        </div>
        <div class="fl-arrow">&rarr;</div>
        <div class="fl-step">
          <div class="fl-circle">&#9881;</div>
          <h5>Run Tests</h5>
          <p>dotnet test + Playwright</p>
        </div>
        <div class="fl-arrow">&rarr;</div>
        <div class="fl-step">
          <div class="fl-circle">&#10060;</div>
          <h5>Fail?</h5>
          <p>Read error, diagnose, fix</p>
        </div>
        <div class="fl-arrow">&rarr;</div>
        <div class="fl-step">
          <div class="fl-circle">&#10003;</div>
          <h5>Pass?</h5>
          <p>Proceed to next step</p>
        </div>
        <div class="fl-return-arrow"></div>
        <div class="fl-return-label">Retry until green</div>
      </div>

      <div class="callout green" style="margin-top: 4rem;">
        <p><strong>Why this works:</strong> "Expected 42.99, got 0" is infinitely more useful than "please make sure the cart logic is correct." The harness teaches the agent what's wrong in machine-readable terms.</p>
      </div>
    </section>

    <section class="content-section">
      <div class="section-label">Pattern 5</div>
      <h2>Information Diets</h2>
      <p>Give each phase only what it needs. Constrained input forces focused output. See the Methodology tab for the full visualization.</p>

      <div class="card-grid three">
        <div class="card">
          <div class="card-icon">&#128270;</div>
          <h4>Research Sees</h4>
          <p>Full codebase access. Explore freely, compress findings into research.md.</p>
        </div>
        <div class="card">
          <div class="card-icon green">&#128208;</div>
          <h4>Plan Sees</h4>
          <p>Only research.md. No raw code. Forces planning from compressed summary.</p>
        </div>
        <div class="card">
          <div class="card-icon orange">&#9889;</div>
          <h4>Implement Sees</h4>
          <p>Only plan.md + codebase. Follows the plan. Doesn't re-research or re-plan.</p>
        </div>
      </div>
    </section>
  </div>
</div>

<!-- ═══════════ PAGE: ROADMAP ═══════════ -->
<div id="roadmap" class="page">
  <div class="container">
    <section class="hero" style="padding-bottom: 1.5rem;">
      <div class="hero-badge">Enablement Roadmap</div>
      <h1>Your AI <span class="gradient">Enablement Journey</span></h1>
      <p class="subtitle">A progressive roadmap from first Copilot prompt to fully agentic workflows. Each stage builds on the last — check the boxes as you go.</p>
    </section>

    <!-- ── What is AI-SDLC? ── -->
    <section class="content-section" style="padding-top: 1.5rem; padding-bottom: 0;">
      <div class="callout green" style="border-left: 3px solid var(--accent-2); padding: 1.75rem 2rem;">
        <div style="font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent-2); margin-bottom: 0.75rem;">Definition</div>
        <p style="font-size: 1.05rem; color: var(--text); margin-bottom: 0.75rem;"><strong>The AI-SDLC</strong> is a software development lifecycle where AI agents participate at every stage — from discovery through deployment — guided by <em>intent engineering</em>, constrained by <em>structural enforcement</em> (physics), and connected by <em>dense handoff artefacts</em>.</p>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 0;">It isn't a new process bolted onto what you already do. It's a progressive evolution of your existing SDLC: first AI assists you, then augments you, then orchestrates alongside you, and eventually runs autonomously with you setting intent and reviewing outcomes. The five stages below map this journey.</p>
      </div>
    </section>

    <!-- ── Interactive Progress Bar ── -->
    <section class="content-section" style="padding-top: 1rem;">
      <div class="rm-progress-wrap">
        <div class="rm-progress-labels">
          <span class="rm-progress-label" style="color: var(--accent-2);">Foundations</span>
          <span class="rm-progress-label" style="color: var(--blue);">Capture Intent</span>
          <span class="rm-progress-label" style="color: var(--accent-light);">Build Physics</span>
          <span class="rm-progress-label" style="color: var(--orange);">Steel Thread</span>
          <span class="rm-progress-label" style="color: var(--accent);">Scale</span>
        </div>
        <div class="rm-progress-track">
          <div class="rm-progress-segments" id="progressSegments">
            <div class="rm-seg s1" style="width: 20%;"></div>
            <div class="rm-seg s2" style="width: 20%;"></div>
            <div class="rm-seg s3" style="width: 20%;"></div>
            <div class="rm-seg s4" style="width: 20%;"></div>
            <div class="rm-seg s5" style="width: 20%;"></div>
          </div>
        </div>
        <div style="text-align: center; margin-top: 0.5rem; font-size: 0.72rem; color: var(--text-dim);">
          Click checkboxes below to track your progress &mdash; <span id="progressCount">0</span> / <span id="progressTotal">0</span> complete
        </div>
      </div>
    </section>

    <!-- ═══════ STAGE 1: FOUNDATIONS ═══════ -->
    <section class="content-section" style="padding-top: 0;">
      <div class="rm-stage s1">
        <div class="rm-stage-marker">1</div>
        <div class="rm-stage-header">
          <span class="rm-wave-tag">Wave 1 &mdash; Assistance</span>
          <h3>Foundations: Learn the Tools</h3>
          <p>Get comfortable with Copilot's core features. Build muscle memory for the basics before adding complexity. This is where everyone starts.</p>
        </div>

        <div class="rm-checklist">
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>Copilot in your IDE</strong> — tab completions, inline chat (Ctrl+I), chat panel working</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>4S Framework</strong> — Single, Specific, Short, Surround applied to prompts</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>Slash commands</strong> — /explain, /fix, /tests, /doc used fluently</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>Context variables</strong> — #file, #selection, #codebase to focus Copilot</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>Chat participants</strong> — @workspace, @terminal, @github for domain context</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>Prompt patterns</strong> — zero-shot, few-shot, role prompts, chain-of-thought</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>Safety habits</strong> — always review output, run tests on generated code, never paste secrets</div>
          </div>
        </div>

        <div class="rm-resources">
          <div class="rm-resources-title">&#128218; Learning Resources</div>
          <a class="rm-resource-link" href="https://github.com/skills/getting-started-with-github-copilot" target="_blank">
            <span class="rm-resource-badge gh-skill">GH Skill</span> Getting Started with GitHub Copilot
          </a>
          <a class="rm-resource-link" href="https://github.com/skills/copilot-codespaces-vscode" target="_blank">
            <span class="rm-resource-badge gh-skill">GH Skill</span> Copilot in Codespaces &amp; VS Code
          </a>
          <a class="rm-resource-link" href="https://github.com/skills/create-applications-with-the-copilot-cli" target="_blank">
            <span class="rm-resource-badge gh-skill">GH Skill</span> Create Applications with the Copilot CLI
          </a>
          <a class="rm-resource-link" href="https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/" target="_blank">
            <span class="rm-resource-badge ms-learn">MS Learn</span> Prompt Engineering with GitHub Copilot
          </a>
          <a class="rm-resource-link" href="https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/" target="_blank">
            <span class="rm-resource-badge ms-learn">MS Learn</span> Introduction to GitHub Copilot
          </a>
          <a class="rm-resource-link" href="https://learn.microsoft.com/en-us/training/modules/responsible-ai-with-github-copilot/" target="_blank">
            <span class="rm-resource-badge ms-learn">MS Learn</span> Responsible AI with GitHub Copilot
          </a>
        </div>

        <div class="rm-outcome">
          <div class="rm-outcome-label">Stage 1 outcome</div>
          <p>You can use Copilot as a fast, reliable code companion. You know how to ask good questions and you always verify the answers.</p>
        </div>
      </div>

      <!-- ═══════ STAGE 2: CAPTURE INTENT ═══════ -->
      <div class="rm-stage s2">
        <div class="rm-stage-marker">2</div>
        <div class="rm-stage-header">
          <span class="rm-wave-tag">Wave 2 &mdash; Augmentation</span>
          <h3>Capture Intent: Document What Exists</h3>
          <p>Before AI can help you change a codebase, it needs to understand it. This stage is about reverse-engineering the intent that was never written down — architecture, conventions, business rules, decisions.</p>
        </div>

        <div class="rm-checklist">
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>copilot-instructions.md</strong> — repo-level AI instructions in .github/ capturing coding standards</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>Architecture documented</strong> — use Copilot to reverse-engineer and document your system's structure</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>Agent Decision Context</strong> — start recording decisions: what, why, alternatives rejected, rollback strategy</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>Strategic vs Tactical docs</strong> — separate the Why (human-authored) from the How (agent-generated)</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>Source Packs</strong> — bundle context (docs, code excerpts, known facts) for reliable AI summaries</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>Provenance tagging</strong> — require AI output labelled EXTRACTED (from source) or INFERRED (AI derivation)</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>Agent Mode basics</strong> — use Copilot's agent mode for multi-file exploration and documentation tasks</div>
          </div>
        </div>

        <!-- copilot-instructions.md / CLAUDE.md Starter Template -->
        <div style="margin: 1.5rem 0; padding: 1.5rem; background: var(--surface); border: 1px solid rgba(91,141,239,0.2); border-radius: var(--radius);">
          <div style="font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--blue); margin-bottom: 1rem;">Starter Template — copilot-instructions.md / CLAUDE.md</div>
          <div class="code-block" style="margin: 0;">
<pre>
<span class="keyword"># Project: [Your Project Name]</span>

<span class="keyword">## Architecture</span>
<span class="highlight-line">- Framework: .NET 10 / React / [yours]</span>
<span class="highlight-line">- Pattern: N-tier with service layer</span>
<span class="highlight-line">- Key entry points: Controllers → Services → Repositories</span>

<span class="keyword">## Coding Standards</span>
<span class="highlight-line">- Async/await throughout; suffix Async on async methods</span>
<span class="highlight-line">- Interfaces for all services; register in DI container</span>
<span class="highlight-line">- No magic strings — use constants or enums</span>

<span class="keyword">## Constraints</span>
<span class="highlight-line">- Do NOT modify the database schema</span>
<span class="highlight-line">- Do NOT change public API contracts</span>
<span class="highlight-line">- Do NOT proceed until all tests pass</span>

<span class="keyword">## Verification Commands</span>
<span class="string">dotnet format --verify-no-changes</span>   <span class="comment"># Style</span>
<span class="string">dotnet test</span>                           <span class="comment"># Unit + integration</span>
<span class="string">npx playwright test</span>                   <span class="comment"># E2E</span>

<span class="keyword">## Steel Thread</span>
<span class="highlight-line">The add-to-cart flow: Browse → Product → Add → View Cart</span>
<span class="highlight-line">Files: ShoppingCartController.cs, ShoppingCartService.cs</span>
</pre>
          </div>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 1rem; line-height: 1.5;">Save as <code style="font-size: 0.78rem;">.github/copilot-instructions.md</code> for Copilot or <code style="font-size: 0.78rem;">CLAUDE.md</code> at the repo root for Claude. This file is the single most impactful thing you can create — it turns every agent interaction from cold-start to context-aware.</div>
        </div>

        <!-- ADC Template -->
        <div style="margin: 1.5rem 0; padding: 1.5rem; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius);">
          <div style="font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--orange); margin-bottom: 1rem;">Agent Decision Context — Template</div>
          <div class="code-block" style="margin: 0;">
<pre>
<span class="keyword">docs/adc/</span>
├── <span class="string">YYYY-MM-DD--decision-name.md</span>     <span class="comment">← Decision record</span>
└── <span class="string">YYYY-MM-DD--decision-name/</span>      <span class="comment">← RPI artefacts</span>
    ├── research.md                    <span class="comment">← Phase 1 output</span>
    ├── plan.md                        <span class="comment">← Phase 2 output</span>
    └── handoff.md                     <span class="comment">← Agent context for Phase 3</span>

<span class="keyword">## Decision Record Template</span>
<span class="highlight-line">Title:       Extract CartService from ShoppingCartService</span>
<span class="highlight-line">Date:        2026-03-31</span>
<span class="highlight-line">Status:      Proposed | Accepted | Implemented | Rejected</span>
<span class="highlight-line">Motivation:  ShoppingCartService is 1,976 lines with 31 deps</span>
<span class="highlight-line">Approach:    Extract steel thread methods into focused service</span>
<span class="highlight-line">Rejected:    Split by CRUD (too granular), rewrite (too risky)</span>
<span class="highlight-line">Rollback:    Delete CartService, revert delegation in original</span>
<span class="highlight-line">Harness:     dotnet build + dotnet test + npx playwright test</span>
</pre>
          </div>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 1rem; line-height: 1.5;"><strong style="color: var(--text);">Real example:</strong> The nopCommerce workshop uses this exact pattern. The <code style="font-size: 0.78rem;">research.md</code> maps the full add-to-cart flow (UI → Controller → Service → Data) with precise file paths and line numbers. The <code style="font-size: 0.78rem;">plan.md</code> contains 7 ordered steps, each with a verification command. The <code style="font-size: 0.78rem;">handoff.md</code> gives the implement agent just enough context — steel thread scope, key selectors, and harness commands — without re-explaining the research.</div>
        </div>

        <div class="rm-resources">
          <div class="rm-resources-title">&#128218; Learning Resources</div>
          <a class="rm-resource-link" href="https://github.com/skills/customize-your-github-copilot-experience" target="_blank">
            <span class="rm-resource-badge gh-skill">GH Skill</span> Customize Your GitHub Copilot Experience — copilot-instructions.md, custom instructions, prompt files
          </a>
          <a class="rm-resource-link" href="https://github.com/skills/scale-institutional-knowledge-using-copilot-spaces" target="_blank">
            <span class="rm-resource-badge gh-skill">GH Skill</span> Scale Institutional Knowledge Using Copilot Spaces — curate context for your team
          </a>
          <a class="rm-resource-link" href="https://github.com/skills/expand-your-team-with-copilot" target="_blank">
            <span class="rm-resource-badge gh-skill">GH Skill</span> Expand Your Team with Copilot — multi-file tasks, agent-assisted documentation
          </a>
          <a class="rm-resource-link" href="https://learn.microsoft.com/en-us/training/modules/introduction-to-copilot-spaces/" target="_blank">
            <span class="rm-resource-badge ms-learn">MS Learn</span> Introduction to Copilot Spaces
          </a>
          <a class="rm-resource-link" href="https://learn.microsoft.com/en-us/training/modules/management-and-customization-of-github-copilot/" target="_blank">
            <span class="rm-resource-badge ms-learn">MS Learn</span> Management and Customization of GitHub Copilot
          </a>
        </div>

        <div class="rm-outcome">
          <div class="rm-outcome-label">Stage 2 outcome</div>
          <p>Your codebase has agent-readable context. Copilot understands your conventions, architecture, and constraints. You're no longer starting from zero every prompt.</p>
        </div>
      </div>

      <!-- ═══════ STAGE 3: BUILD PHYSICS ═══════ -->
      <div class="rm-stage s3">
        <div class="rm-stage-marker">3</div>
        <div class="rm-stage-header">
          <span class="rm-wave-tag">Wave 2 &mdash; Augmentation</span>
          <h3>Build Physics: Add Tests and Harnesses</h3>
          <p>This is where you stop relying on prompts and start building structural enforcement. Tests, linters, and CI pipelines become the physics that make wrong agent behaviour impossible. You're closing the gaps in code coverage that make AI unreliable.</p>
        </div>

        <div class="rm-checklist">
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>Unit test coverage</strong> — use Copilot /tests to generate tests for critical paths you lack coverage on</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>E2E tests</strong> — Playwright or equivalent covering your core user flows (the steel thread)</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>Linter configured</strong> — style rules enforced automatically, not by convention</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>CI pipeline running</strong> — build + lint + test on every PR, failures block merge</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>The Code Quality Loop</strong> — Explore &rarr; Plan &rarr; Code &rarr; Validate &rarr; Repeat, with AI accelerating each step</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>Force Blanks rule</strong> — AI leaves gaps when unsure, with a "Reason for Blank" field</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>Verification mindset</strong> — every risk maps to a harness; if a human has to check, the harness is incomplete</div>
          </div>
        </div>

        <div class="rm-resources">
          <div class="rm-resources-title">&#128218; Learning Resources</div>
          <a class="rm-resource-link" href="https://learn.microsoft.com/en-us/training/modules/create-unit-tests-using-github-copilot-tools/" target="_blank">
            <span class="rm-resource-badge ms-learn">MS Learn</span> Create Unit Tests Using GitHub Copilot Tools
          </a>
          <a class="rm-resource-link" href="https://github.com/skills/copilot-code-review" target="_blank">
            <span class="rm-resource-badge gh-skill">GH Skill</span> Copilot Code Review — automated quality checks on PRs
          </a>
          <a class="rm-resource-link" href="https://github.com/skills/hello-github-actions" target="_blank">
            <span class="rm-resource-badge gh-skill">GH Skill</span> Hello GitHub Actions — set up CI pipelines that enforce harnesses
          </a>
          <a class="rm-resource-link" href="https://github.com/skills/secure-code-game" target="_blank">
            <span class="rm-resource-badge gh-skill">GH Skill</span> Secure Code Game — security-first testing mindset
          </a>
          <a class="rm-resource-link" href="https://learn.microsoft.com/en-us/training/modules/github-copilot-across-environments/" target="_blank">
            <span class="rm-resource-badge ms-learn">MS Learn</span> GitHub Copilot Across Environments — IDE, CLI, and CI/CD
          </a>
        </div>

        <div class="rm-outcome">
          <div class="rm-outcome-label">Stage 3 outcome</div>
          <p>Your codebase has physics. AI agents can make changes and get immediate, structural feedback. Wrong behaviour is caught automatically, not by code review.</p>
        </div>
      </div>

      <!-- ═══════ STAGE 4: STEEL THREAD ═══════ -->
      <div class="rm-stage s4">
        <div class="rm-stage-marker">4</div>
        <div class="rm-stage-header">
          <span class="rm-wave-tag">Wave 2&ndash;3 &mdash; Augmentation &rarr; Orchestration</span>
          <h3>Steel Thread: Prove It End-to-End</h3>
          <p>Pick one narrow, vertical slice through your entire architecture — a "steel thread." Apply the full RPI methodology: Research with LSP, Plan with risk registers, Implement with feedback loops. This is your proof-of-concept that the methodology works on your codebase.</p>
        </div>

        <div class="rm-checklist">
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>Steel thread identified</strong> — one end-to-end user flow touching every layer (UI, controller, service, data)</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>Research phase (R)</strong> — agent explores the steel thread with LSP, produces dense research.md</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>Plan phase (P)</strong> — fresh agent reads only research.md, produces plan.md with risk register</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>Implement phase (I)</strong> — fresh agent follows plan step-by-step, all harnesses green after every change</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>ADC artefacts saved</strong> — research.md, plan.md, handoff.md stored in docs/adc/ for future reference</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>Custom Skills created</strong> — your proven patterns encoded as reusable .github/skills/ or .claude/skills/</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>MCP servers configured</strong> — GitHub, Playwright, or domain-specific servers connected to your agent workflow</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>Results demonstrated</strong> — show the team what worked, what the harnesses caught, what the agent self-corrected</div>
          </div>
        </div>

        <div class="rm-resources">
          <div class="rm-resources-title">&#128218; Learning Resources</div>
          <a class="rm-resource-link" href="https://github.com/skills/build-applications-w-copilot-agent-mode" target="_blank">
            <span class="rm-resource-badge gh-skill">GH Skill</span> Build Applications with Copilot Agent Mode — multi-file agentic workflows
          </a>
          <a class="rm-resource-link" href="https://github.com/skills/integrate-mcp-with-copilot" target="_blank">
            <span class="rm-resource-badge gh-skill">GH Skill</span> Integrate MCP with Copilot — connect agents to external tools and data
          </a>
          <a class="rm-resource-link" href="https://github.com/skills/modernize-your-legacy-code-with-github-copilot" target="_blank">
            <span class="rm-resource-badge gh-skill">GH Skill</span> Modernize Your Legacy Code with GitHub Copilot — brownfield refactoring
          </a>
          <a class="rm-resource-link" href="https://learn.microsoft.com/en-us/training/modules/github-copilot-coding-agent/" target="_blank">
            <span class="rm-resource-badge ms-learn">MS Learn</span> GitHub Copilot Coding Agent — autonomous task execution
          </a>
          <a class="rm-resource-link" href="https://learn.microsoft.com/en-us/training/modules/github-mcp-server/" target="_blank">
            <span class="rm-resource-badge ms-learn">MS Learn</span> GitHub MCP Server — connecting AI to GitHub's API
          </a>
          <a class="rm-resource-link" href="https://learn.microsoft.com/en-us/training/modules/perform-code-maintenance-with-copilot-agent/" target="_blank">
            <span class="rm-resource-badge ms-learn">MS Learn</span> Perform Code Maintenance with Copilot Agent
          </a>
        </div>

        <div class="rm-outcome">
          <div class="rm-outcome-label">Stage 4 outcome</div>
          <p>You've proven the methodology works on your actual codebase. You have a repeatable playbook, reusable skills, and concrete results to share with your team.</p>
        </div>
      </div>

      <!-- ═══════ STAGE 5: SCALE ═══════ -->
      <div class="rm-stage s5">
        <div class="rm-stage-marker">5</div>
        <div class="rm-stage-header">
          <span class="rm-wave-tag">Wave 3&ndash;4 &mdash; Orchestration &rarr; Autonomy</span>
          <h3>Scale: From You to the Organisation</h3>
          <p>Graduate your proven patterns from individual to team infrastructure. Shared skills repos, pipeline agents, PR review bots, automated research phases. The methodology that worked on your machine now runs in your CI/CD pipeline.</p>
        </div>

        <div class="rm-checklist">
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>Shared skills repo</strong> — proven skills promoted from personal to team, versioned and reviewed like code</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>Team copilot-instructions.md</strong> — org conventions as agent-readable intent, maintained by the team</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>PR review agent</strong> — Copilot code review on every PR, checking architecture, style, and test coverage</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>Dependabot + Copilot</strong> — automated dependency self-healing: alert &rarr; analysis &rarr; fix PR &rarr; merge</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>Coding agent for issues</strong> — assign tickets to Copilot, it creates draft PRs asynchronously</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>Security integration</strong> — Defender/GHAS alerts trigger agent-generated remediation PRs</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>Modernization pipelines</strong> — Assess &rarr; Plan &rarr; Execute &rarr; Validate agent workflows for upgrades</div>
          </div>
          <div class="rm-check" onclick="toggleCheck(this)">
            <div class="rm-checkbox">&#10003;</div>
            <div class="rm-check-text"><strong>Org-wide ADCs</strong> — decision contexts become institutional memory, searchable by future agents and humans</div>
          </div>
        </div>

        <div class="rm-resources">
          <div class="rm-resources-title">&#128218; Learning Resources</div>
          <a class="rm-resource-link" href="https://github.com/skills/create-ai-powered-actions" target="_blank">
            <span class="rm-resource-badge gh-skill">GH Skill</span> Create AI-Powered Actions — build intelligent GitHub Actions with AI models
          </a>
          <a class="rm-resource-link" href="https://github.com/skills/reusable-workflows" target="_blank">
            <span class="rm-resource-badge gh-skill">GH Skill</span> Reusable Workflows — DRY CI/CD pipelines shared across repos
          </a>
          <a class="rm-resource-link" href="https://github.com/skills/secure-repository-supply-chain" target="_blank">
            <span class="rm-resource-badge gh-skill">GH Skill</span> Secure Repository Supply Chain — Dependabot, dependency review, GHAS
          </a>
          <a class="rm-resource-link" href="https://github.com/skills/your-first-extension-for-github-copilot" target="_blank">
            <span class="rm-resource-badge gh-skill">GH Skill</span> Your First Extension for GitHub Copilot — build custom chat participants
          </a>
          <a class="rm-resource-link" href="https://github.com/skills/introduction-to-codeql" target="_blank">
            <span class="rm-resource-badge gh-skill">GH Skill</span> Introduction to CodeQL — automated security analysis at scale
          </a>
          <a class="rm-resource-link" href="https://learn.microsoft.com/en-us/training/modules/code-review-with-copilot/" target="_blank">
            <span class="rm-resource-badge ms-learn">MS Learn</span> Code Review with GitHub Copilot
          </a>
          <a class="rm-resource-link" href="https://learn.microsoft.com/en-us/credentials/certifications/github-copilot/" target="_blank">
            <span class="rm-resource-badge cert">Cert</span> GitHub Copilot Certification — validate your AI-assisted development skills
          </a>
        </div>

        <div class="rm-outcome">
          <div class="rm-outcome-label">Stage 5 outcome</div>
          <p>AI agents are team infrastructure. Your pipeline researches, plans, implements, and verifies — with humans setting intent and reviewing outcomes. The AI-SDLC is operational.</p>
        </div>
      </div>
    </section>

    <!-- ── The Journey Visual ── -->
    <section class="content-section">
      <div class="section-label">The Big Picture</div>
      <h2>One Journey, Five Stages</h2>
      <p>Each stage unlocks the next. You can't build physics without capturing intent first. You can't run a steel thread without physics. And you can't scale what you haven't proven. The progression is deliberate.</p>

      <!-- Horizontal journey -->
      <div style="display: flex; align-items: stretch; gap: 3px; margin: 2.5rem 0;">
        <div style="flex: 1; padding: 1.25rem 1rem; border-radius: var(--radius) 0 0 var(--radius); background: linear-gradient(180deg, rgba(0,212,170,0.08), var(--surface)); border: 1px solid rgba(0,212,170,0.15); text-align: center;">
          <div style="font-size: 1.5rem; margin-bottom: 0.4rem;">&#128218;</div>
          <div style="font-size: 0.72rem; font-weight: 700; color: var(--accent-2); margin-bottom: 0.25rem;">Learn</div>
          <div style="font-size: 0.65rem; color: var(--text-dim);">Tools &amp; prompts</div>
        </div>
        <div style="flex: 1; padding: 1.25rem 1rem; background: linear-gradient(180deg, rgba(91,141,239,0.08), var(--surface)); border: 1px solid rgba(91,141,239,0.15); text-align: center;">
          <div style="font-size: 1.5rem; margin-bottom: 0.4rem;">&#128196;</div>
          <div style="font-size: 0.72rem; font-weight: 700; color: var(--blue); margin-bottom: 0.25rem;">Document</div>
          <div style="font-size: 0.65rem; color: var(--text-dim);">Capture intent</div>
        </div>
        <div style="flex: 1; padding: 1.25rem 1rem; background: linear-gradient(180deg, rgba(155,127,255,0.08), var(--surface)); border: 1px solid rgba(155,127,255,0.15); text-align: center;">
          <div style="font-size: 1.5rem; margin-bottom: 0.4rem;">&#128737;</div>
          <div style="font-size: 0.72rem; font-weight: 700; color: var(--accent-light); margin-bottom: 0.25rem;">Enforce</div>
          <div style="font-size: 0.65rem; color: var(--text-dim);">Build physics</div>
        </div>
        <div style="flex: 1; padding: 1.25rem 1rem; background: linear-gradient(180deg, rgba(232,145,58,0.08), var(--surface)); border: 1px solid rgba(232,145,58,0.15); text-align: center;">
          <div style="font-size: 1.5rem; margin-bottom: 0.4rem;">&#128640;</div>
          <div style="font-size: 0.72rem; font-weight: 700; color: var(--orange); margin-bottom: 0.25rem;">Prove</div>
          <div style="font-size: 0.65rem; color: var(--text-dim);">Steel thread</div>
        </div>
        <div style="flex: 1; padding: 1.25rem 1rem; border-radius: 0 var(--radius) var(--radius) 0; background: linear-gradient(180deg, rgba(124,92,252,0.08), var(--surface)); border: 1px solid rgba(124,92,252,0.15); text-align: center;">
          <div style="font-size: 1.5rem; margin-bottom: 0.4rem;">&#127758;</div>
          <div style="font-size: 0.72rem; font-weight: 700; color: var(--accent); margin-bottom: 0.25rem;">Scale</div>
          <div style="font-size: 0.65rem; color: var(--text-dim);">Team &amp; org</div>
        </div>
      </div>

      <div class="callout">
        <p><strong>Start where you are.</strong> Most teams are somewhere between Stage 1 and Stage 2. That's fine. The roadmap isn't a race — it's a progression. Each stage makes the next one possible, and each stage delivers value on its own.</p>
      </div>
    </section>

    <!-- ── What AI Touches ── -->
    <section class="content-section">
      <div class="section-label">AI at Every Stage</div>
      <h2>Where AI Fits in the Development Lifecycle</h2>
      <p>By Stage 5, AI participates in every phase of the SDLC. But even at Stage 1, it's accelerating your work. The difference is scope and trust.</p>

      <div style="display: flex; flex-direction: column; gap: 4px; margin: 2rem 0;">
        <div style="display: grid; grid-template-columns: 140px 1fr 60px; gap: 4px; align-items: center;">
          <div style="font-size: 0.72rem; font-weight: 600; color: var(--text-dim); text-align: right; padding-right: 0.5rem;">SDLC Phase</div>
          <div style="font-size: 0.72rem; font-weight: 600; color: var(--text-dim);">How AI Helps</div>
          <div style="font-size: 0.72rem; font-weight: 600; color: var(--text-dim); text-align: center;">Stage</div>
        </div>
        <div style="display: grid; grid-template-columns: 140px 1fr 60px; gap: 4px; align-items: center;">
          <div style="padding: 8px 12px; text-align: right; font-size: 0.8rem; font-weight: 600; color: var(--accent-2);">Discovery</div>
          <div style="padding: 8px 12px; background: var(--surface); border: 1px solid var(--border); border-radius: 6px; font-size: 0.8rem; color: var(--text-muted);">Reverse-engineer architecture, generate system docs, map dependencies with LSP</div>
          <div style="text-align: center; font-size: 0.72rem; color: var(--accent-2); font-weight: 600;">2+</div>
        </div>
        <div style="display: grid; grid-template-columns: 140px 1fr 60px; gap: 4px; align-items: center;">
          <div style="padding: 8px 12px; text-align: right; font-size: 0.8rem; font-weight: 600; color: var(--blue);">Planning</div>
          <div style="padding: 8px 12px; background: var(--surface); border: 1px solid var(--border); border-radius: 6px; font-size: 0.8rem; color: var(--text-muted);">Draft implementation plans, risk registers, migration strategies from research artefacts</div>
          <div style="text-align: center; font-size: 0.72rem; color: var(--blue); font-weight: 600;">4+</div>
        </div>
        <div style="display: grid; grid-template-columns: 140px 1fr 60px; gap: 4px; align-items: center;">
          <div style="padding: 8px 12px; text-align: right; font-size: 0.8rem; font-weight: 600; color: var(--accent-light);">Coding</div>
          <div style="padding: 8px 12px; background: var(--surface); border: 1px solid var(--border); border-radius: 6px; font-size: 0.8rem; color: var(--text-muted);">Completions, inline chat, agent-mode multi-file edits, vibe coding for prototypes</div>
          <div style="text-align: center; font-size: 0.72rem; color: var(--accent-light); font-weight: 600;">1+</div>
        </div>
        <div style="display: grid; grid-template-columns: 140px 1fr 60px; gap: 4px; align-items: center;">
          <div style="padding: 8px 12px; text-align: right; font-size: 0.8rem; font-weight: 600; color: var(--accent-light);">Testing</div>
          <div style="padding: 8px 12px; background: var(--surface); border: 1px solid var(--border); border-radius: 6px; font-size: 0.8rem; color: var(--text-muted);">Generate unit tests, E2E tests, edge cases. Copilot as the harness-builder, not just the coder</div>
          <div style="text-align: center; font-size: 0.72rem; color: var(--accent-light); font-weight: 600;">1+</div>
        </div>
        <div style="display: grid; grid-template-columns: 140px 1fr 60px; gap: 4px; align-items: center;">
          <div style="padding: 8px 12px; text-align: right; font-size: 0.8rem; font-weight: 600; color: var(--orange);">Code Review</div>
          <div style="padding: 8px 12px; background: var(--surface); border: 1px solid var(--border); border-radius: 6px; font-size: 0.8rem; color: var(--text-muted);">Copilot PR reviews for architecture, style, security. Human final approval</div>
          <div style="text-align: center; font-size: 0.72rem; color: var(--orange); font-weight: 600;">5</div>
        </div>
        <div style="display: grid; grid-template-columns: 140px 1fr 60px; gap: 4px; align-items: center;">
          <div style="padding: 8px 12px; text-align: right; font-size: 0.8rem; font-weight: 600; color: var(--accent);">Security</div>
          <div style="padding: 8px 12px; background: var(--surface); border: 1px solid var(--border); border-radius: 6px; font-size: 0.8rem; color: var(--text-muted);">Defender &rarr; GHAS &rarr; agent remediation. Runtime threats trigger source-level fixes</div>
          <div style="text-align: center; font-size: 0.72rem; color: var(--accent); font-weight: 600;">5</div>
        </div>
        <div style="display: grid; grid-template-columns: 140px 1fr 60px; gap: 4px; align-items: center;">
          <div style="padding: 8px 12px; text-align: right; font-size: 0.8rem; font-weight: 600; color: var(--accent);">Maintenance</div>
          <div style="padding: 8px 12px; background: var(--surface); border: 1px solid var(--border); border-radius: 6px; font-size: 0.8rem; color: var(--text-muted);">Dependabot + Copilot self-healing, modernization agents for framework upgrades</div>
          <div style="text-align: center; font-size: 0.72rem; color: var(--accent); font-weight: 600;">5</div>
        </div>
      </div>
    </section>

    <!-- ── Mindset shift ── -->
    <section class="content-section">
      <div class="section-label">The Shift</div>
      <h2>From Maker to Architect of Intent</h2>
      <p>The deepest change isn't in tooling — it's in mindset. As you progress through the stages, your role evolves from writing code to defining what correct looks like.</p>

      <!-- Role evolution -->
      <div style="display: flex; gap: 3px; margin: 2rem 0;">
        <div style="flex: 1; padding: 1.5rem; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius) 0 0 var(--radius);">
          <div style="font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-dim); margin-bottom: 0.75rem;">Stages 1&ndash;2</div>
          <div style="font-size: 1rem; font-weight: 700; color: var(--accent-2); margin-bottom: 0.5rem;">Maker</div>
          <div style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.5;">You write code with AI assistance. Copilot suggests, you accept or reject. The human does the thinking.</div>
        </div>
        <div style="flex: 1; padding: 1.5rem; background: var(--surface); border: 1px solid var(--border);">
          <div style="font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-dim); margin-bottom: 0.75rem;">Stages 3&ndash;4</div>
          <div style="font-size: 1rem; font-weight: 700; color: var(--orange); margin-bottom: 0.5rem;">Engineering Manager</div>
          <div style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.5;">You define the Definition of Done and the physics. Agents do the implementation. You review outcomes, not code.</div>
        </div>
        <div style="flex: 1; padding: 1.5rem; background: linear-gradient(180deg, rgba(124,92,252,0.04), var(--surface)); border: 1px solid rgba(124,92,252,0.2); border-radius: 0 var(--radius) var(--radius) 0;">
          <div style="font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-dim); margin-bottom: 0.75rem;">Stage 5</div>
          <div style="font-size: 1rem; font-weight: 700; color: var(--accent); margin-bottom: 0.5rem;">Architect of Intent</div>
          <div style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.5;">You define the system of systems. Intent flows through docs, skills, harnesses, and pipelines. Agents coordinate agents.</div>
        </div>
      </div>

      <div class="takeaway-banner">
        <em>Execution is now cheap. Verification and clarity are the new bottlenecks.</em><br>
        <span style="font-size: 0.85rem; color: var(--text-dim); font-style: normal;">Not vibe coding. Intent specification.</span>
      </div>
    </section>
  </div>
</div>

<!-- ═══════════ PAGE: SCALE ═══════════ -->
<div id="aisdlc" class="page">
  <div class="container">
    <section class="hero" style="padding-bottom: 2rem;">
      <div class="hero-badge">Stage 5 &mdash; Scale</div>
      <h1>Scale to <span class="gradient">Your Organisation</span></h1>
      <p class="subtitle">Graduate your proven patterns from individual to team infrastructure. Shared skills, pipeline agents, and the AI-native SDLC.</p>
    </section>

    <!-- ── Four Waves ── -->
    <section class="content-section">
      <div class="section-label">The Four Waves</div>
      <h2>From Assistance to Autonomy</h2>
      <p>AI adoption in software development follows a progression. Each wave changes the ratio of humans to agents — and the kind of intent engineering required.</p>

      <div class="wave-timeline">
        <div class="wave-card">
          <div class="wave-label">Wave 1</div>
          <div class="wave-pip"></div>
          <div class="wave-body">
            <h4>Assistance</h4>
            <div class="wave-subtitle">Human + Copilot</div>
            <div class="wave-icons">
              <div class="wave-icon-person wi-human">&#128100;</div>
              <span class="wi-plus">+</span>
              <div class="wave-icon-person wi-agent">&#9881;</div>
            </div>
            <p>AI as autocomplete. You drive, it suggests. Code completion, inline help, simple Q&A. The human does all the thinking.</p>
          </div>
        </div>
        <div class="wave-card current">
          <div class="wave-label">Wave 2</div>
          <div class="wave-pip"><div class="wave-today">Today</div></div>
          <div class="wave-body">
            <h4>Augmentation</h4>
            <div class="wave-subtitle">Human-directed agents</div>
            <div class="wave-icons">
              <div class="wave-icon-person wi-human">&#128100;</div>
              <div style="display:flex; gap:4px;">
                <div class="wave-icon-person wi-agent">&#9881;</div>
                <div class="wave-icon-person wi-agent">&#9881;</div>
                <div class="wave-icon-person wi-agent">&#9881;</div>
              </div>
            </div>
            <p>You direct agents to do whole tasks. Local skills, RPI methodology, personal agent workflows. <strong style="color:var(--blue)">This is where intent engineering begins.</strong></p>
          </div>
        </div>
        <div class="wave-card">
          <div class="wave-label">Wave 3</div>
          <div class="wave-pip"></div>
          <div class="wave-body">
            <h4>Orchestration</h4>
            <div class="wave-subtitle">Team-wide agent workflows</div>
            <div class="wave-icons">
              <div class="wave-icon-person wi-agent">&#9881;</div>
              <div class="wave-icon-person wi-agent">&#9881;</div>
              <div class="wave-icon-person wi-agent">&#9881;</div>
              <div class="wave-icon-person wi-human">&#128100;</div>
            </div>
            <div class="wave-icons" style="margin-top: 0;">
              <div class="wave-icon-person wi-agent">&#9881;</div>
              <div class="wave-icon-person wi-agent">&#9881;</div>
              <div class="wave-icon-person wi-agent">&#9881;</div>
              <div class="wave-icon-person wi-human">&#128100;</div>
            </div>
            <p>Shared skills repos, pipeline agents, PR review bots. Agents become team infrastructure. Humans supervise.</p>
          </div>
        </div>
        <div class="wave-card future">
          <div class="wave-label">Wave 4</div>
          <div class="wave-pip"></div>
          <div class="wave-body">
            <h4>Autonomy</h4>
            <div class="wave-subtitle">Agent-orchestrated systems</div>
            <div class="wave-icons">
              <div class="wave-icon-person wi-agent">&#9881;</div>
              <div class="wave-icon-person wi-agent">&#9881;</div>
              <div class="wave-icon-person wi-agent">&#9881;</div>
            </div>
            <div class="wave-icons" style="margin-top:0;">
              <div class="wave-icon-person wi-agent-dark">&#9881;</div>
              <div class="wave-icon-person wi-human">&#128100;</div>
              <div class="wave-icon-person wi-agent-dark">&#9881;</div>
            </div>
            <div class="wave-icons" style="margin-top:0;">
              <div class="wave-icon-person wi-agent">&#9881;</div>
              <div class="wave-icon-person wi-agent">&#9881;</div>
              <div class="wave-icon-person wi-agent">&#9881;</div>
            </div>
            <p>Agents coordinating agents at scale. Humans set intent and review outcomes. The SDLC runs itself.</p>
          </div>
        </div>
      </div>

      <div class="takeaway-banner">
        <em>We must shift our mindset from text-crafters to systems architects.</em>
      </div>
    </section>

    <!-- ── The Adoption Path ── -->
    <section class="content-section">
      <div class="section-label">The Path</div>
      <h2>Getting There: Individual First, Then Team</h2>
      <p>You don't jump straight to pipeline agents. The adoption path starts with you — proving the patterns locally — then graduating them to shared infrastructure.</p>

      <div class="adoption-path">
        <div class="adopt-step">
          <div class="adopt-marker">&#9998;</div>
          <div class="adopt-body">
            <h4>1. Get It Working Locally</h4>
            <p>Build your own skills, refine your own agent workflows, prove the RPI methodology on real tasks. This is your lab — experiment, iterate, learn what works. You're building muscle memory for intent engineering.</p>
            <div class="adopt-examples">
              <span class="adopt-chip">Personal CLAUDE.md</span>
              <span class="adopt-chip">Local skills</span>
              <span class="adopt-chip">RPI on your own PRs</span>
              <span class="adopt-chip">Custom agent prompts</span>
              <span class="adopt-chip">ADC decision records</span>
            </div>
          </div>
        </div>
        <div class="adopt-step">
          <div class="adopt-marker">&#128101;</div>
          <div class="adopt-body">
            <h4>2. Share Patterns with Your Team</h4>
            <p>Once your skills and workflows are proven, promote them to shared infrastructure. A team skills repo means everyone benefits from your hard-won patterns. Shared CLAUDE.md files encode team conventions as agent-readable intent.</p>
            <div class="adopt-examples">
              <span class="adopt-chip">Shared skills repo</span>
              <span class="adopt-chip">Team CLAUDE.md</span>
              <span class="adopt-chip">Documented agent workflows</span>
              <span class="adopt-chip">Pair-programming with agents</span>
            </div>
          </div>
        </div>
        <div class="adopt-step">
          <div class="adopt-marker">&#9881;</div>
          <div class="adopt-body">
            <h4>3. Agents in the Pipeline</h4>
            <p>Agents move from your terminal into the CI/CD pipeline. PR review agents check for style, test coverage, and architectural compliance. Research agents pre-analyse tickets. Plan agents draft implementation approaches before a human even starts.</p>
            <div class="adopt-examples">
              <span class="adopt-chip">PR review agents</span>
              <span class="adopt-chip">CI/CD pipeline agents</span>
              <span class="adopt-chip">Ticket pre-analysis</span>
              <span class="adopt-chip">Automated research phase</span>
              <span class="adopt-chip">Architecture compliance</span>
            </div>
          </div>
        </div>
        <div class="adopt-step">
          <div class="adopt-marker">&#127758;</div>
          <div class="adopt-body">
            <h4>4. Agentic Workflows at Scale</h4>
            <p>The full AI-SDLC: agents that research, plan, implement, and verify — with humans setting intent and reviewing outcomes. The RPI methodology you proved locally is now an organisational capability. Custom Skills encode your org's patterns as portable, reusable knowledge.</p>
            <div class="adopt-examples">
              <span class="adopt-chip">Agent-to-agent handoffs</span>
              <span class="adopt-chip">Org-wide skills marketplace</span>
              <span class="adopt-chip">Autonomous RPI pipelines</span>
              <span class="adopt-chip">Intent-driven backlog</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Individual vs Team ── -->
    <section class="content-section">
      <div class="section-label">Two Phases</div>
      <h2>What Changes When You Go from You to Us</h2>

      <div class="maturity-cols">
        <div class="maturity-col individual">
          <h4>Individual (Waves 1-2)</h4>
          <div class="maturity-item">
            <div class="mi-icon">&#128196;</div>
            <div class="mi-text"><strong>Personal CLAUDE.md</strong> — your coding conventions, preferences, and project-specific rules</div>
          </div>
          <div class="maturity-item">
            <div class="mi-icon">&#9881;</div>
            <div class="mi-text"><strong>Local skills</strong> — custom skills in your own .claude/skills/ folder, iterated until they work</div>
          </div>
          <div class="maturity-item">
            <div class="mi-icon">&#128270;</div>
            <div class="mi-text"><strong>Manual RPI</strong> — you trigger each phase, review each artefact, guide each agent</div>
          </div>
          <div class="maturity-item">
            <div class="mi-icon">&#128203;</div>
            <div class="mi-text"><strong>ADC records</strong> — your own decision contexts, learning what to capture</div>
          </div>
          <div class="maturity-item">
            <div class="mi-icon">&#128736;</div>
            <div class="mi-text"><strong>Local harnesses</strong> — tests and linters on your machine, run by your agents</div>
          </div>
        </div>
        <div class="maturity-col team">
          <h4>Team &amp; Organisation (Waves 3-4)</h4>
          <div class="maturity-item">
            <div class="mi-icon">&#128196;</div>
            <div class="mi-text"><strong>Shared CLAUDE.md</strong> — team conventions, architecture decisions, and coding standards as agent-readable intent</div>
          </div>
          <div class="maturity-item">
            <div class="mi-icon">&#9881;</div>
            <div class="mi-text"><strong>Shared skills repo</strong> — proven skills promoted from individual to team, versioned and reviewed like code</div>
          </div>
          <div class="maturity-item">
            <div class="mi-icon">&#128270;</div>
            <div class="mi-text"><strong>Pipeline RPI</strong> — agents triggered by events (new PR, ticket assignment), phased workflows automated</div>
          </div>
          <div class="maturity-item">
            <div class="mi-icon">&#128203;</div>
            <div class="mi-text"><strong>Org-wide ADCs</strong> — decision contexts become institutional memory, searchable by future agents</div>
          </div>
          <div class="maturity-item">
            <div class="mi-icon">&#128736;</div>
            <div class="mi-text"><strong>CI/CD harnesses</strong> — the same physics-based enforcement, now running in pipelines with agent reviewers</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Skills as the Bridge ── -->
    <section class="content-section">
      <div class="section-label">The Bridge</div>
      <h2>Skills Are the Unit of Adoption</h2>
      <p>A skill is a self-contained folder — a SKILL.md plus any bundled scripts, references, and examples. Skills are how individual knowledge becomes team capability.</p>

      <!-- Visual: skill lifecycle -->
      <div style="display: flex; align-items: center; gap: 0; margin: 2.5rem 0; justify-content: center; flex-wrap: wrap;">
        <div style="text-align: center; padding: 1rem;">
          <div style="width: 80px; height: 80px; border-radius: var(--radius); background: rgba(0,212,170,0.06); border: 1px solid rgba(0,212,170,0.15); display: flex; align-items: center; justify-content: center; margin: 0 auto; font-size: 1.8rem;">&#128161;</div>
          <div style="font-size: 0.75rem; font-weight: 600; color: var(--accent-2); margin-top: 0.5rem;">Create</div>
          <div style="font-size: 0.68rem; color: var(--text-dim); margin-top: 0.2rem;">Build locally,<br>iterate until proven</div>
        </div>
        <div style="font-size: 1.5rem; color: var(--text-dim); padding: 0 0.25rem;">&rarr;</div>
        <div style="text-align: center; padding: 1rem;">
          <div style="width: 80px; height: 80px; border-radius: var(--radius); background: rgba(91,141,239,0.06); border: 1px solid rgba(91,141,239,0.15); display: flex; align-items: center; justify-content: center; margin: 0 auto; font-size: 1.8rem;">&#128269;</div>
          <div style="font-size: 0.75rem; font-weight: 600; color: var(--blue); margin-top: 0.5rem;">Prove</div>
          <div style="font-size: 0.68rem; color: var(--text-dim); margin-top: 0.2rem;">Use on real tasks,<br>refine the SKILL.md</div>
        </div>
        <div style="font-size: 1.5rem; color: var(--text-dim); padding: 0 0.25rem;">&rarr;</div>
        <div style="text-align: center; padding: 1rem;">
          <div style="width: 80px; height: 80px; border-radius: var(--radius); background: rgba(155,127,255,0.06); border: 1px solid rgba(155,127,255,0.15); display: flex; align-items: center; justify-content: center; margin: 0 auto; font-size: 1.8rem;">&#128101;</div>
          <div style="font-size: 0.75rem; font-weight: 600; color: var(--accent-light); margin-top: 0.5rem;">Share</div>
          <div style="font-size: 0.68rem; color: var(--text-dim); margin-top: 0.2rem;">Promote to shared<br>skills repo via PR</div>
        </div>
        <div style="font-size: 1.5rem; color: var(--text-dim); padding: 0 0.25rem;">&rarr;</div>
        <div style="text-align: center; padding: 1rem;">
          <div style="width: 80px; height: 80px; border-radius: var(--radius); background: rgba(124,92,252,0.08); border: 1px solid rgba(124,92,252,0.2); display: flex; align-items: center; justify-content: center; margin: 0 auto; font-size: 1.8rem;">&#127758;</div>
          <div style="font-size: 0.75rem; font-weight: 600; color: var(--accent); margin-top: 0.5rem;">Scale</div>
          <div style="font-size: 0.68rem; color: var(--text-dim); margin-top: 0.2rem;">Agents use skills<br>in pipelines at scale</div>
        </div>
      </div>

      <div class="callout green">
        <p><strong>The industry is converging.</strong> GitHub's Custom Skills, Copilot's Modernization Agent, the Agentic Context Framework — they all use the same pattern: self-contained skill folders with documentation, scripts, and examples. Your RPI methodology can be packaged as a skill. Your ADC pattern can be a skill. This is how methodology becomes infrastructure.</p>
      </div>
    </section>

    <!-- ── What the AI-SDLC Looks Like ── -->
    <section class="content-section">
      <div class="section-label">The Vision</div>
      <h2>The AI-Native SDLC</h2>
      <p>In the AI-SDLC, every stage of the development lifecycle has agent participation — guided by intent, constrained by harnesses, connected by dense artefacts.</p>

      <div style="display: flex; flex-direction: column; gap: 4px; margin: 2rem 0;">
        <div style="display: flex; align-items: center; gap: 4px;">
          <div style="width: 160px; min-width: 160px; padding: 10px 14px; border-radius: 8px; background: rgba(0,212,170,0.1); border: 1px solid rgba(0,212,170,0.2); font-size: 0.78rem; font-weight: 600; color: var(--accent-2);">&#128196; Ticket Created</div>
          <div style="color: var(--text-dim);">&rarr;</div>
          <div style="flex: 1; padding: 10px 14px; border-radius: 8px; background: var(--surface); border: 1px solid var(--border); font-size: 0.78rem; color: var(--text-muted);"><strong style="color:var(--accent-2)">Research agent</strong> analyses the ticket, maps affected files, produces research.md</div>
        </div>
        <div style="display: flex; align-items: center; gap: 4px;">
          <div style="width: 160px; min-width: 160px; padding: 10px 14px; border-radius: 8px; background: rgba(91,141,239,0.1); border: 1px solid rgba(91,141,239,0.2); font-size: 0.78rem; font-weight: 600; color: var(--blue);">&#128208; Research Ready</div>
          <div style="color: var(--text-dim);">&rarr;</div>
          <div style="flex: 1; padding: 10px 14px; border-radius: 8px; background: var(--surface); border: 1px solid var(--border); font-size: 0.78rem; color: var(--text-muted);"><strong style="color:var(--blue)">Plan agent</strong> reads research.md, drafts implementation plan with risk register</div>
        </div>
        <div style="display: flex; align-items: center; gap: 4px;">
          <div style="width: 160px; min-width: 160px; padding: 10px 14px; border-radius: 8px; background: rgba(155,127,255,0.1); border: 1px solid rgba(155,127,255,0.2); font-size: 0.78rem; font-weight: 600; color: var(--accent-light);">&#9745; Human Review</div>
          <div style="color: var(--text-dim);">&rarr;</div>
          <div style="flex: 1; padding: 10px 14px; border-radius: 8px; background: var(--surface); border: 1px solid var(--border); font-size: 0.78rem; color: var(--text-muted);"><strong style="color:var(--accent-light)">Developer</strong> reviews the plan, adjusts intent, approves or redirects</div>
        </div>
        <div style="display: flex; align-items: center; gap: 4px;">
          <div style="width: 160px; min-width: 160px; padding: 10px 14px; border-radius: 8px; background: rgba(232,145,58,0.1); border: 1px solid rgba(232,145,58,0.2); font-size: 0.78rem; font-weight: 600; color: var(--orange);">&#9889; Plan Approved</div>
          <div style="color: var(--text-dim);">&rarr;</div>
          <div style="flex: 1; padding: 10px 14px; border-radius: 8px; background: var(--surface); border: 1px solid var(--border); font-size: 0.78rem; color: var(--text-muted);"><strong style="color:var(--orange)">Implement agent</strong> follows plan step-by-step, self-corrects from harness output</div>
        </div>
        <div style="display: flex; align-items: center; gap: 4px;">
          <div style="width: 160px; min-width: 160px; padding: 10px 14px; border-radius: 8px; background: rgba(124,92,252,0.1); border: 1px solid rgba(124,92,252,0.2); font-size: 0.78rem; font-weight: 600; color: var(--accent);">&#128640; PR Created</div>
          <div style="color: var(--text-dim);">&rarr;</div>
          <div style="flex: 1; padding: 10px 14px; border-radius: 8px; background: var(--surface); border: 1px solid var(--border); font-size: 0.78rem; color: var(--text-muted);"><strong style="color:var(--accent)">Review agent</strong> checks architecture, test coverage, style &mdash; human does final approval</div>
        </div>
      </div>

      <div class="callout">
        <p><strong>The key insight:</strong> The same intent engineering patterns that make agents reliable on your machine — phased workflows, dense artefacts, physics-based enforcement — are exactly what make them reliable in a pipeline. The AI-SDLC isn't a different methodology. It's the same methodology, graduated from individual to infrastructure.</p>
      </div>
    </section>
  </div>
</div>

<!-- Tokens content merged into Intent & Context page above. Full detail preserved in intent-engineering-backup.html -->
<div style="display:none">

    <!-- ── The Dumb Zone ── -->
    <section class="content-section">
      <div class="section-label">The Problem</div>
      <h2>The Dumb Zone</h2>
      <p>AI agents don't degrade gracefully as context fills up. Past roughly 40% context usage, reasoning quality drops sharply — the model becomes confident but wrong. This is the Dumb Zone.</p>

      <div style="margin: 2.5rem 0;">
        <div style="display: flex; align-items: flex-end; height: 200px; gap: 2px; position: relative; padding-bottom: 2rem;">
          <!-- Y axis label -->
          <div style="position: absolute; left: -10px; top: 0; bottom: 2rem; display: flex; flex-direction: column; justify-content: space-between; font-size: 0.65rem; color: var(--text-dim); text-align: right; width: 60px;">
            <span>Excellent</span>
            <span>Good</span>
            <span>Poor</span>
          </div>
          <!-- Bars -->
          <div style="display: flex; align-items: flex-end; gap: 3px; flex: 1; height: 100%; margin-left: 70px;">
            <div style="flex:1; height: 95%; background: linear-gradient(to top, rgba(0,212,170,0.3), rgba(0,212,170,0.08)); border-radius: 4px 4px 0 0; border: 1px solid rgba(0,212,170,0.2); border-bottom: none;"></div>
            <div style="flex:1; height: 90%; background: linear-gradient(to top, rgba(0,212,170,0.3), rgba(0,212,170,0.08)); border-radius: 4px 4px 0 0; border: 1px solid rgba(0,212,170,0.2); border-bottom: none;"></div>
            <div style="flex:1; height: 85%; background: linear-gradient(to top, rgba(0,212,170,0.25), rgba(0,212,170,0.06)); border-radius: 4px 4px 0 0; border: 1px solid rgba(0,212,170,0.15); border-bottom: none;"></div>
            <div style="flex:1; height: 78%; background: linear-gradient(to top, rgba(91,141,239,0.25), rgba(91,141,239,0.06)); border-radius: 4px 4px 0 0; border: 1px solid rgba(91,141,239,0.2); border-bottom: none;"></div>
            <!-- The 40% mark -->
            <div style="flex:1; height: 60%; background: linear-gradient(to top, rgba(232,145,58,0.3), rgba(232,145,58,0.06)); border-radius: 4px 4px 0 0; border: 1px solid rgba(232,145,58,0.2); border-bottom: none; position: relative;">
              <div style="position: absolute; top: -28px; left: 50%; transform: translateX(-50%); font-size: 0.6rem; color: var(--orange); white-space: nowrap; font-weight: 600;">~40%</div>
            </div>
            <div style="flex:1; height: 42%; background: linear-gradient(to top, rgba(255,107,138,0.3), rgba(255,107,138,0.06)); border-radius: 4px 4px 0 0; border: 1px solid rgba(255,107,138,0.2); border-bottom: none;"></div>
            <div style="flex:1; height: 30%; background: linear-gradient(to top, rgba(255,107,138,0.3), rgba(255,107,138,0.06)); border-radius: 4px 4px 0 0; border: 1px solid rgba(255,107,138,0.2); border-bottom: none;"></div>
            <div style="flex:1; height: 22%; background: linear-gradient(to top, rgba(255,107,138,0.35), rgba(255,107,138,0.08)); border-radius: 4px 4px 0 0; border: 1px solid rgba(255,107,138,0.25); border-bottom: none;"></div>
            <div style="flex:1; height: 18%; background: linear-gradient(to top, rgba(255,107,138,0.35), rgba(255,107,138,0.08)); border-radius: 4px 4px 0 0; border: 1px solid rgba(255,107,138,0.25); border-bottom: none;"></div>
            <div style="flex:1; height: 15%; background: linear-gradient(to top, rgba(255,107,138,0.4), rgba(255,107,138,0.1)); border-radius: 4px 4px 0 0; border: 1px solid rgba(255,107,138,0.3); border-bottom: none;"></div>
          </div>
        </div>
        <!-- X axis -->
        <div style="display: flex; margin-left: 70px; justify-content: space-between; font-size: 0.65rem; color: var(--text-dim);">
          <span>0%</span><span>20%</span><span>40%</span><span>60%</span><span>80%</span><span>100%</span>
        </div>
        <div style="text-align: center; margin-top: 0.75rem;">
          <span style="font-size: 0.72rem; color: var(--text-muted);">Context Window Usage &rarr;</span>
        </div>
        <!-- Legend -->
        <div style="display: flex; justify-content: center; gap: 2rem; margin-top: 1rem; font-size: 0.72rem;">
          <span style="display: flex; align-items: center; gap: 0.4rem;"><span style="width: 10px; height: 10px; border-radius: 2px; background: rgba(0,212,170,0.3); border: 1px solid rgba(0,212,170,0.3);"></span><span style="color: var(--accent-2);">Strong reasoning</span></span>
          <span style="display: flex; align-items: center; gap: 0.4rem;"><span style="width: 10px; height: 10px; border-radius: 2px; background: rgba(232,145,58,0.3); border: 1px solid rgba(232,145,58,0.3);"></span><span style="color: var(--orange);">Degrading</span></span>
          <span style="display: flex; align-items: center; gap: 0.4rem;"><span style="width: 10px; height: 10px; border-radius: 2px; background: rgba(255,107,138,0.3); border: 1px solid rgba(255,107,138,0.3);"></span><span style="color: var(--accent-3);">Dumb Zone</span></span>
        </div>
      </div>

      <div class="callout">
        <p><strong>200k+ lines can't fit in a window.</strong> nopCommerce's ShoppingCartService alone is 1,976 lines with 31 dependencies. Dumping files into context doesn't work — you need curated context, not raw context.</p>
      </div>
    </section>

    <!-- ── Three Strategies ── -->
    <section class="content-section">
      <div class="section-label">Strategies</div>
      <h2>Three Ways to Minimise Token Waste</h2>

      <div class="card-grid three">
        <div class="card">
          <div class="card-icon">&#128270;</div>
          <h4>1. Precise Tools</h4>
          <p>Use LSP, AST queries, and structured APIs instead of grep and file reads. Get exactly the data you need, not pages of approximate matches.</p>
        </div>
        <div class="card">
          <div class="card-icon green">&#128230;</div>
          <h4>2. Dense Artefacts</h4>
          <p>Compress hours of exploration into structured documents. Handoff artefacts carry intent forward without carrying raw context.</p>
        </div>
        <div class="card">
          <div class="card-icon orange">&#9986;</div>
          <h4>3. Fresh Context Windows</h4>
          <p>Start each phase clean. Don't accumulate stale tokens from earlier exploration. The RPI methodology bakes this in.</p>
        </div>
      </div>
    </section>

    <!-- ── LSP vs Grep ── -->
    <section class="content-section">
      <div class="section-label">Precise Tools</div>
      <h2>LSP Changes Everything</h2>
      <p>The same research task — mapping the shopping cart steel thread — was run twice. Once with grep and manual file reads, once with Language Server Protocol. The difference isn't subtle.</p>

      <div class="physics-visual">
        <div class="pv-side law">
          <h4>Without LSP (grep)</h4>
          <div class="pv-row">
            <div class="pv-icon-sm">&#128196;</div>
            <div class="pv-row-text"><strong style="color:var(--text)">6</strong> methods identified for extraction</div>
          </div>
          <div class="pv-row">
            <div class="pv-icon-sm">&#9888;</div>
            <div class="pv-row-text"><strong style="color:var(--text)">10</strong> risks in register</div>
          </div>
          <div class="pv-row">
            <div class="pv-icon-sm">&#128269;</div>
            <div class="pv-row-text">Caller counts <strong style="color:var(--text)">estimated</strong>, not verified</div>
          </div>
          <div class="pv-row">
            <div class="pv-icon-sm">&#128203;</div>
            <div class="pv-row-text">Reads many files to find partial matches</div>
          </div>
        </div>
        <div class="pv-arrow-col">
          <span class="pv-arrow">vs</span>
        </div>
        <div class="pv-side physics">
          <h4>With LSP</h4>
          <div class="pv-row">
            <div class="pv-icon-sm">&#128196;</div>
            <div class="pv-row-text"><strong style="color:#fff">10</strong> methods identified for extraction</div>
          </div>
          <div class="pv-row">
            <div class="pv-icon-sm">&#9888;</div>
            <div class="pv-row-text"><strong style="color:#fff">12</strong> risks in register (+2 critical)</div>
          </div>
          <div class="pv-row">
            <div class="pv-icon-sm">&#128269;</div>
            <div class="pv-row-text">Precise caller counts: <strong style="color:#fff">30+ consumers by layer</strong></div>
          </div>
          <div class="pv-row">
            <div class="pv-icon-sm">&#128203;</div>
            <div class="pv-row-text">Structured queries return <strong style="color:#fff">only what's needed</strong></div>
          </div>
        </div>
      </div>

      <!-- Three critical gaps -->
      <h3 style="margin-top: 2.5rem;">Three Critical Gaps Grep Missed</h3>
      <div class="wow-timeline" style="margin-top: 1.5rem;">
        <div class="wow-moment">
          <div class="wow-badge" style="font-size: 1.2rem; background: rgba(255,107,138,0.15); border: 2px solid var(--accent-3);">1</div>
          <h4>Test DI Registration</h4>
          <p><code style="font-size:0.75rem; color:var(--accent-2)">BaseNopTest.cs</code> needs CartService registered too — not just <code style="font-size:0.75rem; color:var(--accent-2)">NopStartup.cs</code>. Without this, all unit tests fail.</p>
          <span class="wow-principle" style="color:var(--accent-3); background:rgba(255,107,138,0.1);">Would break all tests</span>
        </div>
        <div class="wow-moment">
          <div class="wow-badge" style="font-size: 1.2rem; background: rgba(255,107,138,0.15); border: 2px solid var(--accent-3);">2</div>
          <h4>Bidirectional Coupling</h4>
          <p>Delete and Update call each other. Moving one without the other creates a circular dependency that the compiler rejects.</p>
          <span class="wow-principle" style="color:var(--accent-3); background:rgba(255,107,138,0.1);">Would block compilation</span>
        </div>
        <div class="wow-moment">
          <div class="wow-badge" style="font-size: 1.2rem; background: rgba(255,107,138,0.15); border: 2px solid var(--accent-3);">3</div>
          <h4>Hidden External Callers</h4>
          <p>8 callers on <code style="font-size:0.75rem; color:var(--accent-2)">GetStandardWarningsAsync</code> from outside the service. Grep found 0 — treated as internal only.</p>
          <span class="wow-principle" style="color:var(--accent-3); background:rgba(255,107,138,0.1);">Would break 8 callers</span>
        </div>
      </div>

      <div class="callout green" style="margin-top: 2rem;">
        <p><strong>LSP-verified research is physics for planning.</strong> Any of these three gaps would have caused the implementation to fail. LSP answers precise questions with precise data — no wasted tokens on scanning files for approximate matches.</p>
      </div>
    </section>

    <!-- ── Context Compression ── -->
    <section class="content-section">
      <div class="section-label">Dense Artefacts</div>
      <h2>Compression, Not Accumulation</h2>
      <p>Each RPI phase compresses its findings into a dense handoff document. The next phase gets curated knowledge, not raw exploration. This is how you stay out of the Dumb Zone.</p>

      <!-- Compression funnel visual -->
      <div style="display: flex; align-items: center; gap: 0; margin: 2.5rem 0; justify-content: center;">
        <!-- Full codebase -->
        <div style="text-align: center; width: 160px;">
          <div style="width: 140px; height: 140px; border-radius: var(--radius); background: rgba(91,141,239,0.06); border: 1px solid rgba(91,141,239,0.15); display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 0 auto;">
            <div style="font-size: 2rem; font-weight: 800; color: var(--blue);">200k</div>
            <div style="font-size: 0.7rem; color: var(--text-muted);">lines of code</div>
          </div>
          <div style="font-size: 0.72rem; color: var(--text-dim); margin-top: 0.5rem;">Full codebase</div>
        </div>

        <div style="font-size: 1.5rem; color: var(--text-dim); padding: 0 0.5rem;">&rarr;</div>

        <!-- Research output -->
        <div style="text-align: center; width: 140px;">
          <div style="width: 110px; height: 110px; border-radius: var(--radius); background: rgba(0,212,170,0.06); border: 1px solid rgba(0,212,170,0.15); display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 0 auto;">
            <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent-2);">~2k</div>
            <div style="font-size: 0.7rem; color: var(--text-muted);">lines</div>
          </div>
          <div style="font-size: 0.72rem; color: var(--text-dim); margin-top: 0.5rem;">research.md</div>
        </div>

        <div style="font-size: 1.5rem; color: var(--text-dim); padding: 0 0.5rem;">&rarr;</div>

        <!-- Plan output -->
        <div style="text-align: center; width: 130px;">
          <div style="width: 90px; height: 90px; border-radius: var(--radius); background: rgba(232,145,58,0.06); border: 1px solid rgba(232,145,58,0.15); display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 0 auto;">
            <div style="font-size: 1.3rem; font-weight: 800; color: var(--orange);">~350</div>
            <div style="font-size: 0.7rem; color: var(--text-muted);">lines</div>
          </div>
          <div style="font-size: 0.72rem; color: var(--text-dim); margin-top: 0.5rem;">plan.md</div>
        </div>

        <div style="font-size: 1.5rem; color: var(--text-dim); padding: 0 0.5rem;">&rarr;</div>

        <!-- Focused action -->
        <div style="text-align: center; width: 110px;">
          <div style="width: 64px; height: 64px; border-radius: var(--radius); background: rgba(124,92,252,0.08); border: 1px solid rgba(124,92,252,0.2); display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 0 auto;">
            <div style="font-size: 1.1rem; font-weight: 800; color: var(--accent-light);">6</div>
            <div style="font-size: 0.65rem; color: var(--text-muted);">steps</div>
          </div>
          <div style="font-size: 0.72rem; color: var(--text-dim); margin-top: 0.5rem;">Focused action</div>
        </div>
      </div>

      <p class="center-text" style="max-width: 600px;">Each stage compresses by roughly 100x. The implementing agent works with a plan, not a codebase. It stays well under the 40% threshold where reasoning degrades.</p>
    </section>

    <!-- ── Context Dump: Selective Extraction ── -->
    <section class="content-section">
      <div class="section-label">Selective Extraction</div>
      <h2>Context Dumps: Curated, Not Complete</h2>
      <p>When you need to seed a fresh agent with project context, don't dump everything. Extract only the paths and artefacts relevant to the task at hand — a targeted context dump.</p>

      <div style="margin: 2rem 0;">
        <div class="code-block">
          <span class="label">Targeted context dump</span>
<pre>
<span class="comment"># Instead of giving the agent the entire repo...</span>
<span class="keyword">/context-dump</span> <span class="string">\
  src/Services/ShoppingCartService.cs  \
  src/Interfaces/ICartService.cs       \
  docs/adc/extract-cart-service/       \
  docs/01_strategy/                    \
  .ai/plans/current-plan.md</span>

<span class="comment"># The agent gets ~500 lines of curated context</span>
<span class="comment"># instead of 200k lines of raw codebase</span>
</pre>
        </div>
      </div>

      <div class="comparison">
        <div class="compare-col old">
          <h4>Raw Context Dump</h4>
          <ul>
            <li>Entire repo loaded into context</li>
            <li>Agent must sift through irrelevant files</li>
            <li>Hits context window limits quickly</li>
            <li>Falls into the Dumb Zone</li>
          </ul>
        </div>
        <div class="compare-col highlight">
          <h4>Curated Context Dump</h4>
          <ul>
            <li>Specific paths and artefacts selected</li>
            <li>Agent starts with focused, relevant context</li>
            <li>Stays well under context limits</li>
            <li>Maximum reasoning quality preserved</li>
          </ul>
        </div>
      </div>

      <p>This applies beyond initial seeding. Any time you're passing context to an agent — whether through files, tool outputs, or system prompts — ask: <em>is every token here earning its place?</em></p>
    </section>

    <!-- ── Token Budget Mental Model ── -->
    <section class="content-section">
      <div class="section-label">Mental Model</div>
      <h2>Think in Token Budgets</h2>
      <p>Every token in the context window has an opportunity cost. Tokens spent on irrelevant context are tokens the agent can't use for reasoning about the actual problem.</p>

      <!-- Stacked bar visual -->
      <div style="margin: 2.5rem 0;">
        <!-- Bad example -->
        <div style="margin-bottom: 1.5rem;">
          <div style="font-size: 0.72rem; font-weight: 600; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.5rem;">Naive approach: dump everything</div>
          <div style="display: flex; height: 44px; border-radius: 8px; overflow: hidden; border: 1px solid var(--border);">
            <div style="width: 65%; background: rgba(255,107,138,0.15); border-right: 1px solid var(--border); display: flex; align-items: center; padding-left: 12px; font-size: 0.72rem; color: var(--accent-3); font-weight: 500;">Raw files (65%)</div>
            <div style="width: 20%; background: rgba(232,145,58,0.1); border-right: 1px solid var(--border); display: flex; align-items: center; padding-left: 8px; font-size: 0.72rem; color: var(--orange); font-weight: 500;">Prompts (20%)</div>
            <div style="width: 15%; background: rgba(91,141,239,0.08); display: flex; align-items: center; padding-left: 8px; font-size: 0.72rem; color: var(--blue); font-weight: 500;">Reasoning</div>
          </div>
        </div>
        <!-- Good example -->
        <div>
          <div style="font-size: 0.72rem; font-weight: 600; color: var(--accent-2); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.5rem;">Intent-engineered: curated context</div>
          <div style="display: flex; height: 44px; border-radius: 8px; overflow: hidden; border: 1px solid rgba(0,212,170,0.2);">
            <div style="width: 15%; background: rgba(0,212,170,0.1); border-right: 1px solid var(--border); display: flex; align-items: center; padding-left: 10px; font-size: 0.72rem; color: var(--accent-2); font-weight: 500;">Artefact</div>
            <div style="width: 20%; background: rgba(124,92,252,0.08); border-right: 1px solid var(--border); display: flex; align-items: center; padding-left: 8px; font-size: 0.72rem; color: var(--accent-light); font-weight: 500;">Prompts (20%)</div>
            <div style="width: 65%; background: rgba(0,212,170,0.05); display: flex; align-items: center; padding-left: 12px; font-size: 0.72rem; color: var(--accent-2); font-weight: 500;">Reasoning (65%) &larr; this is what you want</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Putting It All Together ── -->
    <section class="content-section">
      <div class="section-label">Summary</div>
      <h2>The Token Minimisation Toolkit</h2>

      <div class="card-grid">
        <div class="card">
          <div class="card-icon">&#9881;</div>
          <h4>LSP Over Grep</h4>
          <p>Structured queries return precise answers. <code>find-references</code> gives you exact callers; grep gives you every line containing a string. One is signal, the other is noise.</p>
        </div>
        <div class="card">
          <div class="card-icon green">&#128230;</div>
          <h4>Dense Handoff Artefacts</h4>
          <p>Compress exploration into structured documents. 200k lines &rarr; 2k line research.md &rarr; 350 line plan.md. Each step is ~100x compression.</p>
        </div>
        <div class="card">
          <div class="card-icon orange">&#9986;</div>
          <h4>Targeted Context Dumps</h4>
          <p>Select specific paths and artefacts for fresh agents. Every token should earn its place in the context window.</p>
        </div>
        <div class="card">
          <div class="card-icon pink">&#128260;</div>
          <h4>Fresh Context Windows</h4>
          <p>Start each RPI phase clean. Don't accumulate stale exploration tokens. Dense artefacts bridge the gap between phases.</p>
        </div>
      </div>

      <div class="callout">
        <p><strong>The principle:</strong> Legacy systems require curated context, not raw context dumps. Adding more files to context does not automatically solve the problem — it usually makes it worse.</p>
      </div>
    </section>
  </div>
</div>

<!-- ═══════════ FOOTER ═══════════ -->
<footer class="site-footer">
  <div class="container">
    AI-SDLC Enablement &middot; From Copilot to Agentic Workflows
  </div>
</footer>

<script>
  function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    event.currentTarget.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Interactive checklist
  function toggleCheck(el) {
    el.classList.toggle('checked');
    updateProgress();
  }

  function updateProgress() {
    const all = document.querySelectorAll('#roadmap .rm-check');
    const checked = document.querySelectorAll('#roadmap .rm-check.checked');
    const total = all.length;
    const done = checked.length;
    const countEl = document.getElementById('progressCount');
    const totalEl = document.getElementById('progressTotal');
    if (countEl) countEl.textContent = done;
    if (totalEl) totalEl.textContent = total;

    // Count per stage
    const stages = ['s1','s2','s3','s4','s5'];
    stages.forEach((s, i) => {
      const stageEl = document.querySelectorAll('.rm-stage.' + s + ' .rm-check');
      const stageChecked = document.querySelectorAll('.rm-stage.' + s + ' .rm-check.checked');
      const seg = document.querySelectorAll('.rm-seg.' + s)[0];
      if (seg && stageEl.length > 0) {
        const pct = stageChecked.length / stageEl.length;
        seg.style.opacity = 0.15 + (pct * 0.85);
      }
    });
  }

  // Init on load
  document.addEventListener('DOMContentLoaded', updateProgress);
</script>
</body>
</html>
