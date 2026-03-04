const fs = require('fs');

// Read original to extract logo paths
const orig = fs.readFileSync('/Users/nikunjkhandelwal/Movies/Orydle-website-v1-master/public/orydle-node-graph-v4.svg', 'utf8');

// Extract the two logo path elements (they start with <path d="M0,0 L6,0)
const logoMatch = orig.match(/<g transform="translate\(624\.51,324\.98\) scale\(0\.155\)"[\s\S]*?<\/g>/);
const logoPaths = logoMatch ? logoMatch[0] : '<g transform="translate(624.51,324.98) scale(0.155)" filter="url(#f-logo)"><circle cx="0" cy="0" r="20" fill="#00BDFE" opacity="0.3"/></g>';

// Helper to build bezier path
function bez(sx, sy, tx, ty, c1x, c1y, c2x, c2y) {
    return `M${sx},${sy} C${c1x},${c1y} ${c2x},${c2y} ${tx},${ty}`;
}

// All edge definitions
const edges = [
    // Core -> Ring1
    { id: 'e-github', path: bez(700, 400, 700, 215, 760, 380, 760, 235) },
    { id: 'e-k8s', path: bez(700, 400, 860, 308, 790, 430, 880, 340) },
    { id: 'e-micro', path: bez(700, 400, 860, 492, 880, 440, 890, 500) },
    { id: 'e-db', path: bez(700, 400, 700, 585, 760, 430, 760, 558) },
    { id: 'e-extapi', path: bez(700, 400, 540, 492, 520, 440, 510, 498) },
    { id: 'e-cicd', path: bez(700, 400, 540, 308, 610, 430, 520, 340) },
    // Core -> Ring2
    { id: 'e-slack', path: bez(700, 400, 815, 123, 780, 320, 830, 200) },
    { id: 'e-aws', path: bez(700, 400, 977, 285, 840, 340, 950, 306) },
    { id: 'e-monitor', path: bez(700, 400, 977, 515, 840, 460, 950, 508) },
    { id: 'e-llm', path: bez(700, 400, 815, 677, 780, 490, 830, 618) },
    { id: 'e-security', path: bez(700, 400, 585, 677, 620, 490, 570, 618) },
    { id: 'e-terraform', path: bez(700, 400, 423, 515, 560, 460, 450, 508) },
    { id: 'e-ide', path: bez(700, 400, 423, 285, 560, 340, 450, 306) },
    { id: 'e-docs', path: bez(700, 400, 585, 123, 620, 320, 570, 200) },
    // Core -> Ring3 (Tertiary)
    { id: 'e-vectordb', path: bez(700, 400, 997, 103, 820, 310, 930, 178) },
    { id: 'e-msgbus', path: bez(700, 400, 997, 697, 820, 490, 930, 622) },
    { id: 'e-observ', path: bez(700, 400, 403, 697, 580, 490, 470, 622) },
    { id: 'e-artifact', path: bez(700, 400, 403, 103, 580, 310, 470, 178) },
    // Lateral Ring1->Ring2
    { id: 'lat-0', path: bez(700, 215, 815, 123, 760, 160, 800, 138) },
    { id: 'lat-1', path: bez(700, 215, 585, 123, 640, 160, 600, 138) },
    { id: 'lat-2', path: bez(860, 308, 977, 285, 910, 296, 950, 287) },
    { id: 'lat-3', path: bez(860, 492, 977, 515, 910, 506, 950, 512) },
    { id: 'lat-4', path: bez(700, 585, 815, 677, 760, 640, 800, 662) },
    { id: 'lat-5', path: bez(700, 585, 585, 677, 640, 640, 600, 662) },
    { id: 'lat-6', path: bez(540, 492, 423, 515, 490, 506, 450, 512) },
    { id: 'lat-7', path: bez(540, 308, 423, 285, 490, 296, 450, 287) },
];

