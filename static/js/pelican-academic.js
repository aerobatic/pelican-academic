(function($) {
  // Dynamically get responsive navigation bar offset.
  let $navbar = $("#navbar_main");
  let navbarOffset = $navbar.innerHeight();

  // Smooth scrolling using jQuery easing
  $('.main-menu__link[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - navbarOffset
          },
          800
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".main-menu__link").click(function() {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  if (PAGE_CONTEXT && PAGE_CONTEXT.pageName === "index") {
    $("body").scrollspy({
      target: "#navbar_main",
      offset: navbarOffset
    });
  }

  $("#back_to_top").on("click", function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 800, function() {
      window.location.hash = "";
    });
  });
})(jQuery); // End of use strict
