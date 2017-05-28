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

// history page
// image modal
// Get the modal
var modal = document.getElementById("ind_history_img_modal");

var allImages = document.getElementsByClassName('ind_history_img');
for(var i = 0; i < allImages.length; i++){
	var img = allImages[i];
	var modalImg = document.getElementById("drinking");
	img.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		console.log(this.src);
	}
}


var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
modal.onclick = function() {
  modal.style.display = "none";
}