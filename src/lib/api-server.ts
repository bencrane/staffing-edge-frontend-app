const OEX_BASE = process.env.OEX_API_BASE_URL || "http://localhost:8000";
const DEX_BASE = process.env.DEX_API_BASE_URL || "http://localhost:8001";

export async function oexFetch(path: string, options: RequestInit = {}) {
  return fetch(`${OEX_BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
}

export async function oexAuthFetch(path: string, token: string, options: RequestInit = {}) {
  return fetch(`${OEX_BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  });
}

export async function dexAuthFetch(path: string, token: string, options: RequestInit = {}) {
  return fetch(`${DEX_BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  });
}
