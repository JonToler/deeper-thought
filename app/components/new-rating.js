import Ember from 'ember';

export default Ember.Component.extend({
  addNewRating: false,
  actions: {
    ratingFormShow() {
      this.set('addNewRating', true);
    },
    saveRating() {
     var params = {
       author: this.get('author'),
       credibility: this.get('credibility')
     };
     this.set('addNewRating', false);
     this.sendAction('saveRating', params);
   }
  }
});
