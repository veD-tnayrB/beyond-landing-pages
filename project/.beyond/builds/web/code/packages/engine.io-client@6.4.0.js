System.register(["engine.io-parser@5.0.6","@socket.io/component-emitter@3.1.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.0.6"],["@socket.io/component-emitter","3.1.0"],["engine.io-client","6.4.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('engine.io-parser@5.0.6', dep), dep => dependencies.set('@socket.io/component-emitter@3.1.0', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/engine.io-client.6.4.0.js
var engine_io_client_6_4_0_exports = {};
__export(engine_io_client_6_4_0_exports, {
  Socket: () => Socket,
  Transport: () => Transport,
  installTimerFunctions: () => installTimerFunctions,
  nextTick: () => nextTick,
  parse: () => parse,
  protocol: () => protocol2,
  transports: () => transports
});
module.exports = __toCommonJS(engine_io_client_6_4_0_exports);

// node_modules/engine.io-client/build/esm/globalThis.browser.js
var globalThisShim = (() => {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})();

// node_modules/engine.io-client/build/esm/util.js
function pick(obj, ...attr) {
  return attr.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }
    return acc;
  }, {});
}
var NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
var NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
function installTimerFunctions(obj, opts) {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
  } else {
    obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
    obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
  }
}
var BASE64_OVERHEAD = 1.33;
function byteLength(obj) {
  if (typeof obj === "string") {
    return utf8Length(obj);
  }
  return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
  let c = 0,
    length2 = 0;
  for (let i2 = 0, l = str.length; i2 < l; i2++) {
    c = str.charCodeAt(i2);
    if (c < 128) {
      length2 += 1;
    } else if (c < 2048) {
      length2 += 2;
    } else if (c < 55296 || c >= 57344) {
      length2 += 3;
    } else {
      i2++;
      length2 += 4;
    }
  }
  return length2;
}

// node_modules/engine.io-client/build/esm/transport.js
var import_engine = require("engine.io-parser@5.0.6");
var import_component_emitter = require("@socket.io/component-emitter@3.1.0");
var TransportError = class extends Error {
  constructor(reason, description, context) {
    super(reason);
    this.description = description;
    this.context = context;
    this.type = "TransportError";
  }
};
var Transport = class extends import_component_emitter.Emitter {
  constructor(opts) {
    super();
    this.writable = false;
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.query = opts.query;
    this.socket = opts.socket;
  }
  onError(reason, description, context) {
    super.emitReserved("error", new TransportError(reason, description, context));
    return this;
  }
  open() {
    this.readyState = "opening";
    this.doOpen();
    return this;
  }
  close() {
    if (this.readyState === "opening" || this.readyState === "open") {
      this.doClose();
      this.onClose();
    }
    return this;
  }
  send(packets) {
    if (this.readyState === "open") {
      this.write(packets);
    } else {}
  }
  onOpen() {
    this.readyState = "open";
    this.writable = true;
    super.emitReserved("open");
  }
  onData(data) {
    const packet = (0, import_engine.decodePacket)(data, this.socket.binaryType);
    this.onPacket(packet);
  }
  onPacket(packet) {
    super.emitReserved("packet", packet);
  }
  onClose(details) {
    this.readyState = "closed";
    super.emitReserved("close", details);
  }
  pause(onPause) {}
};

// node_modules/engine.io-client/build/esm/contrib/yeast.js
var alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
  length = 64,
  map = {};
var seed = 0,
  i = 0,
  prev;
function encode(num) {
  let encoded = "";
  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);
  return encoded;
}
function decode(str) {
  let decoded = 0;
  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }
  return decoded;
}
function yeast() {
  const now = encode(+new Date());
  if (now !== prev) return seed = 0, prev = now;
  return now + "." + encode(seed++);
}
for (; i < length; i++) map[alphabet[i]] = i;

