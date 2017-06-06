$(document).ready(()=>{
  $('a').click(function(){
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 140
    }, 600,"swing");
    return false;
  });
});