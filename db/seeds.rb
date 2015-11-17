# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
Product.destroy_all

User.create!(first_name: "Fiona", last_name: "Conn", email: "fiona@example.com", password: "password")

5.times do
  User.create!(
    first_name: Faker::Name.first_name,
    last_name:  Faker::Name.last_name,
    email:      Faker::Internet.email,
    password:   "password"
  )
end

25.times do
  Product.create!(
    product_name: Faker::Commerce.product_name,
    price: Faker::Commerce.price * 100,
    description: Faker::Lorem.paragraph,
    specs: Faker::Lorem.paragraph,
    quantity: rand(0...100)
  )
end

# parent_departments = []
# 5.times do
#   title = Faker::Commerce.department
#   departments << Department.create!(title: title)
#
# sub_departments = []
#
# 10.times do
#   section = Faker::Commerce.department
#   Category.create!(
#     section: section,
#
#   )
# end
