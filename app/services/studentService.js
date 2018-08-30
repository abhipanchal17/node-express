
//import model defination for db operation
var studentModel = require('../models/studentModel');

//this function used to get list of student
exports.list = function(req,res){

	//multiple where conditions
	let whereClause = {};

	//if requested status find active and inactive recods set where clause
	if(req.body.status != 'all' && req.body.status != '' && req.body.status != undefined){
		whereClause['active'] = req.body.status == 'active' ? 1 : 0;
	}
	
	//get students detail
	let whereConditional  = {where : whereClause };
	
	return new Promise(function(resolve,reject){
		return resolve(studentModel.findAll(whereConditional));
	});
}


//this function used to add new student 
exports.create = function(studentData){

	//promise handing
	return new Promise (function(resolve,reject){
		return resolve(studentModel.create(studentData));
	});
	
}

//this function used to update new student 
exports.update = function(studentId,studentData){

	//promises handing
	return new Promise (function(resolve,reject){
		return studentModel.findById(studentId).then((result) => {
			result.update(studentData);
			return resolve(result);
		}).catch((e)=>{
			return reject(e);
		});
	});
	
}

