System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@0.0.5/page", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Controller, Page, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Page: void 0
  });
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets005Page) {
      dependency_3 = _beyondJsReact18Widgets005Page;
    }, function (_react3) {
      dependency_4 = _react3;
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
          "vspecifier": "@beyond-js/landing-pages@0.0.1/home"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "home-page",
        "vspecifier": "@beyond-js/landing-pages@0.0.1/home",
        "is": "page",
        "route": "/"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond-js/landing-pages@0.0.1/home');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1284574522,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _views.Page;
            }
          }
          exports.Controller = Controller;
        }
      });

      /************************************
      INTERNAL MODULE: ./views/icons/beyond
      ************************************/

      ims.set('./views/icons/beyond', {
        hash: 606365869,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondSVG = BeyondSVG;
          var _react = require("react");
          function BeyondSVG() {
            return _react.default.createElement("svg", {
              className: "beyondjs-logo",
              xmlns: "http://www.w3.org/2000/svg",
              width: "626.601",
              height: "1156.834",
              viewBox: "0 0 626.601 1156.834"
            }, _react.default.createElement("g", {
              id: "Grupo_7716",
              "data-name": "Grupo 7716"
            }, _react.default.createElement("g", {
              id: "g6928-9-9",
              transform: "translate(0 711.381)"
            }, _react.default.createElement("path", {
              id: "path6930-4-7",
              d: "M159.844,86.353c-20.1,76.2-30.3,148.327-26.88,190.112,3.506,42.568,20.642,47.168,44.952,12.066,17.762-25.709,37.659-70.193,55.444-123.958A352.417,352.417,0,0,1,159.844,86.353ZM599.252,204.182a352,352,0,0,1-102.768,30.913c-11.473,55.468-16.475,103.956-13.938,135.105,3.512,42.539,20.648,47.124,44.952,12.028C551.34,347.792,578.562,280.243,599.252,204.182Zm-285.332,6.933c-28.148,110.174-46.143,210.669-48.206,269.214-2.25,64.053,14.886,68.638,44.952,12.029,27.474-51.781,62.1-147.807,92.775-257.264a351.427,351.427,0,0,1-45.641-8.656A350.926,350.926,0,0,1,313.919,211.115Z",
              transform: "translate(-132.313 -86.353)",
              fill: "#99a3b1"
            })), _react.default.createElement("path", {
              id: "path900",
              d: "M422.6,272.07q-11.293-.386-22.475.076C270.8,277.409,153.915,365.753,118.715,497.18,75.393,658.936,171.838,826.092,333.522,869.434S662.293,816.251,705.615,654.5s-53.16-328.875-214.844-372.216a303.323,303.323,0,0,0-68.175-10.21Zm-2.513,67.116a239.3,239.3,0,0,1,53.28,8.07,235.9,235.9,0,1,1-70.8-8.033c5.819-.227,11.648-.252,17.522-.038ZM535.842,64.162c-20.111,0-40.325,7-57.625,14.748-23.07,10.333-44.1,26.543-65.208,48.036-27.335,27.837-53.8,63.84-78.838,106.07a348.4,348.4,0,0,1,98.787-8.427c13.777-19.948,27.508-37.7,40.893-51.331,44.7-45.021,81.207-48.74,99.744,26.738,5.065,19.6,8.252,43.247,10.146,69.181a349.484,349.484,0,0,1,80.944,62.554c.022-53.094-4.855-101.089-15.278-141.426-7.541-29.173-17.692-53.711-32.507-74.2S582.1,73.73,555.829,66.69a76.116,76.116,0,0,0-19.987-2.528ZM422.811,265.844q-11.524-.392-22.936.08C267.9,271.3,148.624,361.45,112.7,495.571,68.493,660.641,166.915,831.224,331.912,875.453S667.42,821.181,711.63,656.112,657.381,320.5,492.383,276.267a309.524,309.524,0,0,0-69.572-10.419Zm-2.565,68.491a244.168,244.168,0,0,1,54.371,8.236,240.729,240.729,0,1,1-72.253-8.2c5.938-.227,11.886-.257,17.881-.039Z",
              transform: "translate(-95.607 -64.162)",
              fill: "#fff"
            })));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/icons/react
      ***********************************/

      ims.set('./views/icons/react', {
        hash: 184060257,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReactSVG = ReactSVG;
          var _react = require("react");
          function ReactSVG() {
            return _react.default.createElement("svg", {
              className: "react-logo",
              viewBox: "0 0 128 128",
              "data-tippy-content": "react"
            }, _react.default.createElement("g", null, _react.default.createElement("g", {
              fill: "#61DAFB"
            }, _react.default.createElement("circle", {
              cx: "64",
              cy: "64",
              r: "11.4"
            }), _react.default.createElement("path", {
              d: "M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"
            }))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3904828176,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = Page;
          var React = require("react");
          var _beyond = require("./icons/beyond");
          var _react2 = require("./icons/react");
          /*bundle*/
          function Page() {
            return React.createElement("div", {
              className: "page__container"
            }, React.createElement("div", {
              className: "content"
            }, React.createElement("h1", null, "Let's get started using BeyondJS with React nyasu~~!"), React.createElement("div", {
              className: "promotion"
            }, React.createElement("div", {
              className: "logos"
            }, React.createElement(_beyond.BeyondSVG, null), React.createElement(_react2.ReactSVG, null)), React.createElement("h2", null, "BeyondJS + React")), React.createElement("p", null, "Let's start managing our project from the", ' ', React.createElement("a", {
              href: "https://workspace.beyondjs.com/",
              target: "_blank",
              rel: "noopener"
            }, "workspace")), React.createElement("p", {
              className: "secondary need-help"
            }, "Need help getting started? Let's review with the official", ' ', React.createElement("a", {
              href: "https://beyondjs.com/",
              target: "_blank",
              rel: "noopener"
            }, "BeyondJS documentation"))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "Page",
        "name": "Page"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Page') && _export("Page", Page = require ? require('./views/index').Page : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlBhZ2UiLCJleHBvcnRzIiwiX3JlYWN0IiwiQmV5b25kU1ZHIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ4bWxucyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImlkIiwidHJhbnNmb3JtIiwiZCIsImZpbGwiLCJSZWFjdFNWRyIsImN4IiwiY3kiLCJyIiwiUmVhY3QiLCJfYmV5b25kIiwiX3JlYWN0MiIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy92aWV3cy9pY29ucy9iZXlvbmQudHN4IiwiL3RzL3ZpZXdzL2ljb25zL3JlYWN0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUNYRSxVQUFXLFNBQVFILEtBQUEsQ0FBQUkseUJBQXlCO1lBQzlDLElBQUlDLE1BQU1BLENBQUE7Y0FDTixPQUFPSCxNQUFBLENBQUFJLElBQUk7WUFDZjs7VUFDSEMsT0FBQSxDQUFBSixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkQsSUFBQUssTUFBQSxHQUFBUCxPQUFBO1VBRU0sU0FBVVEsU0FBU0EsQ0FBQTtZQUN4QixPQUNDRCxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQTtjQUNDQyxTQUFTLEVBQUMsZUFBZTtjQUN6QkMsS0FBSyxFQUFDLDRCQUE0QjtjQUNsQ0MsS0FBSyxFQUFDLFNBQVM7Y0FDZkMsTUFB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