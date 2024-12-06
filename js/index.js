$(function () {
  let con1 = $(".con1").offset().top - 300;
  let con2 = $(".con2").offset().top - 300;
  let con2c2 = $(".con2 .c2").offset().top - 600;
  let con3 = $(".con3").offset().top - 300;
  console.log(con1);

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    // console.log(scroll);
    if (scroll >= con1) {
      $(".con1").addClass("on");
      $(".con1 h3").addClass("on");
    }
    if (scroll >= con2) {
      $(".con2 h3").addClass("on");
      $("  .con2 .c1 .txt").addClass("on");
      $("  .con2 .c1 .txt_image").addClass("on");
    }

    if (scroll >= con2c2) {
      $("  .con2 .c2 .txt").addClass("on");
      $("  .con2 .c2 .txt_image").addClass("on");
    }
  });
});
