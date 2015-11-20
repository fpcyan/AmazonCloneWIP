

json.extract! image, :id, :alt, :main_image
json.image_url image.image.url(:carousel)
