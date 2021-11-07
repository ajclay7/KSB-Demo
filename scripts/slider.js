$('.carousel').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  mobileFirst:true,
  autoplaySpeed: 2500,
  dots:false,
  arrows: false,
  responsive: [
    {
      breakpoint: 975,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '4rem',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '4rem',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
  ]
});
