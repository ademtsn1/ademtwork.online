import { Clock, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionLabel } from './SectionLabel';

const options = [
  {
    icon: Clock,
    title: 'Hourly Strategy',
    description: 'Perfect for ongoing optimization, troubleshooting, or when you are not sure what you need yet. We figure it out together, step by step.',
    features: [
      'Flexible scheduling',
      'Direct access via Upwork',
      'Quick response times',
      'Pay only for what you use'
    ]
  },
  {
    icon: Rocket,
    title: 'Fixed-Price Projects',
    description: 'Best for clear goals with defined scope. You get a firm quote upfront, clear milestones, and a predictable timeline from start to finish.',
    features: [
      'Clear pricing from day one',
      'Milestone-based delivery',
      'Full documentation included',
      'Support after launch'
    ]
  }
];

export function Collaboration() {
  return (
    <section className="relative py-48 px-6 dot-grid-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-28"
        >
          <div className="mb-5 inline-block">
            <SectionLabel>Collaboration</SectionLabel>
          </div>
          <h2 className="t-section mb-6 font-[Geist]">
            Let's work <span className="text-gradient-orange terminal-cursor">together</span>
          </h2>
          <p className="t-body-lg text-gray-500 max-w-2xl mx-auto" style={{
            fontWeight: 400
          }}>
            Whether you need ongoing help or a one-time project, I have got you covered
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {options.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card rounded-3xl p-12 group cursor-pointer border border-[#bbf10a]/20"
            >
              <div className="mb-8 w-18 h-18 rounded-2xl bg-[#bbf10a]/10 flex items-center justify-center group-hover:bg-[#bbf10a]/20 transition-colors border border-[#bbf10a]/20">
                <option.icon className="w-9 h-9 text-[#bbf10a]" />
              </div>

              <span className="mono-label text-[#bbf10a]/70 block mb-4 uppercase text-[18px]">
                {index === 0 ? '/ Flexible Hours' : '/ Fixed Scope'}
              </span>

              <h3 className="mb-5 section-title font-[Geist]" style={{
                fontSize: '36px'
              }}>
                {option.title}
              </h3>

              <p className="leading-relaxed mb-10 text-[#e4e4e7]" style={{
                fontSize: '18px',
                lineHeight: 1.7,
                fontFamily: "'Geist Mono', monospace",
                fontWeight: 400
              }}>
                {option.description}
              </p>

              <ul className="space-y-4 mb-10">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-[#bbf10a]"></div>
                    <span className="text-[#d3d3d6]" style={{
                      fontSize: '20px',
                      fontFamily: "'Geist Mono', monospace",
                      fontWeight: 400
                    }}>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 px-6 rounded-xl bg-transparent border border-[#bbf10a]/40 text-[#bbf10a] hover:bg-[#bbf10a]/10 hover:border-[#bbf10a]/60 trans text-[20px]ition-all text-[24px]"
                style={{ fontWeight: 500 }}
              >
                {index === 0 ? 'Start hourly' : 'Get a quote'}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
