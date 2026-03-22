"use client";

import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface RouteGuardProps {
  permission?: string;
  role?: string;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function RouteGuard({ permission, role, children, fallback }: RouteGuardProps) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [user, isLoading, router]);

  if (isLoading) return null;
  if (!user) return null;

  if (role && user.role !== role) {
    return fallback ?? <div className="p-8 text-center text-zinc-500">Access denied</div>;
  }

  if (permission && !user.permissions.includes(permission)) {
    return fallback ?? <div className="p-8 text-center text-zinc-500">Access denied</div>;
  }

  return <>{children}</>;
}
