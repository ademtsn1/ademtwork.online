import { Workflow, Brain, Database } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionLabel } from './SectionLabel';

const services = [
  {
    icon: Workflow,
    title: 'Smart Automations',
    description: 'Building reliable pipelines that handle your repetitive work without server strain. Your tools talk to each other, your team stays focused on what matters.',
    metric: '500+',
    metricLabel: 'Built'
  },
  {
    icon: Brain,
    title: 'AI Brains',
    description: 'Connecting your custom data so AI actually understands your business. Not generic answers—precise, context-aware insights from your own information.',
    metric: '10x',
    metricLabel: 'Faster'
  },
  {
    icon: Database,
    title: 'Seamless Flow',
    description: 'Connecting your data, tools, and people into one smooth system. Everything syncs automatically, nothing falls through the cracks.',
    metric: '99.9%',
    metricLabel: 'Uptime'
  }
];

export function AutomationGrid() {
  return (
    <section className="relative py-48 px-6 dot-grid-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-28"
        >
          <div className="mb-5 inline-block">
            <SectionLabel>Services</SectionLabel>
          </div>
          <h2 className="t-section mb-6 font-[Geist]">
            What I do for you
          </h2>
          <p className="t-body-lg text-gray-500 max-w-2xl mx-auto" style={{
            fontWeight: 400
          }}>
            Taking manual chaos and turning it into smooth, automated systems that work while you sleep
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-3xl p-10 group cursor-pointer"
            >
              <div className="mb-8 w-16 h-16 rounded-2xl bg-[#bbf10a]/10 flex items-center justify-center group-hover:bg-[#bbf10a]/20 transition-colors border border-[#bbf10a]/20">
                <service.icon className="w-8 h-8 text-[#bbf10a]" />
              </div>

              <span className="mono-label text-[#bbf10a]/70 block mb-3 uppercase text-[28px]">
                0{index + 1}
              </span>

              <h3 className="mb-5 section-title" style={{
                fontSize: '1.625rem',
                fontFamily: "'Geist Mono', monospace",
              }}>
                {service.title}
              </h3>

              <p className="leading-relaxed mb-8 text-[#e0e0e0]" style={{
                fontSize: '16px',
                lineHeight: 1.7,
                fontFamily: "'Geist Mono', monospace",
                fontWeight: 400
              }}>
                {service.description}
              </p>

              {/* Metric display */}
              <div className="flex items-baseline gap-3 pt-6 border-t border-[#bbf10a]/10">
                <span className="mono-metric text-[#bbf10a] text-[32px]">{service.metric}</span>
                <span className="mono-label uppercase text-[16px]" style={{ color: '#B0B0B0' }}>{service.metricLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
