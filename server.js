//Dependencies
const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const passport = require('passport');
const path = require('path');
const session = require('express-session');

// Mongoose mpromise deprecated - use bluebird for promises
const Promise = require('bluebird');
mongoose.Promise = Promise;

//MODEL CONTROLLERS WILL GO HERE


//Start Express settings
//======================
//Initialize Express
const app = express();

//View engine setup
app.set('views', path.join(__dirname, 'views'));

//Override POST to have DELETE and PUT
app.use(methodOverride('_method'))
	.use(logger('dev')
	.use(bodyParser.json)
	.use(bodyParser.urlencoded({ extended: false }))
	.use(bodyParser.text())
	.use(bodyParser.json({ type: "application/vnd.api+json" }))
	.use(session({
		secret: "blame Canada", 
		resave: false, 
		saveUninitialized: false}))
	.use(passport.initialize())
	.use(passport.session())

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, 'public')));


//=====================================================================
//what to send based on route
// app.use('/user', clients_controller)
// app.use('/search', search_controller)
//=====================================================================


// Database configuration with mongoose. Uses local database when not in production
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/masonportfolio");
const db = mongoose.connection;

//Show any mongoose errors
db.on("error", (error)=> {
	console.log("Mongosse Error: ", error)
})

//Once logged into the db through mongoose, log a success message
db.once("open", ()=> {
	console.log("Mongosse connection successful.")
})

//Use port 3000 for development, otherwise use any available port during production
const port process.env.PORT || 3000;

//Listen on port 3000 when local
app.listen(port, ()=> {
	console.log("listening on port %s", port)
})





















