# Phase 1: User Authentication, Note Model and JSON API

## Rails
### Models
* User
* Products
* Product Categories
* Departments
* Shopping Cart

### Controllers
* UsersController (create, new)
* SessionsController (create, new, destroy)
* Api::ProductsController (index, show)
  - Api::ShoppingCartsController (create, destroy, index, update)


### Views

* users/new.html.erb
* session/new.html.erb
* static_pages/root.html.erb

* products/index.json.jbuilder
* products/show.json.jbuilder
* shopping_cart/index.json.jbuilder

## Flux
### Views (React Components)

### Stores

### Actions

### ApiUtil

## Gems/Libraries
* BCrypt
