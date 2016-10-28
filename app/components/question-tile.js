
import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    delete(question){
      if (confirm('This question shall be wiped from our Database. Are you sure you want to delete?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
