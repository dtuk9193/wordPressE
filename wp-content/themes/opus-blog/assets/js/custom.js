/* Custom JS File */
(function ($) {

    "use strict";

    jQuery(document).ready(function () {
        // Js for slider section in header
        $('.main-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.header-slider-thumbnail',
            autoplay: false,
            autoplaySpeed: 5000,
            dots: true,
            fade: true,
            prevArrow: '<button type="button" class="slick-prev"><span class="fa fa-angle-left"></span></button>',
            nextArrow: '<button type="button" class="slick-next"><span class="fa fa-angle-right"></span></button>',
            arrows: true,
            dots: true,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        dots: true,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true,
                    }
                }
            ]
        });
        $('.header-slider-thumbnail').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.main-slider',
            focusOnSelect: true,
            arrows: false
        });

        //Modern Slider

        $('.modern-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            dots: true,
            fade: true,
            prevArrow: '<button type="button" class="slick-prev"><span class="fa fa-angle-left"></span></button>',
            nextArrow: '<button type="button" class="slick-next"><span class="fa fa-angle-right"></span></button>',
            arrows: true,
            dots: true,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        dots: true,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true,
                    }
                }
            ]
        });

        //PROMO
        $('.promo-one').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                }
            ]
        });
        $('.promo-two').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                }
            ]
        });
        $('.promo-three').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                }
            ]
        });


        //slider widget
        $('.post-slider-section').slick({
            dots: false,
            prevArrow: '<button type="button" class="slick-prev"><span class="fa fa-angle-left"></span></button>',
            nextArrow: '<button type="button" class="slick-next"><span class="fa fa-angle-right"></span></button>',
        });

        // Js for post fomat gallery section in header
        $('.gallery-post-format-section').slick({
            prevArrow: '<button type="button" class="slick-prev"><span class="fa fa-angle-left"></span></button>',
            nextArrow: '<button type="button" class="slick-next"><span class="fa fa-angle-right"></span></button>',
        });


        $('.one-column .related-slide').slick({
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false,
            prevArrow: '<button type="button" class="slick-prev"><span class="fa fa-angle-left"></span></button>',
            nextArrow: '<button type="button" class="slick-next"><span class="fa fa-angle-right"></span></button>',
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  }

                },{
                  breakpoint: 420,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                  
                }
            ]

        });
        $('.masonry-post .related-slide').slick({
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,
            prevArrow: '<button type="button" class="slick-prev"><span class="fa fa-angle-left"></span></button>',
            nextArrow: '<button type="button" class="slick-next"><span class="fa fa-angle-right"></span></button>',
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  }

                },{
                  breakpoint: 420,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                  
                }
            ]
        });

        


        // Initialize gototop for carousel
        if ($('#toTop').length > 0) {
            // Hide the toTop button when the page loads.
            $("#toTop").css("display", "none");

            // This function runs every time the user scrolls the page.
            $(window).scroll(function () {
                // Check weather the user has scrolled down (if "scrollTop()"" is more than 0)
                if ($(window).scrollTop() > 0) {
                    // If it's more than or equal to 0, show the toTop button.
                    $("#toTop").fadeIn("slow");
                }
                else {
                    // If it's less than 0 (at the top), hide the toTop button.
                    $("#toTop").fadeOut("slow");
                }
            });

            // When the user clicks the toTop button, we want the page to scroll to the top.
            jQuery("#toTop").click(function (event) {

                // Disable the default behaviour when a user clicks an empty anchor link.
                // (The page jumps to the top instead of // animating)
                event.preventDefault();
                // Animate the scrolling motion.
                jQuery("html, body").animate({
                    scrollTop: 0
                }, "slow");
            });
        }

        // From http://learn.shayhowe.com/advanced-html-css/jquery

        // Change tab class and display content
        $('.tabs-nav a').on('click', function (event) {
            event.preventDefault();

            $('.tab-active').removeClass('tab-active');
            $(this).parent().addClass('tab-active');
            $('.tab-content>div').hide();
            $($(this).attr('href')).show();
        });

        $('.tabs-nav a:first').trigger('click'); // Default

        $('#about-her').click(function(e){
            //alert('Thank you very much!');
            $('#girl-2 img').toggleClass('image-rotate');
        });

        $('#progress-btn').click(function(e){
            $('#progress1 .elementor-progress-bar').css({'width': '20%'});
            $('#progress1 .elementor-progress-percentage').html('20%');
            $('#progress2 .elementor-progress-bar').css({'width': '85%'});
            $('#progress2 .elementor-progress-percentage').html('85%');
            setTimeout(() => {
                $('#progress2 .elementor-progress-bar').css({'width': '15%'});
                $('#progress2 .elementor-progress-percentage').html('15%');
                $('#progress1 .elementor-progress-bar').css({'width': '85%'});
                $('#progress1 .elementor-progress-percentage').html('85%');
            }, 1000);
        });

    });
})(jQuery);

