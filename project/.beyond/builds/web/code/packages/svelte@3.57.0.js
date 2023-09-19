System.register(["svelte@3.57.0/internal"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["svelte","3.57.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('svelte@3.57.0/internal', dep)],
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

// .beyond/uimport/temp/svelte.3.57.0.js
var svelte_3_57_0_exports = {};
__export(svelte_3_57_0_exports, {
  SvelteComponent: () => import_internal.SvelteComponentDev,
  SvelteComponentTyped: () => import_internal.SvelteComponentTyped,
  afterUpdate: () => import_internal.afterUpdate,
  beforeUpdate: () => import_internal.beforeUpdate,
  createEventDispatcher: () => import_internal.createEventDispatcher,
  getAllContexts: () => import_internal.getAllContexts,
  getContext: () => import_internal.getContext,
  hasContext: () => import_internal.hasContext,
  onDestroy: () => import_internal.onDestroy,
  onMount: () => import_internal.onMount,
  setContext: () => import_internal.setContext,
  tick: () => import_internal.tick
});
module.exports = __toCommonJS(svelte_3_57_0_exports);

// node_modules/svelte/index.mjs
var import_internal = require("svelte@3.57.0/internal");
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3N2ZWx0ZS4zLjU3LjAuanMiLCIuLi9ub2RlX21vZHVsZXMvc3ZlbHRlL2luZGV4Lm1qcyJdLCJuYW1lcyI6WyJzdmVsdGVfM181N18wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIlN2ZWx0ZUNvbXBvbmVudCIsImltcG9ydF9pbnRlcm5hbCIsIlN2ZWx0ZUNvbXBvbmVudERldiIsIlN2ZWx0ZUNvbXBvbmVudFR5cGVkIiwiYWZ0ZXJVcGRhdGUiLCJiZWZvcmVVcGRhdGUiLCJjcmVhdGVFdmVudERpc3BhdGNoZXIiLCJnZXRBbGxDb250ZXh0cyIsImdldENvbnRleHQiLCJoYXNDb250ZXh0Iiwib25EZXN0cm95Iiwib25Nb3VudCIsInNldENvbnRleHQiLCJ0aWNrIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFBO0FBQUFDLFFBQUEsQ0FBQUQscUJBQUE7RUFBQUUsZUFBQSxFQUFBQSxDQUFBLEtBQUFDLGVBQUEsQ0FBQUMsa0JBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBRixlQUFBLENBQUFFLG9CQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBSCxlQUFBLENBQUFHLFdBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFKLGVBQUEsQ0FBQUksWUFBQTtFQUFBQyxxQkFBQSxFQUFBQSxDQUFBLEtBQUFMLGVBQUEsQ0FBQUsscUJBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFOLGVBQUEsQ0FBQU0sY0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQVAsZUFBQSxDQUFBTyxVQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBUixlQUFBLENBQUFRLFVBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFULGVBQUEsQ0FBQVMsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQVYsZUFBQSxDQUFBVSxPQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBWCxlQUFBLENBQUFXLFVBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFaLGVBQUEsQ0FBQVk7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBbEIscUJBQUE7OztBQ0FBLElBQUFHLGVBQUEsR0FBNE1nQixPQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==