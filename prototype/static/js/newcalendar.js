//days
$(document).ready(function(){
  var div = document.getElementById('calendarplace');
  var cal_current = new Date();
  var current_month = cal_current.getMonth();
  var current_year = cal_current.getFullYear();
  var cal = new Calendar();
  cal.generateHTML();
  div.innerHTML = cal.getHTML();
	$('#prev').click(function() {
    if(current_month == 0){
      current_month = 11
      current_year = current_year -1;
    }
    else{
      current_month = Math.abs(current_month - 1) % 12;
    }
    display_current(div, current_month, current_year);
	});
  $('#next').click(function(){
    if(current_month == 11){
      current_month = 0
      current_year = current_year +1;
    }
    else{
      current_month = Math.abs(current_month + 1) % 12;
    }
    display_current(div, current_month, current_year);
  })
});
  // $("calendarplace").html(cal.getHTML())

function display_current(div, month, year){
  var cal = new Calendar(month, year);
  cal.generateHTML();
  div.innerHTML = cal.getHTML();
  document.getElementById('prev').addEventListener("click", function(){
    if(month == 0){
      month = 11
      year = year -1;
    }
    else{
      month = Math.abs(month - 1) % 12;
    }
    display_current(div, month, year);
  });
  document.getElementById('next').addEventListener("click", function(){
    if(month == 11){
      month = 0
      year = year +1;
    }
    else{
      month = Math.abs(month + 1) % 12;
    }
    display_current(div, month, year);
  });
}

cal_days_labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];

//months
cal_months_labels = ['January', 'February', 'March', 'April',
                     'May', 'June', 'July', 'August', 'September',
                     'October', 'November', 'December'];

//number of days 
cal_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


cal_current_date = new Date(); //prints current moment's information

function Calendar(month, year) {
  this.month = (isNaN(month) || month == null) ? cal_current_date.getMonth() : month;
  this.year  = (isNaN(year) || year == null) ? cal_current_date.getFullYear() : year;
  this.html = '';
}


//function for generating calendar's html
Calendar.prototype.generateHTML = function(){
	// get first day of month
  var firstDay = new Date(this.year, this.month, 1);
  var startingDay = firstDay.getDay();
  
  // find number of days in month
  var monthLength = cal_days_in_month[this.month];
  
  // compensate for leap year check if it's leap year
  if (this.month == 1) { 
    if((this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0){
      monthLength = 29;
    }
  }
  
  // do the header
  var monthName = cal_months_labels[this.month]
  var html = '<table class="calendar-table">';
  html += '<tr class="calendar-monthyear">';
  html += '<th class="calendar-th" colspan="1" style="font-size: 2vh !important"><a id="prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></a></th>';
  html += '<th class="calendar-th" colspan="5" style="font-size: 2vh !important">';
  html +=  monthName + "&nbsp;" + this.year;
  html += '</th>';
  html += '<th class="calendar-th" colspan="1" style="font-size: 2vh !important"><a id="next"><i class="fa fa-chevron-right" aria-hidden="true"></i></a></th>'
  html += '</tr>';
  html += '<tr class="calendar-header">';
  for(var i = 0; i <= 6; i++ ){
    html += '<td class="calendar-header-day">';
    html += cal_days_labels[i];
    html += '</td>';
  }
  html += '</tr>';


  //division between headers and the calendar entry
  html+="<tr class='divider'><td colspan=7></td></tr>";


  html += '<tr>';
  // fill in the days
  var day = 1;
  // this loop is for is weeks (rows)
  for (var i = 0; i < 9; i++) {
    // this loop is for weekdays (cells)
    for (var j = 0; j <= 6; j++) { 
      var input_string =  (this.month+1).toString() +"/" + day.toString() + "/" + (this.year).toString();
      
      if(checkifdrank(input_string)){
        // fixed dates =_=
        if(day == 27){
          html += '<td class="calendar-day"><a href="history_prev.html"><div class="days">';
         if (day <= monthLength && (i > 0 || j >= startingDay)){
          html += day;
          day++;
          }
          html += '</div></a></td>';
        }
        if(day == 5){
          html += '<td class="calendar-day"><a href="history_next.html"><div class="days">';
         if (day <= monthLength && (i > 0 || j >= startingDay)){
          html += day;
          day++;
          }
          html += '</div></a></td>';
        }
        if(day == 2){
          html += '<td class="calendar-day"><a href="history.html"><div class="days">';
         if (day <= monthLength && (i > 0 || j >= startingDay)){
          html += day;
          day++;
          }
          html += '</div></a></td>';
        }
         
      }
      else{
        html += '<td class="calendar-day"><div class="non-days">';
         if (day <= monthLength && (i > 0 || j >= startingDay)){
          html += day;
          day++;
        }
        html += '</div></td>';
      }
    }
    // stop making rows if we've run out of days
    if (day > monthLength) {
      break;
    } else {
      html += '</tr><tr>';
    }
  }
  html += '</tr></table>';
  this.html = html;
}

Calendar.prototype.getHTML = function() {
  return this.html;
}

//clean up the rest and make functions for changing calendars
function checkifdrank(date1){
  var date2 = new Date(date1);
  var drunkdays =[new Date("04/27/2017"), new Date("05/02/2017"), new Date("05/05/2017")]
  var i = 0;
  for(i = 0; i< 3; i++){
    if (date2.getMonth() == drunkdays[i].getMonth() && date2.getDate() == drunkdays[i].getDate() && date2.getFullYear() == drunkdays[i].getFullYear()){

      return true;
    }
  }
  return false;
}



