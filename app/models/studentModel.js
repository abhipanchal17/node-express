var sequelize = require( "../config/db_connection.js" );
var Sequelize = require( 'sequelize');

var Student = sequelize.define('student', {
  id : {
    primaryKey: true,
    autoIncrement:true,
    type: Sequelize.INTEGER,
  },
  first_name: {
    type: Sequelize.STRING
  },
  last_name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  active: {
    type: Sequelize.INTEGER
  },
  deleted: {
    type: Sequelize.INTEGER
  },
  created_at: {
    type: Sequelize.DATE
  },
  updated_at:{
    type: Sequelize.DATE
  }
},{
    timestamps: false
});

module.exports = Student;