import { motion } from 'motion/react';
import { SectionLabel } from './SectionLabel';

const items = [
  {
    name: 'Sarah K.',
    handle: '@LogiTech',
    metric: '12h → 0h',
    quote: 'Cut our manual reporting from 12 hours a week to zero. The dashboard updates itself before I open my laptop.',
  },
  {
    name: 'Daniel R.',
    handle: '@GrowthLab',
    metric: '3× replies',
    quote: 'Replaced three SaaS subscriptions with one Make scenario Adem built. Our reply rate tripled in 6 weeks.',
  },
  {
    name: 'Elena V.',
    handle: '@NorthFin',
    metric: '€4k/mo saved',
    quote: 'He understood my workflow better than my own ops team. The system has paid for itself five times over.',
  },
  {
    name: 'Marcus L.',
    handle: '@StudioOne',
    metric: '40h/wk back',
    quote: 'I hired Adem for one bot. Six months later, half my agency runs on his AI agents. Worth every dollar.',
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="t-section mt-4 font-[Geist]">
            Operators who stopped doing the work.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-7 relative"
            >
              <motion.div
                className="absolute top-4 left-4 w-2 h-2 rounded-full"
                style={{
                  backgroundColor: '#bbf10a',
                  boxShadow: '0 0 8px rgba(255, 77, 26, 0.85)',
                }}
                animate={{ opacity: [1, 1, 0, 0, 1] }}
                transition={{
                  duration: 2,
                  times: [0, 0.499, 0.5, 0.999, 1],
                  ease: 'linear',
                  repeat: Infinity,
                }}
              />
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-white font-[Sora]" style={{ fontSize: '20px', fontWeight: 600 }}>
                    {t.name}
                  </div>
                  <div className="mono-label text-[#b0b0b0]" style={{ fontSize: '14px' }}>
                    {t.handle}
                  </div>
                </div>
                <div
                  className="px-3 py-1 rounded-full border border-[#bbf10a]/30 bg-[#bbf10a]/5 mono-label"
                  style={{ fontSize: '16px', color: '#bbf10a', letterSpacing: '0.04em' }}
                >
                  {t.metric}
                </div>
              </div>
              <p className="font-[Geist_Mono] text-[#d3d3d6]" style={{ fontSize: '1rem', lineHeight: 1.65, letterSpacing: '-0.005em' }}>
                "{t.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
