import '../styles/portfolio.css';
import { GridBackground } from './components/GridBackground';
import { Navbar } from './components/Navbar';
import { StatusBar } from './components/StatusBar';
import { Hero } from './components/Hero';
import { RecentWins } from './components/RecentWins';
import { ProcessOverview } from './components/ProcessOverview';
import { AutomationGrid } from './components/AutomationGrid';
import { SystemFlow } from './components/SystemFlow';
import { Security } from './components/Security';
import { Testimonials } from './components/Testimonials';
import { Collaboration } from './components/Collaboration';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative pb-20">
      <GridBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div id="work">
          <SystemFlow />
        </div>
        <RecentWins />
        <ProcessOverview />
        <div id="services">
          <AutomationGrid />
        </div>
        <Security />
        <Testimonials />
        <div id="collaborate">
          <Collaboration />
        </div>
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>
      <StatusBar />
    </div>
  );
}
