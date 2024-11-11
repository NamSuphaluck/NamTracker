import React from "react";
import "./UpdateEmployee.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

function UpdateEmployee() {
  return (
    <div className="update-employee-header">

      <div className="backinUpdate">
        <button onClick={() => window.history.back()}>Back</button>
      </div>
      
      <h2>Update</h2>

      <div>
        <input
          type="text"
          maxLength={13}
          onKeyDown={(e) => {
            if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
              e.preventDefault();
            }
          }}
        />{" "}
        &nbsp;
        <button type="submit">ตกลง</button>
      </div>
    </div>
  );
}

export default UpdateEmployee;
