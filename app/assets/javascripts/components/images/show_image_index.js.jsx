var ShowImageIndex = React.createClass({
  getInitialState: function () {
    return ( { mainImageIdx: 0 });
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState( {mainImageIdx: 0} );
  },


  verifyActiveThumb: function () {
    return this.props.images.map(function (thumb, i) {
      var klass = "button-thumb";
      if (i === this.state.mainImageIdx) {
        klass += " rt-thumb-hover";
      }
      return (
        <button key={thumb.id} className={klass}>
          <ImageThumb hov={this.handleMouseEnter.bind(this, thumb)} thumb={thumb} />
        </button>
        );
    }, this);
  },

  handleMouseEnter: function (thumb, e) {
    var thumbIdx = this.props.images.indexOf(thumb);
    if (thumbIdx !== this.state.mainImageIdx) {
      this.setState({ mainImageIdx: thumbIdx });
    }

  },

  render: function () {
    thumbnails = <button className="button-thumb rt-thumb-hover"><img className="alt-thumb-image" src={appImages.loadingGif} /></button>;

    if (this.props.images) {
      thumbnails = this.verifyActiveThumb();
    }

    return(
        <div className="product-image-wrapper">
          <div className="alt-images">
            {thumbnails}
          </div>
          <div className="landing-image-wrapper">
            <div className="new-wrapper">
              <figure className="zoom-modal-image">
                <img src={this.props.images[this.state.mainImageIdx].url} className="landing-image" />
              </figure>
            </div>
          </div>
        </div>
    );
  },


});
