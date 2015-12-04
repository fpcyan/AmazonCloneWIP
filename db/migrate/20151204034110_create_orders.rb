class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.integer :product_id
      t.datetime :purchase_date
      t.integer :price
      t.integer :quantity

      t.timestamps null: false
    end
    add_index :orders, :product_id
  end
end