// node_modules/engine.io-client/build/esm/contrib/parseqs.js
function encode2(obj) {
  let str = "";
  for (let i2 in obj) {
    if (obj.hasOwnProperty(i2)) {
      if (str.length) str += "&";
      str += encodeURIComponent(i2) + "=" + encodeURIComponent(obj[i2]);
    }
  }
  return str;
}
function decode2(qs) {
  let qry = {};
  let pairs = qs.split("&");
  for (let i2 = 0, l = pairs.length; i2 < l; i2++) {
    let pair = pairs[i2].split("=");
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
}

// node_modules/engine.io-client/build/esm/contrib/has-cors.js
var value = false;
try {
  value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
} catch (err) {}
var hasCORS = value;

// node_modules/engine.io-client/build/esm/transports/xmlhttprequest.browser.js
function XHR(opts) {
  const xdomain = opts.xdomain;
  try {
    if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {}
  if (!xdomain) {
    try {
      return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {}
  }
}

// node_modules/engine.io-client/build/esm/transports/polling.js
var import_engine2 = require("engine.io-parser@5.0.6");
var import_component_emitter2 = require("@socket.io/component-emitter@3.1.0");
function empty() {}
var hasXHR2 = function () {
  const xhr = new XHR({
    xdomain: false
  });
  return null != xhr.responseType;
}();
var Polling = class extends Transport {
  constructor(opts) {
    super(opts);
    this.polling = false;
    if (typeof location !== "undefined") {
      const isSSL = "https:" === location.protocol;
      let port = location.port;
      if (!port) {
        port = isSSL ? "443" : "80";
      }
      this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
      this.xs = opts.secure !== isSSL;
    }
    const forceBase64 = opts && opts.forceBase64;
    this.supportsBinary = hasXHR2 && !forceBase64;
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this.poll();
  }
  pause(onPause) {
    this.readyState = "pausing";
    const pause = () => {
      this.readyState = "paused";
      onPause();
    };
    if (this.polling || !this.writable) {
      let total = 0;
      if (this.polling) {
        total++;
        this.once("pollComplete", function () {
          --total || pause();
        });
      }
      if (!this.writable) {
        total++;
        this.once("drain", function () {
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }
  poll() {
    this.polling = true;
    this.doPoll();
    this.emitReserved("poll");
  }
  onData(data) {
    const callback = packet => {
      if ("opening" === this.readyState && packet.type === "open") {
        this.onOpen();
      }
      if ("close" === packet.type) {
        this.onClose({
          description: "transport closed by the server"
        });
        return false;
      }
      this.onPacket(packet);
    };
    (0, import_engine2.decodePayload)(data, this.socket.binaryType).forEach(callback);
    if ("closed" !== this.readyState) {
      this.polling = false;
      this.emitReserved("pollComplete");
      if ("open" === this.readyState) {
        this.poll();
      } else {}
    }
  }
  doClose() {
    const close = () => {
      this.write([{
        type: "close"
      }]);
    };
    if ("open" === this.readyState) {
      close();
    } else {
      this.once("open", close);
    }
  }
  write(packets) {
    this.writable = false;
    (0, import_engine2.encodePayload)(packets, data => {
      this.doWrite(data, () => {
        this.writable = true;
        this.emitReserved("drain");
      });
    });
  }
  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "https" : "http";
    let port = "";
    if (false !== this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }
    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }
    if (this.opts.port && ("https" === schema && Number(this.opts.port) !== 443 || "http" === schema && Number(this.opts.port) !== 80)) {
      port = ":" + this.opts.port;
    }
    const encodedQuery = encode2(query);
    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
  }
  request(opts = {}) {
    Object.assign(opts, {
      xd: this.xd,
      xs: this.xs
    }, this.opts);
    return new Request(this.uri(), opts);
  }
  doWrite(data, fn) {
    const req = this.request({
      method: "POST",
      data
    });
    req.on("success", fn);
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr post error", xhrStatus, context);
    });
  }
  doPoll() {
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr poll error", xhrStatus, context);
    });
    this.pollXhr = req;
  }
};
var Request = class extends import_component_emitter2.Emitter {
  constructor(uri, opts) {
    super();
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.method = opts.method || "GET";
    this.uri = uri;
    this.async = false !== opts.async;
    this.data = void 0 !== opts.data ? opts.data : null;
    this.create();
  }
  create() {
    const opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this.opts.xd;
    opts.xscheme = !!this.opts.xs;
    const xhr = this.xhr = new XHR(opts);
    try {
      xhr.open(this.method, this.uri, this.async);
      try {
        if (this.opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
          for (let i2 in this.opts.extraHeaders) {
            if (this.opts.extraHeaders.hasOwnProperty(i2)) {
              xhr.setRequestHeader(i2, this.opts.extraHeaders[i2]);
            }
          }
        }
      } catch (e) {}
      if ("POST" === this.method) {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e) {}
      }
      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e) {}
      if ("withCredentials" in xhr) {
        xhr.withCredentials = this.opts.withCredentials;
      }
      if (this.opts.requestTimeout) {
        xhr.timeout = this.opts.requestTimeout;
      }
      xhr.onreadystatechange = () => {
        if (4 !== xhr.readyState) return;
        if (200 === xhr.status || 1223 === xhr.status) {
          this.onLoad();
        } else {
          this.setTimeoutFn(() => {
            this.onError(typeof xhr.status === "number" ? xhr.status : 0);
          }, 0);
        }
      };
      xhr.send(this.data);
    } catch (e) {
      this.setTimeoutFn(() => {
        this.onError(e);
      }, 0);
      return;
    }
    if (typeof document !== "undefined") {
      this.index = Request.requestsCount++;
      Request.requests[this.index] = this;
    }
  }
  onError(err) {
    this.emitReserved("error", err, this.xhr);
    this.cleanup(true);
  }
  cleanup(fromError) {
    if ("undefined" === typeof this.xhr || null === this.xhr) {
      return;
    }
    this.xhr.onreadystatechange = empty;
    if (fromError) {
      try {
        this.xhr.abort();
      } catch (e) {}
    }
    if (typeof document !== "undefined") {
      delete Request.requests[this.index];
    }
    this.xhr = null;
  }
  onLoad() {
    const data = this.xhr.responseText;
    if (data !== null) {
      this.emitReserved("data", data);
      this.emitReserved("success");
      this.cleanup();
    }
  }
  abort() {
    this.cleanup();
  }
};
Request.requestsCount = 0;
Request.requests = {};
if (typeof document !== "undefined") {
  if (typeof attachEvent === "function") {
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}
function unloadHandler() {
  for (let i2 in Request.requests) {
    if (Request.requests.hasOwnProperty(i2)) {
      Request.requests[i2].abort();
    }
  }
}

// node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js
var nextTick = (() => {
  const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
  if (isPromiseAvailable) {
    return cb => Promise.resolve().then(cb);
  } else {
    return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
  }
})();
var WebSocket = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
var usingBrowserWebSocket = true;
var defaultBinaryType = "arraybuffer";

// node_modules/engine.io-client/build/esm/transports/websocket.js
var import_engine3 = require("engine.io-parser@5.0.6");
var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
var WS = class extends Transport {
  constructor(opts) {
    super(opts);
    this.supportsBinary = !opts.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check()) {
      return;
    }
    const uri = this.uri();
    const protocols = this.opts.protocols;
    const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }
    try {
      this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
    this.addEventListeners();
  }
  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }
      this.onOpen();
    };
    this.ws.onclose = closeEvent => this.onClose({
      description: "websocket connection closed",
      context: closeEvent
    });
    this.ws.onmessage = ev => this.onData(ev.data);
    this.ws.onerror = e => this.onError("websocket error", e);
  }
  write(packets) {
    this.writable = false;
    for (let i2 = 0; i2 < packets.length; i2++) {
      const packet = packets[i2];
      const lastPacket = i2 === packets.length - 1;
      (0, import_engine3.encodePacket)(packet, this.supportsBinary, data => {
        const opts = {};
        if (!usingBrowserWebSocket) {
          if (packet.options) {
            opts.compress = packet.options.compress;
          }
          if (this.opts.perMessageDeflate) {
            const len = "string" === typeof data ? Buffer.byteLength(data) : data.length;
            if (len < this.opts.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }
        try {
          if (usingBrowserWebSocket) {
            this.ws.send(data);
          } else {
            this.ws.send(data, opts);
          }
        } catch (e) {}
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.close();
      this.ws = null;
    }
  }
  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "wss" : "ws";
    let port = "";
    if (this.opts.port && ("wss" === schema && Number(this.opts.port) !== 443 || "ws" === schema && Number(this.opts.port) !== 80)) {
      port = ":" + this.opts.port;
    }
    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }
    if (!this.supportsBinary) {
      query.b64 = 1;
    }
    const encodedQuery = encode2(query);
    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
  }
  check() {
    return !!WebSocket;
  }
};

// node_modules/engine.io-client/build/esm/transports/index.js
var transports = {
  websocket: WS,
  polling: Polling
};

// node_modules/engine.io-client/build/esm/contrib/parseuri.js
var re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function parse(str) {
  const src = str,
    b = str.indexOf("["),
    e = str.indexOf("]");
  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
  }
  let m = re.exec(str || ""),
    uri = {},
    i2 = 14;
  while (i2--) {
    uri[parts[i2]] = m[i2] || "";
  }
  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
    uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
    uri.ipv6uri = true;
  }
  uri.pathNames = pathNames(uri, uri["path"]);
  uri.queryKey = queryKey(uri, uri["query"]);
  return uri;
}
function pathNames(obj, path) {
  const regx = /\/{2,9}/g,
    names = path.replace(regx, "/").split("/");
  if (path.slice(0, 1) == "/" || path.length === 0) {
    names.splice(0, 1);
  }
  if (path.slice(-1) == "/") {
    names.splice(names.length - 1, 1);
  }
  return names;
}
function queryKey(uri, query) {
  const data = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
    if ($1) {
      data[$1] = $2;
    }
  });
  return data;
}