// Gradient endpoints (from→to for each edge)
const gradEndpoints = {
    'e-github': [700, 400, 700, 215], 'e-k8s': [700, 400, 860, 308],
    'e-micro': [700, 400, 860, 492], 'e-db': [700, 400, 700, 585],
    'e-extapi': [700, 400, 540, 492], 'e-cicd': [700, 400, 540, 308],
    'e-slack': [700, 400, 815, 123], 'e-aws': [700, 400, 977, 285],
    'e-monitor': [700, 400, 977, 515], 'e-llm': [700, 400, 815, 677],
    'e-security': [700, 400, 585, 677], 'e-terraform': [700, 400, 423, 515],
    'e-ide': [700, 400, 423, 285], 'e-docs': [700, 400, 585, 123],
    'e-vectordb': [700, 400, 997, 103], 'e-msgbus': [700, 400, 997, 697],
    'e-observ': [700, 400, 403, 697], 'e-artifact': [700, 400, 403, 103],
    'lat-0': [700, 215, 815, 123], 'lat-1': [700, 215, 585, 123],
    'lat-2': [860, 308, 977, 285], 'lat-3': [860, 492, 977, 515],
    'lat-4': [700, 585, 815, 677], 'lat-5': [700, 585, 585, 677],
    'lat-6': [540, 492, 423, 515], 'lat-7': [540, 308, 423, 285],
};

// Packet stagger parameters
const packetParams = [
    { dur: '2.6s', begin: '0s' }, { dur: '2.9s', begin: '0.4s' }, { dur: '3.1s', begin: '0.8s' },
    { dur: '2.7s', begin: '1.6s' }, { dur: '3.0s', begin: '0.2s' }, { dur: '2.4s', begin: '1.0s' },
    { dur: '3.5s', begin: '0.6s' }, { dur: '3.8s', begin: '1.9s' }, { dur: '4.0s', begin: '2.5s' },
    { dur: '3.6s', begin: '0.3s' }, { dur: '4.2s', begin: '3.1s' }, { dur: '3.9s', begin: '1.4s' },
    { dur: '3.4s', begin: '2.2s' }, { dur: '3.7s', begin: '0.9s' }, { dur: '5.0s', begin: '1.2s' },
    { dur: '5.0s', begin: '2.8s' }, { dur: '5.0s', begin: '0.5s' }, { dur: '5.0s', begin: '3.5s' },
    { dur: '2.2s', begin: '0.7s' }, { dur: '2.5s', begin: '1.3s' }, { dur: '2.8s', begin: '2.1s' },
    { dur: '3.2s', begin: '0.1s' }, { dur: '2.6s', begin: '1.8s' }, { dur: '3.0s', begin: '2.4s' },
    { dur: '2.3s', begin: '1.1s' }, { dur: '3.1s', begin: '0.9s' },
];

// Status dot pulse params per ring1 node
const dotPulse = [
    { dur: '1.4s', begin: '0s' }, { dur: '1.7s', begin: '0.5s' }, { dur: '1.9s', begin: '1.2s' },
    { dur: '1.2s', begin: '0.8s' }, { dur: '2.0s', begin: '0.3s' }, { dur: '1.5s', begin: '1.6s' },
];

