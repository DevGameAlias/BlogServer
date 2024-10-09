# BlogServer

Team  
Lucy 
Unique 
Ricardo 
Sam 

Server Side Routers and Schemas:
Author Schema: Unique
Newsletter Schema:Unique
Blog Schema: Lucy 
Story Schema:Lucy
Comments Schema:Ricardo
Events Schema:Sam
Song Schema:Sam
Story Review Schema:Ricardo

Blog Creation: Get, Post, Put, Delete - Unique
Story Creation: Get, Post, Put, Delete - Lucy
Event Creation: Get, Post, Put, Delete - Sam
Author Profile: Get, Put, - Ricardo 
User Comment Blog: Post, Delete,Put - Unique
User Story Review: Post, Put, Delete - Ricardo
User Email sign up: Put - Lucy
Gets:
Home Page - Sam
Story page - Sam
Blog page - Unique
Event Page - Ricardo
About page - Lucy



What is the primary purpose of website? (Social media following? Showcase??  	Promoting product??)  

Schedule meet next Monday (10/7 - 30-45mins) 

How does he want to track reader engagement? Third party through Facebook. He would have to get familiar with system.  

How active on social media? What sites does he use? - Very little time spent on social media. Only has a Facebook page that he uses for marketplace. Does not post.  

How often will he be engaging with his audience? 

Commenting on short stories and blogs? -Wants comments on short stories (ratings & feedback) 

Research blog sites talk to Mike about blog in landing page 

Needs storage unit to upload content 

 
Mongo Cloud Server will be used 

When handing off will be giving repository, must discuss on what the owner wants accounts and costs for the live server 


Goals: 

	-Reader 

*User can sign up for author newsletter 

*Read excerpts from author 

*User can leave comments 

*Connect via social media 

	-Author 

*Create an event for users to join 

*Reset password capabilities 

*Page for newsletter email submissions (see who submitted) 

*Write/Maintain blogs 

*Interact w/ user through newsletters and comments  

* Create event listing for future events 

* Short song/song links for short story 
 

Anti Goals: 

*No Mobile app 

*No intrusive ads  

*No book sales 


-RISKS 

-Business risks- 

*Saturated market 

*Social media presence 

*Negative comment/reviews 

-Technical Risks 

*Data info / security 

*?? Unforeseen bugs, loading slow?? 

-other risks 

*Work being stolen 

 <--PERSONAS--> 

 

Author:  Alexis Frank 

Age: 42 

Location: Sandiego CA 

Looking to showcase their work and build online presence 

She did journalism, working on becoming a free-lance author 

Married with a dog no kids 

Education BA literature 

Hobbies: Fishing, reading 

 

Member: Jessica Rea 

Age: 29 

Location: Plattsburg PA 

Influencer 

Using book club to find a community 

MA in photography  

Hobbies: Food content, photoshoots 

 

First time visitor: Bobby Vanbo 

Age: 37 

Location: Louisiana  

Care taker for his mom 

Associates: Business Admin 

Hobbies: alligator wrestling 

Wants to invest in someone looking for upcoming writers 

Data structure 

(this can be written as part of the technical architecture or separately) 

Author model 

* Name: string 

* Email: string (with email validation) (unique) 

* Password: string (with email validation)  


Newsletter Signup model 

*Email: string (with email validation) (unique) 

Created at: time stamp 

Blog Post model 

Id:  

Title: string (required) 

Content: string (required) 

Author: String (required) 

Created at: time stamp 

Update at: Time Stamp 

 Tags: string 

Comment model 

* Id:  

Post id: string (required) 

Content: string (required) 

Author: String (required) 

Created at: time stamp 


Short Story Add Model 

Id: (Required) 

Title (required, string) 

Genre (required string) 

Content (required string) 

Author (string required) 

Created At: Time Stamp 

Event model 

Event title (string) 

Date/time (string) 

Description(string) 

