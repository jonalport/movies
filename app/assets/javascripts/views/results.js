MoviesApp.Views.ResultsView = Backbone.View.extend({
  tagName: "ul",
  id: "results-list",

  initialize: function() {
    // this.model.on("change:searchResults", this.displayResults, this);
  },
  displayResults: function(model, results) {
    //append results to results-list here.   
    // console.log(results);
    $('#search-results').html(this.render(results).$el); // Render search form
  },
  render: function(results) {
    var self = this;
    // console.log(results);
    // this.$el.html(JST['movies/results'](results));

    console.log("Rendering results");

    // this.results.each(function(result) {
    //   var movieView = new MoviesApp.Views.MovieView({ model: movie });
    //   self.$('table').append(movieView.render().el);
    //   console.log(result);
    // });

    return this;
  }
});
