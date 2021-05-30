module Types
  class PhotoType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: true
    field :image_url, String, null: true
    field :description, String, null: true
    field :category, Types::PhotoCategoryEnum, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :tags, [Types::TagType], null: true
  end
end
