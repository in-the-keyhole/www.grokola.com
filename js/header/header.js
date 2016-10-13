(function(){
  'use strict';
  $('.menu').on('click', 'a', function(e){
    e.preventDefault();
    //$(this).siblings().removeClass('on').find('i').toggleClass('fa-close');
  });

  $('.search-btn').on('click', function(e){
    $('.header-menu').fadeToggle().html('');
    //$(this).parents().siblings().children().removeClass('on').find('i').removeClass('fa-close').addClass('fa-navicon');
    setTimeout(function(){
        $('.header-menu').load('./templates/search.html');
    }, 400);
    $(this).find('i').toggleClass('fa-search fa-close');
    $(this).toggleClass('on');
  });

  $('.nav-btn').on('click', function(e){
    $('.header-menu').fadeToggle().html('');
    //$(this).parents().siblings().children().removeClass('on');
    setTimeout(function(){
        $('.header-menu').load('./templates/nav.html');
    }, 400);
    $(this).find('i').toggleClass('fa-navicon fa-close');
    $(this).toggleClass('on');
  });

  $('.fa-close').on('click', function(){
      $('.header-menu').html('').fadeOut();
  });

  $('.profile-btn').on('click', function(e){
    e.preventDefault();
    $('profile-container').load('./templates/profile-window.html', function(){
      $.getScript('./js/profile-popup.js')
        .done(function(script, textStatus) {
          console.log(textStatus);
        })
        .fail(function( jqxhr, settings, exception){
          console.log('error');
        });
    });
  });

  $('.main').on('click', function(e){
    $('.header-menu').fadeOut().html('');
    $('.nav-btn').find('i').removeClass('fa-close').addClass('fa-navicon');
    $('.search-btn').find('i').removeClass('fa-close').addClass('fa-search');
    $('.menu a').removeClass('on');
  });

  $('.profile-close').on('click', function(e){
      e.preventDefault();
      console.log("worked");
      $('.profile-container').detach();
  });
})();
