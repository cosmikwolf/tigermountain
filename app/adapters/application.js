import JSONAPIAdapter from 'ember-data/adapters/json-api';
import Ember from 'ember';

export default JSONAPIAdapter.extend({

  ///namespace: '/',
  host: 'https://tiger-mountain-api.herokuapp.com',

  pathForType: function(type) {
    return Ember.String.pluralize(Ember.String.underscore(type));
  }

});
