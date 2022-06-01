# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #4: The Community Project 

**This is my fourth and final project for GA's Software Engineering Immersive course.** 

**I built a full-stack application** with a Python Django REST framework API and a React front end with Tailwind styling. 
It's called The Community Project, and the idea was to make a template for a potential community website that I might build for friends or future clients looking to build an online community. 

*Here's a quick look at The Community Project homepage:*

![](./src/images/home-page-register.gif)

## Goal 
Solo project where I built a full-stack web app with React, a Python Django API and a PostgreSQL database. 

**Timeframe**

Two weeks (35 course hours)

## Technologies used 

- Python 
- Django REST framework
- Poetry 
- JavaScript
- JSX
- PostgreSQL
- Insomnia 
- React 
- React Router/Dom
- Tailwind
- VSCode
- Git/GitHub
- Excalidraw
- QuickDB
- Trello 
- unDraw images
- Heroku
- Netlify
- Table Plus

## Project brief 

Following the project specifications for a Project 4 MVP, I did the following: 

* **Built a full-stack application** making my own backend with Django using the Poetry package manager 
* **Used a Python Django API** Django REST Framework served my data to the API from a PostgreSQL database. I used Table Plus to view the data in my database. 
* **Built a separate front end for my API** - I did this with React. 
* **Made a complete product** - My API has 4 models all with CRUD functionality. I was able to implement some of this functionality on the front end with user registration and login. 
* **Implemented thoughtful user stories** - I built a wire frame and user stories with Excalidraw. These stories were detailed enough that I knew the Basic User story was my target MVP. 
* **Implemented a visually impressive design** - As encouraged by my instructors, I took time to present a design I'm proud of and made sure at the beginning of week 2 of the project that I was learning the styling library I'd chosen. This also gave me the opportunity to use open source images from unDraw. 
* **Deployed the project online** - Here is the front end **[The Community Project Front End](https://capable-bunny-0040ae.netlify.app/)**. And here is the backend **[The Community Project Backend](https://the-community-project.herokuapp.com/)**

## The Community Project

I love the idea of community and people connecting positively over activities or ideas they love. My idea was to use this project to build a backend that I might use for friends who are looking to build a community page for their own passions. This version of the project has a blog and login and register function. 

![](./src/images/login-go-to-blog.gif)

### Deployed version 

**[The Community Project Front End](https://capable-bunny-0040ae.netlify.app/)**

## Planning 

Take a day or two to plan my project helped me feel comfortable and confident when I started to code. 

### Database Diagrams

With the Python Django framework, it was important to draw database diagrams. I knew I'd want a User, Author, Blogpost, Blog comment, and Blog category classes in Django. Other models in the database diagram that I didn't end up coding were Conversations and Conversation topics for a possible chatroom feature. I built my models using QuickDB, which helped visualize one-to-one, one-to-many, and many-to-many relationships. What I enjoyed about this part was thinking about how the data I wanted to eventually consume with a front end needed to be designed in the backend. 

![](./src/images/Quick-DB-image-1.jpg)

![](./src/images/Quick-DB-image-2.jpg)

It took an entire class session to get these models right. 

### Wireframes and User Stories 

One my database diagrams were ready to go, I used Excalidraw to sketch a wireframe and then to think about user stories. User stories were a new concept to me. As I planned to have visitors, basic users, and staff writers for this project, I sketched out a story for each type of user. While I didn't code all my ideas for all of these users, I found the exercise to be quite useful and even enjoyable. 

*Here's my wireframe.*

![](./src/images/wireframe1.png)

*And here are my user stories.*

These are for a "visitor" and a "basic user":

![](./src/images/userstories1.png)

This one is for the "staff writer" or Django's "superuser":

![](./src/images/userstories2.jpg)

As you can see, I had some ambitious ideas! 

## Development

My backend adventures got off to a rough start. Django uses the term "app" for a specific python class or model. I still don't know what exactly went wrong, but I got a lot of errors setting up my Blog Post app and there were problems migrating the the apps into my TablePlus database. Long story short, but day 2 of coding, I was brave and deleted everything and started a new Django project. 

### Backend CRUD functionality

#### Working with serializers 

One piece of code that I worked on for what felt like a long time was the serializer function for updating 

 - add code snippet for get context or whatever it was 

#### Authorization and permissions 
 - add code snippet showing 

### Front end noteworthy features 

#### Working with props
 - Props (username)

#### Authorization

 - changing the loggedIn/loggedOut status
 - changing isStaffWriter and changing what's in the navbar 

### Deployment and Styling 

- a note on deployment
- a note on styling 

## Wins 

- A user is able to register and login on the front end and then logout. 
- My django backend apps all have CRUD functionality that includes authorization and permissions. 
- Using the unDraw images, I built a fully functioning app that looks good. 


## Challenges
 - As I mentioned in the development section, I was getting a lot of errors by day 2 of coding which was super frustrating, so I started the project over halfway through the first project week. 

 - Understanding how Django framework serializers work was a big challenge, and I enjoyed the workshops offered by our instructor during this project because it helped me and the other students talk through the code of how serializers work. 

 - Not knowing what I didn't know: 1) I researched an implemented a RichTextEditor in my backend that I thought would help me with the Blog Post django app. It turned out that this is not compatible with a React frontend. I spend a good morning getting it all set up, and then ended up removing it completely later on. I then tried the Quill Editor on the front end and read and watched tutorials but couldn't get that to work either. 2) Django REST framework has an isAuthenticated permissions setting that I thought worked on all API call methods, but it doesn't, and I spent an entire afternoon wondering why my update user function was getting errors. This made me realize returning to the documentation when I'm getting permission errors could be the right thing to do. I ended up working on this one with my instructor.      

 - Both my backend and front end were deployed to Heroku and Netlify, respectively, before the project deadline, but I ran into CORS issues that blocked my front end from accessing the backend. I didn't panic and ran the project from my local host for my presentation and after a couple days of rest was able to appropriately adjust the 

## Key learnings 

I feel like with each successive project, I find that there are features I work on in the process that don't see the light of day in the deployed front end but it's all par for the course. Here are a few things that I learned from this project: 

 - It's totally ok to cut your losses and delete your project and start over. 
 - Projects are still a learning experience. Our instructor during this project offered mini workshops on features the group was struggling with, and at times I found it frustrating because I wanted to work on my project, but then realized reworking and revisiting certain concepts, like permissions and authorization was a way of going deeper and 
 - In one of these workshops we were introduced to TypeScript. I didn't end up using this technology 
 - Using props in React 
 - Working with images 
 - My wireframe was a bit ambitious for this project's scale 
- Learning a new styling library was fun especially since Tailwind has cool features out of the box. 
- Differences between relational and non-relational databases 


## If I'd had more time...
 
 - My front-end blog would have a comment function. This functionality works in the backend, but I didn't have time to implement it in the front end. 
 - My blog posts would be able to be sorted by category. 
 - I really wanted to implement a search bar, also another feature for another day
 - A user would have a profile page they could update. 
 

