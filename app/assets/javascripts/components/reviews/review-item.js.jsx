var ReviewItem = React.createClass({

  render: function () {

    return (
      <article className="review-item">
        <a href="#" className="review-title-score">
          <div className="review-score"></div>
          <h3 className="review-title">Wow so cool</h3>
        </a>
        <small className="review-author">By Cupcake McGee on November 11, 2011</small>

        <p className="review-body"></p>
        
        <div className="review-voting">
          Was this review helpful to you?
          <button className="vote up">Yes</button>
          <button className="vote down">No</button>
        </div>
      </article>
    );
  }

});
