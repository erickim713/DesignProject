
Design Project 7: User Testing
===================
----------
Team Name: **Drunken GUI** <br />
Team Members: **Sangyeob Lee, Sunmin Son, Hyungwoo Kim, Kyungyun Lee**

----------

### **Written Protocol:**
* Instructions for preparation and setting up the testing environment:
	* this is a fixed experiment, meaning that the user interface will only be tested and the real data of tracking the person will be created by the web application makers.
	* Since our objective is if our user interface is intuitive and learnable, we believed that making the tester remember what this other person did last night can still prove the effectiveness of our user interface.
	* The users will be given a link to open https://cdn.rawgit.com/erickim713/DesignProject/fc422796/prototype/index.html this is the link to the entry of our app.
	* When user starts using the application two people will observe, one person will be ready to assist the user if user can't move on without help (hopefully doesn't happen). The last person will be the tech guy who will come into play if there is an error with the web application during the tests.

* Introduction and informed consent:
	> Thank you for participating in our user study.
	We found that people who go out to drink often find their wallets empty, glasses broken or missing, call histories that are unexplainable. Our Drunken Path web application aims to help users who often go out to drink recollect their memories about what they did last night. We hope that you are able to have a fun and helpful experience while recalling your memories from your drunk nights through our web application.
We need your personal information to analyze our project’s results for future improvements. We will collect your age, gender, occupation data. Do you agree?

* Tutorial:
	* To test our app's intuitiveness, affordance, and learnability we have no tutorial or training.

* Task List & Instructions:
	* Recording
		* Begin the recording (test start recording)
		* End the recording (test end recording)
	* Find out what you did on previous nights
		* How much are you supposed to collect from your friends on May 2nd?
		* How much did you spend the whole day?
	* Find out where you were on previous nights
		* Where were you at 11:50pm on May 5th?
		* At what time did you arrive at your home on April 27th?

* Recording Strategy:
	* We will have screen recording so that we can capture the user behavior during the user testing.
	* 2 of the members will record the user behavior and feedback during the user testing (user’s tend to speak out loud if they are looking for something)
	* 1 of the member will standby so that if users have trouble using the application for the sake of other task testing, the standby person will help.
	* Lastly, tech person will wait if there’s any malfunction during testing so that everyone’s aware of what’s going on if there’s a bug

* Interview Questions:
	* Were you able to find out ...
		* What you wanted to find? (or was told to find?)
		* Amount of money you need to collect?
		* Where you were?
		* Where you lost your stuff?
		* Were you able to use the application smoothly?
		* Was the navigation easy to do?
			* If not, what was difficult or not intuitive?

* Debrief Prompt:
	> Thank you for taking part in our project.

	> We are trying to aid people who drink a lot that tend to fail remembering their memories from last night. So what we have done is track the person's movement and have user's activity be recorded.  



### **Session Observations**

#### User Testing 1 ####

<img src="user1.png" width="300">

Participant: 24 years old, Male<br>
Recruit method: Close friend of one of our members<br>
Why this person?: He doesn't drink too often but when he drinks a lot he tends to lose his stuff and forget where he left his belongings.

Summary<br>
 The user stated that the app was really useful because he can clearly see where he was last night. Just by doing that, he said, the possible locations of the lost belongings are limited. In addition he said the navigation and usage of the app was very intuitive. He first stated that calendar was not intuitive enough because of the unfinished implementation. He also stated that history page was not intuitve. The information that it provides is really valuable and easy to use when the user is used to it but when encountering first time, he said he didn't know what to do.

<img src="user2.png" width="300">

#### User Testing 2 ####
**Participant:** 22 years old, Male<br>
**Recruit method:** Friend from a band club<br>
**Why this person?:** He was interested in the application because he had many friends who always drink too much and need to be taken care of.

**Summary:**<br>
 

-----------
### **Usability Lessons**

**Missing/ expected/ suggested features that could improve UI
* P1 : There is no instruction or warning on what kind of things will happen when user starts recording (e.g GPS tracking will happen, at what time the recording will end, what the user should do to save photos...etc) (high)
	* Create a pop-up alert message, briefly notifying the user about the consequences
* P2 : There is no delete history button (흑역사는 지우고 싶을 수도 ) (mid)
	 * Add a “delete” button to the history list. No need of an edit button but delete button is needed.
* P3 : The individual history page doesn't have a filtering option for the list of activities (low)
	* Our idea had a filtering feature but didn’t implement it here
* P4 : The data is only relevant to the user's recording but users are also interested in their friends' record as well. (low)
	* Actually we wanted to add SNS-like features, but it was beyond the scope of this class, so we omitted. However, it definitely is a notable feature.
* P5 : When days not drank are selected on the calendar, there is no feedback that the selected date has no information/record. (low)
	* Can be improved by making the dates unselectable.
* P6 : some customisable settings would be helpful (mid)
	* need a settings page where type of recordings can be modified, time when recording automatically ends can be modified as well and  also setting where the user’s home is will also be helpful for GPS tracking.

 **Inconvience and potential error
* P7 : Days drank marked on calendar disappears when clicking on other dates or clicking on previous/next month buttons (low)
	* minor bug that should be fixed by connecting the calendar to the database
* P8 : How to prevent accidentally pressing stop record, because the user is drunk. (low)
	* idea : add a “slide to unlock” kind of feature to lock the phone while recording
  

### ** Overall reflection **
Because our service is not a complicated and extensive, we tried to make sure we do not add extraneous features to make the service unnecessarily complicated. We made sure our focus was on checking back on the recorded history, and the user testing was effective in showing that people's main interest is indeed what they did and where they were last night. There were many questions about how the recording actually works. People showed concern about what would happen if they accidently press stop button or they wanted to make sure that they were reminded for taking photo and the photos were automatically saved in the app, instead of them manually saving them into the app. Overall, the feedback was positive about the UI as well as the idea and the uniqueness (+ fun) of the service. For next time, we should not just assume that not implementing certain features can be just replaced by our explanations, but rather we should at least build a strong layout and inform the unimplemented features to the users beforehand so that they focus on the features they are testing on. 

-----------
### **Plan for Iterations**
Mostly we will spend time refining the UI. We will try to implement insights we have gotten from the usability tests done. Although no major problems were identified, minor changes and details can be added for improvement. We will add some warning/notification that alerts the user that tracking of GPS, call history, bank transactions will begin, when starting to record the data. Also, because our service is a mobile web application, it needs to be viewed on a phone. However, we experienced some error with certain browers, so we will figure out how to handle these problems next week.

### **Studio Reflections**

#### Feedback Summary & Course of Action
The main feedback of our studio session was that our questions did not seem to be specifically related to each task. We therefore modified our questions to properly explore the usability problems of our web applications. The questions are now categorized into each of the different tasks, so that users can answer in more detail.

