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
/*
div.popup { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 1000; }
div.popup div.overlay { position: absolute; top: 0; left: 0; width: 100vw; height: 100vh; background-color: black; opacity: .5; }
div.popup div.message { position: absolute; top: 50vh; left: 50vw; width: 90vw; transform: transition(-50%, -50%); }
div.popup div.message div.title { width: 100%; height: 4vw; font-size: 2.5vw; line-height: 4vw; background-color: #e09400; color: white; text-align: center; }
div.popup div.message div.content { padding: 5vw; line-height: 4vw; font-size: 2vw; color: #231f20; background-color: white; }
*/
function popupMessage(title, message, callback) {
	$div = $("<div class='popup'></div>");
	$overlay = $("<div class='overlay'></div>");
	$overlay.click(function() {
		$(this).parent().remove();
	});
	$message = $("<div class='message'></div>");
	$title = $("<div class='title'></div>");
	$title.text(title);
	$title.appendTo($message);
	$content = $("<div class='content'></div>");
	$content.html(message);
	$content.appendTo($message);
	$btn = $('<div class="btn">OK</div>');
	$btn.appendTo($message);
	$btn.click(function() {
		$(this).parents('div.popup').remove();
	});
	$overlay.appendTo($div);
	$message.appendTo($div);
	$div.appendTo('body');
	if(callback !== undefined)
		callback();
}