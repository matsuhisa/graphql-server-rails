Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  root to: "top#index"
  post "/graphql", to: "graphql#execute"
  resources :photos
end
