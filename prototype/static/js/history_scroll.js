var $marker;

function getDistance(a, b) {
   return Math.sqrt(Math.pow(a.lat - b. lat, 2) + Math.pow(a.lng - b.lng, 2));
}

var i, j;
var last_time = $path[0].time;
var next_time = null;
var distance = 0;
var totalDistanceInSegment = 0;

for(j = 1; j < $path.length; j ++) {
  totalDistanceInSegment += getDistance($path[j - 1], $path[j]);
  if($path[j].time != null) {
    next_time = $path[j].time;
    break;
  }
}

for(i = 1; i < $path.length; i ++) {
  if($path[i].time != null) {
    last_time = $path[i].time;
    totalDistanceInSegment = 0;
    distance = 0;
    for(j = i + 1; j < $path.length; j ++) {
      totalDistanceInSegment += getDistance($path[j - 1], $path[j]);
      if($path[j].time != null) {
        next_time = $path[j].time;
        break;
      }
    }
    continue;
  }
  distance += getDistance($path[i], $path[i - 1]);
  var percent = distance / totalDistanceInSegment;
  $path[i].time = new Date(last_time.getTime() + (next_time.getTime() - last_time.getTime()) * percent);
}

function initMap() {
    map = new google.maps.Map(document.getElementById('path_map'), {
        zoom: 18,
        center: $path[0]
    });
    path = new google.maps.Polyline({
        path: $path,
        geodesic: true,
        strokeColor: "#4174ba",
        strokeOpacity: 0.8,
        strokeWeight: 10
    })
    $marker = new google.maps.Marker({
        position: $path[0],
        map: map,
        icon: './static/image/marker100x100.png',
        animation: google.maps.Animation.DROP,
    })
    path.setMap(map);
}

$(document).ready(function() {
    init_scroll();
});

function lead_zero(integer){
	return ('0'+integer).slice(-2);
}

function init_scroll(){
	var INCREMENT = 10;
	var start_time = $path[0].time;
	var end_time = $path[$path.length - 1].time;

	var temp_time = new Date(start_time.getTime());
	//HORIZONTAL SCROLL
	$('.ICH').append("<div class='viewport-hpadding'></div>");
	while (temp_time<=end_time){
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

    function timeToLatLng(time) {
        var i;
        var elapsed = 0;
        for(i = 1; i < $path.length; i ++) {
            elapsed += ($path[i].time.getTime() - $path[i - 1].time.getTime()) / 60 / 1000;
            if(time < elapsed) {
                elapsed -= ($path[i].time.getTime() - $path[i - 1].time.getTime()) / 60 / 1000;
                break;
            }
        }
        if(i == $path.length) {
            return {
                'lat': $path[i - 1].lat,
                'lng': $path[i - 1].lng,
            }
        }
        var index = i - 1;
        var percent = (time - elapsed) / (($path[index + 1].time.getTime() - $path[index].time.getTime()) / 60 / 1000);
        return {
            'lat': ($path[index + 1].lat - $path[index].lat) * percent + $path[index].lat,
            'lng': ($path[index + 1].lng - $path[index].lng) * percent + $path[index].lng
        }
    }

    // SCROLL
    var scroll_h;
    var scroll_v;
	$('#container-horizontal').scroll(function(){
		//if($(this).scrollLeft() == scroll_v) return;
        var latlng = timeToLatLng(ICHtoTime($('.ICH').position().left));
        $marker.setPosition(latlng);
        map.setCenter(latlng);
        /*
		scroll_h = parseInt(Math.floor(timeToICV(ICHtoTime($('.ICH').position().left))));
		$('#container-vertical').scrollTop(scroll_h);
        */
	});

	$('#container-vertical').scroll(function(){
		if($(this).scrollTop() == scroll_h) return;
		scroll_v = parseInt(Math.floor(timeToICH(ICVtoTime($('.ICV').position().top))));
		$('#container-horizontal').scrollLeft(scroll_v);
	});
}