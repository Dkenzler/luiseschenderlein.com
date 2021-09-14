var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*global $:false */
/*global window: false */
(function() {
    "use strict";


    $(function($) {


        //Detecting viewpot dimension
        var vH = $(window).height();
        var vW = $(window).width();


        //Adjusting Element Components Spacing based on detected screen resolution
        $('.fullwidth').css('width', vW);
        $('.fullheight').css('height', vH);
        $('.halfwidth').css('width', vW / 2);
        $('.halfheight').css('height', vH / 2);


        $('.innerwrap .fullwidth').css('width', vW - 80);
        $('.innerwrap .fullheight').css('height', vH - 80);
        $('.intro .fullwidth').css('width', vW - 80);
        $('.intro .fullheight').css('height', vH - 80);

        $('.fixed-sidestamp').css('width', vW / 2);
        $('.fixed-sidestamp').css('height', vH);



        //Mobile Only Navigation (multi level)
        $('ul.slimmenu').slimmenu({
            resizeWidth: '1200',
            collapserTitle: '',
            easingEffect: 'easeInOutQuint',
            animSpeed: 'medium',
        });


        //Scrolling to any section
        $(".scrollTo").on('click', function() {
            var ScrollTarget = $(this).attr('href');
            $('html,body').animate({
                    scrollTop: $(ScrollTarget).offset().top - 40
                },
                1000);
        });

        // The Main Navigation System with sub menu:

        // globals
        var vWidth = $(window).width();
        var hidden = $('.menu-panel');


        //Menu panel triggering on click
        $('#toggle-menu').on('click', function() {
            //icon animation
            $(this).toggleClass('toggle-menu-visible').toggleClass('toggle-menu-hidden');
            if (hidden.hasClass('visible')) {
                hidden.animate({
                    "left": '-' + vWidth * 1.2
                }, 1000).removeClass('visible');
                $('.toggle-menu-wrap').animate({
                    "left": '40'
                }, 1000);
            } else {
                hidden.animate({
                    "left": "0px"
                }, 1000).addClass('visible');
                $('.toggle-menu-visible').parent().animate({
                    "left": '10'
                }, 1000);
            }

        });

        //Navigation Sub Menu Triggering on hover and/or click
        $('.trigger-sub-nav a').bind("mouseenter click", function() {
            $('.sub-nav').hide();
            $('.trigger-sub-nav a').removeClass('current-main-nav');
            $(this).addClass('current-main-nav');
            $('.sub-nav-holder').show();
            var subnavIndex = $(this).attr('data-sub-nav-target');
            $('.sub-nav-' + subnavIndex).show();
        });


        //hiding sub menu on mouse enters the main navigation without a sub-nav for it
        $('.main-nav-menu li').not(".trigger-sub-nav").find('a').on('mouseenter', function() {
            $('.sub-nav-holder').fadeOut('slow');
        })



        //NEWS GRID HINT
        $('.news-item img').after("<em></em>");


        //vanillabox Lightbox
        if ($("a").hasClass("vanillabox")) {
            $('.vanillabox').vanillabox({
                type: 'image',
                repositionOnScroll: true,
                closeButton: true,
                adjustToWindow: 'both',
                loop: true
            });
        }
        if ($("a").hasClass("vanillabox-video")) {
            $('.vanillabox-video').vanillabox({
                type: 'iframe',
                preferredWidth: 500,
                preferredHeight: 281,
                repositionOnScroll: true,
                closeButton: true,
                adjustToWindow: 'both'
            });
        }
        if ($("a").hasClass("vanillabox-iframe")) {
            $('.vanillabox-iframe').vanillabox({
                type: 'iframe',
                repositionOnScroll: true,
                closeButton: true,
                adjustToWindow: 'both'
            });
        }



        //ISOTOPE GLOBALS
        var $container1 = $('.works-container');
        var $container2 = $('.news-container');
        var $container3 = $('.masonry-container');
        var tileH = $('.works-item').width();
        $('.works-item').css('height', tileH);


        //ISOTOPE INIT
        $(window).load(function() {
            $container1.isotope({
                // options
                itemSelector: '.works-item',
                layoutMode: 'masonry',
                transitionDuration: '0.8s'
            });
            $container2.isotope({
                // options
                itemSelector: '.news-item',
                layoutMode: 'masonry',
                transitionDuration: '0.8s'
            });
            $container3.isotope({
                // options
                itemSelector: '.masonry-item',
                layoutMode: 'masonry',
                transitionDuration: '0.8s'
            });
            //forcing a perfect masonry layout after initial load
            setTimeout(function() {
            $container1.isotope('layout');
            $container2.isotope('layout');
            $container3.isotope('layout');
            }, 100);
            // filtering
            $('.works-filter li a').on('click', function() {
                $('.works-filter li a').removeClass('active');
                $(this).addClass('active');

                var selector = $(this).attr('data-filter');
                $('.works-container').isotope({
                    filter: selector
                });
                return false;
            });
        });

        var tileHr;
        //Isotope ReLayout on Window Resize event.
        $(window).on('resize', function() {
            tileHr = $('.works-item').width();
            $('.works-item').css('height', tileHr);
            $container1.isotope('layout');
            $container2.isotope('layout');
            $container3.isotope('layout');
        });

        var tileHro;
        //Isotope ReLayout on device orientation changes
        window.addEventListener("orientationchange", function() {
            tileHro = $('.works-item').width();
            $('.works-item').css('height', tileHro);
            $container1.isotope('layout');
            $container2.isotope('layout');
            $container3.isotope('layout');
        }, false);


        //PRELOADER
        $('div#preloader').css('width', vW - 80);
        $('div#preloader').css('height', vH - 80);
        $('div#preloader.fluidview').css('width', vW);
        $('div#preloader.fluidview').css('height', vH);
        $('body, html').addClass('preloader-running');
        $('#mastwrap').css('visibility', 'hidden');
        $(window).load(function() {
            $("#status").fadeOut();
            $("#preloader").delay(1000).fadeOut(1000);
            $('body, html').removeClass('preloader-running');
            $('body, html').addClass('preloader-done');
            $("#mastwrap").delay(1000).css('visibility', 'visible');
        });


        //PARALLAX
        //Initialize Each Parallax Layer  
        function parallaxInit() {
            $('.parallax, .parallax-layer').each(function() {
                $(this).parallax("30%", 0.1);
            });
        }

        if (!device.tablet() && !device.mobile()) {

            //Activating Parallax effect if non-mobile device is detected
            $(window).bind('load', function() {
                parallaxInit();
            });


        } else {

            //Dectivate Parallax effect if mobile device is detected (bg image is displayed)
            $('.parallax, .parallax-layer').addClass('no-parallax');

        }

        //Carousels
        $('.showcase-carousel').owlCarousel({
            stagePadding: 0,
            loop: true,
            margin: 0,
            nav: true,
            navText: false,
            dots: false,
            mouseDrag: true,
            touchDrag: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 2
                }
            }
        })
        $('.intro09-carousel').owlCarousel({
            stagePadding: 0,
            loop: true,
            margin: 0,
            nav: true,
            navText: false,
            dots: false,
            mouseDrag: true,
            touchDrag: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })
        $('.lookbook-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            stagePadding: 0,
            navText: false,
            dots: false,
            mouseDrag: true,
            touchDrag: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })
        $('.photography-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            stagePadding: 0,
            navText: false,
            dots: false,
            mouseDrag: true,
            touchDrag: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })
        $('.project-carousel').owlCarousel({
            stagePadding: 0,
            loop: true,
            margin: 0,
            nav: true,
            navText: false,
            dots: false,
            mouseDrag: true,
            touchDrag: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })

        $('.team-carousel').owlCarousel({
            stagePadding: 0,
            loop: true,
            margin: 10,
            nav: false,
            navText: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })


        //carousel on window resize
        $(window).on('resize', function() {


            $('.team-carousel').owlCarousel({
                stagePadding: 0,
                loop: true,
                margin: 10,
                nav: false,
                navText: false,
                dots: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                }
            })
            $('.intro09-carousel').owlCarousel({
                stagePadding: 0,
                loop: true,
                margin: 0,
                nav: true,
                navText: false,
                dots: false,
                mouseDrag: true,
                touchDrag: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            })
            $('.lookbook-carousel').owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                stagePadding: 0,
                navText: false,
                dots: false,
                mouseDrag: true,
                touchDrag: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                }
            })
            $('.photography-carousel').owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                stagePadding: 0,
                navText: false,
                dots: false,
                mouseDrag: true,
                touchDrag: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                }
            })
            $('.project-carousel').owlCarousel({
                stagePadding: 0,
                loop: true,
                margin: 0,
                nav: true,
                navText: false,
                dots: false,
                mouseDrag: true,
                touchDrag: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            })


            $('.showcase-carousel').owlCarousel({
                stagePadding: 0,
                loop: true,
                margin: 0,
                nav: true,
                navText: false,
                dots: false,
                mouseDrag: true,
                touchDrag: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 2
                    }
                }
            })
        });



    });
    // $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends

}
/*
     FILE ARCHIVED ON 19:17:57 Dec 15, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:04:37 Sep 13, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 145.977
  exclusion.robots: 0.076
  exclusion.robots.policy: 0.07
  RedisCDXSource: 2.227
  esindex: 0.005
  LoadShardBlock: 126.212 (3)
  PetaboxLoader3.datanode: 139.948 (5)
  CDXLines.iter: 15.52 (3)
  load_resource: 347.948 (2)
  PetaboxLoader3.resolve: 238.011 (2)
*/