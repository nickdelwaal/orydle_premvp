// SVG Node Graph Generator - Part 1: Data & Helpers
const fs = require('fs');

const CX = 700, CY = 400;
const ring1 = [
  { id: 'github', x: 700, y: 215, label: 'GITHUB', sub: 'CODEBASE' },
  { id: 'k8s', x: 860, y: 308, label: 'KUBERNETES', sub: 'ORCHESTRATION' },
  { id: 'micro', x: 860, y: 492, label: 'SERVICES', sub: 'MICROSERVICES' },
  { id: 'db', x: 700, y: 585, label: 'DATABASE', sub: 'PG · REDIS · MONGO' },
  { id: 'extapi', x: 540, y: 492, label: 'EXT. APIS', sub: 'REST · GRAPHQL' },
  { id: 'cicd', x: 540, y: 308, label: 'CI / CD', sub: 'PIPELINES' },
];
const ring2 = [
  { id: 'slack', x: 815, y: 123, label: 'SLACK', sub: 'NOTIFICATIONS' },
  { id: 'aws', x: 977, y: 285, label: 'AWS / GCP', sub: 'CLOUD INFRA' },
  { id: 'monitor', x: 977, y: 515, label: 'MONITOR', sub: 'DATADOG · OTEL' },
  { id: 'llm', x: 815, y: 677, label: 'LLM', sub: 'GPT · CLAUDE · GEMINI' },
  { id: 'security', x: 585, y: 677, label: 'SECURITY', sub: 'VAULT · IAM' },
  { id: 'terraform', x: 423, y: 515, label: 'TERRAFORM', sub: 'INFRA AS CODE' },
  { id: 'ide', x: 423, y: 285, label: 'IDE', sub: 'VSCODE · JETBRAINS' },
  { id: 'docs', x: 585, y: 123, label: 'DOCS', sub: 'KNOWLEDGE BASE' },
];
const ring3 = [
  { id: 'vectordb', x: 997, y: 103, label: 'VECTOR DB', sub: 'EMBEDDINGS' },
  { id: 'msgbus', x: 997, y: 697, label: 'MESSAGE BUS', sub: 'KAFKA · NATS' },
  { id: 'observ', x: 403, y: 697, label: 'OBSERVABILITY', sub: 'TRACES · LOGS' },
  { id: 'artifact', x: 403, y: 103, label: 'ARTIFACT STORE', sub: 'S3 · REGISTRY' },
];
const laterals = [
  { from: ring1[0], to: ring2[0] }, { from: ring1[0], to: ring2[7] },
  { from: ring1[1], to: ring2[1] }, { from: ring1[2], to: ring2[2] },
  { from: ring1[3], to: ring2[3] }, { from: ring1[3], to: ring2[4] },
  { from: ring1[4], to: ring2[5] }, { from: ring1[5], to: ring2[6] },
];

function bezier(x1,y1,x2,y2,off) {
  const dx=x2-x1, dy=y2-y1, L=Math.sqrt(dx*dx+dy*dy);
  if(L===0) return `M${x1},${y1} L${x2},${y2}`;
  const px=-dy/L*off, py=dx/L*off;
  const c1x=Math.round(x1+dx/3+px), c1y=Math.round(y1+dy/3+py);
  const c2x=Math.round(x1+2*dx/3+px), c2y=Math.round(y1+2*dy/3+py);
  return `M${x1},${y1} C${c1x},${c1y} ${c2x},${c2y} ${x2},${y2}`;
}

// Build gradient defs for edges
function edgeGrad(id, x1,y1,x2,y2) {
  return `<linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"><stop offset="0%" stop-color="#06b6d4"/><stop offset="100%" stop-color="#8b5cf6"/></linearGradient>`;
}

