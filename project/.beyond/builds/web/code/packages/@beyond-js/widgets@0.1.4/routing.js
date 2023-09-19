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

// .beyond/uimport/@beyond-js/widgets/routing.0.1.4.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy4wLjEuNC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy9sYXlvdXRzL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yb3V0aW5nL19fc291cmNlcy9yb3V0aW5nL2xheW91dHMvbGF5b3V0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yb3V0aW5nL19fc291cmNlcy9yb3V0aW5nL21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvcGFnZXMvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvcGFnZXMvaW5zdGFuY2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvcm91dGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvdXJpLnRzIl0sIm5hbWVzIjpbInJvdXRpbmdfMF8xXzRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiTGF5b3V0IiwiUGFnZUluc3RhbmNlIiwiUGFnZVVSSSIsIlJvdXRlIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibWFuYWdlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJfZGVmYXVsdCIsIk1hcCIsInJlZ2lzdGVyIiwibGF5b3V0Iiwic2V0IiwiaWQiLCJkZWZhdWx0IiwiX2NvcmUiLCJyZXF1aXJlMiIsIkxheW91dDIiLCJFdmVudHMiLCJpcyIsImxheW91dHMiLCJlbGVtZW50IiwiYWN0aXZlIiwicGFyZW50IiwiY2hpbGRyZW4iLCJjb25zdHJ1Y3RvciIsInNlbGVjdCIsInBhZ2UiLCJkZXNjZW5kaW5nIiwibGVuZ3RoIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJjaGlsZCIsImZvdW5kIiwidmFsdWVzIiwiZmluZCIsImNoaWxkMiIsImNoYW5nZWQiLCJzaGlmdCIsInRyaWdnZXIiLCJfcm91dGluZyIsIl9sYXlvdXQiLCJfcGFnZXMiLCJfbGF5b3V0cyIsIl9yb3V0ZSIsIm1hbmFnZXIyIiwicHJvY2VzcyIsIk1hbmFnZXIiLCJpbnN0YW5jZXMiLCJwYWdlcyIsImluaXRpYWxpc2VkIiwicmVzb2x2ZSIsInJlYWR5IiwiUHJvbWlzZSIsInJvdXRpbmciLCJ1cmkiLCJjYXRjaCIsImV4YyIsInN0YWNrIiwic3BlY2lmaWVyIiwiZ2xvYmFsVGhpcyIsIl9fYXBwX3BhY2thZ2UiLCJhbGwiLCJiaW1wb3J0IiwidGhlbiIsImNvbmZpZyIsIm1haW4iLCJvbiIsImN0IiwiQ2FuY2VsbGF0aW9uVG9rZW4iLCJjaWQiLCJyZXNldCIsInJvdXRlIiwicGF0aG5hbWUiLCJjaGVjayIsImRvbmUiLCJlcnJvciIsInZhbHVlIiwicGFyZW50cyIsIl9pbnN0YW5jZSIsImluc3RhbmNlIiwiaGFzIiwiZ2V0IiwiX3JlbmRlciIsIlBhZ2VJbnN0YW5jZTIiLCJ3aWRnZXRzIiwidW5zaGlmdCIsIlJvdXRlMiIsInZhcnMiLCJzcGxpdCIsInJlZ2lzdGVyZWQiLCJmb3JFYWNoIiwidGFyZ2V0IiwiZmlsdGVyIiwiY2xlYXIiLCJpIiwiZGlyIiwic3RhcnRzV2l0aCIsImVuZHNXaXRoIiwidm5hbWUiLCJzbGljZSIsIm1pc3NpbmciLCJfbWFuYWdlciIsIlBhZ2VVUkkyIiwic2VhcmNoIiwicXMiLCJoYXNoIiwid2lkZ2V0IiwiZ2V0QXR0cmlidXRlIiwiRXJyb3IiLCJsb2NhbE5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFB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R0FBQSxDQUFJcEUsTUFBQSxHQUFTLENBQUM7Y0FDekMsS0FBSyxDQUFBNEQsSUFBQSxDQUFNN0UsR0FBQSxDQUFJd0YsS0FBQSxFQUFPMUIsUUFBQSxDQUFTc0IsQ0FBQSxDQUFFO2NBQ2pDOztZQUdKLElBQUlDLEdBQUEsS0FBUXZCLFFBQUEsQ0FBU3NCLENBQUEsR0FBSSxPQUFPOztVQUVwQyxPQUFPO1FBQ1gsQ0FBQztRQUVELEtBQUssQ0FBQXJFLElBQUEsR0FBUU8sS0FBQSxHQUFRQSxLQUFBLENBQU0sS0FBSyxNQUFNTyxRQUFBLENBQUFjLE9BQUEsQ0FBUStDLE9BQUEsR0FBVSxLQUFLLENBQUE1QixRQUFTO01BQzFFOztJQUNIcEUsT0FBQSxDQUFBTCxLQUFBLEdBQUF1RixNQUFBOzs7Ozs7Ozs7Ozs7SUNwREQsSUFBQWUsUUFBQSxHQUFBdkYsUUFBQTtJQUVpQixNQUNYd0YsUUFBQSxDQUFPO01BQ0EsQ0FBQWhELEdBQUE7TUFDQSxDQUFBaUIsS0FBQTtNQUVULElBQUlqQixJQUFBLEVBQUc7UUFDSCxPQUFPLEtBQUssQ0FBQUEsR0FBQTtNQUNoQjtNQUVBLElBQUlrQixTQUFBLEVBQVE7UUFDUixPQUFPLEtBQUssQ0FBQWxCLEdBQUEsQ0FBS2tCLFFBQUE7TUFDckI7TUFFQSxJQUFJK0IsT0FBQSxFQUFNO1FBQ04sT0FBTyxLQUFLLENBQUFqRCxHQUFBLENBQUtpRCxNQUFBO01BQ3JCO01BRUEsSUFBSUMsR0FBQSxFQUFFO1FBQ0YsT0FBTyxLQUFLLENBQUFsRCxHQUFBLENBQUtrRCxFQUFBO01BQ3JCO01BRUEsSUFBSUMsS0FBQSxFQUFJO1FBQ0osT0FBTyxLQUFLLENBQUFuRCxHQUFBLENBQUttRCxJQUFBO01BQ3JCO01BRUEsSUFBSWxCLEtBQUEsRUFBSTtRQUNKLE9BQU8sS0FBSyxDQUFBaEIsS0FBQSxDQUFPZ0IsSUFBQTtNQUN2QjtNQUVBaEUsWUFBWTtRQUFDbUYsTUFBQTtRQUFRcEQsR0FBQTtRQUFLaUI7TUFBSyxHQUFzRDtRQUNqRixJQUFJbUMsTUFBQSxFQUFRO1VBQ1IsTUFBTTNFLEtBQUEsR0FBUTJFLE1BQUEsQ0FBT0MsWUFBQSxDQUFhLGVBQWU7VUFDakQsTUFBTWxGLElBQUEsR0FBTzRFLFFBQUEsQ0FBQW5HLE9BQUEsQ0FBUThDLEtBQUEsQ0FBTStCLFFBQUEsQ0FBU2hELEtBQUs7VUFDekMsSUFBSSxDQUFDTixJQUFBLEVBQU07WUFDUCxNQUFNLElBQUltRixLQUFBLENBQU0sWUFBWUYsTUFBQSxDQUFPRyxTQUFBLG9DQUE2Qzs7VUFHcEYsQ0FBQztZQUFDdkQsR0FBQTtZQUFLaUI7VUFBSyxJQUFJOUMsSUFBQTs7UUFHcEIsS0FBSyxDQUFBNkIsR0FBQSxHQUFPQSxHQUFBO1FBQ1osS0FBSyxDQUFBaUIsS0FBQSxHQUFTQSxLQUFBO01BQ2xCOztJQUNIbkUsT0FBQSxDQUFBTixPQUFBLEdBQUF3RyxRQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==