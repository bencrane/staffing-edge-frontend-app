"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import {
  Phone,
  MessageSquare,
  LayoutDashboard,
  Zap,
  Building2,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/queue", label: "Call Queue", icon: Phone },
  { href: "/conversations", label: "Conversations", icon: MessageSquare },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/automations", label: "Automations", icon: Zap },
  { href: "/companies", label: "Companies", icon: Building2 },
];

export function Sidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-60 flex-col border-r border-zinc-800/50 bg-zinc-950">
      <div className="px-5 py-5">
        <h1 className="text-sm font-semibold tracking-wide text-white">
          StaffingEdge
        </h1>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-100"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-zinc-800/50 px-4 py-4">
        {user && (
          <div className="mb-3">
            <p className="truncate text-sm font-medium text-zinc-200">
              {user.user_id}
            </p>
            <p className="truncate text-xs text-zinc-500">{user.role}</p>
          </div>
        )}
        <button
          onClick={logout}
          className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-zinc-400 transition-colors hover:bg-zinc-900/50 hover:text-zinc-100"
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </button>
      </div>
    </aside>
  );
}
