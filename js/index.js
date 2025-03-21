$(function () {
  gsap.registerPlugin(ScrollTrigger);
  let upbox = document.querySelector(".visual img");
  let txt = document.querySelector(".visual h2");

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".visual",
        pin: true,
        // opacity: 0,
        scrub: 3,
        start: "top top",
        end: "bottom top",
        // markers: true,
      },
    })
    .to(txt, { opacity: "1", duration: "10" })
    .to(upbox, { scale: "0.45", duration: "10", opacity: "1" });

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

  let visual = $(".visual").offset().top;
  console.log(visual);
  let con1 = $(".con1").offset().top + 600;
  let con2 = $(".con2").offset().top + 800;
  let con2c2 = $(".con2 .c2").offset().top + 600;
  let con3 = $(".con3").offset().top + 800;
  let con4 = $(".con4").offset().top + 600;
  // console.log(con1);

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    // console.log(scroll);
    $("header").addClass("on");
    if (scroll <= visual) {
      $("header").removeClass("on");
    }
    if (scroll >= con1) {
      $(".con1").addClass("on");
      $(".con1 h3").addClass("on");
    }
    if (scroll >= con2) {
      $(".con2 h3").addClass("on");
      $(".con2 .c1 .txt").addClass("on");
      $(".con2 .c1 .txt_image").addClass("on");
    }

    if (scroll >= con2c2) {
      $(".con2 .c2 .txt").addClass("on");
      $(".con2 .c2 .txt_image").addClass("on");
    }
    if (scroll >= con3) {
      $(".con3").addClass("on");
      $(".con3 .soap_tag li").each(function (index) {
        $(this)
          .delay(index * 100)
          .queue(function (next) {
            $(this).addClass("on");
            next();
          });
      });
    }

    if (scroll >= con4) {
      $(".con4").addClass("on");
      $(".con4 ul li").each(function (index) {
        $(this)
          .delay(index * 200)
          .queue(function (next) {
            $(this).addClass("on");
            next();
          });
      });
    }
  });
});
