json.array! @shipping_addresses do |shipping_address|
    json.extract!( shipping_address, :id, :full_name, :address_one, :address_two, :city, :region, :zip, :phone_number)
end
