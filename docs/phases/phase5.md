# Phase 5: Reminders and Garbage Collection

## Rails
### Models
* Review

### Controllers
* Api::ReviewController (index, show, create, edit, update, destroy)

### Views
* reviews/index.json.jbuilder
* reviews/show.json.jbuilder

## Flux
### Views (React Components)
* Review Index
  - Review Index Item
  - Review Item Edit Form
* Review Form

* Sidebar
  - Results Suggest Index
    + Results Suggest Index Item

  - Refine By Index
    + Refine By Index Topic
      * Refine By Topic Item

### Stores
* Review
* Result Suggestion
* Common Attributes
* Filtered Attributes

### Actions
* receiveAllReviews
* receiveOneReview
* deleteReview

* receiveResultSuggestions

* receiveCommonAttributes
* receiveFilteredAttributes

### ApiUtil
* fetchAllReviews
* fetchOneReview
* createReview
* updateReview
* deleteReview

* fetchBySubCategory

* fetchByAttributes

## Gems/Libraries
