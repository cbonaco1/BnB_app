class Bench < ActiveRecord::Base
  validates :lat, :lng, presence: true

  def self.in_bounds(bounds)
    byebug
    # bounds in the following format:
    # {
    #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
    #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
    # }
    #... query logic goes here
    #Return Benches where lat is less than NE.lat and greater than SW.Lat
    # and long is greater than SW.lng and less than NE.lng
    # Bench.where()
  end

end
