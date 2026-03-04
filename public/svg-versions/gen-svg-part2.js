const fs = require('fs');
const { MathCX, MathCY, buildBezierPath, ring1Nodes, ring2Nodes, ring3Nodes, allNodes, lateralConns, icons } = require('./svg_data');

let content = \`\`;

// SVG Start & Defs
content += \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 800" width="1400" height="800">
  <defs>
    <!-- Glassmorphic Filter -->
    <filter id="f-glass">
      <feGaussianBlur stdDeviation="0.8"/>
    </filter>
    <style>
      .node-hover { cursor: pointer; transition: transform 0.2s ease, filter 0.2s ease; }
      .node-hover:hover { transform-origin: var(--nx) var(--ny); filter: brightness(1.4) drop-shadow(0 0 8px #06b6d4); transform: scale(1.05); }
    </style>
    <!-- Original Filters -->
    <filter id="f-core" x="-120%" y="-120%" width="340%" height="340%"><feGaussianBlur stdDeviation="18" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <filter id="f-node-primary" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="9" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <filter id="f-node-secondary" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <filter id="f-signal" x="-300%" y="-300%" width="700%" height="700%"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <filter id="f-ambient" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="80"/></filter>
    <filter id="f-logo" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>

    <!-- Gradients -->
    <radialGradient id="g-bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#06101e"/><stop offset="100%" stop-color="#020609"/></radialGradient>
    <radialGradient id="g-core-fill" cx="40%" cy="35%" r="75%"><stop offset="0%" stop-color="#091828"/><stop offset="70%" stop-color="#050f1a"/><stop offset="100%" stop-color="#020810"/></radialGradient>
    <radialGradient id="g-node-p" cx="35%" cy="30%" r="75%"><stop offset="0%" stop-color="#0b1e30"/><stop offset="100%" stop-color="#040c18"/></radialGradient>
    <radialGradient id="g-node-s" cx="35%" cy="30%" r="75%"><stop offset="0%" stop-color="#081420"/><stop offset="100%" stop-color="#030810"/></radialGradient>
    <radialGradient id="g-sig" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ffffff" stop-opacity="1"/><stop offset="35%" stop-color="#06b6d4" stop-opacity="0.9"/><stop offset="100%" stop-color="#06b6d4" stop-opacity="0"/></radialGradient>
    <radialGradient id="g-sig-dim" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#88ddff" stop-opacity="1"/><stop offset="50%" stop-color="#4499cc" stop-opacity="0.7"/><stop offset="100%" stop-color="#4499cc" stop-opacity="0"/></radialGradient>

    <!-- Neural Gradients & Motion Paths -->
\`;

// Generate Edge gradients & motion paths
const edges = [];
// Core -> Ring 1
for (let n of ring1Nodes) {
  edges.push({ id: \`c-r1-\${n.id}\`, from: null, to: n });
}
// Core -> Ring 2
for (let n of ring2Nodes) {
  edges.push({ id: \`c-r2-\${n.id}\`, from: null, to: n });
}
// Core -> Ring 3 (Tertiary)
for (let n of ring3Nodes) {
  edges.push({ id: \`c-r3-\${n.id}\`, from: null, to: n });
}
// Ring 1 -> Ring 2 Lateral
lateralConns.forEach((c, idx) => {
  edges.push({ id: \`lat-\${idx}\`, from: c.from, to: c.to });
});

for (let e of edges) {
  const sx = e.from ? e.from.x : MathCX;
  const sy = e.from ? e.from.y : MathCY;
  const bezi = buildBezierPath(sx, sy, e.to.x, e.to.y, e.from ? 0.3 : 0.15); // Laterals arc more
  
  // Neural gradient
  content += \`    <linearGradient id="grad-\${e.id}" gradientUnits="userSpaceOnUse" x1="\${sx}" y1="\${sy}" x2="\${e.to.x}" y2="\${e.to.y}"><stop offset="0%" stop-color="#06b6d4"/><stop offset="100%" stop-color="#8b5cf6"/></linearGradient>\\n\`;
  // Motion path
  content += \`    <path id="mp-\${e.id}" d="\${bezi}"/>\\n\`;
}

content += \`
    <!-- Patterns -->
    <pattern id="p-grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0L0 0 0 48" fill="none" stroke="#0a1828" stroke-width="0.5" opacity="0.8"/></pattern>
    <pattern id="p-grid-major" width="192" height="192" patternUnits="userSpaceOnUse"><path d="M192 0L0 0 0 192" fill="none" stroke="#0e2035" stroke-width="1"/></pattern>
  </defs>
  
  <!-- BG -->
  <rect width="1400" height="800" fill="url(#g-bg)"/>
  <rect width="1400" height="800" fill="url(#p-grid)"/>
  <rect width="1400" height="800" fill="url(#p-grid-major)"/>

  <!-- Ambient -->
  <ellipse cx="700" cy="400" rx="380" ry="260" fill="#00BDFE" opacity="0.035" filter="url(#f-ambient)"/>
  <ellipse cx="700" cy="400" rx="180" ry="130" fill="#00BDFE" opacity="0.04" filter="url(#f-ambient)"/>

  <!-- EDGES -->
  <g fill="none">
\`;

for (let e of edges) {
  let sw = 0.9, op = 0.4;
  if(e.id.startsWith('c-r2')) { sw = 0.65; op = 0.25; }
  else if(e.id.startsWith('c-r3')) { sw = 0.5; op = 0.10; }
  else if(e.id.startsWith('lat')) { sw = 0.4; op = 0.2; }
  
  const pPath = \`mp-\${e.id}\`;
  // Read Bezier string from just written definitions by using the function
  const sx = e.from ? e.from.x : MathCX, sy = e.from ? e.from.y : MathCY;
  const bezi = buildBezierPath(sx, sy, e.to.x, e.to.y, e.from ? 0.3 : 0.15);
  
  content += \`    <path d="\${bezi}" stroke="url(#grad-\${e.id})" stroke-width="\${sw}" opacity="\${op}"/>\\n\`;
}
content += \`  </g>\\n\\n  <!-- SIGNALS -->\\n\`;

let packIdx = 0;
for (let e of edges) {
  const dur = (2.2 + Math.random() * 2.3).toFixed(2) + 's';
  const hold = Math.random() * 3.0;
  
  content += \`  <circle r="3" fill="url(#g-sig)" filter="url(#f-signal)">
    <animateMotion dur="\${dur}" repeatCount="indefinite" begin="\${hold}s" calcMode="spline" keySplines="0.4 0 0.2 1"><mpath href="#mp-\${e.id}"/></animateMotion>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="\${dur}" repeatCount="indefinite" begin="\${hold}s"/>
  </circle>\\n\`;
}

// Write the main graph parts...
fs.writeFileSync('/tmp/svg_builder.js.part2', content);
