MoviesApp.Views.MoviesIndex = Backbone.View.extend({
  render: function() {
    this.$el.html(JST['movies/index']({ movies: this.collection }));
    return this;
  }
});
