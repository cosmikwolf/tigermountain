import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
    holdings: hasMany(),
    portfoliovalue: attr(),
    ownername: attr(),
    street1: attr(),
    street2: attr(),
    street3: attr(),
    city: attr(),
    state: attr(),
    zip: attr(),
    phone: attr(),
    dcn: attr(),
    newpositions: attr(),
    increasedpositions: attr(),
    decreasedpositions: attr(),
    soldoutpositions: attr(),
    filerid: attr(),
    issuesheld: attr(),
    cik: attr(),
});
