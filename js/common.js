$(document).ready(function() {

	// Instantiate MixItUp:
	$('#portfolio-item').mixItUp();

	// detect height of window and resize section / START
	function heightDetect() {
		$(".section-head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	// detect height of window and resize section / END

	// add/remove class in menu / START
	$(".head__menu-li").click(function(){
		$(".head__menu-li.activ").removeClass("activ");
		$(this).addClass("activ");
	});
	// add/remove class in menu / END

	// add/remove class in Potrfilio menu / START
	$(".portfolio__controls li").click(function(){
		$(".portfolio__controls li.active").removeClass("active");
		$(this).addClass("active");
	});
	// add/remove class in Potrfilio menu / END

	// fixed menu after scroll / START
	var $menu = $(".head-logo-menu");
	var $menu_wrapper = $(".head-logo-menu-wrapper");

	$(window).scroll(function(){
		if ( $(this).scrollTop() > 70 ){
			$menu.addClass("fixed");
			$menu_wrapper.addClass("head-logo-menu-wrapper_white-background");
		} else if($(this).scrollTop() <= 70 ) {
			$menu.removeClass("fixed");
			$menu_wrapper.removeClass("head-logo-menu-wrapper_white-background");
		}
	});
	// fixed menu after scroll / END

	// send mail START
	$("#contacts__form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#contacts__form").trigger("reset");
		});
		return false;
	});
	// send mail END

	$(".head__menu a").mPageScroll2id({
		offset : 69,
		scrollSpeed : 500
	});

	$(".head__menu-toggle-wrap a").mPageScroll2id({
		offset : 49,
		scrollSpeed : 500
	});


});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});