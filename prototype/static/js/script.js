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
    $('.ui-datepicker-current-day').click(function(){console.log($('#datepicker').val());
    });
});

$('div#image_modal div.background').click(function() {
  $('div#image_modal').addClass('disp-none');
}); 
$('#photo_grid div.imgwrapper').click(function() {
  $('div#image_modal').removeClass('disp-none');
  $('div#image_modal img').attr('src', $(this).attr('data-img-src'));
});