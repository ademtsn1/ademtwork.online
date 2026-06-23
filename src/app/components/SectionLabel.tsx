import { motion } from 'motion/react';

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2">
      <motion.span
        className="w-2 h-2 rounded-full"
        style={{
          backgroundColor: '#bbf10a',
          boxShadow: '0 0 8px rgba(255, 77, 26, 0.85)',
        }}
        animate={{ opacity: [1, 1, 0, 0, 1] }}
        transition={{
          duration: 2,
          times: [0, 0.499, 0.5, 0.999, 1],
          ease: 'linear',
          repeat: Infinity,
        }}
      />
      <span
        className="mono-label uppercase"
        style={{ color: '#E4E4E7', fontSize: '20px', letterSpacing: '0.06em' }}
      >
        {children}
      </span>
    </span>
  );
}
