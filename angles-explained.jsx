import { useState } from "react";

const TAU = 2 * Math.PI;

function polar(cx, cy, r, rad) {
  return [cx + r * Math.cos(rad), cy - r * Math.sin(rad)];
}

function wedgePath(cx, cy, r, rad) {
  if (rad < 0.001) return "";
  if (rad >= TAU - 0.001) {
    return `M ${cx+r} ${cy} A ${r} ${r} 0 1 0 ${cx-r} ${cy} A ${r} ${r} 0 1 0 ${cx+r} ${cy} Z`;
  }
  const [ex, ey] = polar(cx, cy, r, rad);
  const large = rad > Math.PI ? 1 : 0;
  return `M ${cx} ${cy} L ${cx+r} ${cy} A ${r} ${r} 0 ${large} 0 ${ex} ${ey} Z`;
}

function fmt(n, d) { return Number(n.toFixed(d)).toString(); }

function radLabel(rad) {
  const pi = Math.PI;
  const table = [
    [0,"0"],[pi/6,"π/6"],[pi/4,"π/4"],[pi/3,"π/3"],[pi/2,"π/2"],
    [2*pi/3,"2π/3"],[3*pi/4,"3π/4"],[5*pi/6,"5π/6"],[pi,"π"],
    [7*pi/6,"7π/6"],[5*pi/4,"5π/4"],[4*pi/3,"4π/3"],[3*pi/2,"3π/2"],
    [5*pi/3,"5π/3"],[7*pi/4,"7π/4"],[11*pi/6,"11π/6"],[2*pi,"2π"],
  ];
  for (const [v, l] of table) if (Math.abs(rad - v) < 0.02) return l;
  return fmt(rad, 3) + " rad";
}

const PRESETS = [0,30,45,60,90,120,180,270,360];

