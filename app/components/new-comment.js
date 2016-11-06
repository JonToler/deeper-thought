import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment() {
     var params = {
       author: this.get('author'),
       content: this.get('content'),
       rating: this.get('rating'),
       question: this.get('question')
     };
     this.set('addNewComment', false);
     this.sendAction('saveComment', params);
   }
  }
});
