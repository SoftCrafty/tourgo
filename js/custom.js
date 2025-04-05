(function ($) {
  "use strict";

  $(document).ready(function () {

    // pre loader js
    $("body").addClass("loading"); 

    setTimeout(function () {
        $("#loading").remove(); 
        $("body").removeClass("loading"); 
    }, 2000); 

    // Responsive sidebar menu and sticky menu show hide
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
      $(".menu-btn").on('click', function () {
        $(".main-menu").addClass("show");
        $(".sidebar").addClass("show");
    
        if ($(window).width() <= 991 && $(window).scrollTop() > 100) {
          $("body").removeClass("sticky");
      } else if ($(window).scrollTop() > 100) {
          $("body").addClass("sticky");
      } else {
          $("body").removeClass("sticky"); // Remove sticky when scrollTop is 0
      }      
       
      });
    
      // Hide sidebar menu on close button click
      $(".close-btn").on('click', function () {
        $(".main-menu").removeClass("show");
        $(".sidebar").removeClass("show");    
        // Re-add 'sticky' class only if scrolled past 100px
        handleSticky();
      });

      // h1 banner btn-group active class
      $('.banner-btn-group button').on('click', function(){
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

      // slider controller active class
      $(".slider-controller button").on('click', function () {
        $(".slider-controller button").removeClass("active"); 
        $(this).addClass("active"); 
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

    // toggle password for sign in and sign up page
    $(".toggle-password").on('click', function () {
      let passwordField = $("#password"); 
      let icon = $(this).find("i");
    
      if (passwordField.attr("type") === "password") {
        passwordField.attr("type", "text");
        icon.removeClass("fa-eye-slash").addClass("fa-eye");
      } else {
        passwordField.attr("type", "password");
        icon.removeClass("fa-eye").addClass("fa-eye-slash");
      }
    });
    
   // rating star in a project details leave a Feedback section
   $(".stars-container span i").on('click', function(){
    $(this).toggleClass("active")
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

        // nice select 
        $('select').niceSelect();

        // date picker
        $( function() {
          $( "#selectDate" ).datepicker();
        });
       
        // time picker
        $('#timepicker').timepicker({
          timeFormat: 'h:mm p',
          interval: 60,
          minTime: '10',
          maxTime: '6:00pm',
          defaultTime: '11',
          startTime: '10:00',
          dynamic: false,
          dropdown: true,
          scrollbar: true
        });

        // scroll Revel
          const sr = ScrollReveal({
            origin: 'top',
            duration : 2000,
            distance: '60px',
            delay: 0,
            opacity: 0              
          })
          sr.reveal('.tour-item, .blog-item, .package-item, .destination-item, .popular-destination-item, .instagram-img, .abt-service-item ',{
            interval: 120,
            delay: 0,
            duration: 2500
          })
          sr.reveal('.about-item-2, .abt-choose-us-item, .about-item',{
            origin: 'bottom',
            interval: 300,
            duration: 2500
            
          })
          sr.reveal('.view-all, .learn-more-btn' ,{origin:'bottom', delay: 200})

          sr.reveal('.abt-choose-us-img',{
            origin: 'left',
          })
          sr.reveal('.big-item', {
            origin: 'left',
            distance: '20px'
          })
          sr.reveal('.small-item',{
            origin: 'right',
            distance: '20px'
          })

          // Adjust animations for small screens          
          if (window.innerWidth <= 992) {
            sr.reveal('.big-item, .abt-choose-us-img', {
                origin: 'top', 
                distance: "50px", 
            });
            sr.reveal('.small-item', {
                origin: 'bottom',
                distance: "50px", 
            });
          }

  });

})(jQuery);
