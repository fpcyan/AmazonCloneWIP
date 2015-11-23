var ShowImageIndex = React.createClass({

  render: function () {
    return(
        <div className="product-image-wrapper">
          <div className="alt-images">
            <button className="button-thumb"><img src="" className="alt-thumb-image" /></button>
          </div>
          <div className="landing-image-wrapper">
            <button className="zoom-modal-image">
              <img src="" className="landing-imge" />
            </button>
          </div>
        </div>
    );
  }

});
