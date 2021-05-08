module Types
  class MutationType < Types::BaseObject
    field :create_photo, mutation: Mutations::CreatePhoto
  end
end
