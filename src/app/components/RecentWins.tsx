import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { SectionLabel } from './SectionLabel';

const wins = [
  { name: 'Sarah K.', industry: 'E-commerce', result: 'Saved 32h/week on order processing' },
  { name: 'Daniel R.', industry: 'B2B SaaS', result: '3× reply rate with AI outreach' },
  { name: 'Marcus L.', industry: 'Agency', result: 'Replaced 3 SaaS tools with 1 system' },
  { name: 'Elena V.', industry: 'Finance', result: 'Automated reporting (12h → 0h)' },
  { name: 'Tom B.', industry: 'Real Estate', result: '500+ leads/mo enriched on autopilot' },
];

export function RecentWins() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionLabel>Recent Wins</SectionLabel>
          <h2 className="t-section mt-4 font-[Geist]">
            40+ Systems Deployed
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {wins.map((w, i) => (
            <motion.div
              key={w.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card rounded-xl p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="mono-label uppercase tracking-wider text-[#b0b0b0] font-normal text-[24px]">
                  {w.industry}
                </span>
                <CheckCircle2 className="w-6 h-6 text-[#bbf10a]" strokeWidth={2} />
              </div>
              <div className="text-white mb-1 font-[Sora]" style={{ fontSize: '20px', fontWeight: 700 }}>
                {w.name}
              </div>
              <div className="text-[#e0e0e0] font-[Geist_Mono]" style={{ fontSize: '16px', lineHeight: 1.5 }}>
                {w.result}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
