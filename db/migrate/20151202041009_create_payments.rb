class CreatePayments < ActiveRecord::Migration
  def change
    create_table :payments do |t|
      t.integer :user_id
      t.string :full_name
      t.datetime :expiration
      t.string :cc_token

      t.timestamps null: false
    end
    add_index :payments, :user_id
  end
end
