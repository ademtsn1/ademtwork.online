import { Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionLabel } from './SectionLabel';

export function Footer() {
  return (
    <footer className="relative py-24 px-6 border-t border-[#bbf10a]/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 inline-block">
              <SectionLabel>Get Started</SectionLabel>
            </div>
            <h3 className="section-title mb-5 font-[Geist]" style={{
              fontSize: '50px'
            }}>
              Ready to <span className="text-gradient-orange">automate</span>?
            </h3>
            <p className="mb-10" style={{
              fontSize: '20px',
              lineHeight: 1.6,
              fontFamily: '"Fira Code", monospace',
              fontWeight: 400,
              color: '#B0B0B0'
            }}>
              Let's talk about turning your manual tasks into smart, automated systems.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="orange-glow-button px-10 py-4 bg-[#bbf10a] rounded-xl inline-flex items-center gap-3 transition-all border border-[#bbf10a] text-[#000000]"
              style={{ fontWeight: 700, fontSize: '20px' }}
            >
              <Mail className="w-5 h-5" />
              Start a conversation
            </motion.button>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-16 border-t border-[#bbf10a]/10">
          <div className="text-gray-500">
            <p className="mono-label text-[#b0b0b0]" style={{ fontSize: '16px' }}>© 2026 Adem Tasin <span className="text-gray-700 mx-2">/</span> Making businesses flow naturally.</p>
          </div>

          <div className="flex items-center gap-8 text-[16px]"><motion.a
              whileHover={{ scale: 1.15 }}
              href="#"
              className="text-gray-500 hover:text-[#bbf10a] transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </motion.a><motion.a
              whileHover={{ scale: 1.15 }}
              href="#"
              className="text-gray-500 hover:text-[#bbf10a] transition-colors"
            >
              <Github className="w-8 h-8" />
            </motion.a><motion.a
              whileHover={{ scale: 1.15 }}
              href="#"
              className="text-gray-500 hover:text-[#bbf10a] transition-colors"
            >
              <Mail className="w-8 h-8" />
            </motion.a></div>
        </div>
      </div>
    </footer>
  );
}
