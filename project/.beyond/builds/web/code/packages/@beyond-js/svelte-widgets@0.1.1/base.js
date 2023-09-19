System.register(["@beyond-js/kernel@0.1.9/bundle","svelte@3.57.0/internal","@beyond-js/kernel@0.1.9/core","@beyond-js/widgets@0.1.4/render","@beyond-js/kernel@0.1.9/styles","@beyond-js/widgets@0.1.4/controller"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["svelte","3.57.0"],["@beyond-js/widgets","0.1.4"],["@beyond-js/svelte-widgets","0.1.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('svelte@3.57.0/internal', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.4/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep), dep => dependencies.set('@beyond-js/widgets@0.1.4/controller', dep)],
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

// .beyond/uimport/@beyond-js/svelte-widgets/base.0.1.1.js
var base_0_1_1_exports = {};
__export(base_0_1_1_exports, {
  SvelteWidgetController: () => SvelteWidgetController,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(base_0_1_1_exports);

// node_modules/@beyond-js/svelte-widgets/base/base.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("svelte@3.57.0/internal"), 0);
var dependency_2 = __toESM(require("@beyond-js/widgets@0.1.4/controller"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/svelte-widgets@0.1.1/base"
  },
  "type": "code"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["svelte/internal", dependency_1], ["@beyond-js/widgets/controller", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./styles.svelte", {
  hash: 2078021496,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _internal = require2("svelte/internal");
    function get_each_context(ctx, list, i) {
      const child_ctx = ctx.slice();
      child_ctx[2] = list[i];
      return child_ctx;
    }
    function create_each_block(ctx) {
      let link;
      let link_href_value;
      let mounted;
      let dispose;
      return {
        c() {
          link = (0, _internal.element)("link");
          (0, _internal.attr)(link, "href", link_href_value = ctx[2]);
          (0, _internal.attr)(link, "rel", "stylesheet");
        },
        m(target, anchor) {
          (0, _internal.insert)(target, link, anchor);
          if (!mounted) {
            dispose = (0, _internal.listen)(link, "load", ctx[1]);
            mounted = true;
          }
        },
        p(ctx2, dirty) {
          if (dirty & 1 && link_href_value !== (link_href_value = ctx2[2])) {
            (0, _internal.attr)(link, "href", link_href_value);
          }
        },
        d(detaching) {
          if (detaching) (0, _internal.detach)(link);
          mounted = false;
          dispose();
        }
      };
    }
    function create_fragment(ctx) {
      let each_1_anchor;
      let each_value = [...ctx[0].resources];
      let each_blocks = [];
      for (let i = 0; i < each_value.length; i += 1) {
        each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
      }
      return {
        c() {
          for (let i = 0; i < each_blocks.length; i += 1) {
            each_blocks[i].c();
          }
          each_1_anchor = (0, _internal.empty)();
        },
        m(target, anchor) {
          for (let i = 0; i < each_blocks.length; i += 1) {
            each_blocks[i].m(target, anchor);
          }
          (0, _internal.insert)(target, each_1_anchor, anchor);
        },
        p(ctx2, [dirty]) {
          if (dirty & 1) {
            each_value = [...ctx2[0].resources];
            let i;
            for (i = 0; i < each_value.length; i += 1) {
              const child_ctx = get_each_context(ctx2, each_value, i);
              if (each_blocks[i]) {
                each_blocks[i].p(child_ctx, dirty);
              } else {
                each_blocks[i] = create_each_block(child_ctx);
                each_blocks[i].c();
                each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
              }
            }
            for (; i < each_blocks.length; i += 1) {
              each_blocks[i].d(1);
            }
            each_blocks.length = each_value.length;
          }
        },
        i: _internal.noop,
        o: _internal.noop,
        d(detaching) {
          (0, _internal.destroy_each)(each_blocks, detaching);
          if (detaching) (0, _internal.detach)(each_1_anchor);
        }
      };
    }
    function instance($$self, $$props, $$invalidate) {
      let {
        styles
      } = $$props;
      const load_handler = url => {
        styles.onloaded(url);
      };
      $$self.$$set = $$props2 => {
        if ("styles" in $$props2) $$invalidate(0, styles = $$props2.styles);
      };
      return [styles, load_handler];
    }
    class Component extends _internal.SvelteComponent {
      constructor(options) {
        super();
        (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {
          styles: 0
        });
      }
    }
    var _default = Component;
    exports.default = _default;
  }
});
ims.set("./widget.svelte", {
  hash: 3039970783,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _internal = require2("svelte/internal");
    var _styles = require2("./styles.svelte");
    function create_if_block(ctx) {
      let switch_instance;
      let switch_instance_anchor;
      let current;
      const switch_instance_spread_levels = [ctx[1]];
      var switch_value = ctx[3];
      function switch_props(ctx2) {
        let switch_instance_props = {};
        for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
          switch_instance_props = (0, _internal.assign)(switch_instance_props, switch_instance_spread_levels[i]);
        }
        return {
          props: switch_instance_props
        };
      }
      if (switch_value) {
        switch_instance = new switch_value(switch_props(ctx));
      }
      return {
        c() {
          if (switch_instance) (0, _internal.create_component)(switch_instance.$$.fragment);
          switch_instance_anchor = (0, _internal.empty)();
        },
        m(target, anchor) {
          if (switch_instance) {
            (0, _internal.mount_component)(switch_instance, target, anchor);
          }
          (0, _internal.insert)(target, switch_instance_anchor, anchor);
          current = true;
        },
        p(ctx2, dirty) {
          const switch_instance_changes = dirty & 2 ? (0, _internal.get_spread_update)(switch_instance_spread_levels, [(0, _internal.get_spread_object)(ctx2[1])]) : {};
          if (switch_value !== (switch_value = ctx2[3])) {
            if (switch_instance) {
              (0, _internal.group_outros)();
              const old_component = switch_instance;
              (0, _internal.transition_out)(old_component.$$.fragment, 1, 0, () => {
                (0, _internal.destroy_component)(old_component, 1);
              });
              (0, _internal.check_outros)();
            }
            if (switch_value) {
              switch_instance = new switch_value(switch_props(ctx2));
              (0, _internal.create_component)(switch_instance.$$.fragment);
              (0, _internal.transition_in)(switch_instance.$$.fragment, 1);
              (0, _internal.mount_component)(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
            } else {
              switch_instance = null;
            }
          } else if (switch_value) {
            switch_instance.$set(switch_instance_changes);
          }
        },
        i(local) {
          if (current) return;
          if (switch_instance) (0, _internal.transition_in)(switch_instance.$$.fragment, local);
          current = true;
        },
        o(local) {
          if (switch_instance) (0, _internal.transition_out)(switch_instance.$$.fragment, local);
          current = false;
        },
        d(detaching) {
          if (detaching) (0, _internal.detach)(switch_instance_anchor);
          if (switch_instance) (0, _internal.destroy_component)(switch_instance, detaching);
        }
      };
    }
    function create_fragment(ctx) {
      let styles_1;
      let t;
      let if_block_anchor;
      let current;
      styles_1 = new _styles.default({
        props: {
          styles: ctx[0]
        }
      });
      let if_block = ctx[2] && create_if_block(ctx);
      return {
        c() {
          (0, _internal.create_component)(styles_1.$$.fragment);
          t = (0, _internal.space)();
          if (if_block) if_block.c();
          if_block_anchor = (0, _internal.empty)();
        },
        m(target, anchor) {
          (0, _internal.mount_component)(styles_1, target, anchor);
          (0, _internal.insert)(target, t, anchor);
          if (if_block) if_block.m(target, anchor);
          (0, _internal.insert)(target, if_block_anchor, anchor);
          current = true;
        },
        p(ctx2, [dirty]) {
          const styles_1_changes = {};
          if (dirty & 1) styles_1_changes.styles = ctx2[0];
          styles_1.$set(styles_1_changes);
          if (ctx2[2]) {
            if (if_block) {
              if_block.p(ctx2, dirty);
              if (dirty & 4) {
                (0, _internal.transition_in)(if_block, 1);
              }
            } else {
              if_block = create_if_block(ctx2);
              if_block.c();
              (0, _internal.transition_in)(if_block, 1);
              if_block.m(if_block_anchor.parentNode, if_block_anchor);
            }
          } else if (if_block) {
            (0, _internal.group_outros)();
            (0, _internal.transition_out)(if_block, 1, 1, () => {
              if_block = null;
            });
            (0, _internal.check_outros)();
          }
        },
        i(local) {
          if (current) return;
          (0, _internal.transition_in)(styles_1.$$.fragment, local);
          (0, _internal.transition_in)(if_block);
          current = true;
        },
        o(local) {
          (0, _internal.transition_out)(styles_1.$$.fragment, local);
          (0, _internal.transition_out)(if_block);
          current = false;
        },
        d(detaching) {
          (0, _internal.destroy_component)(styles_1, detaching);
          if (detaching) (0, _internal.detach)(t);
          if (if_block) if_block.d(detaching);
          if (detaching) (0, _internal.detach)(if_block_anchor);
        }
      };
    }
    function instance($$self, $$props, $$invalidate) {
      let {
        styles
      } = $$props;
      let {
        wrapper
      } = $$props;
      let {
        holder
      } = $$props;
      let {
        props
      } = $$props;
      let {
        loaded
      } = styles;
      !styles.loaded && styles.ready.then(() => {
        $$invalidate(4, holder.style.display = "", holder);
        $$invalidate(2, loaded = true);
      });
      const {
        Widget
      } = wrapper;
      $$self.$$set = $$props2 => {
        if ("styles" in $$props2) $$invalidate(0, styles = $$props2.styles);
        if ("wrapper" in $$props2) $$invalidate(5, wrapper = $$props2.wrapper);
        if ("holder" in $$props2) $$invalidate(4, holder = $$props2.holder);
        if ("props" in $$props2) $$invalidate(1, props = $$props2.props);
      };
      return [styles, props, loaded, Widget, holder, wrapper];
    }
    class Component extends _internal.SvelteComponent {
      constructor(options) {
        super();
        (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {
          styles: 0,
          wrapper: 5,
          holder: 4,
          props: 1
        });
      }
    }
    var _default = Component;
    exports.default = _default;
  }
});
ims.set("./controller", {
  hash: 375308176,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SvelteWidgetController = void 0;
    var _controller = require2("@beyond-js/widgets/controller");
    var _wrapper = require2("./wrapper");
    class SvelteWidgetController2 extends _controller.WidgetClientController {
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
          const Widget = require2("./widget.svelte").default;
          new Widget({
            target: holder,
            hydrate,
            props: p
          });
        } catch (exc) {
          console.log(`Error rendering widget "${this.widget.localName}":`);
          console.log(exc.stack);
        }
      }
      unmount() {}
      refresh() {
        this.#wrapper.changed();
      }
    }
    exports.SvelteWidgetController = SvelteWidgetController2;
  }
});
ims.set("./wrapper", {
  hash: 747229565,
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
  "from": "SvelteWidgetController",
  "name": "SvelteWidgetController"
}];
var SvelteWidgetController;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "SvelteWidgetController") && (SvelteWidgetController = require2 ? require2("./controller").SvelteWidgetController : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3N2ZWx0ZS13aWRnZXRzL2Jhc2UuMC4xLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9zdmVsdGUtd2lkZ2V0cy9iYXNlL0BiZXlvbmQtanMvc3ZlbHRlLXdpZGdldHMvY2xpZW50L2Jhc2UiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9zdmVsdGUtd2lkZ2V0cy9iYXNlL0BiZXlvbmQtanMvc3ZlbHRlLXdpZGdldHMvY2xpZW50L2Jhc2UvY29udHJvbGxlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3N2ZWx0ZS13aWRnZXRzL2Jhc2UvQGJleW9uZC1qcy9zdmVsdGUtd2lkZ2V0cy9jbGllbnQvYmFzZS93cmFwcGVyLnRzIl0sIm5hbWVzIjpbImJhc2VfMF8xXzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiU3ZlbHRlV2lkZ2V0Q29udHJvbGxlciIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJjdHgiLCJfaW50ZXJuYWwiLCJpbnNlcnQiLCJ0YXJnZXQiLCJsaW5rIiwiYW5jaG9yIiwiY3R4MiIsInJlc291cmNlcyIsImxlbmd0aCIsImkiLCJzdHlsZXMiLCIkJHByb3BzIiwidXJsIiwib25sb2FkZWQiLCJjcmVhdGVfaWZfYmxvY2siLCJ3cmFwcGVyIiwiaG9sZGVyIiwicHJvcHMiLCJsb2FkZWQiLCJyZWFkeSIsInRoZW4iLCJzdHlsZSIsImRpc3BsYXkiLCJXaWRnZXQiLCJfY29udHJvbGxlciIsInJlcXVpcmUyIiwiX3dyYXBwZXIiLCJTdmVsdGVXaWRnZXRDb250cm9sbGVyMiIsIldpZGdldENsaWVudENvbnRyb2xsZXIiLCJtb3VudCIsImVycm9ycyIsImVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJ3aWRnZXQiLCJhdHRyaWJ1dGVzIiwic3RvcmUiLCJoeWRyYXRlIiwiY2hpbGRyZW4iLCJXcmFwcGVyIiwicCIsImRlZmF1bHQiLCJleGMiLCJjb25zb2xlIiwibG9nIiwibG9jYWxOYW1lIiwic3RhY2siLCJ1bm1vdW50IiwicmVmcmVzaCIsImNoYW5nZWQiLCJjb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxrQkFBQTtFQUFBRSxzQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHNCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFQLGtCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OERDS2lCUSxHQUFBLENBQUc7Ozs7VUFBaEIsSUFBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQTZFQyxNQUFBLEVBQUFDLElBQUEsRUFBQUMsTUFBN0U7Ozs7Ozs7a0VBQWFDLElBQUEsQ0FBRzs7Ozs7Ozs7Ozs7OzsyQkFEVE4sR0FBQSxDQUFNLEdBQUNPLFNBQUE7O3FDQUFoQkMsTUFBQSxFQUFJQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBQUtILElBQUEsQ0FBTSxHQUFDQyxTQUFBOzt1Q0FBaEJDLE1BQUEsRUFBSUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs0Q0FBSkQsTUFBQTs7Ozs7Ozs7Ozs7OztRQUoyQkU7VUFBTUMsT0FBQTsyQkFLY0MsR0FBQSxJQUFHO1FBQUtGLE1BQUEsQ0FBT0csUUFBQSxDQUFTRCxHQUFoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2Q0FhakJaLEdBQUEsQ0FBSzt5QkFBakJBLEdBQUEsQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0pBQU1NLElBQUEsQ0FBSzsrQ0FBakJBLElBQUEsQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFIbEJOLEdBQUEsQ0FBTTs7O3FCQUVqQkEsR0FBQSxDQUFNLE1BQUFjLGVBQUEsQ0FBQWQsR0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7bURBRktNLElBQUEsQ0FBTTs7Y0FFakJBLElBQUEsQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFoQkFJO1VBQU1DLE9BQUE7O1FBQ05JO1VBQU9KLE9BQUE7O1FBQ1BLO1VBQU1MLE9BQUE7O1FBQ05NO1VBQUtOLE9BQUE7O1FBRVZPO1VBQVdSLE1BQUE7T0FDaEJBLE1BQUEsQ0FBT1EsTUFBQSxJQUFVUixNQUFBLENBQU9TLEtBQUEsQ0FBTUMsSUFBQSxDQUFJO3dCQUMvQkosTUFBQSxDQUFPSyxLQUFBLENBQU1DLE9BQUEsR0FBVSxJQUFFTixNQUFBO3dCQUN6QkUsTUFBQSxHQUFTO09BRks7O1FBSVZLO1VBQVdSLE9BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ1huQixJQUFBUyxXQUFBLEdBQUFDLFFBQUE7SUFDQSxJQUFBQyxRQUFBLEdBQUFELFFBQUE7SUFJaUIsTUFDRkUsdUJBQUEsU0FBK0JILFdBQUEsQ0FBQUksc0JBQUEsQ0FBc0I7TUFDaEUsQ0FBQWIsT0FBQTtNQUVBYyxNQUFNWixLQUFBLEVBQTJCO1FBQzdCLElBQUksQ0FBQyxLQUFLTSxNQUFBLEVBQVE7VUFDZCxPQUFPO1lBQUNPLE1BQUEsRUFBUSxDQUFDLFdBQVcsS0FBS0MsT0FBQSxrQ0FBakI7VUFBVDtRQUNWO1FBRURkLEtBQUEsR0FBUWUsTUFBQSxDQUFPQyxNQUFBLENBQU87VUFDbEJDLE1BQUEsRUFBUSxLQUFLQSxNQUFBO1VBQ2JDLFVBQUEsRUFBWSxLQUFLQSxVQUFBO1VBQ2pCQyxLQUFBLEVBQU8sS0FBS0E7UUFITSxHQUluQm5CLEtBQUEsR0FBUUEsS0FBQSxHQUFRLEVBSlg7UUFNUixNQUFNRCxNQUFBLEdBQWdDLEtBQUtrQixNQUFBLENBQVFsQixNQUFBO1FBQ25ELE1BQU1xQixPQUFBLEdBQVUsQ0FBQyxDQUFDckIsTUFBQSxDQUFPc0IsUUFBQSxDQUFTOUIsTUFBQTtRQUVsQyxJQUFJO1VBQ0EsTUFBTU8sT0FBQSxHQUFVLEtBQUssQ0FBQUEsT0FBQSxHQUFXLElBQUlXLFFBQUEsQ0FBQWEsT0FBQSxDQUFRLElBQVo7VUFDaEMsTUFBTUMsQ0FBQSxHQUFJO1lBQUN6QixPQUFBO1lBQVNFLEtBQUE7WUFBT1AsTUFBQSxFQUFRLEtBQUtBLE1BQUE7WUFBUU0sTUFBQSxFQUFjLEtBQUtrQixNQUFBLENBQVFsQjtVQUFqRTtVQUNWLE1BQU1PLE1BQUEsR0FBU0UsUUFBQSxDQUFRLGlCQUFELEVBQW9CZ0IsT0FBQTtVQUMxQyxJQUFJbEIsTUFBQSxDQUFPO1lBQUNwQixNQUFBLEVBQVFhLE1BQUE7WUFBUXFCLE9BQUE7WUFBU3BCLEtBQUEsRUFBT3VCO1VBQWpDLENBQVg7UUFDSCxTQUFRRSxHQUFBLEVBQVA7VUFDRUMsT0FBQSxDQUFRQyxHQUFBLENBQUksMkJBQTJCLEtBQUtWLE1BQUEsQ0FBT1csU0FBQSxJQUFuRDtVQUNBRixPQUFBLENBQVFDLEdBQUEsQ0FBSUYsR0FBQSxDQUFJSSxLQUFoQjtRQUNIO01BQ0o7TUFFREMsUUFBQSxFQUFPLENBQ047TUFFREMsUUFBQSxFQUFPO1FBQ0gsS0FBSyxDQUFBakMsT0FBQSxDQUFTa0MsT0FBQSxFQUFkO01BQ0g7SUFqQytEOzs7Ozs7Ozs7Ozs7O0lDSjlELE1BQU9WLE9BQUEsQ0FBTztNQUNoQixDQUFBaEIsTUFBQTtNQUNVLElBQU5BLE9BQUEsRUFBTTtRQUNOLE9BQU8sS0FBSyxDQUFBQSxNQUFBLENBQVFBLE1BQUE7TUFDdkI7TUFHRDBCLE9BQUEsR0FBVUEsQ0FBQSxLQUFZO01BRXRCQyxZQUFZM0IsTUFBQSxFQUE4QjtRQUN0QyxLQUFLLENBQUFBLE1BQUEsR0FBVUEsTUFBQTtNQUNsQjtJQVhlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==