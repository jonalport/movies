class MoviesController < ApplicationController
  respond_to :html, :json
  
  def index
    respond_with(@movies = Movie.all)
  end

  # def create
  #   @movie = Movie.new(params[:movie]) @movie.save
  #   respond_with @movie
  # end
end
