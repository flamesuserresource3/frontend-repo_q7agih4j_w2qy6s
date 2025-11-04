import React from 'react';
import HeroSection from './components/HeroSection';
import RolesSection from './components/RolesSection';
import ModulesSection from './components/ModulesSection';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 text-white">
            <span className="inline-grid h-8 w-8 place-items-center rounded-md bg-blue-600 text-sm font-bold">AP</span>
            <span className="text-sm font-medium text-slate-200">Apna Parivaar</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#roles" className="hover:text-white">Roles</a>
            <a href="#modules" className="hover:text-white">Modules</a>
            <a href="#" className="rounded-md bg-white/10 px-3 py-1.5 ring-1 ring-white/15 hover:bg-white/15">Sign In</a>
          </nav>
        </div>
      </header>

      <main>
        <HeroSection />
        <RolesSection />
        <ModulesSection />
        <CTASection />
      </main>

      <footer className="w-full border-t border-slate-800 bg-slate-950 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center text-xs text-slate-400 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Apna Parivaar. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
