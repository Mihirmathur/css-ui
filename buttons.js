$.fn.animateRotate = function(angle, duration, easing, complete) {
  return this.each(function() {
    var $elem = $(this);

    $({deg: 0}).animate({deg: angle}, {
      duration: duration,
      easing: easing,
      step: function(now) {
        $elem.css({
           transform: 'rotate(' + now + 'deg)'
         });
      },
      complete: complete || $.noop
    });
  });
};
var x = true;
$(document).ready(function() {
  
  $('.container').click(function() {   
    
    if(x){
        $('.container').animateRotate(360, 900);
        $('#l2').animate({
          width: "50px"
        }, 150);
        $('.cont').animate({
          marginTop: "32px"
        }, 200);
        $('.line').animate({
          marginBottom: "-18px",
          width: '50px'
        }, 200);
         x = false;
      }
    else{
      $('#l2').animate({
          width: "80px"
        }, 150);
        $('.cont').animate({
          marginTop: "0px"
        }, 200);
        $('.line').animate({
          marginBottom: "12px",
          width: '80px'
        }, 200);
      x=true;
    }
  });

});