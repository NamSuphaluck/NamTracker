import { useState, useEffect } from "react";
import axios from "axios";
import "./Employees.css";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    department: "",
    phone: "",
    email: "",
  });

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9000/api/data/getEmployee"
      );
      console.log("API Response:", response.data);
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleShow = () => setShowAddEmployee(true);
  const handleClose = () => {
    setShowAddEmployee(false);
    setNewEmployee({ name: "", department: "", phone: "", email: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddEmployee = async (e) => {
    e.preventDefault(); // ป้องกันการ refresh หน้า
    try {
      const response = await axios.post(
        "http://localhost:9000/api/data/addEmployee",
        newEmployee
      );
      console.log("Employee added:", response.data);
      setEmployees((prevEmployees) => [...prevEmployees, response.data]);
      handleClose();
    } catch (error) {
      console.error("Error adding employee:", error.message);
    }
  };

  const handleEditClick = (employee) => {
    setSelectedEmployee(employee); // เก็บข้อมูลพนักงานที่เลือก
    setIsModalOpen(true); // เปิด Modal
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:9000/api/data/updateEmployee/${selectedEmployee._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(selectedEmployee),
        }
      );

      if (response.ok) {
        const updatedEmployee = await response.json();
        console.log("Updated Employee:", updatedEmployee);
        // อัปเดต state หลังจากบันทึกข้อมูลสำเร็จ
        setEmployees((prev) =>
          prev.map((emp) =>
            emp._id === updatedEmployee._id ? updatedEmployee : emp
          )
        );
        setIsModalOpen(false); // ปิดโมดอลหลังจากอัปเดต
      } else {
        console.error("Failed to update employee");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDeleteEmployee = async (employeeId) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        const response = await fetch(
          `http://localhost:9000/api/data/deleteEmployee/${employeeId}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          alert("Employee deleted successfully");
          // อัปเดตตารางโดยการลบพนักงานที่ถูกลบออกจาก State
          setEmployees((prevEmployees) =>
            prevEmployees.filter((emp) => emp._id !== employeeId)
          );
        } else {
          console.error("Failed to delete employee");
          alert("Failed to delete employee");
        }
      } catch (error) {
        console.error("Error deleting employee:", error);
        alert("Error deleting employee");
      }
    }
  };

  return (
    <div className="Employees">
      <h1>Employees</h1>
      <div className="menu">
        <div className="add-employee">
          <button className="button-add" onClick={handleShow}>
            Add Employee
          </button>
        </div>
      </div>

      {showAddEmployee && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Add New Employee</h2>
            <form className="add-employee-form" onSubmit={handleAddEmployee}>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={newEmployee.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Department:</label>
                <input
                  type="text"
                  name="department"
                  value={newEmployee.department}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={newEmployee.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={newEmployee.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-actions">
                <button type="submit">Add Employee</button>
                <button type="button" onClick={handleClose}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Contact Number</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr key={employee._id}>
                <td>{employee._id}</td>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td>{employee.status}</td>
                <td>
                  <button onClick={() => handleEditClick(employee)}>Edit</button>
                  &nbsp;
                  <button onClick={() => handleDeleteEmployee(employee._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && selectedEmployee && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Employee</h2>
            <form onSubmit={handleUpdate}>
              <label>
                Name:
                <input
                  type="text"
                  value={selectedEmployee.name}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      name: e.target.value,
                    })
                  }
                />
              </label>
              <label>
                Department:
                <input
                  type="text"
                  value={selectedEmployee.department}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      department: e.target.value,
                    })
                  }
                />
              </label>
              <label>
                Contact Number:
                <input
                  type="text"
                  value={selectedEmployee.phone}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      phone: e.target.value,
                    })
                  }
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  value={selectedEmployee.email}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      email: e.target.value,
                    })
                  }
                />
              </label>
              <button type="submit">Save</button>
              <button type="button" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Employees;
