

json.extract! image, :id, :alt, :main_image
json.url asset_path(image.image.url(:carousel))
json.width image.image.width(:carousel)
json.height image.image.height(:carousel)
