json.extract! photo, :id, :title, :image_url, :description, :created_at, :updated_at
json.url photo_url(photo, format: :json)
