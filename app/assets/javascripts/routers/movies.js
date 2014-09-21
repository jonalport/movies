MoviesApp.Routers.Movies = Backbone.Router.extend({ 

  routes: {
    "": "index",
    "movies": "movies",
    "movies/watched": "watched",
    "movies/:id": "show"
  },

  // Show some interesting movies
  index: function() {
    var indexEl = $("body").get(0);
    // console.log(el);
    var view = new MoviesApp.Views.MoviesIndex({ collection: MoviesApp.movies });
    // view.setElement(indexEl);
    $('body').html(view.render().$el);
  },

  // Movie details
  show: function(id) {
    console.log("Movie: " + id);
  },

  // List movies user as marked as watched
  watched: function() {
    console.log("All that I've seen");
  }

});
