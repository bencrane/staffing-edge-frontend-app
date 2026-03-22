import { cookies } from "next/headers";

const OEX_COOKIE = "se_token";
const DEX_COOKIE = "se_dex_token";

function cookieOptions(maxAge: number) {
  const domain = process.env.COOKIE_DOMAIN || undefined;
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge,
    ...(domain ? { domain } : {}),
  };
}

export async function setAuthCookies(oexToken: string, dexToken?: string) {
  const store = await cookies();
  store.set(OEX_COOKIE, oexToken, cookieOptions(60 * 60 * 24 * 7));
  if (dexToken) {
    store.set(DEX_COOKIE, dexToken, cookieOptions(60 * 60 * 24 * 7));
  }
}

export async function clearAuthCookies() {
  const store = await cookies();
  store.delete(OEX_COOKIE);
  store.delete(DEX_COOKIE);
}

export async function getOexToken(): Promise<string | null> {
  const store = await cookies();
  return store.get(OEX_COOKIE)?.value ?? null;
}

export async function getDexToken(): Promise<string | null> {
  const store = await cookies();
  return store.get(DEX_COOKIE)?.value ?? null;
}
