(()=> {


     'use strict';
let $ = jQuery;
     $('.owl-carousel').owlCarousel({
         stagePadding: 150,
         loop:true,
         margin:75,
         nav:true,
         responsive:{
             0:{
                 items:1
             },
             600:{
                 items:3
             },
             1000:{
                 items:6
             }
         }
     })
})();
