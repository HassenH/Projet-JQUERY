$(function(){
  $('#secondNavbar').hide();

  $('#phoneHover').hover(function(){
    $('#secondNavbar').slideDown('slow');
});
$('.testeee').mouseleave(function(){
  $('#secondNavbar').slideUp('slow');
  });
});


$("#formContact").click(function(event) {
	event.preventDefault();
	var specsTop = $(".footer").offset().top;
	$("html, body").animate({ scrollTop: specsTop - 60 }, "slow");
});
