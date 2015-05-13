Rails.application.routes.draw do
  resources :shoes

  root 'shoes#index'

end
