$(function () {
    /* expandable navbar-dropdown items */
    function mobile_expandable_menu() {
        if ($(window).width() < 768) {
            $('.navbar-link').next('.navbar-dropdown').hide();
            $('.navbar-link').on('click', function () {
                $(this).next('.navbar-dropdown').slideToggle();
            });
        } else {
            $('.navbar-link').next('.navbar-dropdown').css('display', '');
            $('.navbar-link').unbind('click');
        }
    }
    var screen_resize_timout;
    $(window).on("resize", function (e) {
        clearTimeout(screen_resize_timout);
        screen_resize_timout = setTimeout(mobile_expandable_menu, 100000);
    });
    mobile_expandable_menu();
});
