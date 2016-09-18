$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
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

$(document).ready(function() {
	function heightDetect(){
	$(".main-scree").css("height", $(window).height());

};
heightDetect();
$(window).resize(function() {
	heightDetect();
});
});

$(function(){
    $('#Container').mixItUp();
});

$(document).ready(function(){
  $('.bxslider').bxSlider({
  	controls : false,
  	auto: true,
  	speed: 2000,
  	pause: 5000,
  	nextSelector: '#slider-next',
  	prevSelector: '#slider-prev',
  	nextText: 'lolllllllllllllllllllllll',
  	prevText: 'loll'
  })
});



/* Open when someone clicks on the span element */
function openNav() {
	document.getElementById("myNav").style.height = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
	document.getElementById("myNav").style.height = "0%";
}