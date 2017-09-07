$(document).ready(function() {

	// Count down clock http://codepen.io/yaphi1/pen/bdOMej / START
	var deadline = 'Jul 05 2020 00:00:00 GMT +0300';
	function time_remaining(endtime){
		var t = Date.parse(endtime) - Date.parse(new Date());
		var seconds = Math.floor( (t/1000) % 60 );
		var minutes = Math.floor( (t/1000/60) % 60 );
		var hours = Math.floor( (t/(1000*60*60)) % 24 );
		var days = Math.floor( t/(1000*60*60*24) );
		return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
	}
	function run_clock(iddays,idhours,idminutes,endtime){
		var clockdays = document.getElementById(iddays);
		var clockhours = document.getElementById(idhours);
		var clockminutes = document.getElementById(idminutes);
		var timeinterval = setInterval(function(){
			var t = time_remaining(endtime);
			clockdays.innerHTML = ''+t.hours;
			clockhours.innerHTML = t.minutes;
			clockminutes.innerHTML = t.seconds;
			if(t.total<=0){ clearInterval(timeinterval); }
		},1000);
	}
	run_clock('days','hours','minutes',deadline);
	// Count down clock / END

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
