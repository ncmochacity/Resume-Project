
$("#menu").click(function(){
	$(".primary-nav").toggle("open");
});
$("#projects").children(1).find(".title").eq(1).css("margin-top","5px");
$("#projects").children(1).find(".title").eq(2).css("margin-top","5px");
$("#projects").children(1).find(".description").eq(2).css("top","5px");
$("#workExperience").children(1).find(".clock").eq(0).css("right","50px");
$("#workExperience").children(0).find(".map").eq(0).css("left","90px");
$("#workExperience").children(0).find(".map").eq(2).css("left","80px");
//sticky header UI
$(".page-header").each(function(){
	var $window=$(window),
	$header=$(this),
	headerOffsetTop=$header.offset().top;
	$header.removeClass("sticky");
	$(window).on("scroll",function(){
		if($window.scrollTop() > headerOffsetTop) {
		  	$header.addClass("sticky");
		}
		else{
			$header.removeClass("sticky");
		}
	});
	$window.trigger("scroll");
});
//scrolling down
$(".page-scroll").click(function(event){
	var $anchor=$(this);
	$("html,body").stop().animate({
		scrollTop:$($anchor.attr("href")).offset().top
	},1500,"easeInOutQuad");
});
// Karl Swedberg techniques for smooth scrolling
//smooth scrolling back to top functionality
function scrollableElement(){
	var i, len, el, $el, scrollable;
	// when scrollableElement function calls with html,body passed in, arguments = [html,body]
	for (i = 0, len = arguments.length; i < len; i++ ){
		el=arguments[i];
		// when i = 0, el = html
		//$("html").scrollTop() returns 0 because html is not scrollable, does not generate vertical scrollbar
		$el=$(el);
		var y = $el.scrollTop();
			$el.scrollTop(y || 1);
			// sets the position of the vertical scrollbar at 1 pixel from the top
			scrollable = $el.scrollTop() > 0;
			$el.scrollTop(y);
			if (scrollable){
				return el;
			}
	}
	return [];
}
$(window).scroll(function(){
	if($(this).scrollTop() > 100){
		$(".scroll-up").fadeIn();
	}
	else{
		$(".scroll-up").fadeOut();
	}
});
$(".scroll-up").each(function(){
	var el=scrollableElement("html","body");
	$(this).click(function(event){
		event.preventDefault();
		$(el).animate({
			scrollTop:0
		},1500,"easeInOutQuad");
	});
});
