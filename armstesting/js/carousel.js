(function() {

$.Carousel = function(el) {
  this.$el = $(el);

  this.pics = $(".carousel-card");
  this.picWidthArr = this.getWidths();
  this.$viewPort = $($(".carousel-viewport"));
  this.viewWidth = $(".carousel").width();

  this.anchorIdx = 0;
  this.max = this.$viewPort.width();
  this.maxDisplacement = -1 * (this.max - this.viewWidth);


  this.moveViewport(-1);
};

$.fn.carousel = function () {
  return this.each(function () {
    new $.Carousel(this);
  });
};

$.Carousel.prototype.getWidths = function () {
  var widths = [];
  this.pics.each( function() {
    widths.push($(this).width() + 10);
  });
  return widths;
};

$.Carousel.prototype.clickLeft = function (displace) {
  var offSet = 0;
  if (displace >= 0) {
    displace = 0;
    $(".slide-left").addClass("disabled");
    this.anchorIdx = 0;
  }
  if ($(".slide-right").hasClass("disabled")) {
    $(".slide-right").removeClass("disabled");
  }
  var sum = 0;
  var nextIdx = this.anchorIdx;
  // while (true) {
  //   sum += this.picWidthArr[this.anchorIdx - 1];
  //   if (sum > this.viewWidth) {
  //     this.anchorIdx = nextIdx + 1;
  //     offSet = this.viewWidth - (sum - this.picWidthArr[nextIdx]);
  //     break;
  //   }
  //   nextIdx--;
  // }
  this.$viewPort.css("left", displace - offSet);
};

$.Carousel.prototype.clickRight = function (displace) {

  if (displace <= this.maxDisplacement) {
    displace = this.maxDisplacement;
    $(".slide-right").addClass("disabled");
  }
  if ($(".slide-left").hasClass("disabled")) {
    $(".slide-left").removeClass("disabled");
  }
  var sum = 0;
  var nextIdx = this.anchorIdx;
  var offSet;
  while (true) {
    sum += this.picWidthArr[nextIdx];
    if (sum > this.viewWidth) {
      this.anchorIdx = nextIdx - 1;
      offSet = this.viewWidth - sum + this.picWidthArr[nextIdx];
      break;
    }
    nextIdx++;
  }
  this.$viewPort.css("left", displace + offSet );
};



$.Carousel.prototype.moveViewport = function (dir) {
  var positionArr = this.$viewPort.css("left").split("");
  console.log(this.$viewPort.css("left"), positionArr);
  positionArr.splice(-2);
  var currPosition = parseInt(positionArr.join(""));
  var displace = dir * this.viewWidth + currPosition;
  if (dir === -1) {
    this.clickRight(displace);
  } else if (dir === 1) {
    this.clickLeft(displace);
  }
};

})();
