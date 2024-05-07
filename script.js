$(document).ready(function () {
	var owl = $(".owl-carousel");
	owl.owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 3
			}
		}
	});

	$(".arrows .prev").click(function () {
		owl.trigger("prev.owl.carousel");
	});

	$(".arrows .next").click(function () {
		owl.trigger("next.owl.carousel");
	});
});
