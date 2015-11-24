var ShowProduct = React.createClass({

  getInitialState: function () {
    return ({ product: ShowStore.all() });
  },

  componentDidMount: function () {
    ApiUtil.fetchSingleProduct(this.props.params.productId);
    ShowStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    ShowStore.removeChangeListener(_onChange);
  },

  _onChange: function () {
    return this.setState({ product: ShowStore.all() });
  },

  render: function () {
    var imageIndex = <div className="loading" src={appImages.loadingGif}></div>;
    if (this.state.product.images) {
      imageIndex = <ShowImageIndex images={this.state.product.images} />;
    }
    var specs = (
      <ul className="spec-list">
        <li className="spec-item">{this.state.product.specs}</li>
      </ul>
    );
    var description = (
      <ul className="desc-list">
        <li className="desc-item">
          <p><strong className="desc-tagline">{this.state.product.description}</strong>
          </p>
        </li>
      </ul>
    );

    return(
      <main className="show-product-main">

        <section className="product-image-specs-wrapper">
          <div className="product-image-index">
            {imageIndex}
          </div>

          <div className="product-specs-wrapper">
            <h1 className="product-name">{this.state.product.product_name}</h1>
            <span className="review-summary">Placeholder text</span>

            <span className="stock">{this.state.product.stock}</span>

            { specs }

          </div>

          <div className="form-outer-box">
            <ProductMgmtForm product={this.state.product} />
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
