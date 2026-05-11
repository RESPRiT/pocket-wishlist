const BASE = "https://www.kingdomofloathing.com";
const USER_AGENT = "pocket-wishlist/0.5 (+https://kol.resprit.com)";

export class KoLSession {
  private cookies = new Map<string, string>();
  private loggedIn = false;

  async login(username: string, password: string): Promise<void> {
    const form = new URLSearchParams({
      // "/q" suffix puts the login in stealth mode (no chat broadcast).
      loginname: `${username}/q`,
      password,
      secure: "0",
      loggingin: "Yup.",
    });

    const res = await fetch(`${BASE}/login.php`, {
      method: "POST",
      body: form,
      redirect: "manual",
      headers: {
        "User-Agent": USER_AGENT,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    this.absorbCookies(res);

    // Success: KoL responds with 302 and sets a PHPSESSID cookie. A failed
    // login redirects to login.php (with an error param), which we detect by
    // probing main.php below — more reliable than parsing the Location header.
    if (!this.cookies.has("PHPSESSID")) {
      throw new Error("KoL login failed: no PHPSESSID returned");
    }
    const check = await this.fetch("/main.php", { method: "GET" });
    const body = await check.text();
    if (body.includes("login.php") && body.includes("Username:")) {
      throw new Error("KoL login failed: still on login page after auth");
    }
    this.loggedIn = true;
  }

  async fetch(path: string, init: RequestInit = {}): Promise<Response> {
    const headers = new Headers(init.headers);
    headers.set("User-Agent", USER_AGENT);
    headers.set("Cookie", this.cookieHeader());
    const res = await fetch(`${BASE}${path}`, {
      ...init,
      headers,
      redirect: "manual",
    });
    this.absorbCookies(res);
    return res;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  private absorbCookies(res: Response): void {
    const setCookieHeaders = res.headers.getSetCookie?.() ?? [];
    for (const header of setCookieHeaders) {
      const pair = header.split(";", 1)[0] ?? "";
      const eq = pair.indexOf("=");
      if (eq < 0) continue;
      const name = pair.slice(0, eq).trim();
      const value = pair.slice(eq + 1).trim();
      this.cookies.set(name, value);
    }
  }

  private cookieHeader(): string {
    return [...this.cookies.entries()]
      .map(([k, v]) => `${k}=${v}`)
      .join("; ");
  }
}
