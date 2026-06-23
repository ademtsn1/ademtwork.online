import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Typewriter } from "./ui/typewriter";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-56 pb-20 overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid-bg"></div>

      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#bbf10a] opacity-10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#bbf10a] opacity-10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 inline-flex justify-center">
            <div className="inline-flex items-center gap-2 my-[20px]">
              <motion.div
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
              ></motion.div>
              <span
                className="mono-label uppercase"
                style={{ color: '#E4E4E7', fontSize: '1.2rem', letterSpacing: '0.06em' }}
              >
                Automation & AI Expert
              </span>
            </div>
          </div>

          <h1
            className="mb-8 max-w-5xl mx-auto"
            style={{
              fontFamily: "'Raleway', system-ui, sans-serif",
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 500,
              color: '#E0E0E0',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
            }}
          >
            AI That Automates, Making Businesses{" "}
            <Typewriter
              text={["Flow Naturally", "Flow Effortlessly", "Run Seamlessly", "Operate Smartly", "Work in Sync"]}
              speed={120}
              deleteSpeed={70}
              waitTime={2000}
              showCursor={true}
              cursorChar="_"
              cursorClassName="ml-0.5"
              className="text-[#bbf10a]"
            />
          </h1>

          <p
            className="mb-16 max-w-3xl mx-auto"
            style={{
              fontFamily: "'Fira Code', ui-monospace, monospace",
              fontSize: '22px',
              fontWeight: 400,
              color: '#B0B0B0',
              lineHeight: 1.55,
            }}
          >
            I build AI-powered n8n workflows that replace your stack of manual tools — for automation, data, integrations, agents, and reporting.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="orange-glow-button group px-10 py-4 bg-[#bbf10a] rounded-lg inline-flex items-center gap-3 transition-all border border-[#bbf10a] text-[#000000]"
              style={{
                fontSize: "1.2rem",
                fontWeight: 600,
                fontFamily: '"Fira Code", monospace',
              }}
            >Let's talk automation<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-10 py-4 bg-transparent rounded-lg inline-flex items-center gap-3 transition-all border border-[#bbf10a]/30 hover:border-[#bbf10a]/60 hover:bg-[#bbf10a]/5"
              style={{
                fontSize: "1.2rem",
                fontWeight: 500,
                fontFamily: "Inter, sans-serif",
              }}
            >
              <span className="text-gray-300 font-[Fira_Code]">
                See how it works
              </span>
            </motion.button>
          </div>

          {/* Business metrics */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 flex items-center justify-center gap-8 md:gap-12 flex-wrap"
          >
            <div className="text-center">
              <div className="mono-metric mb-1 text-[36px] text-[#bbf10a]">
                500+
              </div>
              <div className="mono-label uppercase text-[20px]" style={{ color: '#E4E4E7' }}>
                Automations Built
              </div>
            </div>
            <div className="w-px h-12 bg-[#bbf10a]/20 hidden md:block"></div>
            <div className="text-center">
              <div className="mono-metric text-[#bbf10a] mb-1 text-[36px]">
                Global
              </div>
              <div className="mono-label uppercase text-[20px]" style={{ color: '#E4E4E7' }}>
                Upwork Top Talent
              </div>

            </div>
            <div className="w-px h-12 bg-[#bbf10a]/20 hidden md:block"></div>
            <div className="text-center">
              <div className="mono-metric text-[#bbf10a] mb-1 text-[36px]">
                24/7
              </div>
              <div className="mono-label uppercase text-[20px]" style={{ color: '#E4E4E7' }}>
                Systems Running
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        
      </div>
    </section>
  );
}