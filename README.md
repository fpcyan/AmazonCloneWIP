# The Bazaar

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://the-bazaar.herokuapp.com

## Minimum Viable Product

The Bazaar is a web application clone of Amazon built using Ruby on Rails and
React.js. The Bazaar offers users the ability to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
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

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Product and Shopping Cart Model, and JSON API (1 days)

I will begin implementation with user sign up and authentication. Signing up or signing in will redirect to a customized version of the home page as a landing page. The home page will act as the container for the application's root React components, particularly browsing products. After authentication and models, I will implement a full JSON API for Products.

[Details][phase-one]

### Phase 2: Flux Architecture, Product views, and Shopping CRUD (2.5 days)

The second phase will start with setting up Flux architecture for the main application. Next, React Router and View structure will be made for the basic app use flow. A Product Store will be implemented with appropriate actions for Searching for products and viewing multiple products or a single product. A Shopping Cart Store will be implemented with functionality corresponding to shopping:

  - [ ] Clicking to add to cart.         (C)
  - [ ] Viewing products in the cart.    (R)
  - [ ] Changing # of products to buy.   (U)
  - [ ] Removing products from the cart. (D)

During this phase, React Views `ProductsIndex` and `Product` will be made for products. I will also make a `ShoppingCartIndex` view which includes the `ShoppingCartForm` component. Each will have the necessary components so that by the end of Phase 2, Users will be able to do basic browsing of Products and the CRUD actions for the Shopping Cart. The Shopping Cart should save to the database when products are added, updated, or removed. Finally, basic styling will be done with CSS.

[Details][phase-two]

### Phase 3: The Purchasing Cycle (2 days)

In Phase 3, I will tackle User purchasing of products. The functionality will be based on the principles of CRUD:

  - [ ] Create an Order by 'Proceeding to Checkout' (C)
    - [ ] Adding a new Shipping Address or choosing from previous ones
    - [ ] Choosing shipping speed
    - [ ] Adding payment information or choosing from previous information <sup>1</sup>

  - [ ] Review an Order before finalizing (R)
  - [ ] Updating quantities of products or contents of the order (U)
  - [ ] Deleting an order entirely (D)
  - [ ] Final confirmation of an Order
  - [ ] Redirect to the home page on success.

  - [ ] Purchase History page where a User can process Refunds.

  Models, JSON API, and React Views will be created for `ShippingAddresses`, `Payments`, `OrderConfirmation`, and `PurchaseHistory`. Each React View will also include requisite form components. However, before implementing React Views, the Flux architecture will once again be fleshed out to manage to the new components for my web application. Finally, basic CSS styling will be applied.

[Details][phase-three]

### Phase 4: The Search Bar and User Account Page (1 day)

Phase 4 will be dedicated to adding a search bar during shopping. Search will look for products and offer suggestions in departments or alone. The Flux Architecture and React Views will be built out for this, and include the Store and Actions necessary to make view components `SearchBar`, `SearchForm`, `SearchIndex`, `SearchIndex ItemByDepartment`, and `SearchIndexItem`.

The User Account Page will be fleshed out to include links to their Purchase History, Wish List (Products saved for later) (With Flux Architecture and React Views such as `WishListIndex` and `WishListIndexItems`), and basic account settings (`AccountSettingIndex`, `AccountSettingIndexItem`, `AccountSettingForm`).

Access to the Search Bar, Account, Wish List, and Cart will be available from a top-anchored navigation bar.

[Details][phase-four]

### Phase 5: Filtering Purchases During Browsing and Leaving Reviews (1 day)

Phase 5 introduces two new features. During shopping, users may filter purchases according to semantic criterion which become more specific as products become more specific. For example, initial filtering may begin with including out of stock items, filtering by review score or by price. More specific sets of products will also filter by common features that vary from product to product, such as Hard Drive capacity, weight, sizes produced, brand name, and so on. The second feature to be added will be the ability for signed in users to leave reviews on products and vote other reviews as 'helpful' or 'unhelpful'. Finally, additional styling will be done for product pages.

[Details][phase-five]

### Phase 6: Styling and Cleanup (1 day)

Phase 6 will be used to add polish to styling elements and make some elements into modals (such as drop down menus in the Nav bar and loading some loading animations)

### Bonus Features (TBD)
- [ ] Prettify transitions
- [ ] Pagination of Products Index
- [ ] "Today's Deals" and other flavor pages
- [ ] "Items you viewed" sidescroll bar
- [ ] Basic Product Advertising API Features (Bonus Points: Conveniently modular implementation!)

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md


#### Notes

<sup>1<sup> Secure implementation of Payments will involve processing all information over https, and saving it to the database ass a digest that is hashed and salted. *However*, this web application is not intended for consumer use, and therefore neither complies with all security standards for a real transaction, nor tries to complete one with credit card merchants. For the purposes of showing a functioning work flow, we play pretend for this part of the workflow. In a business-ready app, payment information and auth would go through a third party such as Stripe or Google Checkout.
