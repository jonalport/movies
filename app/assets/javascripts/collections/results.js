MoviesApp.Collections.Results = Backbone.Collection.extend({
  model: MoviesApp.Models.Result,
  url: '/movies/search',
});

// var gameCollection = new GameCollection();
// gameCollection.fetch();
