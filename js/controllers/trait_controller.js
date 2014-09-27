Dnd.TraitController = Ember.ObjectController.extend({
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