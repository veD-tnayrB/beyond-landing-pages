System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/widgets@0.1.4/render"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/widgets","0.1.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.4/render', dep)],
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

// .beyond/uimport/@beyond-js/widgets/layout.0.1.4.js
var layout_0_1_4_exports = {};
__export(layout_0_1_4_exports, {
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  ssr: () => ssr
});
module.exports = __toCommonJS(layout_0_1_4_exports);

// node_modules/@beyond-js/widgets/layout/layout.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/widgets@0.1.4/render"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.4/layout"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/widgets/render", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./children", {
  hash: 1491145116,
  creator: function (require2, exports) {
    "use strict";

    var _render = require2("@beyond-js/widgets/render");
    var _ssr = require2("./ssr");
    let manager;
    customElements.define("beyond-layout-children", class extends HTMLElement {
      #layout;
      #active;
      connectedCallback() {
        this.attachShadow({
          mode: "open"
        });
        const managed = () => {
          const start = () => this.#start().catch(exc => console.error(exc.stack));
          manager.initialised ? start() : manager.ready.then(start);
        };
        if (manager) return managed();
        _ssr.ssr.page ? this.#onssr() : _ssr.ssr.addEventListener("received", this.#onssr);
        const promises = [];
        promises.push(bimport("@beyond-js/widgets/routing"));
        promises.push(bimport("@beyond-js/kernel/core"));
        const {
          specifier
        } = globalThis.__app_package;
        promises.push(bimport(`${specifier}/start`));
        Promise.all(promises).then(([routing]) => {
          ({
            manager
          } = routing);
          managed();
        }).catch(exc => console.log(exc.stack));
      }
      #container;
      get container() {
        if (this.#container !== void 0) return this.#container;
        const container = (() => {
          let parent = this;
          while (true) {
            const root = parent.getRootNode();
            if (root === document) return root;
            parent = root.host;
            if (_render.widgets.instances.has(parent)) return parent;
          }
        })();
        if (!container) {
          console.error(`Widget container of beyond-layout-children not found`);
          return this.#container = null;
        }
        return this.#container = container;
      }
      #onssr = () => {
        _ssr.ssr.removeEventListener("received", this.#onssr);
        const {
          container
        } = this;
        if (container === null) return;
        const {
          element,
          error
        } = (() => {
          const {
            hierarchy
          } = _ssr.ssr;
          if (container === document) return {
            element: hierarchy[0]
          };
          const {
            localName
          } = container;
          const index = hierarchy.indexOf(localName);
          if (index === -1) return {
            error: `Container widget of beyond-layout-children "${localName}" not found in ssr hierarchy`
          };
          if (index === hierarchy.length - 1) return {
            error: `Container widget of beyond-layout-children "${localName}" is the page, not a layout`
          };
          return {
            element: hierarchy[index + 1]
          };
        })();
        if (error) {
          console.error(error, this);
          return;
        }
        this.shadowRoot.appendChild(document.createElement(element));
      };
      #render = () => {
        this.#layout.children.forEach(child => {
          const {
            children
          } = this.shadowRoot;
          let element = [...children].find(element2 => element2.getAttribute("data-child-id") === child.id);
          if (!element) {
            element = document.createElement(child.element);
            element.setAttribute("data-child-id", child.id);
            this.shadowRoot.append(element);
          }
          const active = this.#layout.active === child;
          const controller = element.controller;
          if (active && element !== this.#active) {
            this.#active = element;
            const show = () => {
              element.removeEventListener("controller.initialised", show);
              if (element !== this.#active) return;
              const controller2 = element.controller;
              if (!controller2) {
                throw new Error(`Controller of element widget "${child.element}" is undefined`);
              }
              this.#active === element && controller2.show?.();
            };
            controller ? controller.show?.() : element.addEventListener("controller.initialised", show);
          } else if (!element.hidden && !active) {
            controller?.hide?.();
          }
          element.hidden = !active;
        });
      };
      #hydrate() {
        const {
          children
        } = this.shadowRoot;
        const layout = this.#layout;
        if (!children.length) return;
        if (children.length > 1) {
          console.error("Only one child was expected on beyond-layout-children start", this);
          return;
        }
        children[0].setAttribute("data-child-id", [...layout.children.keys()][0]);
      }
      async #start() {
        _ssr.ssr.removeEventListener("received", this.#onssr);
        if (this.container === null) return;
        const done = layout => {
          this.#layout = layout;
          this.#hydrate();
          this.#layout.on("change", this.#render);
          this.#render();
        };
        if (this.container === document) return done(manager.main);
        const {
          localName
        } = this.container;
        if (localName === manager.main.element) return done(manager.main);
        if (!manager.layouts.has(localName)) {
          console.error(`Layout "${localName}" not found`, [...manager.layouts], manager);
          return;
        }
        done(manager.layouts.get(localName));
      }
    });
  }
});
ims.set("./ssr", {
  hash: 2390596202,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ssr = void 0;
    const ssr2 = new class extends EventTarget {
      #main;
      get main() {
        return this.#main;
      }
      #page;
      get page() {
        return this.#page;
      }
      #layouts;
      get layouts() {
        return this.#layouts;
      }
      #hierarchy = [];
      get hierarchy() {
        return this.#hierarchy;
      }
      data(main, page) {
        this.#main = main;
        this.#page = page.element;
        this.#layouts = page.parents;
        main && this.#hierarchy.push(main);
        page.parents && (this.#hierarchy = this.#hierarchy.concat(page.parents));
        this.#hierarchy.push(page.element);
        const event = new Event("received");
        this.dispatchEvent(event);
      }
    }();
    exports.ssr = ssr2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./ssr",
  "from": "ssr",
  "name": "ssr"
}];
var ssr;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ssr") && (ssr = require2 ? require2("./ssr").ssr : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvbGF5b3V0LjAuMS40LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9sYXlvdXQvX19zb3VyY2VzL2xheW91dC9jaGlsZHJlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvbGF5b3V0L19fc291cmNlcy9sYXlvdXQvc3NyLnRzIl0sIm5hbWVzIjpbImxheW91dF8wXzFfNF9leHBvcnRzIiwiX19leHBvcnQiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJzc3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX3JlbmRlciIsInJlcXVpcmUyIiwiX3NzciIsIm1hbmFnZXIiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsIkhUTUxFbGVtZW50IiwibGF5b3V0IiwiYWN0aXZlIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwibWFuYWdlZCIsInN0YXJ0IiwiY2F0Y2giLCJleGMiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGFjayIsImluaXRpYWxpc2VkIiwicmVhZHkiLCJ0aGVuIiwicGFnZSIsIm9uc3NyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb21pc2VzIiwicHVzaCIsImJpbXBvcnQiLCJzcGVjaWZpZXIiLCJnbG9iYWxUaGlzIiwiX19hcHBfcGFja2FnZSIsIlByb21pc2UiLCJhbGwiLCJyb3V0aW5nIiwibG9nIiwiY29udGFpbmVyIiwicGFyZW50Iiwicm9vdCIsImdldFJvb3ROb2RlIiwiZG9jdW1lbnQiLCJob3N0Iiwid2lkZ2V0cyIsImluc3RhbmNlcyIsImhhcyIsIiNvbnNzciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbGVtZW50IiwiaGllcmFyY2h5IiwibG9jYWxOYW1lIiwiaW5kZXgiLCJpbmRleE9mIiwibGVuZ3RoIiwic2hhZG93Um9vdCIsImFwcGVuZENoaWxkIiwiY3JlYXRlRWxlbWVudCIsInJlbmRlciIsIiNyZW5kZXIiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZCIsImZpbmQiLCJlbGVtZW50MiIsImdldEF0dHJpYnV0ZSIsImlkIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kIiwiY29udHJvbGxlciIsInNob3ciLCJjb250cm9sbGVyMiIsIkVycm9yIiwiaGlkZGVuIiwiaGlkZSIsImh5ZHJhdGUiLCIjaHlkcmF0ZSIsImtleXMiLCIjc3RhcnQiLCJkb25lIiwib24iLCJtYWluIiwibGF5b3V0cyIsImdldCIsInNzcjIiLCJFdmVudFRhcmdldCIsImRhdGEiLCJwYXJlbnRzIiwiY29uY2F0IiwiZXZlbnQiLCJFdmVudCIsImRpc3BhdGNoRXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUFBO0FBQUFDLFFBQUEsQ0FBQUQsb0JBQUE7RUFBQUUsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBLEdBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVAsb0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQ0EsSUFBQVEsT0FBQSxHQUFBQyxRQUFBO0lBQ0EsSUFBQUMsSUFBQSxHQUFBRCxRQUFBO0lBSUEsSUFBSUUsT0FBQTtJQUVKQyxjQUFBLENBQWVDLE1BQUEsQ0FBTywwQkFBMEIsY0FBY0MsV0FBQSxDQUFXO01BQ3JFLENBQUFDLE1BQUE7TUFDQSxDQUFBQyxNQUFBO01BRUFDLGtCQUFBLEVBQWlCO1FBQ2IsS0FBS0MsWUFBQSxDQUFhO1VBQUNDLElBQUEsRUFBTTtRQUFNLENBQUM7UUFFaEMsTUFBTUMsT0FBQSxHQUFVQSxDQUFBLEtBQUs7VUFDakIsTUFBTUMsS0FBQSxHQUFRQSxDQUFBLEtBQU0sS0FBSyxDQUFBQSxLQUFBLEVBQU0s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