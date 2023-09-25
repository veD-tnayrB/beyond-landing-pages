System.register(["engine.io-parser@5.0.6","@socket.io/component-emitter@3.1.0","engine.io-client@6.4.0","socket.io-parser@4.2.2"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.0.6"],["@socket.io/component-emitter","3.1.0"],["engine.io-client","6.4.0"],["socket.io-client","4.6.1"],["socket.io-parser","4.2.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('engine.io-parser@5.0.6', dep), dep => dependencies.set('@socket.io/component-emitter@3.1.0', dep), dep => dependencies.set('engine.io-client@6.4.0', dep), dep => dependencies.set('socket.io-parser@4.2.2', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/socket.io-client.4.6.1.js
var socket_io_client_4_6_1_exports = {};
__export(socket_io_client_4_6_1_exports, {
  Manager: () => Manager,
  Socket: () => Socket,
  connect: () => lookup,
  default: () => socket_io_client_4_6_1_default,
  io: () => lookup,
  protocol: () => import_socket4.protocol
});
module.exports = __toCommonJS(socket_io_client_4_6_1_exports);

// node_modules/socket.io-client/build/esm/url.js
var import_engine = require("engine.io-client@6.4.0");
function url(uri, path = "", loc) {
  let obj = uri;
  loc = loc || typeof location !== "undefined" && location;
  if (null == uri) uri = loc.protocol + "//" + loc.host;
  if (typeof uri === "string") {
    if ("/" === uri.charAt(0)) {
      if ("/" === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }
    if (!/^(https?|wss?):\/\//.test(uri)) {
      if ("undefined" !== typeof loc) {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    }
    obj = (0, import_engine.parse)(uri);
  }
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }
  obj.path = obj.path || "/";
  const ipv6 = obj.host.indexOf(":") !== -1;
  const host = ipv6 ? "[" + obj.host + "]" : obj.host;
  obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
}

// node_modules/socket.io-client/build/esm/on.js
function on(obj, ev, fn) {
  obj.on(ev, fn);
  return function subDestroy() {
    obj.off(ev, fn);
  };
}

// node_modules/socket.io-client/build/esm/socket.js
var import_socket = require("socket.io-parser@4.2.2");
var import_component_emitter = require("@socket.io/component-emitter@3.1.0");
var RESERVED_EVENTS = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1
});
var Socket = class extends import_component_emitter.Emitter {
  constructor(io, nsp, opts) {
    super();
    this.connected = false;
    this.recovered = false;
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this._queue = [];
    this._queueSeq = 0;
    this.ids = 0;
    this.acks = {};
    this.flags = {};
    this.io = io;
    this.nsp = nsp;
    if (opts && opts.auth) {
      this.auth = opts.auth;
    }
    this._opts = Object.assign({}, opts);
    if (this.io._autoConnect) this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const io = this.io;
    this.subs = [on(io, "open", this.onopen.bind(this)), on(io, "packet", this.onpacket.bind(this)), on(io, "error", this.onerror.bind(this)), on(io, "close", this.onclose.bind(this))];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    if (this.connected) return this;
    this.subEvents();
    if (!this.io["_reconnecting"]) this.io.open();
    if ("open" === this.io._readyState) this.onopen();
    return this;
  }
  open() {
    return this.connect();
  }
  send(...args) {
    args.unshift("message");
    this.emit.apply(this, args);
    return this;
  }
  emit(ev, ...args) {
    if (RESERVED_EVENTS.hasOwnProperty(ev)) {
      throw new Error('"' + ev.toString() + '" is a reserved event name');
    }
    args.unshift(ev);
    if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
      this._addToQueue(args);
      return this;
    }
    const packet = {
      type: import_socket.PacketType.EVENT,
      data: args
    };
    packet.options = {};
    packet.options.compress = this.flags.compress !== false;
    if ("function" === typeof args[args.length - 1]) {
      const id = this.ids++;
      const ack = args.pop();
      this._registerAckCallback(id, ack);
      packet.id = id;
    }
    const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
    if (discardPacket) {} else if (this.connected) {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }
    this.flags = {};
    return this;
  }
  _registerAckCallback(id, ack) {
    var _a;
    const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
    if (timeout === void 0) {
      this.acks[id] = ack;
      return;
    }
    const timer = this.io.setTimeoutFn(() => {
      delete this.acks[id];
      for (let i = 0; i < this.sendBuffer.length; i++) {
        if (this.sendBuffer[i].id === id) {
          this.sendBuffer.splice(i, 1);
        }
      }
      ack.call(this, new Error("operation has timed out"));
    }, timeout);
    this.acks[id] = (...args) => {
      this.io.clearTimeoutFn(timer);
      ack.apply(this, [null, ...args]);
    };
  }
  emitWithAck(ev, ...args) {
    const withErr = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
    return new Promise((resolve, reject) => {
      args.push((arg1, arg2) => {
        if (withErr) {
          return arg1 ? reject(arg1) : resolve(arg2);
        } else {
          return resolve(arg1);
        }
      });
      this.emit(ev, ...args);
    });
  }
  _addToQueue(args) {
    let ack;
    if (typeof args[args.length - 1] === "function") {
      ack = args.pop();
    }
    const packet = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: false,
      args,
      flags: Object.assign({
        fromQueue: true
      }, this.flags)
    };
    args.push((err, ...responseArgs) => {
      if (packet !== this._queue[0]) {
        return;
      }
      const hasError = err !== null;
      if (hasError) {
        if (packet.tryCount > this._opts.retries) {
          this._queue.shift();
          if (ack) {
            ack(err);
          }
        }
      } else {
        this._queue.shift();
        if (ack) {
          ack(null, ...responseArgs);
        }
      }
      packet.pending = false;
      return this._drainQueue();
    });
    this._queue.push(packet);
    this._drainQueue();
  }
  _drainQueue(force = false) {
    if (!this.connected || this._queue.length === 0) {
      return;
    }
    const packet = this._queue[0];
    if (packet.pending && !force) {
      return;
    }
    packet.pending = true;
    packet.tryCount++;
    this.flags = packet.flags;
    this.emit.apply(this, packet.args);
  }
  packet(packet) {
    packet.nsp = this.nsp;
    this.io._packet(packet);
  }
  onopen() {
    if (typeof this.auth == "function") {
      this.auth(data => {
        this._sendConnectPacket(data);
      });
    } else {
      this._sendConnectPacket(this.auth);
    }
  }
  _sendConnectPacket(data) {
    this.packet({
      type: import_socket.PacketType.CONNECT,
      data: this._pid ? Object.assign({
        pid: this._pid,
        offset: this._lastOffset
      }, data) : data
    });
  }
  onerror(err) {
    if (!this.connected) {
      this.emitReserved("connect_error", err);
    }
  }
  onclose(reason, description) {
    this.connected = false;
    delete this.id;
    this.emitReserved("disconnect", reason, description);
  }
  onpacket(packet) {
    const sameNamespace = packet.nsp === this.nsp;
    if (!sameNamespace) return;
    switch (packet.type) {
      case import_socket.PacketType.CONNECT:
        if (packet.data && packet.data.sid) {
          this.onconnect(packet.data.sid, packet.data.pid);
        } else {
          this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        }
        break;
      case import_socket.PacketType.EVENT:
      case import_socket.PacketType.BINARY_EVENT:
        this.onevent(packet);
        break;
      case import_socket.PacketType.ACK:
      case import_socket.PacketType.BINARY_ACK:
        this.onack(packet);
        break;
      case import_socket.PacketType.DISCONNECT:
        this.ondisconnect();
        break;
      case import_socket.PacketType.CONNECT_ERROR:
        this.destroy();
        const err = new Error(packet.data.message);
        err.data = packet.data.data;
        this.emitReserved("connect_error", err);
        break;
    }
  }
  onevent(packet) {
    const args = packet.data || [];
    if (null != packet.id) {
      args.push(this.ack(packet.id));
    }
    if (this.connected) {
      this.emitEvent(args);
    } else {
      this.receiveBuffer.push(Object.freeze(args));
    }
  }
  emitEvent(args) {
    if (this._anyListeners && this._anyListeners.length) {
      const listeners = this._anyListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, args);
      }
    }
    super.emit.apply(this, args);
    if (this._pid && args.length && typeof args[args.length - 1] === "string") {
      this._lastOffset = args[args.length - 1];
    }
  }
  ack(id) {
    const self = this;
    let sent = false;
    return function (...args) {
      if (sent) return;
      sent = true;
      self.packet({
        type: import_socket.PacketType.ACK,
        id,
        data: args
      });
    };
  }
  onack(packet) {
    const ack = this.acks[packet.id];
    if ("function" === typeof ack) {
      ack.apply(this, packet.data);
      delete this.acks[packet.id];
    } else {}
  }
  onconnect(id, pid) {
    this.id = id;
    this.recovered = pid && this._pid === pid;
    this._pid = pid;
    this.connected = true;
    this.emitBuffered();
    this.emitReserved("connect");
    this._drainQueue(true);
  }
  emitBuffered() {
    this.receiveBuffer.forEach(args => this.emitEvent(args));
    this.receiveBuffer = [];
    this.sendBuffer.forEach(packet => {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    });
    this.sendBuffer = [];
  }
  ondisconnect() {
    this.destroy();
    this.onclose("io server disconnect");
  }
  destroy() {
    if (this.subs) {
      this.subs.forEach(subDestroy => subDestroy());
      this.subs = void 0;
    }
    this.io["_destroy"](this);
  }
  disconnect() {
    if (this.connected) {
      this.packet({
        type: import_socket.PacketType.DISCONNECT
      });
    }
    this.destroy();
    if (this.connected) {
      this.onclose("io client disconnect");
    }
    return this;
  }
  close() {
    return this.disconnect();
  }
  compress(compress) {
    this.flags.compress = compress;
    return this;
  }
  get volatile() {
    this.flags.volatile = true;
    return this;
  }
  timeout(timeout) {
    this.flags.timeout = timeout;
    return this;
  }
  onAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.push(listener);
    return this;
  }
  prependAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.unshift(listener);
    return this;
  }
  offAny(listener) {
    if (!this._anyListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyListeners;
      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyListeners = [];
    }
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.push(listener);
    return this;
  }
  prependAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.unshift(listener);
    return this;
  }
  offAnyOutgoing(listener) {
    if (!this._anyOutgoingListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyOutgoingListeners;
      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyOutgoingListeners = [];
    }
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(packet) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const listeners = this._anyOutgoingListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, packet.data);
      }
    }
  }
};

