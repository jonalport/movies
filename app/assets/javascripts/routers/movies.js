MoviesApp.Routers.Movies = Backbone.Router.extend({ 

  routes: {
    "": "index",
    "movies": "movies",
    "seen": "seen",
    "search": "search",
    "want": "want",
    "movies/:id": "show"
  },

  // Show some interesting movies
  index: function() {
    // var indexEl = $("body").get(0);
    // console.log(el);
    var view = new MoviesApp.Views.MoviesIndexView({ collection: MoviesApp.movies });
    // view.setElement(indexEl);
    $(".content").html(view.render().$el);
  },

  // Movie details
  show: function(id) {
    console.log("Movie: " + id);
  },

  // List movies user as marked as watched
  seen: function() {
    console.log("All that I've seen");
  },

  want: function() {
    console.log("All that I want to see");
  },

  search: function() {
    var view = new MoviesApp.Views.SearchView();
    $(".content").html(view.render().$el); // Render search form
  }
});
