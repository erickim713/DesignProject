// calendar javascript code?
/*things needed for the database entry for calendar?
when the user presses record all i have to show is what day he or she drank

so... 
needed info in my database: 
	dates.
	most recent day should be more detailed
		-meaning it should have map of where the person has been to last night.
		*/
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var datesRef;
var most_recent_entry;
$(document).ready(function(){
	init_firebase();
	for_demo_purposes();
	identify_most_recent();
	display_rest();
});

function init_firebase(){
	var calendar_config = {
		apiKey: "AIzaSyCq1fJ_iSgifDThmC1EE0Tz7tjsuuuibMs",
		databaseURL: "https://drunkengui-a7785.firebaseio.com/"
	};
	firebase.initializeApp(calendar_config);
	var calendar_database = firebase.database();
	datesRef = calendar_database.ref("dates");

	console.log("Database for calendar/list has been initialized");
}

function for_demo_purposes(){
	//remove what's in the database
	datesRef.remove();
	console.log("demo data has been cleared");
	datesRef.push({
			title: "night out with friends",
			day: 27,
			month: 4,
			year: 2017
		});
	datesRef.push({
			title: "drink till die",
			day: 2,
			month: 5,
			year: 2017
		});
	datesRef.push({
			title: "high school reunion",
			day: 5,
			month: 5,
			year: 2017
		});
	console.log("demo data has been entered");
// enter entries for demo purposes
}

function display_rest(){
	/*display the rest
	set current month if it's different
	if different insert row display month
	*/
	var cur_month = 0;
	datesRef.once("value", function(snapshot){
		snapshot.forEach(function(childSnapshot){
			var entry_data = childSnapshot.val();
			if(entry_data.month != cur_month){
				//when the current month is different from the entry month
				cur_month = entry_data.month;
				//add a month bar
				var month_entry = "<tr class ='month_bar'><td colspan='2'>"+ months[cur_month-1]+"</td></tr>";
				$('tbody').prepend(month_entry);
				//then add an entry
				var just_entry = "<tr class ='normal_entry'><td class='date'>"+months[entry_data.month-1]+ " " + entry_data.day + "</td>" + "<td class='descriptor'>" + entry_data.title + "</td></tr>"
				$('tbody tr:nth-child(1)').after(just_entry);
			}
			else{
				var just_entry = "<tr class ='normal_entry'><td class='date'>"+months[entry_data.month-1] +" " + entry_data.day + "</td>" + "<td class='descriptor'>" + entry_data.title + "</td></tr>"
				$('tbody tr:nth-child(1)').after(just_entry);
			}
		})
	})	

}
function identify_most_recent(){
	//most recent one should be at the bottom. I think...
	var most_recent = {
		day: 1, 
		month: 1,
		year: 0 
	};
	datesRef.once("value", function(snapshot){
		snapshot.forEach(function(childSnapshot){
			var eachData = childSnapshot.val();
			if(most_recent.year < eachData.year){
				most_recent = eachData;
			}
			if(most_recent.year == eachData.year){
				if(most_recent.month < eachData.month){
					most_recent = eachData;
				}
			}
			if(most_recent.year == eachData.year){
				if(most_recent.month == eachData.month){
					if(most_recent.day < eachData.day){
						most_recent = eachData;
					}
				}
			}

			//do something with each data
		});
		// the most recent is calculated.
	});

	most_recent_entry = most_recent;
	display_most_recent();
	//identify the most recent date and display the date and map?
	//rest of the date should be just listed out clickable?
	//if we have time make the each entry rolldownable where the most recent one is already rolled down.
}

function display_most_recent(){
	//for most recent stuff i need picture of the map and stuff.. 
	//let's say this is where i get the picture of the most recent picture
	var fragment = "<a class='carousel' href='history_next.html'><img id='map_image' src='static/image/placeholder_map.png' alt=''><div class='text'>May 5th, 2017</div></a>"
	$(".most_recent").append($(fragment));
}



  