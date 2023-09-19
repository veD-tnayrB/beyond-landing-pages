System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/widgets@0.1.4/render","@beyond-js/kernel@0.1.9/styles"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/widgets","0.1.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.4/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep)],
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

// .beyond/uimport/@beyond-js/widgets/controller.0.1.4.js
var controller_0_1_4_exports = {};
__export(controller_0_1_4_exports, {
  IWidgetRendered: () => IWidgetRendered,
  IWidgetStore: () => IWidgetStore,
  WidgetAttributes: () => WidgetAttributes,
  WidgetClientController: () => WidgetClientController,
  WidgetControllerBase: () => WidgetControllerBase,
  WidgetServerController: () => WidgetServerController,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(controller_0_1_4_exports);

// node_modules/@beyond-js/widgets/controller/controller.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var dependency_2 = __toESM(require("@beyond-js/widgets@0.1.4/render"), 0);
var dependency_3 = __toESM(require("@beyond-js/kernel@0.1.9/styles"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.4/controller"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1], ["@beyond-js/widgets/render", dependency_2], ["@beyond-js/kernel/styles", dependency_3]]);
var ims = /* @__PURE__ */new Map();
ims.set("./attributes", {
  hash: 3176328789,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetAttributes = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class WidgetAttributes2 extends Map {
      #widget;
      #events = new _core.Events();
      on = (event, listener) => this.#events.on(event, listener);
      off = (event, listener) => this.#events.off(event, listener);
      constructor(widget) {
        super();
        this.#widget = widget;
        let attrs = widget.specs.attrs;
        attrs?.forEach(attr => this.set(attr, widget.getAttribute(attr)));
      }
      change(name, old, value) {
        this.set(name, value);
        this.#events.trigger("change");
        this.#events.trigger(`${name}:change`, value);
      }
    }
    exports.WidgetAttributes = WidgetAttributes2;
  }
});
ims.set("./client", {
  hash: 2102509577,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetClientController = void 0;
    var _controller = require2("./controller");
    var _attributes = require2("./attributes");
    var _bundle = require2("@beyond-js/kernel/bundle");
    var _styles = require2("@beyond-js/kernel/styles");
    class WidgetClientController2 extends _controller.WidgetControllerBase {
      #widget;
      get widget() {
        return this.#widget;
      }
      #store;
      get store() {
        return this.#store;
      }
      #attributes;
      get attributes() {
        return this.#attributes;
      }
      attributeChanged(name, old, value) {
        this.#attributes.change(name, old, value);
      }
      get styles() {
        const styles = this.#widget.styles;
        return styles;
      }
      constructor(widget) {
        super({
          widget
        });
        this.#widget = widget;
        this.#attributes = new _attributes.WidgetAttributes(widget);
        const styles = new _styles.DependenciesStyles(this.specs.vspecifier);
        const links = () => [...styles.elements].map(style => style.href);
        !this.styles.initialised && this.styles.initialise(links());
        styles.on("change", () => this.styles.update(links()));
      }
      render() {
        try {
          this.mount();
        } catch (exc) {
          console.log(`Error mounting widget controller "${this.#widget.localName}":`);
          console.log(exc.stack);
        }
      }
      refresh() {
        this.unmount();
        this.render();
      }
      #refresh = () => this.refresh();
      disconnect() {
        this.unmount();
      }
      async initialise() {
        if (!this.Widget) {
          throw new Error(`The return value of the Widget property is undefined. "${this.#widget.localName}" widget`);
        }
        this.#store = this.createStore?.();
        const prerender = this.#widget.ssr.prerender;
        if (prerender) {
          const cached = prerender?.store;
          await this.#store?.hydrate(cached);
        }
        this.#store?.fetch?.();
        this.render();
        if (!_bundle.instances.has(this.specs.vspecifier)) {
          console.log(`Bundle id "${this.specs.vspecifier}" not found. Try refreshing the page.
If the problem still persist, delete the BeyondJS cache and try again.`);
          return;
        }
        const pkg = _bundle.instances.get(this.specs.vspecifier).package();
        pkg.hmr.on("change", this.#refresh);
      }
    }
    exports.WidgetClientController = WidgetClientController2;
  }
});
ims.set("./controller", {
  hash: 4127212824,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetControllerBase = void 0;
    var _render = require2("@beyond-js/widgets/render");
    class WidgetControllerBase2 {
      #specs;
      get specs() {
        return this.#specs;
      }
      get element() {
        return this.#specs.name;
      }
      get is() {
        return this.#specs.is;
      }
      get route() {
        return this.#specs.route;
      }
      get layout() {
        return this.#specs.layout;
      }
      #pkg;
      get pkg() {
        return this.#pkg;
      }
      get Widget() {
        return;
      }
      createStore(language) {
        return void 0;
      }
      constructor({
        specs,
        widget
      }) {
        if (!specs) {
          const {
            localName
          } = widget;
          if (!_render.widgets.has(localName)) throw new Error(`Widget name "${localName}" is not registered`);
          specs = _render.widgets.get(localName);
        }
        this.#pkg = (() => {
          const split = specs.vspecifier.split("/");
          const scope = split[0].startsWith("@") ? split.shift() : void 0;
          const [name] = split.shift().split("@");
          return scope ? `${scope}/${name}` : name;
        })();
        this.#specs = specs;
      }
    }
    exports.WidgetControllerBase = WidgetControllerBase2;
  }
});
ims.set("./ssr", {
  hash: 1515978368,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetServerController = void 0;
    var _controller = require2("./controller");
    var _styles = require2("@beyond-js/kernel/styles");
    class WidgetServerController2 extends _controller.WidgetControllerBase {
      #styles = [];
      get styles() {
        return this.#styles;
      }
      constructor(params) {
        super(params);
        const styles = new _styles.DependenciesStyles(this.specs.vspecifier);
        styles.elements.forEach(({
          href
        }) => this.#styles.push(href));
        this.#styles.unshift(`##_!${this.pkg}!_##global.css`);
      }
    }
    exports.WidgetServerController = WidgetServerController2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./attributes",
  "from": "WidgetAttributes",
  "name": "WidgetAttributes"
}, {
  "im": "./client",
  "from": "WidgetClientController",
  "name": "WidgetClientController"
}, {
  "im": "./controller",
  "from": "IWidgetStore",
  "name": "IWidgetStore"
}, {
  "im": "./controller",
  "from": "WidgetControllerBase",
  "name": "WidgetControllerBase"
}, {
  "im": "./ssr",
  "from": "IWidgetRendered",
  "name": "IWidgetRendered"
}, {
  "im": "./ssr",
  "from": "WidgetServerController",
  "name": "WidgetServerController"
}];
var WidgetAttributes, WidgetClientController, IWidgetStore, WidgetControllerBase, IWidgetRendered, WidgetServerController;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "WidgetAttributes") && (WidgetAttributes = require2 ? require2("./attributes").WidgetAttributes : value);
  (require2 || prop === "WidgetClientController") && (WidgetClientController = require2 ? require2("./client").WidgetClientController : value);
  (require2 || prop === "IWidgetStore") && (IWidgetStore = require2 ? require2("./controller").IWidgetStore : value);
  (require2 || prop === "WidgetControllerBase") && (WidgetControllerBase = require2 ? require2("./controller").WidgetControllerBase : value);
  (require2 || prop === "IWidgetRendered") && (IWidgetRendered = require2 ? require2("./ssr").IWidgetRendered : value);
  (require2 || prop === "WidgetServerController") && (WidgetServerController = require2 ? require2("./ssr").WidgetServerController : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvY29udHJvbGxlci4wLjEuNC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvY29udHJvbGxlci9fX3NvdXJjZXMvY29udHJvbGxlci9hdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9jb250cm9sbGVyL19fc291cmNlcy9jb250cm9sbGVyL2NsaWVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvY29udHJvbGxlci9fX3NvdXJjZXMvY29udHJvbGxlci9jb250cm9sbGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9jb250cm9sbGVyL19fc291cmNlcy9jb250cm9sbGVyL3Nzci50cyJdLCJuYW1lcyI6WyJjb250cm9sbGVyXzBfMV80X2V4cG9ydHMiLCJfX2V4cG9ydCIsIklXaWRnZXRSZW5kZXJlZCIsIklXaWRnZXRTdG9yZSIsIldpZGdldEF0dHJpYnV0ZXMiLCJXaWRnZXRDbGllbnRDb250cm9sbGVyIiwiV2lkZ2V0Q29udHJvbGxlckJhc2UiLCJXaWRnZXRTZXJ2ZXJDb250cm9sbGVyIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9jb3JlIiwicmVxdWlyZTIiLCJXaWRnZXRBdHRyaWJ1dGVzMiIsIk1hcCIsIndpZGdldCIsImV2ZW50cyIsIkV2ZW50cyIsIm9uIiwiZXZlbnQiLCJsaXN0ZW5lciIsIm9mZiIsImNvbnN0cnVjdG9yIiwiYXR0cnMiLCJzcGVjcyIsImZvckVhY2giLCJhdHRyIiwic2V0IiwiZ2V0QXR0cmlidXRlIiwiY2hhbmdlIiwibmFtZSIsIm9sZCIsInZhbHVlIiwidHJpZ2dlciIsIl9jb250cm9sbGVyIiwiX2F0dHJpYnV0ZXMiLCJfYnVuZGxlIiwiX3N0eWxlcyIsIldpZGdldENsaWVudENvbnRyb2xsZXIyIiwic3RvcmUiLCJhdHRyaWJ1dGVzIiwiYXR0cmlidXRlQ2hhbmdlZCIsInN0eWxlcyIsIkRlcGVuZGVuY2llc1N0eWxlcyIsInZzcGVjaWZpZXIiLCJsaW5rcyIsImVsZW1lbnRzIiwibWFwIiwic3R5bGUiLCJocmVmIiwiaW5pdGlhbGlzZWQiLCJpbml0aWFsaXNlIiwidXBkYXRlIiwicmVuZGVyIiwibW91bnQiLCJleGMiLCJjb25zb2xlIiwibG9nIiwibG9jYWxOYW1lIiwic3RhY2siLCJyZWZyZXNoIiwidW5tb3VudCIsIiNyZWZyZXNoIiwiZGlzY29ubmVjdCIsIldpZGdldCIsIkVycm9yIiwiY3JlYXRlU3RvcmUiLCJwcmVyZW5kZXIiLCJzc3IiLCJjYWNoZWQiLCJoeWRyYXRlIiwiZmV0Y2giLCJpbnN0YW5jZXMiLCJoYXMiLCJwa2ciLCJnZXQiLCJwYWNrYWdlIiwiX3JlbmRlciIsIldpZGdldENvbnRyb2xsZXJCYXNlMiIsImVsZW1lbnQiLCJpcyIsInJvdXRlIiwibGF5b3V0IiwibGFuZ3VhZ2UiLCJ3aWRnZXRzIiwic3BsaXQiLCJzY29wZSIsInN0YXJ0c1dpdGgiLCJzaGlmdCIsIldpZGdldFNlcnZlckNvbnRyb2xsZXIyIiwicGFyYW1zIiwicHVzaCIsInVuc2hpZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHdCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsd0JBQUE7RUFBQUUsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxzQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHNCQUFBO0VBQUFDLG9CQUFBLEVBQUFBLENBQUEsS0FBQUEsb0JBQUE7RUFBQUMsc0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxzQkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEs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QSxFQUFpQjtRQUN6QixPQUFPO01BQ1g7TUFVQTdELFlBQXNCO1FBQUNFLEtBQUE7UUFBT1Q7TUFBTSxHQUFpRDtRQUNqRixJQUFJLENBQUNTLEtBQUEsRUFBTztVQUNSLE1BQU07WUFBQ2tDO1VBQVMsSUFBSTNDLE1BQUE7VUFDcEIsSUFBSSxDQUFDOEQsT0FBQSxDQUFBTyxPQUFBLENBQVFYLEdBQUEsQ0FBSWYsU0FBUyxHQUFHLE1BQU0sSUFBSU8sS0FBQSxDQUFNLGdCQUFnQlAsU0FBQSxxQkFBOEI7VUFDM0ZsQyxLQUFBLEdBQVFxRCxPQUFBLENBQUFPLE9BQUEsQ0FBUVQsR0FBQSxDQUFJakIsU0FBUzs7UUFHakMsS0FBSyxDQUFBZ0IsR0FBQSxJQUFRLE1BQUs7VUFDZCxNQUFNVyxLQUFBLEdBQVE3RCxLQUFBLENBQU1vQixVQUFBLENBQVd5QyxLQUFBLENBQU0sR0FBRztVQUN4QyxNQUFNQyxLQUFBLEdBQVFELEtBQUEsQ0FBTSxHQUFHRSxVQUFBLENBQVcsR0FBRyxJQUFJRixLQUFBLENBQU1HLEtBQUEsRUFBSyxHQUFLO1VBQ3pELE1BQU0sQ0FBQzFELElBQUksSUFBSXVELEtBQUEsQ0FBTUcsS0FBQSxFQUFLLENBQUdILEtBQUEsQ0FBTSxHQUFHO1VBQ3RDLE9BQU9DLEtBQUEsR0FBUSxHQUFHQSxLQUFBLElBQVN4RCxJQUFBLEtBQVNBLElBQUE7UUFDeEMsSUFBQztRQUVELEtBQUssQ0FBQU4sS0FBQSxHQUFTQSxLQUFBO01BQ2xCOztJQUNIZixPQUFBLENBQUFMLG9CQUFBLEdBQUEwRSxxQkFBQTs7Ozs7Ozs7Ozs7O0lDekVELElBQUE1QyxXQUFBLEdBQUF0QixRQUFBO0lBQ0EsSUFBQXlCLE9BQUEsR0FBQXpCLFFBQUE7SUFnQmlCLE1BQ0Y2RSx1QkFBQSxTQUErQnZELFdBQUEsQ0FBQTlCLG9CQUFBLENBQW9CO01BQ3JELENBQUFzQyxNQUFBLEdBQW9CO01BQzdCLElBQUlBLE9BQUEsRUFBTTtRQUNOLE9BQU8sS0FBSyxDQUFBQSxNQUFBO01BQ2hCO01BRUFwQixZQUFzQm9FLE1BQUEsRUFBc0Q7UUFDeEUsTUFBTUEsTUFBTTtRQUNaLE1BQU1oRCxNQUFBLEdBQVMsSUFBSUwsT0FBQSxDQUFBTSxrQkFBQSxDQUFtQixLQUFLbkIsS0FBQSxDQUFNb0IsVUFBVTtRQUMzREYsTUFBQSxDQUFPSSxRQUFBLENBQVNyQixPQUFBLENBQVEsQ0FBQztVQUFDd0I7UUFBSSxNQUF3QixLQUFLLENBQUFQLE1BQUEsQ0FBUWlELElBQUEsQ0FBSzFDLElBQUksQ0FBQztRQUU3RSxLQUFLLENBQUFQLE1BQUEsQ0FBUWtELE9BQUEsQ0FBUSxPQUFPLEtBQUtsQixHQUFBLGdCQUFtQjtNQUN4RDs7SUFHSGpFLE9BQUEsQ0FBQUosc0JBQUEsR0FBQW9GLHVCQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==