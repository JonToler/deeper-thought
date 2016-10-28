import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  image: DS.attr(),
  question: DS.attr(),
  notes: DS.attr()
});
