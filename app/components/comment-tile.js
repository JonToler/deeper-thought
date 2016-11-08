import Ember from 'ember';

export default Ember.Component.extend({
  favoriteAnswers: Ember.inject.service(),

  actions: {
    addToList(item) {
      this.get('favoriteAnswers').add(item);
      alert('hello');
    },
    delete(comment) {
      if (confirm('Are you sure you want to delete this comment?')) {
        this.sendAction('destroyComment', comment);
      }
    }
  },

  heading: Ember.computed('comment.author', 'comment.content', function() {
    return this.get('comment.author') + ' - ' + this.get('comment.content');
  }),


});
