class CreateUserOrders < ActiveRecord::Migration
  def change
    create_table :user_orders do |t|

      t.timestamps null: false
    end
  end
end
