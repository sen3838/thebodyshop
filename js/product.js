$(function () {
  $(".title").addClass("on");
  let baseline = -300;
  let title = $(".title").offset().top;
  let con1 = $(".con1").offset().top + baseline;
  let con2 = $(".con2").offset().top + baseline;
  let con3 = $(".con3").offset().top;

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();

    if (scroll >= con1) {
      $(".con1").addClass("on");
    }

    if (scroll >= con2) {
      $(".con2").addClass("on");
    }
  });
});