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
  let con1List = $(".con1 ul").offset().top - 400;
  let con2 = $(".con2").offset().top - 100;
  let con3 = $(".con3").offset().top - 500;

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    $("header").addClass("on");
    if (scroll <= title) {
      $("header").removeClass("on");
    }
    if (scroll >= con1) {
      $(".con1").addClass("on");
    }
    if (scroll >= con1List) {
      $(".con1 li").addClass("on");
    }

    if (scroll >= con2) {
      $(".con2").addClass("on");
    }
    if (scroll >= con3) {
      $(".con3").addClass("on");
      $(".con3 .line i").each(function (index) {
        $(this)
          .delay(index * 100)
          .queue(function (next) {
            $(this).addClass("on");
            next();
          });
      });
      $(".con3 .line span").each(function (index) {
        $(this)
          .delay(index * 100)
          .queue(function (next) {
            $(this).addClass("on");
            next();
          });
      });
    }
  });
});
