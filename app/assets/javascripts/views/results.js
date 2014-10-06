MoviesApp.Views.ResultsView = Backbone.View.extend({
  tagName: "ul",
  id: "results-list",

  initialize: function() {
    this.model.on("change:searchResults", this.displayResults, this);
  },
  displayResults: function(model, results) {
    //append results to results-list here.   
    console.log(results);
    // $('#search-results').html(this.render().$el); // Render search form
  },
  render: function() {
    var self = this;

    // To do: render the results (update below code)!

    // this.$el.html(JST['movies/results']());

    // this.collection.each(function(movie) {
    //   var movieView = new MoviesApp.Views.MovieView({ model: movie });
    //   self.$('table').append(movieView.render().el);
    // });

    return this;
  }
});
