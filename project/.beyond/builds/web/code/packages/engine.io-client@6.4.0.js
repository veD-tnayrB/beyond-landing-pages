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

// .beyond/uimport/temp/engine.io-client.6.4.0.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2VuZ2luZS5pby1jbGllbnQuNi40LjAuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vZ2xvYmFsVGhpcy5icm93c2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3V0aWwuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdHJhbnNwb3J0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIveWVhc3QuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vY29udHJpYi9wYXJzZXFzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIvaGFzLWNvcnMuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdHJhbnNwb3J0cy94bWxodHRwcmVxdWVzdC5icm93c2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMvcG9sbGluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3dlYnNvY2tldC1jb25zdHJ1Y3Rvci5icm93c2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMvd2Vic29ja2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vY29udHJpYi9wYXJzZXVyaS5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS9zb2NrZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vaW5kZXguanMiXSwibmFtZXMiOlsiZW5naW5lX2lvX2NsaWVudF82XzRfMF9leHBvcnRzIiwiX19leHBvcnQiLCJTb2NrZXQiLCJUcmFuc3BvcnQiLCJpbnN0YWxsVGltZXJGdW5jdGlvbnMiLCJuZXh0VGljayIsInBhcnNlIiwicHJvdG9jb2wiLCJwcm90b2NvbDIiLCJ0cmFuc3BvcnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImdsb2JhbFRoaXNTaGltIiwic2VsZiIsIndpbmRvdyIsIkZ1bmN0aW9uIiwicGljayIsIm9iaiIsImF0dHIiLCJyZWR1Y2UiLCJhY2MiLCJrIiwiaGFzT3duUHJvcGVydHkiLCJOQVRJVkVfU0VUX1RJTUVPVVQiLCJzZXRUaW1lb3V0IiwiTkFUSVZFX0NMRUFSX1RJTUVPVVQiLCJjbGVhclRpbWVvdXQiLCJvcHRzIiwidXNlTmF0aXZlVGltZXJzIiwic2V0VGltZW91dEZuIiwiYmluZCIsImNsZWFyVGltZW91dEZuIiwiQkFTRTY0X09WRVJIRUFEIiwiYnl0ZUxlbmd0aCIsInV0ZjhMZW5ndGgiLCJNYXRoIiwiY2VpbCIsInNpemUiLCJzdHIiLCJjIiwibGVuZ3RoMiIsImkyIiwibCIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJpbXBvcnRfZW5naW5lIiwicmVxdWlyZSIsImltcG9ydF9jb21wb25lbnRfZW1pdHRlciIsIlRyYW5zcG9ydEVycm9yIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJlYXNvbiIsImRlc2NyaXB0aW9uIiwiY29udGV4dCIsInR5cGUiLCJFbWl0dGVyIiwid3JpdGFibGUiLCJxdWVyeSIsInNvY2tldCIsIm9uRXJyb3IiLCJlbWl0UmVzZXJ2ZWQiLCJvcGVuIiwicmVhZHlTdGF0ZSIsImRvT3BlbiIsImNsb3NlIiwiZG9DbG9zZSIsIm9uQ2xvc2UiLCJzZW5kIiwicGFja2V0cyIsIndyaXRlIiwib25PcGVuIiwib25EYXRhIiwiZGF0YSIsInBhY2tldCIsImRlY29kZVBhY2tldCIsImJpbmFyeVR5cGUiLCJvblBhY2tldCIsImRldGFpbHMiLCJwYXVzZSIsIm9uUGF1c2UiLCJhbHBoYWJldCIsInNwbGl0IiwibWFwIiwic2VlZCIsImkiLCJwcmV2IiwiZW5jb2RlIiwibnVtIiwiZW5jb2RlZCIsImZsb29yIiwiZGVjb2RlIiwiZGVjb2RlZCIsImNoYXJBdCIsInllYXN0Iiwibm93IiwiRGF0ZSIsImVuY29kZTIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkZWNvZGUyIiwicXMiLCJxcnkiLCJwYWlycyIsInBhaXIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJ2YWx1ZSIsIlhNTEh0dHBSZXF1ZXN0IiwiZXJyIiwiaGFzQ09SUyIsIlhIUiIsInhkb21haW4iLCJlIiwiY29uY2F0Iiwiam9pbiIsImltcG9ydF9lbmdpbmUyIiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyMiIsImVtcHR5IiwiaGFzWEhSMiIsInhociIsInJlc3BvbnNlVHlwZSIsIlBvbGxpbmciLCJwb2xsaW5nIiwibG9jYXRpb24iLCJpc1NTTCIsInBvcnQiLCJ4ZCIsImhvc3RuYW1lIiwieHMiLCJzZWN1cmUiLCJmb3JjZUJhc2U2NCIsInN1cHBvcnRzQmluYXJ5IiwibmFtZSIsInBvbGwiLCJ0b3RhbCIsIm9uY2UiLCJkb1BvbGwiLCJjYWxsYmFjayIsImRlY29kZVBheWxvYWQiLCJmb3JFYWNoIiwiZW5jb2RlUGF5bG9hZCIsImRvV3JpdGUiLCJ1cmkiLCJzY2hlbWEiLCJ0aW1lc3RhbXBSZXF1ZXN0cyIsInRpbWVzdGFtcFBhcmFtIiwic2lkIiwiYjY0IiwiTnVtYmVyIiwiZW5jb2RlZFF1ZXJ5IiwiaXB2NiIsImluZGV4T2YiLCJwYXRoIiwicmVxdWVzdCIsIk9iamVjdCIsImFzc2lnbiIsIlJlcXVlc3QiLCJmbiIsInJlcSIsIm1ldGhvZCIsIm9uIiwieGhyU3RhdHVzIiwicG9sbFhociIsImFzeW5jIiwiY3JlYXRlIiwieHNjaGVtZSIsImV4dHJhSGVhZGVycyIsInNldERpc2FibGVIZWFkZXJDaGVjayIsInNldFJlcXVlc3RIZWFkZXIiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyZXF1ZXN0VGltZW91dCIsInRpbWVvdXQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJzdGF0dXMiLCJvbkxvYWQiLCJkb2N1bWVudCIsImluZGV4IiwicmVxdWVzdHNDb3VudCIsInJlcXVlc3RzIiwiY2xlYW51cCIsImZyb21FcnJvciIsImFib3J0IiwicmVzcG9uc2VUZXh0IiwiYXR0YWNoRXZlbnQiLCJ1bmxvYWRIYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRlcm1pbmF0aW9uRXZlbnQiLCJpc1Byb21pc2VBdmFpbGFibGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNiIiwidGhlbiIsIldlYlNvY2tldCIsIk1veldlYlNvY2tldCIsInVzaW5nQnJvd3NlcldlYlNvY2tldCIsImRlZmF1bHRCaW5hcnlUeXBlIiwiaW1wb3J0X2VuZ2luZTMiLCJpc1JlYWN0TmF0aXZlIiwibmF2aWdhdG9yIiwicHJvZHVjdCIsInRvTG93ZXJDYXNlIiwiV1MiLCJjaGVjayIsInByb3RvY29scyIsImhlYWRlcnMiLCJ3cyIsImFkZEV2ZW50TGlzdGVuZXJzIiwib25vcGVuIiwiYXV0b1VucmVmIiwiX3NvY2tldCIsInVucmVmIiwib25jbG9zZSIsImNsb3NlRXZlbnQiLCJvbm1lc3NhZ2UiLCJldiIsIm9uZXJyb3IiLCJsYXN0UGFja2V0IiwiZW5jb2RlUGFja2V0Iiwib3B0aW9ucyIsImNvbXByZXNzIiwicGVyTWVzc2FnZURlZmxhdGUiLCJsZW4iLCJCdWZmZXIiLCJ0aHJlc2hvbGQiLCJ3ZWJzb2NrZXQiLCJyZSIsInBhcnRzIiwic3JjIiwiYiIsInN1YnN0cmluZyIsInJlcGxhY2UiLCJtIiwiZXhlYyIsInNvdXJjZSIsImhvc3QiLCJhdXRob3JpdHkiLCJpcHY2dXJpIiwicGF0aE5hbWVzIiwicXVlcnlLZXkiLCJyZWd4IiwibmFtZXMiLCJzbGljZSIsInNwbGljZSIsIiQwIiwiJDEiLCIkMiIsImltcG9ydF9jb21wb25lbnRfZW1pdHRlcjMiLCJpbXBvcnRfZW5naW5lNCIsIndyaXRlQnVmZmVyIiwicHJldkJ1ZmZlckxlbiIsImFnZW50IiwidXBncmFkZSIsInJlbWVtYmVyVXBncmFkZSIsImFkZFRyYWlsaW5nU2xhc2giLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJ0cmFuc3BvcnRPcHRpb25zIiwiY2xvc2VPbkJlZm9yZXVubG9hZCIsImlkIiwidXBncmFkZXMiLCJwaW5nSW50ZXJ2YWwiLCJwaW5nVGltZW91dCIsInBpbmdUaW1lb3V0VGltZXIiLCJiZWZvcmV1bmxvYWRFdmVudExpc3RlbmVyIiwidHJhbnNwb3J0IiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwib2ZmbGluZUV2ZW50TGlzdGVuZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJFSU8iLCJwcmlvcldlYnNvY2tldFN1Y2Nlc3MiLCJzaGlmdCIsInNldFRyYW5zcG9ydCIsIm9uRHJhaW4iLCJwcm9iZSIsImZhaWxlZCIsIm9uVHJhbnNwb3J0T3BlbiIsIm1zZyIsInVwZ3JhZGluZyIsImZsdXNoIiwiZnJlZXplVHJhbnNwb3J0IiwiZXJyb3IiLCJvblRyYW5zcG9ydENsb3NlIiwib251cGdyYWRlIiwidG8iLCJyZW1vdmVMaXN0ZW5lciIsIm9mZiIsIm9uSGFuZHNoYWtlIiwiSlNPTiIsInJlc2V0UGluZ1RpbWVvdXQiLCJzZW5kUGFja2V0IiwiY29kZSIsImZpbHRlclVwZ3JhZGVzIiwibWF4UGF5bG9hZCIsImdldFdyaXRhYmxlUGFja2V0cyIsInNob3VsZENoZWNrUGF5bG9hZFNpemUiLCJwYXlsb2FkU2l6ZSIsInB1c2giLCJjbGVhbnVwQW5kQ2xvc2UiLCJ3YWl0Rm9yVXBncmFkZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmaWx0ZXJlZFVwZ3JhZGVzIiwiaiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEs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O0lBQy9CLEtBQUs5TSxZQUFBLENBQWEsU0FBUzhDLEdBQUc7SUFDOUIsS0FBS3hDLE9BQUEsQ0FBUSxtQkFBbUJ3QyxHQUFHO0VBQ3ZDO0VBTUF4QyxRQUFRZixNQUFBLEVBQVFDLFdBQUEsRUFBYTtJQUN6QixJQUFJLGNBQWMsS0FBS1UsVUFBQSxJQUNuQixXQUFXLEtBQUtBLFVBQUEsSUFDaEIsY0FBYyxLQUFLQSxVQUFBLEVBQVk7TUFFL0IsS0FBSy9CLGNBQUEsQ0FBZSxLQUFLb08sZ0JBQWdCO01BRXpDLEtBQUtFLFNBQUEsQ0FBVUMsa0JBQUEsQ0FBbUIsT0FBTztNQUV6QyxLQUFLRCxTQUFBLENBQVVyTSxLQUFBLENBQU07TUFFckIsS0FBS3FNLFNBQUEsQ0FBVUMsa0JBQUEsQ0FBbUI7TUFDbEMsSUFBSSxPQUFPa0MsbUJBQUEsS0FBd0IsWUFBWTtRQUMzQ0EsbUJBQUEsQ0FBb0IsZ0JBQWdCLEtBQUtwQyx5QkFBQSxFQUEyQixLQUFLO1FBQ3pFb0MsbUJBQUEsQ0FBb0IsV0FBVyxLQUFLakMsb0JBQUEsRUFBc0IsS0FBSztNQUNuRTtNQUVBLEtBQUt6TSxVQUFBLEdBQWE7TUFFbEIsS0FBS2lNLEVBQUEsR0FBSztNQUVWLEtBQUtuTSxZQUFBLENBQWEsU0FBU1QsTUFBQSxFQUFRQyxXQUFXO01BRzlDLEtBQUtrTSxXQUFBLEdBQWMsRUFBQztNQUNwQixLQUFLQyxhQUFBLEdBQWdCO0lBQ3pCO0VBQ0o7RUFPQXlDLGVBQWVoQyxRQUFBLEVBQVU7SUFDckIsTUFBTXlDLGdCQUFBLEdBQW1CLEVBQUM7SUFDMUIsSUFBSWhRLEVBQUEsR0FBSTtJQUNSLE1BQU1pUSxDQUFBLEdBQUkxQyxRQUFBLENBQVNyTixNQUFBO0lBQ25CLE9BQU9GLEVBQUEsR0FBSWlRLENBQUEsRUFBR2pRLEVBQUEsSUFBSztNQUNmLElBQUksQ0FBQyxLQUFLakMsVUFBQSxDQUFXNkksT0FBQSxDQUFRMkcsUUFBQSxDQUFTdk4sRUFBQSxDQUFFLEdBQ3BDZ1EsZ0JBQUEsQ0FBaUJKLElBQUEsQ0FBS3JDLFFBQUEsQ0FBU3ZOLEVBQUEsQ0FBRTtJQUN6QztJQUNBLE9BQU9nUSxnQkFBQTtFQUNYO0FBQ0o7QUFDQXhTLE1BQUEsQ0FBT0ssUUFBQSxHQUFXK08sY0FBQSxDQUFBL08sUUFBQTs7O0FDOWpCWCxJQUFNQyxTQUFBLEdBQVdOLE1BQUEsQ0FBT0ssUUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=