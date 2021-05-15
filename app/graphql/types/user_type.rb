module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :authenticated_at, GraphQL::Types::ISO8601DateTime, null: true
    field :nickname, String, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
