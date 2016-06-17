export default function() {

  this.get('/holdings', (schema, request) => {
    return schema.holdings.all();
  });
  this.get('/holdings/:id', (schema, request) => {
    return schema.holdings.find(request.params.id);
  });

  this.get('/issues', (schema, request) => {
    return schema.issues.all();
  });
  this.get('/issues/:id', (schema, request) => {
    return schema.issues.find(request.params.id);
  });

  this.get('/owners', (schema, request) => {
    return schema.owners.all();
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.0-beta.7/shorthands/
  */
}
