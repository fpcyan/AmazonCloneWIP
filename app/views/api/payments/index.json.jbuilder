
json.array! current_user.payments do |payment|
  json.extract!(payment, :id, :merchant, :full_name)
end
