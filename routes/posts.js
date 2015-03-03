app.PostsRoute = Ember.Route.extend({
  model: function() {
    return posts;
  }
});
