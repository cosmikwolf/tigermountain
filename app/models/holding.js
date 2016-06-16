import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  ticker: attr('string'),
  issueid: attr('number'),
  companyname: attr('string'),
  shares: attr('number')
});
