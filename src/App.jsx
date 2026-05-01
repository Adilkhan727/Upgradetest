import Hero from './components/Hero.jsx';
import PartnerBanner from './components/PartnerBanner.jsx';
import ProgramsGrid from './components/ProgramsGrid.jsx';
import WhyUs from './components/WhyUs.jsx';
import FAQ from './components/FAQ.jsx';
import LeadForm from './components/LeadForm.jsx';

function App() {
  return (
    <div className="min-h-screen bg-background text-slate-950">
      <main className="mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-12">
        <Hero />
        <PartnerBanner />
        <ProgramsGrid />
        <WhyUs />
        <FAQ />
        <LeadForm />
      </main>
      <footer className="border-t border-slate-200 bg-white/80 px-6 py-6 text-center text-sm text-slate-600 sm:px-10 lg:px-12">
        <p>UPgrade school © 2026 — академический подход к международным экзаменам и английскому языку.</p>
      </footer>
    </div>
  );
}

export default App;
