import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

// Model
import Employee from "../../models/Employee";

const data = express.Router();
dotenv.config();

// API เรียกดูพนักงาน
data.get("/getEmployee", async (req: Request, res: Response) => {
    try{
        const data = await Employee.find();
        res.status(200).json(data);
    }catch(err){
        res.status(500).json(err);
    }
});

// API เพิ่มพนักงาน
data.post("/addEmployee", async (req: Request, res: Response) => {
    const body = req.body;
    if (!body.name || !body.department || !body.phone || !body.email) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    try{
        const data = await Employee.create(body);
        res.status(200).json(data);
    }catch(err){
        res.status(500).json(err);
    }
});

// API แก้ไขพนักงาน
data.put("/updateEmployee/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    const body = req.body;

    console.log("ID:", id);
    console.log("Body:", body);

    if (!body.name || !body.department || !body.phone || !body.email) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        const data = await Employee.findByIdAndUpdate(id, body, { new: true });
        if (!data) {
            console.log("Employee not found");
            return res.status(404).json({ error: "Employee not found" });
        }
        console.log("Updated Employee:", data);
        res.status(200).json(data);
    } catch (err) {
        console.error("Internal server error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});
//API ลบพนักงาน
data.delete("/deleteEmployee/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const data = await Employee.findByIdAndDelete(id);
        if (!data) {
            console.log("Employee not found");
            return res.status(404).json({ error: "Employee not found" });
        }
        console.log("Deleted Employee:", data);
        res.status(200).json(data);
    } catch (err) {
        console.error("Internal server error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default data;