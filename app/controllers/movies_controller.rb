class MoviesController < ApplicationController
  include RottenTomatoes
  respond_to :html, :json
  require 'json'
  
  def index
    respond_with(@movies = Movie.all)
  end

  def search
    if params[:search]
      Rotten.api_key = ENV["rt_api_key"]
      response = RottenMovie.find(:title => params[:search], :limit => 10, :expand_results => false)

      @movies = {}
      i = 0

      response.each do |movie|
        @movies[i] = { title: movie.title, year: movie.year, rt_id: movie.id }
        
        if movie.alternate_ids
          @movies[i][:imdb_id] = (movie.alternate_ids).imdb
        end

        i += 1
      end

      # pp movies.to_json      

    end
  end

  # def create
  #   @movie = Movie.new(params[:movie]) @movie.save
  #   respond_with @movie
  # end
end
