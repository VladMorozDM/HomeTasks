(()=> {
     'use strict';
let $ = jQuery;
// -------------------------------OWL CAROUSEL------------------------
    let owl = $('.owl-carousel');

     $('.owl-carousel').owlCarousel({

         loop:true,
         margin:30,

         responsive:{
             0:{
                 margin:30,
                 items:2
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

    // -------------------------------OWL CAROUSEL------------------------
    // -------------------------------ACCORDION---------------------------
    $( ".accordion" ).accordion({
        active: "none",
        collapsible: true,
        heightStyle: "none"
        });

    $('.ui-accordion .ui-accordion-header .ui-accordion-header-icon').css({
        "left": "11.5em"
    });

    let changeHeight = document.getElementById('select-top');
    let changeHeightIphone = document.getElementById('select-top-iphone');
    let changePosition = document.getElementById('select-cart');
    // console.log(changeHeight);
    let counter = 0;
    changeHeight.addEventListener('click', function(){

        if (!counter) {
            changePosition.style.height = '86px';
            changePosition.style.position = 'relative';
            changePosition.style.top = '0';
            counter++;
        } else {
            console.log(changePosition.style.height);
            changePosition.style.height = '40px';
            console.log(changePosition.style.height);
            changePosition.style.position = 'static';
            counter = 0;

        }


    });

    // -------------------------------ACCORDION---------------------------
})();


