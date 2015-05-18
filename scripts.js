$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 2100);
        return false;
      }
    }
  });
});
// $.scrollingParallax('http://i1301.photobucket.com/albums/ag119/jabattack1/clouds_zpsjupnhatn.jpg');

// $.scrollingParallax('http://i1301.photobucket.com/albums/ag119/jabattack1/clouds_zpsjupnhatn.jpg', { 
//     bgWidth : '200%', 
//     enableHorizontal : true 
// });

// $('body').scrollingParallax();


