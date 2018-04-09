(function($) {
  // Dynamically get responsive navigation bar offset.
  var $navbar = $("#navbar_main");
  var navbarOffset = $navbar.innerHeight();
  var mobileMenu = $("#mobile_menu");
  var mobileSearch = $("#mobile_search");
  var topBarToggler = $("#top_bar_toggler");
  var topBarSearchIcon = $("#top_bar_search");
  var topBarCloseIcon = $("#top_bar_close");

  function closeMobileMenu() {
    mobileMenu.hide();
    mobileSearch.hide();
    topBarSearchIcon.show();
    topBarToggler.show();
    topBarCloseIcon.hide();
  }

  // Smooth scrolling using jQuery easing
  $(".top_bar__menu-link, .mobile_menu__link").click(function() {
    var href = $(this).attr("href");
    var isSectionAnchor = href.startsWith("#") && href.length > 1;
    if (!isSectionAnchor) return true;

    closeMobileMenu();

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

  topBarToggler.on("click", function() {
    topBarToggler.hide();
    topBarSearchIcon.hide();
    topBarCloseIcon.show();
    mobileMenu.animate({ height: "toggle" }, 300);
  });

  topBarSearchIcon.on("click", function() {
    // Show the mobile search
    topBarToggler.hide();
    topBarSearchIcon.hide();
    topBarCloseIcon.show();
    mobileSearch.animate({ height: "toggle" }, 300, function() {
      mobileSearch.find("input").focus();
    });
  });

  topBarCloseIcon.on("click", function() {
    topBarSearchIcon.show();
    topBarToggler.show();
    topBarCloseIcon.hide();

    if (mobileSearch.is(":visible")) {
      mobileSearch.animate({ height: "toggle" }, 300);
    } else {
      mobileMenu.animate({ height: "toggle" }, 300);
    }
  });

  $("body").on("scroll", closeMobileMenu);

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
