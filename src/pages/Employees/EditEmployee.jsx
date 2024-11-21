import "./EditEmployee.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

function EditEmployee({ id, name, department, phone, email, status, onSave }) {
  
  const [formData, setFormData] = useState({
    name,
    department,
    phone,
    email,
    status,
  });

  
  const handleChange = (e) => {
    const { id, value } = e.target;

  
    if (id === "status_active" || id === "status_inactive") {
      setFormData((prevData) => ({
        ...prevData,
        status: value, 
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value, 
      }));
    }
  };

  
  const update = async () => {
    const bodyRequest = {
      userId: id,
      name: formData.name,
      department: formData.department,
      phone: formData.phone,
      email: formData.email,
      status: formData.status,
    };

    try {
      const response = await fetch(`http://localhost:9000/employee/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyRequest),
      });

      const res = await response.json();
      console.log(res);
      onSave(); 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      id="modal-test"
      show={true}
      onHide={() => {}}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header className="modal-head" closeButton>
        <Modal.Title>Edit Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group">
          <label><b>User ID</b></label>
          <input
            type="text"
            className="form-control"
            id="user_id"
            value={id}
            disabled
          />
        </div>
        <div className="form-group">
          <label><b>Name</b></label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label><b>Department</b></label>
          <input
            type="text"
            className="form-control"
            id="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Department"
          />
        </div>
        <div className="form-group">
          <label><b>Phone</b></label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
        </div>
        <div className="form-group">
          <label><b>Email</b></label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label><b>Status</b></label>
          <div>
            <input
              type="radio"
              id="status_active"
              name="status"
              value="Active"
              checked={formData.status === "Active"}
              onChange={handleChange}
            />
            <label htmlFor="status_active">Active</label>
            <input
              type="radio"
              id="status_inactive"
              name="status"
              value="InActive"
              checked={formData.status === "InActive"}
              onChange={handleChange}
            />
            <label htmlFor="status_inactive">In-Active</label>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => {}}>Cancel</Button>
        <Button variant="primary" onClick={update}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditEmployee;
