# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151119141955) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string   "section",       null: false
    t.integer  "department_id", null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "categories", ["department_id"], name: "index_categories_on_department_id", using: :btree

  create_table "departments", force: :cascade do |t|
    t.string   "title",          null: false
    t.integer  "parent_dept_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "departments", ["parent_dept_id"], name: "index_departments_on_parent_dept_id", using: :btree

  create_table "images", force: :cascade do |t|
    t.string   "alt",        null: false
    t.boolean  "main_image", null: false
    t.integer  "product_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "products", force: :cascade do |t|
    t.string   "product_name", null: false
    t.integer  "price",        null: false
    t.text     "description",  null: false
    t.text     "specs",        null: false
    t.integer  "quantity",     null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "products_categories", force: :cascade do |t|
    t.integer  "product_id",  null: false
    t.integer  "category_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "products_categories", ["category_id"], name: "index_products_categories_on_category_id", using: :btree
  add_index "products_categories", ["product_id"], name: "index_products_categories_on_product_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "first_name",      null: false
    t.string   "last_name",       null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree

end
