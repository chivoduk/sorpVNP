window.onload = function() {


  // Toggle Mobile Nav
  (function() {
    var toggler = $(".primary-nav .nav-toggler");
    var menu = $(".primary-nav .nav-holder");
    toggler.on("click", function() {
      menu.slideToggle();
    });
  })();

// open/close blind if click
(function() {
    var blind = $('.blind_left, .blind_right, .blind_center');

    blind.on('click', function() {

        if (!$(this).hasClass('is_active')) {
          blind.removeClass('is_active')
        }
        $(this).toggleClass('is_active');
    });
}());
};
