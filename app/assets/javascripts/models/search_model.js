var SearchModel = Backbone.Model.extend({
  performSearch: function(str) {
    var self = this;
    
    $.ajax({
      url: "/movies/search",
      dataType: "json",
      type: "GET",
      data: { search: str},
      contentType: "application/json; charset=utf-8",
      success: function (response) {
        // your success code
        self._searchComplete(response);
      },
      error: function () {
        // your error code
        console.log("Something happened");
      }
    }); 
  },
  _searchComplete: function(results) {
    this.set("searchResults", results);
  }
});
