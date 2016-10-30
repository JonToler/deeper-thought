import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question){
      if (confirm('Want to wipe this inqury from the databanks?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
