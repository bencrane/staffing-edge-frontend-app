"use client";

import { useAuth } from "@/lib/auth-context";

export default function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight">StaffingEdge</h1>
        <div className="text-sm text-zinc-400 space-y-1">
          <p>Signed in as <span className="text-zinc-100">{user?.role}</span></p>
          <p className="text-xs text-zinc-600">org: {user?.org_id}</p>
          {user?.company_id && (
            <p className="text-xs text-zinc-600">company: {user?.company_id}</p>
          )}
        </div>
        <button
          onClick={logout}
          className="rounded-md border border-zinc-800 px-4 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 hover:border-zinc-600 transition-colors"
        >
          Sign out
        </button>
      </div>
    </main>
  );
}
