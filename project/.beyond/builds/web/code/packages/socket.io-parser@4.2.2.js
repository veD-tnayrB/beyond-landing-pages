System.register(["@socket.io/component-emitter@3.1.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@socket.io/component-emitter","3.1.0"],["socket.io-parser","4.2.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@socket.io/component-emitter@3.1.0', dep)],
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

// .beyond/uimport/socket.io-parser.4.2.2.js
var socket_io_parser_4_2_2_exports = {};
__export(socket_io_parser_4_2_2_exports, {
  Decoder: () => Decoder,
  Encoder: () => Encoder,
  PacketType: () => PacketType,
  protocol: () => protocol
});
module.exports = __toCommonJS(socket_io_parser_4_2_2_exports);

// node_modules/socket.io-parser/build/esm/is-binary.js
var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var isView = obj => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
function isBinary(obj) {
  return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  if (Array.isArray(obj)) {
    for (let i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }
  if (isBinary(obj)) {
    return true;
  }
  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }
  return false;
}

// node_modules/socket.io-parser/build/esm/binary.js
function deconstructPacket(packet) {
  const buffers = [];
  const packetData = packet.data;
  const pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length;
  return {
    packet: pack,
    buffers
  };
}
function _deconstructPacket(data, buffers) {
  if (!data) return data;
  if (isBinary(data)) {
    const placeholder = {
      _placeholder: true,
      num: buffers.length
    };
    buffers.push(data);
    return placeholder;
  } else if (Array.isArray(data)) {
    const newData = new Array(data.length);
    for (let i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if (typeof data === "object" && !(data instanceof Date)) {
    const newData = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        newData[key] = _deconstructPacket(data[key], buffers);
      }
    }
    return newData;
  }
  return data;
}
function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  delete packet.attachments;
  return packet;
}
function _reconstructPacket(data, buffers) {
  if (!data) return data;
  if (data && data._placeholder === true) {
    const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
    if (isIndexValid) {
      return buffers[data.num];
    } else {
      throw new Error("illegal attachments");
    }
  } else if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === "object") {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        data[key] = _reconstructPacket(data[key], buffers);
      }
    }
  }
  return data;
}

