MoviesApp.Routers.Movies = Backbone.Router.extend({ 
  routes: {
    "": "index"
  },
  index: function() {
    var view = new MoviesApp.Views.MoviesIndex({ collection: MoviesApp.movies });
    $('body').html(view.render().$el);
  },
  movies: function() {
    // console.log('listings...');
  }
});
