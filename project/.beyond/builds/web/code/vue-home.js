System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "vue@3.2.47", "@beyond-js/vue-widgets@0.1.1/page", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_vue2) {
      dependency_2 = _vue2;
    }, function (_beyondJsVueWidgets011Page) {
      dependency_3 = _beyondJsVueWidgets011Page;
    }, function (_beyondJsKernel019Styles) {
      dependency_4 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/svelte-widgets", "0.1.1"], ["@beyond-js/vue-widgets", "0.1.1"], ["socket.io-client", "4.6.1"], ["@types/react", "18.0.28"], ["@types/react-dom", "18.0.11"], ["@beyond-js/landing-pages", "0.0.1"], ["@beyond-js/landing-pages", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/landing-pages@0.0.1/vue-home"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['vue', dependency_2], ['@beyond-js/vue-widgets/page', dependency_3], ['@beyond-js/kernel/styles', dependency_4]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "vue-home-page",
        "vspecifier": "@beyond-js/landing-pages@0.0.1/vue-home",
        "is": "page",
        "route": "/vue"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond-js/landing-pages@0.0.1/vue-home');
      ims = new Map();
      /*******************************
      INTERNAL MODULE: ./beyond.render
      *******************************/
      ims.set('./beyond.render', {
        hash: 1660135312,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.render = render;
          var _vue = require("vue");
          const _hoisted_1 = {
            class: "beyondjs-logo",
            xmlns: "http://www.w3.org/2000/svg",
            width: "626.601",
            height: "1156.834",
            viewBox: "0 0 626.601 1156.834"
          };
          const _hoisted_2 = /*#__PURE__*/(0, _vue.createElementVNode)("g", {
            id: "Grupo_7716",
            "data-name": "Grupo 7716"
          }, [/*#__PURE__*/(0, _vue.createElementVNode)("g", {
            id: "g6928-9-9",
            transform: "translate(0 711.381)"
          }, [/*#__PURE__*/(0, _vue.createElementVNode)("path", {
            id: "path6930-4-7",
            d: "M159.844,86.353c-20.1,76.2-30.3,148.327-26.88,190.112,3.506,42.568,20.642,47.168,44.952,12.066,17.762-25.709,37.659-70.193,55.444-123.958A352.417,352.417,0,0,1,159.844,86.353ZM599.252,204.182a352,352,0,0,1-102.768,30.913c-11.473,55.468-16.475,103.956-13.938,135.105,3.512,42.539,20.648,47.124,44.952,12.028C551.34,347.792,578.562,280.243,599.252,204.182Zm-285.332,6.933c-28.148,110.174-46.143,210.669-48.206,269.214-2.25,64.053,14.886,68.638,44.952,12.029,27.474-51.781,62.1-147.807,92.775-257.264a351.427,351.427,0,0,1-45.641-8.656A350.926,350.926,0,0,1,313.919,211.115Z",
            transform: "translate(-132.313 -86.353)",
            fill: "#99a3b1"
          })]), /*#__PURE__*/(0, _vue.createElementVNode)("path", {
            id: "path900",
            d: "M422.6,272.07q-11.293-.386-22.475.076C270.8,277.409,153.915,365.753,118.715,497.18,75.393,658.936,171.838,826.092,333.522,869.434S662.293,816.251,705.615,654.5s-53.16-328.875-214.844-372.216a303.323,303.323,0,0,0-68.175-10.21Zm-2.513,67.116a239.3,239.3,0,0,1,53.28,8.07,235.9,235.9,0,1,1-70.8-8.033c5.819-.227,11.648-.252,17.522-.038ZM535.842,64.162c-20.111,0-40.325,7-57.625,14.748-23.07,10.333-44.1,26.543-65.208,48.036-27.335,27.837-53.8,63.84-78.838,106.07a348.4,348.4,0,0,1,98.787-8.427c13.777-19.948,27.508-37.7,40.893-51.331,44.7-45.021,81.207-48.74,99.744,26.738,5.065,19.6,8.252,43.247,10.146,69.181a349.484,349.484,0,0,1,80.944,62.554c.022-53.094-4.855-101.089-15.278-141.426-7.541-29.173-17.692-53.711-32.507-74.2S582.1,73.73,555.829,66.69a76.116,76.116,0,0,0-19.987-2.528ZM422.811,265.844q-11.524-.392-22.936.08C267.9,271.3,148.624,361.45,112.7,495.571,68.493,660.641,166.915,831.224,331.912,875.453S667.42,821.181,711.63,656.112,657.381,320.5,492.383,276.267a309.524,309.524,0,0,0-69.572-10.419Zm-2.565,68.491a244.168,244.168,0,0,1,54.371,8.236,240.729,240.729,0,1,1-72.253-8.2c5.938-.227,11.886-.257,17.881-.039Z",
            transform: "translate(-95.607 -64.162)",
            fill: "#fff"
          })], -1 /* HOISTED */);
          const _hoisted_3 = [_hoisted_2];
          function render(_ctx, _cache) {
            return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("svg", _hoisted_1, _hoisted_3);
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./beyond.script
      *******************************/

      ims.set('./beyond.script', {
        hash: 1660135312,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _default = {
            name: 'beyondsvg'
          }; //# sourceMappingURL=beyond.vue.js.map
          exports.default = _default;
        }
      });

      /****************************
      INTERNAL MODULE: ./beyond.vue
      ****************************/

      ims.set('./beyond.vue', {
        hash: 1660135312,
        creator: function (require, exports) {
          const script = require('./beyond.script').default;
          const {
            render
          } = require('./beyond.render');
          script.render = render;
          script.__file = 'beyond.vue';
          script.__scopeId = 'beyond';
          exports.default = script;
        }
      });

      /*****************************
      INTERNAL MODULE: ./page.render
      *****************************/

      ims.set('./page.render', {
        hash: 2237029730,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.render = render;
          var _vue = require("vue");
          const _hoisted_1 = {
            class: "page__container"
          };
          const _hoisted_2 = {
            class: "content"
          };
          const _hoisted_3 = /*#__PURE__*/(0, _vue.createElementVNode)("h1", null, "Let's get started using BeyondJS with Vue", -1 /* HOISTED */);
          const _hoisted_4 = /*#__PURE__*/(0, _vue.createElementVNode)("p", null, [/*#__PURE__*/(0, _vue.createTextVNode)(" Let's start managing our project from the "), /*#__PURE__*/(0, _vue.createElementVNode)("a", {
            href: "https://workspace.beyondjs.com/",
            target: "_blank",
            rel: "noopener"
          }, " workspace ")], -1 /* HOISTED */);
          const _hoisted_5 = /*#__PURE__*/(0, _vue.createElementVNode)("p", {
            class: "secondary need-help"
          }, [/*#__PURE__*/(0, _vue.createTextVNode)(" Need help getting started? Let's review with the official "), /*#__PURE__*/(0, _vue.createElementVNode)("a", {
            href: "https://beyondjs.com/",
            target: "_blank",
            rel: "noopener"
          }, " BeyondJS documentation ")], -1 /* HOISTED */);

          function render(_ctx, _cache) {
            const _component_Promotions = (0, _vue.resolveComponent)("Promotions");
            return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_1, [(0, _vue.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0, _vue.createVNode)(_component_Promotions), _hoisted_4, _hoisted_5])]);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./page.script
      *****************************/

      ims.set('./page.script', {
        hash: 2237029730,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _promotions = require("./promotions.vue");
          var _default = {
            components: {
              Promotions: _promotions.default
            }
          }; //# sourceMappingURL=page.vue.js.map
          exports.default = _default;
        }
      });

      /**************************
      INTERNAL MODULE: ./page.vue
      **************************/

      ims.set('./page.vue', {
        hash: 2237029730,
        creator: function (require, exports) {
          const script = require('./page.script').default;
          const {
            render
          } = require('./page.render');
          script.render = render;
          script.__file = 'page.vue';
          script.__scopeId = 'page';
          exports.default = script;
        }
      });

      /***********************************
      INTERNAL MODULE: ./promotions.render
      ***********************************/

      ims.set('./promotions.render', {
        hash: 2460806022,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.render = render;
          var _vue = require("vue");
          const _hoisted_1 = {
            className: "promotion"
          };
          const _hoisted_2 = {
            className: "logos"
          };
          const _hoisted_3 = /*#__PURE__*/(0, _vue.createElementVNode)("h2", null, "BeyondJS + Vue", -1 /* HOISTED */);

          function render(_ctx, _cache) {
            const _component_BeyondSVG = (0, _vue.resolveComponent)("BeyondSVG");
            const _component_SvelteSVG = (0, _vue.resolveComponent)("SvelteSVG");
            return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_1, [(0, _vue.createElementVNode)("div", _hoisted_2, [(0, _vue.createVNode)(_component_BeyondSVG), (0, _vue.createVNode)(_component_SvelteSVG)]), _hoisted_3]);
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./promotions.script
      ***********************************/

      ims.set('./promotions.script', {
        hash: 2460806022,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _beyond = require("./beyond.vue");
          var _vue = require("./vue.vue");
          var _default = {
            components: {
              BeyondSVG: _beyond.default,
              SvelteSVG: _vue.default
            }
          }; //# sourceMappingURL=promotions.vue.js.map
          exports.default = _default;
        }
      });

      /********************************
      INTERNAL MODULE: ./promotions.vue
      ********************************/

      ims.set('./promotions.vue', {
        hash: 2460806022,
        creator: function (require, exports) {
          const script = require('./promotions.script').default;
          const {
            render
          } = require('./promotions.render');
          script.render = render;
          script.__file = 'promotions.vue';
          script.__scopeId = 'promotions';
          exports.default = script;
        }
      });

      /****************************
      INTERNAL MODULE: ./vue.render
      ****************************/

      ims.set('./vue.render', {
        hash: 2743950814,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.render = render;
          var _vue = require("vue");
          const _hoisted_1 = {
            title: "vue",
            viewBox: "0 0 128 128",
            class: "beyond-icon vue",
            "data-tippy-content": "vue"
          };
          const _hoisted_2 = /*#__PURE__*/(0, _vue.createElementVNode)("g", null, [/*#__PURE__*/(0, _vue.createElementVNode)("path", {
            d: "M0 8.934l49.854.158 14.167 24.47 14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02-38.476 66.053L25.691 9.592.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168-15.053 24.647L49.216 9.73l-22.794-.168 37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01"
          }), /*#__PURE__*/(0, _vue.createElementVNode)("path", {
            d: "M25.997 9.393l23.002.009L64.035 34.36 79.018 9.404 102 9.398 64.15 75.053z",
            fill: "#35495e"
          }), /*#__PURE__*/(0, _vue.createElementVNode)("path", {
            d: "M.91 9.569l25.067-.172 38.15 65.659L101.98 9.401l25.11.026-62.966 108.06z",
            fill: "#41b883"
          })], -1 /* HOISTED */);
          const _hoisted_3 = [_hoisted_2];
          function render(_ctx, _cache) {
            return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("svg", _hoisted_1, _hoisted_3);
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./vue.script
      ****************************/

      ims.set('./vue.script', {
        hash: 2743950814,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _default = {
            name: 'vuesvg'
          }; //# sourceMappingURL=vue.vue.js.map
          exports.default = _default;
        }
      });

      /*************************
      INTERNAL MODULE: ./vue.vue
      *************************/

      ims.set('./vue.vue', {
        hash: 2743950814,
        creator: function (require, exports) {
          const script = require('./vue.script').default;
          const {
            render
          } = require('./vue.render');
          script.render = render;
          script.__file = 'vue.vue';
          script.__scopeId = 'vue';
          exports.default = script;
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 1669034874,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/vue-widgets/page");
          var _page2 = require("./page.vue");
          /*bundle*/
          class Controller extends _page.PageVueWidgetController {
            get Widget() {
              return _page2.default;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjbGFzcyIsInhtbG5zIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiX3Z1ZSIsImNyZWF0ZUVsZW1lbnRWTm9kZSIsImlkIiwidHJhbnNmb3JtIiwiZCIsImZpbGwiLCJfaG9pc3RlZF8yIiwiY3JlYXRlRWxlbWVudEJsb2NrIiwiX2hvaXN0ZWRfMSIsIl9ob2lzdGVkXzMiLCJuYW1lIiwic2NyaXB0IiwicmVxdWlyZSIsImRlZmF1bHQiLCJyZW5kZXIiLCJfX2ZpbGUiLCJfX3Njb3BlSWQiLCJleHBvcnRzIiwiY3JlYXRlVGV4dFZOb2RlIiwiaHJlZiIsInRhcmdldCIsInJlbCIsImNyZWF0ZVZOb2RlIiwiX2NvbXBvbmVudF9Qcm9tb3Rpb25zIiwiX2hvaXN0ZWRfNCIsIl9ob2lzdGVkXzUiLCJfcHJvbW90aW9ucyIsIl9kZWZhdWx0IiwiY29tcG9uZW50cyIsIlByb21vdGlvbnMiLCJjbGFzc05hbWUiLCJfY29tcG9uZW50X0JleW9uZFNWRyIsIl9jb21wb25lbnRfU3ZlbHRlU1ZHIiwiX2JleW9uZCIsIkJleW9uZFNWRyIsIlN2ZWx0ZVNWRyIsInRpdGxlIiwiX3BhZ2UiLCJfcGFnZTIiLCJDb250cm9sbGVyIiwiUGFnZVZ1ZVdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiXSwic291cmNlcyI6WyIvdmlldy90ZW1wbGF0ZS52dWUuaHRtbCIsIi92aWV3L2JleW9uZC52dWUiLCIvdmlldy9wYWdlLnZ1ZSIsIi92aWV3L3Byb21vdGlvbnMudnVlIiwiL3ZpZXcvdnVlLnZ1ZSIsIi92aWV3L2NvbnRyb2xsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblx0PHN2ZyB0aXRsZT1cInZ1ZVwiIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiIGNsYXNzPVwiYmV5b25kLWljb24gdnVlXCIgZGF0YS10aXBweS1jb250ZW50PVwidnVlXCI+XHJcblx0XHQ8Zz5cclxuXHRcdFx0PHBhdGhcclxuXHRcdFx0XHRkPVwiTTAgOC45MzRsNDkuODU0LjE1OCAxNC4xNjcgMjQuNDcgMTQuNDMyLTI0LjQ3TDEyOCA4LjkzNWwtNjMuODM0IDExMC4xNHptMTI2Ljk4LjYzN2wtMjQuMzYuMDItMzguNDc2IDY2LjA1M0wyNS42OTEgOS41OTIuOTQyIDkuNTcybDYzLjIxMSAxMDcuODl6bS0yNS4xNDktLjAwOGwtMjIuNzQ1LjE2OC0xNS4wNTMgMjQuNjQ3TDQ5LjIxNiA5LjczbC0yMi43OTQtLjE2OCAzNy43MzEgNjQuNDc2em0tNzUuODM0LS4xN2wyMy4wMDIuMDA5bS0yMy4wMDItLjAxbDIzLjAwMi4wMVwiPjwvcGF0aD5cclxuXHRcdFx0PHBhdGggZD1cIk0yNS45OTcgOS4zOTNsMjMuMDAyLjAwOUw2NC4wMzUgMzQuMzYgNzkuMDE4IDkuNDA0IDEwMiA5LjM5OCA2NC4xNSA3NS4wNTN6XCIgZmlsbD1cIiMzNTQ5NWVcIj48L3BhdGg+XHJcblx0XHRcdDxwYXRoIGQ9XCJNLjkxIDkuNTY5bDI1LjA2Ny0uMTcyIDM4LjE1IDY1LjY1OUwxMDEuOTggOS40MDFsMjUuMTEuMDI2LTYyLjk2NiAxMDguMDZ6XCIgZmlsbD1cIiM0MWI4ODNcIj48L3BhdGg+XHJcblx0XHQ8L2c+XHJcblx0PC9zdmc+XHJcbiIsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFRUEsS0FBSyxFQUFDLGVBQWU7WUFDckJDLEtBQUssRUFBQyw0QkFBNEI7WUFDbENDLEtBQUssRUFBQyxTQUFTO1lBQ2ZDLE1BQU0sRUFBQyxVQUFVO1lBQ2pCQyxPQUFPLEVBQUM7OzBDQUNSLElBQUFDLElBQUEsQ0FBQUMsa0JBQUEsRUFhSTtZQWJEQyxFQUFFLEVBQUMsWUFBWTtZQUFDLFdBQVMsRUFBQzsyQkFDNUIsSUFBQUYsSUFBQSxDQUFBQyxrQkFBQSxFQU1JO1lBTkRDLEVBQUUsRUFBQyxXQUFXO1lBQUNDLFNBQVMsRUFBQzsyQkFDM0IsSUFBQUgsSUFBQSxDQUFBQyxrQkFBQSxFQUlr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