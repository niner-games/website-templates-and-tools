$(document).ready(function(){
  $('.menu-trigger').click(function(){
    $('.menu').slideToggle(500);
    $('.menu').css('display', 'grid');
    
    if ($(this).hasClass('closed')) {
      $(".menu-trigger span").css({background: '#FFED4A'});
      $(this).removeClass('closed');
      $(this).addClass('open');
    }
    else {
      $(".menu-trigger span").css({background: '#ffffff'});
      $(this).removeClass('open');
      $(this).addClass('closed');
    }
  });
  
  $(window).resize(function(){
    if($(window).width() > 768) {
      $('.menu').removeAttr('style');
    }
  });
    
});

$(window).scroll(function() {
  var windowscroll = $(this).scrollTop();
  
  $(".header-bg").css({
    "transform" : "translate(0%," + windowscroll /15 + "%"
  });
  
});