// node_modules/socket.io-client/build/esm/contrib/backo2.js
function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 1e4;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
Backoff.prototype.duration = function () {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};
Backoff.prototype.reset = function () {
  this.attempts = 0;
};
Backoff.prototype.setMin = function (min) {
  this.ms = min;
};
Backoff.prototype.setMax = function (max) {
  this.max = max;
};
Backoff.prototype.setJitter = function (jitter) {
  this.jitter = jitter;
};

// node_modules/socket.io-client/build/esm/manager.js
var import_engine2 = require("engine.io-client@6.4.0");
var parser = __toESM(require("socket.io-parser@4.2.2"), 0);
var import_component_emitter2 = require("@socket.io/component-emitter@3.1.0");
var Manager = class extends import_component_emitter2.Emitter {
  constructor(uri, opts) {
    var _a;
    super();
    this.nsps = {};
    this.subs = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = void 0;
    }
    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    this.opts = opts;
    (0, import_engine2.installTimerFunctions)(this, opts);
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1e3);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
    this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
    this.backoff = new Backoff({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(null == opts.timeout ? 2e4 : opts.timeout);
    this._readyState = "closed";
    this.uri = uri;
    const _parser = opts.parser || parser;
    this.encoder = new _parser.Encoder();
    this.decoder = new _parser.Decoder();
    this._autoConnect = opts.autoConnect !== false;
    if (this._autoConnect) this.open();
  }
  reconnection(v) {
    if (!arguments.length) return this._reconnection;
    this._reconnection = !!v;
    return this;
  }
  reconnectionAttempts(v) {
    if (v === void 0) return this._reconnectionAttempts;
    this._reconnectionAttempts = v;
    return this;
  }
  reconnectionDelay(v) {
    var _a;
    if (v === void 0) return this._reconnectionDelay;
    this._reconnectionDelay = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
    return this;
  }
  randomizationFactor(v) {
    var _a;
    if (v === void 0) return this._randomizationFactor;
    this._randomizationFactor = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
    return this;
  }
  reconnectionDelayMax(v) {
    var _a;
    if (v === void 0) return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
    return this;
  }
  timeout(v) {
    if (!arguments.length) return this._timeout;
    this._timeout = v;
    return this;
  }
  maybeReconnectOnOpen() {
    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
      this.reconnect();
    }
  }
  open(fn) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new import_engine2.Socket(this.uri, this.opts);
    const socket = this.engine;
    const self = this;
    this._readyState = "opening";
    this.skipReconnect = false;
    const openSubDestroy = on(socket, "open", function () {
      self.onopen();
      fn && fn();
    });
    const errorSub = on(socket, "error", err => {
      self.cleanup();
      self._readyState = "closed";
      this.emitReserved("error", err);
      if (fn) {
        fn(err);
      } else {
        self.maybeReconnectOnOpen();
      }
    });
    if (false !== this._timeout) {
      const timeout = this._timeout;
      if (timeout === 0) {
        openSubDestroy();
      }
      const timer = this.setTimeoutFn(() => {
        openSubDestroy();
        socket.close();
        socket.emit("error", new Error("timeout"));
      }, timeout);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }
    this.subs.push(openSubDestroy);
    this.subs.push(errorSub);
    return this;
  }
  connect(fn) {
    return this.open(fn);
  }
  onopen() {
    this.cleanup();
    this._readyState = "open";
    this.emitReserved("open");
    const socket = this.engine;
    this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(data) {
    try {
      this.decoder.add(data);
    } catch (e) {
      this.onclose("parse error", e);
    }
  }
  ondecoded(packet) {
    (0, import_engine2.nextTick)(() => {
      this.emitReserved("packet", packet);
    }, this.setTimeoutFn);
  }
  onerror(err) {
    this.emitReserved("error", err);
  }
  socket(nsp, opts) {
    let socket = this.nsps[nsp];
    if (!socket) {
      socket = new Socket(this, nsp, opts);
      this.nsps[nsp] = socket;
    } else if (this._autoConnect && !socket.active) {
      socket.connect();
    }
    return socket;
  }
  _destroy(socket) {
    const nsps = Object.keys(this.nsps);
    for (const nsp of nsps) {
      const socket2 = this.nsps[nsp];
      if (socket2.active) {
        return;
      }
    }
    this._close();
  }
  _packet(packet) {
    const encodedPackets = this.encoder.encode(packet);
    for (let i = 0; i < encodedPackets.length; i++) {
      this.engine.write(encodedPackets[i], packet.options);
    }
  }
  cleanup() {
    this.subs.forEach(subDestroy => subDestroy());
    this.subs.length = 0;
    this.decoder.destroy();
  }
  _close() {
    this.skipReconnect = true;
    this._reconnecting = false;
    this.onclose("forced close");
    if (this.engine) this.engine.close();
  }
  disconnect() {
    return this._close();
  }
  onclose(reason, description) {
    this.cleanup();
    this.backoff.reset();
    this._readyState = "closed";
    this.emitReserved("close", reason, description);
    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const self = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) {
      this.backoff.reset();
      this.emitReserved("reconnect_failed");
      this._reconnecting = false;
    } else {
      const delay = this.backoff.duration();
      this._reconnecting = true;
      const timer = this.setTimeoutFn(() => {
        if (self.skipReconnect) return;
        this.emitReserved("reconnect_attempt", self.backoff.attempts);
        if (self.skipReconnect) return;
        self.open(err => {
          if (err) {
            self._reconnecting = false;
            self.reconnect();
            this.emitReserved("reconnect_error", err);
          } else {
            self.onreconnect();
          }
        });
      }, delay);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }
  }
  onreconnect() {
    const attempt = this.backoff.attempts;
    this._reconnecting = false;
    this.backoff.reset();
    this.emitReserved("reconnect", attempt);
  }
};

