(()=> {
    console.log(document.images)

     'use strict';
let $ = jQuery;

    let owl = $('.owl-carousel');

     $('.owl-carousel').owlCarousel({

         loop:true,
         margin:30,

         responsive:{
             0:{
                 margin:30,
                 items:3
             },
             768:{
                 stagePadding: 0,
                 items:4
             },
             1000:{
                 stagePadding: 100,
                 items:4
             }
         }
     })

    $('.custom-next').click(function() {
        owl.trigger('next.owl.carousel');
    })
    $('.custom-prev').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    })

})();


