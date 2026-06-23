import { Activity } from 'lucide-react';
import { motion } from 'motion/react';

export function StatusBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-6 pb-4">
      <div className="max-w-7xl mx-auto">
        <div
          className="rounded-lg px-4 py-2 flex items-center justify-between gap-4 border border-[#bbf10a]/30"
          style={{
            background: 'rgba(5, 5, 5, 0.7)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <motion.div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#bbf10a', boxShadow: '0 0 8px rgba(255, 77, 26, 0.85)' }} animate={{ opacity: [1, 1, 0, 0, 1] }} transition={{ duration: 2, times: [0, 0.499, 0.5, 0.999, 1], ease: 'linear', repeat: Infinity }} />
              <span className="mono-label text-gray-400 text-[13px]"> FOR NEW PROJECTS<span className="text-[#bbf10a]">AVAILABLE</span></span>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <svg width="32" height="16" viewBox="0 0 32 16" fill="none" style={{ overflow: 'visible' }}>
                <polyline
                  points="0,8 5,8 7,2 9,14 11,4 13,10 15,8 32,8"
                  stroke="#bbf10a"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray="60"
                  strokeDashoffset="60"
                  style={{
                    animation: 'ecg-draw 1.6s linear infinite',
                  }}
                />
                <style>{`
                  @keyframes ecg-draw {
                    0% { stroke-dashoffset: 60; opacity: 1; }
                    70% { stroke-dashoffset: 0; opacity: 1; }
                    85% { stroke-dashoffset: 0; opacity: 0; }
                    100% { stroke-dashoffset: 60; opacity: 0; }
                  }
                `}</style>
              </svg>
              <span className="mono-label text-[13px] text-[#b0b0b0]">
                TYPICAL RESPONSE: <span className="text-gray-400">24H</span>
              </span>
            </div>
          </div>

          <div className="mono-label text-[13px] text-[#b0b0b0]">
            UPWORK TOP TALENT
          </div>
        </div>
      </div>
    </div>
  );
}
