import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  issue: belongsTo('issue'),
  owner: belongsTo('owner'),
  querydate: attr(),
  ticker: attr(),
  companyname: attr(),
  issuetitle: attr(),
  filerid: attr(),
  cik: attr(),
  currentreportdate: attr(),
  priorreportdate: attr(),
  ownername: attr(),
  street1: attr(),
  street2: attr(),
  street3: attr(),
  city: attr(),
  state: attr(),
  zip: attr(),
  phone: attr(),
  sharesheld: attr(),
  sharesheldchange: attr(),
  sharesheldpercentchange: attr(),
  marketvalue: attr(),
  marketvaluechange: attr(),
  portfoliopercent: attr(),
  sharesoutpercent: attr(),

});
