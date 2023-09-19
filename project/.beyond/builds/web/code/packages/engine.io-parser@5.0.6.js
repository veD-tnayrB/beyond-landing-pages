System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.0.6"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
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

// .beyond/uimport/engine.io-parser.5.0.6.js
var engine_io_parser_5_0_6_exports = {};
__export(engine_io_parser_5_0_6_exports, {
  decodePacket: () => decodePacket_browser_default,
  decodePayload: () => decodePayload,
  encodePacket: () => encodePacket_browser_default,
  encodePayload: () => encodePayload,
  protocol: () => protocol
});
module.exports = __toCommonJS(engine_io_parser_5_0_6_exports);

// node_modules/engine.io-parser/build/esm/commons.js
var PACKET_TYPES = /* @__PURE__ */Object.create(null);
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
var PACKET_TYPES_REVERSE = /* @__PURE__ */Object.create(null);
Object.keys(PACKET_TYPES).forEach(key => {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
var ERROR_PACKET = {
  type: "error",
  data: "parser error"
};

// node_modules/engine.io-parser/build/esm/encodePacket.browser.js
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var isView = obj => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};
var encodePacket = ({
  type,
  data
}, supportsBinary, callback) => {
  if (withNativeBlob && data instanceof Blob) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(data, callback);
    }
  } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(new Blob([data]), callback);
    }
  }
  return callback(PACKET_TYPES[type] + (data || ""));
};
var encodeBlobAsBase64 = (data, callback) => {
  const fileReader = new FileReader();
  fileReader.onload = function () {
    const content = fileReader.result.split(",")[1];
    callback("b" + (content || ""));
  };
  return fileReader.readAsDataURL(data);
};
var encodePacket_browser_default = encodePacket;

