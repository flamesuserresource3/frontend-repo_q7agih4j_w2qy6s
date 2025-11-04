import React from 'react';
import { Crown, UserCog, UserCheck, Shield, Ban, Users } from 'lucide-react';

const roles = [
  {
    id: 'super-admin',
    title: 'Super Admin',
    icon: Crown,
    color: 'from-yellow-500/20 to-amber-500/10',
    bullets: [
      'Create / Update / Delete Family Admins',
      'Assign CRUD permissions',
      'Cannot view private family data',
      'Assign up to 2 Sub Admins per family',
      'Handle ₹500/year subscriptions',
    ],
  },
  {
    id: 'family-admin',
    title: 'Family Admin',
    icon: UserCog,
    color: 'from-blue-500/20 to-cyan-500/10',
    bullets: [
      'Create and manage family members',
      'Interactive family tree view',
      'Relationship mapping (parents, siblings, etc.)',
      'Assign up to 2 Sub Admins',
      'Full family structure management',
    ],
  },
  {
    id: 'sub-admin',
    title: 'Sub Admin',
    icon: UserCheck,
    color: 'from-emerald-500/20 to-teal-500/10',
    bullets: [
      'No payment or sensitive access',
      'CRUD operations on members',
      'Maintain data integrity',
      'Works under admin supervision',
    ],
  },
  {
    id: 'member',
    title: 'Family Member',
    icon: Users,
    color: 'from-violet-500/20 to-fuchsia-500/10',
    bullets: [
      'Unique email-based login',
      'View personal profile & family tree',
      'See relationships (parents, siblings, cousins, etc.)',
      'No cross-family access',
    ],
  },
];

export default function RolesSection() {
  return (
    <section id="roles" className="relative w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Role-Based Permissions</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-400">
              Hierarchical control with granular permissions designed for privacy and security.
            </p>
          </div>
          <div className="hidden rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-xs text-slate-300 md:block">
            <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-blue-400" /> RBAC Enabled</div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map(({ id, title, icon: Icon, bullets, color }) => (
            <div
              key={id}
              className={`group relative rounded-2xl border border-slate-800 bg-gradient-to-b ${color} p-6 transition hover:border-slate-700`}
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-medium">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-blue-400/80" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
