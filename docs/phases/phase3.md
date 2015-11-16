# Phase 3: The Purchasing Cycle (2 days)Phase 3: Notebooks and Tags (2 days)

## Rails
### Models
* Shipping Addresses
* Payments
* Purchase Histories

### Controllers
* Api::ShippingAddressesController (index, show, create, destroy)
* Api::PaymentsController (index, create, destroy)
* Api::PurchaseHistoriesController (index, show, new, create)
  - member: Return

### Views
* static_pages/point_of_sale.html.erb

* shipping/index.json.jbuilder
* shipping/show.json.jbuilder
* payment/index.json.jbuilder
* purchase/new.json.jbuilder
* purchase/index.json.jbuilder
* purchase/show.json.jbuilder

## Flux
### Views (React Components)
* ShippingAddressIndex
  - ShippingAddressIndexItem
* ShippingAddressForm

* PaymentIndex
  - PaymentIndexItem
* PaymentForm

* FinalizePurchaseIndex
  - FinalizePurchaseIndexItem
  - FinalizePurchaseItemForm
* FinalizePurchaseForm

* PurchasesHistoryIndex
  - PurchaseHistoryIndexItem
* RefundForm

### Stores
* Shipping Address
* Payment
* Final Purchases (or should I just use the ShoppingCart Store?)
* Purchase History

### Actions
* receiveShippingAddresses
* deleteShippingAddress

* receivePaymentInfo
* deletePaymentInfo

* receivePurchaseHistory
* receiveRefundConfirmation (?)

### ApiUtil
* fetchShippingAddresses
* createShippingAddress
* deleteShippingAddress

* fetchPaymentInfo
* createPaymentInfo
* deletePaymentInfo

* fetchAllPastPurchases
* fetchOnePastPurchase

* sendRefundRequest

## Gems/Libraries
* openssl (for [self-signed HTTPS][https])
* BCrypt
* ActionMailer (for email confirmation)

[https]: https://blog.heroku.com/archives/2012/5/3/announcing_better_ssl_for_your_app
