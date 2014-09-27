



Ember.Handlebars.helper('get-modifier', function(rank) {
  var result = (rank - 10) / 2;

  return (result > 0 ? "+" : "") + result;
});
