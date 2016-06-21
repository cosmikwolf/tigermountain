import Ember from 'ember';

export default Ember.Controller.extend({
//  model: this.get('content'),
  selected_issue: '',
//  myMatcher(company, term) {
//     return (company.ticker + ' ' + company.companyname).indexOf(term);
//  },
  actions: {
    selectIssue(company) {
      this.set('selected_issue', company);
      this.transitionToRoute('issues.holdings', company);
    }
  }

});
