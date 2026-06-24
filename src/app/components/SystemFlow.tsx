import { motion } from 'motion/react';
import { SectionLabel } from './SectionLabel';
import webhookIcon    from '@/imports/webhook.svg';
import httpsIcon      from '@/imports/https_icon.svg';
import openaiIcon     from '@/imports/open-ai-logo.svg';
import funnelIcon     from '@/imports/funnel-1.svg';
import slackIcon      from '@/imports/slack-logo.svg';
import envelopeIcon   from '@/imports/envelope.svg';
import gridNineIcon   from '@/imports/grid-nine.svg';

// ─── layout constants ─────────────────────────────────────────────────────────
const NODE_W  = 252;
const NODE_H  = 98;
const COL_W   = 296;   // col center-to-center
const ROW_H   = 188;
const PAD_X   = 56;
const PAD_Y   = 56;
const COLS    = 5;
const ROWS    = 3;
const CANVAS_W = PAD_X * 2 + (COLS - 1) * COL_W + NODE_W;
const CANVAS_H = PAD_Y * 2 + (ROWS - 1) * ROW_H + NODE_H;
const PORT_R  = 5;

// ─── data ─────────────────────────────────────────────────────────────────────
type NodeDef = {
  id: string;
  label: string;
  subtitle: string;
  icon: string;
  col: number;
  row: number;
  active?: boolean;
};

const NODES: NodeDef[] = [
  { id: 'webhook',  label: 'Webhook',            subtitle: 'On trigger',                       icon: webhookIcon,  col: 0, row: 1 },
  { id: 'http',     label: 'HTTP Request',        subtitle: 'GET: https://example.com', icon: httpsIcon,    col: 1, row: 1 },
  { id: 'ai',       label: 'Ai Model',     subtitle: 'Response Text',                    icon: openaiIcon,   col: 2, row: 1, active: true },
  { id: 'filter',   label: 'Filter',              subtitle: 'Kept',                             icon: funnelIcon,   col: 3, row: 0 },
  { id: 'send',     label: 'Send a message',      subtitle: 'post: message',                    icon: slackIcon,    col: 4, row: 0 },
  { id: 'get',      label: 'Get a message',       subtitle: 'get: message',                     icon: envelopeIcon, col: 3, row: 2 },
  { id: 'sheet',    label: 'Sheet', subtitle: 'append: sheet',                    icon: gridNineIcon, col: 4, row: 2 },
];

const EDGES: { from: string; to: string }[] = [
  { from: 'webhook', to: 'http'   },
  { from: 'http',    to: 'ai'     },
  { from: 'ai',      to: 'filter' },
  { from: 'ai',      to: 'get'    },
  { from: 'filter',  to: 'send'   },
  { from: 'get',     to: 'sheet'  },
];

// ─── helpers ──────────────────────────────────────────────────────────────────
function box(n: NodeDef) {
  const x = PAD_X + n.col * COL_W;
  const y = PAD_Y + n.row * ROW_H;
  return { x, y };
}

function portRight(n: NodeDef) {
  const b = box(n);
  return { x: b.x + NODE_W, y: b.y + NODE_H / 2 };
}

function portLeft(n: NodeDef) {
  const b = box(n);
  return { x: b.x, y: b.y + NODE_H / 2 };
}

function bezier(a: NodeDef, b: NodeDef) {
  const p1 = portRight(a);
  const p2 = portLeft(b);
  const mx = (p1.x + p2.x) / 2;
  return `M ${p1.x} ${p1.y} C ${mx} ${p1.y}, ${mx} ${p2.y}, ${p2.x} ${p2.y}`;
}

// border-travel perimeter for rx=11 rounded rect
const RX = 11;
const PERIM = Math.round(2 * (NODE_W - 2 * RX) + 2 * (NODE_H - 2 * RX) + 2 * Math.PI * RX);