// node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (let i = 0; i < chars.length; i++) {
  lookup[chars.charCodeAt(i)] = i;
}
var encode = arraybuffer => {
  let bytes = new Uint8Array(arraybuffer),
    i,
    len = bytes.length,
    base64 = "";
  for (i = 0; i < len; i += 3) {
    base64 += chars[bytes[i] >> 2];
    base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
    base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
    base64 += chars[bytes[i + 2] & 63];
  }
  if (len % 3 === 2) {
    base64 = base64.substring(0, base64.length - 1) + "=";
  } else if (len % 3 === 1) {
    base64 = base64.substring(0, base64.length - 2) + "==";
  }
  return base64;
};
var decode = base64 => {
  let bufferLength = base64.length * 0.75,
    len = base64.length,
    i,
    p = 0,
    encoded1,
    encoded2,
    encoded3,
    encoded4;
  if (base64[base64.length - 1] === "=") {
    bufferLength--;
    if (base64[base64.length - 2] === "=") {
      bufferLength--;
    }
  }
  const arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);
  for (i = 0; i < len; i += 4) {
    encoded1 = lookup[base64.charCodeAt(i)];
    encoded2 = lookup[base64.charCodeAt(i + 1)];
    encoded3 = lookup[base64.charCodeAt(i + 2)];
    encoded4 = lookup[base64.charCodeAt(i + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return arraybuffer;
};

// node_modules/engine.io-parser/build/esm/decodePacket.browser.js
var withNativeArrayBuffer2 = typeof ArrayBuffer === "function";
var decodePacket = (encodedPacket, binaryType) => {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }
  const type = encodedPacket.charAt(0);
  if (type === "b") {
    return {
      type: "message",
      data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
  }
  const packetType = PACKET_TYPES_REVERSE[type];
  if (!packetType) {
    return ERROR_PACKET;
  }
  return encodedPacket.length > 1 ? {
    type: PACKET_TYPES_REVERSE[type],
    data: encodedPacket.substring(1)
  } : {
    type: PACKET_TYPES_REVERSE[type]
  };
};
var decodeBase64Packet = (data, binaryType) => {
  if (withNativeArrayBuffer2) {
    const decoded = decode(data);
    return mapBinary(decoded, binaryType);
  } else {
    return {
      base64: true,
      data
    };
  }
};
var mapBinary = (data, binaryType) => {
  switch (binaryType) {
    case "blob":
      return data instanceof ArrayBuffer ? new Blob([data]) : data;
    case "arraybuffer":
    default:
      return data;
  }
};
var decodePacket_browser_default = decodePacket;

// node_modules/engine.io-parser/build/esm/index.js
var SEPARATOR = String.fromCharCode(30);
var encodePayload = (packets, callback) => {
  const length = packets.length;
  const encodedPackets = new Array(length);
  let count = 0;
  packets.forEach((packet, i) => {
    encodePacket_browser_default(packet, false, encodedPacket => {
      encodedPackets[i] = encodedPacket;
      if (++count === length) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};
var decodePayload = (encodedPayload, binaryType) => {
  const encodedPackets = encodedPayload.split(SEPARATOR);
  const packets = [];
  for (let i = 0; i < encodedPackets.length; i++) {
    const decodedPacket = decodePacket_browser_default(encodedPackets[i], binaryType);
    packets.push(decodedPacket);
    if (decodedPacket.type === "error") {
      break;
    }
  }
  return packets;
};
var protocol = 4;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9lbmdpbmUuaW8tcGFyc2VyLjUuMC42LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvYnVpbGQvZXNtL2NvbW1vbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vZW5jb2RlUGFja2V0LmJyb3dzZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vY29udHJpYi9iYXNlNjQtYXJyYXlidWZmZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vZGVjb2RlUGFja2V0LmJyb3dzZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vaW5kZXguanMiXSwibmFtZXMiOlsiZW5naW5lX2lvX3BhcnNlcl81XzBfNl9leHBvcnRzIiwiX19leHBvcnQiLCJkZWNvZGVQYWNrZXQiLCJkZWNvZGVQYWNrZXRfYnJvd3Nlcl9kZWZhdWx0IiwiZGVjb2RlUGF5bG9hZCIsImVuY29kZVBhY2tldCIsImVuY29kZVBhY2tldF9icm93c2VyX2RlZmF1bHQiLCJlbmNvZGVQYXlsb2FkIiwicHJvdG9jb2wiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUEFDS0VUX1RZUEVTIiwiT2JqZWN0IiwiY3JlYXRlIiwiUEFDS0VUX1RZUEVTX1JFVkVSU0UiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsIkVSUk9SX1BBQ0tFVCIsInR5cGUiLCJkYXRhIiwid2l0aE5hdGl2ZUJsb2IiLCJCbG9iIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwid2l0aE5hdGl2ZUFycmF5QnVmZmVyIiwiQXJyYXlCdWZmZXIiLCJpc1ZpZXciLCJvYmoiLCJidWZmZXIiLCJzdXBwb3J0c0JpbmFyeSIsImNhbGxiYWNrIiwiZW5jb2RlQmxvYkFzQmFzZTY0IiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJjb250ZW50IiwicmVzdWx0Iiwic3BsaXQiLCJyZWFkQXNEYXRhVVJMIiwiY2hhcnMiLCJsb29rdXAiLCJVaW50OEFycmF5IiwiaSIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJlbmNvZGUiLCJhcnJheWJ1ZmZlciIsImJ5dGVzIiwibGVuIiwiYmFzZTY0Iiwic3Vic3RyaW5nIiwiZGVjb2RlIiwiYnVmZmVyTGVuZ3RoIiwicCIsImVuY29kZWQxIiwiZW5jb2RlZDIiLCJlbmNvZGVkMyIsImVuY29kZWQ0Iiwid2l0aE5hdGl2ZUFycmF5QnVmZmVyMiIsImVuY29kZWRQYWNrZXQiLCJiaW5hcnlUeXBlIiwibWFwQmluYXJ5IiwiY2hhckF0IiwiZGVjb2RlQmFzZTY0UGFja2V0IiwicGFja2V0VHlwZSIsImRlY29kZWQiLCJTRVBBUkFUT1IiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJwYWNrZXRzIiwiZW5jb2RlZFBhY2tldHMiLCJBcnJheSIsImNvdW50IiwicGFja2V0Iiwiam9pbiIsImVuY29kZWRQYXlsb2FkIiwiZGVjb2RlZFBhY2tldCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDhCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsOEJBQUE7RUFBQUUsWUFBQSxFQUFBQSxDQUFBLEtBQUFDLDRCQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQyw0QkFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBWCw4QkFBQTs7O0FDQUEsSUFBTVksWUFBQSxHQUFlLGVBQUFDLE1BQUEsQ0FBT0MsTUFBQSxDQUFPLElBQUk7QUFDdkNGLFlBQUEsQ0FBYSxVQUFVO0FBQ3ZCQSxZ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