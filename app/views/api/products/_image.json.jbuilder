

json.extract! image, :id, :alt, :main_image
json.url asset_path(image.image.url(res))
json.width image.image.width(res)
json.height image.image.height(res)