Location (string) 

Song Model 

Artist(string) 

Description (string) 

Title (string) 

Genre (string) 


Story titles 

 

Account management 

Create blog (author Profile) 

Create events (author profile) 

Reset Password (author) 

Notifications  

Update information 

Reviewing content 

review blog-Unique 

review about me page-Unique 

find social media page-Unique 

read short stories - Lucy 

Sign up for newsletter - Sam 

find event page -Sam 

Sign up for event - Sam 

Blogging 

Comment on blog (User) - lucy 

Comment on comment (user and author) - lucy 

 

Stories 

Log In(Author) 

As Alexis I would like to log in, to see notifications and update content 

 

Given I am the Owner, I have a specific log in URL 

When I put the Log in URL into, web browser 

Then I am taken to the Owner Log in page 

Given I am on the log in page 

When I fill out all the fields (email, password) with the correct credentials 

Then I am taken to my profile 

 

Create Blog (Author) 

As Alexis I would like to create a blog post, so that I can showcase my work and gain a following. 

 

Given that I am on the profile page, and I see the fields to create a blog post 

Then I can enter the title of the blog post,  

Then I can enter the content of the blog post, 

Then once all fields are filled, 

When I click submit, I receive a pop-up confirmation  

 

 

Create event 

As Alexis I would like to create an event, so that I can promote my works/book signing/book club to the community 

 

Given that I am on the profile page, and I can see the Create Event button 

When I click the Create Event button, 

Then I am taken to the Create Event Page 

Given that I am on the Create Event Page, and I can see the fields 

When I fill out all the fields (Title, Description, location, time and date) and click submit 

Then I receive a pop-up confirmation the event was created 

 

Password Reset 

As Alexis I would like to reset my password, so that I can log in again 

 

Given I am the Owner 

When I enter the specific log URL 

Then I am taken to a Log in page (specific to owner) 

Given I am on the log in page, and can see the reset password link 

When I click the reset password link 

Then I am I see a pop-up 

Given I see the pop-up with an input and submit button 

When I input the correct email address 

Then I receive a reset password link in my email 

Given I am in my email and can see the password reset email 

When I click on the link 

Then I am taken to the reset password page 

Given I am on the reset password page  

When I fill out the two fields with matching passwords 

Then I receive a pop-up confirmation that it has been updated 

 

Notifications 

 As Alexis, I would like to see my notifications, so I can review comments to be approved, as well see who signed up for newsletter, and events. 

 

Given I am on the profile I am able to see notification boxes 

When there is a new comment on a blog 

Then the Comment notification box will have a number equal to new comments 

When I click on comments 

Then it will drop down with comments to approve or deny 

When I click on approve 

Then the comment will be posted to the blog 

When I click deny  

Then the post is deleted 

When there is a new email signup for newsletter 

Then the Newsletter box will have a number equal to new emails 

When I click on Newsletter box 

Then I will see most recent email sign ups 

When I click mark as read 

Then the box will be cleared 

When I click a new person signs up for an event 

Then the Events box will have a number equal to the new emails 

When I click on the events box  

Then I will see the name and emails that signed up for the event 

When I click on mark as read  

Then the event box is cleared 

 

Update Blog 

As Alexis I would like to update my blog so that I can add a note to my blog 

 

As I am on the home page and see the search bar 

When I am typing my blog title 

Then it shows me a couple of titles that match 

When I click on the title I want 

Then I am taken to the actual post 

	As I am on the post and see the update button 

	When I click the update button 

	Then it allows me to edit the post 

	When I complete updating the blog and hit submit 

	Then I see a confirmation that it was updated 

 

Update Short Story 

As Alexis I would like to update my Short Story so that I can add a note to my Story 

 

As I am on the home page and see the search bar 

When I am typing my Story title 

Then it shows me a couple of titles that match 

When I click on the title I want 

