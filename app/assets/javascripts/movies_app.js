window.MoviesApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(data) {
    this.movies = new MoviesApp.Collections.Movies(data.movies);
    new MoviesApp.Routers.Movies({ collection: this.movies });
    
    if (!Backbone.history.started) {
      Backbone.history.start();
      Backbone.history.started = true;
    }
  }
};
