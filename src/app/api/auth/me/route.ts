import { NextResponse } from "next/server";
import { getOexToken, clearAuthCookies } from "@/lib/auth-cookies";
import { oexAuthFetch } from "@/lib/api-server";

export async function GET() {
  const token = await getOexToken();

  if (!token) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const res = await oexAuthFetch("/api/users/me", token);

  if (!res.ok) {
    if (res.status === 401) {
      await clearAuthCookies();
    }
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await res.json();
  return NextResponse.json(user);
}
