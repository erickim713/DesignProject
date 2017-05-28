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
    init_scroll();
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

function lead_zero(integer){
	return ('0'+integer).slice(-2);
}

function init_scroll(){

	var list = [new Date("2017-05-02 23:00:00"), 
				new Date("2017-05-02 23:30:00"), 
				new Date("2017-05-02 23:50:00"),
				new Date("2017-05-03 00:50:00"),
				new Date("2017-05-03 01:00:00"),
				new Date("2017-05-03 03:20:00"),
				new Date("2017-05-03 03:50:00"),];

	var INCREMENT = 10;
	var start_time = list[0];
	var end_time = list[list.length-1];

	var temp_time = new Date(start_time.getTime());
	//HORIZONTAL SCROLL
	$('.ICH').append("<div class='viewport-hpadding'></div>");
	while (temp_time<end_time){
		$('.ICH').append("<div class='viewport-h1'>"+lead_zero(temp_time.getHours()) + ":" + lead_zero(temp_time.getMinutes())+"</div>");
		temp_time.setTime(temp_time.getTime()+INCREMENT*60*1000);
	}
	$('.ICH').append("<div class='viewport-hpadding'></div>");


	//VERTICAL SCROLL
	$('.ICV').append("<div class='viewport-vpadding'></div>");
	var i;
	for (i=0;i<list.length;i++){
		$('.ICV').append("<div class='viewport-v1'>"+lead_zero(list[i].getHours()) + ":" + lead_zero(list[i].getMinutes())+"</div>");
	}
	$('.ICV').append("<div class='viewport-vpadding'></div>");

    $('.ICV').height($('.viewport-vpadding').height()*2+$('.viewport-v1').height()*$('.viewport-v1').length);
    $('.ICH').width($('.viewport-hpadding').width()*2+$('.viewport-h1').width()*$('.viewport-h1').length);

    function ICHtoTime(scrollX) {
    	var hor = ($('.viewport-h1').length - 1) * $('.viewport-h1').width();
    	var percent = Math.abs(scrollX / hor);
    	var min_total = (end_time.getTime() - start_time.getTime()) / 60 / 1000;
    	
    	var min_passed = min_total * percent;
    	return min_passed;
    }

    function ICVtoTime(scrollY) {
    	var index = Math.floor(Math.abs(scrollY / $('.viewport-v1').height()));
    	if (index>=list.length-1){
    		index--;
    	}
    	
    	var percent = (Math.abs(scrollY) - (index) * $('.viewport-v1').height()) / $('.viewport-v1').height();
    	var elapsed = (list[index].getTime() - list[0].getTime()) / 1000 / 60;
    	var inSegment = (list[index + 1].getTime() - list[index].getTime()) * percent / 1000 / 60;
    	return elapsed + inSegment;
    }

    function timeToICH(time) {
    	var min_total = (end_time.getTime() - start_time.getTime()) / 60 / 1000;
    	var percent = time / min_total;
    	var hor = ($('.viewport-h1').length - 1) * $('.viewport-h1').width();
    	var scrollX = percent * hor;
    	return scrollX;
    }

    function timeToICV(time) {
    	var scrollY;
    	var index = 0;
    	while(time > (list[index + 1].getTime() - list[index].getTime()) / 60 / 1000) { 
    		time -= (list[index + 1].getTime() - list[index].getTime()) / 60 / 1000;
    		index += 1;
    		if(index >= list.length - 1) break;
    	}
    	if(index >= list.length - 1) index --;
    	scrollY = $('.viewport-v1').height() * index;
    	var percent = time / ((list[index + 1].getTime() - list[index].getTime()) / 60 / 1000);
    	scrollY += $('.viewport-v1').height() * percent;
    	return scrollY;
    }

    // SCROLL
    var scroll_h;
    var scroll_v;
	$('#container-horizontal').scroll(function(){
		if($(this).scrollLeft() == scroll_v) return;
		scroll_h = parseInt(Math.floor(timeToICV(ICHtoTime($('.ICH').position().left))));
		$('#container-vertical').scrollTop(scroll_h);
		console.log(1);
	});

	$('#container-vertical').scroll(function(){
		if($(this).scrollTop() == scroll_h) return;
		scroll_v = parseInt(Math.floor(timeToICH(ICVtoTime($('.ICV').position().top))));
		$('#container-horizontal').scrollLeft(scroll_v);
		console.log(2);
	});
}