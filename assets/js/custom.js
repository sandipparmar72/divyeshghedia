// Shrink header once the page scrolls away from the top
$(function () {
  var $header = $('.header-main');
  if (!$header.length) {
    return;
  }

  function toggleHeaderShrink() {
    var scrolled = $(window).scrollTop() > 0;
    $header.toggleClass('shrink', scrolled);
  }

  toggleHeaderShrink(); // set initial state on load
  $(window).on('scroll', toggleHeaderShrink);
});

$('.mobile-toggle-link').on('click', function () {
  $('#nav-menu').slideToggle();
});

$('.service-enhanced').on('click', function () {

  if ($(window).width() <= 991) {

    const $currentImages = $(this).find('.service-images');

    // Close others
    $('.service-images').not($currentImages).slideUp();

    // Toggle current
    if ($currentImages.is(':visible')) {
      $currentImages.slideUp();
    } else {
      $currentImages
        .css('display', 'flex') // force flex
        .hide()
        .slideDown();
    }
  }
});

