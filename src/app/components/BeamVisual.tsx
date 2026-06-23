import { motion } from 'motion/react';

const nodes = [
  { id: 1, x: 20, y: 50, label: 'Slack', color: '#4A154B' },
  { id: 2, x: 35, y: 20, label: 'Gmail', color: '#EA4335' },
  { id: 3, x: 50, y: 50, label: 'n8n', color: '#bbf10a', isCenter: true },
  { id: 4, x: 65, y: 20, label: 'Notion', color: '#000000' },
  { id: 5, x: 80, y: 50, label: 'Airtable', color: '#FCB400' },
  { id: 6, x: 35, y: 80, label: 'Google Sheets', color: '#34A853' },
  { id: 7, x: 65, y: 80, label: 'OpenAI', color: '#10A37F' },
];

const connections = [
  { from: 1, to: 3 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
  { from: 3, to: 5 },
  { from: 6, to: 3 },
  { from: 7, to: 3 },
];

export function BeamVisual() {
  return (
    <section className="relative py-48 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black"></div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-28"
        >
          <div className="mb-5 inline-block">
            <span className="mono-label text-xs text-[#bbf10a] uppercase tracking-wider">
              / Integration
            </span>
          </div>
          <h2 className="section-title mb-6" style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)'
          }}>
            Everything <span className="text-gradient-orange code-bracket">connected</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto" style={{
            fontSize: '1.0625rem',
            lineHeight: 1.6,
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: 400
          }}>
            Seamlessly integrate all your favorite tools into one intelligent workflow
          </p>
        </motion.div>

        <div className="relative h-[550px] glass-card rounded-3xl p-10 border border-[#bbf10a]/20">
          <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
            {connections.map((conn, index) => {
              const fromNode = nodes.find(n => n.id === conn.from);
              const toNode = nodes.find(n => n.id === conn.to);
              if (!fromNode || !toNode) return null;

              return (
                <motion.line
                  key={index}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  x1={`${fromNode.x}%`}
                  y1={`${fromNode.y}%`}
                  x2={`${toNode.x}%`}
                  y2={`${toNode.y}%`}
                  className="beam-line"
                />
              );
            })}
          </svg>

          {nodes.map((node, index) => (
            <motion.div
              key={node.id}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`absolute beam-node ${node.isCenter ? 'z-10' : ''}`}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`${
                  node.isCenter ? 'w-24 h-24' : 'w-18 h-18'
                } rounded-2xl flex items-center justify-center cursor-pointer transition-all`}
                style={{
                  background: node.isCenter
                    ? 'linear-gradient(135deg, #bbf10a 0%, #FF7050 100%)'
                    : 'rgba(10, 10, 10, 0.8)',
                  border: node.isCenter
                    ? '1px solid rgba(255, 107, 0, 0.8)'
                    : '1px solid rgba(255, 107, 0, 0.2)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: node.isCenter
                    ? '0 0 20px rgba(255, 107, 0, 0.3)'
                    : '0 0 10px rgba(0, 0, 0, 0.5)'
                }}
              >
                <span className={`mono-label ${
                  node.isCenter ? 'text-white font-bold' : 'text-gray-300 font-medium'
                }`} style={{ fontSize: node.isCenter ? '0.875rem' : '0.7rem' }}>
                  {node.label}
                </span>
              </motion.div>

              {/* Pulse effect for center node */}
              {node.isCenter && (
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 rounded-2xl border-2 border-[#bbf10a]"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
