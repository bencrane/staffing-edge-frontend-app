import { NextRequest, NextResponse } from "next/server";
import { setAuthCookies } from "@/lib/auth-cookies";
import { oexFetch } from "@/lib/api-server";

const DEX_BASE = process.env.DEX_API_BASE_URL || "http://localhost:8001";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password required" }, { status: 400 });
    }

    const oexRes = await oexFetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (!oexRes.ok) {
      const err = await oexRes.json().catch(() => ({}));
      return NextResponse.json(
        { error: err.detail || "Invalid credentials" },
        { status: oexRes.status }
      );
    }

    const oexData = await oexRes.json();
    const oexToken = oexData.access_token;

    let dexToken: string | undefined;
    try {
      const dexRes = await fetch(`${DEX_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (dexRes.ok) {
        const dexData = await dexRes.json();
        dexToken = dexData.access_token;
      }
    } catch {
      /* silent */
    }

    await setAuthCookies(oexToken, dexToken);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
