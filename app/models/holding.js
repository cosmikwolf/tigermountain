import Model from 'ember-data/model';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  ticker: DS.attr('string'),
  issueID: DS.attr('number'),
  companyName: DS.attr('string')
  shares: DS.attr('number')
});