// Ring1 node icons (preserving original icons exactly)
const r1icons = {
  github: `<circle cx="-7" cy="-6" r="4" fill="none" stroke="#00BDFE" stroke-width="1.2" opacity="0.95"/><circle cx="7" cy="6" r="4" fill="none" stroke="#00BDFE" stroke-width="1.2" opacity="0.95"/><circle cx="7" cy="-6" r="4" fill="none" stroke="#00BDFE" stroke-width="1.2" opacity="0.95"/><line x1="-7" y1="-2" x2="-7" y2="10" stroke="#00BDFE" stroke-width="1.1" opacity="0.7"/><path d="M-7,10 Q-7,14 -3,14 Q7,14 7,10" fill="none" stroke="#00BDFE" stroke-width="1.1" opacity="0.7"/><line x1="7" y1="-2" x2="7" y2="2" stroke="#00BDFE" stroke-width="1.1" opacity="0.7"/>`,
  k8s: `<circle cx="0" cy="0" r="10" fill="none" stroke="#00BDFE" stroke-width="1.1" opacity="0.85"/><circle cx="0" cy="0" r="3" fill="#00BDFE" opacity="0.65"/><line x1="0" y1="-3" x2="0" y2="-10" stroke="#00BDFE" stroke-width="1.1" opacity="0.65"/><line x1="0" y1="3" x2="0" y2="10" stroke="#00BDFE" stroke-width="1.1" opacity="0.65"/><line x1="2.6" y1="-1.5" x2="8.7" y2="-5" stroke="#00BDFE" stroke-width="1.1" opacity="0.65"/><line x1="-2.6" y1="1.5" x2="-8.7" y2="5" stroke="#00BDFE" stroke-width="1.1" opacity="0.65"/><line x1="2.6" y1="1.5" x2="8.7" y2="5" stroke="#00BDFE" stroke-width="1.1" opacity="0.65"/><line x1="-2.6" y1="-1.5" x2="-8.7" y2="-5" stroke="#00BDFE" stroke-width="1.1" opacity="0.65"/>`,
  micro: `<rect x="-11" y="-11" width="9" height="9" rx="1.5" fill="none" stroke="#00BDFE" stroke-width="1.1" opacity="0.9"/><rect x="2" y="-11" width="9" height="9" rx="1.5" fill="none" stroke="#00BDFE" stroke-width="1.1" opacity="0.9"/><rect x="-11" y="2" width="9" height="9" rx="1.5" fill="none" stroke="#00BDFE" stroke-width="1.1" opacity="0.9"/><rect x="2" y="2" width="9" height="9" rx="1.5" fill="none" stroke="#00BDFE" stroke-width="1.1" opacity="0.9"/>`,
  db: `<ellipse cx="0" cy="-8" rx="11" ry="3.5" fill="none" stroke="#00BDFE" stroke-width="1.2" opacity="0.9"/><line x1="-11" y1="-8" x2="-11" y2="5" stroke="#00BDFE" stroke-width="1.2" opacity="0.9"/><line x1="11" y1="-8" x2="11" y2="5" stroke="#00BDFE" stroke-width="1.2" opacity="0.9"/><ellipse cx="0" cy="5" rx="11" ry="3.5" fill="none" stroke="#00BDFE" stroke-width="1.2" opacity="0.9"/><ellipse cx="0" cy="-2" rx="11" ry="3" fill="none" stroke="#00BDFE" stroke-width="0.5" opacity="0.35"/>`,
  extapi: `<text x="0" y="5" text-anchor="middle" font-family="'SF Mono','Fira Code','Consolas',monospace" font-size="19" fill="#00BDFE" opacity="0.85">{}</text>`,
  cicd: `<rect x="-14" y="-5" width="10" height="10" rx="1.5" fill="none" stroke="#00BDFE" stroke-width="1.2" opacity="0.9"/><rect x="4" y="-5" width="10" height="10" rx="1.5" fill="none" stroke="#00BDFE" stroke-width="1.2" opacity="0.9"/><line x1="-4" y1="0" x2="4" y2="0" stroke="#00BDFE" stroke-width="1.1" opacity="0.7"/><polygon points="3.5,0 0,-2.5 0,2.5" fill="#00BDFE" opacity="0.75"/>`,
};
const r2icons = {
  slack: `<rect x="-10" y="-9" width="18" height="13" rx="2" fill="none" stroke="#3a9ec4" stroke-width="1.1" opacity="0.88"/><line x1="-10" y1="4" x2="-14" y2="10" stroke="#3a9ec4" stroke-width="1" opacity="0.75"/><line x1="-7" y1="-4" x2="4" y2="-4" stroke="#3a9ec4" stroke-width="0.9" opacity="0.55"/><line x1="-7" y1="0" x2="2" y2="0" stroke="#3a9ec4" stroke-width="0.9" opacity="0.55"/>`,
  aws: `<path d="M-13,5 Q-15,-5 -7,-8 Q-5,-14 4,-12 Q11,-14 13,-8 Q17,-5 15,5 Z" fill="none" stroke="#3a9ec4" stroke-width="1.2" opacity="0.88"/>`,
  monitor: `<polyline points="-12,3 -8,3 -4,-8 0,9 4,-5 8,3 12,3" fill="none" stroke="#3a9ec4" stroke-width="1.4" opacity="0.88" stroke-linecap="round" stroke-linejoin="round"/>`,
  llm: `<circle cx="0" cy="-3" r="9" fill="none" stroke="#3a9ec4" stroke-width="1.1" opacity="0.88"/><circle cx="-3" cy="-3" r="2" fill="#3a9ec4" opacity="0.75"/><circle cx="3" cy="-3" r="2" fill="#3a9ec4" opacity="0.75"/><line x1="-4" y1="6" x2="-4" y2="10" stroke="#3a9ec4" stroke-width="1" opacity="0.65"/><line x1="4" y1="6" x2="4" y2="10" stroke="#3a9ec4" stroke-width="1" opacity="0.65"/><line x1="-4" y1="10" x2="4" y2="10" stroke="#3a9ec4" stroke-width="1" opacity="0.65"/>`,
  security: `<path d="M0,-12 L11,-7 L11,2 Q11,11 0,15 Q-11,11 -11,2 L-11,-7 Z" fill="none" stroke="#3a9ec4" stroke-width="1.2" opacity="0.88"/><polyline points="-4,2 -1,6 6,-3" fill="none" stroke="#3a9ec4" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.8"/>`,
  terraform: `<polygon points="0,-12 10,0 0,12 -10,0" fill="none" stroke="#3a9ec4" stroke-width="1.2" opacity="0.88"/><polygon points="0,-6 5,0 0,6 -5,0" fill="#3a9ec4" opacity="0.2"/>`,
  ide: `<path d="M-4,-8 L-10,0 L-4,8" fill="none" stroke="#3a9ec4" stroke-width="1.4" stroke-linecap="round" opacity="0.9"/><path d="M4,-8 L10,0 L4,8" fill="none" stroke="#3a9ec4" stroke-width="1.4" stroke-linecap="round" opacity="0.9"/><line x1="-2" y1="5" x2="2" y2="-5" stroke="#3a9ec4" stroke-width="1" opacity="0.6"/>`,
  docs: `<rect x="-10" y="-12" width="15" height="18" rx="1.5" fill="none" stroke="#3a9ec4" stroke-width="1.1" opacity="0.88"/><line x1="-7" y1="-7" x2="2" y2="-7" stroke="#3a9ec4" stroke-width="0.9" opacity="0.65"/><line x1="-7" y1="-3" x2="2" y2="-3" stroke="#3a9ec4" stroke-width="0.9" opacity="0.65"/><line x1="-7" y1="1" x2="-1" y2="1" stroke="#3a9ec4" stroke-width="0.9" opacity="0.65"/>`,
};
const r3icons = {
  vectordb: `<circle cx="-5" cy="-5" r="2" fill="#8b5cf6" opacity="0.6"/><circle cx="5" cy="-5" r="2" fill="#8b5cf6" opacity="0.6"/><circle cx="-5" cy="5" r="2" fill="#8b5cf6" opacity="0.6"/><circle cx="5" cy="5" r="2" fill="#8b5cf6" opacity="0.6"/><circle cx="0" cy="0" r="2" fill="#8b5cf6" opacity="0.4"/>`,
  msgbus: `<polyline points="-8,0 -4,-6 0,0 4,6 8,0" fill="none" stroke="#8b5cf6" stroke-width="1.2" opacity="0.85" stroke-linecap="round"/>`,
  observ: `<rect x="-7" y="-8" width="14" height="4" rx="1" fill="none" stroke="#8b5cf6" stroke-width="0.9" opacity="0.8"/><rect x="-7" y="-2" width="14" height="4" rx="1" fill="none" stroke="#8b5cf6" stroke-width="0.9" opacity="0.6"/><rect x="-7" y="4" width="14" height="4" rx="1" fill="none" stroke="#8b5cf6" stroke-width="0.9" opacity="0.4"/>`,
  artifact: `<rect x="-7" y="-7" width="14" height="14" rx="2" fill="none" stroke="#8b5cf6" stroke-width="1.1" opacity="0.85"/><line x1="-3" y1="0" x2="3" y2="0" stroke="#8b5cf6" stroke-width="0.9" opacity="0.6"/><line x1="0" y1="-3" x2="0" y2="3" stroke="#8b5cf6" stroke-width="0.9" opacity="0.6"/>`,
};

// Bottom-label nodes vs top-label nodes
const topLabelNodes = ['llm','security'];

module.exports = { CX, CY, ring1, ring2, ring3, laterals, bezier, edgeGrad, r1icons, r2icons, r3icons, topLabelNodes };
