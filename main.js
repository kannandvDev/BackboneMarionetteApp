//require JS configuration
require.config({
  //baseUrl: "" // not required now - data-main defined in html will be used
  paths: {
      'app': 'app/index',
      'jquery': "lib/jquery-3.3.1",
      'underscore': 'lib/underscore',
      'backbone': 'lib/backbone',
      'backbone.radio': 'lib/backbone.radio',
      'marionette': 'lib/backbone.marionette'
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: "Backbone"
    },
    "underscore": {
      exports: "_"
    },
    "jquery": {
      exports: "$"
    },
    "backbone.radio" : {
      exports: "Backbone.Radio"
    },
    "marionette": {
      deps: ['backbone', 'backbone.radio', 'jquery'],
      exports: "Backbone.Marionette"
    }
  }
});

//require mean run immediatly - so start the app (here app/index.js)
require(['app'], function(App) {
    const app = new App();
    app.start();
});
