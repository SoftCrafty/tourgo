(function ($) {
  "use strict";

  $(document).ready(function () {

   

    //Tourgo =================================================

    // Responsive sidebar menu and sticky menu show hide
    
      // Function to manage sticky class based on scroll position
      function handleSticky() {
        if ($(window).scrollTop() > 100 && !$(".main-menu").hasClass("show")) {
          $("body").addClass("sticky");
        } else {
          $("body").removeClass("sticky");
        }
      }
    
      // Initial check when page loads
      handleSticky();
    
      // Scroll event to manage sticky class dynamically
      $(window).scroll(function () {
        handleSticky();
      });
    
      // Show sidebar menu on menu button click
      $(".menu-btn").click(function () {
        $(".main-menu").addClass("show");
        $(".sidebar").addClass("show");
    
        if ($(window).width() <= 991 && $(window).scrollTop() > 100) {
          $("body").removeClass("sticky");
      } else if ($(window).scrollTop() > 100) {
          $("body").addClass("sticky");
      } else {
          $("body").removeClass("sticky"); // Remove sticky when scrollTop is 0
      }
      
        // Remove 'sticky' class when menu is shown
       // $("body").removeClass("sticky");
      });
    
      // Hide sidebar menu on close button click
      $(".close-btn").click(function () {
        $(".main-menu").removeClass("show");
        $(".sidebar").removeClass("show");
    
        // Re-add 'sticky' class only if scrolled past 100px
        handleSticky();
      });
    
      // TOUR GO =

      // h1 banner btn-group active class
      $('.banner-btn-group button').click(function(){
        $('.banner-btn-group button').removeClass('active');
        $(this).addClass('active');
      })

      // home 1 explore dreamland slider
      const exploreDreamland = new Swiper('.explore-dreamland-swiper-slider', {
        loop: true, 
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        spaceBetween: 24,
        slidesPerView: 4, 
        
        speed: 1500,
        pagination: {
          el: ".swiper-indicator",
          clickable: true,
        },
        navigation: {
          nextEl: ".right-slide",
          prevEl: ".left-slide",
        },
        breakpoints: {
          0: {
              slidesPerView: 1,
              spaceBetween: 15,
          },
          480: {
              centeredSlides: true,
              spaceBetween: 15,
              slidesPerView: 1.5,
          },
          768: {
              spaceBetween: 15,
              slidesPerView: 2.5,
          },
          992: {
              slidesPerView: 3,
              spaceBetween: 20,
          },
          1400: {
              slidesPerView: 4,
              spaceBetween: 24,
          }
        },
      });
    
      // home 1 testimonial slider
      const testimonialSlider = new Swiper('.h1-testimonial-slider', {
        loop: true, 
        autoplay: true,
        freeMode: true,
        spaceBetween: 24,
        slidesPerView: 3, 
        pagination: {
          el: ".swiper-indicator",
          clickable: true,
        },
        navigation: {
          nextEl: ".right-t-slide",
          prevEl: ".left-t-slide",
        },
        breakpoints: {
          0: {
              slidesPerView: 1,
              spaceBetween: 15,
          },
          480: {
              centeredSlides: true,
              spaceBetween: 15,
              slidesPerView: 1.5,
          },
          768: {
              spaceBetween: 15,
              slidesPerView: 2,
          },
          992: {
              slidesPerView: 3,
              spaceBetween: 20,
              centeredSlides: true,
          },
          1400: {
              slidesPerView: 3,
              spaceBetween: 24,
          }
        },
      });

      // home 2 testimonial slider
      const h2testimonialSlider = new Swiper('.testimonial-2__slider', {
        loop: true, 
        autoplay: true,
        freeMode: true,
        spaceBetween: 24,
        slidesPerView: 2, 
       
        navigation: {
          nextEl: ".right__slide",
          prevEl: ".left__slide",
        },
        breakpoints: {
          0: {
              slidesPerView: 1,
              spaceBetween: 15,
          },
          480: {
            spaceBetween: 15,
            slidesPerView: 1.5,
            centeredSlides: true,
          },
          768: {
              spaceBetween: 15,
              slidesPerView: 1.5,
              centeredSlides: true,
          },
          992: {
              slidesPerView: 2,
              spaceBetween: 20,
          },
          1400: {
              slidesPerView: 2,
              spaceBetween: 24,
          }
        },
      });
      
      // home 2 team-member-slider
      const teamSlider = new Swiper('.team-member-slider', {
        loop: true, 
        autoplay: true,
       // freeMode: true,
        spaceBetween: 15,
        slidesPerView: 4, 
        pagination: {
          el: ".h2-team-controller",
          clickable: true,
          bulletClass: "team-member-bullet",
          bulletActiveClass: "active",
          renderBullet: function (index, className) {
              return '<span class="' + className + '">' + '<i class="fa-solid fa-circle"></i>' + '</span>';
          },
        },
        navigation: {
          nextEl: ".right__slide-team",
          prevEl: ".left__slide-team",
        },
       
        breakpoints: {
          0: {
              slidesPerView: 1,
              spaceBetween: 15,
          },
          480: {
              centeredSlides: true,
              spaceBetween: 15,
              slidesPerView: 1.5,
          },
          768: {
              spaceBetween: 15,
              slidesPerView: 2,
          },
          992: {
              slidesPerView: 3,
              spaceBetween: 20,
              centeredSlides: true,
          },
          1400: {
              slidesPerView: 4,
              spaceBetween: 15,
          }
        },
      });
      
      // home 2 blog slider
      const h2BlogSlider = new Swiper('.h2-blog-slider', {
        loop: true, 
        autoplay: true,
        spaceBetween: 24,
        slidesPerView: 2, 
        pagination: {
          el: ".swiper-indicator",
          clickable: true,
        },
        navigation: {
          nextEl: ".next-slide",
          prevEl: ".prev-slide",
        },
        breakpoints: {
          0: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
          577: {
            slidesPerView: 1.5,
            centeredSlides: true,
          },
          768: {
              spaceBetween: 15,
              slidesPerView: 2,
          },
          992: {
              slidesPerView: 2,
              spaceBetween: 20,
          },
        },
      });

// noUi slider plugin for price and day filter

let keypressSliders = document.querySelectorAll(".slider-priceFilter");
let daySliders = document.querySelectorAll(".slider-dayFilter");

      //price filter
    keypressSliders.forEach(function (keypressSlider, index) {
        let input0 = keypressSlider.parentElement.querySelector(".input-with-keypress-0");
        let input1 = keypressSlider.parentElement.querySelector(".input-with-keypress-1");
        let inputs = [input0, input1];

        if (keypressSlider) {
            noUiSlider.create(keypressSlider, {
                start: [450, 950],
                connect: true,
                step: 1,
                range: {
                    min: [50],
                    max: [1500]
                },
                format: {
                  to: function (value) {
                      return Math.round(value); 
                  },
                  from: function (value) {
                      return Number(value);
                  }
                }
            });

            keypressSlider.noUiSlider.on("update", function (values, handle) {
                inputs[handle].innerText = values[handle];

                function setSliderHandle(i, value) {
                    var r = [null, null];
                    r[i] = value;
                    keypressSlider.noUiSlider.set(r);
                }

                inputs.forEach(function (input, handle) {
                    input.addEventListener("change", function () {
                        setSliderHandle(handle, this.value);
                    });

                    input.addEventListener("keydown", function (e) {
                        var values = keypressSlider.noUiSlider.get();
                        var value = Number(values[handle]);
                        var steps = keypressSlider.noUiSlider.steps();
                        var step = steps[handle];
                        var position;

                        switch (e.which) {
                            case 13:
                                setSliderHandle(handle, this.value);
                                break;

                            case 38:
                                position = step[1];
                                if (position === false) {
                                    position = 1;
                                }
                                if (position !== null) {
                                    setSliderHandle(handle, value + position);
                                }
                                break;

                            case 40:
                                position = step[0];
                                if (position === false) {
                                    position = 1;
                                }
                                if (position !== null) {
                                    setSliderHandle(handle, value - position);
                                }
                                break;
                        }
                    });
                });
            });
        }
    });

    // day filter
    daySliders.forEach(function (keypressSlider, index) {
        let input0 = keypressSlider.parentElement.querySelector(".input-with-keypress-0");
        let input1 = keypressSlider.parentElement.querySelector(".input-with-keypress-1");
        let inputs = [input0, input1];

        if (keypressSlider) {
            noUiSlider.create(keypressSlider, {
                start: [0, 5],
                connect: true,
                step: 1,
                range: {
                    min: [0],
                    max: [8]
                },
                format: {
                  to: function (value) {
                      return Math.round(value); 
                  },
                  from: function (value) {
                      return Number(value);
                  }
                }
            });

            keypressSlider.noUiSlider.on("update", function (values, handle) {
                inputs[handle].innerText = values[handle];

                function setSliderHandle(i, value) {
                    var r = [null, null];
                    r[i] = value;
                    keypressSlider.noUiSlider.set(r);
                }

                inputs.forEach(function (input, handle) {
                    input.addEventListener("change", function () {
                        setSliderHandle(handle, this.value);
                    });

                    input.addEventListener("keydown", function (e) {
                        var values = keypressSlider.noUiSlider.get();
                        var value = Number(values[handle]);
                        var steps = keypressSlider.noUiSlider.steps();
                        var step = steps[handle];
                        var position;

                        switch (e.which) {
                            case 13:
                                setSliderHandle(handle, this.value);
                                break;

                            case 38:
                                position = step[1];
                                if (position === false) {
                                    position = 1;
                                }
                                if (position !== null) {
                                    setSliderHandle(handle, value + position);
                                }
                                break;

                            case 40:
                                position = step[0];
                                if (position === false) {
                                    position = 1;
                                }
                                if (position !== null) {
                                    setSliderHandle(handle, value - position);
                                }
                                break;
                        }
                    });
                });
            });
        }
    });

















    
    // slick slider testimonial =============
    $(document).ready(function () {

      

      $('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        asNavFor: '.testimonial-authors-slider'
      });


      $('.testimonial-authors-slider').slick({
        centerMode: true,
        centerPadding: '4px',
        slidesToShow: 3,
        focusOnSelect: true, 
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        asNavFor: '.testimonial-slider',
        infinite: true,
      });
    });
 
 
    const homeSlider = new Swiper('.home-1-blog-slider', {
      loop: true, 
      autoplay: true,
      freeMode: true,
      spaceBetween: 24,
      slidesPerView: 3, 
      breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        480: {
            centeredSlides: true,
            spaceBetween: 15,
            slidesPerView: 1.5,
        },
        768: {
            spaceBetween: 15,
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 24,
        }
      },
    });
    
    const slideCarousel = new Swiper('.slide-carousel-wrapper', {
      loop: true, 
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
      freeMode: true,
      spaceBetween: 15,
      speed: 2000,
      slidesPerView: 5, 
      breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 5,
          
        },
        480: {
            
            spaceBetween: 10,
            slidesPerView: 1.5
        },
        576: {
            
            spaceBetween: 10,
            slidesPerView: 2
        },
        768: {
            spaceBetween: 15,
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4 ,
            spaceBetween: 15,
        },
        1400: {
            slidesPerView: 6,
            spaceBetween: 24,
        }
      },
    });
    // Variable to track manual stopping
      let isPaused = false;

      // Pause on hover
      $(".slide-carousel-wrapper").hover(
        function () {
            slideCarousel.autoplay.stop();
            isPaused = true;
        },
        function () {
            isPaused = false;
            // Restart autoplay with a small delay to prevent issues
            setTimeout(() => {
                if (!isPaused) slideCarousel.autoplay.start();
            }, 500); // Small delay ensures smooth restart
        }
      );



    // home 2 blog slider
    const h2blog = new Swiper('.home-2-blog-slider', {
      loop: true, 
      autoplay: true,
      freeMode: true,
      spaceBetween: 24,
      slidesPerView: 3, 
      breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        480: {
            centeredSlides: true,
            spaceBetween: 15,
            slidesPerView: 1.5,
        },
        768: {
            spaceBetween: 15,
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 24,
        }
      },
    });

    // h2-service slider
    const h2service = new Swiper('.h2-swiper-sevice-wrapper', {
      loop: true,
      freeMode: true,
      spaceBetween: 24,
      slidesPerView: 3, 
      breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        480: {
            centeredSlides: true,
            spaceBetween: 15,
            slidesPerView: 1.5,
        },
        768: {
            spaceBetween: 15,
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 24,
        }
      },
    });

    //h2 testimonial slider
    const h2testimonial = new Swiper('.h2-testimonial-swiper', {
      loop: true,
      freeMode: true,
      autoplay: true,
      spaceBetween: 40
    });
    //blog-details-testimonial-slider
    const blogDetailsTestimonialSlider = new Swiper('.blog-details-testimonial-slider', {
      loop: true,
      freeMode: true,
      autoplay: true,
      spaceBetween: 40
    });


  /* Counter Js ============================*/
          $(".counter").counterUp({
            delay: 10,
            time: 1500,
          });

    // veno box video player

    new VenoBox({
      selector: '.my-video-links',
    });

    // for img gallary
    new VenoBox({
      selector: '.my-image-links',
      numeration: true,
      infinigall: true,
      share: true,
      spinner: 'rotating-plane'
   });

    /*
    //         Jquery Wow Js
    //         ============================*/

              // WOW Animation
            
              new WOW().init();

              //         ============================*/
            // nice select 
    
            $('select').niceSelect();


            
    
  });



})(jQuery);
