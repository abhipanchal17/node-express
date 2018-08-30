

var Sequelize = require('sequelize');

const sequelize = new Sequelize('student_sequelize', 'root', 'root', {
  host: '192.168.1.53',
  dialect: 'mysql',
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
	console.error('Unable to connect to the database:', err);
});


/*sequelize.sync({force:true}).complete(function (err) {
 if(err){
    console.log('An error occur while creating table');
 }else{
    console.log('Item table created successfully');
 }
});*/

module.exports = sequelize;