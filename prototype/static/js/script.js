$(document).ready(function() {
	$('.btnBack').click(function() {s
		window.history.back();
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
