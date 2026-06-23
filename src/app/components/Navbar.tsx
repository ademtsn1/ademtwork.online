import image_Adem_Tasin_Studio_2 from '@/imports/Adem_Tasin_Studio-2.png'
import image_Adem_Tasin_Studio_1 from '@/imports/Adem_Tasin_Studio-1.png'
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { TextScramble } from './ui/text-scramble';

function StudioScramble() {
  const [trigger, setTrigger] = useState(false);
  return (
    <TextScramble
      as="span"
      speed={0.03}
      duration={0.6}
      trigger={trigger}
      onHoverStart={() => setTrigger(true)}
      onScrambleComplete={() => setTrigger(false)}
      style={{
        fontFamily: "'Geist Mono', 'Fira Code', monospace",
        fontSize: '1.2rem',
        color: '#8a8a92',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        cursor: 'default',
      }}
    >
      Studio
    </TextScramble>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl px-7 py-4 border border-[#bbf10a]/25" style={{
          background: 'rgba(5, 5, 5, 0.6)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          boxShadow: '0 0 1px rgba(255, 107, 0, 0.2)'
        }}>
          <div className="flex items-start justify-between">
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="cursor-pointer inline-flex items-center gap-2.5"
            >
              <img
                src={image_Adem_Tasin_Studio_2}
                alt="Adem Tasin"
                className="w-32 h-32 rounded-full object-cover"
                style={{
                  border: '1px solid rgba(187,241,10,0.35)',
                  boxShadow: '0 0 10px rgba(187,241,10,0.25)',
                }}
              />
              <span
                className="inline-flex items-center"
                style={{
                  fontFamily: "'Geist', 'Inter', sans-serif",
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  color: '#fff',
                }}
              >
                Adem Tasin
                <motion.div className="w-2 h-2 rounded-full mx-3" style={{ backgroundColor: '#bbf10a', boxShadow: '0 0 8px rgba(255, 77, 26, 0.85)', flexShrink: 0 }} animate={{ opacity: [1, 1, 0, 0, 1] }} transition={{ duration: 2, times: [0, 0.499, 0.5, 0.999, 1], ease: 'linear', repeat: Infinity }} />
                <StudioScramble />
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10 mt-[40px]">
              <a href="#services" className="hover:text-[#bbf10a] transition-colors font-[Fira_Code] text-[#e0e0e0] text-[20px]">
                Services
              </a>
              <a href="#work" className="hover:text-[#bbf10a] transition-colors font-[Fira_Code] text-[#e0e0e0] text-[20px]">
                Architecture
              </a>
              <a href="#collaborate" className="hover:text-[#bbf10a] transition-colors font-[Fira_Code] text-[#e0e0e0] text-[20px]">
                Collaborate
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 bg-[#bbf10a] rounded-lg transition-all border border-[#bbf10a] hover:shadow-lg hover:shadow-[#bbf10a]/30 font-[Fira_Code] text-[16px] text-[#000000]"
                style={{ fontWeight: 500 }}
              >
                Let's talk
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-[#bbf10a] transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pt-4 border-t border-[#bbf10a]/20"
            >
              <div className="flex flex-col gap-4">
                <a href="#services" className="text-gray-400 hover:text-[#bbf10a] transition-colors text-sm">
                  Services
                </a>
                <a href="#work" className="text-gray-400 hover:text-[#bbf10a] transition-colors text-sm">
                  Architecture
                </a>
                <a href="#collaborate" className="text-gray-400 hover:text-[#bbf10a] transition-colors text-sm">
                  Collaborate
                </a>
                <button
                  className="px-5 py-2.5 bg-[#bbf10a] rounded-lg transition-all text-left border border-[#bbf10a] text-sm"
                  style={{ fontWeight: 500 }}
                >
                  Let's talk
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
