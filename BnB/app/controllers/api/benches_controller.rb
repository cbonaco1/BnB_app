class Api::BenchesController < ApplicationController
  def index
    # @benches = Bench.all();
    @benches = Bench.in_bounds(params[:bounds])
  end

  def create
  end
end
