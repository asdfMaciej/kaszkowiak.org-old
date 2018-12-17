var scrolling = false;

$(document).ready(function() {
	function scroll_to(div) {
		scrolling = true;
		$('html, body').animate({
	        scrollTop: $(div).offset().top
	    }, 1500);
	    setTimeout(function() {
	    	scrolling = false;
	    }, 1500);
	}
	function scroll_div() {
		var y = $(window).scrollTop();
		var divs = [
			["div#header", "black"],
			["div#about_kregle > div.middle", "black"],
			["div#where_kregle > div.middle", "black"],
			["div#zawody > div.middle", "black"],
			["div#scroll_gostyn", "black"],
			["div#scroll_gostyn_2", "black"],
			["div#odnosniki > div.middle", "white"],
			["div#stopa > div", "white"]
		];
		var scrolled = 0;
		$.each(divs, function(i, div) {
			if (y+3 < $(div[0]).offset().top) {
				if (scrolling) {
					return false;
				}
				scroll_to(div[0]);
				$("div#scroll_guzik > svg").css('fill', div[1]);
				scrolled = 1;
				return false;
			}
		});
		if (!scrolled) {
			if (scrolling) {
				return false;
			}
			scroll_to(divs[0][0]);
			$("div#scroll_guzik > svg").css('fill', divs[0][1]);
		}
		
	}
	$("div#scroll_guzik > svg").on('click', function() {
		 scroll_div();
	});

	$(".fancy").each(function(){
		$(this).fancybox({
			href : $(this).attr('src')
		});
	});

});