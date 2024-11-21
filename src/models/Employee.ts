import mongoose, { Schema } from 'mongoose';

const EmployeeSchema: Schema = new Schema({
  userId: String,
  name:  String,
  department: String,
  phone:  Number,
  email: String,
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
},{collection: "emp_details"} )

export default mongoose.model('Employee', EmployeeSchema);