// ─── component ────────────────────────────────────────────────────────────────
export function SystemFlow() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <style>{`
        @keyframes travelBorder {
          from { stroke-dashoffset: ${PERIM}; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes cometFlow {
          from { stroke-dashoffset: 320; }
          to   { stroke-dashoffset: 0; }
        }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#070707] to-black" />

      <div className="relative max-w-7xl mx-auto">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="mb-5"><SectionLabel>System Architecture</SectionLabel></div>
          <h2 className="t-section mb-6 font-[Geist]">How your work flows</h2>
          <p className="t-body-lg max-w-2xl mx-auto">
            A real n8n-style workflow. Trigger → enrich → reason → branch → deliver. Built once, runs forever.
          </p>
        </motion.div>

        {/* canvas wrapper — scales to fit container */}
        <div
          className="w-full overflow-hidden rounded-2xl"
          style={{ height: CANVAS_H * (1 / (CANVAS_W / 1152)) }}
        >
          <div
            className="relative rounded-2xl border border-[#bbf10a]/15 overflow-hidden"
            style={{
              width: CANVAS_W,
              height: CANVAS_H,
              background: 'radial-gradient(ellipse at 50% 50%, rgba(187,241,10,0.03) 0%, rgba(0,0,0,0) 70%), #050505',
              transformOrigin: 'top left',
              transform: `scale(${1152 / CANVAS_W})`,
            }}
          >
            {/* dot grid */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
                backgroundSize: '22px 22px',
              }}
            />

            {/* ── SVG layer (connections) ── */}
            <svg
              className="absolute inset-0"
              width={CANVAS_W}
              height={CANVAS_H}
              style={{ pointerEvents: 'none' }}
            >
              <defs>
                <linearGradient id="wg" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#bbf10a" stopOpacity="1" />
                  <stop offset="100%" stopColor="#bbf10a" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="cg" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="#bbf10a" stopOpacity="0" />
                  <stop offset="60%"  stopColor="#bbf10a" stopOpacity="1" />
                  <stop offset="100%" stopColor="#ffffff"  stopOpacity="1" />
                </linearGradient>
                {EDGES.map((e, i) => {
                  const a = NODES.find(n => n.id === e.from)!;
                  const b = NODES.find(n => n.id === e.to)!;
                  return <path key={i} id={`w${i}`} d={bezier(a, b)} fill="none" />;
                })}
              </defs>

              {/* static wires */}
              {EDGES.map((e, i) => {
                const a = NODES.find(n => n.id === e.from)!;
                const b = NODES.find(n => n.id === e.to)!;
                const fromAi = e.from === 'ai';
                return (
                  <motion.path
                    key={`wire-${i}`}
                    d={bezier(a, b)}
                    stroke="#bbf10a"
                    strokeOpacity={fromAi ? 0.4 : 0.85}
                    strokeWidth={2.5}
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: i * 0.12, ease: 'easeInOut' }}
                    style={{ filter: 'drop-shadow(0 0 6px rgba(187,241,10,0.8))' }}
                  />
                );
              })}

              {/* comet trails — only on ai outgoing edges */}
              {EDGES.map((e, i) => {
                if (e.from !== 'ai') return null;
                const a = NODES.find(n => n.id === e.from)!;
                const b = NODES.find(n => n.id === e.to)!;
                const dur = `${4.2 + i * 0.25}s`;
                return (
                  <path
                    key={`comet-${i}`}
                    d={bezier(a, b)}
                    stroke="url(#cg)"
                    strokeWidth={3.5}
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="80 240"
                    style={{ filter: 'drop-shadow(0 0 8px rgba(187,241,10,1)) drop-shadow(0 0 16px rgba(187,241,10,0.5))' }}
                  >
                    <animate attributeName="stroke-dashoffset" from="320" to="0" dur={dur} repeatCount="indefinite" />
                  </path>
                );
              })}

              {/* moving dot particles — on all edges */}
              {EDGES.map((_, i) => (
                <circle
                  key={`pt-${i}`}
                  r={3.5}
                  fill="#ffffff"
                  style={{ filter: 'drop-shadow(0 0 7px #bbf10a) drop-shadow(0 0 14px rgba(187,241,10,0.8))' }}
                >
                  <animateMotion dur={`${4.2 + i * 0.25}s`} repeatCount="indefinite" rotate="auto">
                    <mpath href={`#w${i}`} />
                  </animateMotion>
                </circle>
              ))}
            </svg>

            {/* ── Nodes ── */}
            {NODES.map((n, i) => {
              const b = box(n);
              const isActive = !!n.active;
              return (
                <motion.div
                  key={n.id}
                  className="absolute"
                  style={{ left: b.x, top: b.y, width: NODE_W, height: NODE_H }}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  whileHover={{ y: -2 }}
                >
                  {/* card body */}
                  <div
                    className="relative w-full h-full rounded-xl flex items-center gap-3 px-3 overflow-hidden"
                    style={{
                      background: isActive
                        ? 'linear-gradient(135deg, rgba(187,241,10,0.13) 0%, rgba(187,241,10,0.04) 100%)'
                        : 'rgba(12,12,12,0.95)',
                      border: isActive
                        ? '1px solid rgba(187,241,10,0.6)'
                        : '1px solid rgba(255,255,255,0.28)',
                      boxShadow: isActive
                        ? '0 0 28px rgba(187,241,10,0.25), inset 0 0 14px rgba(187,241,10,0.08)'
                        : '0 8px 24px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)',
                      backdropFilter: 'blur(14px)',
                    }}
                  >
                    {/* traveling border for active node */}
                    {isActive && (
                      <svg
                        className="absolute inset-0 w-full h-full"
                        style={{ pointerEvents: 'none', borderRadius: RX, opacity: 0.9 }}
                      >
                        <rect
                          x={3} y={3}
                          width={NODE_W - 6}
                          height={NODE_H - 6}
                          rx={RX - 2} ry={RX - 2}
                          fill="none"
                          stroke="#bbf10a"
                          strokeWidth={3}
                          strokeDasharray={`140 ${PERIM - 140}`}
                          style={{
                            filter: 'drop-shadow(0 0 10px #bbf10a) drop-shadow(0 0 20px rgba(187,241,10,0.6))',
                            animation: `travelBorder 3.5s linear infinite`,
                          }}
                        />
                      </svg>
                    )}

                    {/* icon box */}
                    <div
                      className="w-13 h-13 shrink-0 rounded-lg flex items-center justify-center"
                      style={{
                        background: isActive ? 'rgba(187,241,10,0.12)' : 'rgba(255,255,255,0.05)',
                        border: isActive ? '1px solid rgba(187,241,10,0.35)' : '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      <img src={n.icon} alt={n.label} className="w-9 h-9 object-contain" style={{ filter: isActive ? 'brightness(0) saturate(100%) invert(86%) sepia(55%) saturate(600%) hue-rotate(35deg)' : 'brightness(0.85) invert(1)' }} />
                    </div>

                    {/* text */}
                    <div className="min-w-0 flex-1">
                      <div
                        className="text-white truncate"
                        style={{
                          fontSize: 20,
                          fontWeight: 700,
                          letterSpacing: '-0.01em',
                          fontFamily: "'Geist', 'Inter', system-ui, sans-serif",
                        }}
                      >
                        {n.label}
                      </div>
                      <div
                        className="truncate mt-0.5"
                        style={{
                          fontSize: 16,
                          color: '#B0B0B0',
                          fontFamily: "'Fira Mono', monospace",
                          letterSpacing: '0.01em',
                        }}
                      >
                        {n.subtitle}
                      </div>
                    </div>

                    {/* executing pulse for active node */}
                    {isActive && (
                      <div className="shrink-0 flex items-center gap-1 pr-1">
                        <motion.div
                          className="w-1.5 h-1.5 rounded-full bg-[#bbf10a]"
                          animate={{ opacity: [1, 0.2, 1], scale: [1, 0.7, 1] }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                          style={{ boxShadow: '0 0 6px #bbf10a' }}
                        />
                      </div>
                    )}
                  </div>

                  {/* input port (left) */}
                  {n.id !== 'webhook' && (
                    <div
                      className="absolute rounded-full"
                      style={{
                        left: -PORT_R,
                        top: NODE_H / 2 - PORT_R,
                        width: PORT_R * 2,
                        height: PORT_R * 2,
                        background: '#0c0c0c',
                        border: '1.5px solid rgba(187,241,10,0.55)',
                        boxShadow: '0 0 5px rgba(187,241,10,0.3)',
                      }}
                    />
                  )}

                  {/* output port (right) */}
                  {n.id !== 'send' && n.id !== 'sheet' && (
                    <div
                      className="absolute rounded-full"
                      style={{
                        left: NODE_W - PORT_R,
                        top: NODE_H / 2 - PORT_R,
                        width: PORT_R * 2,
                        height: PORT_R * 2,
                        background: '#bbf10a',
                        boxShadow: '0 0 8px rgba(187,241,10,0.9)',
                      }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Response',     value: '<100ms' },
            { label: 'Uptime',       value: '99.9%'  },
            { label: 'Integrations', value: '50+'    },
            { label: 'AI Models',    value: '10+'    },
          ].map((s) => (
            <div
              key={s.label}
              className="text-center p-5 rounded-xl border border-[#bbf10a]/10 bg-[#0a0a0a]/60"
            >
              <div className="mono-metric text-[#bbf10a]" style={{ fontSize: 36 }}>
                {s.value}
              </div>
              <div className="t-mono-label mt-1" style={{ color: '#E4E4E7', fontFamily: "'Fira Code', monospace", fontSize: '20px' }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
