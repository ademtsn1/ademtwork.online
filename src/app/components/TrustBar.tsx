import { motion } from 'motion/react';
import logo1  from '../../imports/Logomark.svg';
import logo2  from '../../imports/svg-2112795473_2566.svg';
import logo3  from '../../imports/svg-1351611246_2581.svg';
import logo4  from '../../imports/svg1049526968_3433.svg';
import logo5  from '../../imports/svg1003170674_8511.svg';
import logo6  from '../../imports/svg-359638614_581.svg';
import logo7  from '../../imports/svg782079207_2080.svg';
import logo8  from '../../imports/svg-864978559_2331.svg';
import logo9  from '../../imports/svg-1617519155_4750.svg';
import logo10 from '../../imports/svg1832883510_4660.svg';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10];

export function TrustBar() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2.5 mb-8">
            <motion.span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: '#FF5415',
                boxShadow: '0 0 6px rgba(255, 84, 21, 0.85)',
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
              style={{
                fontFamily: "'Fira Code', monospace",
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '12px',
                color: '#E0E0E0',
                letterSpacing: '0.08em',
              }}
            >
              TRUSTED BY 100+ TEAMS
            </span>
          </div>

          <div
            className="relative w-full overflow-hidden"
            style={{
              maskImage:
                'linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)',
            }}
          >
            <motion.div
              className="flex items-center py-4 shrink-0"
              style={{ width: 'max-content' }}
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 60,
                ease: 'linear',
                repeat: Infinity,
              }}
            >
              {[...logos, ...logos].map((src, i) => (
                <div
                  key={i}
                  className="shrink-0 flex items-center justify-center"
                  style={{ width: 200, height: 56 }}
                >
                  <img
                    src={src}
                    alt=""
                    className="max-h-10 w-auto transition-opacity"
                    style={{
                      filter: 'brightness(0) invert(0.72)',
                      opacity: 0.8,
                      maxWidth: '160px',
                      objectFit: 'contain',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
