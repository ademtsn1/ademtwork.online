import { motion } from 'motion/react';
import { Search, Wrench, TrendingUp } from 'lucide-react';
import { SectionLabel } from './SectionLabel';

const phases = [
  {
    num: '01',
    icon: Search,
    title: 'Discover & Map',
    desc: 'I analyze your current workflows, find the bottlenecks, and map every manual task that an AI system can replace.',
  },
  {
    num: '02',
    icon: Wrench,
    title: 'Build & Automate',
    desc: 'I build the AI + no-code system end-to-end — integrations, agents, dashboards. You see progress in days, not months.',
  },
  {
    num: '03',
    icon: TrendingUp,
    title: 'Scale & Optimize',
    desc: 'As you grow, the system grows with you. I monitor, refine, and extend it so it keeps paying for itself.',
  },
];

export function ProcessOverview() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <SectionLabel>How I Work</SectionLabel>
          <h2 className="t-section mt-4 mb-5 font-[Geist]">
            From manual chaos to automated calm.
          </h2>
          <p className="max-w-xl mx-auto" style={{ fontSize: '20px', lineHeight: 1.6, color: '#B0B0B0', fontFamily: "'Fira Code', ui-monospace, monospace" }}>
            Three phases. One outcome — a business that runs itself while you sleep.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="mono-label text-[#e0e0e0]" style={{ fontSize: '28px' }}>{p.num}</span>
                <p.icon className="w-7 h-7 text-[#bbf10a]" strokeWidth={2} />
              </div>
              <h3 className="text-white mb-3 font-[Geist_Mono]" style={{ fontSize: '24px', letterSpacing: '-0.02em' }}>
                {p.title}
              </h3>
              <p className="font-[Geist_Mono]" style={{ fontSize: '16px', lineHeight: 1.6, color: '#e0e0e0' }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