// node_modules/engine.io-client/build/esm/socket.js
var import_component_emitter3 = require("@socket.io/component-emitter@3.1.0");
var import_engine4 = require("engine.io-parser@5.0.6");
var Socket = class extends import_component_emitter3.Emitter {
  constructor(uri, opts = {}) {
    super();
    this.writeBuffer = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = null;
    }
    if (uri) {
      uri = parse(uri);
      opts.hostname = uri.host;
      opts.secure = uri.protocol === "https" || uri.protocol === "wss";
      opts.port = uri.port;
      if (uri.query) opts.query = uri.query;
    } else if (opts.host) {
      opts.hostname = parse(opts.host).host;
    }
    installTimerFunctions(this, opts);
    this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
    if (opts.hostname && !opts.port) {
      opts.port = this.secure ? "443" : "80";
    }
    this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
    this.transports = opts.transports || ["polling", "websocket"];
    this.writeBuffer = [];
    this.prevBufferLen = 0;
    this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      timestampParam: "t",
      rememberUpgrade: false,
      addTrailingSlash: true,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: true
    }, opts);
    this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
    if (typeof this.opts.query === "string") {
      this.opts.query = decode2(this.opts.query);
    }
    this.id = null;
    this.upgrades = null;
    this.pingInterval = null;
    this.pingTimeout = null;
    this.pingTimeoutTimer = null;
    if (typeof addEventListener === "function") {
      if (this.opts.closeOnBeforeunload) {
        this.beforeunloadEventListener = () => {
          if (this.transport) {
            this.transport.removeAllListeners();
            this.transport.close();
          }
        };
        addEventListener("beforeunload", this.beforeunloadEventListener, false);
      }
      if (this.hostname !== "localhost") {
        this.offlineEventListener = () => {
          this.onClose("transport close", {
            description: "network connection lost"
          });
        };
        addEventListener("offline", this.offlineEventListener, false);
      }
    }
    this.open();
  }
  createTransport(name) {
    const query = Object.assign({}, this.opts.query);
    query.EIO = import_engine4.protocol;
    query.transport = name;
    if (this.id) query.sid = this.id;
    const opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
      query,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new transports[name](opts);
  }
  open() {
    let transport;
    if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
      transport = "websocket";
    } else if (0 === this.transports.length) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else {
      transport = this.transports[0];
    }
    this.readyState = "opening";
    try {
      transport = this.createTransport(transport);
    } catch (e) {
      this.transports.shift();
      this.open();
      return;
    }
    transport.open();
    this.setTransport(transport);
  }
  setTransport(transport) {
    if (this.transport) {
      this.transport.removeAllListeners();
    }
    this.transport = transport;
    transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", reason => this.onClose("transport close", reason));
  }
  probe(name) {
    let transport = this.createTransport(name);
    let failed = false;
    Socket.priorWebsocketSuccess = false;
    const onTransportOpen = () => {
      if (failed) return;
      transport.send([{
        type: "ping",
        data: "probe"
      }]);
      transport.once("packet", msg => {
        if (failed) return;
        if ("pong" === msg.type && "probe" === msg.data) {
          this.upgrading = true;
          this.emitReserved("upgrading", transport);
          if (!transport) return;
          Socket.priorWebsocketSuccess = "websocket" === transport.name;
          this.transport.pause(() => {
            if (failed) return;
            if ("closed" === this.readyState) return;
            cleanup();
            this.setTransport(transport);
            transport.send([{
              type: "upgrade"
            }]);
            this.emitReserved("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          const err = new Error("probe error");
          err.transport = transport.name;
          this.emitReserved("upgradeError", err);
        }
      });
    };
    function freezeTransport() {
      if (failed) return;
      failed = true;
      cleanup();
      transport.close();
      transport = null;
    }
    const onerror = err => {
      const error = new Error("probe error: " + err);
      error.transport = transport.name;
      freezeTransport();
      this.emitReserved("upgradeError", error);
    };
    function onTransportClose() {
      onerror("transport closed");
    }
    function onclose() {
      onerror("socket closed");
    }
    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        freezeTransport();
      }
    }
    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.off("close", onclose);
      this.off("upgrading", onupgrade);
    };
    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);
    this.once("close", onclose);
    this.once("upgrading", onupgrade);
    transport.open();
  }
  onOpen() {
    this.readyState = "open";
    Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
    this.emitReserved("open");
    this.flush();
    if ("open" === this.readyState && this.opts.upgrade) {
      let i2 = 0;
      const l = this.upgrades.length;
      for (; i2 < l; i2++) {
        this.probe(this.upgrades[i2]);
      }
    }
  }
  onPacket(packet) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.emitReserved("packet", packet);
      this.emitReserved("heartbeat");
      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;
        case "ping":
          this.resetPingTimeout();
          this.sendPacket("pong");
          this.emitReserved("ping");
          this.emitReserved("pong");
          break;
        case "error":
          const err = new Error("server error");
          err.code = packet.data;
          this.onError(err);
          break;
        case "message":
          this.emitReserved("data", packet.data);
          this.emitReserved("message", packet.data);
          break;
      }
    } else {}
  }
  onHandshake(data) {
    this.emitReserved("handshake", data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this.upgrades = this.filterUpgrades(data.upgrades);
    this.pingInterval = data.pingInterval;
    this.pingTimeout = data.pingTimeout;
    this.maxPayload = data.maxPayload;
    this.onOpen();
    if ("closed" === this.readyState) return;
    this.resetPingTimeout();
  }
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer);
    this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout);
    if (this.opts.autoUnref) {
      this.pingTimeoutTimer.unref();
    }
  }
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen);
    this.prevBufferLen = 0;
    if (0 === this.writeBuffer.length) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }
  flush() {
    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const packets = this.getWritablePackets();
      this.transport.send(packets);
      this.prevBufferLen = packets.length;
      this.emitReserved("flush");
    }
  }
  getWritablePackets() {
    const shouldCheckPayloadSize = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
    if (!shouldCheckPayloadSize) {
      return this.writeBuffer;
    }
    let payloadSize = 1;
    for (let i2 = 0; i2 < this.writeBuffer.length; i2++) {
      const data = this.writeBuffer[i2].data;
      if (data) {
        payloadSize += byteLength(data);
      }
      if (i2 > 0 && payloadSize > this.maxPayload) {
        return this.writeBuffer.slice(0, i2);
      }
      payloadSize += 2;
    }
    return this.writeBuffer;
  }
  write(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  send(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  sendPacket(type, data, options, fn) {
    if ("function" === typeof data) {
      fn = data;
      data = void 0;
    }
    if ("function" === typeof options) {
      fn = options;
      options = null;
    }
    if ("closing" === this.readyState || "closed" === this.readyState) {
      return;
    }
    options = options || {};
    options.compress = false !== options.compress;
    const packet = {
      type,
      data,
      options
    };
    this.emitReserved("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn) this.once("flush", fn);
    this.flush();
  }
  close() {
    const close = () => {
      this.onClose("forced close");
      this.transport.close();
    };
    const cleanupAndClose = () => {
      this.off("upgrade", cleanupAndClose);
      this.off("upgradeError", cleanupAndClose);
      close();
    };
    const waitForUpgrade = () => {
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.readyState = "closing";
      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }
    return this;
  }
  onError(err) {
    Socket.priorWebsocketSuccess = false;
    this.emitReserved("error", err);
    this.onClose("transport error", err);
  }
  onClose(reason, description) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.clearTimeoutFn(this.pingTimeoutTimer);
      this.transport.removeAllListeners("close");
      this.transport.close();
      this.transport.removeAllListeners();
      if (typeof removeEventListener === "function") {
        removeEventListener("beforeunload", this.beforeunloadEventListener, false);
        removeEventListener("offline", this.offlineEventListener, false);
      }
      this.readyState = "closed";
      this.id = null;
      this.emitReserved("close", reason, description);
      this.writeBuffer = [];
      this.prevBufferLen = 0;
    }
  }
  filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    let i2 = 0;
    const j = upgrades.length;
    for (; i2 < j; i2++) {
      if (~this.transports.indexOf(upgrades[i2])) filteredUpgrades.push(upgrades[i2]);
    }
    return filteredUpgrades;
  }
};
Socket.protocol = import_engine4.protocol;

