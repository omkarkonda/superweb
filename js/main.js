//PARALLAX

var wWidth = $(window).width();

if (wWidth < 325) {
	$(".devices").css({
		"display": "none"
	});

	$(".hero-text").css("position", "relative");

}

$(window).scroll(function () {

	var scrollPos = $(this).scrollTop();
	var sratio = 1 - (scrollPos / 5000);
	var sscale = "scale(" + sratio + ")";

	//console.log(scrollPos);



	if (wWidth > 480) {
		$(".hero-text").css({
			"bottom": +(scrollPos / 1500) + "px",
			"opacity": 1 - (scrollPos / 800),
			"-webkit-transform": sscale,
			"-moz-transform": sscale,
			"-o-transform": sscale,
			"transform": sscale
		});

		$(".home").css({
			"top": +(scrollPos / 24) + "px"
		});

		$(".devices").css({
			"opacity": 1 - (scrollPos / 60),
			"-webkit-transform": sscale
		});

	} else {
		$(".hero-text").css("position", "relative");
		$(".devices").css("display", "none");
	}



	if (scrollPos >= 495) {
		$(".header").addClass("animated bounce").css("opacity", "1");
	} else {
		$(".header").removeClass("animated bounce").css("opacity", "0");
	}


});