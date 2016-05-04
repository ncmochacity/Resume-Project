
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
	$(window).on("scroll",function(){
		if($window.scrollTop() > headerOffsetTop) {
		  	$header.addClass("sticky");
		}
		else{
			$header.removeClass("sticky");
		}
	});
	$window.trigger("scroll");
})
