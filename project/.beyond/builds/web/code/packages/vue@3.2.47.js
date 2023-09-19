System.register(["@vue/shared@3.2.47","@vue/reactivity@3.2.47","@vue/runtime-core@3.2.47","@vue/runtime-dom@3.2.47"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@vue/shared","3.2.47"],["@vue/reactivity","3.2.47"],["@vue/runtime-core","3.2.47"],["@vue/runtime-dom","3.2.47"],["vue","3.2.47"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@vue/shared@3.2.47', dep), dep => dependencies.set('@vue/reactivity@3.2.47', dep), dep => dependencies.set('@vue/runtime-core@3.2.47', dep), dep => dependencies.set('@vue/runtime-dom@3.2.47', dep)],
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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/vue.3.2.47.js
var vue_3_2_47_exports = {};
__export(vue_3_2_47_exports, {
  compile: () => compile
});
module.exports = __toCommonJS(vue_3_2_47_exports);

// node_modules/vue/dist/vue.runtime.esm-bundler.js
var vue_runtime_esm_bundler_exports = {};
__export(vue_runtime_esm_bundler_exports, {
  compile: () => compile
});
var import_runtime_dom = require("@vue/runtime-dom@3.2.47");
__reExport(vue_runtime_esm_bundler_exports, require("@vue/runtime-dom@3.2.47"));
function initDev() {
  {
    (0, import_runtime_dom.initCustomFormatter)();
  }
}
if (true) {
  initDev();
}
var compile = () => {
  if (true) {
    (0, import_runtime_dom.warn)(`Runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
  }
};

// .beyond/uimport/vue.3.2.47.js
__reExport(vue_3_2_47_exports, vue_runtime_esm_bundler_exports, module.exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC92dWUuMy4yLjQ3LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Z1ZS9kaXN0L3Z1ZS5ydW50aW1lLmVzbS1idW5kbGVyLmpzIl0sIm5hbWVzIjpbInZ1ZV8zXzJfNDdfZXhwb3J0cyIsIl9fZXhwb3J0IiwiY29tcGlsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJ2dWVfcnVudGltZV9lc21fYnVuZGxlcl9leHBvcnRzIiwiaW1wb3J0X3J1bnRpbWVfZG9tIiwicmVxdWlyZSIsIl9fcmVFeHBvcnQiLCJpbml0RGV2IiwiaW5pdEN1c3RvbUZvcm1hdHRlciIsIndhcm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQTtBQUFBQyxRQUFBLENBQUFELGtCQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFMLGtCQUFBOzs7QUNBQSxJQUFBTSwrQkFBQTtBQUFBTCxRQUFBLENBQUFLLCtCQUFBO0VBQUFKLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUEsSUFBQUssa0JBQUEsR0FBMENDLE9BQUE7QUFDMUNDLFVBQUEsQ0FBQUgsK0JBQUEsRUFBY0UsT0FBQTtBQUVkLFNBQVNFLFFBQUEsRUFBVTtFQUNmO0lBQ0ksSUFBQUgsa0JBQUEsQ0FBQUksbUJBQUEsR0FBb0I7RUFDeEI7QUFDSjtBQUdBLElBQUssTUFBd0M7RUFDekNELE9BQUEsRUFBUTtBQUNaO0FBQ0EsSUFBTVIsT0FBQSxHQUFVQSxDQUFBLEtBQU07RUFDbEIsSUFBSyxNQUF3QztJQUN6QyxJQUFBSyxrQkFBQSxDQUFBSyxJQUFBLEVBQUssb0lBRTRCO0VBQ3JDO0FBQ0o7OztBRG5CQUgsVUFBQSxDQUFBVCxrQkFBQSxFQUFjTSwrQkFBQSxFQUFkSCxNQUFBLENBQUFDLE9BQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9