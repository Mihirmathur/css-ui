$(document).ready(function(){
	//Border Lines 
	$('.border-lines').hover(function(){
		$('.vline', this).animate({opacity:'1'}, 150);
		$('.hline', this).animate({width: '50%'}, 150);
		$('.hl1', this).animate({left: '50%'},175);
		$('.hl2', this).animate({right: '50%'},175);
	}, function(){
		$('.vline', this).animate({opacity:'.8'}, 200);
		$('.hl1', this).animate({left: '0%'},175);
		$('.hl2', this).animate({right: '0%'},175);
		$('.hline', this).animate({width: '0%'}, 200);
	});

	// Border Anim
	$('.border-anim').hover(function(){
		$('.hl1', this).css({left:'0%'});
		$('.hl2', this).css({right:'0%'});
		$('.vline2', this).animate({opacity:'1', letterSpacing: '1px'}, 150);
		$('.hline2', this).animate({width: '10%'}, 150);
		$('.hl1', this).animate({left: '45%'},175);
		$('.hl2', this).animate({right: '45%'},175);
	}, function(){
		$('.vline2', this).animate({opacity:'.8', letterSpacing: '0px'}, 200);
		$('.hl1', this).animate({left: '100%'},175);
		$('.hl2', this).animate({right: '100%'},175);
		$('.hline2', this).animate({width: '0%'}, 200);
	});
});