export default function App() {
  const [deg, setDeg] = useState(90);
  const [tab, setTab] = useState("explore");

  const cx = 180, cy = 180, R = 130;
  const rad = (deg * Math.PI) / 180;
  const [ex, ey] = polar(cx, cy, R, rad);
  const turns = deg / 360;
  const gradians = deg * (400 / 360);

  const handleSvgClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const sx = 360 / rect.width;
    const sy = 360 / rect.height;
    const x = (e.clientX - rect.left) * sx;
    const y = (e.clientY - rect.top) * sy;
    let a = Math.atan2(-(y - cy), x - cx);
    if (a < 0) a += TAU;
    let d = Math.round((a * 180) / Math.PI);
    const snaps = [0,30,45,60,90,120,135,150,180,210,225,240,270,300,315,330,360];
    for (const s of snaps) { if (Math.abs(d - s) < 4) { d = s; break; } }
    setDeg(d);
  };

  const card = (color, label, value, sub) => (
    <div style={{ marginBottom: 14, padding: "10px 14px", borderRadius: 8, background: "#f8f9fc", borderLeft: `4px solid ${color}` }}>
      <div style={{ fontSize: 11, fontWeight: 700, color, textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 700, color: "#1a1a2e", margin: "2px 0" }}>{value}</div>
      <div style={{ fontSize: 11, color: "#888" }}>{sub}</div>
    </div>
  );

  const bar = (color, label, val, max, unit, desc) => (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color }}>{label}</span>
        <span style={{ fontSize: 14, fontWeight: 700 }}>{fmt(val, 2)}{unit}</span>
      </div>
      <div style={{ height: 8, background: "#eee", borderRadius: 4, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${Math.min(100, (val / max) * 100)}%`, background: color, borderRadius: 4 }} />
      </div>
      <div style={{ fontSize: 11, color: "#888", marginTop: 3 }}>{desc}</div>
    </div>
  );

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 700, margin: "0 auto", padding: 20, color: "#1a1a2e" }}>
      <h1 style={{ fontSize: 26, fontWeight: 700, marginBottom: 2 }}>Angles: A Visual Guide</h1>
      <p style={{ color: "#666", marginBottom: 20, fontSize: 14 }}>Click anywhere on the circle or use the slider below.</p>

      <div style={{ display: "flex", gap: 4, marginBottom: 20, borderBottom: "2px solid #e0e0e0" }}>
        {[["explore","Explore"],["compare","Compare Systems"],["why","Why Radians?"]].map(([k,l]) => (
          <button key={k} onClick={() => setTab(k)} style={{
            padding: "8px 16px", border: "none", cursor: "pointer", fontSize: 13,
            background: tab === k ? "#fff" : "transparent", fontWeight: tab === k ? 600 : 400,
            color: tab === k ? "#6366f1" : "#888", borderBottom: tab === k ? "2px solid #6366f1" : "2px solid transparent", marginBottom: -2
          }}>{l}</button>
        ))}
      </div>

      <div style={{ display: "flex", gap: 28, flexWrap: "wrap", alignItems: "flex-start" }}>
        <div style={{ flexShrink: 0 }}>
          <svg width={360} height={360} onClick={handleSvgClick}
            style={{ cursor: "crosshair", background: "#fafbff", borderRadius: 14, border: "1px solid #e8e8f0", display: "block" }}>
            {/* axes */}
            <line x1={cx-R-15} y1={cy} x2={cx+R+15} y2={cy} stroke="#ddd" />
            <line x1={cx} y1={cy-R-15} x2={cx} y2={cy+R+15} stroke="#ddd" />
            {/* tick marks at 90° intervals */}
            {[0,90,180,270].map(d => {
              const a = d * Math.PI / 180;
              const [ix,iy] = polar(cx,cy,R-5,a);
              const [ox,oy] = polar(cx,cy,R+5,a);
              const [lx,ly] = polar(cx,cy,R+18,a);
              return <g key={d}>
                <line x1={ix} y1={iy} x2={ox} y2={oy} stroke="#999" strokeWidth={1.5}/>
                <text x={lx} y={ly} textAnchor="middle" dominantBaseline="central" fontSize={11} fill="#999">{d}°</text>
              </g>;
            })}
            {/* circle */}
            <circle cx={cx} cy={cy} r={R} fill="none" stroke="#c7c7d4" strokeWidth={1.5}/>
            {/* filled wedge */}
            <path d={wedgePath(cx,cy,R,rad)} fill="rgba(99,102,241,0.13)"/>
            {/* arc highlight for "why" tab */}
            {tab === "why" && deg > 0 && (() => {
              const [ax,ay] = polar(cx,cy,R,0);
              const [bx,by] = polar(cx,cy,R,rad);
              const lg = deg > 180 ? 1 : 0;
              const full = deg >= 360;
              if (full) return <circle cx={cx} cy={cy} r={R} fill="none" stroke="#f59e0b" strokeWidth={5} opacity={0.5}/>;
              return <path d={`M ${ax} ${ay} A ${R} ${R} 0 ${lg} 0 ${bx} ${by}`} fill="none" stroke="#f59e0b" strokeWidth={5} opacity={0.5}/>;
            })()}
            {/* radius line */}
            <line x1={cx} y1={cy} x2={ex} y2={ey} stroke="#6366f1" strokeWidth={2.5} strokeLinecap="round"/>
            {/* base line */}
            <line x1={cx} y1={cy} x2={cx+R} y2={cy} stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="6 4"/>
            {/* angle label */}
            {deg > 8 && deg < 352 && (() => {
              const mid = rad / 2;
              const [lx,ly] = polar(cx,cy,48,mid);
              return <text x={lx} y={ly} textAnchor="middle" dominantBaseline="central" fontSize={13} fontWeight={600} fill="#6366f1">{deg}°</text>;
            })()}
            {/* dot */}
            <circle cx={ex} cy={ey} r={8} fill="#6366f1" stroke="#fff" strokeWidth={2.5}/>
            <circle cx={cx} cy={cy} r={3} fill="#333"/>
          </svg>

          <input type="range" min={0} max={360} value={deg} onChange={e => setDeg(Number(e.target.value))}
            style={{ width: 360, marginTop: 10, accentColor: "#6366f1", display: "block" }}/>

          <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginTop: 8 }}>
            {PRESETS.map(p => (
              <button key={p} onClick={() => setDeg(p)} style={{
                padding: "4px 10px", borderRadius: 5, cursor: "pointer", fontSize: 12,
                border: deg === p ? "2px solid #6366f1" : "1px solid #ddd",
                background: deg === p ? "#eef2ff" : "#fff", fontWeight: deg === p ? 600 : 400,
                color: deg === p ? "#6366f1" : "#555"
              }}>{p}°</button>
            ))}
          </div>
        </div>

        <div style={{ flex: 1, minWidth: 220 }}>
          {tab === "explore" && (
            <div>
              <h2 style={{ fontSize: 17, fontWeight: 600, marginBottom: 14 }}>Current Angle</h2>
              {card("#6366f1", "Degrees", deg + "°", "Full circle = 360°")}
              {card("#059669", "Radians", radLabel(rad), "Full circle = 2π ≈ 6.283")}
              {card("#d97706", "Turns", fmt(turns, 3), "Full circle = 1 turn")}
              {card("#dc2626", "Gradians", fmt(gradians, 1) + " gon", "Full circle = 400 gon")}
            </div>
          )}

          {tab === "compare" && (
            <div>
              <h2 style={{ fontSize: 17, fontWeight: 600, marginBottom: 10 }}>Four Ways to Measure</h2>
              <p style={{ fontSize: 13, color: "#555", lineHeight: 1.6, marginBottom: 14 }}>
                They all measure the <em>same thing</em> — how far you have rotated. They just divide the circle differently.
              </p>
              {bar("#6366f1", "Degrees", deg, 360, "°", "Babylon chose 360 — close to days in a year, very divisible")}
              {bar("#059669", "Radians", rad, TAU, " rad", "How many radius-lengths fit along the arc. Nature's own unit")}
              {bar("#d97706", "Turns", turns, 1, " turns", "The simplest idea: what fraction of a full rotation?")}
              {bar("#dc2626", "Gradians", gradians, 400, " gon", "French metric system — 100 gon per right angle")}
            </div>
          )}

          {tab === "why" && (
            <div>
              <h2 style={{ fontSize: 17, fontWeight: 600, marginBottom: 10 }}>Why Radians Matter</h2>
              <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, marginBottom: 14 }}>
                One radian is the angle where the <strong>arc length equals the radius</strong>. No arbitrary choice — it comes from the circle itself.
              </p>

              <div style={{ background: "#fffbeb", padding: 14, borderRadius: 8, marginBottom: 14, border: "1px solid #fde68a" }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: "#92400e", marginBottom: 6 }}>Arc Length = Radius × Radians</div>
                <div style={{ fontSize: 18, fontWeight: 700, fontFamily: "Georgia, serif" }}>
                  <span style={{ color: "#f59e0b" }}>{fmt(rad * R, 1)}px</span>
                  <span style={{ color: "#aaa", fontWeight: 400 }}> = </span>
                  <span style={{ color: "#555" }}>{R}px</span>
                  <span style={{ color: "#aaa", fontWeight: 400 }}> × </span>
                  <span style={{ color: "#059669" }}>{fmt(rad, 3)}</span>
                </div>
                <div style={{ fontSize: 11, color: "#888", marginTop: 5 }}>The yellow arc on the circle shows this length.</div>
              </div>

              <div style={{ background: "#f0fdf4", padding: 14, borderRadius: 8, marginBottom: 14, border: "1px solid #bbf7d0" }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: "#166534", marginBottom: 8 }}>Unwrap the circle into a line:</div>
                <div style={{ position: "relative", height: 32, background: "#e5e7eb", borderRadius: 4, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${(deg/360)*100}%`, background: "rgba(99,102,241,0.25)", borderRadius: 4 }}/>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#888", marginTop: 3 }}>
                  <span>0</span>
                  <span style={{ color: "#059669", fontWeight: 600 }}>← 1 radius = 1 radian →</span>
                  <span>2π (full circumference)</span>
                </div>
                <div style={{ fontSize: 12, color: "#555", marginTop: 6 }}>
                  Circumference = <strong>2π × radius</strong>. That is why a full circle = 2π radians.
                </div>
              </div>

              <div style={{ background: "#f8f9fc", padding: 14, borderRadius: 8, border: "1px solid #e2e8f0" }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: "#334155", marginBottom: 6 }}>Why this matters:</div>
                <div style={{ fontSize: 12, color: "#555", lineHeight: 1.7 }}>
                  Radians make formulas clean. The derivative of sin(x) is cos(x) — but only in radians. In degrees you would need an ugly π/180 factor everywhere.
                </div>
              </div>

              <div style={{ marginTop: 14 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#888", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>Try common values:</div>
                <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                  {[["π/6",30],["π/4",45],["π/3",60],["π/2",90],["π",180],["2π",360]].map(([l,d]) => (
                    <button key={l} onClick={() => setDeg(d)} style={{
                      padding: "5px 12px", borderRadius: 5, cursor: "pointer", fontSize: 13,
                      fontFamily: "Georgia, serif",
                      border: deg === d ? "2px solid #059669" : "1px solid #ddd",
                      background: deg === d ? "#ecfdf5" : "#fff", fontWeight: deg === d ? 600 : 400,
                      color: deg === d ? "#059669" : "#555"
                    }}>{l}</button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}