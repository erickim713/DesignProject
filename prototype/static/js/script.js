$(document).ready(function() {
	$('.btnBack').click(function() {
		window.history.back();
	});
	$('#top_nav .right').click(function() {
		$('#menu_nav').toggleClass('opened');
	});
	$('#menu_nav .background').click(function() {
		$('#menu_nav').toggleClass('opened');
	});
});