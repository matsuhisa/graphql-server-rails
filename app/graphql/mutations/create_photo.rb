module Mutations
  class CreatePhoto < Mutations::BaseMutation
    field :post, Types::PhotoType, null: true
    field :result, Boolean, null: true
    field :errors, [String], null: false

    argument :title, String, required: true
    argument :image_url, String, required: true
    argument :description, String, required: false
    argument :category, Integer, required: false

    def resolve(**args)
      photo = Photo.create(
                            title: args[:title], 
                            image_url: args[:image_url], 
                            description: args[:description],
                            category: args[:category],
                          )
      {
        post: photo,
        result: photo.valid?,
        errors: build_errors(photo)
      }
    end

    private
      def build_errors(photo)
        photo.errors.keys.map do |attr|
          message = photo.errors.full_messages_for(attr.to_sym).to_a.join(",")
          context.add_error(GraphQL::ExecutionError.new(message, extensions: { code: 'PHOTO_INPUT_ERROR', attribute: attr.to_s.camelize(:lower) }))
        end
      end
  end
end
