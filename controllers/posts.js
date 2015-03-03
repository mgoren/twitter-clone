app.PostsController = Ember.ArrayController.extend({
  actions: {
    addPost: function() {
      var id = (posts.length + 1).toString();
      posts.addObject({id: id, text: this.text});
      this.set("text", null);
    }
  }
});
