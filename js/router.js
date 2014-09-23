Dnd.Router.map(function () {
  this.resource('dnd', { path: '/' }, function () {
    // additional child routes
    this.route('active');
    this.route('completed');
  });
});

Dnd.DndRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('todo');
  }
});

Dnd.DndIndexRoute = Ember.Route.extend({
  model: function () {
    return this.modelFor('dnd');
  }
});

Dnd.DndActiveRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('todo', function (todo) {
      return !todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller){
    this.render('dnd/index', {controller: controller});
  }
});

Dnd.DndCompletedRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('todo', function (todo) {
      return todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller){
    this.render('dnd/index', {controller: controller});
  }
});
