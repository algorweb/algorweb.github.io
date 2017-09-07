$(function() {

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
     setEqualHeight($(".header-info-content"));
     setEqualHeight($(".dev-info"));
    });

    //E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$('#projects-main').mosaicflow({
	  itemSelector: '.item',
	  minItemWidth: 300
	});

});
