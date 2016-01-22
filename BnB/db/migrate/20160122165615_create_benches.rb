class CreateBenches < ActiveRecord::Migration
  def change
    drop_table :benches
    create_table :benches do |t|
      t.string :description
      t.float :lat, null: false
      t.float :lng, null: false

      t.timestamps null: false
    end
  end
end
