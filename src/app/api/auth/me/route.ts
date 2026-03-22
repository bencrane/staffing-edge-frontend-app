import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("se_token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  try {
    const [, payloadB64] = token.split(".");
    const payload = JSON.parse(
      Buffer.from(payloadB64, "base64url").toString()
    );

    if (payload.exp && payload.exp * 1000 < Date.now()) {
      const res = NextResponse.json({ error: "Token expired" }, { status: 401 });
      res.cookies.delete("se_token");
      res.cookies.delete("se_dex_token");
      return res;
    }

    return NextResponse.json({
      user_id: payload.sub,
      org_id: payload.org_id,
      company_id: payload.company_id ?? null,
      role: payload.role ?? "user",
      permissions: payload.permissions ?? [],
      auth_method: payload.type ?? "session",
    });
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
