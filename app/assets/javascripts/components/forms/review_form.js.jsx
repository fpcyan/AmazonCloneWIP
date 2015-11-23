var ReviewForm = React.createClass({

  render: function () {

    return (
      <div className="review-form-inner-box">
        <button className="review-form-toggle">
          <h2 className="review-header">Write a Review</h2>

          <form className="review-form">
            <input className="review-score">
              <div className="review-sprite"></div>
              <div className="review-sprite"></div>
              <div className="review-sprite"></div>
              <div className="review-sprite"></div>
              <div className="review-sprite"></div>
            </input>

            <div className="textarea-toggle">
              <label className="write-review-label">
                Write a Review.
                <textarea className="review-form-textarea"
                  placeholder="Write your review here."></textarea>
              </label>
              <button className="review-form-submit">Submit</button>
            </div>

          </form>
        </button>

      </div>
    );

  }

});
