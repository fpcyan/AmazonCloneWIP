

json.extract! image, :id, :alt, :main_image
json.image_url asset_path(image.image.url(:carousel))
