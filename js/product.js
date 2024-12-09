$(function () {
  // 헤더 메뉴
  $("header .bar").on("click", function () {
    $("header .menu_wrap,header .menu_wrap > ul")
      .stop()
      .animate({ right: "0" });
  });

  $("header .close").on("click", function () {
    $("header .menu_wrap,header .menu_wrap > ul")
      .stop()
      .animate({ right: "-100%" });
  });

  $(".title").addClass("on");
  let baseline = -300;
  let title = $(".title").offset().top;
  let con1 = $(".con1").offset().top + baseline;
  let con2 = $(".con2").offset().top + baseline;
  let con3 = $(".con3").offset().top;

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    $("header").addClass("on");
    if (scroll <= title) {
      $("header").removeClass("on");
    }
    if (scroll >= con1) {
      $(".con1").addClass("on");
    }

    if (scroll >= con2) {
      $(".con2").addClass("on");
    }
  });
});
