var ShowProduct = React.createClass({
  render: function () {
    var specs;
    var description;
    var reviews;

    return(
      <main className="show-product-main">

        <section className="product-image-specs-wrapper">
          <div className="product-image-index">
            <ShowImageIndex images={this.state.product.images} />
          </div>

          <div className="product-specs-wrapper">
            <h1 className="product-name">{this.state.product.product_name}</h1>
            <span className="review-summary"></span>
            <span className="product-price-summary">
              <strong className="product-price">{this.state.product.price}</strong> &
                <strong className="free-shipping">FREE Shipping. </strong>
                  <a href="#" className="shipping-link">Details</a>
            </span>
            <span className="stock">{this.state.product.stock}</span>
            <span className="same-day-delivery"></span>

            { specs }

            <div className="mgmt-box-outer">
              <ProductMgmtForm />
            </div>
          </div>

        </section>

        <section className="product-description-index">
          { description }
        </section>

        <section className="review-wrapper">
          <div className="review-index">
            { reviews }
          </div>
          <div className="review-outer-box">
            <ReviewForm />
          </div>
        </section>
      </main>
    );
  }
});
