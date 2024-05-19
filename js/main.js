//loader
$(function() {
  $('.loader-container').fadeOut();
})

// sidebar menu toggle
$(document).on('click', '#sidebar_toggler', function() {
  $('.sidebar-wrapper').addClass('sidebar-show');
  $('body').addClass('overBody__hidden');
   $('.mob-overlay').addClass('active');
});

$(document).on('click', '#burgerBtn', function() {
  $('.sidebar-wrapper').removeClass('sidebar-show');
  $('body').removeClass('overBody__hidden');
  $('.mob-overlay').removeClass('active');
});

$(document).on('click', '.mob-overlay', function() {
  $('.sidebar-wrapper').removeClass('sidebar-show');
  $('body').removeClass('overBody__hidden');
  $('.mob-overlay').removeClass('active');
});

// scroll top button
$(function () {

  var scrollButton = $('.go-top');

  $(window).scroll(function () {

    if($(window).scrollTop() >= 500) {
      scrollButton.show();
    }else {
      scrollButton.hide();
    }
  });

  scrollButton.click(function () {
    $('html, body').animate({scrollTop: 0});
  })
});

// faqs
$(document).on('click', '.faqs__title', function() {
  $(this).parent('.faqs__card').toggleClass('active_faq');
  $(this).parent('.faqs__card').siblings('.faqs__card').removeClass('active_faq');
  $(this).find('.plus__icon i').toggleClass('fa-chevron-up fa-chevron-down');
  $(this).parent('.faqs__card').siblings('.faqs__card').find('.plus__icon i').addClass('fa-chevron-down').removeClass('fa-chevron-up');
});

// category nice select
$(document).ready(function() {
  $('select.nice-select').niceSelect();
});

// testimonials slider
$(function(){
  
  var is_rtl = $("html[lang='ar']").length > 0;
    
  $('.testimonials__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    rtl: is_rtl,
    dots: true,
    arrows: false,
    loop: true,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 2000,
    responsive: [{

      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }

    }, {

      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }

    }, {

      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }

    }
  ]
  });
});

// clients slider
$(function(){
  
  var is_rtl = $("html[lang='ar']").length > 0;
    
  $('.clients__slider').slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    rtl: is_rtl,
    dots: false,
    arrows: false,
    loop: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [{

      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      }

    }, {

      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        arrows: false,
      }

    }, {

      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        arrows: false,
      }

    }
  ]
  });
});

// testimonials slider
$(function(){
  
  var is_rtl = $("html[lang='ar']").length > 0;
    
  $('.gallEvents__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: is_rtl,
    dots: false,
    arrows: true,
    loop: true,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 2000,
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-left"></i></button>',
  	prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-right"></i></button>',
    responsive: [{

      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }

    }, {

      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        arrows: false,
      }

    }, {

      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }

    }
  ]
  });
});