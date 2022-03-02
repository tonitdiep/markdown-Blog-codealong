#Personal Knowledge Learning Corner 

## What is happening here? creating our server 
Express.js res.send() function that sends HTTP response
    https://www.geeksforgeeks.org/express-js-res-send-function/

express is to create our server 
mongoose is our database 
ejs are our different views
nodenom automatically refresh our web page per change
mongoDB is actually a document database aside from being NoSQL or not only SQL, mondoDB can use SQL
    -Non-Relational DB but we can store relational data in mongoDB just stored differently than in reatlionsal database
    -JSON under the hood with JavaScript Object Notation
    -

### console commands to run backend applicaiton: 
    -'npm init -y' to set up server
    -'npm i express mongoose ejs' to install dependencies 
    -npm i --save-dev nodemon' to install dev dependencies
        **** go to package.json file to create a simple script 
            "scripts": {"devStart": "nodemon server.js"}
    -'npm run devStart' to run the server

## Set up Server in server.js
const express = require('express')
const app = express()
app.listen(5000)   
<!-- ^^^ set up localhost port to 5000 in localhost:5000 -->
### learning bootstrap:
- class="form-control"
"The .form-group class is the easiest way to add some structure to forms. It provides a flexible class that encourages proper grouping of labels, controls, optional help text, and form validation messaging. By default it only applies margin-bottom , but it picks up additional styles in .form-inline as needed." (https://getbootstrap.com/docs/4.0/components/forms/)

