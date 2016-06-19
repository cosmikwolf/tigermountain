import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index');

  this.route('issues', {path: '/'}, function(){
    this.route('holdings', {path: '/:issue_id'}, function(){
      this.route('owner', {path: '/:holding_id'});
    });
  });
  this.route('owner');

});

export default Router;
