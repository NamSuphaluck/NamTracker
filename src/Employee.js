const express = require("express");
const app = express();
const mongoose = require("mongoose");
const employeeModel = require("./EmployeeModel");

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/employee";
const PORT = process.env.PORT || 9000;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

mongoose.connection.on("error", (err) => {
  console.error("MongoDB error", err);
});

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE" ,
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
  )
});

app.get("/employee", async (req,res) => {
  try {
    const employees = await employeeModel.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.get("/employee/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await employeeModel.findById(id);
    res.json(employee);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.post("/employee/create", async (req, res) => {
  const payload = req.body;
  try {
    const employee = new employeeModel(payload);
    await employee.save();
    res.status(201).end();
  } catch (error) {
    res.status(400).json(error);
  }
});

app.put("/employee/update/:id", async (req, res) => {
  const payload = req.body;
  const { id } = req.params;

  console.log(req)
  try {
    const employee = await employeeModel.findByIdAndUpdate(id, {
      $set: payload,
    });
    res.json(employee);
  } catch (error) {
    res.status(400).json(error);
  }
});

// app.delete("/employee/:id", async (req, res) => {
//   const { id } = req.params;

//   try {
//     await employeeModel.findByIdAndDelete(id);
//     res.status(204).end();
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});