// Node icons
const icons = {
    github: `<circle cx="-7" cy="-6" r="4" fill="none" stroke="#00BDFE" stroke-width="1.2" opacity="0.95"/>
    <circle cx="7" cy="6" r="4" fill="none" stroke="#00BDFE" stroke-width="1.2" opacity="0.95"/>
    <circle cx="7" cy="-6" r="4" fill="none" stroke="#00BDFE" stroke-width="1.2" opacity="0.95"/>
    <line x1="-7" y1="-2" x2="-7" y2="10" stroke="#00BDFE" stroke-width="1.1" opacity="0.7"/>
    <path d="M-7,10 Q-7,14 -3,14 Q7,14 7,10" fill="none" stroke="#00BDFE" stroke-width="1.1" opacity="0.7"/>
    <line x1="7" y1="-2" x2="7" y2="2" stroke="#00BDFE" stroke-width="1.1" opacity="0.7"/>`,
    k8s: `<circle cx="0" cy="0" r="10" fill="none" stroke="#00BDFE" stroke-width="1.1" opacity="0.85"/>
    <circle cx="0" cy="0" r="3" fill="#00BDFE" opacity="0.65"/>
    <line x1="0" y1="-3" x2="0" y2="-10" stroke="#00BDFE" stroke-width="1.1" opacity="0.65"/>
    <line x1="0" y1="3" x2="0" y2="10" stroke="#00BDFE" stroke-width="1.1" opacity="0.65"/>
    <line x1="2.6" y1="-1.5" x2="8.7" y2="-5" stroke="#00BDFE" stroke-width="1.1" opacity="0.65"/>
    <line x1="-2.6" y1="1.5" x2="-8.7" y2="5" stroke="#00BDFE" stroke-width="1.1" opacity="0.65"/>
    <line x1="2.6" y1="1.5" x2="8.7" y2="5" stroke="#00BDFE" stroke-width="1.1" opacity="0.65"/>
    <line x1="-2.6" y1="-1.5" x2="-8.7" y2="-5" stroke="#00BDFE" stroke-width="1.1" opacity="0.65"/>`,
    micro: `<rect x="-11" y="-11" width="9" height="9" rx="1.5" fill="none" stroke="#00BDFE" stroke-width="1.1" opacity="0.9"/>
    <rect x="2" y="-11" width="9" height="9" rx="1.5" fill="none" stroke="#00BDFE" stroke-width="1.1" opacity="0.9"/>
    <rect x="-11" y="2" width="9" height="9" rx="1.5" fill="none" stroke="#00BDFE" stroke-width="1.1" opacity="0.9"/>
    <rect x="2" y="2" width="9" height="9" rx="1.5" fill="none" stroke="#00BDFE" stroke-width="1.1" opacity="0.9"/>`,
    db: `<ellipse cx="0" cy="-8" rx="11" ry="3.5" fill="none" stroke="#00BDFE" stroke-width="1.2" opacity="0.9"/>
    <line x1="-11" y1="-8" x2="-11" y2="5" stroke="#00BDFE" stroke-width="1.2" opacity="0.9"/>
    <line x1="11" y1="-8" x2="11" y2="5" stroke="#00BDFE" stroke-width="1.2" opacity="0.9"/>
    <ellipse cx="0" cy="5" rx="11" ry="3.5" fill="none" stroke="#00BDFE" stroke-width="1.2" opacity="0.9"/>
    <ellipse cx="0" cy="-2" rx="11" ry="3" fill="none" stroke="#00BDFE" stroke-width="0.5" opacity="0.35"/>`,
    extapi: `<text x="0" y="5" text-anchor="middle" font-family="'SF Mono','Fira Code','Consolas',monospace" font-size="19" fill="#00BDFE" opacity="0.85">{}</text>`,
    cicd: `<rect x="-14" y="-5" width="10" height="10" rx="1.5" fill="none" stroke="#00BDFE" stroke-width="1.2" opacity="0.9"/>
    <rect x="4" y="-5" width="10" height="10" rx="1.5" fill="none" stroke="#00BDFE" stroke-width="1.2" opacity="0.9"/>
    <line x1="-4" y1="0" x2="4" y2="0" stroke="#00BDFE" stroke-width="1.1" opacity="0.7"/>
    <polygon points="3.5,0 0,-2.5 0,2.5" fill="#00BDFE" opacity="0.75"/>`,
    slack: `<rect x="-10" y="-9" width="18" height="13" rx="2" fill="none" stroke="#3a9ec4" stroke-width="1.1" opacity="0.88"/>
    <line x1="-10" y1="4" x2="-14" y2="10" stroke="#3a9ec4" stroke-width="1" opacity="0.75"/>
    <line x1="-7" y1="-4" x2="4" y2="-4" stroke="#3a9ec4" stroke-width="0.9" opacity="0.55"/>
    <line x1="-7" y1="0" x2="2" y2="0" stroke="#3a9ec4" stroke-width="0.9" opacity="0.55"/>`,
    aws: `<path d="M-13,5 Q-15,-5 -7,-8 Q-5,-14 4,-12 Q11,-14 13,-8 Q17,-5 15,5 Z" fill="none" stroke="#3a9ec4" stroke-width="1.2" opacity="0.88"/>`,
    monitor: `<polyline points="-12,3 -8,3 -4,-8 0,9 4,-5 8,3 12,3" fill="none" stroke="#3a9ec4" stroke-width="1.4" opacity="0.88" stroke-linecap="round" stroke-linejoin="round"/>`,
    llm: `<circle cx="0" cy="-3" r="9" fill="none" stroke="#3a9ec4" stroke-width="1.1" opacity="0.88"/>
    <circle cx="-3" cy="-3" r="2" fill="#3a9ec4" opacity="0.75"/>
    <circle cx="3" cy="-3" r="2" fill="#3a9ec4" opacity="0.75"/>
    <line x1="-4" y1="6" x2="-4" y2="10" stroke="#3a9ec4" stroke-width="1" opacity="0.65"/>
    <line x1="4" y1="6" x2="4" y2="10" stroke="#3a9ec4" stroke-width="1" opacity="0.65"/>
    <line x1="-4" y1="10" x2="4" y2="10" stroke="#3a9ec4" stroke-width="1" opacity="0.65"/>`,
    security: `<path d="M0,-12 L11,-7 L11,2 Q11,11 0,15 Q-11,11 -11,2 L-11,-7 Z" fill="none" stroke="#3a9ec4" stroke-width="1.2" opacity="0.88"/>
    <polyline points="-4,2 -1,6 6,-3" fill="none" stroke="#3a9ec4" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.8"/>`,
    terraform: `<polygon points="0,-12 10,0 0,12 -10,0" fill="none" stroke="#3a9ec4" stroke-width="1.2" opacity="0.88"/>
    <polygon points="0,-6 5,0 0,6 -5,0" fill="#3a9ec4" opacity="0.2"/>`,
    ide: `<path d="M-4,-8 L-10,0 L-4,8" fill="none" stroke="#3a9ec4" stroke-width="1.4" stroke-linecap="round" opacity="0.9"/>
    <path d="M4,-8 L10,0 L4,8" fill="none" stroke="#3a9ec4" stroke-width="1.4" stroke-linecap="round" opacity="0.9"/>
    <line x1="-2" y1="5" x2="2" y2="-5" stroke="#3a9ec4" stroke-width="1" opacity="0.6"/>`,
    docs: `<rect x="-10" y="-12" width="15" height="18" rx="1.5" fill="none" stroke="#3a9ec4" stroke-width="1.1" opacity="0.88"/>
    <line x1="-7" y1="-7" x2="2" y2="-7" stroke="#3a9ec4" stroke-width="0.9" opacity="0.65"/>
    <line x1="-7" y1="-3" x2="2" y2="-3" stroke="#3a9ec4" stroke-width="0.9" opacity="0.65"/>
    <line x1="-7" y1="1" x2="-1" y2="1" stroke="#3a9ec4" stroke-width="0.9" opacity="0.65"/>`,
    vectordb: `<circle cx="-5" cy="-5" r="2" fill="#8b5cf6" opacity="0.6"/>
    <circle cx="5" cy="-5" r="2" fill="#8b5cf6" opacity="0.6"/>
    <circle cx="-5" cy="5" r="2" fill="#8b5cf6" opacity="0.6"/>
    <circle cx="5" cy="5" r="2" fill="#8b5cf6" opacity="0.6"/>
    <circle cx="0" cy="0" r="2" fill="#8b5cf6" opacity="0.4"/>`,
    msgbus: `<polyline points="-8,0 -4,-6 0,0 4,6 8,0" fill="none" stroke="#8b5cf6" stroke-width="1.2" opacity="0.85" stroke-linecap="round"/>`,
    observ: `<rect x="-7" y="-8" width="14" height="4" rx="1" fill="none" stroke="#8b5cf6" stroke-width="0.9" opacity="0.8"/>
    <rect x="-7" y="-2" width="14" height="4" rx="1" fill="none" stroke="#8b5cf6" stroke-width="0.9" opacity="0.6"/>
    <rect x="-7" y="4" width="14" height="4" rx="1" fill="none" stroke="#8b5cf6" stroke-width="0.9" opacity="0.4"/>`,
    artifact: `<rect x="-7" y="-7" width="14" height="14" rx="2" fill="none" stroke="#8b5cf6" stroke-width="1.1" opacity="0.85"/>
    <line x1="-3" y1="0" x2="3" y2="0" stroke="#8b5cf6" stroke-width="0.9" opacity="0.6"/>
    <line x1="0" y1="-3" x2="0" y2="3" stroke="#8b5cf6" stroke-width="0.9" opacity="0.6"/>`,
};

