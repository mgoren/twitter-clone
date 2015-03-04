app.PostsController = Ember.ArrayController.extend({
  itemController: 'post',

  sortProperties: ['date:desc'],
  sortedPosts: Ember.computed.sort('model', 'sortProperties'),

  actions: {
    addPost: function() {
      var id = (posts.length + 1).toString();
      posts.addObject({id: id, text: this.text, date: new Date, replies: []});
      this.set("text", null);
    }
  }
});
