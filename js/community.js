$(function () {
  $(".title").addClass("on");
  let baseline = -300;
  let title = $(".title").offset().top;
  let con1 = $(".con1").offset().top - 300;
  let con2 = $(".con2").offset().top - 600;
  let con3 = $(".con3").offset().top - 600;

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();

    if (scroll >= con1) {
      $(".con1").addClass("on");
    }

    if (scroll >= con2) {
      $(".con2").addClass("on");
    }
    if (scroll >= con3) {
      $(".con3").addClass("on");
    }
  });
});
