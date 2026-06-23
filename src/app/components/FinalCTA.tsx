import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { SectionLabel } from './SectionLabel';

export function FinalCTA() {
  return (
    <section className="relative py-40 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel>Let's Build</SectionLabel>
          <h2 className="t-hero mt-5 mb-6 font-[Geist]">
            Stop doing the work
            <br />
            <span className="text-gradient-orange">a machine could do.</span>
          </h2>
          <p
            className="max-w-xl mx-auto mb-10 font-[Fira_Code]"
            style={{ fontSize: '20px', lineHeight: 1.6, color: '#B0B0B0' }}
          >
            Free 30-minute audit. No commitment. You leave with a clear plan whether we work together or not.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              className="orange-glow-button rounded-full px-7 py-3.5 inline-flex items-center gap-2"
              style={{
                background: '#bbf10a',
                color: '#000',
                fontWeight: 600,
                fontSize: '20px',
                letterSpacing: '-0.01em',
              }}
            >
              Book Free Audit
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </button>
            <button
              className="rounded-full px-7 py-3.5 inline-flex items-center gap-2 border border-[#bbf10a]/30 text-white hover:border-[#bbf10a]/60 transition"
              style={{ fontWeight: 500, fontSize: '20px', letterSpacing: '-0.01em' }}
            >
              <Download className="w-4 h-4" strokeWidth={2} />
              Automation Playbook
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
