MoviesApp.Views.SearchResultsView = Backbone.View.extend({
  initialize: function() {
      this.model.on("change:searchResults", this.displayResults, this);
  },
  displayResults: function(model, results) {
      // do whatever...
  }
});
