import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index');
  this.route('holdings');
  this.route('issues', {path: 'companies'}, function(){
    this.route('issue', {path: '/:issue_id'});
  });

});

export default Router;
