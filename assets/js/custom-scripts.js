(function ($) {
  "use strict";

  $.fn.andSelf = function () {
    return this.addBack.apply(this, arguments);
  }

  $(window).on("load", function () {
    $(".section-loader").fadeOut("slow");
  });


  /*
  |====================
  | Mobile Nav trigger
  |=====================
  */

  var trigger = $('.navbar-toggler'),
    overlay = $('.overlay'),
    navc = $('.navbar-collapse'),
    active = false;


  $('.navbar-toggler, .navbar-nav li a, .overlay').on('click', function () {
    $('.navbar-toggler').toggleClass('active')
    //   $('#js-navbar-menu').toggleClass('active');
    //   $('.navbar-collapse').toggleClass('show');
    overlay.toggleClass('active');
    navc.toggleClass('active');
  });


  /*
  |=================
  | Onepage Nav
  |================
  */

  $('#mh-header').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
  });


  /*
  |===============
  | WOW ANIMATION
  |==================
  */
  var wow = new WOW({
    mobile: false  // trigger animations on mobile devices (default is true)
  });
  wow.init();

  /*
  | ==========================
  | NAV FIXED ON SCROLL
  | ==========================
  */
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".nav-scroll").addClass("nav-strict");
    } else {
      $(".nav-scroll").removeClass("nav-strict");
    }
  });


  /*
  |=================
  | Progress bar
  |================
  */
  $(".determinate").each(function () {
    var width = $(this).text();
    $(this).css("width", width)
      .empty()
      .append('<i class="fa fa-circle"></i>');
  });

  // Smooth Scroll
  $(function () {
    $('a[href*=#]:not([href=#])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 600);
          return false;
        }
      }
    });
  });


  var words = ["Programmer", "Consultant", "Author", "Technical Editor"];
  var count = 0;
  changeWord();
  setInterval(changeWord, 3000);
  function changeWord() {
    // Define the word to create
    var current_word = words[count];

    // Change the word in the HTML
    $("#rotate_word").html('<div data-wow-duration="0.8s" class="wow fadeInRight">' + current_word + '</div>');

    // Get the next word index in the array
    count++;

    // If we've reached the end of the word list, go back to the start
    if (count == words.length) { count = 0; }
  }


}(jQuery));
