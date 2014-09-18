MoviesApp.Routers.Movies = Backbone.Router.extend({ 
  routes: {
    "": "index"
  },
  index: function() {
    alert("Hello, welcome to the backbone router");
  } 
});