Then I am taken to the actual post 

	As I am on the post and see the update button 

	When I click the update button 

	Then it allows me to edit the post 

	When I complete updating the Story and hit submit 

	Then I see a confirmation that it was updated 

 

 

	 

	 

 

 

 

 

Reviewing content 

	Review Blog: Jessica 

As Jessica, I want to review the author's blog posts so that I can stay updated on their latest work and thoughts. 

 

Given I am on the homepage  

When I click on the "Blog" section in the navigation menu  

Then I am taken to the blog page  

Given I am on the blog page When I scroll through the list of blog posts  

Then I can see titles, excerpts, and publication dates for each post  

When I click on a blog post title  

Then I am taken to the full blog post page  

Given I am on a blog post page  

When I read the content and scroll to the bottom  

Then I can see options to share the post on social media or leave a comment 

 

Review About Me: Bobby 

As Bobby, I want to review the author's "About Me" page so that I can learn more about their background and writing style. 

 

Given I am on the homepage  

When I click on the "About Me" link in the navigation menu  

Then I am taken to the About Me page  

Given I am on the About Me page  

When I scroll through the content  

Then I can see the author's biography, photo, and writing background  

When I reach the bottom of the page  

Then I can see links to the author's social media profiles and latest works 

 

	Find Social Media Page: Jessica 

As Jessica, I want to find the author's social media pages so that I can follow them on my preferred platforms. 

 

Given I am on any page of the website  

When I look for social media icons in the footer or header  

Then I can see icons for various social media platforms  

When I click on a social media icon  

Then I am taken to the author's profile on that platform in a new tab 

 

 

 

 

 

 

 

Sign up for newsletter (Sam) 

 

As Jessica I would like to sign up for the newsletter so that I can stay up to date with up-and-coming story releases and events to attend and promote 

 

Given I am on the Homepage 

When I click on the Community tab in the navigation bar, 

Then I will be redirected to a page designed for user interaction and community events and see an email text input form   

When I type in my email, I will be registered to receive email marketing and event listings 

 

 

	Find Event Page (Sam) 

 

Given I am on the Homepage 

When I click on the Community tab in the navigation bar, 

Then I will be redirected to a page designed for user interaction and community events 

When the Community page loads, 

Then I will see a calendar listing with past an upcoming event that I will be able to attend 

 

	Signing up for Events (Sam) 

 

As Bobby I want to be able to sign up for an up-and-coming event so that i can meet possible people to invest in while also being able to network 

 

Given I am on the Homepage 

When I click on the Community tab in the navigation bar, 

Then I will be redirected to a page designed for user interaction and community events 

When the Community page loads, 

Then I will see a calendar listing with past an upcoming event that I will be able to attend 

When I click on the calendar listing  

Then I will see a form that allows me to sign up for attend the Next event  

When I submit the form, I will receive an email confirmation that verifies my attendance  

 

<--- LUCYS WORK--->  

(Comment on blog (User)) As Bobby  

As a first-time visitor, Bobby wants to leave a comment on a blog post he finds interesting. 

 

Given Bobby is on the homepage  

When he clicks on the "Blog" section in the navigation menu  

Then I am taken to the blog page  

Then I can see titles, excerpts, and publication dates for each post, there is a "Leave Comment" box at the bottom of each blog post, 

  when Bobby types in his comment and then presses submit the comment is sent to be reviewed. 

 

 

 

 (Comment on comment (User and Author)) As Alexis 

When checking blog comments Alexis want to respond to a comment left from Bobby, after approving the comment 

option to respond is already there when reviewing but is activated when comment has been excepted 

 

 

<---Read Short Stories---> Jessica 

 

As Jessica I want to read a short story,  

Jessica is in the home page and can see in the nav bar “Short story’s” when clicked 

Navigates to short story page 

When on the page you scroll through each story,  

Can only see the title and some of the story you can see a continue reading tab when clicked you see the full story 

At the bottom of story there is comments section 
