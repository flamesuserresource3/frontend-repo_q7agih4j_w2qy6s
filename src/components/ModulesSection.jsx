import React from 'react';
import { Lock, TreePine, CreditCard, Mail, Database } from 'lucide-react';

const modules = [
  {
    title: 'Authentication',
    icon: Lock,
    desc: 'Email + Password with JWT, bcrypt hashing and role-based routing for secure access.',
    badge: 'Security',
  },
  {
    title: 'Family Tree',
    icon: TreePine,
    desc: 'Interactive visualization to explore parents, siblings, cousins and more.',
    badge: 'Visualization',
  },
  {
    title: 'Invitations',
    icon: Mail,
    desc: 'Admins send email invites with secure login links. Unique email per member.',
    badge: 'Onboarding',
  },
  {
    title: 'Payments',
    icon: CreditCard,
    desc: '₹500/year per family. Sandbox integration with Razorpay or Stripe for demos.',
    badge: 'Billing',
  },
  {
    title: 'Data Layer',
    icon: Database,
    desc: 'Designed to persist securely with scalable databases and clean schemas.',
    badge: 'Persistence',
  },
];

export default function ModulesSection() {
  return (
    <section id="modules" className="relative w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Core Functional Modules</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400">
          Everything you need to manage your digital family securely and intuitively.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map(({ title, icon: Icon, desc, badge }) => (
            <div key={title} className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 ring-1 ring-white/5 transition hover:border-slate-700 hover:bg-slate-900">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-medium">{title}</h3>
                </div>
                <span className="rounded-full border border-slate-700 px-2.5 py-0.5 text-xs text-slate-300">{badge}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
