class MoviesController < ApplicationController
  include RottenTomatoes
  respond_to :html, :json
  require 'json'
  require 'pp'
  
  def index
    respond_with(@movies = Movie.all)
  end

  def search
    if params[:search]
      Rotten.api_key = ENV["rt_api_key"]
      response = RottenMovie.find(:title => params[:search], :limit => 20, :expand_results => false)

      @movies = []
      i = 0

      response.each do |movie|
        # pp movie
        
        @movies[i] = { 
          title: movie.title, 
          year: movie.year, 
          rt_id: movie.id,
          rt_critics: movie.ratings.critics_score,
          rt_audience: movie.ratings.audience_score,
          poster: movie.posters.detailed.sub("_tmb", "_det")
        }
        
        if movie.alternate_ids
          @movies[i][:imdb_id] = (movie.alternate_ids).imdb
        end

        i += 1
      end

      respond_to do |format|
        format.html
        format.json { render json: @movies }
      end
      
      # render json: @movies
      
    end
  end

  # def create
  #   @movie = Movie.new(params[:movie]) @movie.save
  #   respond_with @movie
  # end
end

# http://content7.flixster.com/movie/11/17/61/11176117_tmb.jpg
# http://content7.flixster.com/movie/11/17/61/11176117_pro.jpg
# http://content7.flixster.com/movie/11/17/61/11176117_det.jpg
# http://content7.flixster.com/movie/11/17/61/11176117_ori.jpg

# <PatchedOpenStruct id="13004", title="Jackie Brown", year=1997, mpaa_rating="R", runtime=154, critics_consensus="", release_dates=#<PatchedOpenStruct theater="1997-12-25", dvd="1998-08-05">, ratings=#<PatchedOpenStruct critics_rating="Certified Fresh", critics_score=86, audience_rating="Upright", audience_score=85>, synopsis="", posters=#<PatchedOpenStruct thumbnail="http://content7.flixster.com/movie/11/17/61/11176117_tmb.jpg", profile="http://content7.flixster.com/movie/11/17/61/11176117_tmb.jpg", detailed="http://content7.flixster.com/movie/11/17/61/11176117_tmb.jpg", original="http://content7.flixster.com/movie/11/17/61/11176117_tmb.jpg">, abridged_cast=[#<PatchedOpenStruct name="Pam Grier", id="162685862", characters=["Jackie Brown"]>, #<PatchedOpenStruct name="Samuel L. Jackson", id="162652156", characters=["Ordell Robbie"]>, #<PatchedOpenStruct name="Robert Forster", id="162685864", characters=["Max Cherry"]>, #<PatchedOpenStruct name="Bridget Fonda", id="162662489", characters=["Melanie"]>, #<PatchedOpenStruct name="Michael Keaton", id="162652681", characters=["Ray Nicolette"]>], alternate_ids=#<PatchedOpenStruct imdb="0119396">, links=#<PatchedOpenStruct self="http://api.rottentomatoes.com/api/public/v1.0/movies/13004.json", alternate="http://www.rottentomatoes.com/m/jackie_brown/", cast="http://api.rottentomatoes.com/api/public/v1.0/movies/13004/cast.json", reviews="http://api.rottentomatoes.com/api/public/v1.0/movies/13004/reviews.json", similar="http://api.rottentomatoes.com/api/public/v1.0/movies/13004/similar.json">, raw_data={"id"=>"13004", "title"=>"Jackie Brown", "year"=>1997, "mpaa_rating"=>"R", "runtime"=>154, "critics_consensus"=>"", "release_dates"=>{"theater"=>"1997-12-25", "dvd"=>"1998-08-05"}, "ratings"=>{"critics_rating"=>"Certified Fresh", "critics_score"=>86, "audience_rating"=>"Upright", "audience_score"=>85}, "synopsis"=>"", "posters"=>{"thumbnail"=>"http://content7.flixster.com/movie/11/17/61/11176117_tmb.jpg", "profile"=>"http://content7.flixster.com/movie/11/17/61/11176117_tmb.jpg", "detailed"=>"http://content7.flixster.com/movie/11/17/61/11176117_tmb.jpg", "original"=>"http://content7.flixster.com/movie/11/17/61/11176117_tmb.jpg"}, "abridged_cast"=>[{"name"=>"Pam Grier", "id"=>"162685862", "characters"=>["Jackie Brown"]}, {"name"=>"Samuel L. Jackson", "id"=>"162652156", "characters"=>["Ordell Robbie"]}, {"name"=>"Robert Forster", "id"=>"162685864", "characters"=>["Max Cherry"]}, {"name"=>"Bridget Fonda", "id"=>"162662489", "characters"=>["Melanie"]}, {"name"=>"Michael Keaton", "id"=>"162652681", "characters"=>["Ray Nicolette"]}], "alternate_ids"=>{"imdb"=>"0119396"}, "links"=>{"self"=>"http://api.rottentomatoes.com/api/public/v1.0/movies/13004.json", "alternate"=>"http://www.rottentomatoes.com/m/jackie_brown/", "cast"=>"http://api.rottentomatoes.com/api/public/v1.0/movies/13004/cast.json", "reviews"=>"http://api.rottentomatoes.com/api/public/v1.0/movies/13004/reviews.json", "similar"=>"http://api.rottentomatoes.com/api/public/v1.0/movies/13004/similar.json"}}>
