$(document).ready(function() {

	// Owl-Carousel
	$(".carousel").owlCarousel({
		loop: true,
		center:true,
		// items : 1,
		// nav : true
		responsive : {
    		// breakpoint from 0 up
		    0 : {
		        items : 1,
		        nav : false
		        
		    }
		}
		// dotsContainer: "containerfordots"
	});


	// Animation
	$(".phone-left").animated("slideInLeft", "slideOutLeft");
	$(".adress-right").animated("slideInRight", "slideOutRight");
	$(".nav-left").animated("slideInLeft", "slideOutLeft");
	$(".nav-right").animated("slideInRight", "slideOutRight");

	$(".nav-first-p").animated("zoomIn", "zoomOut");
	$(".nav-second-p").animated("zoomIn", "zoomOut");
	$(".slider").animated("slideInUp", "slideOutDown");
	$(".shape-wrap").animated("slideInUp", "slideOutDown");
	
	$(".ur-znak").animated("rollIn", "rollOut");
	$(".ur-text h2").animated("rotateIn", "rotateOut");
	$(".ur-text p").animated("fadeInUpBig", "fadeOutDownBig");
	$(".ur-services-1").animated("flipInX", "flipOutY");
	$(".ur-services-2").animated("flipInX", "flipOutY");
	$(".ur-services-3").animated("flipInX", "flipOutY");
	$(".ur-services-4").animated("flipInX", "flipOutY");
	$(".ur-services-5").animated("flipInX", "flipOutY");


	$(".buh-znak").animated("rollIn", "rollOut");
	$(".buh-text h2").animated("rotateIn", "rotateOut");
	$(".buh-text p").animated("fadeInUpBig", "fadeOutDownBig");
	$(".buh-services-1").animated("flipInX", "flipOutY");
	$(".buh-services-2").animated("flipInX", "flipOutY");
	$(".buh-services-3").animated("flipInX", "flipOutY");
	$(".buh-services-4").animated("flipInX", "flipOutY");
	$(".buh-services-5").animated("flipInX", "flipOutY");
	



	$(".footer-foto").animated("fadeInLeftBig", "fadeOutLeftBig");
	$(".footer-menu").animated("fadeInUp", "fadeOutDown");
	$(".footer-coordinats").animated("fadeInRightBig", "fadeOutRightBig");



	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