const ring1Nodes = [
    { id: 'github', x: 700, y: 215, label: 'GITHUB', sub: 'CODEBASE' },
    { id: 'k8s', x: 860, y: 308, label: 'KUBERNETES', sub: 'ORCHESTRATION' },
    { id: 'micro', x: 860, y: 492, label: 'SERVICES', sub: 'MICROSERVICES' },
    { id: 'db', x: 700, y: 585, label: 'DATABASE', sub: 'PG · REDIS · MONGO' },
    { id: 'extapi', x: 540, y: 492, label: 'EXT. APIS', sub: 'REST · GRAPHQL' },
    { id: 'cicd', x: 540, y: 308, label: 'CI / CD', sub: 'PIPELINES' },
];
const ring2Nodes = [
    { id: 'slack', x: 815, y: 123, label: 'SLACK', sub: 'NOTIFICATIONS', topLabel: false },
    { id: 'aws', x: 977, y: 285, label: 'AWS / GCP', sub: 'CLOUD INFRA', topLabel: false },
    { id: 'monitor', x: 977, y: 515, label: 'MONITOR', sub: 'DATADOG · OTEL', topLabel: false },
    { id: 'llm', x: 815, y: 677, label: 'LLM', sub: 'GPT · CLAUDE · GEMINI', topLabel: true },
    { id: 'security', x: 585, y: 677, label: 'SECURITY', sub: 'VAULT · IAM', topLabel: true },
    { id: 'terraform', x: 423, y: 515, label: 'TERRAFORM', sub: 'INFRA AS CODE', topLabel: false },
    { id: 'ide', x: 423, y: 285, label: 'IDE', sub: 'VSCODE · JETBRAINS', topLabel: false },
    { id: 'docs', x: 585, y: 123, label: 'DOCS', sub: 'KNOWLEDGE BASE', topLabel: false },
];
const ring3Nodes = [
    { id: 'vectordb', x: 997, y: 103, label: 'VECTOR DB', sub: 'EMBEDDINGS' },
    { id: 'msgbus', x: 997, y: 697, label: 'MESSAGE BUS', sub: 'KAFKA · NATS' },
    { id: 'observ', x: 403, y: 697, label: 'OBSERVABILITY', sub: 'TRACES · LOGS' },
    { id: 'artifact', x: 403, y: 103, label: 'ARTIFACT STORE', sub: 'S3 · REGISTRY' },
];

