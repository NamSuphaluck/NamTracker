import "./AddEmployee.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

/**
 * This component renders a modal for editing an employee's information.
 * It includes text fields for the user ID, name, department, phone, and email.
 * It also includes a radio button selection for the employee's status.
 * The component takes an employee object as a prop and displays the employee's
 * information in the fields.
 * When the user clicks the save button, the component will send a request to
 * update the employee's information in the database.
 * When the user clicks the cancel button, the component will close the modal.
 */

async function AddEmployee() {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  
  const addEmp = async (name, department, phone, email, status) => {
    const bodyRequest = {
      name: name,
      department: department,
      phone: phone,
      email: email,
      status: status,
    };

    fetch("http://localhost:9000/employee/create", {
      method: "POST",
      headers: {
        Host: null,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyRequest),
    })
      .then(async (response) => {
        let res = await response.json();
        console.log(res);
        
        console.log(JSON.stringify(bodyRequest));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Modal
      show={true}
      onHide={false}
      backdrop={false}
      keyboard={false}
    >
      <Modal.Header className="modal-head" closeButton>
        <Modal.Title>Edit Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="form-group">
          <label>
            <b>Name</b>
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Name"
          ></input>
        </div>
        <br></br>
        <div class="form-group">
          <label>
            <b>Department</b>
          </label>
          <input
            type="text"
            class="form-control"
            id="department"
            placeholder="Department"
          ></input>
        </div>
        <br></br>
        <div class="form-group">
          <label>
            <b>Phone</b>
          </label>
          <input
            type="text"
            class="form-control"
            id="phone"
            placeholder="Phone"
          ></input>
        </div>
        <br></br>
        <div class="form-group">
          <label>
            <b>Email</b>
          </label>
          <input
            type="text"
            class="form-control"
            id="email"
            placeholder="Email"
          ></input>
        </div>
        <br></br>
        <form action="/action_page.php">
          <p>
            <b>Status</b>
          </p>
          <input
            type="radio"
            id="status"
            name="fav_language"
            value="Active"
          ></input>
          <label for="status">Active</label>
          <br></br>
          <input
            type="radio"
            id="status"
            name="fav_language"
            value="InActive"
          ></input>
          <label for="status">In-Active</label>
          <br></br>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" >
          Cancel
        </Button>
        <Button variant="primary" onClick={() => addEmp(/* ส่ง value : name, department, phone, email, status ที่มีค่าตามหน้าจอป๊อปอัพแก้ไขเรียบร้อยแล้ว*/)}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddEmployee;
