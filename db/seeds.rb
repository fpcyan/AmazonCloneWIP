# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create!(first_name: "Fiona", last_name: "Conn", email: "fiona@example.com", password: "password")

5.times do
  user = User.create!(
    first_name: Faker::Name.first_name,
    last_name:  Faker::Name.last_name,
    email:      Faker::Internet.email,
    password:   "password"
  )
  puts "User: " + user.first_name + " " + user.last_name
end

def construct_products_and_images(current_dir, category, *args)
  current_dir.path =~ /sub$/ ? main = false : main = true
  product = args[0]

  current_dir.each do |imagery|
    next if imagery =~ /^\./

    if imagery =~ /\.jpg$/ || imagery =~ /\.png$/
      if product.nil?
        name =
          category.sub_department.title + " " +
          category.section + " " +
          imagery.slice(/([[:alnum:]]+)\s?_?\.jpg/, 1) + " " +
          rand(0..10000).to_s

        prod = category.create_product(
          name,
          Faker::Commerce.price * 100,
          Faker::Lorem.paragraph,
          Faker::Lorem.paragraph,
          rand(0...100)
        )

      puts "Product: " + prod.product_name + " in Category: " +
        category.section
      end

      image_file = File.new(current_dir.path + "/" + imagery)
      if prod
        image = prod.create_image(main, image_file)
      else
        image = product.create_image(main, image_file)
      end
      puts "Image_file_name: " + image.image_file_name
    else

      last = Product.last if current_dir.path =~ /-main$/

      next_directory = Dir.new(current_dir.path + "/" + imagery)
      construct_products_and_images(next_directory, category, last)
    end
  end
end

path = Rails.root.to_s + "/app/assets/images"
parent_department = Department.create!(title: "Luxury Goods")
puts "Parent Department: " + parent_department.title

parent_dir = Dir.new(path)
parent_dir.each do |dept_folder|
  next if dept_folder =~ /^\./ || dept_folder == "default"

  dept = parent_department.sub_departments.create!(title: dept_folder.capitalize)
  dept_dir = Dir.new(parent_dir.path + "/" + dept_folder)
  puts "Department: " + dept.title

  dept_dir.each do |cat_folder|
    next if cat_folder =~ /^\./ || cat_folder == "default"
    cat = dept.categories.create!(section: cat_folder.capitalize)
    cat_dir = Dir.new(dept_dir.path + "/" + cat_folder)
    puts "Category: " + cat.section

    construct_products_and_images(cat_dir, cat)
  end
end
