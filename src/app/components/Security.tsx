import { motion } from 'motion/react';
import { Shield, Lock, FileCheck, ServerCog } from 'lucide-react';
import { SectionLabel } from './SectionLabel';

const items = [
  { icon: Lock, title: 'NDA by default', desc: 'Every engagement starts with a mutual NDA. Your data and ideas stay yours.' },
  { icon: ServerCog, title: 'Self-host friendly', desc: 'I can deploy on your infrastructure — no third-party SaaS lock-in required.' },
  { icon: FileCheck, title: 'GDPR aware', desc: 'Built with data minimization, audit logs, and EU-region storage where needed.' },
  { icon: Shield, title: 'Credentials never reused', desc: 'Project-scoped keys, vaulted secrets, revoked the moment work ends.' },
];

export function Security() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel>Security & Trust</SectionLabel>
          <h2 className="t-section mt-4 mb-5 font-[Geist]">
            Your data stays yours.
          </h2>
          <p className="max-w-xl mx-auto font-[Fira_Code]" style={{ fontSize: '20px', lineHeight: 1.6, color: '#B0B0B0' }}>
            Automation should feel like a relief, not a risk. Here's how I keep your systems safe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 flex gap-4"
            >
              <div className="w-11 h-11 shrink-0 rounded-lg bg-[#bbf10a]/10 border border-[#bbf10a]/20 flex items-center justify-center">
                <it.icon className="w-6 h-6 text-[#bbf10a]" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-white mb-1.5" style={{ fontSize: '24px', letterSpacing: '-0.01em' }}>
                  {it.title}
                </h3>
                <p className="font-[Geist_Mono]" style={{ fontSize: '20px', lineHeight: 1.55, color: '#B0B0B0' }}>
                  {it.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
