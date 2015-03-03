app.PostsController = Ember.ArrayController.extend({
  itemController: 'post',

  sortProperties: ['text'],
  sortAscending: true,

  actions: {
    addPost: function() {
      var id = (posts.length + 1).toString();
      posts.addObject({id: id, text: this.text, date: new Date});
      this.set("text", null);
    },
    sortByText: function() {
      this.set('sortProperties', ['text']);
      debugger;
    }
  }
});
