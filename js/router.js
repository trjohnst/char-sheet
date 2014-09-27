Dnd.Router.map(function() {
  this.resource('dnd', { path: '/' });
});

Dnd.DndRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('ability');
  }
});