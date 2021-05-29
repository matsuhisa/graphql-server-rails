module Types
  class QueryType < Types::BaseObject
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :photos, [Types::PhotoType], null: false
    def photos
      Photo.all
    end

    field :photo, Types::PhotoType, null: false do
      argument :id, Int, required: false
    end
    def photo(id:)
      Photo.find(id)
    end

    field :photos_category, [Types::PhotoType], null: false do
      argument :category, Types::PhotoCategoryEnum, required: false
    end
    def photos_category(category:)
      Photo.where(category: category)
    end

    field :me, Types::UserType, null: false
    def me
      User.find(context[:current_user].id)
    end
  end
end
