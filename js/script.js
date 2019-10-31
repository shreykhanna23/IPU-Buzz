$(document).ready(function () {

	$(window).scroll(() => {
		parallax();
	});

	$(".search-icon").click(() => {
		alert("Searcj!");
	});

	const parallax = () => {
		let yOffset = $(window).scrollTop();
		//console.log(yOffset);
		$(".parallax-bg").css({
			"background-position-y": (yOffset * -.25) + "px",
			"background-size": 100 + (yOffset / 90) + "%",
			"backdrop-filter": "blur(" + yOffset / 100 + "px)"
		});

		if (yOffset >= 525) {
			$(".navbar").css({
				"background-color": "rgba(0,0,0,.9)"
			});

		}
		else {
			$(".navbar").css({
				"background-color": "transparent"
			});
			$(".navbar__nav").css("color", "#fff");
		}

		if (yOffset <= 500) {
			$(".logo-box").css("top", 42.5 + yOffset * .165 + "%");
			$(".right-box").css("top", 25 - yOffset / 10 + "%");
		}
	}

	jQuery(document).ready(function($) {
		$('.carousel-list').slick({
		  infinite: true,
		  speed: 500,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 1500,
		  responsive: [{
			breakpoint: 600,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1
			}
		  },
		  {
			 breakpoint: 400,
			 settings: {
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1
			 }
		  }]
	  });
  });
});
