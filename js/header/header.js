(function(){
  'use strict';
  $('.menu').on('click', 'a', function(e){
    e.preventDefault();
    //$(this).siblings().removeClass('on').find('i').toggleClass('fa-close');
  });

  $('.mobile-nav').on('click', function(e){
      $('.main-nav').slideToggle();
  });
})();
