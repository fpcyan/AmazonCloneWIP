# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(first_name: "Fiona", last_name: "Conn", email: "fiona@example.com", password: "password")

5.times do
  User.create!(
    first_name: Faker::Name.first_name,
    last_name:  Faker::Name.last_name,
    email:      Faker::Internet.email,
    password:   "password"
  )
end

parent_departments = []
sub_departments = []
5.times do

  new_dept = nil
  until new_dept
    title = Faker::Commerce.department(3, true)
    new_dept = Department.create(title: title)
  end
  parent_departments << new_dept

  new_dept = nil
  until new_dept
    title = Faker::Commerce.department(2, true)
    new_dept = parent_departments.last.sub_departments.create(title: title)
  end
  sub_departments << new_dept
end

categories = []

10.times do |t|
  new_cat = nil
  until new_cat
    new_cat = sub_departments[t % 5].categories.create(section: Faker::Commerce.department(1, true))
  end
  categories << new_cat
end


25.times do
  new_product = categories.sample.products.create(product_name: Faker::Commerce.product_name, price: Faker::Commerce.price * 100, description: Faker::Lorem.paragraph, specs: Faker::Lorem.paragraph, quantity: rand(0...100) )

  new_product.

end
