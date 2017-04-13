Design Project 3: Paper Prototyping
===================
----------
Team Name: **Drunken GUI** <br />
Team Members: **Sangyeob Lee, Sunmin Son, Hyungwoo Kim, Kyungyun Lee**

----------

### **Photos of your prototype:**

<img src="main.jpeg" />

> Main menu. The user can either start recording or view their history from this page.

<img src="recording.jpeg" />

> Recording screen. Users reach here by clicking/tapping on the "start recording" button on the main menu. When the stop button is pressed, recording will stop immediately.

<img src="calendar.jpeg" />

> When clicking/tapping view history button on the main menu, this calendar will show up. The soju bottles represent days you recorded, and when pressed, will take you to the histories of that day.

<img src="occasion.jpeg" />

> After selecting a date in the calendar, photos of the day will be displayed

<img src="path_map.jpeg" />

> And by tapping on the path tab on the top, the user can see where he/she was and what he/she did on the day. The list of activity, time, and marker on the map are scrollable and once the user moves one of it, the others will move along.

<img src="path_street.jpeg" />

> When zooming the map, the user will be able to see the map in street view

-----------
### **Participants:**

* Male, 24, Friend of ours
* Male, 23, Friend of ours
* Female, 20, Stragner at Cafe
* Male, 22, Roommate

-----------
### **Briefing:**

>Hello, we are team DrunkenGUI from Human-Computer Interaction class. We wanted to redesign the drinking experience for people who frequently go out to drink. After interviewing some people, we found that many drinkers are curious about what happened night before because it’s difficult to remember things when you were drunk. So we wanted to provide a service to resolve this problem.

>In our application, we make it easy for the user to start recording their night and to check out what they did when they wake up the next morning (hopefully). Since people are interested in where they were and what they did or said the night before, we provided a user interface and functions to do just that in our application.

*Summary: We showed the participants the same two paragraphs we wrote above. It explains what we are trying to do and briefly provide hints at what the user can expect from our prototype*

-----------
### **Tasks**

* Start recording
* Recall what you did last night (during the drinking occasion)
* Find out where you were last night (according to location)

-----------
### **Observations**

#### Start Recording
* (Good) Recording task is easy and simple
  * Continue to keep things simple
* (Low) User pressed View History button out of curiosity
  * Perhaps use an inactive history button on the opening screen to indicate that there is no history initially
* (Medium) Wrong buttons may be pressed during the night
  * Perhaps make it a background process while recording
* (High) User does not know when the recording will stop
  * Provide end time

#### View history (the drinking occasion)
* (High) Pressing the soju bottle icon in the calendar was not obvious
  * Perhaps animate the icon or show a demo of clicking it
* (Medium) User cannot know when to take a picture with the given GUI
  * Pop an alarm every set amount of time so that user can record what is happening if he/she is still sober
* (Medium) The current implementation does not make the recording special
  * Add call and chat history to make the occasion more memorable
* (Low) User felt that privacy may become a problem (embarrasing memories)
  * Maybe add a password to provide privacy, however quite off track of what we are trying to do

#### View history (the journey back home)
* (High) The time intervals are too big
  * Smaller time intervals would make browsing/scrolling through time more convenient
* (High) The payment records did not look obvious at first glance
  * Create some kind of visual aid to show the amount of money used at an occasion
* (Medium) Friends cannot provide user with information about the night before
  * Since friends often help in recounting memories, it would be nice to have them add information
* (Low) What if there are memories stored that you want to forget?
  * Perhpas create a managing system where user can add/edit/delete memories

-----------
### **Individual Reflections**

HyungWoo Kim: In each round of the paper prototype testing, I was the computer guy; I would do the task the application would have done if it was actual product when used by the target users. While carrying out my role, the hardest part was trying to hold back from telling the user that he or she should do certain task or that he or she can't do such task on this application. Through our paper prototyping, we were able to find both the major and subtle faults in our application, such as not being clear on what the user can do at certain pages(calendar page) of the application. In addition I was happy to find out that a lot of users would use our application if it was an actual product. In paper prototyping, we were able to find out if the tasks are able to be done by the users. However, we weren't able to find out if these tasks were actually implementable as well as how it would do in real context without having the facilitator involved in the testing session.

Sangyeob Lee: I was the observer through out the user test. I found out that users were not comfortable doing thinking aloud. They sometimes stopped and thinking for a while before they do something. I guess our prototype were not intuitive enough. After selecting a day in the calendar, they took a long time to figure out what to do in order to see the route. The tabs(occasion/path) on the top should be larger and noticeable. Also the quality of the prototype was crude and users knew about that. So sometimes it was not clear that some UI objects are able to interact with or not.

KyungYun Lee: During prototype testing, I was the observer. As I was not able to engage, it helped to see the whole process of the user interacting with our prototype in a neutral manner. Also, I was able to discover the problem with the overall flow of the system. For example, we thought at first that we need to show the user all the past archives of the drinking nights on a calendar, and the user can select the date to view the history. However, during the prototype testing, I felt that there was an extra step for the user to take when the user is actually probably only interested in the last night's or the most recent night's history. So, maybe the solution is to make the recent history page as a default and allow the user to view the archive only when they wish to. Also, the service is not something that users will spend a lot of time on it. The main reason is they want to know what happened last drinking night. So, we should minimize the functions and focus on our main purpose, instead of adding extraneous features. Often more features lead to user getting lost and overwhelmed. Also, we should note that users may not be in the best condition when he or she is checking the app (might be hungover!), so the interface should not be annoying.

Sunmin Son: I was the facilitator during our interview and prototype testing. I participated in multiple interview sessions and experienced many difficulties while carrying out my role. It was particularly hard to encourage the user to think aloud through probing questions while at the same time not going too far to lead them in their tasks. Also it was hard to keep everyone disciplined during the testing, because sometimes the observer may start explaining something obvious that the user was not catching, such as clicking the icon on the calendar. Another challenging instance was when the computer role would sometimes malfunction and give the user a hard time, and I had to explain what was going wrong on the spot. Finally, the user would want to give verbal feedback in the middle of their task, which kept me off guard and easily took us off track. However, as I gained more experience, I was later able to be more prompt to the user and confidently talk with authority.

-----------

### **Studio Reflections:**

**Feedback Summary && Course of Action**:

#### Feedback
* TA agreed on our opinion about minimizing the functions and focusing on the main purpose.
* The amount of work that is expected for our implementation seems manageable for the purpose of this course.
* It seemed unclear when and how the recording will stop.
* A fellow student wanted to know how the GPS information will be tracked.

#### Course of Action
* Think about the overall flow of the user actions (perhaps write out what kind of steps the user might take)
* Make extra functions optional so that the core function has minimal steps to be reached
* Add more details to our prototype so that the user is well informed about how things work.
* Come up with more concrete ways of implementing the functions that we exhibited in the paper prototype.
