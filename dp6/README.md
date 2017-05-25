
Design Project 6: Hi-Fi Prototyping
===================
----------
Team Name: **Drunken GUI** <br />
Team Members: **Sangyeob Lee, Sunmin Son, Hyungwoo Kim, Kyungyun Lee**

----------

### **POV:**
* **USER** - someone who frequently goes out to drink
* **USER’S NEED** - tools to help him remember what happened during past drinking occasions
* **INSIGHT** - it is frustrating for the user who often fails to recall his memories after drinking too much

-----------
### **Target Users:**

Our target users are people who want to recall their drinking occasions (where they have been and what they have done).

-----------
### **Tasks:**

* Start recording (before the drinking occassion begins)
* Recall what you did last night (during the drinking occasion)
* Find out where you were last night (according to location)

-----------
### **Implementation Notes:**

* **URL of our prototype**:
  * https://cdn.rawgit.com/erickim713/DesignProject/830c2c13/prototype/index.html<br/>
  *Note: Since our prototype is a mobile web application, please view in mobile mode.

* **URL of our Git repository** :
  * https://github.com/erickim713/DesignProject

* **Libraries and frameworks** :
  * Jquery, Bootstrap for front-end framework, Google Fonts API

* **Lessons from heuristic evaluation** :
  * Provide a button to go back to home page (fixed by adding hamburger menu with home option)
  * Calendar should indicate which dates have a history (fixed by highlighting dates with data)
  * It is hard to realize what the map is for (fixed by adding various paths to the map)
  * Generally, our implementation lacked help & documentation for beginning users. This issue will be taken care of before user testing begins

* **Representative screenshots** : <br/>
<br/><br/>**HOME PAGE**<br/>
<img src="Home Page.png" width="300"/>
<br/><br/>**HAMBURGER MENU**<br/>
<img src="Hamburger Menu.png" width="300"/>
<br/><br/>**CALENDAR PAGE**<br/>
<img src="Calendar Page.png" width="300"/>
<br/><br/>**HISTORY PAGE**<br/>
<img src="History Page.png" width="300"/>
<br/><br/>**PHOTOS PAGE**<br/>
<img src="Photos Page.png" width="300"/>
<br/><br/>**RECORDING PAGE**<br/>
<img src="Recording Page.png" width="300"/>

-----------
### **Individual Reflections:**

HyungWoo Kim: <br/>
I am doing the calendar and list implmentation. One of the many difficulties I faced during the implementation step was inability to implement the way I want it to work. Even though my imaginary design is brilliant, the actual implementation did not go so well. I am still implementing making it more simpler and reflecing my peer's recommendation. During my implementation process I learned a lot about javascript and existing libraries and frameworks that we can use (however, I also learned that some libraries are not good as it can ruin already designed part).

Sangyeob Lee: <br/>
I made main and hamburger menu as well as helping the other team members. It was difficult to make same code over and over since we can’t use template engine. While working on DP5 and DP6, I learned how to make responsive webpage.

KyungYun Lee: <br/>
I was responsible for the individual history pages, where the user’s log of activities, including the map, and the photos taken during that night are shown. The map is currently implemented with just an image as a placeholder, but should be upgraded with the actual map API in the near future. Also, the sorting of the type of activities will be done as well. The challenge was to   find the appropriate layout that could accommodate all the information (all activities and photos) in a non-congested and simple design to not overwhelm the user. I wanted the design to mainly show and focus on the “path” of the drunken night. I learned how to create a responsive web using units like vh and vw instead of raw pixels.

Sunmin Son: <br/>
I implemented the timer (similar to that of a stopwatch) for the start recording page, and the photos layout for the photos page. It was difficult to implement the timer and to make it function correctly while at the same time making it look good for the user. Even a simple timer could have many errorneous cases. One useful implementation skill I learned while working on DP5 and DP6 was that we should share the same code for parts of the interface that are similar or exactly the same. Therefore, the shared parts should be implemented carefully, with the highest priority.

-----------

### **Studio Reflections:**

#### Feedback Summary

#### TA Feedback
* Good simple design <br/>
* Functionalities of functions should be implemented soon for the user tests <br/>
* Review UI for clickability <br/>

#### Student Feedbacks
* **Home Page** <br/>
•	Recording button should be named differently <br/>
•	Too much information on the home page <br/>
•	Maps look like it will take user to google maps <br/>

* **Calendar Page** <br/>
•	Width of each column is different <br/>
•	Prev and Next buttons are hard to recognize <br/>
•	After an interaction with the calendar, the orange indications of dates with content disappear <br/>
•	Today should perhaps be more highlighted <br/>
•	Maps look the same for each entry -> add more map examples to the database <br/>
•	Should be descending order by date <br/>

* **History Page** <br/>
•	Non-selected tab (between path and photos) looks like it’s selected <br/>
•	Please add details to each of the events (“Estimated time spent”, “Demo1”) <br/>
•	Indicate incoming and outgoing calls <br/>
•	Sorting should be done by time <br/>
•	I don’t understand the difference of the lines on the map (gray, blue, dotted) <br/>

* **Photos Page** <br/>
•	Group photos by date <br/>
•	Looks clickable, but are not <br/>

* **Hamburger Menu** <br/>
•	Clicking the history option brings up calendar page <br/>

* **Recording Page** <br/>
•	Recording should continue after moving out of page <br/>

* **Other** <br/>
•	Need information about how recording is happening <br/>
•	Monthly statistics (e.g. total money spent) <br/>
•	Ending scenario needs to be added (finishing recording) <br/>

#### Course of Action
* Any obvious errors or bugs that our classmates found in our Hi-Fi prototype will be fixed before user testing begins
* Usability issues (such as showing clickability, unification of color theme) will be adjusted as suggested
* A database will be added so that the users will properly experience our web-application
* Recording functions will be implemented and explained in detail by the time we start our user tests