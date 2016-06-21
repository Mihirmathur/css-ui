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
var y = true;
var z = true;
$(document).ready(function() {
  /*js button 1*/
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
    }else{
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
  /*end js button 1*/

  /*js button 2*/

  $(".bar").click(function() {
    if (y) {
      $("#bar2").hide();
      $("#bar1").animate({
        marginTop: "25%"
      },200);

      $("#bar3").animate({
        marginTop: "-27%"
      },200);
      $("#bar1").animateRotate(45, 200);
      $("#bar3").animateRotate(-45, 200);
      y = false;
    }else{
      $("#bar2").show(300);
      $("#bar1").animate({
        marginTop: "0%"
      },200);

      $("#bar3").animate({
        marginTop: "0%"
      },200);
      $("#bar1").animateRotate(0, 200);
      $("#bar3").animateRotate(0, 200);
      y=true;
    };
  });
  /*end js button 2*/

  /*js button 3*/

  $(".br").click(function() {
    if (z) {
    $("#br2").animate({
      width: "70%",
      height: "10%",
      marginTop: "-15%",
      marginLeft:"13%" 

    });

    $("#br1").animate({
      width: "30%",
      height: "10%",
      marginTop: "20%",
      marginLeft: "10%"
    });

    $("#br3").animate({
      width: "30%",
      height: "10%",
      marginTop: "-13%",
      marginLeft: "10%"
    });

    $("#br1").animateRotate(-45, 200);
    $("#br3").animateRotate(45, 200);

    z=false;
  }else{
     $("#br2").animate({
      width: "80%",
      height: "17%",
      marginTop: "-0",
      marginLeft:"0%" 

    });

    $("#br1").animate({
      width: "80%",
      height: "17%",
      marginTop: "0%",
      marginLeft: "0%"
    });

    $("#br3").animate({
      width: "80%",
      height: "17%",
      marginTop: "-0%",
      marginLeft: "0%"
    });

    $("#br1").animateRotate(0, 200);
    $("#br3").animateRotate(0, 200);
    z=true;
  }
  });
});
