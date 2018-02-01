(function ($) {
  $(document).ready(function(){

  	setTimeout(scrollDown, 3000);

    // hide .navbar first
    $(".navbar").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 450) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
    });

});
}(jQuery));

function scrollDown() {
	console.log("sup"); 
	document.getElementById("body").style.overflow = "scroll";

	$('html, body').animate({scrollTop: $('div#page-2').offset().top }, 1300);
}
