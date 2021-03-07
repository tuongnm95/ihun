$(document).ready(function () {
  runnCarousel('.js-carousel');
  function runnCarousel(holder) {
    var $carouselIcons = [
      '<img src="images/icon-prev.svg">',
      '<img src="images/icon-next.svg">',
    ];

    var $carousel = $(holder);
    if (!$().owlCarousel) {
      return true;
    }
    if ($carousel.length > 0) {
      $carousel.each(function () {
        var elem = $(this),
          carouselNav = elem.attr("data-arrows"),
          touchDrag = elem.attr("data-touch"),
          carouselDots = elem.attr("data-dots") || true,
          carouseldotsData = elem.attr("data-dotsData") || false,
          carouselAutoPlay = elem.attr("data-autoplay") || false,
          carouselAutoplayTimeout = elem.attr("data-autoplay-timeout") || 3000,
          carouselAutoWidth = elem.attr("data-auto-width") || false,
          resizeHeight = elem.attr("auto-height") || false,
          carouseAnimateIn = elem.attr("data-animate-in") || false,
          carouseAnimateOut = elem.attr("data-animate-out") || false,
          carouselLoop = elem.attr("data-loop") || false,
          carouselMargin = elem.attr("data-margin") || 0,
          carouselVideo = elem.attr("data-video") || false,
          carouselItems = elem.attr("data-items") || 4,
          carouselSlideBy = elem.attr("data-slideBy") || 1,
          centerMode = elem.attr("data-center") || false,
          carouselItemsLg = elem.attr("data-items-lg") || Number(carouselItems),
          carouselItemsMd = elem.attr("data-items-md") || Number(carouselItemsLg),
          carouselItemsSm = elem.attr("data-items-sm") || Number(carouselItemsMd),
          carouselItemsXs = elem.attr("data-items-xs") || Number(carouselItemsSm),
          carouselItemsXxs = elem.attr("data-items-xxs") || Number(carouselItemsXs);
        if (carouselItemsMd >= 3) {
          var carouselItemsSm = elem.attr("data-items-sm") || Number(2);
        }
        if (carouselItemsSm >= 2) {
          var carouselItemsXs = elem.attr("data-items-xs") || Number(2);
        }
        if (carouselItemsXs >= 1) {
          var carouselItemsXxs = elem.attr("data-items-xxs") || Number(1);
        }
        if (carouselNav == "false") {
          carouselNav = false;
        } else {
          carouselNav = true;
        }
        if (carouselDots == "false") {
          carouselDots = false;
        } else {
          carouselDots = true;
        }
        if (carouseldotsData == "true") {
          carouseldotsData = true;
        } else {
          carouseldotsData = false;
        }
        if (carouselAutoPlay == "false") {
          carouselAutoPlay = false;
        }
        var t = setTimeout(function () {
          elem.owlCarousel({
            nav: carouselNav,
            dots: carouselDots,
            dotsData: carouseldotsData,
            thumbs: true,
            thumbsPrerendered: true,
            navText: $carouselIcons,
            autoplay: carouselAutoPlay,
            autoplayTimeout: carouselAutoplayTimeout,
            autoplayHoverPause: true,
            autoWidth: carouselAutoWidth,
            autoHeight: resizeHeight,
            loop: carouselLoop,
            margin: Number(carouselMargin),
            smartSpeed: Number(800),
            video: carouselVideo,
            slideBy: Number(carouselSlideBy),
            animateIn: carouseAnimateIn,
            animateOut: carouseAnimateOut,
            video: true,
            center: centerMode,
            lazyLoad: true,
            videoWidth: true,
            videoHeight: true,
            touchDrag: touchDrag,
            mouseDrag: touchDrag,
            onInitialize: function (event) {
              // setTimeout(function () {
              elem.addClass("owl-carousel owl-theme");
              //    }, 1000);
            },
            responsive: {
              0: {
                items: Number(carouselItemsXxs),
                margin: 20,
              },
              480: {
                items: Number(carouselItemsXs),
                margin: 20,
              },
              768: {
                items: Number(carouselItemsSm),
                margin: 20,
              },
              992: {
                items: Number(carouselItemsMd),
                margin: 30,
              },
              1200: {
                items: Number(carouselItemsLg),
                margin: 30,
              },
            },
          });
        }, 0);
      });
    }
  }

  function syncOwl(slider_1, slider_2) {
    var sync1 = $(slider_1);
    var sync2 = $(slider_2);

    var thumbnailItemClass = ".owl-item";

    var slides = sync1
      .owlCarousel({
        autoplayHoverPause: true,
        video: true,
        startPosition: 12,
        items: 1,
        loop: true,
        margin: 10,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplayHoverPause: false,
        nav: false,
        dots: false,
      })
      .on("changed.owl.carousel", syncPosition);

    function syncPosition(el) {
      $owl_slider = $(this).data("owl.carousel");
      var loop = $owl_slider.options.loop;

      if (loop) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
        if (current < 0) {
          current = count;
        }
        if (current > count) {
          current = 0;
        }
      } else {
        var current = el.item.index;
      }

      var owl_thumbnail = sync2.data("owl.carousel");
      var itemClass = "." + owl_thumbnail.options.itemClass;

      var thumbnailCurrentItem = sync2
        .find(itemClass)
        .removeClass("synced")
        .eq(current);

      thumbnailCurrentItem.addClass("synced");

      if (!thumbnailCurrentItem.hasClass("active")) {
        var duration = 300;
        sync2.trigger("to.owl.carousel", [current, duration, true]);
      }
    }
    var thumbs = sync2
      .owlCarousel({
        autoplayHoverPause: true,
        startPosition: 12,
        items: 4,
        loop: false,
        margin: 10,
        autoplay: false,
        nav: false,
        dots: false,
        onInitialized: function (e) {
          var thumbnailCurrentItem = $(e.target).find(thumbnailItemClass).eq(this._current);
          thumbnailCurrentItem.addClass("synced");
        },
      })
      .on("click", thumbnailItemClass, function (e) {
        e.preventDefault();
        var duration = 300;
        var itemIndex = $(e.target).parents(thumbnailItemClass).index();
        sync1.trigger("to.owl.carousel", [itemIndex, duration, true]);
      })
      .on("changed.owl.carousel", function (el) {
        var number = el.item.index;
        $owl_slider = sync1.data("owl.carousel");
        $owl_slider.to(number, 100, true);
      });
  }

  function menuscroll(menuItem) {
    $(menuItem).click(function (event) {
      event.preventDefault();

      var defaultAnchorOffset = 0;

      var anchor = $(this).attr("data-id");

      $("html,body").animate({
        scrollTop: $("#" + anchor).offset().top - 130,
      },
        500
      );
    });
  }

  function backTop(btnScrollTop) {
    $(window).scroll(function () {
      var scrollTop = $(document).scrollTop();
      if (scrollTop > 200) {
        $(btnScrollTop).show("fast");
      } else {
        $(btnScrollTop).hide("fast");
      }
    });

    $(btnScrollTop).click(function (e) {
      e.preventDefault();
      $("html, body").animate({
        scrollTop: 0
      }, "slow");
    });
  }

  if ($(window).width() < 992) {
    $('.sub-menu').slideUp();
    $('.click-menuDown').click(function () {
      $(this).siblings('.sub-menu').slideToggle();
    });
    $('.bars').click(function (e) {
      e.preventDefault();
      $('.header_main, .overlay').addClass('active');
    });
    $('.overlay').click(function (e) {
      e.preventDefault();
      $('.header_main, .overlay').removeClass('active');
    });
  }

  $(window).scroll(function () {
    var heightHeader = $('header').height();
    if ($(this).scrollTop() >= heightHeader) {
      $('header').addClass('sticky');
    }
    else {
      $('header').removeClass('sticky');
    }
  });
});