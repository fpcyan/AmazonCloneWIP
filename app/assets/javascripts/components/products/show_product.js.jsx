var ShowProduct = React.createClass({

  getInitialState: function () {
    return ({ product: { product_name: "", price: 0, description: "", specs: [], stock: false} });
  },

  componentWillReceiveProps: function (nextProps) {
    if (this.props.params.productId !== nextProps.params.productId) {
      ApiUtil.fetchSingleProduct(nextProps.params.productId);
    }
  },

  componentDidMount: function () {

    ApiUtil.fetchSingleProduct(this.props.params.productId);
    ShowStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    ShowStore.removeChangeListener(this._onChange);
    this.setState({ product: { product_name: "", price: 0, description: "", specs: [], stock: false} });
  },

  _onChange: function () {
    return this.setState({ product: ShowStore.all() });
  },

  render: function () {
    var imageIndex = <div className="loading" src={appImages.loadingGif}></div>;
    if (this.state.product.images) {
      imageIndex = <ShowImageIndex images={this.state.product.images} location={this.props.location}/>;
    }

    var specs = (
      <ul className="spec-list">
      {
        this.state.product.specs.map(function (spec, i) {
          return <li key={i}className="spec-item">{spec}</li>;
        })
      }
      </ul>
    );
    var description = (
      <ul className="desc-list">
        <article className="desc-body">{this.state.product.description}</article>
        <li className="desc-item">
          <p><strong className="desc-tagline">Product Dimensions:</strong> 7.6 x 5 x 1.4 inches</p>
        </li>
        <li className="desc-item">
          <p><strong className="desc-tagline">Shipping Weight:</strong> 9.9 ounces</p>
        </li>
        <li className="desc-item">
          <p><strong className="desc-tagline">Date released:</strong> July 25, 2014</p>
        </li>
        <li className="desc-item">
          <p><strong className="desc-tagline">Best Sellers Rank:</strong> #923 in Jewelry</p>
        </li>
      </ul>
    );

    return(
      <main className="show-product-main">

        <section className="product-image-specs-wrapper">
          <div className="product-image-index">
            { imageIndex }
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
        <div className="divider"></div>
        <section className="product-description-index">
        <h2 className="description-header"> Product Description </h2>
          { description }
        </section>
        <div className="divider"></div>
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
