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

// .beyond/uimport/temp/vue.3.2.47.js
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

// .beyond/uimport/temp/vue.3.2.47.js
__reExport(vue_3_2_47_exports, vue_runtime_esm_bundler_exports, module.exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3Z1ZS4zLjIuNDcuanMiLCIuLi9ub2RlX21vZHVsZXMvdnVlL2Rpc3QvdnVlLnJ1bnRpbWUuZXNtLWJ1bmRsZXIuanMiXSwibmFtZXMiOlsidnVlXzNfMl80N19leHBvcnRzIiwiX19leHBvcnQiLCJjb21waWxlIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsInZ1ZV9ydW50aW1lX2VzbV9idW5kbGVyX2V4cG9ydHMiLCJpbXBvcnRfcnVudGltZV9kb20iLCJyZXF1aXJlIiwiX19yZUV4cG9ydCIsImluaXREZXYiLCJpbml0Q3VzdG9tRm9ybWF0dGVyIiwid2FybiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsa0JBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQUwsa0JBQUE7OztBQ0FBLElBQUFNLCtCQUFBO0FBQUFMLFFBQUEsQ0FBQUssK0JBQUE7RUFBQUosT0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQSxJQUFBSyxrQkFBQSxHQUEwQ0MsT0FBQTtBQUMxQ0MsVUFBQSxDQUFBSCwrQkFBQSxFQUFjRSxPQUFBO0FBRWQsU0FBU0UsUUFBQSxFQUFVO0VBQ2Y7SUFDSSxJQUFBSCxrQkFBQSxDQUFBSSxtQkFBQSxFQUFvQjtFQUN4QjtBQUNKO0FBR0EsSUFBSyxNQUF3QztFQUN6Q0QsT0FBQSxDQUFRO0FBQ1o7QUFDQSxJQUFNUixPQUFBLEdBQVVBLENBQUEsS0FBTTtFQUNsQixJQUFLLE1BQXdDO0lBQ3pDLElBQUFLLGtCQUFBLENBQUFLLElBQUEsRUFBSyxvSUFFNEI7RUFDckM7QUFDSjs7O0FEbkJBSCxVQUFBLENBQUFULGtCQUFBLEVBQWNNLCtCQUFBLEVBQWRILE1BQUEsQ0FBQUMsT0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=