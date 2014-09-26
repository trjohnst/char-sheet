Dnd.EditTraitView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  }
});

Ember.Handlebars.helper('edit-trait', Dnd.EditTraitView);