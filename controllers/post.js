app.PostController = Ember.ObjectController.extend({
  dateVisible: false,
  actions: {
    toggleDate: function() {
      this.set('dateVisible', !this.get('dateVisible'));
    }
  }
});
