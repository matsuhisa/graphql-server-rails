module Types
  class MutationType < Types::BaseObject
    field :create_photo, mutation: Mutations::CreatePhoto
    field :create_tag, mutation: Mutations::CreateTag
  end
end
