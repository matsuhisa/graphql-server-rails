module Types
  class PhotoType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: true
    field :image_url, String, null: true
    field :description, String, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :category, Integer, null: true
    field :tags, [Types::TagType], null: true
    field :tag_ids, [Integer], null: true
  end
end
