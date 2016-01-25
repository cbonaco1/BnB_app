class Bench < ActiveRecord::Base
  validates :lat, :lng, presence: true

  def self.in_bounds(bounds)
    # byebug
    northEastLat = bounds[:northEast][:lat].to_f
    northEastLng = bounds[:northEast][:lng].to_f
    southWestLat = bounds[:southWest][:lat].to_f
    southWestLng = bounds[:southWest][:lng].to_f
    Bench.where(
      "lat >= :southWestLat AND lat <= :northEastLat AND
      lng >= :southWestLng AND lng <= :northEastLng",
      {southWestLat: southWestLat, northEastLat: northEastLat,
       southWestLng: southWestLng, northEastLng: northEastLng, }
    );

  end

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
