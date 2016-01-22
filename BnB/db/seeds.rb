# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Bench.destroy_all();
Bench.create!(description: "San Fran place", lat: 37.775785, lng: -122.445979);
Bench.create!(description: "Sweet spot", lat: 37.772045, lng: -122.437015);
Bench.create!(description: "Bachelor pad", lat: 37.781899, lng: -122.410426);