// node_modules/socket.io-client/build/esm/index.js
var import_socket4 = require("socket.io-parser@4.2.2");
var cache = {};
function lookup(uri, opts) {
  if (typeof uri === "object") {
    opts = uri;
    uri = void 0;
  }
  opts = opts || {};
  const parsed = url(uri, opts.path || "/socket.io");
  const source = parsed.source;
  const id = parsed.id;
  const path = parsed.path;
  const sameNamespace = cache[id] && path in cache[id]["nsps"];
  const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
  let io;
  if (newConnection) {
    io = new Manager(source, opts);
  } else {
    if (!cache[id]) {
      cache[id] = new Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }
  return io.socket(parsed.path, opts);
}
Object.assign(lookup, {
  Manager,
  Socket,
  io: lookup,
  connect: lookup
});

// .beyond/uimport/temp/socket.io-client.4.6.1.js
var socket_io_client_4_6_1_default = lookup;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3NvY2tldC5pby1jbGllbnQuNC42LjEuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9lc20vdXJsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvZXNtL29uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvZXNtL3NvY2tldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9jb250cmliL2JhY2tvMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9tYW5hZ2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvZXNtL2luZGV4LmpzIl0sIm5hbWVzIjpbInNvY2tldF9pb19jbGllbnRfNF82XzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiTWFuYWdlciIsIlNvY2tldCIsImNvbm5lY3QiLCJsb29rdXAiLCJkZWZhdWx0Iiwic29ja2V0X2lvX2NsaWVudF80XzZfMV9kZWZhdWx0IiwiaW8iLCJwcm90b2NvbCIsImltcG9ydF9zb2NrZXQ0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9lbmdpbmUiLCJyZXF1aXJlIiwidXJsIiwidXJpIiwicGF0aCIsImxvYyIsIm9iaiIsImxvY2F0aW9uIiwiaG9zdCIsImNoYXJBdCIsInRlc3QiLCJwYXJzZSIsInBvcnQiLCJpcHY2IiwiaW5kZXhPZiIsImlkIiwiaHJlZiIsIm9uIiwiZXYiLCJmbiIsInN1YkRlc3Ryb3kiLCJvZmYiLCJpbXBvcnRfc29ja2V0IiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyIiwiUkVTRVJWRURfRVZFTlRTIiwiT2JqZWN0IiwiZnJlZXplIiwiY29ubmVjdF9lcnJvciIsImRpc2Nvbm5lY3QiLCJkaXNjb25uZWN0aW5nIiwibmV3TGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsIkVtaXR0ZXIiLCJjb25zdHJ1Y3RvciIsIm5zcCIsIm9wdHMiLCJjb25uZWN0ZWQiLCJyZWNvdmVyZWQiLCJyZWNlaXZlQnVmZmVyIiwic2VuZEJ1ZmZlciIsIl9xdWV1ZSIsIl9xdWV1ZVNlcSIsImlkcyIsImFja3MiLCJmbGFncyIsImF1dGgiLCJfb3B0cyIsImFzc2lnbiIsIl9hdXRvQ29ubmVjdCIsIm9wZW4iLCJkaXNjb25uZWN0ZWQiLCJzdWJFdmVudHMiLCJzdWJzIiwib25vcGVuIiwiYmluZCIsIm9ucGFja2V0Iiwib25lcnJvciIsIm9uY2xvc2UiLCJhY3RpdmUiLCJfcmVhZHlTdGF0ZSIsInNlbmQiLCJhcmdzIiwidW5zaGlmdCIsImVtaXQiLCJhcHBseSIsImhhc093blByb3BlcnR5IiwiRXJyb3IiLCJ0b1N0cmluZyIsInJldHJpZXMiLCJmcm9tUXVldWUiLCJ2b2xhdGlsZSIsIl9hZGRUb1F1ZXVlIiwicGFja2V0IiwidHlwZSIsIlBhY2tldFR5cGUiLCJFVkVOVCIsImRhdGEiLCJvcHRpb25zIiwiY29tcHJlc3MiLCJsZW5ndGgiLCJhY2siLCJwb3AiLCJfcmVnaXN0ZXJBY2tDYWxsYmFjayIsImlzVHJhbnNwb3J0V3JpdGFibGUiLCJlbmdpbmUiLCJ0cmFuc3BvcnQiLCJ3cml0YWJsZSIsImRpc2NhcmRQYWNrZXQiLCJub3RpZnlPdXRnb2luZ0xpc3RlbmVycyIsInB1c2giLCJfYSIsInRpbWVvdXQiLCJhY2tUaW1lb3V0IiwidGltZXIiLCJzZXRUaW1lb3V0Rm4iLCJpIiwic3BsaWNlIiwiY2FsbCIsImNsZWFyVGltZW91dEZuIiwiZW1pdFdpdGhBY2siLCJ3aXRoRXJyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhcmcxIiwiYXJnMiIsInRyeUNvdW50IiwicGVuZGluZyIsImVyciIsInJlc3BvbnNlQXJncyIsImhhc0Vycm9yIiwic2hpZnQiLCJfZHJhaW5RdWV1ZSIsImZvcmNlIiwiX3BhY2tldCIsIl9zZW5kQ29ubmVjdFBhY2tldCIsIkNPTk5FQ1QiLCJfcGlkIiwicGlkIiwib2Zmc2V0IiwiX2xhc3RPZmZzZXQiLCJlbWl0UmVzZXJ2ZWQiLCJyZWFzb24iLCJkZXNjcmlwdGlvbiIsInNhbWVOYW1lc3BhY2UiLCJzaWQiLCJvbmNvbm5lY3QiLCJCSU5BUllfRVZFTlQiLCJvbmV2ZW50IiwiQUNLIiwiQklOQVJZX0FDSyIsIm9uYWNrIiwiRElTQ09OTkVDVCIsIm9uZGlzY29ubmVjdCIsIkNPTk5FQ1RfRVJST1IiLCJkZXN0cm95IiwibWVzc2FnZSIsImVtaXRFdmVudCIsIl9hbnlMaXN0ZW5lcnMiLCJsaXN0ZW5lcnMiLCJzbGljZSIsImxpc3RlbmVyIiwic2VsZiIsInNlbnQiLCJlbWl0QnVmZmVyZWQiLCJmb3JFYWNoIiwiY2xvc2UiLCJvbkFueSIsInByZXBlbmRBbnkiLCJvZmZBbnkiLCJsaXN0ZW5lcnNBbnkiLCJvbkFueU91dGdvaW5nIiwiX2FueU91dGdvaW5nTGlzdGVuZXJzIiwicHJlcGVuZEFueU91dGdvaW5nIiwib2ZmQW55T3V0Z29pbmciLCJsaXN0ZW5lcnNBbnlPdXRnb2luZyIsIkJhY2tvZmYiLCJtcyIsIm1pbiIsIm1heCIsImZhY3RvciIsImppdHRlciIsImF0dGVtcHRzIiwicHJvdG90eXBlIiwiZHVyYXRpb24iLCJNYXRoIiwicG93IiwicmFuZCIsInJhbmRvbSIsImRldmlhdGlvbiIsImZsb29yIiwicmVzZXQiLCJzZXRNaW4iLCJzZXRNYXgiLCJzZXRKaXR0ZXIiLCJpbXBvcnRfZW5naW5lMiIsInBhcnNlciIsIl9fdG9FU00iLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIyIiwibnNwcyIsImluc3RhbGxUaW1lckZ1bmN0aW9ucyIsInJlY29ubmVjdGlvbiIsInJlY29ubmVjdGlvbkF0dGVtcHRzIiwiSW5maW5pdHkiLCJyZWNvbm5lY3Rpb25EZWxheSIsInJlY29ubmVjdGlvbkRlbGF5TWF4IiwicmFuZG9taXphdGlvbkZhY3RvciIsImJhY2tvZmYiLCJfcGFyc2VyIiwiZW5jb2RlciIsIkVuY29kZXIiLCJkZWNvZGVyIiwiRGVjb2RlciIsImF1dG9Db25uZWN0IiwidiIsImFyZ3VtZW50cyIsIl9yZWNvbm5lY3Rpb24iLCJfcmVjb25uZWN0aW9uQXR0ZW1wdHMiLCJfcmVjb25uZWN0aW9uRGVsYXkiLCJfcmFuZG9taXphdGlvbkZhY3RvciIsIl9yZWNvbm5lY3Rpb25EZWxheU1heCIsIl90aW1lb3V0IiwibWF5YmVSZWNvbm5lY3RPbk9wZW4iLCJfcmVjb25uZWN0aW5nIiwicmVjb25uZWN0Iiwic29ja2V0Iiwic2tpcFJlY29ubmVjdCIsIm9wZW5TdWJEZXN0cm95IiwiZXJyb3JTdWIiLCJjbGVhbnVwIiwiYXV0b1VucmVmIiwidW5yZWYiLCJjbGVhclRpbWVvdXQiLCJvbnBpbmciLCJvbmRhdGEiLCJvbmRlY29kZWQiLCJhZGQiLCJlIiwibmV4dFRpY2siLCJfZGVzdHJveSIsImtleXMiLCJzb2NrZXQyIiwiX2Nsb3NlIiwiZW5jb2RlZFBhY2tldHMiLCJlbmNvZGUiLCJ3cml0ZSIsImRlbGF5Iiwib25yZWNvbm5lY3QiLCJhdHRlbXB0IiwiY2FjaGUiLCJwYXJzZWQiLCJzb3VyY2UiLCJuZXdDb25uZWN0aW9uIiwiZm9yY2VOZXciLCJtdWx0aXBsZXgiLCJxdWVyeSIsInF1ZXJ5S2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSw4QkFBQTtBQUFBQyxRQUFBLENBQUFELDhCQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxNQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyw4QkFBQTtFQUFBQyxFQUFBLEVBQUFBLENBQUEsS0FBQUgsTUFBQTtFQUFBSSxRQUFBLEVBQUFBLENBQUEsS0FBQUMsY0FBQSxDQUFBRDtBQUFBO0FBQUFFLE1BQUEsQ0FB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