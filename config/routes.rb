Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  root to: "top#index"
  post "/graphql", to: "graphql#execute"

  resources :photos
  resources :users, only: %i[index]

  get '/auth/google_oauth2/callback', to: 'sessions#create'
  get '/auth/failure', to: redirect('/')
  # get '/auth/failure', to: 'sessions#failure'
  get '/signout', to: 'sessions#destroy', as: 'signout'
  resources :sessions, only: %i[new create destroy]

end
