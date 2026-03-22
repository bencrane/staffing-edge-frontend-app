import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ success: true });
  res.cookies.delete("se_token");
  res.cookies.delete("se_dex_token");
  return res;
}
