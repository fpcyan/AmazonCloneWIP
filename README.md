# The Bazaar

[Heroku link][heroku]

[heroku]: http://the-bazaar.herokuapp.com

*Last Updated: End of Day One*

## Minimum Viable Product

The Bazaar is a web application clone of Amazon built using Ruby on Rails and
React.js. The Bazaar offers users the ability to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [x] Create an account
- [x] Log in / Log out
- [ ] Browse products for sale
- [ ] Navigate through the store for products via search or by department
- [ ] Narrow product types using filter options while browsing
- [ ] View a product's price, pictures, description, specs, and reviews
- [ ] Add products to a session-persistent cart
- [ ] Purchase products previously added to their cart
- [ ] Leave reviews for products
- [ ] Save products for purchase later
- [ ] Manage account settings
- [ ] Process returns
- [ ] Receive emails confirming purchases

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]
* [Model Associations][associations]

[view]: ./docs/views.md
[schema]: ./docs/schema.md
[associations]: ./docs/associations.png

## Implementation Timeline

### Phase 1: User Authentication, Product model and JSON API (1 days)

To kick off the project, I will  with user sign up and authentication. Signing up or signing in redirects to a customized version of the home page as a landing page. The home page acts as the container for the application's root React components, particularly for browsing products. After authentication and models, I will end Phase 1 by implementing a full JSON API for Products.

[Details][phase-one]
[Blog Post][day-one]

### Phase 1.5: Product React Views, Shopping Cart Model and JSON API (1.5 days)

Phase One Point Five was added as an organizational phase. Phase 1 and 2 were better described by 3 phases based on development-by-feature instead of development by location in the stack. Phase One Point Five will be used to implement the Product views such that the website is *navigable* from home page to a specific product. Remaining time will be used to start on the Shopping Cart back end.

[Details][phase-one-point-five]

### Phase 2: Flux Architecture, Product views, and Shopping CRUD (2 "days" (plus the weekend) )

*edit* Phase 2 has been broken up, and will now only contain Shopping Cart front end, and any remaining back end development from Phase One Point Five. The details have been updated to reflect this.

The second phase will be dedicated first to setting up Flux architecture for the main application. Next, React Router and View structure will be made for the basic app use flow. A Product Store, Api Actions, and Utility structure the data required for Searching for products, viewing multiple products, and viewing a single product. A Shopping Cart Store will be implemented with functionality for shopping before checking out. This includes:

  - [ ] Clicking to add products to cart.         (C)
  - [ ] Viewing products in the cart.             (R)
  - [ ] Changing # of products to buy.            (U)
  - [ ] Removing products from the cart.          (D)

During this phase, React Views and components will also be implemented. For example, Products need `ProductsIndex` and `Product` views. The Shopping Cart uses a `ShoppingCartIndex` view which includes the `ShoppingCartForm` component. By the end of Phase 2, Users will be able to do basic browsing of Products and add/remove them from their Shopping Cart. The Shopping Cart saves to the database when products are added, updated, or removed to allow for persistence across browser sessions. Finally, basic styling will be done with CSS.

[Details][phase-two]

### Phase 3: The Purchasing Cycle (2 days)

In Phase 3, I will tackle User purchasing of products. The functionality is based on the principles of CRUD:

  - [ ] Create an Order by 'Proceeding to Checkout'              (C)
    - [ ] Adding a new Shipping Address or choosing from previous ones
    - [ ] Choosing shipping speed
    - [ ] Adding payment information or choosing from previous information <sup>1</sup>

  - [ ] Review an Order before finalizing                        (R)
  - [ ] Updating quantities of products or contents of the order (U)
  - [ ] Deleting an order entirely                               (D)
  - [ ] Final confirmation of an Order
  - [ ] Redirect to the home page on success.

  - [ ] Purchase History page where a User can process Refunds.

  `Shipping Addresses`, `Payments`, `Order Confirmation`, and `Purchase History` require Models, JSON API, and React Views. Each React View also includes requisite form components. However, before implementing React Views, the Flux architecture once again maintains the structure to simply manage the new components for The Bazaar. Finally, basic CSS styling will be applied.

[Details][phase-three]

### Phase 4: The Search Bar and User Account Page (1.5 day)

Phase 4 will be dedicated to adding a search bar during shopping. Search looks for products and offer suggestions by department or as standalone products. The Flux Architecture and React Views that I build out for this include Store, Utilities, and Actions necessary to support view components `SearchBar`, `SearchForm`, `SearchIndex`, `SearchIndex ItemByDepartment`, and `SearchIndexItem`.

The User Account Page will be fleshed out in this phase. It includes links to a users Purchase History, Wish List (Products saved for later) (With Flux Architecture and React Views such as `WishListIndex` and `WishListIndexItems`), and basic account settings (`AccountSettingIndex`, `AccountSettingIndexItem`, `AccountSettingForm`).

Access to the Search Bar, Account, Wish List, and Cart are available from a top-anchored navigation bar.

[Details][phase-four]

### Phase 5: Filtering Purchases During Browsing and Leaving Reviews (1 day)

Phase 5 introduces two final features. During shopping, users may filter purchases according to semantic criterion which become more specific as products become more specific. For example, initial filtering may begin with including out of stock items, filtering by review score or by price. More specific sets of products will also filter by common features that vary from product to product, such as Hard Drive capacity, weight, sizes produced, brand name, and so on. The second feature to be added will be the ability for signed in users to leave reviews on products and vote other reviews as 'helpful' or 'unhelpful'. Finally, additional styling will be done for product pages.

[Details][phase-five]

### Phase 6: Styling and Cleanup (1 day)

Phase 6 will be used to add polish to styling elements and make some elements into modals (such as drop down menus in the Nav bar and loading some loading animations)

### Bonus Features (TBD)
- [ ] Prettify transitions
- [ ] Pagination of Products Index
- [ ] "Today's Deals" and other flavor pages
- [ ] "Items you viewed" side-scroll bar
- [ ] Likes and Shares on products
- [ ] Basic Product Advertising API Features (Bonus Points: Conveniently modular implementation!)

[phase-one]: ./docs/phases/phase1.md
[phase-one-point-five]: ./docs/phases/phase1_5.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md

[day-one]: http://fpcyan.tumblr.com/post/133442467860/w8d2

#### Notes

<sup>1</sup> Secure implementation of Payments will involve processing all information over https, and saving it to the database ass a digest that is hashed and salted. *However*, this web application is not intended for consumer use, and therefore neither complies with all security standards for a real transaction, nor tries to complete one with credit card merchants. For the purposes of showing a functioning work flow, we play pretend for this part of the workflow. In a business-ready app, payment information and auth would go through a third party such as Stripe or Google Checkout.
