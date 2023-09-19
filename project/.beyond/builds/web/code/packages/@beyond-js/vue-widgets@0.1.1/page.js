System.register(["@beyond-js/kernel@0.1.9/bundle","@vue/shared@3.2.47","@vue/reactivity@3.2.47","@vue/runtime-core@3.2.47","@vue/runtime-dom@3.2.47","vue@3.2.47","@beyond-js/kernel@0.1.9/core","@beyond-js/widgets@0.1.4/render","@beyond-js/kernel@0.1.9/styles","@beyond-js/widgets@0.1.4/controller","@beyond-js/vue-widgets@0.1.1/base","@beyond-js/kernel@0.1.9/routing","@beyond-js/widgets@0.1.4/routing"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@vue/shared","3.2.47"],["@vue/reactivity","3.2.47"],["@vue/runtime-core","3.2.47"],["@vue/runtime-dom","3.2.47"],["vue","3.2.47"],["@beyond-js/widgets","0.1.4"],["@beyond-js/vue-widgets","0.1.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@vue/shared@3.2.47', dep), dep => dependencies.set('@vue/reactivity@3.2.47', dep), dep => dependencies.set('@vue/runtime-core@3.2.47', dep), dep => dependencies.set('@vue/runtime-dom@3.2.47', dep), dep => dependencies.set('vue@3.2.47', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.4/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep), dep => dependencies.set('@beyond-js/widgets@0.1.4/controller', dep), dep => dependencies.set('@beyond-js/vue-widgets@0.1.1/base', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/routing', dep), dep => dependencies.set('@beyond-js/widgets@0.1.4/routing', dep)],
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

// .beyond/uimport/@beyond-js/vue-widgets/page.0.1.1.js
var page_0_1_1_exports = {};
__export(page_0_1_1_exports, {
  PageVueWidgetController: () => PageVueWidgetController,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(page_0_1_1_exports);

// node_modules/@beyond-js/vue-widgets/page/page.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("vue@3.2.47"), 0);
var dependency_2 = __toESM(require("@beyond-js/vue-widgets@0.1.1/base"), 0);
var dependency_3 = __toESM(require("@beyond-js/widgets@0.1.4/routing"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/vue-widgets@0.1.1/page"
  },
  "type": "code"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["vue", dependency_1], ["@beyond-js/vue-widgets/base", dependency_2], ["@beyond-js/widgets/routing", dependency_3]]);
var ims = /* @__PURE__ */new Map();
ims.set("./page", {
  hash: 1160942583,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PageVueWidgetController = void 0;
    var _base = require2("@beyond-js/vue-widgets/base");
    var _routing = require2("@beyond-js/widgets/routing");
    class PageVueWidgetController2 extends _base.VueWidgetController {
      #uri;
      get uri() {
        return this.#uri;
      }
      mount() {
        return super.mount({
          uri: this.#uri
        });
      }
      async initialise() {
        this.#uri = new _routing.PageURI({
          widget: this.widget
        });
        await super.initialise();
      }
    }
    exports.PageVueWidgetController = PageVueWidgetController2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./page",
  "from": "PageVueWidgetController",
  "name": "PageVueWidgetController"
}];
var PageVueWidgetController;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "PageVueWidgetController") && (PageVueWidgetController = require2 ? require2("./page").PageVueWidgetController : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3Z1ZS13aWRnZXRzL3BhZ2UuMC4xLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy92dWUtd2lkZ2V0cy9wYWdlL0BiZXlvbmQtanMvdnVlLXdpZGdldHMvY2xpZW50L3BhZ2UvcGFnZS50cyJdLCJuYW1lcyI6WyJwYWdlXzBfMV8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsIlBhZ2VWdWVXaWRnZXRDb250cm9sbGVyIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9iYXNlIiwicmVxdWlyZTIiLCJfcm91dGluZyIsIlBhZ2VWdWVXaWRnZXRDb250cm9sbGVyMiIsIlZ1ZVdpZGdldENvbnRyb2xsZXIiLCJ1cmkiLCJtb3VudCIsImluaXRpYWxpc2UiLCJQYWdlVVJJIiwid2lkZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQTtBQUFBQyxRQUFBLENBQUFELGtCQUFBO0VBQUFFLHVCQUFBLEVBQUFBLENBQUEsS0FBQUEsdUJBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVAsa0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUEsSUFBQVEsS0FBQSxHQUFBQyxRQUFBO0lBQ0EsSUFBQUMsUUFBQSxHQUFBRCxRQUFBO0lBRWlCLE1BQ0ZFLHdCQUFBLFNBQWdDSCxLQUFBLENBQUFJLG1CQUFBLENBQW1CO01BQzlELENBQUFDLEdBQUE7TUFDTyxJQUFIQSxJQUFBLEVBQUc7UUFDSCxPQUFPLEtBQUssQ0FBQUEsR0FBQTtNQUNmO01BRURDLE1BQUEsRUFBSztRQUNELE9BQU8sTUFBTUEsS0FBQSxDQUFNO1VBQUNELEdBQUEsRUFBSyxLQUFLLENBQUFBO1FBQVgsQ0FBWjtNQUNWO01BRWUsTUFBVkUsV0FBQSxFQUFVO1FBQ1osS0FBSyxDQUFBRixHQUFBLEdBQU8sSUFBSUgsUUFBQSxDQUFBTSxPQUFBLENBQVE7VUFBQ0MsTUFBQSxFQUFhLEtBQUtBO1FBQW5CLENBQVo7UUFDWixNQUFNLE1BQU1GLFVBQUEsRUFBTjtNQUNUO0lBYjZEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==