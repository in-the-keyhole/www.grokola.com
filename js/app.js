(function(){
  'use strict';

  // load header html file into index file and get corresponding javascript for header
  $('header').load('/templates/header.html', function(){
    $.getScript('/js/header/header.js')
      .done(function(script, textStatus) {
        console.log(textStatus);
      })
      .fail(function( jqxhr, settings, exception){
        console.log('error');
      });
  });

  //Back to top functionality
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#back-to-top').fadeIn();
      } else {
      $('#back-to-top').fadeOut();
      }
  });
  // scroll body to 0px on click
  $('#back-to-top').click(function () {
    $('#back-to-top').tooltip();
    $('body,html').animate({
      scrollTop: 0
      }, 800);
    return false;
  });

  $('#footer').load('/templates/footer.html', function(){
    var today = new Date();
    var year = today.getFullYear();

    $('#year').text(year);
  });

  $('#myModal').on('hidden.bs.modal', function (e) {
        	  // do something...
        	  $('#myModal video').attr("src", $("#myModal  video").attr("src"));
        	});

})();
