import React from 'react';
import { Rocket } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-slate-950 to-slate-900 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-8 ring-1 ring-white/5">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-semibold">Ready to build your digital family?</h3>
              <p className="mt-2 max-w-2xl text-sm text-slate-300">
                Start with secure logins, role-based access, and a beautiful family tree. Add members, assign admins, and keep data private.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
              >
                <Rocket className="h-4 w-4" /> Get Started
              </a>
              <a
                href="#modules"
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/20 transition hover:bg-white/15"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
