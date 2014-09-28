MoviesApp.Views.MoviesIndexView = Backbone.View.extend({
  
  id: "movie-list",

  render: function() {
    var self = this;

    this.$el.html(JST['movies/index']());

    this.collection.each(function(movie) {
      var movieView = new MoviesApp.Views.MovieView({ model: movie });
      self.$('table').append(movieView.render().el);
    });

    return this;
  }
});
