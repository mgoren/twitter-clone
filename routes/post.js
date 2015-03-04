app.PostRoute = Ember.Route.extend({
  model: function() {
    return replies;
  }
});
