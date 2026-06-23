import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import { SectionLabel } from './SectionLabel';

const faqs = [
  {
    q: 'Do I need technical knowledge to work with you?',
    a: 'No. I translate every step into plain language and ship a system you can operate without touching code. Most clients only see a dashboard.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Small automations: 3–7 days. Mid-size systems: 2–4 weeks. Complex multi-agent platforms: 4–8 weeks. You see progress weekly.',
  },
  {
    q: 'Do you charge hourly or fixed price?',
    a: 'Both. Hourly works for ongoing optimization or unknown scope. Fixed price works for clearly defined builds — I quote after a free 30-min audit.',
  },
  {
    q: 'What happens if the automation breaks?',
    a: 'Every system ships with error alerts, retry logic, and a 30-day post-launch warranty. Ongoing support plans are available if you want me on standby.',
  },
  {
    q: 'Do you offer ongoing maintenance?',
    a: 'Yes. Retainer plans starting at a few hours/month — for monitoring, tweaks, model upgrades, and new integrations as your business evolves.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="t-section mt-4 font-[Geist]">
            Questions, answered.
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="glass-card rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-white font-[Geist_Mono]" style={{ fontSize: '24px', letterSpacing: '-0.01em' }}>
                    {f.q}
                  </span>
                  <Plus
                    className="w-6 h-6 text-[#bbf10a] shrink-0 transition-transform"
                    style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}
                    strokeWidth={2.5}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 font-[Geist_Mono] text-[#d3d3d6]" style={{ fontSize: '18px', lineHeight: 1.6 }}>
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
