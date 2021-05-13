module Mutations
  class CreatePhoto < Mutations::BaseMutation
    field :post, Types::PhotoType, null: true
    field :result, Boolean, null: true
    field :errors, [String], null: false

    argument :title, String, required: true
    argument :image_url, String, required: true
    argument :description, String, required: false

    def resolve(**args)
      photo = Photo.create(title: args[:title], image_url: args[:image_url], description: args[:description])
      {
        post: photo,
        result: photo.valid?,
        errors: build_errors(photo)
      }
    end

    private
      def build_errors(photo)
        photo.errors.map do |attr, message|
          message = photo.errors.full_messages_for(attr.to_sym).join(',')
          context.add_error(GraphQL::ExecutionError.new(message, extensions: { code: 'PHOTO_INPUT_ERROR', attribute: attr }))
        end
      end
  end
end