function makeNode(n, r, strokeColor, bgGrad, nodeFilter, isRing1, dotIdx) {
    const topLabel = n.topLabel;
    const labelY = topLabel ? -(r + 25) : (r + 16);
    const subY = topLabel ? -(r + 14) : (r + 27);
    let s = `  <g class="node-hover" style="--nx:${n.x}px; --ny:${n.y}px; cursor:pointer; transition: transform 0.2s ease, filter 0.2s ease;" transform="translate(${n.x},${n.y})">\n`;
    // Frosted halo
    s += `    <circle r="${r + 4}" fill="none" stroke="${strokeColor}" stroke-width="0.5" opacity="0.15"/>\n`;
    // Glassmorphic bg
    s += `    <circle r="${r}" fill="${bgGrad}" fill-opacity="0.25" filter="url(#f-glass)"/>\n`;
    // Glowing stroke circle
    s += `    <circle r="${r}" fill="none" stroke="${strokeColor}" stroke-width="${isRing1 ? 1.3 : 1.0}" filter="url(${nodeFilter})"/>\n`;
    if (isRing1) {
        // Inner ring
        s += `    <circle r="${r - 6}" fill="none" stroke="${strokeColor}" stroke-width="0.3" opacity="0.18"/>\n`;
        // Live status dot
        const dp = dotPulse[dotIdx];
        const dotOff = Math.round(r * 0.7);
        s += `    <circle cx="${dotOff}" cy="-${dotOff}" r="3" fill="#06b6d4"><animate attributeName="opacity" values="1;0.2;1" dur="${dp.dur}" begin="${dp.begin}" repeatCount="indefinite"/></circle>\n`;
    }
    // Icon
    s += `    ${icons[n.id] || ''}\n`;
    // Labels
    s += `    <text y="${labelY}" text-anchor="middle" font-family="'SF Mono','Fira Code','Consolas',monospace" font-size="${isRing1 ? 9 : 8.5}" fill="${strokeColor}" opacity="${isRing1 ? 0.85 : 0.78}" letter-spacing="2.5">${n.label}</text>\n`;
    s += `    <text y="${subY}" text-anchor="middle" font-family="'SF Mono','Fira Code','Consolas',monospace" font-size="${isRing1 ? 7 : 6.5}" fill="${strokeColor}" opacity="${isRing1 ? 0.38 : 0.35}" letter-spacing="1">${n.sub}</text>\n`;
    s += `  </g>\n`;
    return s;
}

