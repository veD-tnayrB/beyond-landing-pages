System.register(["@beyond-js/kernel@0.1.9/bundle","svelte@3.57.0/internal","@beyond-js/kernel@0.1.9/core","@beyond-js/widgets@0.1.4/render","@beyond-js/kernel@0.1.9/styles","@beyond-js/widgets@0.1.4/controller","@beyond-js/svelte-widgets@0.1.1/base","@beyond-js/kernel@0.1.9/routing","@beyond-js/widgets@0.1.4/routing"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["svelte","3.57.0"],["@beyond-js/widgets","0.1.4"],["@beyond-js/svelte-widgets","0.1.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('svelte@3.57.0/internal', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.4/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep), dep => dependencies.set('@beyond-js/widgets@0.1.4/controller', dep), dep => dependencies.set('@beyond-js/svelte-widgets@0.1.1/base', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/routing', dep), dep => dependencies.set('@beyond-js/widgets@0.1.4/routing', dep)],
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

// .beyond/uimport/temp/@beyond-js/svelte-widgets/page.0.1.1.js
var page_0_1_1_exports = {};
__export(page_0_1_1_exports, {
  PageSvelteWidgetController: () => PageSvelteWidgetController,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(page_0_1_1_exports);

// node_modules/@beyond-js/svelte-widgets/page/page.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("svelte@3.57.0/internal"), 0);
var dependency_2 = __toESM(require("@beyond-js/svelte-widgets@0.1.1/base"), 0);
var dependency_3 = __toESM(require("@beyond-js/widgets@0.1.4/routing"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/svelte-widgets@0.1.1/page"
  },
  "type": "code"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["svelte/internal", dependency_1], ["@beyond-js/svelte-widgets/base", dependency_2], ["@beyond-js/widgets/routing", dependency_3]]);
var ims = /* @__PURE__ */new Map();
ims.set("./page", {
  hash: 2856264170,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PageSvelteWidgetController = void 0;
    var _base = require2("@beyond-js/svelte-widgets/base");
    var _routing = require2("@beyond-js/widgets/routing");
    class PageSvelteWidgetController2 extends _base.SvelteWidgetController {
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
    exports.PageSvelteWidgetController = PageSvelteWidgetController2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./page",
  "from": "PageSvelteWidgetController",
  "name": "PageSvelteWidgetController"
}];
var PageSvelteWidgetController;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "PageSvelteWidgetController") && (PageSvelteWidgetController = require2 ? require2("./page").PageSvelteWidgetController : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvc3ZlbHRlLXdpZGdldHMvcGFnZS4wLjEuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3N2ZWx0ZS13aWRnZXRzL3BhZ2UvQGJleW9uZC1qcy9zdmVsdGUtd2lkZ2V0cy9jbGllbnQvcGFnZS9wYWdlLnRzIl0sIm5hbWVzIjpbInBhZ2VfMF8xXzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiUGFnZVN2ZWx0ZVdpZGdldENvbnRyb2xsZXIiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX2Jhc2UiLCJyZXF1aXJlMiIsIl9yb3V0aW5nIiwiUGFnZVN2ZWx0ZVdpZGdldENvbnRyb2xsZXIyIiwiU3ZlbHRlV2lkZ2V0Q29udHJvbGxlciIsInVyaSIsIm1vdW50IiwiaW5pdGlhbGlzZSIsIlBhZ2VVUkkiLCJ3aWRnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsa0JBQUE7RUFBQUUsMEJBQUEsRUFBQUEsQ0FBQSxLQUFBQSwwQkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUCxrQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQSxJQUFBUSxLQUFBLEdBQUFDLFFBQUE7SUFDQSxJQUFBQyxRQUFBLEdBQUFELFFBQUE7SUFFaUIsTUFDRkUsMkJBQUEsU0FBbUNILEtBQUEsQ0FBQUksc0JBQUEsQ0FBc0I7TUFDcEUsQ0FBQUMsR0FBQTtNQUNPLElBQUhBLElBQUEsRUFBRztRQUNILE9BQU8sS0FBSyxDQUFBQSxHQUFBO01BQ2Y7TUFFREMsTUFBQSxFQUFLO1FBQ0QsT0FBTyxNQUFNQSxLQUFBLENBQU07VUFBQ0QsR0FBQSxFQUFLLEtBQUssQ0FBQUE7UUFBWCxDQUFaO01BQ1Y7TUFFZSxNQUFWRSxXQUFBLEVBQVU7UUFDWixLQUFLLENBQUFGLEdBQUEsR0FBTyxJQUFJSCxRQUFBLENBQUFNLE9BQUEsQ0FBUTtVQUFDQyxNQUFBLEVBQWEsS0FBS0E7UUFBbkIsQ0FBWjtRQUNaLE1BQU0sTUFBTUYsVUFBQSxDQUFOO01BQ1Q7SUFibUUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9