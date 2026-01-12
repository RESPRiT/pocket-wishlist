globalThis.__nitro_main__ = import.meta.url;
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) {
        return mod.fetch(req);
      }
      if (!promise) {
        promise = loader().then((_mod) => mod = _mod.default || _mod);
      }
      return promise.then((mod2) => mod2.fetch(req));
    }
  };
}
const services = {
  ["ssr"]: lazyService(() => import("./chunks/_/server.mjs"))
};
globalThis.__nitro_vite_envs__ = services;
function lazyInherit(target, source, sourceKey) {
  for (const key2 of [...Object.getOwnPropertyNames(source), ...Object.getOwnPropertySymbols(source)]) {
    if (key2 === "constructor") continue;
    const targetDesc = Object.getOwnPropertyDescriptor(target, key2);
    const desc = Object.getOwnPropertyDescriptor(source, key2);
    let modified = false;
    if (desc.get) {
      modified = true;
      desc.get = targetDesc?.get || function() {
        return this[sourceKey][key2];
      };
    }
    if (desc.set) {
      modified = true;
      desc.set = targetDesc?.set || function(value) {
        this[sourceKey][key2] = value;
      };
    }
    if (!targetDesc?.value && typeof desc.value === "function") {
      modified = true;
      desc.value = function(...args) {
        return this[sourceKey][key2](...args);
      };
    }
    if (modified) Object.defineProperty(target, key2, desc);
  }
}
const FastURL = /* @__PURE__ */ (() => {
  const NativeURL = globalThis.URL;
  const FastURL$1 = class URL {
    #url;
    #href;
    #protocol;
    #host;
    #pathname;
    #search;
    #searchParams;
    #pos;
    constructor(url) {
      if (typeof url === "string") this.#href = url;
      else {
        this.#protocol = url.protocol;
        this.#host = url.host;
        this.#pathname = url.pathname;
        this.#search = url.search;
      }
    }
    static [Symbol.hasInstance](val) {
      return val instanceof NativeURL;
    }
    get _url() {
      if (this.#url) return this.#url;
      this.#url = new NativeURL(this.href);
      this.#href = void 0;
      this.#protocol = void 0;
      this.#host = void 0;
      this.#pathname = void 0;
      this.#search = void 0;
      this.#searchParams = void 0;
      this.#pos = void 0;
      return this.#url;
    }
    get href() {
      if (this.#url) return this.#url.href;
      if (!this.#href) this.#href = `${this.#protocol || "http:"}//${this.#host || "localhost"}${this.#pathname || "/"}${this.#search || ""}`;
      return this.#href;
    }
    #getPos() {
      if (!this.#pos) {
        const url = this.href;
        const protoIndex = url.indexOf("://");
        const pathnameIndex = protoIndex === -1 ? -1 : url.indexOf("/", protoIndex + 4);
        this.#pos = [
          protoIndex,
          pathnameIndex,
          pathnameIndex === -1 ? -1 : url.indexOf("?", pathnameIndex)
        ];
      }
      return this.#pos;
    }
    get pathname() {
      if (this.#url) return this.#url.pathname;
      if (this.#pathname === void 0) {
        const [, pathnameIndex, queryIndex] = this.#getPos();
        if (pathnameIndex === -1) return this._url.pathname;
        this.#pathname = this.href.slice(pathnameIndex, queryIndex === -1 ? void 0 : queryIndex);
      }
      return this.#pathname;
    }
    get search() {
      if (this.#url) return this.#url.search;
      if (this.#search === void 0) {
        const [, pathnameIndex, queryIndex] = this.#getPos();
        if (pathnameIndex === -1) return this._url.search;
        const url = this.href;
        this.#search = queryIndex === -1 || queryIndex === url.length - 1 ? "" : url.slice(queryIndex);
      }
      return this.#search;
    }
    get searchParams() {
      if (this.#url) return this.#url.searchParams;
      if (!this.#searchParams) this.#searchParams = new URLSearchParams(this.search);
      return this.#searchParams;
    }
    get protocol() {
      if (this.#url) return this.#url.protocol;
      if (this.#protocol === void 0) {
        const [protocolIndex] = this.#getPos();
        if (protocolIndex === -1) return this._url.protocol;
        this.#protocol = this.href.slice(0, protocolIndex + 1);
      }
      return this.#protocol;
    }
    toString() {
      return this.href;
    }
    toJSON() {
      return this.href;
    }
  };
  lazyInherit(FastURL$1.prototype, NativeURL.prototype, "_url");
  Object.setPrototypeOf(FastURL$1.prototype, NativeURL.prototype);
  Object.setPrototypeOf(FastURL$1, NativeURL);
  return FastURL$1;
})();
function resolvePortAndHost(opts) {
  const _port = opts.port ?? globalThis.process?.env.PORT ?? 3e3;
  const port2 = typeof _port === "number" ? _port : Number.parseInt(_port, 10);
  if (port2 < 0 || port2 > 65535) throw new RangeError(`Port must be between 0 and 65535 (got "${port2}").`);
  return {
    port: port2,
    hostname: opts.hostname ?? globalThis.process?.env.HOST
  };
}
function fmtURL(host2, port2, secure) {
  if (!host2 || !port2) return;
  if (host2.includes(":")) host2 = `[${host2}]`;
  return `http${secure ? "s" : ""}://${host2}:${port2}/`;
}
function printListening(opts, url) {
  if (!url || (opts.silent ?? globalThis.process?.env?.TEST)) return;
  const _url = new URL(url);
  const allInterfaces = _url.hostname === "[::]" || _url.hostname === "0.0.0.0";
  if (allInterfaces) {
    _url.hostname = "localhost";
    url = _url.href;
  }
  let listeningOn = `➜ Listening on:`;
  let additionalInfo = allInterfaces ? " (all interfaces)" : "";
  if (globalThis.process.stdout?.isTTY) {
    listeningOn = `\x1B[32m${listeningOn}\x1B[0m`;
    url = `\x1B[36m${url}\x1B[0m`;
    additionalInfo = `\x1B[2m${additionalInfo}\x1B[0m`;
  }
  console.log(`${listeningOn} ${url}${additionalInfo}`);
}
function resolveTLSOptions(opts) {
  if (!opts.tls || opts.protocol === "http") return;
  const cert2 = resolveCertOrKey(opts.tls.cert);
  const key2 = resolveCertOrKey(opts.tls.key);
  if (!cert2 && !key2) {
    if (opts.protocol === "https") throw new TypeError("TLS `cert` and `key` must be provided for `https` protocol.");
    return;
  }
  if (!cert2 || !key2) throw new TypeError("TLS `cert` and `key` must be provided together.");
  return {
    cert: cert2,
    key: key2,
    passphrase: opts.tls.passphrase
  };
}
function resolveCertOrKey(value) {
  if (!value) return;
  if (typeof value !== "string") throw new TypeError("TLS certificate and key must be strings in PEM format or file paths.");
  if (value.startsWith("-----BEGIN ")) return value;
  const { readFileSync } = process.getBuiltinModule("node:fs");
  return readFileSync(value, "utf8");
}
function createWaitUntil() {
  const promises2 = /* @__PURE__ */ new Set();
  return {
    waitUntil: (promise) => {
      if (typeof promise?.then !== "function") return;
      promises2.add(Promise.resolve(promise).catch(console.error).finally(() => {
        promises2.delete(promise);
      }));
    },
    wait: () => {
      return Promise.all(promises2);
    }
  };
}
const noColor = /* @__PURE__ */ (() => {
  const env = globalThis.process?.env ?? {};
  return env.NO_COLOR === "1" || env.TERM === "dumb";
})();
const _c = (c, r = 39) => (t) => noColor ? t : `\x1B[${c}m${t}\x1B[${r}m`;
const red = /* @__PURE__ */ _c(31);
const gray = /* @__PURE__ */ _c(90);
function wrapFetch(server) {
  const fetchHandler = server.options.fetch;
  const middleware = server.options.middleware || [];
  return middleware.length === 0 ? fetchHandler : (request) => callMiddleware$1(request, fetchHandler, middleware, 0);
}
function callMiddleware$1(request, fetchHandler, middleware, index) {
  if (index === middleware.length) return fetchHandler(request);
  return middleware[index](request, () => callMiddleware$1(request, fetchHandler, middleware, index + 1));
}
const gracefulShutdownPlugin = (server) => {
  const config = server.options?.gracefulShutdown;
  if (!globalThis.process?.on || config === false || config === void 0 && (process.env.CI || process.env.TEST)) return;
  const gracefulShutdown = config === true || !config?.gracefulTimeout ? Number.parseInt(process.env.SERVER_SHUTDOWN_TIMEOUT || "") || 3 : config.gracefulTimeout;
  const forceShutdown = config === true || !config?.forceTimeout ? Number.parseInt(process.env.SERVER_FORCE_SHUTDOWN_TIMEOUT || "") || 5 : config.forceTimeout;
  let isShuttingDown = false;
  const shutdown = async () => {
    if (isShuttingDown) return;
    isShuttingDown = true;
    const w = process.stderr.write.bind(process.stderr);
    w(gray(`
Shutting down server in ${gracefulShutdown}s...`));
    let timeout;
    await Promise.race([server.close().finally(() => {
      clearTimeout(timeout);
      w(gray(" Server closed.\n"));
    }), new Promise((resolve2) => {
      timeout = setTimeout(() => {
        w(gray(`
Force closing connections in ${forceShutdown}s...`));
        timeout = setTimeout(() => {
          w(red("\nCould not close connections in time, force exiting."));
          resolve2();
        }, forceShutdown * 1e3);
        return server.close(true);
      }, gracefulShutdown * 1e3);
    })]);
    globalThis.process.exit(0);
  };
  for (const sig of ["SIGINT", "SIGTERM"]) globalThis.process.on(sig, shutdown);
};
const FastResponse = Response;
function serve(options) {
  return new BunServer(options);
}
var BunServer = class {
  runtime = "bun";
  options;
  bun = {};
  serveOptions;
  fetch;
  #wait;
  constructor(options) {
    this.options = {
      ...options,
      middleware: [...options.middleware || []]
    };
    for (const plugin of options.plugins || []) plugin(this);
    gracefulShutdownPlugin(this);
    const fetchHandler = wrapFetch(this);
    this.#wait = createWaitUntil();
    this.fetch = (request, server) => {
      Object.defineProperties(request, {
        waitUntil: { value: this.#wait.waitUntil },
        runtime: {
          enumerable: true,
          value: {
            name: "bun",
            bun: { server }
          }
        },
        ip: {
          enumerable: true,
          get() {
            return server?.requestIP(request)?.address;
          }
        }
      });
      return fetchHandler(request);
    };
    const tls = resolveTLSOptions(this.options);
    this.serveOptions = {
      ...resolvePortAndHost(this.options),
      reusePort: this.options.reusePort,
      error: this.options.error,
      ...this.options.bun,
      tls: {
        cert: tls?.cert,
        key: tls?.key,
        passphrase: tls?.passphrase,
        ...this.options.bun?.tls
      },
      fetch: this.fetch
    };
    if (!options.manual) this.serve();
  }
  serve() {
    if (!this.bun.server) this.bun.server = Bun.serve(this.serveOptions);
    printListening(this.options, this.url);
    return Promise.resolve(this);
  }
  get url() {
    const server = this.bun?.server;
    if (!server) return;
    const address = server.address;
    if (address) return fmtURL(address.address, address.port, server.protocol === "https");
    return server.url.href;
  }
  ready() {
    return Promise.resolve(this);
  }
  async close(closeAll) {
    await Promise.all([this.#wait.wait(), Promise.resolve(this.bun?.server?.stop(closeAll))]);
  }
};
const NullProtoObj = /* @__PURE__ */ (() => {
  const e = function() {
  };
  return e.prototype = /* @__PURE__ */ Object.create(null), Object.freeze(e.prototype), e;
})();
const kEventNS = "h3.internal.event.";
const kEventRes = /* @__PURE__ */ Symbol.for(`${kEventNS}res`);
const kEventResHeaders = /* @__PURE__ */ Symbol.for(`${kEventNS}res.headers`);
var H3Event = class {
  app;
  req;
  url;
  context;
  static __is_event__ = true;
  constructor(req, context, app) {
    this.context = context || req.context || new NullProtoObj();
    this.req = req;
    this.app = app;
    const _url = req._url;
    this.url = _url && _url instanceof URL ? _url : new FastURL(req.url);
  }
  get res() {
    return this[kEventRes] ||= new H3EventResponse();
  }
  get runtime() {
    return this.req.runtime;
  }
  waitUntil(promise) {
    this.req.waitUntil?.(promise);
  }
  toString() {
    return `[${this.req.method}] ${this.req.url}`;
  }
  toJSON() {
    return this.toString();
  }
  get node() {
    return this.req.runtime?.node;
  }
  get headers() {
    return this.req.headers;
  }
  get path() {
    return this.url.pathname + this.url.search;
  }
  get method() {
    return this.req.method;
  }
};
var H3EventResponse = class {
  status;
  statusText;
  get headers() {
    return this[kEventResHeaders] ||= new Headers();
  }
};
const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) return defaultStatusCode;
  if (typeof statusCode === "string") statusCode = +statusCode;
  if (statusCode < 100 || statusCode > 599) return defaultStatusCode;
  return statusCode;
}
var HTTPError = class HTTPError2 extends Error {
  get name() {
    return "HTTPError";
  }
  status;
  statusText;
  headers;
  cause;
  data;
  body;
  unhandled;
  static isError(input) {
    return input instanceof Error && input?.name === "HTTPError";
  }
  static status(status, statusText, details) {
    return new HTTPError2({
      ...details,
      statusText,
      status
    });
  }
  constructor(arg1, arg2) {
    let messageInput;
    let details;
    if (typeof arg1 === "string") {
      messageInput = arg1;
      details = arg2;
    } else details = arg1;
    const status = sanitizeStatusCode(details?.status || details?.cause?.status || details?.status || details?.statusCode, 500);
    const statusText = sanitizeStatusMessage(details?.statusText || details?.cause?.statusText || details?.statusText || details?.statusMessage);
    const message = messageInput || details?.message || details?.cause?.message || details?.statusText || details?.statusMessage || [
      "HTTPError",
      status,
      statusText
    ].filter(Boolean).join(" ");
    super(message, { cause: details });
    this.cause = details;
    Error.captureStackTrace?.(this, this.constructor);
    this.status = status;
    this.statusText = statusText || void 0;
    const rawHeaders = details?.headers || details?.cause?.headers;
    this.headers = rawHeaders ? new Headers(rawHeaders) : void 0;
    this.unhandled = details?.unhandled ?? details?.cause?.unhandled ?? void 0;
    this.data = details?.data;
    this.body = details?.body;
  }
  get statusCode() {
    return this.status;
  }
  get statusMessage() {
    return this.statusText;
  }
  toJSON() {
    const unhandled = this.unhandled;
    return {
      status: this.status,
      statusText: this.statusText,
      unhandled,
      message: unhandled ? "HTTPError" : this.message,
      data: unhandled ? void 0 : this.data,
      ...unhandled ? void 0 : this.body
    };
  }
};
function isJSONSerializable(value, _type) {
  if (value === null || value === void 0) return true;
  if (_type !== "object") return _type === "boolean" || _type === "number" || _type === "string";
  if (typeof value.toJSON === "function") return true;
  if (Array.isArray(value)) return true;
  if (typeof value.pipe === "function" || typeof value.pipeTo === "function") return false;
  if (value instanceof NullProtoObj) return true;
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}
const kNotFound = /* @__PURE__ */ Symbol.for("h3.notFound");
const kHandled = /* @__PURE__ */ Symbol.for("h3.handled");
function toResponse(val, event, config = {}) {
  if (typeof val?.then === "function") return (val.catch?.((error) => error) || Promise.resolve(val)).then((resolvedVal) => toResponse(resolvedVal, event, config));
  const response = prepareResponse(val, event, config);
  if (typeof response?.then === "function") return toResponse(response, event, config);
  const { onResponse: onResponse$1 } = config;
  return onResponse$1 ? Promise.resolve(onResponse$1(response, event)).then(() => response) : response;
}
var HTTPResponse = class {
  #headers;
  #init;
  body;
  constructor(body, init) {
    this.body = body;
    this.#init = init;
  }
  get status() {
    return this.#init?.status || 200;
  }
  get statusText() {
    return this.#init?.statusText || "OK";
  }
  get headers() {
    return this.#headers ||= new Headers(this.#init?.headers);
  }
};
function prepareResponse(val, event, config, nested) {
  if (val === kHandled) return new FastResponse(null);
  if (val === kNotFound) val = new HTTPError({
    status: 404,
    message: `Cannot find any route matching [${event.req.method}] ${event.url}`
  });
  if (val && val instanceof Error) {
    const isHTTPError = HTTPError.isError(val);
    const error = isHTTPError ? val : new HTTPError(val);
    if (!isHTTPError) {
      error.unhandled = true;
      if (val?.stack) error.stack = val.stack;
    }
    if (error.unhandled && !config.silent) console.error(error);
    const { onError: onError$1 } = config;
    return onError$1 && !nested ? Promise.resolve(onError$1(error, event)).catch((error$1) => error$1).then((newVal) => prepareResponse(newVal ?? val, event, config, true)) : errorResponse(error, config.debug);
  }
  const preparedRes = event[kEventRes];
  const preparedHeaders = preparedRes?.[kEventResHeaders];
  if (!(val instanceof Response)) {
    const res = prepareResponseBody(val, event, config);
    const status = res.status || preparedRes?.status;
    return new FastResponse(nullBody(event.req.method, status) ? null : res.body, {
      status,
      statusText: res.statusText || preparedRes?.statusText,
      headers: res.headers && preparedHeaders ? mergeHeaders$1(res.headers, preparedHeaders) : res.headers || preparedHeaders
    });
  }
  if (!preparedHeaders || nested || !val.ok) return val;
  try {
    mergeHeaders$1(val.headers, preparedHeaders, val.headers);
    return val;
  } catch {
    return new FastResponse(nullBody(event.req.method, val.status) ? null : val.body, {
      status: val.status,
      statusText: val.statusText,
      headers: mergeHeaders$1(val.headers, preparedHeaders)
    });
  }
}
function mergeHeaders$1(base, overrides, target = new Headers(base)) {
  for (const [name, value] of overrides) if (name === "set-cookie") target.append(name, value);
  else target.set(name, value);
  return target;
}
const frozenHeaders = () => {
  throw new Error("Headers are frozen");
};
var FrozenHeaders = class extends Headers {
  constructor(init) {
    super(init);
    this.set = this.append = this.delete = frozenHeaders;
  }
};
const emptyHeaders = /* @__PURE__ */ new FrozenHeaders({ "content-length": "0" });
const jsonHeaders = /* @__PURE__ */ new FrozenHeaders({ "content-type": "application/json;charset=UTF-8" });
function prepareResponseBody(val, event, config) {
  if (val === null || val === void 0) return {
    body: "",
    headers: emptyHeaders
  };
  const valType = typeof val;
  if (valType === "string") return { body: val };
  if (val instanceof Uint8Array) {
    event.res.headers.set("content-length", val.byteLength.toString());
    return { body: val };
  }
  if (val instanceof HTTPResponse || val?.constructor?.name === "HTTPResponse") return val;
  if (isJSONSerializable(val, valType)) return {
    body: JSON.stringify(val, void 0, config.debug ? 2 : void 0),
    headers: jsonHeaders
  };
  if (valType === "bigint") return {
    body: val.toString(),
    headers: jsonHeaders
  };
  if (val instanceof Blob) {
    const headers2 = new Headers({
      "content-type": val.type,
      "content-length": val.size.toString()
    });
    let filename = val.name;
    if (filename) {
      filename = encodeURIComponent(filename);
      headers2.set("content-disposition", `filename="${filename}"; filename*=UTF-8''${filename}`);
    }
    return {
      body: val.stream(),
      headers: headers2
    };
  }
  if (valType === "symbol") return { body: val.toString() };
  if (valType === "function") return { body: `${val.name}()` };
  return { body: val };
}
function nullBody(method, status) {
  return method === "HEAD" || status === 100 || status === 101 || status === 102 || status === 204 || status === 205 || status === 304;
}
function errorResponse(error, debug) {
  return new FastResponse(JSON.stringify({
    ...error.toJSON(),
    stack: debug && error.stack ? error.stack.split("\n").map((l) => l.trim()) : void 0
  }, void 0, debug ? 2 : void 0), {
    status: error.status,
    statusText: error.statusText,
    headers: error.headers ? mergeHeaders$1(jsonHeaders, error.headers) : new Headers(jsonHeaders)
  });
}
function callMiddleware(event, middleware, handler, index = 0) {
  if (index === middleware.length) return handler(event);
  const fn = middleware[index];
  let nextCalled;
  let nextResult;
  const next = () => {
    if (nextCalled) return nextResult;
    nextCalled = true;
    nextResult = callMiddleware(event, middleware, handler, index + 1);
    return nextResult;
  };
  const ret = fn(event, next);
  return isUnhandledResponse(ret) ? next() : typeof ret?.then === "function" ? ret.then((resolved) => isUnhandledResponse(resolved) ? next() : resolved) : ret;
}
function isUnhandledResponse(val) {
  return val === void 0 || val === kNotFound;
}
function toRequest(input, options) {
  if (typeof input === "string") {
    let url = input;
    if (url[0] === "/") {
      const host2 = "localhost";
      url = `${"http"}://${host2}${url}`;
    }
    return new Request(url, options);
  } else if (input instanceof URL) return new Request(input, options);
  return input;
}
function defineHandler(input) {
  if (typeof input === "function") return handlerWithFetch(input);
  const handler = input.handler || (input.fetch ? function _fetchHandler(event) {
    return input.fetch(event.req);
  } : NoHandler);
  return Object.assign(handlerWithFetch(input.middleware?.length ? function _handlerMiddleware(event) {
    return callMiddleware(event, input.middleware, handler);
  } : handler), input);
}
function handlerWithFetch(handler) {
  if ("fetch" in handler) return handler;
  return Object.assign(handler, { fetch: (req) => {
    if (typeof req === "string") req = new URL(req, "http://_");
    if (req instanceof URL) req = new Request(req);
    const event = new H3Event(req);
    try {
      return Promise.resolve(toResponse(handler(event), event));
    } catch (error) {
      return Promise.resolve(toResponse(error, event));
    }
  } });
}
function defineLazyEventHandler(loader) {
  let handler;
  let promise;
  const resolveLazyHandler = () => {
    if (handler) return Promise.resolve(handler);
    return promise ??= Promise.resolve(loader()).then((r) => {
      handler = toEventHandler(r) || toEventHandler(r.default);
      if (typeof handler !== "function") throw new TypeError("Invalid lazy handler", { cause: { resolved: r } });
      return handler;
    });
  };
  return defineHandler(function lazyHandler(event) {
    return handler ? handler(event) : resolveLazyHandler().then((r) => r(event));
  });
}
function toEventHandler(handler) {
  if (typeof handler === "function") return handler;
  if (typeof handler?.handler === "function") return handler.handler;
  if (typeof handler?.fetch === "function") return function _fetchHandler(event) {
    return handler.fetch(event.req);
  };
}
const NoHandler = () => kNotFound;
var H3Core = class {
  config;
  "~middleware";
  "~routes" = [];
  constructor(config = {}) {
    this["~middleware"] = [];
    this.config = config;
    this.fetch = this.fetch.bind(this);
    this.handler = this.handler.bind(this);
  }
  fetch(request) {
    return this["~request"](request);
  }
  handler(event) {
    const route = this["~findRoute"](event);
    if (route) {
      event.context.params = route.params;
      event.context.matchedRoute = route.data;
    }
    const routeHandler = route?.data.handler || NoHandler;
    const middleware = this["~getMiddleware"](event, route);
    return middleware.length > 0 ? callMiddleware(event, middleware, routeHandler) : routeHandler(event);
  }
  "~request"(request, context) {
    const event = new H3Event(request, context, this);
    let handlerRes;
    try {
      if (this.config.onRequest) {
        const hookRes = this.config.onRequest(event);
        handlerRes = typeof hookRes?.then === "function" ? hookRes.then(() => this.handler(event)) : this.handler(event);
      } else handlerRes = this.handler(event);
    } catch (error) {
      handlerRes = Promise.reject(error);
    }
    return toResponse(handlerRes, event, this.config);
  }
  "~findRoute"(_event) {
  }
  "~addRoute"(_route) {
    this["~routes"].push(_route);
  }
  "~getMiddleware"(_event, route) {
    const routeMiddleware = route?.data.middleware;
    const globalMiddleware2 = this["~middleware"];
    return routeMiddleware ? [...globalMiddleware2, ...routeMiddleware] : globalMiddleware2;
  }
};
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled;
  const status = error.status || 500;
  const url = event.url || new URL(event.req.url);
  if (status === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]"].filter(Boolean).join(" ");
    console.error(`[request error] ${tags} [${event.req.method}] ${url}
`, error);
  }
  const headers2 = {
    "content-type": "application/json",
    "x-content-type-options": "nosniff",
    "x-frame-options": "DENY",
    "referrer-policy": "no-referrer",
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  if (status === 404 || !event.res.headers.has("cache-control")) {
    headers2["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    status,
    statusText: error.statusText,
    message: isSensitive ? "Server Error" : error.message,
    data: isSensitive ? void 0 : error.data
  };
  return {
    status,
    statusText: error.statusText,
    headers: headers2,
    body
  };
}
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
const ENC_SLASH_RE = /%2f/gi;
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/");
  }
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/") ? input : input + "/";
  }
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
const headers = ((m) => function headersRouteRule(event) {
  for (const [key2, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key2, value);
  }
});
const assets = {
  "/assets/_userId-LyQx5X5S.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"de-gp5xSfRfo7OYki7UVEv0KmPl5Fw"',
    "mtime": "2026-01-09T00:20:45.470Z",
    "size": 222,
    "path": "../public/assets/_userId-LyQx5X5S.js"
  },
  "/assets/globals-BKjvpml-.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"a566-KMhs26u1/ypUsHv4d4YkzboAlCc"',
    "mtime": "2026-01-09T00:20:45.470Z",
    "size": 42342,
    "path": "../public/assets/globals-BKjvpml-.css"
  },
  "/assets/globals-BKjvpml-.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": '"1ceb-B8faG8g+SRFKVHZnuRQTUeIHcwc"',
    "mtime": "2026-01-09T00:20:45.901Z",
    "size": 7403,
    "path": "../public/assets/globals-BKjvpml-.css.br"
  },
  "/assets/globals-BKjvpml-.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": '"210a-x+8x7YIJfQhPx5VGxwpb95v/jfg"',
    "mtime": "2026-01-09T00:20:45.877Z",
    "size": 8458,
    "path": "../public/assets/globals-BKjvpml-.css.gz"
  },
  "/assets/index-BLGFt1pz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2970e-NC/hiR+KlycqQjtsBCtacmW2Pec"',
    "mtime": "2026-01-09T00:20:45.470Z",
    "size": 169742,
    "path": "../public/assets/index-BLGFt1pz.js"
  },
  "/assets/index-BLGFt1pz.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": '"a50f-RjalQNjX8pJ6LYfMRdIkopc5XNs"',
    "mtime": "2026-01-09T00:20:46.045Z",
    "size": 42255,
    "path": "../public/assets/index-BLGFt1pz.js.br"
  },
  "/assets/index-BLGFt1pz.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": '"c0f6-nXqRpDYwLPe0I/6WrzSzNdVhgf0"',
    "mtime": "2026-01-09T00:20:45.877Z",
    "size": 49398,
    "path": "../public/assets/index-BLGFt1pz.js.gz"
  },
  "/assets/inter-cyrillic-ext-wght-normal-BOeWTOD4.woff2": {
    "type": "font/woff2",
    "etag": '"6568-cF1iUGbboMFZ8TfnP5HiMgl9II0"',
    "mtime": "2026-01-09T00:20:45.470Z",
    "size": 25960,
    "path": "../public/assets/inter-cyrillic-ext-wght-normal-BOeWTOD4.woff2"
  },
  "/assets/inter-cyrillic-wght-normal-DqGufNeO.woff2": {
    "type": "font/woff2",
    "etag": '"493c-n3Oy9D6jvzfMjpClqox+Zo7ERQQ"',
    "mtime": "2026-01-09T00:20:45.470Z",
    "size": 18748,
    "path": "../public/assets/inter-cyrillic-wght-normal-DqGufNeO.woff2"
  },
  "/assets/inter-greek-ext-wght-normal-DlzME5K_.woff2": {
    "type": "font/woff2",
    "etag": '"2be0-BP5iTzJeB8nLqYAgKpWNi5o1Zm8"',
    "mtime": "2026-01-09T00:20:45.470Z",
    "size": 11232,
    "path": "../public/assets/inter-greek-ext-wght-normal-DlzME5K_.woff2"
  },
  "/assets/inter-greek-wght-normal-CkhJZR-_.woff2": {
    "type": "font/woff2",
    "etag": '"4a34-xor/hj4YNqI52zFecXnUbzQ4Xs4"',
    "mtime": "2026-01-09T00:20:45.470Z",
    "size": 18996,
    "path": "../public/assets/inter-greek-wght-normal-CkhJZR-_.woff2"
  },
  "/assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2": {
    "type": "font/woff2",
    "etag": '"14c4c-zz61D7IQFMB9QxHvTAOk/Vh4ibQ"',
    "mtime": "2026-01-09T00:20:45.470Z",
    "size": 85068,
    "path": "../public/assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2"
  },
  "/assets/inter-latin-wght-normal-Dx4kXJAl.woff2": {
    "type": "font/woff2",
    "etag": '"bc80-8R1ym7Ck2DUNLqPQ/AYs9u8tUpg"',
    "mtime": "2026-01-09T00:20:45.470Z",
    "size": 48256,
    "path": "../public/assets/inter-latin-wght-normal-Dx4kXJAl.woff2"
  },
  "/assets/inter-vietnamese-wght-normal-CBcvBZtf.woff2": {
    "type": "font/woff2",
    "etag": '"280c-nBythjoDQ0+5wVAendJ6wU7Xz2M"',
    "mtime": "2026-01-09T00:20:45.470Z",
    "size": 10252,
    "path": "../public/assets/inter-vietnamese-wght-normal-CBcvBZtf.woff2"
  },
  "/assets/main-CvxsI486.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"75f78-TqB79Yscw56tjLf+NiHMBOnAuCw"',
    "mtime": "2026-01-09T00:20:45.470Z",
    "size": 483192,
    "path": "../public/assets/main-CvxsI486.js"
  },
  "/assets/main-CvxsI486.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": '"1f6d0-KyXgKVQFovsDURy2dkLPole9mqg"',
    "mtime": "2026-01-09T00:20:46.413Z",
    "size": 128720,
    "path": "../public/assets/main-CvxsI486.js.br"
  },
  "/assets/main-CvxsI486.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": '"248f7-5JyQy3S17dnGqW0CbNBqJXdZbLM"',
    "mtime": "2026-01-09T00:20:45.881Z",
    "size": 149751,
    "path": "../public/assets/main-CvxsI486.js.gz"
  },
  "/assets/roboto-mono-cyrillic-ext-wght-normal-BUDPrIko.woff2": {
    "type": "font/woff2",
    "etag": '"8c48-JWszoVQQGH+plhWK8YzOpH5ZaGc"',
    "mtime": "2026-01-09T00:20:45.470Z",
    "size": 35912,
    "path": "../public/assets/roboto-mono-cyrillic-ext-wght-normal-BUDPrIko.woff2"
  },
  "/assets/roboto-mono-cyrillic-wght-normal-HUlVHixE.woff2": {
    "type": "font/woff2",
    "etag": '"48a0-IlSemmBDrPteZb8dn7l+uQOD3Kc"',
    "mtime": "2026-01-09T00:20:45.470Z",
    "size": 18592,
    "path": "../public/assets/roboto-mono-cyrillic-wght-normal-HUlVHixE.woff2"
  },
  "/assets/roboto-mono-greek-wght-normal-BJJTbwTT.woff2": {
    "type": "font/woff2",
    "etag": '"36dc-TjzhIPoiDvUFUnSado4qLJkoY94"',
    "mtime": "2026-01-09T00:20:45.470Z",
    "size": 14044,
    "path": "../public/assets/roboto-mono-greek-wght-normal-BJJTbwTT.woff2"
  },
  "/assets/roboto-mono-latin-ext-wght-normal-QAYlOegK.woff2": {
    "type": "font/woff2",
    "etag": '"5984-rwi73il4iTqQTHk/QMyawM939KY"',
    "mtime": "2026-01-09T00:20:45.470Z",
    "size": 22916,
    "path": "../public/assets/roboto-mono-latin-ext-wght-normal-QAYlOegK.woff2"
  },
  "/assets/roboto-mono-latin-wght-normal-CZtBPCCa.woff2": {
    "type": "font/woff2",
    "etag": '"801c-7eevvoh6cPIpk9On2hCwn9WP8zs"',
    "mtime": "2026-01-09T00:20:45.470Z",
    "size": 32796,
    "path": "../public/assets/roboto-mono-latin-wght-normal-CZtBPCCa.woff2"
  },
  "/assets/roboto-mono-vietnamese-wght-normal-DlC-zuDL.woff2": {
    "type": "font/woff2",
    "etag": '"2844-jlx8KeGe0f0MzkG4ZzSVnTjckb8"',
    "mtime": "2026-01-09T00:20:45.470Z",
    "size": 10308,
    "path": "../public/assets/roboto-mono-vietnamese-wght-normal-DlC-zuDL.woff2"
  },
  "/assets/textures-GlTIGsta.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"8bd-D+kYcwl0EBou6evJlSMsbSBv4/o"',
    "mtime": "2026-01-09T00:20:45.470Z",
    "size": 2237,
    "path": "../public/assets/textures-GlTIGsta.css"
  },
  "/assets/textures-GlTIGsta.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": '"355-MKvB2nWfpg9jggkCIwRi+h2z/eI"',
    "mtime": "2026-01-09T00:20:45.877Z",
    "size": 853,
    "path": "../public/assets/textures-GlTIGsta.css.br"
  },
  "/assets/textures-GlTIGsta.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": '"3b1-AxtVn93l2BTMnjoVgxE2A2tlhJE"',
    "mtime": "2026-01-09T00:20:45.873Z",
    "size": 945,
    "path": "../public/assets/textures-GlTIGsta.css.gz"
  },
  "/itemimages/dark/2002catalog.png": {
    "type": "image/png",
    "etag": '"18b-e+PaqYCYbLuoMkv77hLkDFs25CU"',
    "mtime": "2026-01-09T00:20:45.234Z",
    "size": 395,
    "path": "../public/itemimages/dark/2002catalog.png"
  },
  "/itemimages/dark/acuteangel.png": {
    "type": "image/png",
    "etag": '"1e8-/C+mfKPLoVzZRJ1O35kd/4MqFcE"',
    "mtime": "2026-01-09T00:20:45.234Z",
    "size": 488,
    "path": "../public/itemimages/dark/acuteangel.png"
  },
  "/itemimages/dark/aircharter.png": {
    "type": "image/png",
    "etag": '"17a-y/ifLMH5zLkEgcoOoYrcT5bf+tY"',
    "mtime": "2026-01-09T00:20:45.234Z",
    "size": 378,
    "path": "../public/itemimages/dark/aircharter.png"
  },
  "/itemimages/dark/al_book.png": {
    "type": "image/png",
    "etag": '"17a-TSPS0EAYJH/O7l1ni8HtajHP8vw"',
    "mtime": "2026-01-09T00:20:45.234Z",
    "size": 378,
    "path": "../public/itemimages/dark/al_book.png"
  },
  "/itemimages/dark/aprilcal_box.png": {
    "type": "image/png",
    "etag": '"1c0-2nm6hESfOCpp1zwFlo2ZD8vmYII"',
    "mtime": "2026-01-09T00:20:45.234Z",
    "size": 448,
    "path": "../public/itemimages/dark/aprilcal_box.png"
  },
  "/itemimages/dark/aprilinghat_box.png": {
    "type": "image/png",
    "etag": '"1c1-WOey4JLWTFQezZUYQSDeyoZwEos"',
    "mtime": "2026-01-09T00:20:45.234Z",
    "size": 449,
    "path": "../public/itemimages/dark/aprilinghat_box.png"
  },
  "/itemimages/dark/apronform.png": {
    "type": "image/png",
    "etag": '"191-2h40QXAt6+lVWga43rEuDDo3Yr0"',
    "mtime": "2026-01-09T00:20:45.234Z",
    "size": 401,
    "path": "../public/itemimages/dark/apronform.png"
  },
  "/itemimages/dark/ascepterbox.png": {
    "type": "image/png",
    "etag": '"1ac-UnHkph0UkefSuY693A1STz50jm4"',
    "mtime": "2026-01-09T00:20:45.234Z",
    "size": 428,
    "path": "../public/itemimages/dark/ascepterbox.png"
  },
  "/itemimages/dark/babyyeti.png": {
    "type": "image/png",
    "etag": '"202-cQS9i4XxsYMom4khoQxv58kskuo"',
    "mtime": "2026-01-09T00:20:45.234Z",
    "size": 514,
    "path": "../public/itemimages/dark/babyyeti.png"
  },
  "/itemimages/dark/backcamera_box.png": {
    "type": "image/png",
    "etag": '"201-dk/mP/YxaQglsUIQ/LSAirN4+8Q"',
    "mtime": "2026-01-09T00:20:45.234Z",
    "size": 513,
    "path": "../public/itemimages/dark/backcamera_box.png"
  },
  "/itemimages/dark/badger1.png": {
    "type": "image/png",
    "etag": '"1bd-Yp7KSdhy7RD+Tq69hnxEHubNIp4"',
    "mtime": "2026-01-09T00:20:45.234Z",
    "size": 445,
    "path": "../public/itemimages/dark/badger1.png"
  },
  "/itemimages/dark/bagotricks.png": {
    "type": "image/png",
    "etag": '"1bc-F0G+ey48CRWyKebLG4ofeRfEqc4"',
    "mtime": "2026-01-09T00:20:45.234Z",
    "size": 444,
    "path": "../public/itemimages/dark/bagotricks.png"
  },
  "/itemimages/dark/banderlarva.png": {
    "type": "image/png",
    "etag": '"135-RfnkoMnDms3s6rSsJbTNRsniTRA"',
    "mtime": "2026-01-09T00:20:45.234Z",
    "size": 309,
    "path": "../public/itemimages/dark/banderlarva.png"
  },
  "/itemimages/dark/batfellowbook.png": {
    "type": "image/png",
    "etag": '"190-GVKNIi2jMwvO04G+EcArDczsxAI"',
    "mtime": "2026-01-09T00:20:45.234Z",
    "size": 400,
    "path": "../public/itemimages/dark/batfellowbook.png"
  },
  "/itemimages/dark/batwings_box.png": {
    "type": "image/png",
    "etag": '"1bb-3tE+ZD0UnlA/gMRbGSqBYU2Akmk"',
    "mtime": "2026-01-09T00:20:45.234Z",
    "size": 443,
    "path": "../public/itemimages/dark/batwings_box.png"
  },
  "/itemimages/dark/bbat_larva.png": {
    "type": "image/png",
    "etag": '"183-rCb2cuhpmel15ewTvNLUyJuJdV8"',
    "mtime": "2026-01-09T00:20:45.234Z",
    "size": 387,
    "path": "../public/itemimages/dark/bbat_larva.png"
  },
  "/itemimages/dark/bbattcrate.png": {
    "type": "image/png",
    "etag": '"1d8-w1P9vtfMhluIFapN2YwKFtgWn6Y"',
    "mtime": "2026-01-09T00:20:45.234Z",
    "size": 472,
    "path": "../public/itemimages/dark/bbattcrate.png"
  },
  "/itemimages/dark/beachcombbox.png": {
    "type": "image/png",
    "etag": '"1e9-9Vr6jHEASl9aPe8HNTBgLUXq+/k"',
    "mtime": "2026-01-09T00:20:45.234Z",
    "size": 489,
    "path": "../public/itemimages/dark/beachcombbox.png"
  },
  "/itemimages/dark/beararms.png": {
    "type": "image/png",
    "etag": '"1c1-KIrVOFh/V1+B1sBaieK9cNXqUa0"',
    "mtime": "2026-01-09T00:20:45.234Z",
    "size": 449,
    "path": "../public/itemimages/dark/beararms.png"
  },
  "/itemimages/dark/beercat.png": {
    "type": "image/png",
    "etag": '"171-Mu4lohW87FShFsXEbHX4TB1gSfE"',
    "mtime": "2026-01-09T00:20:45.234Z",
    "size": 369,
    "path": "../public/itemimages/dark/beercat.png"
  },
  "/itemimages/dark/beholderegg.png": {
    "type": "image/png",
    "etag": '"17f-/LC0afj1saUtcVJIAmbJ9N/r55k"',
    "mtime": "2026-01-09T00:20:45.234Z",
    "size": 383,
    "path": "../public/itemimages/dark/beholderegg.png"
  },
  "/itemimages/dark/birdcal_unopened.png": {
    "type": "image/png",
    "etag": '"1e4-pTmA3QSNPCHSwqgPHuYC6mi+KDI"',
    "mtime": "2026-01-09T00:20:45.234Z",
    "size": 484,
    "path": "../public/itemimages/dark/birdcal_unopened.png"
  },
  "/itemimages/dark/book.png": {
    "type": "image/png",
    "etag": '"12e-Erf17few2kuDvBDhKHyO2XPZ8DM"',
    "mtime": "2026-01-09T00:20:45.234Z",
    "size": 302,
    "path": "../public/itemimages/dark/book.png"
  },
  "/itemimages/dark/book2.png": {
    "type": "image/png",
    "etag": '"18f-zHF5M6koGMvMX1VsDex+x2vpW+w"',
    "mtime": "2026-01-09T00:20:45.234Z",
    "size": 399,
    "path": "../public/itemimages/dark/book2.png"
  },
  "/itemimages/dark/book3.png": {
    "type": "image/png",
    "etag": '"1b4-lui8KSW3OfyE5+3e4xlu6XWD75o"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 436,
    "path": "../public/itemimages/dark/book3.png"
  },
  "/itemimages/dark/book4.png": {
    "type": "image/png",
    "etag": '"15a-rZ3qMXuLgC73YWwX/cRP3SlqdSc"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 346,
    "path": "../public/itemimages/dark/book4.png"
  },
  "/itemimages/dark/book5.png": {
    "type": "image/png",
    "etag": '"158-3lAk1bE+nKf4i/C1z4GlP3sD+l8"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 344,
    "path": "../public/itemimages/dark/book5.png"
  },
  "/itemimages/dark/boredtot.png": {
    "type": "image/png",
    "etag": '"167-JdONmwdWEhxWj6/rHbPuGojDQqY"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 359,
    "path": "../public/itemimages/dark/boredtot.png"
  },
  "/itemimages/dark/borishelm.png": {
    "type": "image/png",
    "etag": '"13e-pB4ZLHplUj9fQYOo6EMVa0rzeB8"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 318,
    "path": "../public/itemimages/dark/borishelm.png"
  },
  "/itemimages/dark/bottledpixie.png": {
    "type": "image/png",
    "etag": '"170-ObWzdbl2By/PmbeoE5Em5LUmpoM"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 368,
    "path": "../public/itemimages/dark/bottledpixie.png"
  },
  "/itemimages/dark/boxingpackage.png": {
    "type": "image/png",
    "etag": '"1ae-xZ9lz2U2pn8jBImHTSVMi+Dj7Ic"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 430,
    "path": "../public/itemimages/dark/boxingpackage.png"
  },
  "/itemimages/dark/brcrossbow.png": {
    "type": "image/png",
    "etag": '"190-UnCqIgn79FEr791Z+SIY8tlN4+U"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 400,
    "path": "../public/itemimages/dark/brcrossbow.png"
  },
  "/itemimages/dark/buddybjorn.png": {
    "type": "image/png",
    "etag": '"199-8fINM+Gwob82MfVrgvK673yucpc"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 409,
    "path": "../public/itemimages/dark/buddybjorn.png"
  },
  "/itemimages/dark/camelcalf.png": {
    "type": "image/png",
    "etag": '"156-bDhKyV62kSlwq2eEbdhOybei3Lk"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 342,
    "path": "../public/itemimages/dark/camelcalf.png"
  },
  "/itemimages/dark/campbrochure.png": {
    "type": "image/png",
    "etag": '"184-UnkXNyO7vbhnqRYvadMaamTUJIw"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 388,
    "path": "../public/itemimages/dark/campbrochure.png"
  },
  "/itemimages/dark/canclecform.png": {
    "type": "image/png",
    "etag": '"1be-fhv2LIrGui4dQUwBMg6mYH4MwIA"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 446,
    "path": "../public/itemimages/dark/canclecform.png"
  },
  "/itemimages/dark/cbz_box.png": {
    "type": "image/png",
    "etag": '"145-e6wmCeXVUO3Y6xiiuoYr2ii85QI"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 325,
    "path": "../public/itemimages/dark/cbz_box.png"
  },
  "/itemimages/dark/cccbook.png": {
    "type": "image/png",
    "etag": '"1b0-PDl2s2wdpMAqU6t54C5brDWGRzM"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 432,
    "path": "../public/itemimages/dark/cccbook.png"
  },
  "/itemimages/dark/cccoccoon.png": {
    "type": "image/png",
    "etag": '"192-AznJNqPLkox7JZ2NsS7+yQoCCrg"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 402,
    "path": "../public/itemimages/dark/cccoccoon.png"
  },
  "/itemimages/dark/ccsword_box.png": {
    "type": "image/png",
    "etag": '"1cc-3/I1O4of7DBa+bcr8TE9ifGszN4"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 460,
    "path": "../public/itemimages/dark/ccsword_box.png"
  },
  "/itemimages/dark/cghostbox.png": {
    "type": "image/png",
    "etag": '"1b6-sPFSsXAgFifnd52i7CdA2881V5c"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 438,
    "path": "../public/itemimages/dark/cghostbox.png"
  },
  "/itemimages/dark/chairhat.png": {
    "type": "image/png",
    "etag": '"145-m1m3cjWchBRsYvGRR4KY+R7Y2WE"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 325,
    "path": "../public/itemimages/dark/chairhat.png"
  },
  "/itemimages/dark/chessset.png": {
    "type": "image/png",
    "etag": '"13c-3XJ9dtqfigRC4bk/zZHID9syS1g"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 316,
    "path": "../public/itemimages/dark/chessset.png"
  },
  "/itemimages/dark/chrysalis.png": {
    "type": "image/png",
    "etag": '"16f-bljKGvxx+arft93Pa52C4gd7RGk"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 367,
    "path": "../public/itemimages/dark/chrysalis.png"
  },
  "/itemimages/dark/cigarbox.png": {
    "type": "image/png",
    "etag": '"1a7-C8x8NJzZP0lzFgAFEIlypd8glFM"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 423,
    "path": "../public/itemimages/dark/cigarbox.png"
  },
  "/itemimages/dark/cinchobox.png": {
    "type": "image/png",
    "etag": '"16c-cR3CdCWo0KbrP1KPCsKnS4M76eQ"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 364,
    "path": "../public/itemimages/dark/cinchobox.png"
  },
  "/itemimages/dark/cloakepattern.png": {
    "type": "image/png",
    "etag": '"1dc-zirh87LiZjUmbwzFM23FAqFXhYU"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 476,
    "path": "../public/itemimages/dark/cloakepattern.png"
  },
  "/itemimages/dark/cloneegg.png": {
    "type": "image/png",
    "etag": '"196-eRkMtPCHo6DrpGbYo9VMwbFXGdk"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 406,
    "path": "../public/itemimages/dark/cloneegg.png"
  },
  "/itemimages/dark/cmcabinet_box.png": {
    "type": "image/png",
    "etag": '"1d8-9pOcHH1AYcuT8GdHtZJ7ZAGCGQs"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 472,
    "path": "../public/itemimages/dark/cmcabinet_box.png"
  },
  "/itemimages/dark/cmkey.png": {
    "type": "image/png",
    "etag": '"196-DLdPhjx0maz3IuXImTNR58Crhcw"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 406,
    "path": "../public/itemimages/dark/cmkey.png"
  },
  "/itemimages/dark/cmonkey1.png": {
    "type": "image/png",
    "etag": '"188-MvmO1PvylbAO0MqROtiF72lQtSU"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 392,
    "path": "../public/itemimages/dark/cmonkey1.png"
  },
  "/itemimages/dark/coffinlid.png": {
    "type": "image/png",
    "etag": '"19c-C7fsrsJ/EXmbuoFjh4NVzqNLSqk"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 412,
    "path": "../public/itemimages/dark/coffinlid.png"
  },
  "/itemimages/dark/commaegg.png": {
    "type": "image/png",
    "etag": '"186-ApDcNsDldwd/FGv1GELw7f0YOoM"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 390,
    "path": "../public/itemimages/dark/commaegg.png"
  },
  "/itemimages/dark/consnowglobe.png": {
    "type": "image/png",
    "etag": '"1d0-yAX2WQ9g/GdtZcwBVevOiS0IxoM"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 464,
    "path": "../public/itemimages/dark/consnowglobe.png"
  },
  "/itemimages/dark/cornucopia.png": {
    "type": "image/png",
    "etag": '"1ae-gQKASLyGApXkPt3o+NKB3edPnn4"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 430,
    "path": "../public/itemimages/dark/cornucopia.png"
  },
  "/itemimages/dark/cosmicball.png": {
    "type": "image/png",
    "etag": '"1c9-4xLTyxzKPC8kdlU3NZmXsKn7L44"',
    "mtime": "2026-01-09T00:20:45.238Z",
    "size": 457,
    "path": "../public/itemimages/dark/cosmicball.png"
  },
  "/itemimages/dark/cr_keycode.png": {
    "type": "image/png",
    "etag": '"1da-TcK1atDRvROCMZ6Af+hPY1C1t6s"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 474,
    "path": "../public/itemimages/dark/cr_keycode.png"
  },
  "/itemimages/dark/crate.png": {
    "type": "image/png",
    "etag": '"201-WFkbpCjlWjOE00MYDBcX1Aijs0w"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 513,
    "path": "../public/itemimages/dark/crate.png"
  },
  "/itemimages/dark/cria.png": {
    "type": "image/png",
    "etag": '"14d-MQeyyAUqOHRIfd3s4etiXq1rb78"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 333,
    "path": "../public/itemimages/dark/cria.png"
  },
  "/itemimages/dark/crimbosapling.png": {
    "type": "image/png",
    "etag": '"143-ymHa5F1YqrioCa2a1+umROeJ3Z0"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 323,
    "path": "../public/itemimages/dark/crimbosapling.png"
  },
  "/itemimages/dark/csbackpack.png": {
    "type": "image/png",
    "etag": '"1b1-ZTwDigzEZViiSZOQ5hdj6XfmLLU"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 433,
    "path": "../public/itemimages/dark/csbackpack.png"
  },
  "/itemimages/dark/cultistshortsbag.png": {
    "type": "image/png",
    "etag": '"1e0-rQHzrO0jjf9h1TDGGPPdzmvcCD8"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 480,
    "path": "../public/itemimages/dark/cultistshortsbag.png"
  },
  "/itemimages/dark/cursedmagbox.png": {
    "type": "image/png",
    "etag": '"1df-K6TIX4xltBw9DCbrJseLwKTwYFI"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 479,
    "path": "../public/itemimages/dark/cursedmagbox.png"
  },
  "/itemimages/dark/dandylioncub.png": {
    "type": "image/png",
    "etag": '"202-fDdPiF6TCViffNVF2N5beurny+U"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 514,
    "path": "../public/itemimages/dark/dandylioncub.png"
  },
  "/itemimages/dark/darkjill2.png": {
    "type": "image/png",
    "etag": '"1e6-BjR3bzawRmqSeFGTzy8OlsNZ+rc"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 486,
    "path": "../public/itemimages/dark/darkjill2.png"
  },
  "/itemimages/dark/dartholster_box.png": {
    "type": "image/png",
    "etag": '"1bb-c1dh2MjZc45IcpO8x0H3vTeWtok"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 443,
    "path": "../public/itemimages/dark/dartholster_box.png"
  },
  "/itemimages/dark/dbag_mint.png": {
    "type": "image/png",
    "etag": '"14d-MgjDPXF+e/1ZrDVt0EUmJqIWQZM"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 333,
    "path": "../public/itemimages/dark/dbag_mint.png"
  },
  "/itemimages/dark/deckbox.png": {
    "type": "image/png",
    "etag": '"1d0-2wjBf+3Tkz8S3THLJ9yIlXTGWbE"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 464,
    "path": "../public/itemimages/dark/deckbox.png"
  },
  "/itemimages/dark/deflatdod.png": {
    "type": "image/png",
    "etag": '"14e-7OpN8YZMsZjgpdFRDmD6KTgdm7U"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 334,
    "path": "../public/itemimages/dark/deflatdod.png"
  },
  "/itemimages/dark/dentpackage.png": {
    "type": "image/png",
    "etag": '"14f-AEGV915B7Z7fvEHmH0KidzBfMmk"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 335,
    "path": "../public/itemimages/dark/dentpackage.png"
  },
  "/itemimages/dark/discognat.png": {
    "type": "image/png",
    "etag": '"180-KS511CTlDB2WS8LrmjtnXQRcALY"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 384,
    "path": "../public/itemimages/dark/discognat.png"
  },
  "/itemimages/dark/document.png": {
    "type": "image/png",
    "etag": '"1ba-A/udP3wQu2gdn7lfDMFyaq2ky4g"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 442,
    "path": "../public/itemimages/dark/document.png"
  },
  "/itemimages/dark/doppegg.png": {
    "type": "image/png",
    "etag": '"238-0GvioCgt9DDF2s3SENgBSpZwPlU"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 568,
    "path": "../public/itemimages/dark/doppegg.png"
  },
  "/itemimages/dark/dshelmet_box.png": {
    "type": "image/png",
    "etag": '"1dd-8Ik20yuUYPqHBQI7Noh8nkChp68"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 477,
    "path": "../public/itemimages/dark/dshelmet_box.png"
  },
  "/itemimages/dark/dumpsternofire.png": {
    "type": "image/png",
    "etag": '"17c-Gp0FC800KmeLWkvv2yGbhKUoKxA"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 380,
    "path": "../public/itemimages/dark/dumpsternofire.png"
  },
  "/itemimages/dark/ectoegg.png": {
    "type": "image/png",
    "etag": '"196-Nzpk5IQ/nOLE36GmDmSYR56cnHM"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 406,
    "path": "../public/itemimages/dark/ectoegg.png"
  },
  "/itemimages/dark/elfling.png": {
    "type": "image/png",
    "etag": '"120-/PqMfA3Cq8RDDuZxqXn4tO54GlA"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 288,
    "path": "../public/itemimages/dark/elfling.png"
  },
  "/itemimages/dark/elfoplarva.png": {
    "type": "image/png",
    "etag": '"1a5-OGTKYxNSOxAJ/yeralSSvmjx2M8"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 421,
    "path": "../public/itemimages/dark/elfoplarva.png"
  },
  "/itemimages/dark/elvisshades.png": {
    "type": "image/png",
    "etag": '"164-2ylQuLpFzi8/v0O671zLDjRe/Wc"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 356,
    "path": "../public/itemimages/dark/elvisshades.png"
  },
  "/itemimages/dark/emberbox.png": {
    "type": "image/png",
    "etag": '"19a-jM3mhFfinhmQimAlSEbsspjGuT0"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 410,
    "path": "../public/itemimages/dark/emberbox.png"
  },
  "/itemimages/dark/emochip_clean.png": {
    "type": "image/png",
    "etag": '"184-GE5og1CTNUWUU2uWBDqm/fISQvI"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 388,
    "path": "../public/itemimages/dark/emochip_clean.png"
  },
  "/itemimages/dark/envelope.png": {
    "type": "image/png",
    "etag": '"1ca-1bYQMygLfcTb+zapEWW2RHKNJiE"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 458,
    "path": "../public/itemimages/dark/envelope.png"
  },
  "/itemimages/dark/eternitycodbox.png": {
    "type": "image/png",
    "etag": '"18f-p+fdmIgkXq6nF7m38603Kqk7NCU"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 399,
    "path": "../public/itemimages/dark/eternitycodbox.png"
  },
  "/itemimages/dark/exting2box.png": {
    "type": "image/png",
    "etag": '"1de-OZN8gn6cGhwxo1/Gn3v5pIhZSpQ"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 478,
    "path": "../public/itemimages/dark/exting2box.png"
  },
  "/itemimages/dark/factbook.png": {
    "type": "image/png",
    "etag": '"177-ammDjThKz7Axb4AHS+sEik1q/C0"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 375,
    "path": "../public/itemimages/dark/factbook.png"
  },
  "/itemimages/dark/fairyboots.png": {
    "type": "image/png",
    "etag": '"173-qBFSZvP3A1/AFdaqQQV1A/lYYOY"',
    "mtime": "2026-01-09T00:20:45.242Z",
    "size": 371,
    "path": "../public/itemimages/dark/fairyboots.png"
  },
  "/itemimages/dark/famballbox.png": {
    "type": "image/png",
    "etag": '"150-BKRgxs4Leb2dZwyGPaT+ShJzPdo"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 336,
    "path": "../public/itemimages/dark/famballbox.png"
  },
  "/itemimages/dark/fambook_blank.png": {
    "type": "image/png",
    "etag": '"18e-oDyOlxa+CktjVr5fGH0OLuhIVfY"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 398,
    "path": "../public/itemimages/dark/fambook_blank.png"
  },
  "/itemimages/dark/familiar39.png": {
    "type": "image/png",
    "etag": '"333-BTxVJoPMsJAB6fc2Us2rTt6l38E"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 819,
    "path": "../public/itemimages/dark/familiar39.png"
  },
  "/itemimages/dark/fangskit.png": {
    "type": "image/png",
    "etag": '"21f-VP+GrVFZWdagW0LbWQEIH6N+WNg"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 543,
    "path": "../public/itemimages/dark/fangskit.png"
  },
  "/itemimages/dark/ffball.png": {
    "type": "image/png",
    "etag": '"19b-MpbuoQOzi0FGy/PbeeOjKGi9D2k"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 411,
    "path": "../public/itemimages/dark/ffball.png"
  },
  "/itemimages/dark/fireworksbox.png": {
    "type": "image/png",
    "etag": '"17d-ar3x0DwYR7wgporonBl496aUyFw"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 381,
    "path": "../public/itemimages/dark/fireworksbox.png"
  },
  "/itemimages/dark/fistoutline.png": {
    "type": "image/png",
    "etag": '"16f-EOgj83csTWIl97GM+DW2sQlNC88"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 367,
    "path": "../public/itemimages/dark/fistoutline.png"
  },
  "/itemimages/dark/floristform.png": {
    "type": "image/png",
    "etag": '"1db-I9nPZCYRNZSZJ2IV95uNS+rgrGw"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 475,
    "path": "../public/itemimages/dark/floristform.png"
  },
  "/itemimages/dark/folderholder.png": {
    "type": "image/png",
    "etag": '"1cb-dUeCNw3NtwMnAiDA80aFlthZdJo"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 459,
    "path": "../public/itemimages/dark/folderholder.png"
  },
  "/itemimages/dark/fr_packet.png": {
    "type": "image/png",
    "etag": '"1c0-xDijiQQuDfBuIWq0HiQkC2evYlc"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 448,
    "path": "../public/itemimages/dark/fr_packet.png"
  },
  "/itemimages/dark/frankenlarva.png": {
    "type": "image/png",
    "etag": '"1c3-5aoBX9Pu+QVxRAKOfu0dDCrV1y0"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 451,
    "path": "../public/itemimages/dark/frankenlarva.png"
  },
  "/itemimages/dark/freshcoat.png": {
    "type": "image/png",
    "etag": '"1eb-2X1afP3E/Mh6A0VayZ5FOfbfHmI"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 491,
    "path": "../public/itemimages/dark/freshcoat.png"
  },
  "/itemimages/dark/gapants.png": {
    "type": "image/png",
    "etag": '"19e-CttYJL7LEK3Fnf/vkcYEfEkMeAQ"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 414,
    "path": "../public/itemimages/dark/gapants.png"
  },
  "/itemimages/dark/garter.png": {
    "type": "image/png",
    "etag": '"116-99HKInQcy2HFglIvMHb662mieo0"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 278,
    "path": "../public/itemimages/dark/garter.png"
  },
  "/itemimages/dark/gbottle_cork.png": {
    "type": "image/png",
    "etag": '"194-9qUMIteZpxWP+RcfORvnUIOFf1E"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 404,
    "path": "../public/itemimages/dark/gbottle_cork.png"
  },
  "/itemimages/dark/genelab.png": {
    "type": "image/png",
    "etag": '"1b0-U/F5tAoyx7pnlTPqPQl2fe8ah6Y"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 432,
    "path": "../public/itemimages/dark/genelab.png"
  },
  "/itemimages/dark/ghoboh.png": {
    "type": "image/png",
    "etag": '"1c1-Z7b0cJ8U6JRo99lqY9eNWGK83Mo"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 449,
    "path": "../public/itemimages/dark/ghoboh.png"
  },
  "/itemimages/dark/gingercity.png": {
    "type": "image/png",
    "etag": '"1df-77x7xVbxMwIv+YhScXr0MkCNgdo"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 479,
    "path": "../public/itemimages/dark/gingercity.png"
  },
  "/itemimages/dark/godlob_egg.png": {
    "type": "image/png",
    "etag": '"1a2-fhoWeuKvQxdMrya7vpr4gkVSJTs"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 418,
    "path": "../public/itemimages/dark/godlob_egg.png"
  },
  "/itemimages/dark/greygosling.png": {
    "type": "image/png",
    "etag": '"181-697cE0SYRfNJpysOk23BVCyiJbw"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 385,
    "path": "../public/itemimages/dark/greygosling.png"
  },
  "/itemimages/dark/grinder.png": {
    "type": "image/png",
    "etag": '"172-PSwr6JJ7uPLzDjRbiBQRiC/p368"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 370,
    "path": "../public/itemimages/dark/grinder.png"
  },
  "/itemimages/dark/groosehoose.png": {
    "type": "image/png",
    "etag": '"1b0-q5W+E/p4sqtdZZqc+QNbmqUkFoI"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 432,
    "path": "../public/itemimages/dark/groosehoose.png"
  },
  "/itemimages/dark/guzzlrapp.png": {
    "type": "image/png",
    "etag": '"1b8-S23aONIbZ1wsXAOPJpFzxIaESxk"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 440,
    "path": "../public/itemimages/dark/guzzlrapp.png"
  },
  "/itemimages/dark/gygaxlibram.png": {
    "type": "image/png",
    "etag": '"177-fDSbMGoQoTWwG5mkDve2ngSU+Ok"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 375,
    "path": "../public/itemimages/dark/gygaxlibram.png"
  },
  "/itemimages/dark/hand.png": {
    "type": "image/png",
    "etag": '"19d-DLsIUczwopLtGT0tUyoR8KdMBnM"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 413,
    "path": "../public/itemimages/dark/hand.png"
  },
  "/itemimages/dark/headbag.png": {
    "type": "image/png",
    "etag": '"18d-syxdCxDqQyORCz0vUlHyGoNayww"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 397,
    "path": "../public/itemimages/dark/headbag.png"
  },
  "/itemimages/dark/heartcrate.png": {
    "type": "image/png",
    "etag": '"1ae-3v7Y58JuJ6ekgZa0olQXCBVxRXk"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 430,
    "path": "../public/itemimages/dark/heartcrate.png"
  },
  "/itemimages/dark/hippotutu.png": {
    "type": "image/png",
    "etag": '"17f-2QYEn9nWPXsw6WKPv+2pR78iDII"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 383,
    "path": "../public/itemimages/dark/hippotutu.png"
  },
  "/itemimages/dark/hkatana.png": {
    "type": "image/png",
    "etag": '"14d-SnSbgvDDqkqolH2YvcAmBQMehHs"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 333,
    "path": "../public/itemimages/dark/hkatana.png"
  },
  "/itemimages/dark/hobosheepl.png": {
    "type": "image/png",
    "etag": '"1a7-Rm22udWmc9UL0p8KP7wU81efZLc"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 423,
    "path": "../public/itemimages/dark/hobosheepl.png"
  },
  "/itemimages/dark/horserycontract.png": {
    "type": "image/png",
    "etag": '"1c0-2R9JNY1de57TjIvf8YCdfneNNws"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 448,
    "path": "../public/itemimages/dark/horserycontract.png"
  },
  "/itemimages/dark/hyberdeer.png": {
    "type": "image/png",
    "etag": '"1a6-QF/a5YQaQmqgIyVItXESQbu9yFM"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 422,
    "path": "../public/itemimages/dark/hyberdeer.png"
  },
  "/itemimages/dark/iceberglet.png": {
    "type": "image/png",
    "etag": '"171-g4LeoxFXG0srvDuFWhdUK/IWR/Q"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 369,
    "path": "../public/itemimages/dark/iceberglet.png"
  },
  "/itemimages/dark/iunionbag.png": {
    "type": "image/png",
    "etag": '"179-equfXnyeoW3O7fRKBCWTQzs31TQ"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 377,
    "path": "../public/itemimages/dark/iunionbag.png"
  },
  "/itemimages/dark/jarl_fry.png": {
    "type": "image/png",
    "etag": '"14f-FFIQcIr1rHMwyJQio4FuFyqRI8M"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 335,
    "path": "../public/itemimages/dark/jarl_fry.png"
  },
  "/itemimages/dark/jbelt.png": {
    "type": "image/png",
    "etag": '"125-MC0nKoQ6TBzoUhPl5IzX0SC99xk"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 293,
    "path": "../public/itemimages/dark/jbelt.png"
  },
  "/itemimages/dark/jilldark.png": {
    "type": "image/png",
    "etag": '"1cc-+BpGB+IbuweqKQJAOeXAWfiBChE"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 460,
    "path": "../public/itemimages/dark/jilldark.png"
  },
  "/itemimages/dark/jparka_box.png": {
    "type": "image/png",
    "etag": '"1d1-Od/5/XF5D5183CP5Wuz+amkw/N4"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 465,
    "path": "../public/itemimages/dark/jparka_box.png"
  },
  "/itemimages/dark/jujumask.png": {
    "type": "image/png",
    "etag": '"1c0-8QSrSYWlrqaBrBKw2VqscMjoETw"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 448,
    "path": "../public/itemimages/dark/jujumask.png"
  },
  "/itemimages/dark/junecleaverbox.png": {
    "type": "image/png",
    "etag": '"1dc-28BYzeEpr7PeLMCH/tS4ybzDNDo"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 476,
    "path": "../public/itemimages/dark/junecleaverbox.png"
  },
  "/itemimages/dark/kernel.png": {
    "type": "image/png",
    "etag": '"1a6-QL3jKR/HTKWT73T4cgxXOne0gWw"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 422,
    "path": "../public/itemimages/dark/kernel.png"
  },
  "/itemimages/dark/kgbpackage.png": {
    "type": "image/png",
    "etag": '"14c-3u5A90vucz9Q/LCW+vosp8yjae8"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 332,
    "path": "../public/itemimages/dark/kgbpackage.png"
  },
  "/itemimages/dark/kittenburglar.png": {
    "type": "image/png",
    "etag": '"1c7-TvF1m98/vPSTOHipf2Ui+5Fg/AM"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 455,
    "path": "../public/itemimages/dark/kittenburglar.png"
  },
  "/itemimages/dark/kiwi_egg.png": {
    "type": "image/png",
    "etag": '"12d-R+O79Q/pUaUoOBGDv+i9r7w4Lo8"',
    "mtime": "2026-01-09T00:20:45.246Z",
    "size": 301,
    "path": "../public/itemimages/dark/kiwi_egg.png"
  },
  "/itemimages/dark/kloopcoop.png": {
    "type": "image/png",
    "etag": '"1ab-VlV10mCre5QqXdIvslg3ELT1D14"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 427,
    "path": "../public/itemimages/dark/kloopcoop.png"
  },
  "/itemimages/dark/l11voucher.png": {
    "type": "image/png",
    "etag": '"1e0-w+d3URLl8Vcre3HYoMZyXmMcnvw"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 480,
    "path": "../public/itemimages/dark/l11voucher.png"
  },
  "/itemimages/dark/lathebox.png": {
    "type": "image/png",
    "etag": '"1a7-y+U8PkCcAGzr8a4SpigL+/fiooc"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 423,
    "path": "../public/itemimages/dark/lathebox.png"
  },
  "/itemimages/dark/lattecard.png": {
    "type": "image/png",
    "etag": '"173-D7zvTnaTCsb4dLMnkMnyt/EwXag"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 371,
    "path": "../public/itemimages/dark/lattecard.png"
  },
  "/itemimages/dark/leg_club_box.png": {
    "type": "image/png",
    "etag": '"183-cW0tI8NWIaD4C+oSu84AHtZCuwU"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 387,
    "path": "../public/itemimages/dark/leg_club_box.png"
  },
  "/itemimages/dark/leprecondobox.png": {
    "type": "image/png",
    "etag": '"1b2-ZcZxpq1tvd6YasIaasPdgGHylZs"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 434,
    "path": "../public/itemimages/dark/leprecondobox.png"
  },
  "/itemimages/dark/letter.png": {
    "type": "image/png",
    "etag": '"175-MvCleZP7Zc+AnWKP5bwSjdtsH+0"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 373,
    "path": "../public/itemimages/dark/letter.png"
  },
  "/itemimages/dark/lhmlarva.png": {
    "type": "image/png",
    "etag": '"126-u04+EaFj9q1IWN3THHVcztGG7y8"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 294,
    "path": "../public/itemimages/dark/lhmlarva.png"
  },
  "/itemimages/dark/lilprofessoroff.png": {
    "type": "image/png",
    "etag": '"19d-rmFHXcrU/mzSkdtGv+kbll1/VUo"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 413,
    "path": "../public/itemimages/dark/lilprofessoroff.png"
  },
  "/itemimages/dark/llknife.png": {
    "type": "image/png",
    "etag": '"172-jfP5mYOMI9utwlq7P3ZZ7tbzxk8"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 370,
    "path": "../public/itemimages/dark/llknife.png"
  },
  "/itemimages/dark/lovebugjuice.png": {
    "type": "image/png",
    "etag": '"19a-Xtnbdye+aI/9+pIB1O/KZeI28T8"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 410,
    "path": "../public/itemimages/dark/lovebugjuice.png"
  },
  "/itemimages/dark/lovelocketbox.png": {
    "type": "image/png",
    "etag": '"1e0-fRJwN8VIsCLt/741zxLnjPs5Ja4"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 480,
    "path": "../public/itemimages/dark/lovelocketbox.png"
  },
  "/itemimages/dark/machelfcapsule.png": {
    "type": "image/png",
    "etag": '"179-10FyUluzyAnwQ2YALKIMEE5F+yA"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 377,
    "path": "../public/itemimages/dark/machelfcapsule.png"
  },
  "/itemimages/dark/marchhat.png": {
    "type": "image/png",
    "etag": '"128-PUhLEeiQzm3O3n/j3zb5MPI5rgg"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 296,
    "path": "../public/itemimages/dark/marchhat.png"
  },
  "/itemimages/dark/may4swordkit.png": {
    "type": "image/png",
    "etag": '"1d5-VuMJJsbP/NzwDa1QdYeBP6yu1FA"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 469,
    "path": "../public/itemimages/dark/may4swordkit.png"
  },
  "/itemimages/dark/maybouquet.png": {
    "type": "image/png",
    "etag": '"188-zTH/ud/jvwMiF6flDkl0r+El9oM"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 392,
    "path": "../public/itemimages/dark/maybouquet.png"
  },
  "/itemimages/dark/maydaycontract.png": {
    "type": "image/png",
    "etag": '"1c4-9F9k/6+GtC6rHr4w+4wEiG0ND/4"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 452,
    "path": "../public/itemimages/dark/maydaycontract.png"
  },
  "/itemimages/dark/mayflybait.png": {
    "type": "image/png",
    "etag": '"1c3-qodpCXUZE7UWIGMcfXyWLA2HdfU"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 451,
    "path": "../public/itemimages/dark/mayflybait.png"
  },
  "/itemimages/dark/mayocase.png": {
    "type": "image/png",
    "etag": '"1bf-sXOR1dnv6fw3FpvES/QLfAPDW2A"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 447,
    "path": "../public/itemimages/dark/mayocase.png"
  },
  "/itemimages/dark/maypole.png": {
    "type": "image/png",
    "etag": '"178-JUUJUQOTRwHszIOCEsVdf/4+WLw"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 376,
    "path": "../public/itemimages/dark/maypole.png"
  },
  "/itemimages/dark/meat.png": {
    "type": "image/png",
    "etag": '"175-ppjxAVkvpjfm4D0wVUk4cXBfqbA"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 373,
    "path": "../public/itemimages/dark/meat.png"
  },
  "/itemimages/dark/medium_small.png": {
    "type": "image/png",
    "etag": '"177-3EBDyGEJkBQoAwhXfS2Nvotq/e0"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 375,
    "path": "../public/itemimages/dark/medium_small.png"
  },
  "/itemimages/dark/meteorbook.png": {
    "type": "image/png",
    "etag": '"193-gzgUs/aK9CjpysO2NwXqan/bGMI"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 403,
    "path": "../public/itemimages/dark/meteorbook.png"
  },
  "/itemimages/dark/mimicbaby.png": {
    "type": "image/png",
    "etag": '"174-1AjcITjHMPrFpLB2J8XyKizcei0"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 372,
    "path": "../public/itemimages/dark/mimicbaby.png"
  },
  "/itemimages/dark/modeltrain_box.png": {
    "type": "image/png",
    "etag": '"1d2-/ymUJ7RETb/H4WVSK5d8TK05KXA"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 466,
    "path": "../public/itemimages/dark/modeltrain_box.png"
  },
  "/itemimages/dark/moebiusring_box.png": {
    "type": "image/png",
    "etag": '"155-yoq1Wuus5KbhFWQLO+zSb3pB2sY"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 341,
    "path": "../public/itemimages/dark/moebiusring_box.png"
  },
  "/itemimages/dark/monkeyglove.png": {
    "type": "image/png",
    "etag": '"182-3JsQWcMbhKGk2kD5pGoH8elbhWc"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 386,
    "path": "../public/itemimages/dark/monkeyglove.png"
  },
  "/itemimages/dark/mopinggoth.png": {
    "type": "image/png",
    "etag": '"18e-2LfyLG9iz4w64s+zzXUWAuVrobY"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 398,
    "path": "../public/itemimages/dark/mopinggoth.png"
  },
  "/itemimages/dark/movfeast.png": {
    "type": "image/png",
    "etag": '"1a5-qTGQDN4Yf9rs04w80g7AVK66Qf4"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 421,
    "path": "../public/itemimages/dark/movfeast.png"
  },
  "/itemimages/dark/mracc.png": {
    "type": "image/png",
    "etag": '"15c-OeJS0mUcwIGAyckyogfdZmRp5OA"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 348,
    "path": "../public/itemimages/dark/mracc.png"
  },
  "/itemimages/dark/msyellapuck.png": {
    "type": "image/png",
    "etag": '"176-e2zvmTMXuVN5i16r42dbSP7AzxA"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 374,
    "path": "../public/itemimages/dark/msyellapuck.png"
  },
  "/itemimages/dark/mumtrunk_closed.png": {
    "type": "image/png",
    "etag": '"1ab-k1eCmuFeIikaxdcCqhXRP8rL76Y"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 427,
    "path": "../public/itemimages/dark/mumtrunk_closed.png"
  },
  "/itemimages/dark/mushcatalog.png": {
    "type": "image/png",
    "etag": '"187-HuYRQL+avyv+kMpfwomnSIoOLL4"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 391,
    "path": "../public/itemimages/dark/mushcatalog.png"
  },
  "/itemimages/dark/nanobox.png": {
    "type": "image/png",
    "etag": '"1af-Of93JEPXvmzMF7dfi5lhq9lYtVI"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 431,
    "path": "../public/itemimages/dark/nanobox.png"
  },
  "/itemimages/dark/navelring.png": {
    "type": "image/png",
    "etag": '"168-BCwkHQl8s+7+V+8NByesStt1mJc"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 360,
    "path": "../public/itemimages/dark/navelring.png"
  },
  "/itemimages/dark/nerdgrimoire.png": {
    "type": "image/png",
    "etag": '"183-l0YSzXwxvcVIJkGc3oNJxJuLjL4"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 387,
    "path": "../public/itemimages/dark/nerdgrimoire.png"
  },
  "/itemimages/dark/newyouform.png": {
    "type": "image/png",
    "etag": '"1cc-xo+KtbDxIbcY/DHQXZPrmxCnUhc"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 460,
    "path": "../public/itemimages/dark/newyouform.png"
  },
  "/itemimages/dark/npartyinv.png": {
    "type": "image/png",
    "etag": '"178-2PqjMZaDwjNwbiRgTfeLgAGsoiI"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 376,
    "path": "../public/itemimages/dark/npartyinv.png"
  },
  "/itemimages/dark/nutcracker.png": {
    "type": "image/png",
    "etag": '"198-IEPv/ebP5Lnfe6XKZIdsuxN9awM"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 408,
    "path": "../public/itemimages/dark/nutcracker.png"
  },
  "/itemimages/dark/oliver_deed.png": {
    "type": "image/png",
    "etag": '"17d-nqQLYhFVjCvWP4y4NZR8Yb+7fg8"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 381,
    "path": "../public/itemimages/dark/oliver_deed.png"
  },
  "/itemimages/dark/oliver_package.png": {
    "type": "image/png",
    "etag": '"19d-QgCF1yCwg6zZy1UG6VJwPViKT2Q"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 413,
    "path": "../public/itemimages/dark/oliver_package.png"
  },
  "/itemimages/dark/opshield.png": {
    "type": "image/png",
    "etag": '"1dd-oGVg9znPf/xKPe+UYdKkQ+TabNc"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 477,
    "path": "../public/itemimages/dark/opshield.png"
  },
  "/itemimages/dark/origamikit.png": {
    "type": "image/png",
    "etag": '"1f6-MxvHPA3AyTqcxIqVHXNurXHY/Us"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 502,
    "path": "../public/itemimages/dark/origamikit.png"
  },
  "/itemimages/dark/pantogramgram.png": {
    "type": "image/png",
    "etag": '"482-wMnFKipLNQuvBS/Zlj/IA5EwTDw"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 1154,
    "path": "../public/itemimages/dark/pantogramgram.png"
  },
  "/itemimages/dark/pantscrow.png": {
    "type": "image/png",
    "etag": '"1b9-Bdt90kdawHC1R/adVUaNqzDbLKk"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 441,
    "path": "../public/itemimages/dark/pantscrow.png"
  },
  "/itemimages/dark/pantsgiving.png": {
    "type": "image/png",
    "etag": '"1c8-qhWTTU/ODudTEsYcVR8bKi7/gFc"',
    "mtime": "2026-01-09T00:20:45.250Z",
    "size": 456,
    "path": "../public/itemimages/dark/pantsgiving.png"
  },
  "/itemimages/dark/pastselfpackage.png": {
    "type": "image/png",
    "etag": '"162-TRtEwBDTr5SrnPXBcuthOqZeuqw"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 354,
    "path": "../public/itemimages/dark/pastselfpackage.png"
  },
  "/itemimages/dark/pateagle_sleep.png": {
    "type": "image/png",
    "etag": '"1aa-F35CXyeCuXZUCDNperOiTYtSPqg"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 426,
    "path": "../public/itemimages/dark/pateagle_sleep.png"
  },
  "/itemimages/dark/pbr.png": {
    "type": "image/png",
    "etag": '"469-9ds2ykrScIrS1w2anpONKtMqAWs"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 1129,
    "path": "../public/itemimages/dark/pbr.png"
  },
  "/itemimages/dark/pengegg.png": {
    "type": "image/png",
    "etag": '"168-ucesHZdX0fQ7aLKzY4H4H+DB9LY"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 360,
    "path": "../public/itemimages/dark/pengegg.png"
  },
  "/itemimages/dark/pep_catalog.png": {
    "type": "image/png",
    "etag": '"19f-lXDth5xqIFSHQ3TfW2/pjhhl3jo"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 415,
    "path": "../public/itemimages/dark/pep_catalog.png"
  },
  "/itemimages/dark/peridot_box.png": {
    "type": "image/png",
    "etag": '"183-J8dloZQYWnGoaOh2m5RmCXliU6o"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 387,
    "path": "../public/itemimages/dark/peridot_box.png"
  },
  "/itemimages/dark/petejacket.png": {
    "type": "image/png",
    "etag": '"171-IY4+Gi1Vo5I/40Xck4JSa8VmYlI"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 369,
    "path": "../public/itemimages/dark/petejacket.png"
  },
  "/itemimages/dark/pglove_inbox.png": {
    "type": "image/png",
    "etag": '"1a8-HtOeOeKow8EhFaApCZbH4QD+/cg"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 424,
    "path": "../public/itemimages/dark/pglove_inbox.png"
  },
  "/itemimages/dark/pillminderpack.png": {
    "type": "image/png",
    "etag": '"1ee-r7OAVg8/pS3amXdZCZ45ytNnHsg"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 494,
    "path": "../public/itemimages/dark/pillminderpack.png"
  },
  "/itemimages/dark/pilshield.png": {
    "type": "image/png",
    "etag": '"1c1-1V2A+W+fs9VODPsg/YjXqvytu2s"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 449,
    "path": "../public/itemimages/dark/pilshield.png"
  },
  "/itemimages/dark/planula.png": {
    "type": "image/png",
    "etag": '"155-7IgdAjV+VYiEsYuzAFzxPsDBIAk"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 341,
    "path": "../public/itemimages/dark/planula.png"
  },
  "/itemimages/dark/plungebow_box.png": {
    "type": "image/png",
    "etag": '"1a7-brQiHqfpnPE8w0tDvLc6etK/FP8"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 423,
    "path": "../public/itemimages/dark/plungebow_box.png"
  },
  "/itemimages/dark/pokebook.png": {
    "type": "image/png",
    "etag": '"190-UbVW6mruesLmf6rDPinpTPSW9AE"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 400,
    "path": "../public/itemimages/dark/pokebook.png"
  },
  "/itemimages/dark/polyp.png": {
    "type": "image/png",
    "etag": '"182-/1e4m2/sZCDlmhVsQC0wD38CFVk"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 386,
    "path": "../public/itemimages/dark/polyp.png"
  },
  "/itemimages/dark/powerseed.png": {
    "type": "image/png",
    "etag": '"154-5hen9FSL4CEmK3z5HRhQsOLn3yA"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 340,
    "path": "../public/itemimages/dark/powerseed.png"
  },
  "/itemimages/dark/ppkit.png": {
    "type": "image/png",
    "etag": '"1fe-aBk64EZG1WPVR+GcQhxm7bSahSs"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 510,
    "path": "../public/itemimages/dark/ppkit.png"
  },
  "/itemimages/dark/pr_packet.png": {
    "type": "image/png",
    "etag": '"1c9-XZuNXEUQBmYX6dwdg0EUNER2deg"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 457,
    "path": "../public/itemimages/dark/pr_packet.png"
  },
  "/itemimages/dark/pressielarva.png": {
    "type": "image/png",
    "etag": '"181-ATOwtgMz6M1jTqiZfgWP3AfwMAc"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 385,
    "path": "../public/itemimages/dark/pressielarva.png"
  },
  "/itemimages/dark/prisberet_box.png": {
    "type": "image/png",
    "etag": '"1bf-ye6P0SZVMPbJQSbSmhHhaW1iWmo"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 447,
    "path": "../public/itemimages/dark/prisberet_box.png"
  },
  "/itemimages/dark/pto.png": {
    "type": "image/png",
    "etag": '"198-WjkCaahKWTJiJwOj1QoruCDU/oQ"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 408,
    "path": "../public/itemimages/dark/pto.png"
  },
  "/itemimages/dark/punkin.png": {
    "type": "image/png",
    "etag": '"1c3-xnviyVoQUJMpU8rtFjMhXHb2Rgk"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 451,
    "path": "../public/itemimages/dark/punkin.png"
  },
  "/itemimages/dark/radiopackpack.png": {
    "type": "image/png",
    "etag": '"1ce-4ZiJpZ9JkMGyV6WOGDbe2BvbAmo"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 462,
    "path": "../public/itemimages/dark/radiopackpack.png"
  },
  "/itemimages/dark/radlibtome.png": {
    "type": "image/png",
    "etag": '"177-ammDjThKz7Axb4AHS+sEik1q/C0"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 375,
    "path": "../public/itemimages/dark/radlibtome.png"
  },
  "/itemimages/dark/raindoh.png": {
    "type": "image/png",
    "etag": '"18a-kjqaEtdULHOswAusduDRDGwKJBo"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 394,
    "path": "../public/itemimages/dark/raindoh.png"
  },
  "/itemimages/dark/raindrop.png": {
    "type": "image/png",
    "etag": '"f3-6wuYWX1MU5HNOQbWTpQOonlQCS4"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 243,
    "path": "../public/itemimages/dark/raindrop.png"
  },
  "/itemimages/dark/redroe.png": {
    "type": "image/png",
    "etag": '"166-ddt6lKBJmbwV8ZEJyHCtaki4WVs"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 358,
    "path": "../public/itemimages/dark/redroe.png"
  },
  "/itemimages/dark/retrocape0.png": {
    "type": "image/png",
    "etag": '"1fa-hVp1ShwRW9Nrw8Kn+r8mGde5pTk"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 506,
    "path": "../public/itemimages/dark/retrocape0.png"
  },
  "/itemimages/dark/retrospecsbox.png": {
    "type": "image/png",
    "etag": '"176-lwax3QZaEvut79vdixVDcB80GLc"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 374,
    "path": "../public/itemimages/dark/retrospecsbox.png"
  },
  "/itemimages/dark/rip.png": {
    "type": "image/png",
    "etag": '"e0-O7eG6EF9eJU6i2375TEsxlInTQ0"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 224,
    "path": "../public/itemimages/dark/rip.png"
  },
  "/itemimages/dark/robotenderlarva.png": {
    "type": "image/png",
    "etag": '"173-N4mZZUz3FYPX5Ggz8D/wc+ToDoc"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 371,
    "path": "../public/itemimages/dark/robotenderlarva.png"
  },
  "/itemimages/dark/rockgardenbook.png": {
    "type": "image/png",
    "etag": '"1da-mQYdP1zkG+mNXsdJjTJCwDQHWMg"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 474,
    "path": "../public/itemimages/dark/rockgardenbook.png"
  },
  "/itemimages/dark/romcandelbox.png": {
    "type": "image/png",
    "etag": '"1c4-i6uEFhvbo/iExOBfyNAgDrVy4w0"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 452,
    "path": "../public/itemimages/dark/romcandelbox.png"
  },
  "/itemimages/dark/rufusbox.png": {
    "type": "image/png",
    "etag": '"1b6-sdPVaY07fUtm/UCAdJsPQWJDvPI"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 438,
    "path": "../public/itemimages/dark/rufusbox.png"
  },
  "/itemimages/dark/sanehatrack.png": {
    "type": "image/png",
    "etag": '"15b-HWoorgNNVWwQsNG7OU0gJKWPOlM"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 347,
    "path": "../public/itemimages/dark/sanehatrack.png"
  },
  "/itemimages/dark/saugrindbox.png": {
    "type": "image/png",
    "etag": '"1c0-KV9JSmNmOEY2yO4/WycW8ZudGUY"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 448,
    "path": "../public/itemimages/dark/saugrindbox.png"
  },
  "/itemimages/dark/sc_ball.png": {
    "type": "image/png",
    "etag": '"1c1-0eyCwUh3GlvRptYSlki9GEV1bWU"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 449,
    "path": "../public/itemimages/dark/sc_ball.png"
  },
  "/itemimages/dark/sgbadge.png": {
    "type": "image/png",
    "etag": '"176-rAYKufhvKFnMH1anMzyhzdNtUpk"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 374,
    "path": "../public/itemimages/dark/sgbadge.png"
  },
  "/itemimages/dark/shortcheflarva.png": {
    "type": "image/png",
    "etag": '"147-bWXAKYk0a00R5/SAC6YLj2Wv1eQ"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 327,
    "path": "../public/itemimages/dark/shortcheflarva.png"
  },
  "/itemimages/dark/sitvoucher.png": {
    "type": "image/png",
    "etag": '"1ae-xrAmxZ7jjxjmC+SHwIs15yvVN9E"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 430,
    "path": "../public/itemimages/dark/sitvoucher.png"
  },
  "/itemimages/dark/skeletonocp.png": {
    "type": "image/png",
    "etag": '"163-blV0ZPmS85UkP+LmCcI3JLBhsOQ"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 355,
    "path": "../public/itemimages/dark/skeletonocp.png"
  },
  "/itemimages/dark/skibag1.png": {
    "type": "image/png",
    "etag": '"170-tLRFInhItnkf5LRoH5N5Im3v/lU"',
    "mtime": "2026-01-09T00:20:45.254Z",
    "size": 368,
    "path": "../public/itemimages/dark/skibag1.png"
  },
  "/itemimages/dark/snowsuit.png": {
    "type": "image/png",
    "etag": '"19e-r1p8gB2JZCdpFoBa46vn0dWrN+k"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 414,
    "path": "../public/itemimages/dark/snowsuit.png"
  },
  "/itemimages/dark/songboomboxbox.png": {
    "type": "image/png",
    "etag": '"1c4-t2i74W2reeQlvF9iPt/3u09xpB4"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 452,
    "path": "../public/itemimages/dark/songboomboxbox.png"
  },
  "/itemimages/dark/sourceterminal.png": {
    "type": "image/png",
    "etag": '"17c-Tbz21+UaradSvRE2ZV1w3po4Jq8"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 380,
    "path": "../public/itemimages/dark/sourceterminal.png"
  },
  "/itemimages/dark/spacechest.png": {
    "type": "image/png",
    "etag": '"1be-W18MGe/njavE0BLUFqtnS7hHPXA"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 446,
    "path": "../public/itemimages/dark/spacechest.png"
  },
  "/itemimages/dark/spooncocoon.png": {
    "type": "image/png",
    "etag": '"180-Y5r2+e+3ehI0qN/SDekvmiOIlbI"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 384,
    "path": "../public/itemimages/dark/spooncocoon.png"
  },
  "/itemimages/dark/spore.png": {
    "type": "image/png",
    "etag": '"e6-LPSH0r6+Mai8vPlW0yRBozi9e8o"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 230,
    "path": "../public/itemimages/dark/spore.png"
  },
  "/itemimages/dark/springshoes_box.png": {
    "type": "image/png",
    "etag": '"1b4-osx1KJUUmVfxm9sL2IAnhzaVRc4"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 436,
    "path": "../public/itemimages/dark/springshoes_box.png"
  },
  "/itemimages/dark/sputtyegg.png": {
    "type": "image/png",
    "etag": '"162-p7fMcQHpyp70EZE3InauJpEOHr0"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 354,
    "path": "../public/itemimages/dark/sputtyegg.png"
  },
  "/itemimages/dark/stillgrill.png": {
    "type": "image/png",
    "etag": '"13a-djnzyMwUREjUrAbQDi3uE4q7F2Y"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 314,
    "path": "../public/itemimages/dark/stillgrill.png"
  },
  "/itemimages/dark/stillsuit_box.png": {
    "type": "image/png",
    "etag": '"1cc-gopMOxYE8i5tsl+d3JqYViloDdM"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 460,
    "path": "../public/itemimages/dark/stillsuit_box.png"
  },
  "/itemimages/dark/subcard.png": {
    "type": "image/png",
    "etag": '"184-HC1eA8JSQONyno7fTl/3x5zIU9c"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 388,
    "path": "../public/itemimages/dark/subcard.png"
  },
  "/itemimages/dark/susstocking.png": {
    "type": "image/png",
    "etag": '"174-5HwYu9XmR8KHG6DepZEEKz7/Voo"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 372,
    "path": "../public/itemimages/dark/susstocking.png"
  },
  "/itemimages/dark/sweats_box.png": {
    "type": "image/png",
    "etag": '"1b6-xWcW5oSpASjuB77am9tPlcTtl3E"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 438,
    "path": "../public/itemimages/dark/sweats_box.png"
  },
  "/itemimages/dark/tamo.png": {
    "type": "image/png",
    "etag": '"25e-+T4lirjNtiaxi792/Wn0iy8lzic"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 606,
    "path": "../public/itemimages/dark/tamo.png"
  },
  "/itemimages/dark/teatree.png": {
    "type": "image/png",
    "etag": '"1b9-64AQrAi/TKdThkdzDn/S5Cmve9w"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 441,
    "path": "../public/itemimages/dark/teatree.png"
  },
  "/itemimages/dark/teethcatalog.png": {
    "type": "image/png",
    "etag": '"180-8jCO9KL1AMF6/i3PnisrCgGs3aU"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 384,
    "path": "../public/itemimages/dark/teethcatalog.png"
  },
  "/itemimages/dark/thankscatalog.png": {
    "type": "image/png",
    "etag": '"1da-4VMXyu9ds1VNWkHbT4htxKX527M"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 474,
    "path": "../public/itemimages/dark/thankscatalog.png"
  },
  "/itemimages/dark/thorpliers.png": {
    "type": "image/png",
    "etag": '"17f-IMgeYkMQylRcoTt8QG8o89vP/OA"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 383,
    "path": "../public/itemimages/dark/thorpliers.png"
  },
  "/itemimages/dark/tote_closed.png": {
    "type": "image/png",
    "etag": '"169-QD1Yx+LoNtiUFz4Ma+LJiv20TsA"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 361,
    "path": "../public/itemimages/dark/tote_closed.png"
  },
  "/itemimages/dark/transmitter.png": {
    "type": "image/png",
    "etag": '"381-FIYhQsw429SlkJ3tGXVFsmASbS4"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 897,
    "path": "../public/itemimages/dark/transmitter.png"
  },
  "/itemimages/dark/travtrou.png": {
    "type": "image/png",
    "etag": '"16d-lJCCVEG7esfQFhrnjPY0eWjMK6Y"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 365,
    "path": "../public/itemimages/dark/travtrou.png"
  },
  "/itemimages/dark/trondisc.png": {
    "type": "image/png",
    "etag": '"1c1-5wi24A4AqynJ0FkCpngrkokJ+Jg"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 449,
    "path": "../public/itemimages/dark/trondisc.png"
  },
  "/itemimages/dark/ts_letter2.png": {
    "type": "image/png",
    "etag": '"188-1DbtMYQVEqbO+5RjMVptnQNcaQU"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 392,
    "path": "../public/itemimages/dark/ts_letter2.png"
  },
  "/itemimages/dark/unbrella1.png": {
    "type": "image/png",
    "etag": '"150-TSAs0p8GEdBSHuzOF9GJqxR27is"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 336,
    "path": "../public/itemimages/dark/unbrella1.png"
  },
  "/itemimages/dark/vampvintbottle.png": {
    "type": "image/png",
    "etag": '"148-8WWAFYwTxQKMNjf5YMbsCt3Exnc"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 328,
    "path": "../public/itemimages/dark/vampvintbottle.png"
  },
  "/itemimages/dark/vivala.png": {
    "type": "image/png",
    "etag": '"1de-grdxMShxJN4rB3Ot7EW5Dsujhvs"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 478,
    "path": "../public/itemimages/dark/vivala.png"
  },
  "/itemimages/dark/vrform.png": {
    "type": "image/png",
    "etag": '"1ed-ieI5Duw5oF+AUvaJM9iFpfBlWX8"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 493,
    "path": "../public/itemimages/dark/vrform.png"
  },
  "/itemimages/dark/waflarva.png": {
    "type": "image/png",
    "etag": '"214-B4Alh5y6u5pIytP8kIDtyXBeUms"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 532,
    "path": "../public/itemimages/dark/waflarva.png"
  },
  "/itemimages/dark/wardrobe.png": {
    "type": "image/png",
    "etag": '"1ab-jsszjp2xz78Z6Ul4j7l0a+8fPgg"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 427,
    "path": "../public/itemimages/dark/wardrobe.png"
  },
  "/itemimages/dark/waxlips.png": {
    "type": "image/png",
    "etag": '"191-AF2uOhWYdx2ul0MFUItySDa6QvM"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 401,
    "path": "../public/itemimages/dark/waxlips.png"
  },
  "/itemimages/dark/wintercatalog.png": {
    "type": "image/png",
    "etag": '"1ba-DxgHYdX3RnWd8WJ3Slx0iMQmNHk"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 442,
    "path": "../public/itemimages/dark/wintercatalog.png"
  },
  "/itemimages/dark/wizhat.png": {
    "type": "image/png",
    "etag": '"1a6-n9QQsqJUKn77RbgB0qVHAKOFO3M"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 422,
    "path": "../public/itemimages/dark/wizhat.png"
  },
  "/itemimages/dark/wormlarva.png": {
    "type": "image/png",
    "etag": '"123-s7S4jOLox9bgMZr/XgHgkRav6NM"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 291,
    "path": "../public/itemimages/dark/wormlarva.png"
  },
  "/itemimages/dark/xobox.png": {
    "type": "image/png",
    "etag": '"1cd-36XdbYvldtIr9KT+YQ8dvr6lRE8"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 461,
    "path": "../public/itemimages/dark/xobox.png"
  },
  "/itemimages/dark/yamcalbox.png": {
    "type": "image/png",
    "etag": '"1d1-8T0BI/vhhoNLvQEsVrqbJnGhDUI"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 465,
    "path": "../public/itemimages/dark/yamcalbox.png"
  },
  "/itemimages/dark/yellapuck.png": {
    "type": "image/png",
    "etag": '"15a-DzdL5c5Ym1NudwguNeBo6R4uVFQ"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 346,
    "path": "../public/itemimages/dark/yellapuck.png"
  },
  "/itemimages/dark/yeticooler.png": {
    "type": "image/png",
    "etag": '"179-q55/DED/cML/LbwUiqUSLprZqpM"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 377,
    "path": "../public/itemimages/dark/yeticooler.png"
  },
  "/itemimages/light/2002catalog.png": {
    "type": "image/png",
    "etag": '"18b-IAJ6qyOf7jRwk61CYe0TArDBGF0"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 395,
    "path": "../public/itemimages/light/2002catalog.png"
  },
  "/itemimages/light/acuteangel.png": {
    "type": "image/png",
    "etag": '"1e8-B49dgEAE7V17ADNvWNqIoz6y7ac"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 488,
    "path": "../public/itemimages/light/acuteangel.png"
  },
  "/itemimages/light/aircharter.png": {
    "type": "image/png",
    "etag": '"17a-8YAxGj5y1PpP3c5hRKOf8WUlU+M"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 378,
    "path": "../public/itemimages/light/aircharter.png"
  },
  "/itemimages/light/al_book.png": {
    "type": "image/png",
    "etag": '"17a-2a8JB/FzrPPFd7ehFQisJCZs/MQ"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 378,
    "path": "../public/itemimages/light/al_book.png"
  },
  "/itemimages/light/aprilcal_box.png": {
    "type": "image/png",
    "etag": '"1c0-/HkDNcJzLpkdAYsfRNy5PsMIOiE"',
    "mtime": "2026-01-09T00:20:45.258Z",
    "size": 448,
    "path": "../public/itemimages/light/aprilcal_box.png"
  },
  "/itemimages/light/aprilinghat_box.png": {
    "type": "image/png",
    "etag": '"1c1-TFb2kIAkwa/YlZPqiLVwgE3u/YM"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 449,
    "path": "../public/itemimages/light/aprilinghat_box.png"
  },
  "/itemimages/light/apronform.png": {
    "type": "image/png",
    "etag": '"191-loW7yUNKKZXs/ZKmrR9paqG8H4c"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 401,
    "path": "../public/itemimages/light/apronform.png"
  },
  "/itemimages/light/ascepterbox.png": {
    "type": "image/png",
    "etag": '"1ac-QpnLRNQsNnwwv2Zm3tbO0Z/WdSU"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 428,
    "path": "../public/itemimages/light/ascepterbox.png"
  },
  "/itemimages/light/babyyeti.png": {
    "type": "image/png",
    "etag": '"202-RU3xYd2zs1ocX7EeWuldVoRBaAo"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 514,
    "path": "../public/itemimages/light/babyyeti.png"
  },
  "/itemimages/light/backcamera_box.png": {
    "type": "image/png",
    "etag": '"201-ks1IvGOHOvjdgbbtVEV0H7N1H5w"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 513,
    "path": "../public/itemimages/light/backcamera_box.png"
  },
  "/itemimages/light/badger1.png": {
    "type": "image/png",
    "etag": '"1bd-YsRKPlV1HSsgrY+g5YIwf8GgSvA"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 445,
    "path": "../public/itemimages/light/badger1.png"
  },
  "/itemimages/light/bagotricks.png": {
    "type": "image/png",
    "etag": '"1bc-geL5WHmSVdxvcNMlFLvc/UeEo9Y"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 444,
    "path": "../public/itemimages/light/bagotricks.png"
  },
  "/itemimages/light/banderlarva.png": {
    "type": "image/png",
    "etag": '"135-fFGZV09WxqxUAKqp/XsSXtUUuuE"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 309,
    "path": "../public/itemimages/light/banderlarva.png"
  },
  "/itemimages/light/batfellowbook.png": {
    "type": "image/png",
    "etag": '"190-2XsJwPqLrK490hDJc9B/NohKvxo"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 400,
    "path": "../public/itemimages/light/batfellowbook.png"
  },
  "/itemimages/light/batwings_box.png": {
    "type": "image/png",
    "etag": '"1bb-9kIH1xbFDpv1vj+3/DASCmohPek"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 443,
    "path": "../public/itemimages/light/batwings_box.png"
  },
  "/itemimages/light/bbat_larva.png": {
    "type": "image/png",
    "etag": '"183-onnbI6OvFM65ONhHMGKgijYljYA"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 387,
    "path": "../public/itemimages/light/bbat_larva.png"
  },
  "/itemimages/light/bbattcrate.png": {
    "type": "image/png",
    "etag": '"1d8-3ENtB8latXCeM2n8hreYiA6a0Do"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 472,
    "path": "../public/itemimages/light/bbattcrate.png"
  },
  "/itemimages/light/beachcombbox.png": {
    "type": "image/png",
    "etag": '"1e9-BZtkm+U0Ak2323SS9YH/0UrYAbw"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 489,
    "path": "../public/itemimages/light/beachcombbox.png"
  },
  "/itemimages/light/beararms.png": {
    "type": "image/png",
    "etag": '"1c1-msJucJKIkHV1ZAI209uzdMB1/Vg"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 449,
    "path": "../public/itemimages/light/beararms.png"
  },
  "/itemimages/light/beercat.png": {
    "type": "image/png",
    "etag": '"171-Fz7/OmPYBf3EsWA6Gp+6z4Ghje4"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 369,
    "path": "../public/itemimages/light/beercat.png"
  },
  "/itemimages/light/beholderegg.png": {
    "type": "image/png",
    "etag": '"17f-ZAv9nNtjDHhQ9KJXcXaG+rRpOB0"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 383,
    "path": "../public/itemimages/light/beholderegg.png"
  },
  "/itemimages/light/birdcal_unopened.png": {
    "type": "image/png",
    "etag": '"1e4-IhMnqr1XQx+nx3DDTd9ieCpIrU4"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 484,
    "path": "../public/itemimages/light/birdcal_unopened.png"
  },
  "/itemimages/light/book.png": {
    "type": "image/png",
    "etag": '"12e-keftah2BzeTsiqBh3uVu34eJlq4"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 302,
    "path": "../public/itemimages/light/book.png"
  },
  "/itemimages/light/book2.png": {
    "type": "image/png",
    "etag": '"18f-LxvCO/bKsGmcCfJ6lbm6K+YGDPg"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 399,
    "path": "../public/itemimages/light/book2.png"
  },
  "/itemimages/light/book3.png": {
    "type": "image/png",
    "etag": '"1b4-d+NBzACsnQtB56+e9CT4J+IYKcc"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 436,
    "path": "../public/itemimages/light/book3.png"
  },
  "/itemimages/light/book4.png": {
    "type": "image/png",
    "etag": '"15a-u7HeuH13XYEvQuFfn31Rdxkceb0"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 346,
    "path": "../public/itemimages/light/book4.png"
  },
  "/itemimages/light/book5.png": {
    "type": "image/png",
    "etag": '"158-gdCRy9hRMyMQDGLv4brTuLewjwU"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 344,
    "path": "../public/itemimages/light/book5.png"
  },
  "/itemimages/light/boredtot.png": {
    "type": "image/png",
    "etag": '"167-/VQIqZ1UVXzVGLFVoRlIEIG1qJg"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 359,
    "path": "../public/itemimages/light/boredtot.png"
  },
  "/itemimages/light/borishelm.png": {
    "type": "image/png",
    "etag": '"13e-2s9/+SVQhgL3yhwNxjQrkrl1Agw"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 318,
    "path": "../public/itemimages/light/borishelm.png"
  },
  "/itemimages/light/bottledpixie.png": {
    "type": "image/png",
    "etag": '"170-4ow5NBqRrnydTl7vViLt3ob5euM"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 368,
    "path": "../public/itemimages/light/bottledpixie.png"
  },
  "/itemimages/light/boxingpackage.png": {
    "type": "image/png",
    "etag": '"1ae-pe8mXbU0U1fqlZ22FOZFJm7XHoI"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 430,
    "path": "../public/itemimages/light/boxingpackage.png"
  },
  "/itemimages/light/brcrossbow.png": {
    "type": "image/png",
    "etag": '"190-LCKQBXelxCWGnR8DSFTgyXTXqjQ"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 400,
    "path": "../public/itemimages/light/brcrossbow.png"
  },
  "/itemimages/light/buddybjorn.png": {
    "type": "image/png",
    "etag": '"199-zGCosPQTIXmgn2xWdU8iTvUA+XA"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 409,
    "path": "../public/itemimages/light/buddybjorn.png"
  },
  "/itemimages/light/camelcalf.png": {
    "type": "image/png",
    "etag": '"156-76N2Wf/2w7888xO2MMyTy0+ZDwU"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 342,
    "path": "../public/itemimages/light/camelcalf.png"
  },
  "/itemimages/light/campbrochure.png": {
    "type": "image/png",
    "etag": '"184-zoKXj4IbNUr2AgAm6injzxDoy3A"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 388,
    "path": "../public/itemimages/light/campbrochure.png"
  },
  "/itemimages/light/canclecform.png": {
    "type": "image/png",
    "etag": '"1be-39dy/HgsI1SUKjq7w4zFSpWXvNo"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 446,
    "path": "../public/itemimages/light/canclecform.png"
  },
  "/itemimages/light/cbz_box.png": {
    "type": "image/png",
    "etag": '"145-/jz+/8v3XG4e+ZEJqGbNoKwAr6Q"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 325,
    "path": "../public/itemimages/light/cbz_box.png"
  },
  "/itemimages/light/cccbook.png": {
    "type": "image/png",
    "etag": '"1b0-TGj7OkNhIFLdi+YaxcDsvLRlR0k"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 432,
    "path": "../public/itemimages/light/cccbook.png"
  },
  "/itemimages/light/cccoccoon.png": {
    "type": "image/png",
    "etag": '"192-Nd3BXhl47dCm27NRpcHUKL63UIQ"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 402,
    "path": "../public/itemimages/light/cccoccoon.png"
  },
  "/itemimages/light/ccsword_box.png": {
    "type": "image/png",
    "etag": '"1cc-jBouUGTZzm7huhzGq/AYJdyEhyI"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 460,
    "path": "../public/itemimages/light/ccsword_box.png"
  },
  "/itemimages/light/cghostbox.png": {
    "type": "image/png",
    "etag": '"1b6-3fCk555A9q0xB7RSt+q0XnTYczE"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 438,
    "path": "../public/itemimages/light/cghostbox.png"
  },
  "/itemimages/light/chairhat.png": {
    "type": "image/png",
    "etag": '"145-waH51LO777uGw6hJ2zq1qvG2M5M"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 325,
    "path": "../public/itemimages/light/chairhat.png"
  },
  "/itemimages/light/chessset.png": {
    "type": "image/png",
    "etag": '"13c-If6M76NOLzpN7BIRCa7qBkR2U+U"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 316,
    "path": "../public/itemimages/light/chessset.png"
  },
  "/itemimages/light/chrysalis.png": {
    "type": "image/png",
    "etag": '"16f-7J5h0Z2ebfVZXPTzjKW2yb7S/qE"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 367,
    "path": "../public/itemimages/light/chrysalis.png"
  },
  "/itemimages/light/cigarbox.png": {
    "type": "image/png",
    "etag": '"1a7-e8HdorZVBjpwnvOPhlIJ9abWl4g"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 423,
    "path": "../public/itemimages/light/cigarbox.png"
  },
  "/itemimages/light/cinchobox.png": {
    "type": "image/png",
    "etag": '"16c-0RcwF/Fd+DS/Lq1aMzH8nV2k2HA"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 364,
    "path": "../public/itemimages/light/cinchobox.png"
  },
  "/itemimages/light/cloakepattern.png": {
    "type": "image/png",
    "etag": '"1dc-ZC91Scj+YMI94JD6Zn/SjJrzr8s"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 476,
    "path": "../public/itemimages/light/cloakepattern.png"
  },
  "/itemimages/light/cloneegg.png": {
    "type": "image/png",
    "etag": '"196-ts5so4YvnIVNDp1VzHZpX+5Ezk8"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 406,
    "path": "../public/itemimages/light/cloneegg.png"
  },
  "/itemimages/light/cmcabinet_box.png": {
    "type": "image/png",
    "etag": '"1d8-Qf5Cp3xfPrLslfqul7aE1xO8Qd0"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 472,
    "path": "../public/itemimages/light/cmcabinet_box.png"
  },
  "/itemimages/light/cmkey.png": {
    "type": "image/png",
    "etag": '"196-TQqpzUWkFcd53z1X5uXZIeRuAi4"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 406,
    "path": "../public/itemimages/light/cmkey.png"
  },
  "/itemimages/light/cmonkey1.png": {
    "type": "image/png",
    "etag": '"188-BvDNf7yMZchhvhhCSQRRhamgjRQ"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 392,
    "path": "../public/itemimages/light/cmonkey1.png"
  },
  "/itemimages/light/coffinlid.png": {
    "type": "image/png",
    "etag": '"19c-E6fqojb6Kaqv2j5YJdb0p5R7aZo"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 412,
    "path": "../public/itemimages/light/coffinlid.png"
  },
  "/itemimages/light/commaegg.png": {
    "type": "image/png",
    "etag": '"186-LmSv39jNa5ET0pffNKzSxKExiIc"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 390,
    "path": "../public/itemimages/light/commaegg.png"
  },
  "/itemimages/light/consnowglobe.png": {
    "type": "image/png",
    "etag": '"1d0-APLOG5iAbKpisG2R1D5W0v8/jnQ"',
    "mtime": "2026-01-09T00:20:45.262Z",
    "size": 464,
    "path": "../public/itemimages/light/consnowglobe.png"
  },
  "/itemimages/light/cornucopia.png": {
    "type": "image/png",
    "etag": '"1ae-c8D9e5fZ6vSOyqB3jSLGLI/COEI"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 430,
    "path": "../public/itemimages/light/cornucopia.png"
  },
  "/itemimages/light/cosmicball.png": {
    "type": "image/png",
    "etag": '"1c9-3kxNyWHZmaWUifN4xTtAsLpZS2c"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 457,
    "path": "../public/itemimages/light/cosmicball.png"
  },
  "/itemimages/light/cr_keycode.png": {
    "type": "image/png",
    "etag": '"1da-uLohciqF6mYpGi+hul9xqDaf1AU"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 474,
    "path": "../public/itemimages/light/cr_keycode.png"
  },
  "/itemimages/light/crate.png": {
    "type": "image/png",
    "etag": '"201-X6NoPnEcnrZ3GIJ6tduO31bAjKA"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 513,
    "path": "../public/itemimages/light/crate.png"
  },
  "/itemimages/light/cria.png": {
    "type": "image/png",
    "etag": '"14d-J4DIZ5zFqeC9GqViaZdTB9VTWO4"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 333,
    "path": "../public/itemimages/light/cria.png"
  },
  "/itemimages/light/crimbosapling.png": {
    "type": "image/png",
    "etag": '"143-H6tW6NZUpnN9+2f0/BjFggyIPRU"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 323,
    "path": "../public/itemimages/light/crimbosapling.png"
  },
  "/itemimages/light/csbackpack.png": {
    "type": "image/png",
    "etag": '"1b1-L6nPCYHmpIHp9jOA/Wy17AMh8Vc"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 433,
    "path": "../public/itemimages/light/csbackpack.png"
  },
  "/itemimages/light/cultistshortsbag.png": {
    "type": "image/png",
    "etag": '"1e0-4T+054TivSfuuOvq+8HlykJZQno"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 480,
    "path": "../public/itemimages/light/cultistshortsbag.png"
  },
  "/itemimages/light/cursedmagbox.png": {
    "type": "image/png",
    "etag": '"1df-0/afk7nSS07euXSitwWWoRSu0Wk"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 479,
    "path": "../public/itemimages/light/cursedmagbox.png"
  },
  "/itemimages/light/dandylioncub.png": {
    "type": "image/png",
    "etag": '"202-90MN2t5/9AhJR2Sb8BLiTSh8/p0"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 514,
    "path": "../public/itemimages/light/dandylioncub.png"
  },
  "/itemimages/light/darkjill2.png": {
    "type": "image/png",
    "etag": '"1e6-D/Qe8LrUCcJAvM1J/ZoUFsUt3kM"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 486,
    "path": "../public/itemimages/light/darkjill2.png"
  },
  "/itemimages/light/dartholster_box.png": {
    "type": "image/png",
    "etag": '"1bb-Yq4JToLXqIrGqVVrFpI9HivbxPY"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 443,
    "path": "../public/itemimages/light/dartholster_box.png"
  },
  "/itemimages/light/dbag_mint.png": {
    "type": "image/png",
    "etag": '"14d-mOiwMUVfF5UWg/lYBJHfAQtFCsE"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 333,
    "path": "../public/itemimages/light/dbag_mint.png"
  },
  "/itemimages/light/deckbox.png": {
    "type": "image/png",
    "etag": '"1d0-OvHZkJeXXBzOx1LOGnAqkksxdCM"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 464,
    "path": "../public/itemimages/light/deckbox.png"
  },
  "/itemimages/light/deflatdod.png": {
    "type": "image/png",
    "etag": '"14e-PWdWIQGlnioUIq2dE6ubvPEM/lw"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 334,
    "path": "../public/itemimages/light/deflatdod.png"
  },
  "/itemimages/light/dentpackage.png": {
    "type": "image/png",
    "etag": '"14f-3PqNCQTj4cX9Zoyqwu22gm3z4dw"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 335,
    "path": "../public/itemimages/light/dentpackage.png"
  },
  "/itemimages/light/discognat.png": {
    "type": "image/png",
    "etag": '"180-PqR4mQ6fSj6EIDcdQ0SS2SmsPBU"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 384,
    "path": "../public/itemimages/light/discognat.png"
  },
  "/itemimages/light/document.png": {
    "type": "image/png",
    "etag": '"1ba-EdhLnmo4l4XGYBFhDXIP2odAxEQ"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 442,
    "path": "../public/itemimages/light/document.png"
  },
  "/itemimages/light/doppegg.png": {
    "type": "image/png",
    "etag": '"238-x4dJogwWU0KovWuCNQ5/NCJvBFQ"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 568,
    "path": "../public/itemimages/light/doppegg.png"
  },
  "/itemimages/light/dshelmet_box.png": {
    "type": "image/png",
    "etag": '"1dd-26qkKoHE6IZ/a8FSlJvC+Nnfa/g"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 477,
    "path": "../public/itemimages/light/dshelmet_box.png"
  },
  "/itemimages/light/dumpsternofire.png": {
    "type": "image/png",
    "etag": '"17c-mikVq7+b4gm9DehFL2jGdGMUluo"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 380,
    "path": "../public/itemimages/light/dumpsternofire.png"
  },
  "/itemimages/light/ectoegg.png": {
    "type": "image/png",
    "etag": '"196-jF3IBjy6wQPFZsaL4X8Hko7Cw28"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 406,
    "path": "../public/itemimages/light/ectoegg.png"
  },
  "/itemimages/light/elfling.png": {
    "type": "image/png",
    "etag": '"120-y/pRTxtsdgJ8ZCQV0Y2c2gF9K/U"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 288,
    "path": "../public/itemimages/light/elfling.png"
  },
  "/itemimages/light/elfoplarva.png": {
    "type": "image/png",
    "etag": '"1a5-+gWB86hUBQKkc/XmcIqiJCSGw00"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 421,
    "path": "../public/itemimages/light/elfoplarva.png"
  },
  "/itemimages/light/elvisshades.png": {
    "type": "image/png",
    "etag": '"164-kl1A7UoFgut2KW/s7tHr58c7NHU"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 356,
    "path": "../public/itemimages/light/elvisshades.png"
  },
  "/itemimages/light/emberbox.png": {
    "type": "image/png",
    "etag": '"19a-BYN/e5eyKROt2wzKv54lrEbl638"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 410,
    "path": "../public/itemimages/light/emberbox.png"
  },
  "/itemimages/light/emochip_clean.png": {
    "type": "image/png",
    "etag": '"184-ld0u/d9Cu5pvusB7HswJr/MQRVU"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 388,
    "path": "../public/itemimages/light/emochip_clean.png"
  },
  "/itemimages/light/envelope.png": {
    "type": "image/png",
    "etag": '"1ca-Myvs59EUHDvffothBmympdY5BdI"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 458,
    "path": "../public/itemimages/light/envelope.png"
  },
  "/itemimages/light/eternitycodbox.png": {
    "type": "image/png",
    "etag": '"18f-spfbvW8JdwZmXIDC+PvJp2iCUKk"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 399,
    "path": "../public/itemimages/light/eternitycodbox.png"
  },
  "/itemimages/light/exting2box.png": {
    "type": "image/png",
    "etag": '"1de-wvzJNjH78FrfO/H+8ynGYgpLgqo"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 478,
    "path": "../public/itemimages/light/exting2box.png"
  },
  "/itemimages/light/factbook.png": {
    "type": "image/png",
    "etag": '"177-jtqQtWXiluwNvkocxFyNPRGclp8"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 375,
    "path": "../public/itemimages/light/factbook.png"
  },
  "/itemimages/light/fairyboots.png": {
    "type": "image/png",
    "etag": '"173-paLBdC1Jcmlk95iuQC7trgI6gmo"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 371,
    "path": "../public/itemimages/light/fairyboots.png"
  },
  "/itemimages/light/famballbox.png": {
    "type": "image/png",
    "etag": '"150-9JRl8rb2/WryXiMSqUGjQget8Lk"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 336,
    "path": "../public/itemimages/light/famballbox.png"
  },
  "/itemimages/light/fambook_blank.png": {
    "type": "image/png",
    "etag": '"18e-Rdme3GwUChirxOm6Ine8masR00E"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 398,
    "path": "../public/itemimages/light/fambook_blank.png"
  },
  "/itemimages/light/familiar39.png": {
    "type": "image/png",
    "etag": '"333-X3B3Ig86adFA/VVvNEQLlkxoRG8"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 819,
    "path": "../public/itemimages/light/familiar39.png"
  },
  "/itemimages/light/fangskit.png": {
    "type": "image/png",
    "etag": '"21f-nPR9/ovqMuyiaBWk0vSxWWj3xHo"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 543,
    "path": "../public/itemimages/light/fangskit.png"
  },
  "/itemimages/light/ffball.png": {
    "type": "image/png",
    "etag": '"19b-rjO49zChsYx1HM7VAlc7JdmrdXc"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 411,
    "path": "../public/itemimages/light/ffball.png"
  },
  "/itemimages/light/fireworksbox.png": {
    "type": "image/png",
    "etag": '"17d-uscmiAjKoIOBkZ5f2sfbR5YXQfg"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 381,
    "path": "../public/itemimages/light/fireworksbox.png"
  },
  "/itemimages/light/fistoutline.png": {
    "type": "image/png",
    "etag": '"16f-htuhlM4cfyUU4rRpTC+d1/uHkGY"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 367,
    "path": "../public/itemimages/light/fistoutline.png"
  },
  "/itemimages/light/floristform.png": {
    "type": "image/png",
    "etag": '"1db-d8RG53jzqXCq1j8nZhuw6Mix/xw"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 475,
    "path": "../public/itemimages/light/floristform.png"
  },
  "/itemimages/light/folderholder.png": {
    "type": "image/png",
    "etag": '"1cb-p4UTwKDmf7rrmf2ELvb+0R+Uddg"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 459,
    "path": "../public/itemimages/light/folderholder.png"
  },
  "/itemimages/light/fr_packet.png": {
    "type": "image/png",
    "etag": '"1c0-IBNBlKs8tKjyCKzkAT+U/iwIMHo"',
    "mtime": "2026-01-09T00:20:45.266Z",
    "size": 448,
    "path": "../public/itemimages/light/fr_packet.png"
  },
  "/itemimages/light/frankenlarva.png": {
    "type": "image/png",
    "etag": '"1c3-RMsI6ajxcA1QYI/T2SIyo64Kit0"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 451,
    "path": "../public/itemimages/light/frankenlarva.png"
  },
  "/itemimages/light/freshcoat.png": {
    "type": "image/png",
    "etag": '"1eb-NT/8Us1PckB+z4n1kbub5HX92rc"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 491,
    "path": "../public/itemimages/light/freshcoat.png"
  },
  "/itemimages/light/gapants.png": {
    "type": "image/png",
    "etag": '"19e-sJ6aMcquaop8VcG1DgKPFwizqCU"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 414,
    "path": "../public/itemimages/light/gapants.png"
  },
  "/itemimages/light/garter.png": {
    "type": "image/png",
    "etag": '"116-hz9jAir7aT7OZ6QmXWhjEJOPCjQ"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 278,
    "path": "../public/itemimages/light/garter.png"
  },
  "/itemimages/light/gbottle_cork.png": {
    "type": "image/png",
    "etag": '"194-PHfv2WH6Cl9FSgCXZ4CBzWH7nGg"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 404,
    "path": "../public/itemimages/light/gbottle_cork.png"
  },
  "/itemimages/light/genelab.png": {
    "type": "image/png",
    "etag": '"1b0-jBW3M7S6UvALpQzif09Z+G8SoIE"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 432,
    "path": "../public/itemimages/light/genelab.png"
  },
  "/itemimages/light/ghoboh.png": {
    "type": "image/png",
    "etag": '"1c1-cU+F8BRqfNhoFOoDKa9NVTBZzAs"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 449,
    "path": "../public/itemimages/light/ghoboh.png"
  },
  "/itemimages/light/gingercity.png": {
    "type": "image/png",
    "etag": '"1df-qDS44eHYYJd9jqcT4jBoj/r/+Bg"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 479,
    "path": "../public/itemimages/light/gingercity.png"
  },
  "/itemimages/light/godlob_egg.png": {
    "type": "image/png",
    "etag": '"1a2-7brmOoeNP3MaLO/5ztGxwg80iNQ"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 418,
    "path": "../public/itemimages/light/godlob_egg.png"
  },
  "/itemimages/light/greygosling.png": {
    "type": "image/png",
    "etag": '"181-FPCkYEmNzaMh3SbHBSQ5aYCTpK0"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 385,
    "path": "../public/itemimages/light/greygosling.png"
  },
  "/itemimages/light/grinder.png": {
    "type": "image/png",
    "etag": '"172-tBpHIGDm0WEYTBKBIA7mRHcq8jo"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 370,
    "path": "../public/itemimages/light/grinder.png"
  },
  "/itemimages/light/groosehoose.png": {
    "type": "image/png",
    "etag": '"1b0-Wf3zOfW2Lyk1AqAdIq4FxvMEW1k"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 432,
    "path": "../public/itemimages/light/groosehoose.png"
  },
  "/itemimages/light/guzzlrapp.png": {
    "type": "image/png",
    "etag": '"1b8-wwt26gfYykHIM/sH9kc8Twcfawo"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 440,
    "path": "../public/itemimages/light/guzzlrapp.png"
  },
  "/itemimages/light/gygaxlibram.png": {
    "type": "image/png",
    "etag": '"177-s7HGZk8dCg4sNlKonfByll0qh3g"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 375,
    "path": "../public/itemimages/light/gygaxlibram.png"
  },
  "/itemimages/light/hand.png": {
    "type": "image/png",
    "etag": '"19d-M1i9cSM+98jsE4xu7FtUErEvrQw"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 413,
    "path": "../public/itemimages/light/hand.png"
  },
  "/itemimages/light/headbag.png": {
    "type": "image/png",
    "etag": '"18d-loD9lpitry2s8O48NZdmBKVATUQ"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 397,
    "path": "../public/itemimages/light/headbag.png"
  },
  "/itemimages/light/heartcrate.png": {
    "type": "image/png",
    "etag": '"1ae-sHUR1arAiwleQt531qnYcdO3rGs"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 430,
    "path": "../public/itemimages/light/heartcrate.png"
  },
  "/itemimages/light/hippotutu.png": {
    "type": "image/png",
    "etag": '"17f-geyCBKOvTxlLhEnHaD4R2WUHPN4"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 383,
    "path": "../public/itemimages/light/hippotutu.png"
  },
  "/itemimages/light/hkatana.png": {
    "type": "image/png",
    "etag": '"14d-xvs962SP6TwDlhLEzdcW8gCDXCo"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 333,
    "path": "../public/itemimages/light/hkatana.png"
  },
  "/itemimages/light/hobosheepl.png": {
    "type": "image/png",
    "etag": '"1a7-KpnqURNGxnimSaDmXU831V7CX20"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 423,
    "path": "../public/itemimages/light/hobosheepl.png"
  },
  "/itemimages/light/horserycontract.png": {
    "type": "image/png",
    "etag": '"1c0-nIFovf7R//ZRA6UNyPAX7ofCh9M"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 448,
    "path": "../public/itemimages/light/horserycontract.png"
  },
  "/itemimages/light/hyberdeer.png": {
    "type": "image/png",
    "etag": '"1a6-TX8/4x5nVex8e4LlBW3Jh7Do0tk"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 422,
    "path": "../public/itemimages/light/hyberdeer.png"
  },
  "/itemimages/light/iceberglet.png": {
    "type": "image/png",
    "etag": '"171-bsmVw5XPx26B1UpgfQ1uqd59rFI"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 369,
    "path": "../public/itemimages/light/iceberglet.png"
  },
  "/itemimages/light/iunionbag.png": {
    "type": "image/png",
    "etag": '"179-U+efsnxVOLxKT7TCuPlxcPmfZic"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 377,
    "path": "../public/itemimages/light/iunionbag.png"
  },
  "/itemimages/light/jarl_fry.png": {
    "type": "image/png",
    "etag": '"14f-qWTmiRV/qe80Dj3J84sSYQsOJ04"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 335,
    "path": "../public/itemimages/light/jarl_fry.png"
  },
  "/itemimages/light/jbelt.png": {
    "type": "image/png",
    "etag": '"125-nCnXfqgLB+o6gSiMVSUl1c5ZBO8"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 293,
    "path": "../public/itemimages/light/jbelt.png"
  },
  "/itemimages/light/jilldark.png": {
    "type": "image/png",
    "etag": '"1cc-TmmqmqxqT+pVXWassTVXid3Qcos"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 460,
    "path": "../public/itemimages/light/jilldark.png"
  },
  "/itemimages/light/jparka_box.png": {
    "type": "image/png",
    "etag": '"1d1-eWHlxkveJ8lrrpSTB5hFPeH4lT0"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 465,
    "path": "../public/itemimages/light/jparka_box.png"
  },
  "/itemimages/light/jujumask.png": {
    "type": "image/png",
    "etag": '"1c0-F3JoFHFqNcmvs1B64ijmn/8JPT4"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 448,
    "path": "../public/itemimages/light/jujumask.png"
  },
  "/itemimages/light/junecleaverbox.png": {
    "type": "image/png",
    "etag": '"1dc-4RZr6Nub3yItGxokE5V3WwUzG2w"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 476,
    "path": "../public/itemimages/light/junecleaverbox.png"
  },
  "/itemimages/light/kernel.png": {
    "type": "image/png",
    "etag": '"1a6-dDO4cszS0XfJjfSvsiZRosaSgi8"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 422,
    "path": "../public/itemimages/light/kernel.png"
  },
  "/itemimages/light/kgbpackage.png": {
    "type": "image/png",
    "etag": '"14c-otq0+NAkUJYzzZYZqn7EmghF4ro"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 332,
    "path": "../public/itemimages/light/kgbpackage.png"
  },
  "/itemimages/light/kittenburglar.png": {
    "type": "image/png",
    "etag": '"1c7-ZIfktnLCJ/SNkTgUzYjy+YXENgY"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 455,
    "path": "../public/itemimages/light/kittenburglar.png"
  },
  "/itemimages/light/kiwi_egg.png": {
    "type": "image/png",
    "etag": '"12d-L52zQSK7cEqB6MhWA/WokVLb248"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 301,
    "path": "../public/itemimages/light/kiwi_egg.png"
  },
  "/itemimages/light/kloopcoop.png": {
    "type": "image/png",
    "etag": '"1ab-hUMjhaciJr89tw+FCL8ap58SI/c"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 427,
    "path": "../public/itemimages/light/kloopcoop.png"
  },
  "/itemimages/light/l11voucher.png": {
    "type": "image/png",
    "etag": '"1e0-0dDAAGndRvIte2z47dYqYhotICE"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 480,
    "path": "../public/itemimages/light/l11voucher.png"
  },
  "/itemimages/light/lathebox.png": {
    "type": "image/png",
    "etag": '"1a7-FjLXpt4FKrLA5EN3pmkUxYLI5Nc"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 423,
    "path": "../public/itemimages/light/lathebox.png"
  },
  "/itemimages/light/lattecard.png": {
    "type": "image/png",
    "etag": '"173-AHXALRhsVWUhhCUFkCrHjgGYnBM"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 371,
    "path": "../public/itemimages/light/lattecard.png"
  },
  "/itemimages/light/leg_club_box.png": {
    "type": "image/png",
    "etag": '"183-fSwI23+lTJO67YYRWrwGIc21HzQ"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 387,
    "path": "../public/itemimages/light/leg_club_box.png"
  },
  "/itemimages/light/leprecondobox.png": {
    "type": "image/png",
    "etag": '"1b2-KOA7o2cAGuXcvOVLWRi5PstByxU"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 434,
    "path": "../public/itemimages/light/leprecondobox.png"
  },
  "/itemimages/light/letter.png": {
    "type": "image/png",
    "etag": '"175-Jj+10Wv7ZMdGGKyQq8h4lytcE6E"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 373,
    "path": "../public/itemimages/light/letter.png"
  },
  "/itemimages/light/lhmlarva.png": {
    "type": "image/png",
    "etag": '"126-HBb891MUaDMTCafayXxdeF3qMQo"',
    "mtime": "2026-01-09T00:20:45.270Z",
    "size": 294,
    "path": "../public/itemimages/light/lhmlarva.png"
  },
  "/itemimages/light/lilprofessoroff.png": {
    "type": "image/png",
    "etag": '"19d-LVtCsH8qTIe5NP6hz/FrZ4kbows"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 413,
    "path": "../public/itemimages/light/lilprofessoroff.png"
  },
  "/itemimages/light/llknife.png": {
    "type": "image/png",
    "etag": '"172-cXAIjHufk60bkq6B6uYOvmsczQY"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 370,
    "path": "../public/itemimages/light/llknife.png"
  },
  "/itemimages/light/lovebugjuice.png": {
    "type": "image/png",
    "etag": '"19a-Mhu9dgUHrPT5UvTxwkBDSCioM9U"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 410,
    "path": "../public/itemimages/light/lovebugjuice.png"
  },
  "/itemimages/light/lovelocketbox.png": {
    "type": "image/png",
    "etag": '"1e0-JfUtYQHNqKfCtE3+Twm8gmTLqWs"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 480,
    "path": "../public/itemimages/light/lovelocketbox.png"
  },
  "/itemimages/light/machelfcapsule.png": {
    "type": "image/png",
    "etag": '"179-wKrXobDjdoPYk1ziNyg87zIcubA"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 377,
    "path": "../public/itemimages/light/machelfcapsule.png"
  },
  "/itemimages/light/marchhat.png": {
    "type": "image/png",
    "etag": '"128-1MBCBU6wMH7GZKXFi9Z89Vsjkvw"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 296,
    "path": "../public/itemimages/light/marchhat.png"
  },
  "/itemimages/light/may4swordkit.png": {
    "type": "image/png",
    "etag": '"1d5-6D3H6MlxIEpLnEiCxBxjRJtUtDI"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 469,
    "path": "../public/itemimages/light/may4swordkit.png"
  },
  "/itemimages/light/maybouquet.png": {
    "type": "image/png",
    "etag": '"188-NEToHghphsouRcvLVE8Yjw401sE"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 392,
    "path": "../public/itemimages/light/maybouquet.png"
  },
  "/itemimages/light/maydaycontract.png": {
    "type": "image/png",
    "etag": '"1c4-V29TVNC02QOl51QX9pJitnkNCVE"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 452,
    "path": "../public/itemimages/light/maydaycontract.png"
  },
  "/itemimages/light/mayflybait.png": {
    "type": "image/png",
    "etag": '"1c3-q2qSZ78L+B6NzQgONMDzt2cKs7w"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 451,
    "path": "../public/itemimages/light/mayflybait.png"
  },
  "/itemimages/light/mayocase.png": {
    "type": "image/png",
    "etag": '"1bf-6LxdAVaIYMfm/By9Pn+47UAp6FE"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 447,
    "path": "../public/itemimages/light/mayocase.png"
  },
  "/itemimages/light/maypole.png": {
    "type": "image/png",
    "etag": '"178-Ri9hU8U34CmfaLBtb6TYkvjmyXw"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 376,
    "path": "../public/itemimages/light/maypole.png"
  },
  "/itemimages/light/meat.png": {
    "type": "image/png",
    "etag": '"175-L0wtTYslAqoJ4MS4hwKSZfhWzvw"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 373,
    "path": "../public/itemimages/light/meat.png"
  },
  "/itemimages/light/medium_small.png": {
    "type": "image/png",
    "etag": '"177-5Eyg8nZuw7NvhB9aQHHCsNh5S74"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 375,
    "path": "../public/itemimages/light/medium_small.png"
  },
  "/itemimages/light/meteorbook.png": {
    "type": "image/png",
    "etag": '"193-eTbZu3oqyayVOsaF3m9WFG3ZkfU"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 403,
    "path": "../public/itemimages/light/meteorbook.png"
  },
  "/itemimages/light/mimicbaby.png": {
    "type": "image/png",
    "etag": '"174-TbuJRTHX52V0GOrNvkPswx130aE"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 372,
    "path": "../public/itemimages/light/mimicbaby.png"
  },
  "/itemimages/light/modeltrain_box.png": {
    "type": "image/png",
    "etag": '"1d2-8luSD4oq6EAI2AAmyCflCNn0Dmk"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 466,
    "path": "../public/itemimages/light/modeltrain_box.png"
  },
  "/itemimages/light/moebiusring_box.png": {
    "type": "image/png",
    "etag": '"155-Gt3r2j1QxWpZgZV/F3l8AgLOeD8"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 341,
    "path": "../public/itemimages/light/moebiusring_box.png"
  },
  "/itemimages/light/monkeyglove.png": {
    "type": "image/png",
    "etag": '"182-ZXS8ulsyarFmJrz15tk/17pNNLU"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 386,
    "path": "../public/itemimages/light/monkeyglove.png"
  },
  "/itemimages/light/mopinggoth.png": {
    "type": "image/png",
    "etag": '"18e-G0N9Ef5P9STOtWkMcmfJFS9Ylp8"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 398,
    "path": "../public/itemimages/light/mopinggoth.png"
  },
  "/itemimages/light/movfeast.png": {
    "type": "image/png",
    "etag": '"1a5-BkqMgkbzs4XRjbjLDm2ex7bRsbU"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 421,
    "path": "../public/itemimages/light/movfeast.png"
  },
  "/itemimages/light/mracc.png": {
    "type": "image/png",
    "etag": '"15c-ZuBqWPeSDmEGmX8vW/eG2v3sDrU"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 348,
    "path": "../public/itemimages/light/mracc.png"
  },
  "/itemimages/light/msyellapuck.png": {
    "type": "image/png",
    "etag": '"176-iM239ojKPvvY699feGWS72+Wapk"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 374,
    "path": "../public/itemimages/light/msyellapuck.png"
  },
  "/itemimages/light/mumtrunk_closed.png": {
    "type": "image/png",
    "etag": '"1ab-YqHt5NkqhWvsNhRzQajhDowhl2s"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 427,
    "path": "../public/itemimages/light/mumtrunk_closed.png"
  },
  "/itemimages/light/mushcatalog.png": {
    "type": "image/png",
    "etag": '"187-Vx15K0CH6y1dte7wyyqDUhQrm60"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 391,
    "path": "../public/itemimages/light/mushcatalog.png"
  },
  "/itemimages/light/nanobox.png": {
    "type": "image/png",
    "etag": '"1af-0/Sgb4eHLDBHhgC/DBPXD3nb89I"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 431,
    "path": "../public/itemimages/light/nanobox.png"
  },
  "/itemimages/light/navelring.png": {
    "type": "image/png",
    "etag": '"168-9Fg1Np2Q04dVnZqBGtL2QG8MUjs"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 360,
    "path": "../public/itemimages/light/navelring.png"
  },
  "/itemimages/light/nerdgrimoire.png": {
    "type": "image/png",
    "etag": '"183-0bErlxUK6PTd4IrxW5CQ44kYjd4"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 387,
    "path": "../public/itemimages/light/nerdgrimoire.png"
  },
  "/itemimages/light/newyouform.png": {
    "type": "image/png",
    "etag": '"1cc-Jcu6zDT+Y47uyrQ1pYmFl5nqUK8"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 460,
    "path": "../public/itemimages/light/newyouform.png"
  },
  "/itemimages/light/npartyinv.png": {
    "type": "image/png",
    "etag": '"178-mMLqglmc1Dq7XYM3ndlIDLQoMFE"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 376,
    "path": "../public/itemimages/light/npartyinv.png"
  },
  "/itemimages/light/nutcracker.png": {
    "type": "image/png",
    "etag": '"198-qfiLj1+AMpfKB6u13U3Nz5TX4ZQ"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 408,
    "path": "../public/itemimages/light/nutcracker.png"
  },
  "/itemimages/light/oliver_deed.png": {
    "type": "image/png",
    "etag": '"17d-bLDIIaFtgYC+dO4xk706J4KhrUo"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 381,
    "path": "../public/itemimages/light/oliver_deed.png"
  },
  "/itemimages/light/oliver_package.png": {
    "type": "image/png",
    "etag": '"19d-Vw3mbxTy/7LuNg/imcB4nFN3jFc"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 413,
    "path": "../public/itemimages/light/oliver_package.png"
  },
  "/itemimages/light/opshield.png": {
    "type": "image/png",
    "etag": '"1dd-t0wImQVYAu5429kPDlgYkpMTFyc"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 477,
    "path": "../public/itemimages/light/opshield.png"
  },
  "/itemimages/light/origamikit.png": {
    "type": "image/png",
    "etag": '"1f6-InjY4xXyFesHKkp1QWlp///xL70"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 502,
    "path": "../public/itemimages/light/origamikit.png"
  },
  "/itemimages/light/pantogramgram.png": {
    "type": "image/png",
    "etag": '"482-s9SfQlGS5/4+UWiwi9BJIhBJ/HY"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 1154,
    "path": "../public/itemimages/light/pantogramgram.png"
  },
  "/itemimages/light/pantscrow.png": {
    "type": "image/png",
    "etag": '"1b9-y055jymmrV8rgYZRwA9N4HrV4+o"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 441,
    "path": "../public/itemimages/light/pantscrow.png"
  },
  "/itemimages/light/pantsgiving.png": {
    "type": "image/png",
    "etag": '"1c8-3dJlVKgEdJEK7W9I1CMJH7r8WrA"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 456,
    "path": "../public/itemimages/light/pantsgiving.png"
  },
  "/itemimages/light/pastselfpackage.png": {
    "type": "image/png",
    "etag": '"162-pTmfdN7nSgZnZUWCWGM+A81u740"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 354,
    "path": "../public/itemimages/light/pastselfpackage.png"
  },
  "/itemimages/light/pateagle_sleep.png": {
    "type": "image/png",
    "etag": '"1aa-nt61Ymw9jMr6G00AeYaiBmYR2qU"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 426,
    "path": "../public/itemimages/light/pateagle_sleep.png"
  },
  "/itemimages/light/pbr.png": {
    "type": "image/png",
    "etag": '"468-8DaIeba6TdJOIK9ciWIFk3MXkOA"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 1128,
    "path": "../public/itemimages/light/pbr.png"
  },
  "/itemimages/light/pengegg.png": {
    "type": "image/png",
    "etag": '"168-vJpJh/zRgVvZUiD5DPIg+d6OS0E"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 360,
    "path": "../public/itemimages/light/pengegg.png"
  },
  "/itemimages/light/pep_catalog.png": {
    "type": "image/png",
    "etag": '"19f-YhWezTX12vZDBlIKeLacn4Tbbw8"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 415,
    "path": "../public/itemimages/light/pep_catalog.png"
  },
  "/itemimages/light/peridot_box.png": {
    "type": "image/png",
    "etag": '"183-lXwc1+3SmyZO0bnzoASjOXUE2yc"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 387,
    "path": "../public/itemimages/light/peridot_box.png"
  },
  "/itemimages/light/petejacket.png": {
    "type": "image/png",
    "etag": '"171-wuxg7PGbqRJNpbOM8tQFBqByDRQ"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 369,
    "path": "../public/itemimages/light/petejacket.png"
  },
  "/itemimages/light/pglove_inbox.png": {
    "type": "image/png",
    "etag": '"1a8-DKlOiH0IWPCSqYvvCPvLxlA4H5Y"',
    "mtime": "2026-01-09T00:20:45.274Z",
    "size": 424,
    "path": "../public/itemimages/light/pglove_inbox.png"
  },
  "/itemimages/light/pillminderpack.png": {
    "type": "image/png",
    "etag": '"1ee-VIy/17es2/hI7m4Q8S7lQO3vgP8"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 494,
    "path": "../public/itemimages/light/pillminderpack.png"
  },
  "/itemimages/light/pilshield.png": {
    "type": "image/png",
    "etag": '"1c1-kdXn9B/I3iM142ay5dRjjt2dcU4"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 449,
    "path": "../public/itemimages/light/pilshield.png"
  },
  "/itemimages/light/planula.png": {
    "type": "image/png",
    "etag": '"155-o7x2WpcfoTCdhq53tVZsWPQnsVs"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 341,
    "path": "../public/itemimages/light/planula.png"
  },
  "/itemimages/light/plungebow_box.png": {
    "type": "image/png",
    "etag": '"1a7-YJVNrJfCj2eFVbsaMnGisviQHIU"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 423,
    "path": "../public/itemimages/light/plungebow_box.png"
  },
  "/itemimages/light/pokebook.png": {
    "type": "image/png",
    "etag": '"190-BFeL2/9utxalHrs81pxE+SCS5z8"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 400,
    "path": "../public/itemimages/light/pokebook.png"
  },
  "/itemimages/light/polyp.png": {
    "type": "image/png",
    "etag": '"182-O21ftzO1DktgcPIjYn6VBZnTER4"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 386,
    "path": "../public/itemimages/light/polyp.png"
  },
  "/itemimages/light/powerseed.png": {
    "type": "image/png",
    "etag": '"154-DUiL21CbTxn/TSRAcWVgdU1wYcs"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 340,
    "path": "../public/itemimages/light/powerseed.png"
  },
  "/itemimages/light/ppkit.png": {
    "type": "image/png",
    "etag": '"1fe-JzeO48os++cO24Gwh7onPRDHE2M"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 510,
    "path": "../public/itemimages/light/ppkit.png"
  },
  "/itemimages/light/pr_packet.png": {
    "type": "image/png",
    "etag": '"1c9-B+qh/Deb/8aBYxLFjS8PxnGwf0w"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 457,
    "path": "../public/itemimages/light/pr_packet.png"
  },
  "/itemimages/light/pressielarva.png": {
    "type": "image/png",
    "etag": '"181-FLrJASTwWj4xQO8o/tGJUeKvoRQ"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 385,
    "path": "../public/itemimages/light/pressielarva.png"
  },
  "/itemimages/light/prisberet_box.png": {
    "type": "image/png",
    "etag": '"1bf-n0wjqZ7PrLiowKOuhfbteyjxBNo"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 447,
    "path": "../public/itemimages/light/prisberet_box.png"
  },
  "/itemimages/light/pto.png": {
    "type": "image/png",
    "etag": '"198-ylN4OayM0HrM3tpmOk8W4xs3N/8"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 408,
    "path": "../public/itemimages/light/pto.png"
  },
  "/itemimages/light/punkin.png": {
    "type": "image/png",
    "etag": '"1c3-cnDMWWrP1M03cDGgBDZR4wFzRZc"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 451,
    "path": "../public/itemimages/light/punkin.png"
  },
  "/itemimages/light/radiopackpack.png": {
    "type": "image/png",
    "etag": '"1ce-CFBE7+fUjqcSyEy1h3CgO2FgpSY"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 462,
    "path": "../public/itemimages/light/radiopackpack.png"
  },
  "/itemimages/light/radlibtome.png": {
    "type": "image/png",
    "etag": '"177-jtqQtWXiluwNvkocxFyNPRGclp8"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 375,
    "path": "../public/itemimages/light/radlibtome.png"
  },
  "/itemimages/light/raindoh.png": {
    "type": "image/png",
    "etag": '"18a-TRas3l+K9HF8ekXPRDsqMyU4ktY"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 394,
    "path": "../public/itemimages/light/raindoh.png"
  },
  "/itemimages/light/raindrop.png": {
    "type": "image/png",
    "etag": '"f3-+28cagkzVpVGUGzVqaO10hoWB+0"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 243,
    "path": "../public/itemimages/light/raindrop.png"
  },
  "/itemimages/light/redroe.png": {
    "type": "image/png",
    "etag": '"166-TwWG6ggDn3itVhoWw23ZjJy+t+E"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 358,
    "path": "../public/itemimages/light/redroe.png"
  },
  "/itemimages/light/retrocape0.png": {
    "type": "image/png",
    "etag": '"1fa-B45wKdF+Ug69KjHunad+wStr0K8"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 506,
    "path": "../public/itemimages/light/retrocape0.png"
  },
  "/itemimages/light/retrospecsbox.png": {
    "type": "image/png",
    "etag": '"176-3JIB59Mjz9XGU4qvMDaxfWQ2UM4"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 374,
    "path": "../public/itemimages/light/retrospecsbox.png"
  },
  "/itemimages/light/rip.png": {
    "type": "image/png",
    "etag": '"e0-gGiB4lfTJD6+9ewcWf3DoUxSpaY"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 224,
    "path": "../public/itemimages/light/rip.png"
  },
  "/itemimages/light/robotenderlarva.png": {
    "type": "image/png",
    "etag": '"173-ZSZNZM35LC+kw8tsvsPb5D4EICM"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 371,
    "path": "../public/itemimages/light/robotenderlarva.png"
  },
  "/itemimages/light/rockgardenbook.png": {
    "type": "image/png",
    "etag": '"1da-cWPkNY3XzbDfiHUKq5BBygdls4c"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 474,
    "path": "../public/itemimages/light/rockgardenbook.png"
  },
  "/itemimages/light/romcandelbox.png": {
    "type": "image/png",
    "etag": '"1c4-P76nB8/3CgYO5JPSuPIEg7jjrbw"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 452,
    "path": "../public/itemimages/light/romcandelbox.png"
  },
  "/itemimages/light/rufusbox.png": {
    "type": "image/png",
    "etag": '"1b6-tLWdGCOFdnqIlnm0JlQLP5WFWPk"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 438,
    "path": "../public/itemimages/light/rufusbox.png"
  },
  "/itemimages/light/sanehatrack.png": {
    "type": "image/png",
    "etag": '"15b-j/JZDd2E1v5hXAt62KiWind4sxA"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 347,
    "path": "../public/itemimages/light/sanehatrack.png"
  },
  "/itemimages/light/saugrindbox.png": {
    "type": "image/png",
    "etag": '"1c0-dyhDypM/txpQrxqk21mXBnP3cNs"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 448,
    "path": "../public/itemimages/light/saugrindbox.png"
  },
  "/itemimages/light/sc_ball.png": {
    "type": "image/png",
    "etag": '"1c1-rdlmD5WMfJLCLobqA6rOSa2u1gc"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 449,
    "path": "../public/itemimages/light/sc_ball.png"
  },
  "/itemimages/light/sgbadge.png": {
    "type": "image/png",
    "etag": '"176-C767lx+2hrOr+LU80ndlQ5uS2JI"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 374,
    "path": "../public/itemimages/light/sgbadge.png"
  },
  "/itemimages/light/shortcheflarva.png": {
    "type": "image/png",
    "etag": '"147-T+tKFmUHqO3c2d5GYGVma8mNF08"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 327,
    "path": "../public/itemimages/light/shortcheflarva.png"
  },
  "/itemimages/light/sitvoucher.png": {
    "type": "image/png",
    "etag": '"1ae-kIVcOU+dr5pNEPuOUgcKn17Gbf0"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 430,
    "path": "../public/itemimages/light/sitvoucher.png"
  },
  "/itemimages/light/skeletonocp.png": {
    "type": "image/png",
    "etag": '"163-t33L6ILmvMGhChCz/8TC5EEHLBI"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 355,
    "path": "../public/itemimages/light/skeletonocp.png"
  },
  "/itemimages/light/skibag1.png": {
    "type": "image/png",
    "etag": '"170-mmCOIYOl0M4NfdeMz0QtwJjAkAs"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 368,
    "path": "../public/itemimages/light/skibag1.png"
  },
  "/itemimages/light/snowsuit.png": {
    "type": "image/png",
    "etag": '"19e-KERlh84lEQxd2B3YwpKGPeQGoMY"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 414,
    "path": "../public/itemimages/light/snowsuit.png"
  },
  "/itemimages/light/songboomboxbox.png": {
    "type": "image/png",
    "etag": '"1c4-Q3FODiRMiqDfLRfDAWXkXirwJ3g"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 452,
    "path": "../public/itemimages/light/songboomboxbox.png"
  },
  "/itemimages/light/sourceterminal.png": {
    "type": "image/png",
    "etag": '"17c-7NoYingAm7x40xQJmvZ1s9435mU"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 380,
    "path": "../public/itemimages/light/sourceterminal.png"
  },
  "/itemimages/light/spacechest.png": {
    "type": "image/png",
    "etag": '"1be-+Zfdi7dAvAlFiDZAgf1xDzZRUMI"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 446,
    "path": "../public/itemimages/light/spacechest.png"
  },
  "/itemimages/light/spooncocoon.png": {
    "type": "image/png",
    "etag": '"180-J+0V8ABpIka+TcgDfP8MYkmF23M"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 384,
    "path": "../public/itemimages/light/spooncocoon.png"
  },
  "/itemimages/light/spore.png": {
    "type": "image/png",
    "etag": '"e6-7nz97z5S0PvIiaPRZSZcoyg/fHI"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 230,
    "path": "../public/itemimages/light/spore.png"
  },
  "/itemimages/light/springshoes_box.png": {
    "type": "image/png",
    "etag": '"1b4-D8qiDpVig4qttOXwGUYA9lRTDZo"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 436,
    "path": "../public/itemimages/light/springshoes_box.png"
  },
  "/itemimages/light/sputtyegg.png": {
    "type": "image/png",
    "etag": '"162-udNNk0oy4Jt7Pz6CAHSJD1XzP6Q"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 354,
    "path": "../public/itemimages/light/sputtyegg.png"
  },
  "/itemimages/light/stillgrill.png": {
    "type": "image/png",
    "etag": '"13a-Gb/dv/ii7UCQTkf0GOnuJzK363M"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 314,
    "path": "../public/itemimages/light/stillgrill.png"
  },
  "/itemimages/light/stillsuit_box.png": {
    "type": "image/png",
    "etag": '"1cc-XTk70vd5pqEl5YpwGAn0SoZqMPM"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 460,
    "path": "../public/itemimages/light/stillsuit_box.png"
  },
  "/itemimages/light/subcard.png": {
    "type": "image/png",
    "etag": '"184-VYzW2JgwduYyKGCxEToFLnjzQ3Y"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 388,
    "path": "../public/itemimages/light/subcard.png"
  },
  "/itemimages/light/susstocking.png": {
    "type": "image/png",
    "etag": '"174-RkmMa8e/iAzl4b9EwzQoqa2hXBk"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 372,
    "path": "../public/itemimages/light/susstocking.png"
  },
  "/itemimages/light/sweats_box.png": {
    "type": "image/png",
    "etag": '"1b6-fBcanc+11DubDTgo0nnuUcjjWJc"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 438,
    "path": "../public/itemimages/light/sweats_box.png"
  },
  "/itemimages/light/tamo.png": {
    "type": "image/png",
    "etag": '"261-IZvJThUr0O/9Pe+g5gwXbIKg0K8"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 609,
    "path": "../public/itemimages/light/tamo.png"
  },
  "/itemimages/light/teatree.png": {
    "type": "image/png",
    "etag": '"1b9-48rczBcT7v3CsExLhqekZocQXJE"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 441,
    "path": "../public/itemimages/light/teatree.png"
  },
  "/itemimages/light/teethcatalog.png": {
    "type": "image/png",
    "etag": '"180-BPxiTRRbxkKIs9IJPup1cv6F7vQ"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 384,
    "path": "../public/itemimages/light/teethcatalog.png"
  },
  "/itemimages/light/thankscatalog.png": {
    "type": "image/png",
    "etag": '"1da-IT9p/TMabjULDCTYMC1/U41qVHU"',
    "mtime": "2026-01-09T00:20:45.278Z",
    "size": 474,
    "path": "../public/itemimages/light/thankscatalog.png"
  },
  "/itemimages/light/thorpliers.png": {
    "type": "image/png",
    "etag": '"17f-0ZuXp64CAooew5MlnwqTmQwZKfk"',
    "mtime": "2026-01-09T00:20:45.282Z",
    "size": 383,
    "path": "../public/itemimages/light/thorpliers.png"
  },
  "/itemimages/light/tote_closed.png": {
    "type": "image/png",
    "etag": '"169-lgO1nfbIgMN0Eb29wSILkYVL7IE"',
    "mtime": "2026-01-09T00:20:45.282Z",
    "size": 361,
    "path": "../public/itemimages/light/tote_closed.png"
  },
  "/itemimages/light/transmitter.png": {
    "type": "image/png",
    "etag": '"381-Xg3LFX8zYUkWJnsid4o35669BYc"',
    "mtime": "2026-01-09T00:20:45.282Z",
    "size": 897,
    "path": "../public/itemimages/light/transmitter.png"
  },
  "/itemimages/light/travtrou.png": {
    "type": "image/png",
    "etag": '"16d-iP5mU+FPGMJEYkBW0zqa/ltpq9s"',
    "mtime": "2026-01-09T00:20:45.282Z",
    "size": 365,
    "path": "../public/itemimages/light/travtrou.png"
  },
  "/itemimages/light/trondisc.png": {
    "type": "image/png",
    "etag": '"1c1-joUbhyUjF+GaoOGDFLrUxr1uxhg"',
    "mtime": "2026-01-09T00:20:45.282Z",
    "size": 449,
    "path": "../public/itemimages/light/trondisc.png"
  },
  "/itemimages/light/ts_letter2.png": {
    "type": "image/png",
    "etag": '"188-lxHi9yxfiZOWJ9qfbAOOAsC0ftU"',
    "mtime": "2026-01-09T00:20:45.282Z",
    "size": 392,
    "path": "../public/itemimages/light/ts_letter2.png"
  },
  "/itemimages/light/unbrella1.png": {
    "type": "image/png",
    "etag": '"150-WpBTMpNHkzi0ZMVHcjdffRFidbs"',
    "mtime": "2026-01-09T00:20:45.282Z",
    "size": 336,
    "path": "../public/itemimages/light/unbrella1.png"
  },
  "/itemimages/light/vampvintbottle.png": {
    "type": "image/png",
    "etag": '"148-E3UFJsM7bn/oe9sJGPrdQNPBlG4"',
    "mtime": "2026-01-09T00:20:45.282Z",
    "size": 328,
    "path": "../public/itemimages/light/vampvintbottle.png"
  },
  "/itemimages/light/vivala.png": {
    "type": "image/png",
    "etag": '"1de-rOK4mPlX9m7jPc0F2MopqL+dcUc"',
    "mtime": "2026-01-09T00:20:45.282Z",
    "size": 478,
    "path": "../public/itemimages/light/vivala.png"
  },
  "/itemimages/light/vrform.png": {
    "type": "image/png",
    "etag": '"1ed-RD0jLxRHISoB0t2TbHQux0y6eGY"',
    "mtime": "2026-01-09T00:20:45.282Z",
    "size": 493,
    "path": "../public/itemimages/light/vrform.png"
  },
  "/itemimages/light/waflarva.png": {
    "type": "image/png",
    "etag": '"214-I9vQpLP84eVLcV9tCXKHarXKwzw"',
    "mtime": "2026-01-09T00:20:45.282Z",
    "size": 532,
    "path": "../public/itemimages/light/waflarva.png"
  },
  "/itemimages/light/wardrobe.png": {
    "type": "image/png",
    "etag": '"1ab-s5llXLRb7VFDXpAAlwG1J9bo88o"',
    "mtime": "2026-01-09T00:20:45.282Z",
    "size": 427,
    "path": "../public/itemimages/light/wardrobe.png"
  },
  "/itemimages/light/waxlips.png": {
    "type": "image/png",
    "etag": '"191-SDoMLh82/abVL1mA6IMPpwttXZM"',
    "mtime": "2026-01-09T00:20:45.282Z",
    "size": 401,
    "path": "../public/itemimages/light/waxlips.png"
  },
  "/itemimages/light/wintercatalog.png": {
    "type": "image/png",
    "etag": '"1ba-zhgCehDvYT1eAOXVgeaH6vGOIjc"',
    "mtime": "2026-01-09T00:20:45.282Z",
    "size": 442,
    "path": "../public/itemimages/light/wintercatalog.png"
  },
  "/itemimages/light/wizhat.png": {
    "type": "image/png",
    "etag": '"1a6-T9wDlKuRqAs5Kr14t41glQ5K0IU"',
    "mtime": "2026-01-09T00:20:45.282Z",
    "size": 422,
    "path": "../public/itemimages/light/wizhat.png"
  },
  "/itemimages/light/wormlarva.png": {
    "type": "image/png",
    "etag": '"123-SByu8lU38NYOAEw0T/NiYK/5ivw"',
    "mtime": "2026-01-09T00:20:45.282Z",
    "size": 291,
    "path": "../public/itemimages/light/wormlarva.png"
  },
  "/itemimages/light/xobox.png": {
    "type": "image/png",
    "etag": '"1cd-OBHPXny75oSZcN1sCqsXxlC1mLM"',
    "mtime": "2026-01-09T00:20:45.282Z",
    "size": 461,
    "path": "../public/itemimages/light/xobox.png"
  },
  "/itemimages/light/yamcalbox.png": {
    "type": "image/png",
    "etag": '"1d1-H2wk6Qq9IYObsqGog7CwME9UKnA"',
    "mtime": "2026-01-09T00:20:45.282Z",
    "size": 465,
    "path": "../public/itemimages/light/yamcalbox.png"
  },
  "/itemimages/light/yellapuck.png": {
    "type": "image/png",
    "etag": '"15a-cs88bA6XDazLPT657n1fiKrUkTg"',
    "mtime": "2026-01-09T00:20:45.282Z",
    "size": 346,
    "path": "../public/itemimages/light/yellapuck.png"
  },
  "/itemimages/light/yeticooler.png": {
    "type": "image/png",
    "etag": '"179-dAZG/MO8FukyTQsNx7/xn6dK+Gw"',
    "mtime": "2026-01-09T00:20:45.282Z",
    "size": 377,
    "path": "../public/itemimages/light/yeticooler.png"
  }
};
function readAsset(id) {
  const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
  return promises.readFile(resolve(serverDir, assets[id].path));
}
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
function getAsset(id) {
  return assets[id];
}
const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = {
  gzip: ".gz",
  br: ".br"
};
const _ohHHeA = defineHandler((event) => {
  if (event.req.method && !METHODS.has(event.req.method)) {
    return;
  }
  let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
  let asset;
  const encodingHeader = event.req.headers.get("accept-encoding") || "";
  const encodings = [...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
  if (encodings.length > 1) {
    event.res.headers.append("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.res.headers.delete("Cache-Control");
      throw new HTTPError({ status: 404 });
    }
    return;
  }
  const ifNotMatch = event.req.headers.get("if-none-match") === asset.etag;
  if (ifNotMatch) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  const ifModifiedSinceH = event.req.headers.get("if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  if (asset.type) {
    event.res.headers.set("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.headers.has("ETag")) {
    event.res.headers.set("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.headers.has("Last-Modified")) {
    event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.res.headers.has("Content-Encoding")) {
    event.res.headers.set("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.res.headers.has("Content-Length")) {
    event.res.headers.set("Content-Length", asset.size.toString());
  }
  return readAsset(id);
});
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/*", handler: headers, options: { "Cache-Control": "public, max-age=31536000" } }], $1 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/"), l = s.length - 1;
    if (s[1] === "assets") {
      if (l === 2 || l === 1) {
        r.unshift({ data: $0, params: { "_0": s[2] } });
      }
      r.unshift({ data: $1, params: { "_": s.slice(2).join("/") } });
    }
    return r;
  };
})();
const _lazy_sR6F3o = defineLazyEventHandler(() => Promise.resolve().then(function() {
  return ssrRenderer$1;
}));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_sR6F3o };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const globalMiddleware = [
  toEventHandler(_ohHHeA)
].filter(Boolean);
function useNitroApp() {
  return useNitroApp.__instance__ ??= initNitroApp();
}
function initNitroApp() {
  const nitroApp2 = createNitroApp();
  globalThis.__nitro__ = nitroApp2;
  return nitroApp2;
}
function createNitroApp() {
  const hooks = void 0;
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({
          error,
          context: errorCtx
        });
      }
    }
  };
  const h3App = createH3App({ onError(error, event) {
    return errorHandler(error, event);
  } });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  const app = {
    fetch: appHandler,
    h3: h3App,
    hooks,
    captureError
  };
  return app;
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  h3App["~middleware"].push(...globalMiddleware);
  {
    h3App["~getMiddleware"] = (event, route) => {
      const pathname = event.url.pathname;
      const method = event.req.method;
      const middleware = [];
      {
        const routeRules = getRouteRules(method, pathname);
        event.context.routeRules = routeRules?.routeRules;
        if (routeRules?.routeRuleMiddleware.length) {
          middleware.push(...routeRules.routeRuleMiddleware);
        }
      }
      middleware.push(...h3App["~middleware"]);
      if (route?.data?.middleware?.length) {
        middleware.push(...route.data.middleware);
      }
      return middleware;
    };
  }
  return h3App;
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  for (const rule of Object.values(routeRules)) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
  process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
  process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
const port = Number.parseInt(process.env.NITRO_PORT || process.env.PORT || "") || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
let _fetch = nitroApp.fetch;
serve({
  port,
  hostname: host,
  tls: cert && key ? {
    cert,
    key
  } : void 0,
  fetch: _fetch,
  bun: { websocket: void 0 }
});
trapUnhandledErrors();
const bun = {};
function fetchViteEnv(viteEnvName, input, init) {
  const envs = globalThis.__nitro_vite_envs__ || {};
  const viteEnv = envs[viteEnvName];
  if (!viteEnv) {
    throw HTTPError.status(404);
  }
  return Promise.resolve(viteEnv.fetch(toRequest(input, init)));
}
function ssrRenderer({ req }) {
  return fetchViteEnv("ssr", req);
}
const ssrRenderer$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: ssrRenderer
});
export {
  NullProtoObj as N,
  bun as default
};
