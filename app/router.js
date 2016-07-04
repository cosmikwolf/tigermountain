import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index');

  this.route('issues', {path: '/'}, function(){
    this.route('holdings', {path: '/:issue_id'}, function(){
      this.route('owner', {path: '/:owner_id'});
    });
  });
  this.route('owner');

});

export default Router;


/*
Route:   Display
/     :  List of issues
/1    : Issue name and list of owners
/1/2  : Issue name, list of owners and top holdings of selected ownername


/issue/owner

*/