// node_modules/socket.io-parser/build/esm/index.js
var import_component_emitter = require("@socket.io/component-emitter@3.1.0");
var protocol = 5;
var PacketType;
(function (PacketType2) {
  PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
  PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
  PacketType2[PacketType2["ACK"] = 3] = "ACK";
  PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
var Encoder = class {
  constructor(replacer) {
    this.replacer = replacer;
  }
  encode(obj) {
    if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
      if (hasBinary(obj)) {
        return this.encodeAsBinary({
          type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
          nsp: obj.nsp,
          data: obj.data,
          id: obj.id
        });
      }
    }
    return [this.encodeAsString(obj)];
  }
  encodeAsString(obj) {
    let str = "" + obj.type;
    if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
      str += obj.attachments + "-";
    }
    if (obj.nsp && "/" !== obj.nsp) {
      str += obj.nsp + ",";
    }
    if (null != obj.id) {
      str += obj.id;
    }
    if (null != obj.data) {
      str += JSON.stringify(obj.data, this.replacer);
    }
    return str;
  }
  encodeAsBinary(obj) {
    const deconstruction = deconstructPacket(obj);
    const pack = this.encodeAsString(deconstruction.packet);
    const buffers = deconstruction.buffers;
    buffers.unshift(pack);
    return buffers;
  }
};
var Decoder = class extends import_component_emitter.Emitter {
  constructor(reviver) {
    super();
    this.reviver = reviver;
  }
  add(obj) {
    let packet;
    if (typeof obj === "string") {
      if (this.reconstructor) {
        throw new Error("got plaintext data when reconstructing a packet");
      }
      packet = this.decodeString(obj);
      const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
      if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
        packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
        this.reconstructor = new BinaryReconstructor(packet);
        if (packet.attachments === 0) {
          super.emitReserved("decoded", packet);
        }
      } else {
        super.emitReserved("decoded", packet);
      }
    } else if (isBinary(obj) || obj.base64) {
      if (!this.reconstructor) {
        throw new Error("got binary data when not reconstructing a packet");
      } else {
        packet = this.reconstructor.takeBinaryData(obj);
        if (packet) {
          this.reconstructor = null;
          super.emitReserved("decoded", packet);
        }
      }
    } else {
      throw new Error("Unknown type: " + obj);
    }
  }
  decodeString(str) {
    let i = 0;
    const p = {
      type: Number(str.charAt(0))
    };
    if (PacketType[p.type] === void 0) {
      throw new Error("unknown packet type " + p.type);
    }
    if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
      const start = i + 1;
      while (str.charAt(++i) !== "-" && i != str.length) {}
      const buf = str.substring(start, i);
      if (buf != Number(buf) || str.charAt(i) !== "-") {
        throw new Error("Illegal attachments");
      }
      p.attachments = Number(buf);
    }
    if ("/" === str.charAt(i + 1)) {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if ("," === c) break;
        if (i === str.length) break;
      }
      p.nsp = str.substring(start, i);
    } else {
      p.nsp = "/";
    }
    const next = str.charAt(i + 1);
    if ("" !== next && Number(next) == next) {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if (null == c || Number(c) != c) {
          --i;
          break;
        }
        if (i === str.length) break;
      }
      p.id = Number(str.substring(start, i + 1));
    }
    if (str.charAt(++i)) {
      const payload = this.tryParse(str.substr(i));
      if (Decoder.isPayloadValid(p.type, payload)) {
        p.data = payload;
      } else {
        throw new Error("invalid payload");
      }
    }
    return p;
  }
  tryParse(str) {
    try {
      return JSON.parse(str, this.reviver);
    } catch (e) {
      return false;
    }
  }
  static isPayloadValid(type, payload) {
    switch (type) {
      case PacketType.CONNECT:
        return typeof payload === "object";
      case PacketType.DISCONNECT:
        return payload === void 0;
      case PacketType.CONNECT_ERROR:
        return typeof payload === "string" || typeof payload === "object";
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        return Array.isArray(payload) && payload.length > 0;
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        return Array.isArray(payload);
    }
  }
  destroy() {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
      this.reconstructor = null;
    }
  }
};
var BinaryReconstructor = class {
  constructor(packet) {
    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  takeBinaryData(binData) {
    this.buffers.push(binData);
    if (this.buffers.length === this.reconPack.attachments) {
      const packet = reconstructPacket(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }
    return null;
  }
  finishedReconstruction() {
    this.reconPack = null;
    this.buffers = [];
  }
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9zb2NrZXQuaW8tcGFyc2VyLjQuMi4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvYnVpbGQvZXNtL2lzLWJpbmFyeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2J1aWxkL2VzbS9iaW5hcnkuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9idWlsZC9lc20vaW5kZXguanMiXSwibmFtZXMiOlsic29ja2V0X2lvX3BhcnNlcl80XzJfMl9leHBvcnRzIiwiX19leHBvcnQiLCJEZWNvZGVyIiwiRW5jb2RlciIsIlBhY2tldFR5cGUiLCJwcm90b2NvbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJ3aXRoTmF0aXZlQXJyYXlCdWZmZXIiLCJBcnJheUJ1ZmZlciIsImlzVmlldyIsIm9iaiIsImJ1ZmZlciIsInRvU3RyaW5nIiwiT2JqZWN0IiwicHJvdG90eXBlIiwid2l0aE5hdGl2ZUJsb2IiLCJCbG9iIiwiY2FsbCIsIndpdGhOYXRpdmVGaWxlIiwiRmlsZSIsImlzQmluYXJ5IiwiaGFzQmluYXJ5IiwidG9KU09OIiwiQXJyYXkiLCJpc0FycmF5IiwiaSIsImwiLCJsZW5ndGgiLCJhcmd1bWVudHMiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImRlY29uc3RydWN0UGFja2V0IiwicGFja2V0IiwiYnVmZmVycyIsInBhY2tldERhdGEiLCJkYXRhIiwicGFjayIsIl9kZWNvbnN0cnVjdFBhY2tldCIsImF0dGFjaG1lbnRzIiwicGxhY2Vob2xkZXIiLCJfcGxhY2Vob2xkZXIiLCJudW0iLCJwdXNoIiwibmV3RGF0YSIsIkRhdGUiLCJyZWNvbnN0cnVjdFBhY2tldCIsIl9yZWNvbnN0cnVjdFBhY2tldCIsImlzSW5kZXhWYWxpZCIsIkVycm9yIiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyIiwicmVxdWlyZSIsIlBhY2tldFR5cGUyIiwiY29uc3RydWN0b3IiLCJyZXBsYWNlciIsImVuY29kZSIsInR5cGUiLCJFVkVOVCIsIkFDSyIsImVuY29kZUFzQmluYXJ5IiwiQklOQVJZX0VWRU5UIiwiQklOQVJZX0FDSyIsIm5zcCIsImlkIiwiZW5jb2RlQXNTdHJpbmciLCJzdHIiLCJKU09OIiwic3RyaW5naWZ5IiwiZGVjb25zdHJ1Y3Rpb24iLCJ1bnNoaWZ0IiwiRW1pdHRlciIsInJldml2ZXIiLCJhZGQiLCJyZWNvbnN0cnVjdG9yIiwiZGVjb2RlU3RyaW5nIiwiaXNCaW5hcnlFdmVudCIsIkJpbmFyeVJlY29uc3RydWN0b3IiLCJlbWl0UmVzZXJ2ZWQiLCJiYXNlNjQiLCJ0YWtlQmluYXJ5RGF0YSIsInAiLCJOdW1iZXIiLCJjaGFyQXQiLCJzdGFydCIsImJ1ZiIsInN1YnN0cmluZyIsImMiLCJuZXh0IiwicGF5bG9hZCIsInRyeVBhcnNlIiwic3Vic3RyIiwiaXNQYXlsb2FkVmFsaWQiLCJwYXJzZSIsImUiLCJDT05ORUNUIiwiRElTQ09OTkVDVCIsIkNPTk5FQ1RfRVJST1IiLCJkZXN0cm95IiwiZmluaXNoZWRSZWNvbnN0cnVjdGlvbiIsInJlY29uUGFjayIsImJpbkRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDhCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsOEJBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVIsOEJBQUE7OztBQ0FBLElBQU1TLHFCQUFBLEdBQXdCLE9BQU9DLFdBQUEsS0FBZ0I7QUFDckQsSUFBTUMsTUFBQSxHQUFVQyxHQUFBLElBQVE7RUFDcEIsT0FBTyxPQUFPRixXQUFBLENBQVlD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QU9GLGVBQWVuQyxJQUFBLEVBQU1nQyxPQUFBLEVBQVM7SUFDakMsUUFBUWhDLElBQUE7TUFBQSxLQUNDckQsVUFBQSxDQUFXMkYsT0FBQTtRQUNaLE9BQU8sT0FBT04sT0FBQSxLQUFZO01BQUEsS0FDekJyRixVQUFBLENBQVc0RixVQUFBO1FBQ1osT0FBT1AsT0FBQSxLQUFZO01BQUEsS0FDbEJyRixVQUFBLENBQVc2RixhQUFBO1FBQ1osT0FBTyxPQUFPUixPQUFBLEtBQVksWUFBWSxPQUFPQSxPQUFBLEtBQVk7TUFBQSxLQUN4RHJGLFVBQUEsQ0FBV3NELEtBQUE7TUFBQSxLQUNYdEQsVUFBQSxDQUFXeUQsWUFBQTtRQUNaLE9BQU9wQyxLQUFBLENBQU1DLE9BQUEsQ0FBUStELE9BQU8sS0FBS0EsT0FBQSxDQUFRNUQsTUFBQSxHQUFTO01BQUEsS0FDakR6QixVQUFBLENBQVd1RCxHQUFBO01BQUEsS0FDWHZELFVBQUEsQ0FBVzBELFVBQUE7UUFDWixPQUFPckMsS0FBQSxDQUFNQyxPQUFBLENBQVErRCxPQUFPO0lBQUE7RUFFeEM7RUFJQVMsUUFBQSxFQUFVO0lBQ04sSUFBSSxLQUFLeEIsYUFBQSxFQUFlO01BQ3BCLEtBQUtBLGFBQUEsQ0FBY3lCLHNCQUFBLEVBQXVCO01BQzFDLEtBQUt6QixhQUFBLEdBQWdCO0lBQ3pCO0VBQ0o7QUFDSjtBQVNBLElBQU1HLG1CQUFBLEdBQU4sTUFBMEI7RUFDdEJ2QixZQUFZcEIsTUFBQSxFQUFRO0lBQ2hCLEtBQUtBLE1BQUEsR0FBU0EsTUFBQTtJQUNkLEtBQUtDLE9BQUEsR0FBVSxFQUFDO0lBQ2hCLEtBQUtpRSxTQUFBLEdBQVlsRSxNQUFBO0VBQ3JCO0VBU0E4QyxlQUFlcUIsT0FBQSxFQUFTO0lBQ3BCLEtBQUtsRSxPQUFBLENBQVFTLElBQUEsQ0FBS3lELE9BQU87SUFDekIsSUFBSSxLQUFLbEUsT0FBQSxDQUFRTixNQUFBLEtBQVcsS0FBS3VFLFNBQUEsQ0FBVTVELFdBQUEsRUFBYTtNQUVwRCxNQUFNTixNQUFBLEdBQVNhLGlCQUFBLENBQWtCLEtBQUtxRCxTQUFBLEVBQVcsS0FBS2pFLE9BQU87TUFDN0QsS0FBS2dFLHNCQUFBLEVBQXVCO01BQzVCLE9BQU9qRSxNQUFBO0lBQ1g7SUFDQSxPQUFPO0VBQ1g7RUFJQWlFLHVCQUFBLEVBQXlCO0lBQ3JCLEtBQUtDLFNBQUEsR0FBWTtJQUNqQixLQUFLakUsT0FBQSxHQUFVLEVBQUM7RUFDcEI7QUFDSiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=