class AddColumnToPayment < ActiveRecord::Migration
  def change
    add_column :payments, :cvc_code, :integer, null: false
    add_index :payments, :cvc_code
  end
end
