System.register(["@beyond-js/kernel@0.1.9/bundle","@vue/shared@3.2.47","@vue/reactivity@3.2.47","@vue/runtime-core@3.2.47","@vue/runtime-dom@3.2.47","vue@3.2.47","@beyond-js/kernel@0.1.9/core","@beyond-js/widgets@0.1.4/render","@beyond-js/kernel@0.1.9/styles","@beyond-js/widgets@0.1.4/controller"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@vue/shared","3.2.47"],["@vue/reactivity","3.2.47"],["@vue/runtime-core","3.2.47"],["@vue/runtime-dom","3.2.47"],["vue","3.2.47"],["@beyond-js/widgets","0.1.4"],["@beyond-js/vue-widgets","0.1.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@vue/shared@3.2.47', dep), dep => dependencies.set('@vue/reactivity@3.2.47', dep), dep => dependencies.set('@vue/runtime-core@3.2.47', dep), dep => dependencies.set('@vue/runtime-dom@3.2.47', dep), dep => dependencies.set('vue@3.2.47', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.4/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep), dep => dependencies.set('@beyond-js/widgets@0.1.4/controller', dep)],
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

// .beyond/uimport/@beyond-js/vue-widgets/base.0.1.1.js
var base_0_1_1_exports = {};
__export(base_0_1_1_exports, {
  VueWidgetController: () => VueWidgetController,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(base_0_1_1_exports);

// node_modules/@beyond-js/vue-widgets/base/base.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("vue@3.2.47"), 0);
var dependency_2 = __toESM(require("@beyond-js/widgets@0.1.4/controller"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/vue-widgets@0.1.1/base"
  },
  "type": "code"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["vue", dependency_1], ["@beyond-js/widgets/controller", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./styles.render", {
  hash: 3498848839,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.render = render;
    var _vue = require2("vue");
    const _hoisted_1 = ["href"];
    function render(_ctx, _cache) {
      return (0, _vue.openBlock)(true), (0, _vue.createElementBlock)(_vue.Fragment, null, (0, _vue.renderList)(_ctx.resources, url => {
        return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("link", {
          href: url,
          rel: "stylesheet",
          onLoad: _cache[0] || (_cache[0] = (...args) => _ctx.onloaded && _ctx.onloaded(...args))
        }, null, 40, _hoisted_1);
      }), 256);
    }
  }
});
ims.set("./styles.script", {
  hash: 3498848839,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = {
      props: ["styles"],
      methods: {
        onloaded(url) {
          this.styles.onloaded(url);
        }
      },
      data() {
        const data = {
          resources: this.styles.resources
        };
        this.styles.on("change", () => {
          this.resources = this.styles.resources;
        });
        return data;
      }
    };
    exports.default = _default;
  }
});
ims.set("./styles.vue", {
  hash: 3498848839,
  creator: function (require2, exports) {
    const script = require2("./styles.script").default;
    const {
      render
    } = require2("./styles.render");
    script.render = render;
    script.__file = "styles.vue";
    script.__scopeId = "styles";
    exports.default = script;
  }
});
ims.set("./widget.render", {
  hash: 4238036114,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.render = render;
    var _vue = require2("vue");
    function render(_ctx, _cache) {
      const _component_Styles = (0, _vue.resolveComponent)("Styles");
      return (0, _vue.openBlock)(), (0, _vue.createElementBlock)(_vue.Fragment, null, [(0, _vue.createVNode)(_component_Styles, {
        styles: _ctx.styles
      }, null, 8, ["styles"]), _ctx.ready ? ((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.widget()), (0, _vue.mergeProps)({
        key: 0,
        key: _ctx.version
      }, this.props), null, 16)) : (0, _vue.createCommentVNode)("v-if", true)], 64);
    }
  }
});
ims.set("./widget.script", {
  hash: 4238036114,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _styles = require2("./styles.vue");
    var _default = {
      props: ["wrapper", "holder", "props", "styles"],
      components: {
        Styles: _styles.default
      },
      methods: {
        widget() {
          return this.wrapper.Widget;
        }
      },
      data() {
        const {
          styles
        } = this;
        !styles.loaded && styles.ready.then(() => {
          this.holder.style.display = "";
          this.ready = true;
        });
        const data = {
          version: this.wrapper.version,
          ready: styles.loaded
        };
        this.wrapper.changed = () => this.version = this.wrapper.version;
        return data;
      }
    };
    exports.default = _default;
  }
});
ims.set("./widget.vue", {
  hash: 4238036114,
  creator: function (require2, exports) {
    const script = require2("./widget.script").default;
    const {
      render
    } = require2("./widget.render");
    script.render = render;
    script.__file = "widget.vue";
    script.__scopeId = "widget";
    exports.default = script;
  }
});
ims.set("./controller", {
  hash: 501768120,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.VueWidgetController = void 0;
    var _controller = require2("@beyond-js/widgets/controller");
    var _vue = require2("vue");
    var _wrapper = require2("./wrapper");
    class VueWidgetController2 extends _controller.WidgetClientController {
      #wrapper;
      mount(props) {
        if (!this.Widget) {
          return {
            errors: [`Widget "${this.element}" does not export a Widget class`]
          };
        }
        props = Object.assign({
          widget: this.widget,
          attributes: this.attributes,
          store: this.store
        }, props ? props : {});
        const holder = this.widget.holder;
        const hydrate = !!holder.children.length;
        try {
          const wrapper = this.#wrapper = new _wrapper.Wrapper(this);
          const p = {
            wrapper,
            props,
            styles: this.styles,
            holder: this.widget.holder
          };
          const Widget = require2("./widget.vue").default;
          const app = hydrate ? (0, _vue.createSSRApp)(Widget, p) : (0, _vue.createApp)(Widget, p);
          app.mount(holder);
        } catch (exc) {
          console.log(`Error rendering widget "${this.widget.localName}":`);
          console.log(exc.stack);
        }
      }
      unmount() {}
      refresh() {
        this.#wrapper.change();
      }
    }
    exports.VueWidgetController = VueWidgetController2;
  }
});
ims.set("./wrapper", {
  hash: 82277827,
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
      change() {
        this.#version++;
        this.changed();
      }
      #version = 0;
      get version() {
        return this.#version;
      }
      constructor(Widget) {
        this.#Widget = Widget;
      }
    }
    exports.Wrapper = Wrapper;
  }
});
__pkg.exports.descriptor = [{
  "im": "./controller",
  "from": "VueWidgetController",
  "name": "VueWidgetController"
}];
var VueWidgetController;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "VueWidgetController") && (VueWidgetController = require2 ? require2("./controller").VueWidgetController : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3Z1ZS13aWRnZXRzL2Jhc2UuMC4xLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy92dWUtd2lkZ2V0cy9iYXNlL0BiZXlvbmQtanMvdnVlLXdpZGdldHMvY2xpZW50L2Jhc2UvdGVtcGxhdGUudnVlLmh0bWwiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy92dWUtd2lkZ2V0cy9iYXNlL0BiZXlvbmQtanMvdnVlLXdpZGdldHMvY2xpZW50L2Jhc2Uvc3R5bGVzLnZ1ZSIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3Z1ZS13aWRnZXRzL2Jhc2UvQGJleW9uZC1qcy92dWUtd2lkZ2V0cy9jbGllbnQvYmFzZS93aWRnZXQudnVlIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvdnVlLXdpZGdldHMvYmFzZS9AYmV5b25kLWpzL3Z1ZS13aWRnZXRzL2NsaWVudC9iYXNlL2NvbnRyb2xsZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy92dWUtd2lkZ2V0cy9iYXNlL0BiZXlvbmQtanMvdnVlLXdpZGdldHMvY2xpZW50L2Jhc2Uvd3JhcHBlci50cyJdLCJuYW1lcyI6WyJiYXNlXzBfMV8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsIlZ1ZVdpZGdldENvbnRyb2xsZXIiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX3Z1ZSIsImNyZWF0ZUVsZW1lbnRCbG9jayIsIkZyYWdtZW50IiwicmVuZGVyTGlzdCIsIl9jdHgiLCJyZXNvdXJjZXMiLCJ1cmwiLCJocmVmIiwicmVsIiwib25Mb2FkIiwiX2NhY2hlIiwiYXJncyIsIm9ubG9hZGVkIiwiX2hvaXN0ZWRfMSIsInByb3BzIiwibWV0aG9kcyIsInN0eWxlcyIsImRhdGEiLCJvbiIsInNjcmlwdCIsInJlcXVpcmUyIiwiZGVmYXVsdCIsInJlbmRlciIsIl9fZmlsZSIsIl9fc2NvcGVJZCIsImNyZWF0ZVZOb2RlIiwiX2NvbXBvbmVudF9TdHlsZXMiLCJyZWFkeSIsIm9wZW5CbG9jayIsImNyZWF0ZUJsb2NrIiwicmVzb2x2ZUR5bmFtaWNDb21wb25lbnQiLCJ3aWRnZXQiLCJtZXJnZVByb3BzIiwia2V5IiwidmVyc2lvbiIsImNyZWF0ZUNvbW1lbnRWTm9kZSIsIl9zdHlsZXMiLCJjb21wb25lbnRzIiwiU3R5bGVzIiwid3JhcHBlciIsIldpZGdldCIsImxvYWRlZCIsInRoZW4iLCJob2xkZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJjaGFuZ2VkIiwiX2NvbnRyb2xsZXIiLCJfd3JhcHBlciIsIlZ1ZVdpZGdldENvbnRyb2xsZXIyIiwiV2lkZ2V0Q2xpZW50Q29udHJvbGxlciIsIm1vdW50IiwiZXJyb3JzIiwiZWxlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsImF0dHJpYnV0ZXMiLCJzdG9yZSIsImh5ZHJhdGUiLCJjaGlsZHJlbiIsImxlbmd0aCIsIldyYXBwZXIiLCJwIiwiYXBwIiwiY3JlYXRlU1NSQXBwIiwiY3JlYXRlQXBwIiwiZXhjIiwiY29uc29sZSIsImxvZyIsImxvY2FsTmFtZSIsInN0YWNrIiwidW5tb3VudCIsInJlZnJlc2giLCJjaGFuZ2UiLCJjb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxrQkFBQTtFQUFBRSxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFQLGtCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkNBQTs7eUNBQ0UsR0FBQVEsSUFBQSxDQUFBQyxrQkFBQSxFQUEwRkQsSUFBQSxDQUFBRSxRQUFB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