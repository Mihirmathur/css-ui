$(document).ready(function(){
	$('#border-lines').hover(function(){
		$('.vline').animate({opacity:'1'}, 150);
		$('.hline').animate({width: '50%'}, 150);
		$('#hl1').animate({left: '50%'},175);
		$('#hl2').animate({right: '50%'},175);
	}, function(){
		$('.vline').animate({opacity:'.8'}, 200);
		$('#hl1').animate({left: '0%'},175);
		$('#hl2').animate({right: '0%'},175);
		$('.hline').animate({width: '0%'}, 200);
	});
});