// Build SVG
let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 800" width="1400" height="800">
  <defs>
    <!-- Existing Filters -->
    <filter id="f-core" x="-120%" y="-120%" width="340%" height="340%"><feGaussianBlur stdDeviation="18" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <filter id="f-node-primary" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="9" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <filter id="f-node-secondary" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <filter id="f-signal" x="-300%" y="-300%" width="700%" height="700%"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <filter id="f-ambient" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="80"/></filter>
    <filter id="f-logo" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <!-- Glassmorphic Filter (Upgrade 5) -->
    <filter id="f-glass"><feGaussianBlur stdDeviation="0.8"/></filter>
    <!-- Hover CSS (Upgrade 6b) -->
    <style>.node-hover:hover { filter: brightness(1.4) drop-shadow(0 0 8px #06b6d4); }</style>

    <!-- Existing Gradients -->
    <radialGradient id="g-bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#06101e"/><stop offset="100%" stop-color="#020609"/></radialGradient>
    <radialGradient id="g-core-fill" cx="40%" cy="35%" r="75%"><stop offset="0%" stop-color="#091828"/><stop offset="70%" stop-color="#050f1a"/><stop offset="100%" stop-color="#020810"/></radialGradient>
    <radialGradient id="g-node-p" cx="35%" cy="30%" r="75%"><stop offset="0%" stop-color="#0b1e30"/><stop offset="100%" stop-color="#040c18"/></radialGradient>
    <radialGradient id="g-node-s" cx="35%" cy="30%" r="75%"><stop offset="0%" stop-color="#081420"/><stop offset="100%" stop-color="#030810"/></radialGradient>
    <radialGradient id="g-sig" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ffffff" stop-opacity="1"/><stop offset="35%" stop-color="#06b6d4" stop-opacity="0.9"/><stop offset="100%" stop-color="#06b6d4" stop-opacity="0"/></radialGradient>
    <radialGradient id="g-sig-dim" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#88ddff" stop-opacity="1"/><stop offset="50%" stop-color="#4499cc" stop-opacity="0.7"/><stop offset="100%" stop-color="#4499cc" stop-opacity="0"/></radialGradient>

    <!-- Neural Gradients (Upgrade 2) -->\n`;

// Add linear gradients for each edge
for (const e of edges) {
    const ep = gradEndpoints[e.id];
    svg += `    <linearGradient id="grad-${e.id}" gradientUnits="userSpaceOnUse" x1="${ep[0]}" y1="${ep[1]}" x2="${ep[2]}" y2="${ep[3]}"><stop offset="0%" stop-color="#06b6d4"/><stop offset="100%" stop-color="#8b5cf6"/></linearGradient>\n`;
}

svg += `
    <!-- Motion Paths (Upgrade 3) -->\n`;
for (const e of edges) {
    svg += `    <path id="mp-${e.id}" d="${e.path}"/>\n`;
}

svg += `
    <!-- Grid Patterns -->
    <pattern id="p-grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0L0 0 0 48" fill="none" stroke="#0a1828" stroke-width="0.5" opacity="0.8"/></pattern>
    <pattern id="p-grid-major" width="192" height="192" patternUnits="userSpaceOnUse"><path d="M192 0L0 0 0 192" fill="none" stroke="#0e2035" stroke-width="1"/></pattern>
  </defs>

  <!-- Background -->
  <rect width="1400" height="800" fill="url(#g-bg)"/>
  <rect width="1400" height="800" fill="url(#p-grid)"/>
  <rect width="1400" height="800" fill="url(#p-grid-major)"/>

  <!-- Ambient Glow -->
  <ellipse cx="700" cy="400" rx="380" ry="260" fill="#00BDFE" opacity="0.035" filter="url(#f-ambient)"/>
  <ellipse cx="700" cy="400" rx="180" ry="130" fill="#00BDFE" opacity="0.04" filter="url(#f-ambient)"/>

  <!-- EDGES — Bezier Curves with Neural Gradients (Upgrades 1 & 2) -->
  <g fill="none">\n`;

for (const e of edges) {
    let sw = '0.9', op = '0.35';
    if (e.id.startsWith('e-slack') || e.id.startsWith('e-aws') || e.id.startsWith('e-monitor') ||
        e.id.startsWith('e-llm') || e.id.startsWith('e-security') || e.id.startsWith('e-terraform') ||
        e.id.startsWith('e-ide') || e.id.startsWith('e-docs')) { sw = '0.65'; op = '0.22'; }
    else if (e.id.startsWith('e-vector') || e.id.startsWith('e-msg') || e.id.startsWith('e-obs') || e.id.startsWith('e-art')) { sw = '0.5'; op = '0.10'; }
    else if (e.id.startsWith('lat')) { sw = '0.4'; op = '0.15'; }
    svg += `    <path d="${e.path}" stroke="url(#grad-${e.id})" stroke-width="${sw}" opacity="${op}"/>\n`;
}

svg += `  </g>

  <!-- KINETIC DATA PACKETS (Upgrade 3) -->\n`;

edges.forEach((e, i) => {
    const p = packetParams[i] || { dur: '3s', begin: '0s' };
    svg += `  <circle r="3" fill="url(#g-sig)" filter="url(#f-signal)">
    <animateMotion dur="${p.dur}" repeatCount="indefinite" begin="${p.begin}" calcMode="spline" keySplines="0.4 0 0.2 1"><mpath href="#mp-${e.id}"/></animateMotion>
    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="${p.dur}" repeatCount="indefinite" begin="${p.begin}"/>
  </circle>\n`;
});

svg += `
  <!-- CORE NODE (Upgrade 5 — Glassmorphic) -->
  <g class="node-hover" style="--nx:700px; --ny:400px; cursor:pointer; transition: transform 0.2s ease, filter 0.2s ease;">
    <circle cx="700" cy="400" r="82" fill="none" stroke="#00BDFE" stroke-width="0.5" stroke-dasharray="8 16" opacity="0.2"><animateTransform attributeName="transform" type="rotate" from="0 700 400" to="360 700 400" dur="40s" repeatCount="indefinite"/></circle>
    <circle cx="700" cy="400" r="74" fill="none" stroke="#00BDFE" stroke-width="0.3" stroke-dasharray="3 20" opacity="0.12"><animateTransform attributeName="transform" type="rotate" from="360 700 400" to="0 700 400" dur="28s" repeatCount="indefinite"/></circle>
    <!-- Frosted halo -->
    <circle cx="700" cy="400" r="68" fill="none" stroke="#00BDFE" stroke-width="0.5" opacity="0.15"/>
    <!-- Glassmorphic bg -->
    <circle cx="700" cy="400" r="64" fill="url(#g-core-fill)" fill-opacity="0.25" filter="url(#f-glass)"/>
    <!-- Glowing core -->
    <circle cx="700" cy="400" r="64" fill="none" stroke="#00BDFE" stroke-width="1.6" filter="url(#f-core)"/>
    <circle cx="700" cy="400" r="56" fill="none" stroke="#00BDFE" stroke-width="0.4" opacity="0.2"/>
    ${logoPaths}
    <text x="700" y="484" text-anchor="middle" font-family="'SF Mono', 'Fira Code', 'Consolas', monospace" font-size="9" fill="#00BDFE" opacity="0.55" letter-spacing="5" font-weight="400">SYSTEM CORE</text>
  </g>

  <!-- RING 1 NODES (Upgrades 5 & 6) -->\n`;

ring1Nodes.forEach((n, i) => {
    svg += makeNode(n, 32, '#00BDFE', 'url(#g-node-p)', 'url(#f-node-primary)', true, i);
});

svg += `  <!-- RING 2 NODES (Upgrade 5) -->\n`;
ring2Nodes.forEach(n => {
    svg += makeNode(n, 26, '#3a9ec4', 'url(#g-node-s)', 'url(#f-node-secondary)', false, 0);
});

svg += `  <!-- TERTIARY NODES — Upgrade 4 -->\n`;
ring3Nodes.forEach(n => {
    svg += makeNode(n, 20, '#8b5cf6', 'url(#g-node-s)', 'url(#f-node-secondary)', false, 0);
});

svg += `
  <!-- STATUS CHIP -->
  <g transform="translate(1140,28)">
    <rect width="234" height="30" rx="4" fill="#030d1a" stroke="#00BDFE" stroke-width="0.8"/>
    <rect width="234" height="30" rx="4" fill="#00BDFE" opacity="0.03"/>
    <circle cx="16" cy="15" r="3.5" fill="#00BDFE"><animate attributeName="opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite"/></circle>
    <text x="28" y="19.5" font-family="'SF Mono','Fira Code','Consolas',monospace" font-size="8.5" fill="#00BDFE" opacity="0.8" letter-spacing="1.5">LIVE · 43 SERVICES MAPPED</text>
  </g>

  <!-- CORNER MARKS -->
  <g stroke="#00BDFE" stroke-width="1" fill="none" opacity="0.1">
    <path d="M24,24 L24,42 M24,24 L42,24"/>
    <path d="M1376,24 L1376,42 M1376,24 L1358,24"/>
    <path d="M24,776 L24,758 M24,776 L42,776"/>
    <path d="M1376,776 L1376,758 M1376,776 L1358,776"/>
  </g>

  <!-- WATERMARK -->
  <text x="700" y="772" text-anchor="middle" font-family="'SF Mono','Fira Code','Consolas',monospace" font-size="7.5" fill="#00BDFE" opacity="0.15" letter-spacing="5">ORYDLE · KRUM ARCHITECTURE INTELLIGENCE</text>
</svg>`;

fs.writeFileSync('/Users/nikunjkhandelwal/Movies/Orydle-website-v1-master/public/orydle-node-graph-v4.svg', svg);
console.log('SVG written successfully! Size:', svg.length, 'bytes');
