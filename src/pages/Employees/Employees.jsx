import { useState, useEffect } from "react";
import "./Employees.css";
import "./EditEmployee.css";
import "./AddEmployee.css";
import editDataEmployee from "./EditEmployee.jsx";
import AddEmployee from "./AddEmployee.jsx";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [triggerUpdate, setTriggerUpdate] = useState(false);

  useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    fetch("http://localhost:9000/employee", {
      method: "GET",
      headers: {
        Host: null,
      },
      body: null,
    })
      .then(async (response) => {
        let res = await response.json();
        console.log(res);
        setEmployees(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onDelete = (id) => {
    console.log("object");
    const filter = employees.filter((item) => item.id !== id);
    setEmployees(filter);
  };

  return (
    <div className="Employees">
      <h1>Employees</h1>
      <div className="menu">
        <button className="back" onClick={() => window.history.back()}>
          Back
        </button>
        <div className="add-employee">
          <button onClick={() => AddEmployee()}>
            Add Employee</button>
        </div>
        {/* <div className="edit-employee">
          <Link to="/UpdateEmployee">
            <button>Update Employee</button>
          </Link>
        </div> */}
      </div>
      {/* {triggerUpdate && (
        <input
          type="text"
          // onChange={(event) => setEditEmployee(event.target.value)}
        />
      )} */}
      <div>
        <table>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>Status</th>
            <th></th>
            {triggerUpdate && <th>edit</th>}
          </tr>
          {employees &&
            employees.map((item) => {
              return (
                <tr>
                  {/* <td>
                    {" "}
                    {triggerUpdate && item.id === id_edit ? (
                      <input
                        type="text"
                        onChange={(event) =>
                          setEditEmployee(event.target.value, item.name)
                        }
                      />
                    ) : (
                      item.id
                    )}
                  </td> */}
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.department}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.status}</td>
                  {/* <td>
                    <button onClick={() => onDelete(item.id)}>Delete</button>
                  </td> */}
                  <td>
                    {/* <td onClick={() => onEdit(item.id, item.name)}> */}
                    <button onClick={() => editDataEmployee(/* ส่ง item value : id, name, department, phone, email, status ที่มีค่าตามหน้าจอป๊อปอัพแก้ไขเรียบร้อยแล้ว ใน update() item._id, item.name, item.department, item.phone, item.email, item.status*/)}>Edit</button>
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
}

export default Employees;
