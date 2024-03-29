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

// .beyond/uimport/temp/@beyond-js/svelte-widgets/base.0.1.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvc3ZlbHRlLXdpZGdldHMvYmFzZS4wLjEuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3N2ZWx0ZS13aWRnZXRzL2Jhc2UvQGJleW9uZC1qcy9zdmVsdGUtd2lkZ2V0cy9jbGllbnQvYmFzZSIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3N2ZWx0ZS13aWRnZXRzL2Jhc2UvQGJleW9uZC1qcy9zdmVsdGUtd2lkZ2V0cy9jbGllbnQvYmFzZS9jb250cm9sbGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvc3ZlbHRlLXdpZGdldHMvYmFzZS9AYmV5b25kLWpzL3N2ZWx0ZS13aWRnZXRzL2NsaWVudC9iYXNlL3dyYXBwZXIudHMiXSwibmFtZXMiOlsiYmFzZV8wXzFfMV9leHBvcnRzIiwiX19leHBvcnQiLCJTdmVsdGVXaWRnZXRDb250cm9sbGVyIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImN0eCIsIl9pbnRlcm5hbCIsImluc2VydCIsInRhcmdldCIsImxpbmsiLCJhbmNob3IiLCJjdHgyIiwicmVzb3VyY2VzIiwibGVuZ3RoIiwiaSIsInN0eWxlcyIsIiQkcHJvcHMiLCJ1cmwiLCJvbmxvYWRlZCIsImNyZWF0ZV9pZl9ibG9jayIsIndyYXBwZXIiLCJob2xkZXIiLCJwcm9wcyIsImxvYWRlZCIsInJlYWR5IiwidGhlbiIsInN0eWxlIiwiZGlzcGxheSIsIldpZGdldCIsIl9jb250cm9sbGVyIiwicmVxdWlyZTIiLCJfd3JhcHBlciIsIlN2ZWx0ZVdpZGdldENvbnRyb2xsZXIyIiwiV2lkZ2V0Q2xpZW50Q29udHJvbGxlciIsIm1vdW50IiwiZXJyb3JzIiwiZWxlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsIndpZGdldCIsImF0dHJpYnV0ZXMiLCJzdG9yZSIsImh5ZHJhdGUiLCJjaGlsZHJlbiIsIldyYXBwZXIiLCJwIiwiZGVmYXVsdCIsImV4YyIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbE5hbWUiLCJzdGFjayIsInVubW91bnQiLCJyZWZyZXNoIiwiY2hhbmdlZCIsImNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQTtBQUFBQyxRQUFBLENBQUFELGtCQUFBO0VBQUFFLHNCQUFBLEVBQUFBLENBQUEsS0FBQUEsc0JBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVAsa0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4RENLaUJRLEdBQUEsQ0FBRzs7OztVQUFoQixJQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBNkVDLE1BQUEsRUFBQUMsSUFBQSxFQUFBQyxNQUE3RTs7Ozs7OztrRUFBYUMsSUFBQSxDQUFHOzs7Ozs7Ozs7Ozs7OzJCQURUTixHQUFBLENBQU0sR0FBQ08sU0FBQTs7cUNBQWhCQyxNQUFBLEVBQUlDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFBS0gsSUFBQSxDQUFNLEdBQUNDLFNBQUE7O3VDQUFoQkMsTUFBQSxFQUFJQyxDQUFBOzs7Ozs7Ozs7Ozs7OzRDQUFKRCxNQUFBOzs7Ozs7Ozs7Ozs7O1FBSjJCRTtVQUFNQyxPQUFBOzJCQUtjQyxHQUFBLElBQUc7UUFBS0YsTUFBQSxDQUFPRyxRQUFBLENBQVNELEdBQWhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZDQWFqQlosR0FBQSxDQUFLO3lCQUFqQkEsR0FBQSxDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3SkFBTU0sSUFBQSxDQUFLOytDQUFqQkEsSUFBQSxDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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