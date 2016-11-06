import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['rating:desc'],
  sortedComments: Ember.computed.sort('question.comments', 'sortBy'),

  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      var params = {
        author: this.get('author'),
        notes: this.get('notes'),
        post: this.get('post'),
        image: this.get('image'),



      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
