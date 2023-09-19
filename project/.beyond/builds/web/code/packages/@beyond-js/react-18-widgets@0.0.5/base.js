System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","scheduler@0.23.0","react-dom@18.2.0","react-dom@18.2.0/client","@beyond-js/kernel@0.1.9/core","@beyond-js/widgets@0.1.4/render","@beyond-js/kernel@0.1.9/styles","@beyond-js/widgets@0.1.4/controller"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["scheduler","0.23.0"],["react-dom","18.2.0"],["@beyond-js/widgets","0.1.4"],["@beyond-js/react-18-widgets","0.0.5"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('scheduler@0.23.0', dep), dep => dependencies.set('react-dom@18.2.0', dep), dep => dependencies.set('react-dom@18.2.0/client', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.4/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep), dep => dependencies.set('@beyond-js/widgets@0.1.4/controller', dep)],
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

// .beyond/uimport/@beyond-js/react-18-widgets/base.0.0.5.js
var base_0_0_5_exports = {};
__export(base_0_0_5_exports, {
  ReactWidgetController: () => ReactWidgetController,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(base_0_0_5_exports);

// node_modules/@beyond-js/react-18-widgets/base/base.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("react@18.2.0"), 0);
var dependency_2 = __toESM(require("react-dom@18.2.0/client"), 0);
var dependency_3 = __toESM(require("@beyond-js/widgets@0.1.4/controller"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/react-18-widgets@0.0.4/base"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["react-dom/client", dependency_2], ["@beyond-js/widgets/controller", dependency_3]]);
var ims = /* @__PURE__ */new Map();
ims.set("./controller", {
  hash: 2510685826,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ReactWidgetController = void 0;
    var React = require2("react");
    var _client = require2("react-dom/client");
    var _controller = require2("@beyond-js/widgets/controller");
    var _widget = require2("./widget");
    var _wrapper = require2("./wrapper");
    class ReactWidgetController2 extends _controller.WidgetClientController {
      #wrapper;
      #root;
      #mounted = false;
      get mounted() {
        return this.#mounted;
      }
      get Widget() {
        return null;
      }
      mount(props) {
        if (this.#mounted) return;
        this.#mounted = true;
        if (!this.Widget) {
          return {
            errors: [`Widget "${this.element}" does not export a Widget class`]
          };
        }
        props = Object.assign({
          widget: this.widget,
          attributes: this.attributes,
          component: this.widget,
          store: this.store
        }, props ? props : {});
        const holder = this.widget.holder;
        const hydrate = !!holder.children.length;
        try {
          const wrapper = this.#wrapper = new _wrapper.Wrapper(this);
          const {
            styles,
            widget
          } = this;
          const {
            holder: holder2
          } = widget;
          const p = {
            wrapper,
            props,
            styles,
            holder: holder2,
            hydrate
          };
          const element = React.createElement(_widget.default, p);
          if (hydrate) {
            this.#root = (0, _client.hydrateRoot)(holder2, element);
          } else {
            const root = this.#root = (0, _client.createRoot)(holder2);
            root.render(element);
          }
        } catch (exc) {
          console.log(`Error rendering widget "${this.widget.localName}":`);
          console.log(exc.stack);
        }
      }
      unmount() {
        if (!this.#mounted) return;
        this.#mounted = false;
        this.#root.unmount();
      }
      refresh() {
        this.#wrapper.changed();
      }
    }
    exports.ReactWidgetController = ReactWidgetController2;
  }
});
ims.set("./styles", {
  hash: 3645751033,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;
    var React = require2("react");
    function _default({
      styles
    }) {
      const rs = React.useState(0);
      React.useEffect(() => {
        const refresh = () => rs[1](prev => prev + 1);
        styles.on("change", refresh);
        return () => styles.off("change", refresh) && void 0;
      }, []);
      const head = [...styles.resources].map(url => {
        const loaded = () => styles.onloaded(url);
        return React.createElement("link", {
          key: url,
          href: url,
          rel: "stylesheet",
          onLoad: loaded,
          onError: loaded
        });
      });
      return React.createElement(React.Fragment, null, head);
    }
  }
});
ims.set("./widget", {
  hash: 90867181,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;
    var React = require2("react");
    var _styles = require2("./styles");
    function _default({
      wrapper,
      props,
      styles,
      holder,
      hydrate
    }) {
      const elements = [];
      elements.push(React.createElement(_styles.default, {
        key: "styles",
        styles,
        widget: props.widget
      }));
      const rs = React.useState(0);
      const refresh = () => rs[1](rs[0] + 1);
      wrapper.changed = refresh;
      const loaded = (() => {
        !styles.loaded && styles.ready.then(refresh);
        holder.style.display = "";
        return styles.loaded;
      })();
      const {
        Widget
      } = wrapper;
      const widget = React.createElement(Widget, {
        key: "widget",
        ...props
      });
      (hydrate || loaded) && elements.push(widget);
      return React.createElement(React.Fragment, null, elements);
    }
  }
});
ims.set("./wrapper", {
  hash: 4175409966,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Wrapper = void 0;
    class Wrapper {
      #Widget;
      get Widget() {
        return this.#Widget.Widget;
      }
      changed = () => void 0;
      constructor(Widget) {
        this.#Widget = Widget;
      }
    }
    exports.Wrapper = Wrapper;
  }
});
__pkg.exports.descriptor = [{
  "im": "./controller",
  "from": "ReactWidgetController",
  "name": "ReactWidgetController"
}];
var ReactWidgetController;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ReactWidgetController") && (ReactWidgetController = require2 ? require2("./controller").ReactWidgetController : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvYmFzZS4wLjAuNS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvYmFzZS9fX3NvdXJjZXMvYmFzZS9jb250cm9sbGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3QtMTgtd2lkZ2V0cy9iYXNlL19fc291cmNlcy9iYXNlL3N0eWxlcy50c3giLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdC0xOC13aWRnZXRzL2Jhc2UvX19zb3VyY2VzL2Jhc2Uvd2lkZ2V0LnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvYmFzZS9fX3NvdXJjZXMvYmFzZS93cmFwcGVyLnRzIl0sIm5hbWVzIjpbImJhc2VfMF8wXzVfZXhwb3J0cyIsIl9fZXhwb3J0IiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlJlYWN0IiwicmVxdWlyZTIiLCJfY2xpZW50IiwiX2NvbnRyb2xsZXIiLCJfd2lkZ2V0IiwiX3dyYXBwZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIyIiwiV2lkZ2V0Q2xpZW50Q29udHJvbGxlciIsIndyYXBwZXIiLCJyb290IiwibW91bnRlZCIsIldpZGdldCIsIm1vdW50IiwicHJvcHMiLCJlcnJvcnMiLCJlbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwid2lkZ2V0IiwiYXR0cmlidXRlcyIsImNvbXBvbmVudCIsInN0b3JlIiwiaG9sZGVyIiwiaHlkcmF0ZSIsImNoaWxkcmVuIiwibGVuZ3RoIiwiV3JhcHBlciIsInN0eWxlcyIsImhvbGRlcjIiLCJwIiwiY3JlYXRlRWxlbWVudCIsImRlZmF1bHQiLCJoeWRyYXRlUm9vdCIsImNyZWF0ZVJvb3QiLCJyZW5kZXIiLCJleGMiLCJjb25zb2xlIiwibG9nIiwibG9jYWxOYW1lIiwic3RhY2siLCJ1bm1vdW50IiwicmVmcmVzaCIsImNoYW5nZWQiLCJfZGVmYXVsdCIsInJzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJwcmV2Iiwib24iLCJvZmYiLCJoZWFkIiwicmVzb3VyY2VzIiwibWFwIiwidXJsIiwibG9hZGVkIiwib25sb2FkZWQiLCJrZXkiLCJocmVmIiwicmVsIiwib25Mb2FkIiwib25FcnJvciIsIkZyYWdtZW50IiwiX3N0eWxlcyIsImVsZW1lbnRzIiwicHVzaCIsInJlYWR5IiwidGhlbiIsInN0eWxlIiwiZGlzcGxheSIsImNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQTtBQUFBQyxRQUFBLENBQUFELGtCQUFBO0VBQUFFLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVAsa0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUEsSUFBQVEsS0FBQSxHQUFBQyxRQUFBO0lBQ0EsSUFBQUMsT0FBQSxHQUFBRCxRQUFBO0lBQ0EsSUFBQUUsV0FBQSxHQUFBRixRQUFBO0lBQ0EsSUFBQUcsT0FBQSxHQUFBSCxRQUFBO0lBQ0EsSUFBQUksUUFBQSxHQUFBSixRQUFBO0lBRWlCLE1BQ0ZLLHNCQUFBLFNBQThCSCxXQUFBLENBQUFJLHNCQUFBLENBQXNCO01BQy9ELENBQUFDLE9BQUE7TUFDQSxDQUFBQyxJQUFBO01BRUEsQ0FBQUMsT0FBQSxHQUFXO01BQ1gsSUFBSUEsUUFBQSxFQUFPO1FBQ1AsT0FBTyxLQUFLLENBQUFBLE9BQUE7TUFDaEI7TUFHQSxJQUFJQyxPQUFBLEVBQU07UUFDTixPQUFPO01B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