MoviesApp.Views.SearchResultsView = Backbone.View.extend({
  tagName: "ul",
  id: "results-list",

  render: function() {
    this.$el.html(JST['movies/results']({ collection: this.collection }));
    return this;
  }
});
