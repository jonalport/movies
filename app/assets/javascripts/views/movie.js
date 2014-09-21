MoviesApp.Views.MovieView = Backbone.View.extend({

  tagName: "tr",
  className: "movie",
  // id: "movie-id",

  initialize: function() {
    // console.log('Movie view');
    console.log(this.el);
  },

  id: function() {
    return "movie-" + this.model.id;
  },

  events: {
    "click td": "doStuff"
  },

  render: function() {
    this.$el.html(JST['movies/movie']({ model: this.model }));
    return this;
  },

  doStuff: function() {
    console.log("I have been clicked!");
  }
});
