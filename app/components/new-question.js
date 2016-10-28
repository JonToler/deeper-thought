import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
     var params = {
       author: this.get('author'),
       image: this.get('image'),
       notes: this.get('notes'),
       question: this.get('question'),
     };
     this.set('addNewQuestion', false);
     this.sendAction('saveQuestion', params);
    }
  }
});
