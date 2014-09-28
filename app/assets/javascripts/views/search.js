MoviesApp.Views.SearchView = Backbone.View.extend({

  tagName: "div",
  className: "search",
  // id: "movie-id",

  initialize: function() {
  },

  events: {
    "click #search-button": "doSearch"
  },

  render: function() {
    this.$el.html(JST['movies/search']({}));
    return this;
  },

  doSearch: function() {
    var query = $("#search-input").val();
    if(query == '') {
      return false;
    }
    
  }
});
