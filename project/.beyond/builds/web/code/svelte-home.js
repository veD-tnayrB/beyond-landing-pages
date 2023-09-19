System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "svelte@3.57.0/internal", "@beyond-js/svelte-widgets@0.1.1/page", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_svelte3570Internal) {
      dependency_2 = _svelte3570Internal;
    }, function (_beyondJsSvelteWidgets011Page) {
      dependency_3 = _beyondJsSvelteWidgets011Page;
    }, function (_beyondJsKernel019Styles) {
      dependency_4 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/svelte-widgets", "0.1.1"], ["@beyond-js/vue-widgets", "0.1.1"], ["socket.io-client", "4.6.1"], ["@types/react", "18.0.28"], ["@types/react-dom", "18.0.11"], ["netlify-cli", "16.4.0"], ["@beyond-js/landing-pages", "0.0.1"], ["@beyond-js/landing-pages", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/landing-pages@0.0.1/svelte-home"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['svelte/internal', dependency_2], ['@beyond-js/svelte-widgets/page', dependency_3], ['@beyond-js/kernel/styles', dependency_4]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "svelte-home-page",
        "vspecifier": "@beyond-js/landing-pages@0.0.1/svelte-home",
        "is": "page",
        "route": "/svelte"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond-js/landing-pages@0.0.1/svelte-home');
      ims = new Map();
      /*************************************
      INTERNAL MODULE: ./icons/beyond.svelte
      *************************************/
      ims.set('./icons/beyond.svelte', {
        hash: 2927574398,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _internal = require("svelte/internal");
          /* generated by Svelte v3.59.2 */

          function create_fragment(ctx) {
            let svg;
            let g1;
            let g0;
            let path0;
            let path1;
            return {
              c() {
                svg = (0, _internal.svg_element)("svg");
                g1 = (0, _internal.svg_element)("g");
                g0 = (0, _internal.svg_element)("g");
                path0 = (0, _internal.svg_element)("path");
                path1 = (0, _internal.svg_element)("path");
                (0, _internal.attr)(path0, "id", "path6930-4-7");
                (0, _internal.attr)(path0, "d", "M159.844,86.353c-20.1,76.2-30.3,148.327-26.88,190.112,3.506,42.568,20.642,47.168,44.952,12.066,17.762-25.709,37.659-70.193,55.444-123.958A352.417,352.417,0,0,1,159.844,86.353ZM599.252,204.182a352,352,0,0,1-102.768,30.913c-11.473,55.468-16.475,103.956-13.938,135.105,3.512,42.539,20.648,47.124,44.952,12.028C551.34,347.792,578.562,280.243,599.252,204.182Zm-285.332,6.933c-28.148,110.174-46.143,210.669-48.206,269.214-2.25,64.053,14.886,68.638,44.952,12.029,27.474-51.781,62.1-147.807,92.775-257.264a351.427,351.427,0,0,1-45.641-8.656A350.926,350.926,0,0,1,313.919,211.115Z");
                (0, _internal.attr)(path0, "transform", "translate(-132.313 -86.353)");
                (0, _internal.attr)(path0, "fill", "#99a3b1");
                (0, _internal.attr)(g0, "id", "g6928-9-9");
                (0, _internal.attr)(g0, "transform", "translate(0 711.381)");
                (0, _internal.attr)(path1, "id", "path900");
                (0, _internal.attr)(path1, "d", "M422.6,272.07q-11.293-.386-22.475.076C270.8,277.409,153.915,365.753,118.715,497.18,75.393,658.936,171.838,826.092,333.522,869.434S662.293,816.251,705.615,654.5s-53.16-328.875-214.844-372.216a303.323,303.323,0,0,0-68.175-10.21Zm-2.513,67.116a239.3,239.3,0,0,1,53.28,8.07,235.9,235.9,0,1,1-70.8-8.033c5.819-.227,11.648-.252,17.522-.038ZM535.842,64.162c-20.111,0-40.325,7-57.625,14.748-23.07,10.333-44.1,26.543-65.208,48.036-27.335,27.837-53.8,63.84-78.838,106.07a348.4,348.4,0,0,1,98.787-8.427c13.777-19.948,27.508-37.7,40.893-51.331,44.7-45.021,81.207-48.74,99.744,26.738,5.065,19.6,8.252,43.247,10.146,69.181a349.484,349.484,0,0,1,80.944,62.554c.022-53.094-4.855-101.089-15.278-141.426-7.541-29.173-17.692-53.711-32.507-74.2S582.1,73.73,555.829,66.69a76.116,76.116,0,0,0-19.987-2.528ZM422.811,265.844q-11.524-.392-22.936.08C267.9,271.3,148.624,361.45,112.7,495.571,68.493,660.641,166.915,831.224,331.912,875.453S667.42,821.181,711.63,656.112,657.381,320.5,492.383,276.267a309.524,309.524,0,0,0-69.572-10.419Zm-2.565,68.491a244.168,244.168,0,0,1,54.371,8.236,240.729,240.729,0,1,1-72.253-8.2c5.938-.227,11.886-.257,17.881-.039Z");
                (0, _internal.attr)(path1, "transform", "translate(-95.607 -64.162)");
                (0, _internal.attr)(path1, "fill", "#fff");
                (0, _internal.attr)(g1, "id", "Grupo_7716");
                (0, _internal.attr)(g1, "data-name", "Grupo 7716");
                (0, _internal.attr)(svg, "class", "beyondjs-logo svelte-1br31uo");
                (0, _internal.attr)(svg, "xmlns", "http://www.w3.org/2000/svg");
                (0, _internal.attr)(svg, "width", "626.601");
                (0, _internal.attr)(svg, "height", "1156.834");
                (0, _internal.attr)(svg, "viewBox", "0 0 626.601 1156.834");
              },
              m(target, anchor) {
                (0, _internal.insert)(target, svg, anchor);
                (0, _internal.append)(svg, g1);
                (0, _internal.append)(g1, g0);
                (0, _internal.append)(g0, path0);
                (0, _internal.append)(g1, path1);
              },
              p: _internal.noop,
              i: _internal.noop,
              o: _internal.noop,
              d(detaching) {
                if (detaching) (0, _internal.detach)(svg);
              }
            };
          }
          class Component extends _internal.SvelteComponent {
            constructor(options) {
              super();
              (0, _internal.init)(this, options, null, create_fragment, _internal.safe_not_equal, {});
            }
          }
          var _default = Component;
          exports.default = _default;
        }
      });

      /*************************************
      INTERNAL MODULE: ./icons/svelte.svelte
      *************************************/

      ims.set('./icons/svelte.svelte', {
        hash: 3371108010,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _internal = require("svelte/internal");
          /* generated by Svelte v3.59.2 */

          function create_fragment(ctx) {
            let svg;
            let g;
            let path0;
            let path1;
            return {
              c() {
                svg = (0, _internal.svg_element)("svg");
                g = (0, _internal.svg_element)("g");
                path0 = (0, _internal.svg_element)("path");
                path1 = (0, _internal.svg_element)("path");
                (0, _internal.attr)(path0, "fill", "#FF3E00");
                (0, _internal.attr)(path0, "d", "M91.8,15.6C80.9-0.1,59.2-4.7,43.6,5.2L16.1,22.8C8.6,27.5,3.4,35.2,1.9,43.9c-1.3,7.3-0.2,14.8,3.3,21.3\r\n\tc-2.4,3.6-4,7.6-4.7,11.8c-1.6,8.9,0.5,18.1,5.7,25.4c11,15.7,32.6,20.3,48.2,10.4l27.5-17.5c7.5-4.7,12.7-12.4,14.2-21.1\r\n\tc1.3-7.3,0.2-14.8-3.3-21.3c2.4-3.6,4-7.6,4.7-11.8C99.2,32.1,97.1,22.9,91.8,15.6");
                (0, _internal.attr)(path1, "fill", "#FFFFFF");
                (0, _internal.attr)(path1, "d", "M40.9,103.9c-8.9,2.3-18.2-1.2-23.4-8.7c-3.2-4.4-4.4-9.9-3.5-15.3c0.2-0.9,0.4-1.7,0.6-2.6l0.5-1.6l1.4,1\r\n\tc3.3,2.4,6.9,4.2,10.8,5.4l1,0.3l-0.1,1c-0.1,1.4,0.3,2.9,1.1,4.1c1.6,2.3,4.4,3.4,7.1,2.7c0.6-0.2,1.2-0.4,1.7-0.7L65.5,72\r\n\tc1.4-0.9,2.3-2.2,2.6-3.8c0.3-1.6-0.1-3.3-1-4.6c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7l-10.5,6.7\r\n\tc-1.7,1.1-3.6,1.9-5.6,2.4c-8.9,2.3-18.2-1.2-23.4-8.7c-3.1-4.4-4.4-9.9-3.4-15.3c0.9-5.2,4.1-9.9,8.6-12.7l27.5-17.5\r\n\tc1.7-1.1,3.6-1.9,5.6-2.5c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.2,0.9-0.4,1.7-0.7,2.6l-0.5,1.6l-1.4-1\r\n\tc-3.3-2.4-6.9-4.2-10.8-5.4l-1-0.3l0.1-1c0.1-1.4-0.3-2.9-1.1-4.1c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7L32.4,46.1\r\n\tc-1.4,0.9-2.3,2.2-2.6,3.8s0.1,3.3,1,4.6c1.6,2.3,4.4,3.3,7.1,2.6c0.6-0.2,1.2-0.4,1.7-0.7l10.5-6.7c1.7-1.1,3.6-1.9,5.6-2.5\r\n\tc8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.9,5.2-4.1,9.9-8.6,12.7l-27.5,17.5C44.8,102.5,42.9,103.3,40.9,103.9");
                (0, _internal.attr)(svg, "title", "svelte");
                (0, _internal.attr)(svg, "viewBox", "0 0 98.1 118");
                (0, _internal.attr)(svg, "class", "beyond-icon svelte-78rfoc");
                (0, _internal.attr)(svg, "data-tippy-content", "svelte");
              },
              m(target, anchor) {
                (0, _internal.insert)(target, svg, anchor);
                (0, _internal.append)(svg, g);
                (0, _internal.append)(g, path0);
                (0, _internal.append)(g, path1);
              },
              p: _internal.noop,
              i: _internal.noop,
              o: _internal.noop,
              d(detaching) {
                if (detaching) (0, _internal.detach)(svg);
              }
            };
          }
          class Component extends _internal.SvelteComponent {
            constructor(options) {
              super();
              (0, _internal.init)(this, options, null, create_fragment, _internal.safe_not_equal, {});
            }
          }
          var _default = Component;
          exports.default = _default;
        }
      });

      /***********************************
      INTERNAL MODULE: ./promotions.svelte
      ***********************************/

      ims.set('./promotions.svelte', {
        hash: 3755761237,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _internal = require("svelte/internal");
          var _beyond = require("./icons/beyond.svelte");
          var _svelte = require("./icons/svelte.svelte");
          /* generated by Svelte v3.59.2 */

          function create_fragment(ctx) {
            let div1;
            let div0;
            let beyondsvg;
            let t0;
            let sveltesvg;
            let t1;
            let h2;
            let current;
            beyondsvg = new _beyond.default({});
            sveltesvg = new _svelte.default({});
            return {
              c() {
                div1 = (0, _internal.element)("div");
                div0 = (0, _internal.element)("div");
                (0, _internal.create_component)(beyondsvg.$$.fragment);
                t0 = (0, _internal.space)();
                (0, _internal.create_component)(sveltesvg.$$.fragment);
                t1 = (0, _internal.space)();
                h2 = (0, _internal.element)("h2");
                h2.textContent = "BeyondJS + Svelte";
                (0, _internal.attr)(div0, "class", "logos svelte-150xjav");
                (0, _internal.attr)(h2, "class", "svelte-150xjav");
                (0, _internal.attr)(div1, "class", "promotion svelte-150xjav");
              },
              m(target, anchor) {
                (0, _internal.insert)(target, div1, anchor);
                (0, _internal.append)(div1, div0);
                (0, _internal.mount_component)(beyondsvg, div0, null);
                (0, _internal.append)(div0, t0);
                (0, _internal.mount_component)(sveltesvg, div0, null);
                (0, _internal.append)(div1, t1);
                (0, _internal.append)(div1, h2);
                current = true;
              },
              p: _internal.noop,
              i(local) {
                if (current) return;
                (0, _internal.transition_in)(beyondsvg.$$.fragment, local);
                (0, _internal.transition_in)(sveltesvg.$$.fragment, local);
                current = true;
              },
              o(local) {
                (0, _internal.transition_out)(beyondsvg.$$.fragment, local);
                (0, _internal.transition_out)(sveltesvg.$$.fragment, local);
                current = false;
              },
              d(detaching) {
                if (detaching) (0, _internal.detach)(div1);
                (0, _internal.destroy_component)(beyondsvg);
                (0, _internal.destroy_component)(sveltesvg);
              }
            };
          }
          class Component extends _internal.SvelteComponent {
            constructor(options) {
              super();
              (0, _internal.init)(this, options, null, create_fragment, _internal.safe_not_equal, {});
            }
          }
          var _default = Component;
          exports.default = _default;
        }
      });

      /*******************************
      INTERNAL MODULE: ./widget.svelte
      *******************************/

      ims.set('./widget.svelte', {
        hash: 370177729,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _internal = require("svelte/internal");
          var _promotions = require("./promotions.svelte");
          /* generated by Svelte v3.59.2 */

          function create_fragment(ctx) {
            let div1;
            let div0;
            let h1;
            let t1;
            let promotions;
            let t2;
            let p0;
            let t3;
            let t4_value = ' ' + "";
            let t4;
            let t5;
            let a0;
            let t7;
            let p1;
            let t8;
            let t9_value = ' ' + "";
            let t9;
            let t10;
            let a1;
            let current;
            promotions = new _promotions.default({});
            return {
              c() {
                div1 = (0, _internal.element)("div");
                div0 = (0, _internal.element)("div");
                h1 = (0, _internal.element)("h1");
                h1.textContent = "Let's get started using BeyondJS with Svelte";
                t1 = (0, _internal.space)();
                (0, _internal.create_component)(promotions.$$.fragment);
                t2 = (0, _internal.space)();
                p0 = (0, _internal.element)("p");
                t3 = (0, _internal.text)("Let's start managing our project from the");
                t4 = (0, _internal.text)(t4_value);
                t5 = (0, _internal.space)();
                a0 = (0, _internal.element)("a");
                a0.textContent = "workspace";
                t7 = (0, _internal.space)();
                p1 = (0, _internal.element)("p");
                t8 = (0, _internal.text)("Need help getting started? Let's review with the official");
                t9 = (0, _internal.text)(t9_value);
                t10 = (0, _internal.space)();
                a1 = (0, _internal.element)("a");
                a1.textContent = "BeyondJS documentation";
                (0, _internal.attr)(a0, "href", "https://workspace.beyondjs.com/");
                (0, _internal.attr)(a0, "target", "_blank");
                (0, _internal.attr)(a0, "rel", "noopener");
                (0, _internal.attr)(a1, "href", "https://beyondjs.com/");
                (0, _internal.attr)(a1, "target", "_blank");
                (0, _internal.attr)(a1, "rel", "noopener");
                (0, _internal.attr)(p1, "class", "secondary need-help svelte-3ntkva");
                (0, _internal.attr)(div0, "class", "content svelte-3ntkva");
                (0, _internal.attr)(div1, "class", "page__container svelte-3ntkva");
              },
              m(target, anchor) {
                (0, _internal.insert)(target, div1, anchor);
                (0, _internal.append)(div1, div0);
                (0, _internal.append)(div0, h1);
                (0, _internal.append)(div0, t1);
                (0, _internal.mount_component)(promotions, div0, null);
                (0, _internal.append)(div0, t2);
                (0, _internal.append)(div0, p0);
                (0, _internal.append)(p0, t3);
                (0, _internal.append)(p0, t4);
                (0, _internal.append)(p0, t5);
                (0, _internal.append)(p0, a0);
                (0, _internal.append)(div0, t7);
                (0, _internal.append)(div0, p1);
                (0, _internal.append)(p1, t8);
                (0, _internal.append)(p1, t9);
                (0, _internal.append)(p1, t10);
                (0, _internal.append)(p1, a1);
                current = true;
              },
              p: _internal.noop,
              i(local) {
                if (current) return;
                (0, _internal.transition_in)(promotions.$$.fragment, local);
                current = true;
              },
              o(local) {
                (0, _internal.transition_out)(promotions.$$.fragment, local);
                current = false;
              },
              d(detaching) {
                if (detaching) (0, _internal.detach)(div1);
                (0, _internal.destroy_component)(promotions);
              }
            };
          }
          class Component extends _internal.SvelteComponent {
            constructor(options) {
              super();
              (0, _internal.init)(this, options, null, create_fragment, _internal.safe_not_equal, {});
            }
          }
          var _default = Component;
          exports.default = _default;
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 3700548431,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/svelte-widgets/page");
          var _widget = require("./widget.svelte");
          /*bundle*/
          class Controller extends _page.PageSvelteWidgetController {
            get Widget() {
              return _widget.default;
            }
          }
          exports.Controller = Controller;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfd2lkZ2V0IiwiQ29udHJvbGxlciIsIlBhZ2VTdmVsdGVXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiZGVmYXVsdCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvdmlldy9jb250cm9sbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsT0FBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUNYRSxVQUFXLFNBQVFILEtBQUEsQ0FBQUksMEJBQTBCO1lBQ2xELElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPSCxPQUFBLENBQUFJLE9BQU07WUFDZDs7VUFDQUMsT0FBQSxDQUFBSixVQUFBLEdBQUFBLFVBQUEifQ==