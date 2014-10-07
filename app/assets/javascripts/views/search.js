MoviesApp.Views.SearchView = Backbone.View.extend({

  tagName: "div",
  className: "search",
  // id: "movie-id",

  initialize: function() {
    var resultsView = new MoviesApp.Views.ResultsView({ model: this.model });
  },

  events: {
    "click #search-button": "doSearch"
  },

  render: function() {
    this.$el.html(JST["movies/search"]({}));

    $(function() {
      $("body").addClass("page-search");
      $("input[type=text]").focus();
    });
    return this;
  },

  doSearch: function() {
    var query = $("#search-input").val();
    
    if(query == "") {
      console.log("Empty search string")
      return false;
    }
    // Get values of selected options, use them to construct Ajax query. 
    // Also toggle 'selected' CSS classes on selected inputs here?
    var options = query; // make this an obj literal?
    this.model.performSearch(options);
  }
});
