"use client";

import { useAuth } from "@/lib/auth-context";

interface GateProps {
  permission?: string;
  role?: string;
  children: React.ReactNode;
}

export function Gate({ permission, role, children }: GateProps) {
  const { user } = useAuth();
  if (!user) return null;
  if (role && user.role !== role) return null;
  if (permission && !user.permissions.includes(permission)) return null;
  return <>{children}</>;
}
