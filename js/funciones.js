$(document).ready(function(){
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    loop:true,
    autoplay:true,
    items:1,
    autoHeight:false,
    animateOut: 'shake',
    animateIn: 'flash',
    lazyLoad: true
  });
});
