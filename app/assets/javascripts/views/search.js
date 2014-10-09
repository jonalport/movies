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
      // console.log("Empty search string")
      return false;
    }

    resultsCollection = new MoviesApp.Collections.Results();

    resultsCollection.fetch({
      data: {search: query},
      success: function(){
        var view = new MoviesApp.Views.SearchResultsView({ collection: resultsCollection });
        $("#search-results").html(view.render().$el);
      },
      error: function(){
        // alert("Oh noes! Something went wrong!")
      }
    });
  }
});
