Ember.Handlebars.helper('get-modifier', function(value) {
  var result = (value - 10) / 2;

  return (result > 0 ? "+" : "") + result;
});