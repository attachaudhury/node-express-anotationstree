// imports
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require("mongoose")
var searchRoute = require('./routes/SearchRoute');
var dbSeedService = require('./services/DbSeedService');

// connecting to database
mongoose.connect("mongodb://localhost:27017/annotations", {
   useNewUrlParser: true
});


// express app con fuguration
var app = express(); 
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded(
  {extented: true}
));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, PATCH, OPTIONS,DELETE");
  next()
});

//registering routes
app.get('/', (req,res)=>{
   res.send({"status":"success"})
});
app.use('/search', searchRoute);


http.createServer(app).listen(3000, () => {
  console.log('Server started on port 3000');
  dbSeedService.seedDb();
});