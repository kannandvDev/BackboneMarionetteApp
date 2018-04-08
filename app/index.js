define(['marionette', 'underscore'], function(Marionette, _) {

  var app = function() {

  };

  _.extend(app.prototype, {
      start: function() {
        var HWview = Marionette.View.extend({
          el: "#app-container",
          template: _.template("Hello World")
        });

        var hw = new HWview();
        hw.render();
      }
  });

  return app;
});
