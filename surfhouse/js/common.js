$(function() {

	$('.select-lang').each(function(){
		var $this = $(this), numberOfOptions = $(this).children('option').length;

		$this.addClass('select-hidden'); 
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');

		var $styledSelect = $this.next('div.select-styled');
		$styledSelect.text($this.children('option').eq(0).text());

		var $list = $('<ul />', {
			'class': 'select-options'
		}).insertAfter($styledSelect);

		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
		}

		var $listItems = $list.children('li');

		$styledSelect.click(function(e) {
			e.stopPropagation();
			$('div.select-styled.active').not(this).each(function(){
				$(this).removeClass('active').next('ul.select-options').hide();
			});
			$(this).toggleClass('active').next('ul.select-options').toggle();
		});

		$listItems.click(function(e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			$list.hide();
	        //console.log($this.val());
	    });

		$(document).click(function() {
			$styledSelect.removeClass('active');
			$list.hide();
		});

	});

	$(".owl-header").owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
		dots: true,
		smartSpeed: 700
	});
	$(".owl-new-products").owlCarousel({
		items: 3,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		smartSpeed: 700,
		slideBy: 2,
		responsiveClass:true,
		margin: 20,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			480:{
				items:2,
				nav:true
			},
			768:{
				items:3,
				nav:true
			}
		}
	});
	
	function heightDetect() {
		$('.owl-new-products-items-wrap-img-img').css("height", $('.owl-new-products-items-wrap-img').width());
	};
	heightDetect();
	// 
	function heightDetectSocImg() {
		$('.s-social-items-wrapout-wrapin-item').css("height", $('.s-social-items-wrapout-wrapin').width());
	};
	heightDetectSocImg();
	// function widthDetectSocButton() {
	// 	$('.s-social-buttons-button').css("width", $('.s-social-items').width()/3 - 1.5);
	// };
	// widthDetectSocButton();
	$(window).resize(function() {
		heightDetect();
		heightDetectSocImg();
		// widthDetectSocButton();
	});

	function setEqualHeight(columns) {
        var tallestcolumn = 0;
        columns.each(
        function() {
            currentHeight = $(this).height();
            if(currentHeight > tallestcolumn) {
             tallestcolumn = currentHeight;
            }
        }
        );
        columns.height(tallestcolumn);
    }
    $(document).ready(function() {
     setEqualHeight($(".owl-new-products-items-info"));
    });

});
