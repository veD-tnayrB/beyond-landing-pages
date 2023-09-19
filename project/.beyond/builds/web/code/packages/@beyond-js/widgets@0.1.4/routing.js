System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/widgets@0.1.4/render","@beyond-js/kernel@0.1.9/routing"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/widgets","0.1.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.4/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/routing', dep)],
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

// .beyond/uimport/temp/@beyond-js/widgets/routing.0.1.4.js
var routing_0_1_4_exports = {};
__export(routing_0_1_4_exports, {
  Layout: () => Layout,
  PageInstance: () => PageInstance,
  PageURI: () => PageURI,
  Route: () => Route,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  manager: () => manager
});
module.exports = __toCommonJS(routing_0_1_4_exports);

// node_modules/@beyond-js/widgets/routing/routing.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var dependency_2 = __toESM(require("@beyond-js/widgets@0.1.4/render"), 0);
var dependency_3 = __toESM(require("@beyond-js/kernel@0.1.9/routing"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.4/routing"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1], ["@beyond-js/widgets/render", dependency_2], ["@beyond-js/kernel/routing", dependency_3]]);
var ims = /* @__PURE__ */new Map();
ims.set("./layouts/index", {
  hash: 2940970575,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    class _default extends Map {
      register(layout) {
        this.set(layout.id, layout);
      }
    }
    exports.default = _default;
  }
});
ims.set("./layouts/layout", {
  hash: 2602064878,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Layout = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class Layout2 extends _core.Events {
      get is() {
        return "layout";
      }
      #layouts;
      #element;
      get element() {
        return this.#element;
      }
      get id() {
        return this.#element;
      }
      #active;
      get active() {
        return this.#active;
      }
      #parent;
      #children = /* @__PURE__ */new Map();
      get children() {
        return this.#children;
      }
      constructor(layouts, element, parent) {
        super();
        this.#layouts = layouts;
        this.#element = element ? element : "main";
        this.#parent = parent;
      }
      select(page, descending) {
        if (descending.length && descending[0].name === this.#element) {
          console.log(`Invalid layout configuration. Layout element "${this.#element}" is already created`);
          return;
        }
        const child = (() => {
          if (!descending.length) return page;
          const {
            name: element
          } = descending[0];
          const found = [...this.#children.values()].find(child2 => child2.element === element);
          if (found) return found;
          const layout = new Layout2(this.#layouts, element, this);
          this.#layouts.register(layout);
          return layout;
        })();
        this.#children.set(child.id, child);
        const changed = this.#active !== child;
        this.#active = child;
        descending.shift();
        child.is === "layout" && child.select(page, descending);
        changed && this.trigger("change");
      }
    }
    exports.Layout = Layout2;
  }
});
ims.set("./manager", {
  hash: 1504779151,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.manager = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _routing = require2("@beyond-js/kernel/routing");
    var _layout = require2("./layouts/layout");
    var _pages = require2("./pages");
    var _layouts = require2("./layouts");
    var _route = require2("./route");
    const manager2 = typeof process === "object" ? void 0 : new class Manager {
      #instances = {
        layouts: new _layouts.default(),
        pages: new _pages.default()
      };
      #initialised = false;
      get initialised() {
        return this.#initialised;
      }
      #resolve;
      #ready = new Promise(resolve => this.#resolve = resolve);
      get ready() {
        return this.#ready;
      }
      constructor() {
        const set = () => this.set(_routing.routing.uri).catch(exc => console.log(exc.stack));
        const {
          specifier
        } = globalThis.__app_package;
        Promise.all([bimport(`${specifier}/config`), bimport(`${specifier}/start`)]).then(([{
          default: config
        }]) => {
          this.#main = new _layout.Layout(this.#instances.layouts, config.layout);
          _routing.routing.on("change", set);
          _routing.routing.initialised ? set() : _routing.routing.ready.then(set);
        });
      }
      get layouts() {
        return this.#instances.layouts;
      }
      get pages() {
        return this.#instances.pages;
      }
      #main;
      get main() {
        return this.#main;
      }
      #ct = new _core.CancellationToken();
      async set(uri) {
        const cid = this.#ct.reset();
        const route = new _route.Route(uri.pathname);
        await route.process();
        if (!this.#ct.check(cid)) return;
        const done = () => {
          !this.#initialised && this.#resolve();
          this.#initialised = true;
        };
        const {
          page: element
        } = route;
        if (!element) {
          console.error(`Pathname "${uri.pathname}" does not have a page widget associated to it`);
          return done();
        }
        const page = this.#instances.pages.register(uri, route);
        const {
          error,
          value: descending
        } = page.parents;
        if (error) {
          console.error(`Page on "${uri.uri}" cannot be shown: ${error}`);
          return done();
        }
        this.#main.select(page, descending);
        return done();
      }
    }();
    exports.manager = manager2;
  }
});
ims.set("./pages/index", {
  hash: 635174642,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _instance = require2("./instance");
    class _default extends Map {
      instance(id) {
        return [...this.values()].find(instance => instance.id === id);
      }
      register(uri, route) {
        const {
          pathname
        } = uri;
        let instance = this.has(pathname) ? this.get(pathname) : void 0;
        instance = instance ? instance : new _instance.PageInstance(uri, route);
        this.set(pathname, instance);
        return instance;
      }
    }
    exports.default = _default;
  }
});
ims.set("./pages/instance", {
  hash: 2192565275,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PageInstance = void 0;
    var _render = require2("@beyond-js/widgets/render");
    let id = 0;
    class PageInstance2 {
      #uri;
      get uri() {
        return this.#uri;
      }
      #route;
      get route() {
        return this.#route;
      }
      get element() {
        return this.#route.page;
      }
      get is() {
        return "page";
      }
      #id;
      get id() {
        return `${this.element}:${this.#id}`;
      }
      get parents() {
        const value = [];
        let {
          layout
        } = _render.widgets.get(this.element);
        while (layout) {
          const found = [..._render.widgets.values()].find(({
            name
          }) => name === layout);
          if (!found) {
            const error = `Layout "${layout}" not found`;
            return {
              error
            };
          }
          value.unshift(found);
          layout = found.layout;
        }
        return {
          value
        };
      }
      constructor(uri, route) {
        this.#uri = uri;
        this.#route = route;
        this.#id = ++id;
      }
    }
    exports.PageInstance = PageInstance2;
  }
});
ims.set("./route", {
  hash: 408835594,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Route = void 0;
    var _render = require2("@beyond-js/widgets/render");
    var _routing = require2("@beyond-js/kernel/routing");
    class Route2 {
      #pathname;
      get pathname() {
        return this.#pathname;
      }
      #page;
      get page() {
        return this.#page;
      }
      #vars;
      get vars() {
        return this.#vars;
      }
      constructor(pathname) {
        this.#pathname = pathname;
      }
      async process() {
        const pathname = this.#pathname.split("/");
        const registered = /* @__PURE__ */new Map();
        _render.widgets.forEach(({
          is,
          name,
          route
        }) => is === "page" && registered.set(name, route.split("/")));
        const target = [...registered].filter(([, route]) => route.length === pathname.length);
        this.#vars = /* @__PURE__ */new Map();
        const found = target.find(([, route]) => {
          this.#vars.clear();
          for (let i = 0; i < pathname.length; i++) {
            const dir = route[i];
            if (dir.startsWith("${") && dir.endsWith("}")) {
              const vname = dir.slice(2, dir.length - 1);
              this.#vars.set(vname, pathname[i]);
              continue;
            }
            if (dir !== pathname[i]) return false;
          }
          return true;
        });
        this.#page = found ? found[0] : await _routing.routing.missing?.(this.#pathname);
      }
    }
    exports.Route = Route2;
  }
});
ims.set("./uri", {
  hash: 615392904,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PageURI = void 0;
    var _manager = require2("./manager");
    class PageURI2 {
      #uri;
      #route;
      get uri() {
        return this.#uri;
      }
      get pathname() {
        return this.#uri.pathname;
      }
      get search() {
        return this.#uri.search;
      }
      get qs() {
        return this.#uri.qs;
      }
      get hash() {
        return this.#uri.hash;
      }
      get vars() {
        return this.#route.vars;
      }
      constructor({
        widget,
        uri,
        route
      }) {
        if (widget) {
          const child = widget.getAttribute("data-child-id");
          const page = _manager.manager.pages.instance(child);
          if (!page) {
            throw new Error(`Element "${widget.localName}" is not a page, or page not found`);
          }
          ({
            uri,
            route
          } = page);
        }
        this.#uri = uri;
        this.#route = route;
      }
    }
    exports.PageURI = PageURI2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./layouts/layout",
  "from": "Layout",
  "name": "Layout"
}, {
  "im": "./manager",
  "from": "manager",
  "name": "manager"
}, {
  "im": "./pages/instance",
  "from": "PageInstance",
  "name": "PageInstance"
}, {
  "im": "./route",
  "from": "Route",
  "name": "Route"
}, {
  "im": "./uri",
  "from": "PageURI",
  "name": "PageURI"
}];
var Layout, manager, PageInstance, Route, PageURI;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Layout") && (Layout = require2 ? require2("./layouts/layout").Layout : value);
  (require2 || prop === "manager") && (manager = require2 ? require2("./manager").manager : value);
  (require2 || prop === "PageInstance") && (PageInstance = require2 ? require2("./pages/instance").PageInstance : value);
  (require2 || prop === "Route") && (Route = require2 ? require2("./route").Route : value);
  (require2 || prop === "PageURI") && (PageURI = require2 ? require2("./uri").PageURI : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvd2lkZ2V0cy9yb3V0aW5nLjAuMS40LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yb3V0aW5nL19fc291cmNlcy9yb3V0aW5nL2xheW91dHMvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvbGF5b3V0cy9sYXlvdXQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy9wYWdlcy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy9wYWdlcy9pbnN0YW5jZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy9yb3V0ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy91cmkudHMiXSwibmFtZXMiOlsicm91dGluZ18wXzFfNF9leHBvcnRzIiwiX19leHBvcnQiLCJMYXlvdXQiLCJQYWdlSW5zdGFuY2UiLCJQYWdlVVJJIiwiUm91dGUiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtYW5hZ2VyIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9kZWZhdWx0IiwiTWFwIiwicmVnaXN0ZXIiLCJsYXlvdXQiLCJzZXQiLCJpZCIsImRlZmF1bHQiLCJfY29yZSIsInJlcXVpcmUyIiwiTGF5b3V0MiIsIkV2ZW50cyIsImlzIiwibGF5b3V0cyIsImVsZW1lbnQiLCJhY3RpdmUiLCJwYXJlbnQiLCJjaGlsZHJlbiIsImNvbnN0cnVjdG9yIiwic2VsZWN0IiwicGFnZSIsImRlc2NlbmRpbmciLCJsZW5ndGgiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsImNoaWxkIiwiZm91bmQiLCJ2YWx1ZXMiLCJmaW5kIiwiY2hpbGQyIiwiY2hhbmdlZCIsInNoaWZ0IiwidHJpZ2dlciIsIl9yb3V0aW5nIiwiX2xheW91dCIsIl9wYWdlcyIsIl9sYXlvdXRzIiwiX3JvdXRlIiwibWFuYWdlcjIiLCJwcm9jZXNzIiwiTWFuYWdlciIsImluc3RhbmNlcyIsInBhZ2VzIiwiaW5pdGlhbGlzZWQiLCJyZXNvbHZlIiwicmVhZHkiLCJQcm9taXNlIiwicm91dGluZyIsInVyaSIsImNhdGNoIiwiZXhjIiwic3RhY2siLCJzcGVjaWZpZXIiLCJnbG9iYWxUaGlzIiwiX19hcHBfcGFja2FnZSIsImFsbCIsImJpbXBvcnQiLCJ0aGVuIiwiY29uZmlnIiwibWFpbiIsIm9uIiwiY3QiLCJDYW5jZWxsYXRpb25Ub2tlbiIsImNpZCIsInJlc2V0Iiwicm91dGUiLCJwYXRobmFtZSIsImNoZWNrIiwiZG9uZSIsImVycm9yIiwidmFsdWUiLCJwYXJlbnRzIiwiX2luc3RhbmNlIiwiaW5zdGFuY2UiLCJoYXMiLCJnZXQiLCJfcmVuZGVyIiwiUGFnZUluc3RhbmNlMiIsIndpZGdldHMiLCJ1bnNoaWZ0IiwiUm91dGUyIiwidmFycyIsInNwbGl0IiwicmVnaXN0ZXJlZCIsImZvckVhY2giLCJ0YXJnZXQiLCJmaWx0ZXIiLCJjbGVhciIsImkiLCJkaXIiLCJzdGFydHNXaXRoIiwiZW5kc1dpdGgiLCJ2bmFtZSIsInNsaWNlIiwibWlzc2luZyIsIl9tYW5hZ2VyIiwiUGFnZVVSSTIiLCJzZWFyY2giLCJxcyIsImhhc2giLCJ3aWRnZXQiLCJnZXRBdHRyaWJ1dGUiLCJFcnJvciIsImxvY2FsTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEs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QUEsQ0FBSUksS0FBQSxDQUFNLEdBQUdKLEdBQUEsQ0FBSXBFLE1BQUEsR0FBUyxDQUFDO2NBQ3pDLEtBQUssQ0FBQTRELElBQUEsQ0FBTTdFLEdBQUEsQ0FBSXdGLEtBQUEsRUFBTzFCLFFBQUEsQ0FBU3NCLENBQUEsQ0FBRTtjQUNqQzs7WUFHSixJQUFJQyxHQUFBLEtBQVF2QixRQUFBLENBQVNzQixDQUFBLEdBQUksT0FBTzs7VUFFcEMsT0FBTztRQUNYLENBQUM7UUFFRCxLQUFLLENBQUFyRSxJQUFBLEdBQVFPLEtBQUEsR0FBUUEsS0FBQSxDQUFNLEtBQUssTUFBTU8sUUFBQSxDQUFBYyxPQUFBLENBQVErQyxPQUFBLEdBQVUsS0FBSyxDQUFBNUIsUUFBUztNQUMxRTs7SUFDSHBFLE9BQUEsQ0FBQUwsS0FBQSxHQUFBdUYsTUFBQTs7Ozs7Ozs7Ozs7O0lDcERELElBQUFlLFFBQUEsR0FBQXZGLFFBQUE7SUFFaUIsTUFDWHdGLFFBQUEsQ0FBTztNQUNBLENBQUFoRCxHQUFBO01BQ0EsQ0FBQWlCLEtBQUE7TUFFVCxJQUFJakIsSUFBQSxFQUFHO1FBQ0gsT0FBTyxLQUFLLENBQUFBLEdBQUE7TUFDaEI7TUFFQSxJQUFJa0IsU0FBQSxFQUFRO1FBQ1IsT0FBTyxLQUFLLENBQUFsQixHQUFBLENBQUtrQixRQUFBO01BQ3JCO01BRUEsSUFBSStCLE9BQUEsRUFBTTtRQUNOLE9BQU8sS0FBSyxDQUFBakQsR0FBQSxDQUFLaUQsTUFBQTtNQUNyQjtNQUVBLElBQUlDLEdBQUEsRUFBRTtRQUNGLE9BQU8sS0FBSyxDQUFBbEQsR0FBQSxDQUFLa0QsRUFBQTtNQUNyQjtNQUVBLElBQUlDLEtBQUEsRUFBSTtRQUNKLE9BQU8sS0FBSyxDQUFBbkQsR0FBQSxDQUFLbUQsSUFBQTtNQUNyQjtNQUVBLElBQUlsQixLQUFBLEVBQUk7UUFDSixPQUFPLEtBQUssQ0FBQWhCLEtBQUEsQ0FBT2dCLElBQUE7TUFDdkI7TUFFQWhFLFlBQVk7UUFBQ21GLE1BQUE7UUFBUXBELEdBQUE7UUFBS2lCO01BQUssR0FBc0Q7UUFDakYsSUFBSW1DLE1BQUEsRUFBUTtVQUNSLE1BQU0zRSxLQUFBLEdBQVEyRSxNQUFBLENBQU9DLFlBQUEsQ0FBYSxlQUFlO1VBQ2pELE1BQU1sRixJQUFBLEdBQU80RSxRQUFBLENBQUFuRyxPQUFBLENBQVE4QyxLQUFBLENBQU0rQixRQUFBLENBQVNoRCxLQUFLO1VBQ3pDLElBQUksQ0FBQ04sSUFBQSxFQUFNO1lBQ1AsTUFBTSxJQUFJbUYsS0FBQSxDQUFNLFlBQVlGLE1BQUEsQ0FBT0csU0FBQSxvQ0FBNkM7O1VBR3BGLENBQUM7WUFBQ3ZELEdBQUE7WUFBS2lCO1VBQUssSUFBSTlDLElBQUE7O1FBR3BCLEtBQUssQ0FBQTZCLEdBQUEsR0FBT0EsR0FBQTtRQUNaLEtBQUssQ0FBQWlCLEtBQUEsR0FBU0EsS0FBQTtNQUNsQjs7SUFDSG5FLE9BQUEsQ0FBQU4sT0FBQSxHQUFBd0csUUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=