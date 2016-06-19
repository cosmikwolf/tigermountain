import JSONAPIAdapter from 'ember-data/adapters/json-api';
import Ember from 'ember';
import config from '../config/environment';

export default JSONAPIAdapter.extend({

  host: config.api_host,

  pathForType: function(type) {
    return Ember.String.pluralize(Ember.String.underscore(type));
  }

});
