// general js for the project that wouldn't be a reuseable component

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > 50){
     $('.site-header').addClass('scrolled');
   }else{
     $('.site-header').removeClass('scrolled');
   }
   if (st > lastScrollTop){
     $('.site-header').addClass('hide');
   } else {
     $('.site-header').removeClass('hide');
   }
   lastScrollTop = st;
});


