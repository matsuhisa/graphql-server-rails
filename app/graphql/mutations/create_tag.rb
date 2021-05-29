module Mutations
  class CreateTag < Mutations::BaseMutation
    field :post, Types::TagType, null: true
    field :result, Boolean, null: true
    field :errors, [String], null: false

    argument :label, String, required: true

    def resolve(**args)
      tag = Tag.create(label: args[:label])
      {
        post: tag,
        result: tag.valid?,
        errors: build_errors(tag)
      }
    end

    private
      def build_errors(tag)
        tag.errors.keys.map do |attr|
          message = tag.errors.full_messages_for(attr.to_sym).to_a.join(",")
          context.add_error(GraphQL::ExecutionError.new(message, extensions: { code: 'TAG_INPUT_ERROR', attribute: attr.to_s.camelize(:lower) }))
        end
      end
  end
end
