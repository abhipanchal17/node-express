var express = require('express');
var studentRoute = express.Router();
var studentController = require('../app/controllers/studentController');

/* GET users listing. */
studentRoute.get('/', studentController.getAllStudent);

//add student
studentRoute.post('/add', studentController.addStudent);

//update student
studentRoute.post('/update', studentController.updateStudent);


//filter student status
studentRoute.post('/filter', studentController.filterStudent);

module.exports = studentRoute;
