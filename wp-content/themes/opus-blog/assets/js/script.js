(function ($) {
    "use strict";
    //Js code for search box

    $(".first_click").on("click", function () {
        $(".search-wrapper").addClass("search_box");
        $(".search-box-text").addClass("SlideUpIn");
        $(".search-box-text").removeClass("SlideDownOut");
    });
    $(".second_click").on("click", function () {
        $(".search-wrapper").removeClass("search_box");
        $(".search-box-text").removeClass("SlideUpIn");
        $(".search-box-text").addClass("SlideDownOut");
    });

    $(window).on('scroll', function () {
        if ($(this).scrollTop > 100) {
            $('.main-navigation').addClass('affix');
        }
        else {
            $('.main-navigation').removeClass('affix');
        }
    });
    /* ========== Menu icon color ========== */
    $('.main-menu-icon').css('color', function () {
        var iconColorAttr = $(this).data('fa-color');
        return iconColorAttr;
    });
})(jQuery);