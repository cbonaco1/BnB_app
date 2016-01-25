class Api::BenchesController < ApplicationController
  def index
    # @benches = Bench.all();
    @benches = Bench.in_bounds(params[:bounds])
  end

  def create
    @bench = Bench.new(bench_params)
    @bench.save!
    render json: @bench
    # if @bench.save
    #   debugger
    # end
  end

  private
  def bench_params
    params.require(:bench).permit(:lat, :lng, :description, :seating)
  end
end
