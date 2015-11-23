var ShowProduct = React.createClass({

  getInitialState: function () {
    return ({ product: { product_name: "", price: 0, stock: 100, images: []} });
  },

  render: function () {
    var specs = (
      <ul className="spec-list">
        <li className="spec-item">It does not smell (placeholder)</li>
      </ul>
    );
    var description = (
      <ul className="desc-list">
        <li className="desc-item">
          <p><strong className="desc-tagline">SO GOOD</strong>
          No, really, check it out.
          </p>
        </li>
      </ul>
    );

    return(
      <main className="show-product-main">

        <section className="product-image-specs-wrapper">
          <div className="product-image-index">
            <ShowImageIndex images={this.state.product.images} />
          </div>

          <div className="product-specs-wrapper">
            <h1 className="product-name">I am a Food Product 2000 Triple X AMA{this.state.product.product_name}</h1>
            <span className="review-summary">Placeholder text</span>
            <span className="product-price-summary">
              <strong className="product-price">$153.00 {this.state.product.price}</strong>
                <strong className="free-shipping">FREE Shipping! </strong><a href="#" className="shipping-details normal-link">Details</a>
            </span>
            <span className="stock">{this.state.product.stock}</span>
            <span className="same-day-delivery"><a href="#">Time Travel Delivery</a></span>

            { specs }

          </div>

          <div className="form-outer-box">
            <ProductMgmtForm />
          </div>

        </section>

        <section className="product-description-index">
          { description }
        </section>

        <section className="review-wrapper">
            <ReviewIndex />
          <div className="form-outer-box">
            <ReviewForm />
          </div>
        </section>
      </main>
    );
  }
});
