$('.banner').slick({
  
    slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  });


  $('.slider__col1-fa').slick({
   
    slidesToShow: 3 ,
  slidesToScroll: 1,
  speed:300,
  prevArrow: '<button class="slick-prev slick-prev-col2" ></button>',
  nextArrow: '<button class="slick-next slick-next-col2" ></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });