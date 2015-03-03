app.PostsController = Ember.ArrayController.extend({
  itemController: 'post',

  sortProperties: ['date'],
  sortAscending: true,

  actions: {
    addPost: function() {
      var id = (posts.length + 1).toString();
      posts.addObject({id: id, text: this.text, date: new Date});
      this.set("text", null);
    },
    reverseSort: function() {
      this.set('sortAscending', !this.get('sortAscending'));
    }
  }
});
