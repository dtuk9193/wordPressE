(function ($) {
    "use strict";
    /* ========== Sticky on scroll ========== */
    function stickyNav() {
        var scrollTop = $(window).scrollTop(),
            noSticky = $('.no-sticky'),
            viewportSm = $('.viewport-sm'),
            viewportLg = $('.viewport-lg');
        if (scrollTop > mainHeaderHeight) {
            mainHeader.addClass('sticky');
        } else {
            mainHeader.removeClass('sticky');
        }
        noSticky.removeClass('sticky');
        viewportSm.removeClass('sticky');
    }

    /* ========== Horizontal navigation menu ========== */
    if ($('.main-header').length) {
        var mainHeader = $('.main-header'),
            mainHeaderHeight = mainHeader.height(),
            barMenu = mainHeader.find('.bar-menu'),
            mainMenuListWrapper = $('.main-menu > ul'),
            mainMenuListDropdown = $('.main-menu ul li:has(ul)');

        /* ========== Dropdown Menu Toggle ========== */
        barMenu.on("click", function () {
            $(this).toggleClass('menu-open');
            mainMenuListWrapper.slideToggle(300);
        });

        mainMenuListDropdown.each(function () {
            $(this).append('<span class="dropdown-plus"></span>');
            $(this).addClass('dropdown_menu');
        });

        $('.dropdown-plus').on("click", function () {
            $(this).prev('ul').slideToggle(300);
            $(this).toggleClass('dropdown-open');
        });

        $('.dropdown_menu a').append('<span></span>');

        /* ========== Sticky on scroll ========== */
        $(window).on("scroll", function () {
            stickyNav();
        }).scroll();

    }
})(jQuery);