// node_modules/engine.io-client/build/esm/index.js
var protocol2 = Socket.protocol;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9lbmdpbmUuaW8tY2xpZW50LjYuNC4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2dsb2JhbFRoaXMuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS91dGlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS9jb250cmliL3llYXN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIvcGFyc2Vxcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS9jb250cmliL2hhcy1jb3JzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMveG1saHR0cHJlcXVlc3QuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3BvbGxpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdHJhbnNwb3J0cy93ZWJzb2NrZXQtY29uc3RydWN0b3IuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3dlYnNvY2tldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIvcGFyc2V1cmkuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vc29ja2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2luZGV4LmpzIl0sIm5hbWVzIjpbImVuZ2luZV9pb19jbGllbnRfNl80XzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiU29ja2V0IiwiVHJhbnNwb3J0IiwiaW5zdGFsbFRpbWVyRnVuY3Rpb25zIiwibmV4dFRpY2siLCJwYXJzZSIsInByb3RvY29sIiwicHJvdG9jb2wyIiwidHJhbnNwb3J0cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJnbG9iYWxUaGlzU2hpbSIsInNlbGYiLCJ3aW5kb3ciLCJGdW5jdGlvbiIsInBpY2siLCJvYmoiLCJhdHRyIiwicmVkdWNlIiwiYWNjIiwiayIsImhhc093blByb3BlcnR5IiwiTkFUSVZFX1NFVF9USU1FT1VUIiwic2V0VGltZW91dCIsIk5BVElWRV9DTEVBUl9USU1FT1VUIiwiY2xlYXJUaW1lb3V0Iiwib3B0cyIsInVzZU5hdGl2ZVRpbWVycyIsInNldFRpbWVvdXRGbiIsImJpbmQiLCJjbGVhclRpbWVvdXRGbiIsIkJBU0U2NF9PVkVSSEVBRCIsImJ5dGVMZW5ndGgiLCJ1dGY4TGVuZ3RoIiwiTWF0aCIsImNlaWwiLCJzaXplIiwic3RyIiwiYyIsImxlbmd0aDIiLCJpMiIsImwiLCJsZW5ndGgiLCJjaGFyQ29kZUF0IiwiaW1wb3J0X2VuZ2luZSIsInJlcXVpcmUiLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIiLCJUcmFuc3BvcnRFcnJvciIsIkVycm9yIiwiY29uc3RydWN0b3IiLCJyZWFzb24iLCJkZXNjcmlwdGlvbiIsImNvbnRleHQiLCJ0eXBlIiwiRW1pdHRlciIsIndyaXRhYmxlIiwicXVlcnkiLCJzb2NrZXQiLCJvbkVycm9yIiwiZW1pdFJlc2VydmVkIiwib3BlbiIsInJlYWR5U3RhdGUiLCJkb09wZW4iLCJjbG9zZSIsImRvQ2xvc2UiLCJvbkNsb3NlIiwic2VuZCIsInBhY2tldHMiLCJ3cml0ZSIsIm9uT3BlbiIsIm9uRGF0YSIsImRhdGEiLCJwYWNrZXQiLCJkZWNvZGVQYWNrZXQiLCJiaW5hcnlUeXBlIiwib25QYWNrZXQiLCJkZXRhaWxzIiwicGF1c2UiLCJvblBhdXNlIiwiYWxwaGFiZXQiLCJzcGxpdCIsIm1hcCIsInNlZWQiLCJpIiwicHJldiIsImVuY29kZSIsIm51bSIsImVuY29kZWQiLCJmbG9vciIsImRlY29kZSIsImRlY29kZWQiLCJjaGFyQXQiLCJ5ZWFzdCIsIm5vdyIsIkRhdGUiLCJlbmNvZGUyIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZGVjb2RlMiIsInFzIiwicXJ5IiwicGFpcnMiLCJwYWlyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwidmFsdWUiLCJYTUxIdHRwUmVxdWVzdCIsImVyciIsImhhc0NPUlMiLCJYSFIiLCJ4ZG9tYWluIiwiZSIsImNvbmNhdCIsImpvaW4iLCJpbXBvcnRfZW5naW5lMiIsImltcG9ydF9jb21wb25lbnRfZW1pdHRlcjIiLCJlbXB0eSIsImhhc1hIUjIiLCJ4aHIiLCJyZXNwb25zZVR5cGUiLCJQb2xsaW5nIiwicG9sbGluZyIsImxvY2F0aW9uIiwiaXNTU0wiLCJwb3J0IiwieGQiLCJob3N0bmFtZSIsInhzIiwic2VjdXJlIiwiZm9yY2VCYXNlNjQiLCJzdXBwb3J0c0JpbmFyeSIsIm5hbWUiLCJwb2xsIiwidG90YWwiLCJvbmNlIiwiZG9Qb2xsIiwiY2FsbGJhY2siLCJkZWNvZGVQYXlsb2FkIiwiZm9yRWFjaCIsImVuY29kZVBheWxvYWQiLCJkb1dyaXRlIiwidXJpIiwic2NoZW1hIiwidGltZXN0YW1wUmVxdWVzdHMiLCJ0aW1lc3RhbXBQYXJhbSIsInNpZCIsImI2NCIsIk51bWJlciIsImVuY29kZWRRdWVyeSIsImlwdjYiLCJpbmRleE9mIiwicGF0aCIsInJlcXVlc3QiLCJPYmplY3QiLCJhc3NpZ24iLCJSZXF1ZXN0IiwiZm4iLCJyZXEiLCJtZXRob2QiLCJvbiIsInhoclN0YXR1cyIsInBvbGxYaHIiLCJhc3luYyIsImNyZWF0ZSIsInhzY2hlbWUiLCJleHRyYUhlYWRlcnMiLCJzZXREaXNhYmxlSGVhZGVyQ2hlY2siLCJzZXRSZXF1ZXN0SGVhZGVyIiwid2l0aENyZWRlbnRpYWxzIiwicmVxdWVzdFRpbWVvdXQiLCJ0aW1lb3V0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwic3RhdHVzIiwib25Mb2FkIiwiZG9jdW1lbnQiLCJpbmRleCIsInJlcXVlc3RzQ291bnQiLCJyZXF1ZXN0cyIsImNsZWFudXAiLCJmcm9tRXJyb3IiLCJhYm9ydCIsInJlc3BvbnNlVGV4dCIsImF0dGFjaEV2ZW50IiwidW5sb2FkSGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZXJtaW5hdGlvbkV2ZW50IiwiaXNQcm9taXNlQXZhaWxhYmxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYiIsInRoZW4iLCJXZWJTb2NrZXQiLCJNb3pXZWJTb2NrZXQiLCJ1c2luZ0Jyb3dzZXJXZWJTb2NrZXQiLCJkZWZhdWx0QmluYXJ5VHlwZSIsImltcG9ydF9lbmdpbmUzIiwiaXNSZWFjdE5hdGl2ZSIsIm5hdmlnYXRvciIsInByb2R1Y3QiLCJ0b0xvd2VyQ2FzZSIsIldTIiwiY2hlY2siLCJwcm90b2NvbHMiLCJoZWFkZXJzIiwid3MiLCJhZGRFdmVudExpc3RlbmVycyIsIm9ub3BlbiIsImF1dG9VbnJlZiIsIl9zb2NrZXQiLCJ1bnJlZiIsIm9uY2xvc2UiLCJjbG9zZUV2ZW50Iiwib25tZXNzYWdlIiwiZXYiLCJvbmVycm9yIiwibGFzdFBhY2tldCIsImVuY29kZVBhY2tldCIsIm9wdGlvbnMiLCJjb21wcmVzcyIsInBlck1lc3NhZ2VEZWZsYXRlIiwibGVuIiwiQnVmZmVyIiwidGhyZXNob2xkIiwid2Vic29ja2V0IiwicmUiLCJwYXJ0cyIsInNyYyIsImIiLCJzdWJzdHJpbmciLCJyZXBsYWNlIiwibSIsImV4ZWMiLCJzb3VyY2UiLCJob3N0IiwiYXV0aG9yaXR5IiwiaXB2NnVyaSIsInBhdGhOYW1lcyIsInF1ZXJ5S2V5IiwicmVneCIsIm5hbWVzIiwic2xpY2UiLCJzcGxpY2UiLCIkMCIsIiQxIiwiJDIiLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIzIiwiaW1wb3J0X2VuZ2luZTQiLCJ3cml0ZUJ1ZmZlciIsInByZXZCdWZmZXJMZW4iLCJhZ2VudCIsInVwZ3JhZGUiLCJyZW1lbWJlclVwZ3JhZGUiLCJhZGRUcmFpbGluZ1NsYXNoIiwicmVqZWN0VW5hdXRob3JpemVkIiwidHJhbnNwb3J0T3B0aW9ucyIsImNsb3NlT25CZWZvcmV1bmxvYWQiLCJpZCIsInVwZ3JhZGVzIiwicGluZ0ludGVydmFsIiwicGluZ1RpbWVvdXQiLCJwaW5nVGltZW91dFRpbWVyIiwiYmVmb3JldW5sb2FkRXZlbnRMaXN0ZW5lciIsInRyYW5zcG9ydCIsInJlbW92ZUFsbExpc3RlbmVycyIsIm9mZmxpbmVFdmVudExpc3RlbmVyIiwiY3JlYXRlVHJhbnNwb3J0IiwiRUlPIiwicHJpb3JXZWJzb2NrZXRTdWNjZXNzIiwic2hpZnQiLCJzZXRUcmFuc3BvcnQiLCJvbkRyYWluIiwicHJvYmUiLCJmYWlsZWQiLCJvblRyYW5zcG9ydE9wZW4iLCJtc2ciLCJ1cGdyYWRpbmciLCJmbHVzaCIsImZyZWV6ZVRyYW5zcG9ydCIsImVycm9yIiwib25UcmFuc3BvcnRDbG9zZSIsIm9udXBncmFkZSIsInRvIiwicmVtb3ZlTGlzdGVuZXIiLCJvZmYiLCJvbkhhbmRzaGFrZSIsIkpTT04iLCJyZXNldFBpbmdUaW1lb3V0Iiwic2VuZFBhY2tldCIsImNvZGUiLCJmaWx0ZXJVcGdyYWRlcyIsIm1heFBheWxvYWQiLCJnZXRXcml0YWJsZVBhY2tldHMiLCJzaG91bGRDaGVja1BheWxvYWRTaXplIiwicGF5bG9hZFNpemUiLCJwdXNoIiwiY2xlYW51cEFuZENsb3NlIiwid2FpdEZvclVwZ3JhZGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZmlsdGVyZWRVcGdyYWRlcyIsImoiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDhCQUFB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SzlNLFlBQUEsQ0FBYSxTQUFTOEMsR0FBRztJQUM5QixLQUFLeEMsT0FBQSxDQUFRLG1CQUFtQndDLEdBQUc7RUFDdkM7RUFNQXhDLFFBQVFmLE1BQUEsRUFBUUMsV0FBQSxFQUFhO0lBQ3pCLElBQUksY0FBYyxLQUFLVSxVQUFBLElBQ25CLFdBQVcsS0FBS0EsVUFBQSxJQUNoQixjQUFjLEtBQUtBLFVBQUEsRUFBWTtNQUUvQixLQUFLL0IsY0FBQSxDQUFlLEtBQUtvTyxnQkFBZ0I7TUFFekMsS0FBS0UsU0FBQSxDQUFVQyxrQkFBQSxDQUFtQixPQUFPO01BRXpDLEtBQUtELFNBQUEsQ0FBVXJNLEtBQUEsRUFBTTtNQUVyQixLQUFLcU0sU0FBQSxDQUFVQyxrQkFBQSxFQUFtQjtNQUNsQyxJQUFJLE9BQU9rQyxtQkFBQSxLQUF3QixZQUFZO1FBQzNDQSxtQkFBQSxDQUFvQixnQkFBZ0IsS0FBS3BDLHlCQUFBLEVBQTJCLEtBQUs7UUFDekVvQyxtQkFBQSxDQUFvQixXQUFXLEtBQUtqQyxvQkFBQSxFQUFzQixLQUFLO01BQ25FO01BRUEsS0FBS3pNLFVBQUEsR0FBYTtNQUVsQixLQUFLaU0sRUFBQSxHQUFLO01BRVYsS0FBS25NLFlBQUEsQ0FBYSxTQUFTVCxNQUFBLEVBQVFDLFdBQVc7TUFHOUMsS0FBS2tNLFdBQUEsR0FBYyxFQUFDO01BQ3BCLEtBQUtDLGFBQUEsR0FBZ0I7SUFDekI7RUFDSjtFQU9BeUMsZUFBZWhDLFFBQUEsRUFBVTtJQUNyQixNQUFNeUMsZ0JBQUEsR0FBbUIsRUFBQztJQUMxQixJQUFJaFEsRUFBQSxHQUFJO0lBQ1IsTUFBTWlRLENBQUEsR0FBSTFDLFFBQUEsQ0FBU3JOLE1BQUE7SUFDbkIsT0FBT0YsRUFBQSxHQUFJaVEsQ0FBQSxFQUFHalEsRUFBQSxJQUFLO01BQ2YsSUFBSSxDQUFDLEtBQUtqQyxVQUFBLENBQVc2SSxPQUFBLENBQVEyRyxRQUFBLENBQVN2TixFQUFBLENBQUUsR0FDcENnUSxnQkFBQSxDQUFpQkosSUFBQSxDQUFLckMsUUFBQSxDQUFTdk4sRUFBQSxDQUFFO0lBQ3pDO0lBQ0EsT0FBT2dRLGdCQUFBO0VBQ1g7QUFDSjtBQUNBeFMsTUFBQSxDQUFPSyxRQUFBLEdBQVcrTyxjQUFBLENBQUEvTyxRQUFBOzs7QUM5akJYLElBQU1DLFNBQUEsR0FBV04sTUFBQSxDQUFPSyxRQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==