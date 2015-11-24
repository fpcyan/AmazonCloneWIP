var ShowImageIndex = React.createClass({
  getInitialState: function () {
    return (this.parseImages());
  },

  parseImages: function () {
    var mainImage;
    var thumbs = [];
    this.props.images.forEach(function (image) {
      if (!mainImage && image.main_image) {
        mainImage = image;
        thumbs.unshift(image);
      } else {
        thumbs.push(image);
      }
    });
    return { mainImage: mainImage, thumbs: thumbs };
  },

  handleMouseEnter: function (thumb, e) {
    if (thumb.id !== this.state.mainImage.id) {
      this.setState({ mainImage: thumb });
    }

  },

  render: function () {
    var thumbnails = this.state.thumbs.map(function (thumb) {
        var klass = "button-thumb";
        if (thumb.id === this.state.mainImage.id) {
          klass += " rt-thumb-hover";
        }
      return (
        <button key={thumb.id} className={klass}>
          <ImageThumb hov={this.handleMouseEnter.bind(this, thumb)} thumb={thumb} />
        </button>
      );
    }, this);


    return(
        <div className="product-image-wrapper">
          <div className="alt-images">
            {thumbnails}
          </div>
          <div className="landing-image-wrapper">
            <div className="new-wrapper">
              <figure className="zoom-modal-image">
                <img src={this.state.mainImage.url} className="landing-image" />
              </figure>
            </div>
          </div>
        </div>
    );
  },


});
