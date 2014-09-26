window.Dnd = Ember.Application.create();

Dnd.ApplicationAdapter = DS.FixtureAdapter.extend();

Dnd.Router.map(function() {
  this.resource('dnd', { path: '/' });
});

Dnd.DndRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('ability');
  }
});

Ember.Handlebars.helper('get-modifier', function(rank) {
  var result = (rank - 10) / 2;

  return (result > 0 ? "+" : "") + result;
});

Dnd.AbilityController = Ember.ObjectController.extend({
  actions : {
    editAbility: function() {
      this.set('isEditing', true);
    },
    acceptChanges: function() {
      this.set('isEditing', false);

      if (!Ember.isEmpty(this.get('model.rank'))) {
        this.get('model').save();
      }
    }
  },
  isEditing: false
});
