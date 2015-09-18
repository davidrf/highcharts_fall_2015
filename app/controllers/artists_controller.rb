class ArtistsController < ApplicationController
  def index
    @artists = Artist.all
    respond_to do |format|
      format.html
      format.json do
        names = @artists.map{ |artist| artist.name }
        votes = @artists.map{ |artist| artist.votes.count }
        render json: [names, votes]
      end
    end
  end
end
