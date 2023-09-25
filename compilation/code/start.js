System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/transversals", "@beyond-js/widgets@0.1.4/render"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, Transversal, __beyond_transversal, widgets, bundles;
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Transversals) {
      dependency_1 = _beyondJsKernel019Transversals;
    }, function (_beyondJsWidgets014Render) {
      dependency_2 = _beyondJsWidgets014Render;
    }],
    execute: function () {
      ({
        Transversal
      } = brequire('@beyond-js/kernel/transversals'));
      _export("__beyond_transversal", __beyond_transversal = new Transversal('start', ''));
      __beyond_transversal.dependencies.update([['@beyond-js/kernel/transversals', dependency_1], ['@beyond-js/widgets/render', dependency_2]]);

      /*************
      BUNDLE: WIDGET
      *************/
      ({
        widgets
      } = brequire('@beyond-js/widgets/render'));
      widgets.register([{
        "name": "main-layout",
        "vspecifier": "@beyond-js/landing-pages@0.0.1/layout/main",
        "is": "layout"
      }, {
        "name": "home-page",
        "vspecifier": "@beyond-js/landing-pages@0.0.1/home",
        "is": "page",
        "route": "/"
      }, {
        "name": "svelte-home-page",
        "vspecifier": "@beyond-js/landing-pages@0.0.1/svelte-home",
        "is": "page",
        "route": "/svelte"
      }, {
        "name": "vue-home-page",
        "vspecifier": "@beyond-js/landing-pages@0.0.1/vue-home",
        "is": "page",
        "route": "/vue"
      }]);
      bundles = [];
      __beyond_transversal.initialise(bundles);
    }
  };
});