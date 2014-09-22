MoviesApp.Views.SearchView = Backbone.View.extend({

  tagName: "div",
  className: "search",
  // id: "movie-id",

  initialize: function() {
  },

  events: {
  },

  render: function() {
    this.$el.html(JST['movies/search']({}));
    return this;
  },
});
