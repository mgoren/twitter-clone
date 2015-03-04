app.PostController = Ember.ObjectController.extend({
  clicked: false,

  actions: {
    postClicked: function() {
      this.set('clicked', !this.get('clicked') );
    },

    addReply: function(post) {
      var id = (replies.length + 1).toString();
      replies.addObject({id: id, postId: post.id, reply: post.reply, date: new Date});
      this.set("reply", null);
    }

  }
});
