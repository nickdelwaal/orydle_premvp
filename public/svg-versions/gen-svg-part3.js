const fs = require('fs');
const { MathCX, MathCY, ring1Nodes, ring2Nodes, ring3Nodes, allNodes, icons } = require('./svg_data');
let content = fs.readFileSync('/tmp/svg_builder.js.part2', 'utf8');

// The Core Node and Logo
content += \`
  <!-- CORE NODE -->
  <g class="node-hover" style="--nx:700px; --ny:400px">
    <!-- Outer shimmer -->
    <circle cx="700" cy="400" r="82" fill="none" stroke="#00BDFE" stroke-width="0.5" stroke-dasharray="8 16" opacity="0.2">
      <animateTransform attributeName="transform" type="rotate" from="0 700 400" to="360 700 400" dur="40s" repeatCount="indefinite"/>
    </circle>
    <circle cx="700" cy="400" r="74" fill="none" stroke="#00BDFE" stroke-width="0.3" stroke-dasharray="3 20" opacity="0.12">
      <animateTransform attributeName="transform" type="rotate" from="360 700 400" to="0 700 400" dur="28s" repeatCount="indefinite"/>
    </circle>
    
    <!-- Glassmorphic frosted halo -->
    <circle cx="700" cy="400" r="68" fill="none" stroke="#00BDFE" stroke-width="0.5" opacity="0.15" />
    <!-- Filtered BG -->
    <circle cx="700" cy="400" r="64" fill="url(#g-core-fill)" fill-opacity="0.25" filter="url(#f-glass)"/>
    <!-- Original stroke and filter combo -->
    <circle cx="700" cy="400" r="64" fill="none" stroke="#00BDFE" stroke-width="1.6" filter="url(#f-core)"/>
    <!-- Inner ring -->
    <circle cx="700" cy="400" r="56" fill="none" stroke="#00BDFE" stroke-width="0.4" opacity="0.2"/>
    <text x="700" y="484" text-anchor="middle" font-family="'SF Mono', 'Fira Code', 'Consolas', monospace" font-size="9" fill="#00BDFE" opacity="0.55" letter-spacing="5" font-weight="400">SYSTEM CORE</text>
  </g>
\`;

function createNode(n, r, border, strokeColor, type) {
  const isTopLabel = (n.id === 'llm' || n.id === 'security');
  const lbY = isTopLabel ? -40 : r + 16;
  const subY = isTopLabel ? -30 : r + 27;

  let nodeIcon = icons[n.id] || '';
  
  // Base group for hover
  let out = \`  <g class="node-hover" style="--nx:\${n.x}px; --ny:\${n.y}px" transform="translate(\${n.x},\${n.y})">\\n\`;
  
  // Frosted halo (+4 radius)
  out += \`    <circle r="\${r + 4}" fill="none" stroke="\${strokeColor}" stroke-width="0.5" opacity="0.15"/>\\n\`;
  
  // Node background with glass filter
  let bgGrad = 'url(#g-node-s)';
  if (type === 'ring1') bgGrad = 'url(#g-node-p)';
  out += \`    <circle r="\${r}" fill="\${bgGrad}" fill-opacity="0.25" filter="url(#f-glass)"/>\\n\`;
  
  // Note: the original SVG wrapped ring1/ring2 circles with f-node-primary/secondary filter, so we replicate that but just for stroke to not double-filter the bg
  const nodeFilter = type === 'ring1' ? 'url(#f-node-primary)' : 'url(#f-node-secondary)';
  out += \`    <circle r="\${r}" fill="none" stroke="\${strokeColor}" stroke-width="\${border}" filter="\${nodeFilter}"/>\\n\`;
  
  if (type === 'ring1') {
    // Inner styling ring for primary nodes in original SVG
    out += \`    <circle r="\${r - 6}" fill="none" stroke="\${strokeColor}" stroke-width="0.3" opacity="0.18"/>\\n\`;
    
    // LIVE STATUS DOTS (Upgrade 6a)
    const dotD = r * 0.7; // 45 degree top-right placement
    const dur = (1.2 + Math.random() * 0.8).toFixed(2);
    const hold = Math.random() * 2;
    out += \`    <circle cx="\${dotD}" cy="-\${dotD}" r="3" fill="#06b6d4">
      <animate attributeName="opacity" values="1;0.2;1" dur="\${dur}s" begin="\${hold}s" repeatCount="indefinite"/>
    </circle>\\n\`;
  }
  
  out += \`    \${nodeIcon}\\n\`;
  
  // Text labels
  out += \`    <text y="\${lbY}" text-anchor="middle" font-family="'SF Mono','Fira Code','Consolas',monospace" font-size="\${type==='ring1'?9:8.5}" fill="\${strokeColor}" opacity="\${type==='ring1'?0.85:0.78}" letter-spacing="2.5">\${n.label}</text>\\n\`;
  out += \`    <text y="\${subY}" text-anchor="middle" font-family="'SF Mono','Fira Code','Consolas',monospace" font-size="\${type==='ring1'?7:6.5}" fill="\${strokeColor}" opacity="\${type==='ring1'?0.38:0.35}" letter-spacing="1">\${n.sub}</text>\\n\`;
  
  out += \`  </g>\\n\`;
  return out;
}

// Generate Nodes
content += \`  <!-- RING 1 NODES -->\\n\`;
for (let n of ring1Nodes) content += createNode(n, 32, 1.3, '#00BDFE', 'ring1');

content += \`  <!-- RING 2 NODES -->\\n\`;
for(let n of ring2Nodes) content += createNode(n, 26, 1.0, '#3a9ec4', 'ring2');

content += \`  <!-- TERTIARY NODES -->\\n\`;
for(let n of ring3Nodes) content += createNode(n, 20, 0.8, '#8b5cf6', 'ring3');

const finalSuffix = \`
  <!-- STATUS CHIP -->
  <g transform="translate(1140,28)">
    <rect width="234" height="30" rx="4" fill="#030d1a" stroke="#00BDFE" stroke-width="0.8"/>
    <rect width="234" height="30" rx="4" fill="#00BDFE" opacity="0.03"/>
    <circle cx="16" cy="15" r="3.5" fill="#00BDFE">
      <animate attributeName="opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite"/>
    </circle>
    <text x="28" y="19.5" font-family="'SF Mono','Fira Code','Consolas',monospace" font-size="8.5" fill="#00BDFE" opacity="0.8" letter-spacing="1.5">LIVE · 43 SERVICES MAPPED</text>
  </g>

  <!-- CORNER MARKS -->
  <g stroke="#00BDFE" stroke-width="1" fill="none" opacity="0.1">
    <path d="M24,24 L24,42 M24,24 L42,24"/>
    <path d="M1376,24 L1376,42 M1376,24 L1358,24"/>
    <path d="M24,776 L24,758 M24,776 L42,776"/>
    <path d="M1376,776 L1376,758 M1376,776 L1358,776"/>
  </g>

  <!-- Bottom watermark -->
  <text x="700" y="772" text-anchor="middle" font-family="'SF Mono','Fira Code','Consolas',monospace" font-size="7.5" fill="#00BDFE" opacity="0.15" letter-spacing="5">ORYDLE · KRUM ARCHITECTURE INTELLIGENCE</text>
</svg>
\`;

content += finalSuffix;
fs.writeFileSync('/tmp/gen-runner.js', \`
const fs = require('fs');
fs.writeFileSync('/Users/nikunjkhandelwal/Movies/Orydle-website-v1-master/public/orydle-node-graph-v4.svg', fs.readFileSync('/tmp/final.svg', 'utf8'));
\`);
fs.writeFileSync('/tmp/final.svg', content);
