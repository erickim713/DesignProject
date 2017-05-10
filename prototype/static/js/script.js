$(document).ready(function() {
	$('.btnBack').click(function() {
		window.history.back();
	});
});


// history page
// image modal
// Get the modal
var modal = document.getElementById("ind_history_img_modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("ind_history_img1");
var modalImg = document.getElementById("drinking1");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
