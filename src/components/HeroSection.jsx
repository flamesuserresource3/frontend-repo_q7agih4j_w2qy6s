import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, Crown, Users } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for contrast; does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-24 text-center md:py-28">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs text-slate-200 backdrop-blur">
          <Shield className="h-4 w-4 text-blue-400" />
          Secure Family Management
        </span>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          Apna Parivaar
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-slate-300">
          A Digital Family Management System with smart relationship mapping, hierarchical roles, and secure access for every member.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#roles"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
          >
            <Crown className="h-4 w-4" /> Explore Roles
          </a>
          <a
            href="#modules"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/20 transition hover:bg-white/15"
          >
            <Users className="h-4 w-4" /> View Modules
          </a>
        </div>
      </div>
    </section>
  );
}
