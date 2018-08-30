
//impoert student service for data manipulation
var studentService = require('../services/studentService');

//define condtroller
var StudentController = {};

//get all students details
StudentController.getAllStudent = function(req,res){
	
	//all student details
	studentService.list(req,res).then((studentData)=>{
		
		//success record details
		if(studentData.length > 0){
			return res.status(200).json({'msg':'student details','data': studentData});
		}

		//no record found
		return res.status(200).json({'msg':'no record found'});
	
	}).catch((e)=>{
		
		//error
		return res.status(500).json({'msg':'system error'});
	});


};


//add new student
StudentController.addStudent = function(req,res){
	
	//requested params
	let firstName = req.body.first_name;
	let lastName = req.body.last_name;
	let email = req.body.email;
	
	//store data into array
	let studentDetails = {};
	studentDetails['first_name'] = firstName;
	studentDetails['last_name'] = lastName;
	studentDetails['email'] = email;
	
	
	//add student
	studentService.create(studentDetails).then((recordData)=>{
		
		//success
		return res.status(200).json({'msg':'new Student created successfully'});
	}).catch((e)=>{
		
		//error handing
		return res.status(500).json({'msg':'error while occured while create new student'});
	});
};


//update student
StudentController.updateStudent = function(req,res){
	
	//requested params
	let firstName = req.body.first_name;
	let lastName = req.body.last_name;
	let email = req.body.email;
	let studentId = req.body.student_id;
	
	//store data into array
	let studentDetails = {};
	studentDetails['first_name'] = firstName;
	studentDetails['last_name'] = lastName;
	studentDetails['email'] = email;
	
	
	//update student
	studentService.update(studentId,studentDetails).then((recordData)=>{
		
		//success response
		return res.status(200).json({'msg':'student updated successfully'});
	}).catch((e)=>{

		//error response
		return res.status(500).json({'msg':'error while occured while update student'});
	});
};


//filter student details
StudentController.filterStudent = function(req,res){
	
	//filter student details	
	studentService.list(req,res).then((studentData)=>{
		
		//success record details
		if(studentData.length > 0){
			return res.status(200).json({'msg':'student details','data': studentData});
		}

		//no record found
		return res.status(200).json({'msg':'no record found'});
	
	}).catch((e)=>{
		
		//error
		return res.status(500).json({'msg':'system error'});
	});
};


//ecport controller method
module.exports = StudentController;