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

def construct_products_and_images(current_dir, category, *args)
  current_dir.path =~ /-sub$/ ? main = true : main = false
  product = args[0]


  current_dir.each do |imagery|
    next if imagery =~ /^\./

    if imagery =~ /\.jpg$/ || imagery =~ /\.png$/
      if product.nil?
        product ||= category.create_product(
          category.sub_department.title + category.section +
            rand(0..10000),
          Faker::Commerce.price * 100,
          Faker::Lorem.paragraph,
          Faker::Lorem.paragraph,
          rand(0...100)
        )
        product = product.already_exists(category) unless product.errors.empty?
      end
      image_file = File.new(current_dir.path + "/" + imagery)
      image = product.create_image(main, image_file)

    else
      next_directory = Dir.new(current_dir.path + "/" + imagery)
      set_product_images(next_directory, category)
    end
  end
end

path = Rails.root.to_s + "/app/assets/images"
parent_department = Department.create!(title: "Luxury Goods")

parent_dir = Dir.new(path)
parent_dir.each do |dept_folder|
  next if dept_folder =~ /^\./ || dept_folder == "default"

  dept = parent_department.sub_departments.create!(title: dept_folder)
  dept_dir = Dir.new(parent_dir.path + "/" + dept_folder)

  dept_dir.each do |cat_folder|
    cat = dept.categories.create!(section: cat_folder.capitalize)
    cat_dir = Dir.new(dept_dir.path + "/" + cat_folder)

    construct_products_and_images(cat_dir, cat)
  end
end
