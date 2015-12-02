class CreatePayments < ActiveRecord::Migration
  def change
    create_table :payments do |t|
      t.integer :user_id,     null: false
      t.string :full_name,    null: false
      t.datetime :expiration, null: false
      t.string :cc_token,     null: false
      t.string :merchant,     null: false

      t.timestamps null: false
    end
    add_index :payments, :user_id
  end
end
