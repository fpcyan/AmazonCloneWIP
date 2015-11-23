var ReviewIndex = React.createClass({

  render: function () {

    return (
      <div className="review-index">
        <h2 className="review-header emphasis">Customer Reviews</h2>
        <figure className="review-score-breakdown">
          <span className="review-breakdown">
            <a href="#" className="normal-link" title="5 starts represent 50% of rating">
              5 star
            <div className="review-meter">
              <div className="review-meter-bar"></div>
            </div>
              50%
            </a>
          </span>
        </figure>

        <h2 className="review-header">Most Helpful Customer Reviews</h2>
        <div className="review-item-wrapper">
          <ReviewItem />
        </div>
      </div>
    );
  }

});
