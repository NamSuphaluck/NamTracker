const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employee = new Schema({
  userId: String,
  name:  String,
  department: String,
  phone:  String,
  email: String,
  status: String
}, { timestamps: true, versionKey: false })

const employeeModel = mongoose.model('emp_detail', employee)

module.exports = employeeModel
