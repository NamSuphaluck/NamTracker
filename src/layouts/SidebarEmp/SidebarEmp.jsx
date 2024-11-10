import "./SidebarEmp.css";
import Logo_img from "../../Images/logo1.png";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
const initPage = "EmpDashboard";

function SidebarEmp() {
  const [tab, setTab] = useState("");

  useEffect(() => {
    setTab(initPage);
  }, []);

  const EmpDashboardRef = useRef();
  const EmpWorkingStatusRef = useRef();
  const EmpMessagesRef = useRef();
  const EmpNotificationRef = useRef();
  const EmpSettingsRef = useRef();
  const EmpSalaryRef = useRef();
  const userRef = useRef();

  useEffect(() => {
    if (tab === "EmpWorking Status") {
      EmpWorkingStatusRef.current.click();
    } else if (tab === "EmpMessages") {
      EmpMessagesRef.current.click();
    } else if (tab === "EmpNotifications") {
      EmpNotificationRef.current.click();
    } else if (tab === "EmpSettings") {
      EmpSettingsRef.current.click();
    } else if (tab === "User") {
      userRef.current.click();
    } else if (tab === "EmpSalary") {
      EmpSalaryRef.current.click();
    } else if (tab === "EmpDashboard") {
      EmpDashboardRef.current.click();
    }
  }, [tab]);
  return (
    <div className="sidebar">
      <div className="sidebar">
        <div className="sidebar-top">
          <div className="sidebar-logo">
            <img src={Logo_img} alt="logo" style={{ width: "100%" }} />
          </div>
          <span className="sidebar-name">WorkMate</span>
        </div>
        <div className="sidebar-menu">
          <Link to="/EmpDashboard" ref={EmpDashboardRef}>
            <button
              className="btn btn-link"
              style={{ color: "white", textDecoration: "none" }}
              onClick={() => setTab("EmpDashboard")}
            >
              <span className="bi bi-grid-1x2-fill">
                &nbsp;&nbsp;&nbsp;Dashboard
              </span>
            </button>
          </Link>

          <Link to="/EmpWorking-status" ref={EmpWorkingStatusRef}>
            <button
              className="btn btn-link"
              style={{ color: "white", textDecoration: "none" }}
              onClick={() => setTab("EmpWorking Status")}
            >
              <span className="bi bi-clock-history">
                &nbsp;&nbsp;&nbsp;Working Status
              </span>
            </button>
          </Link>

          <Link to="/EmpSalary" ref={EmpSalaryRef}>
            <button
              className="btn btn-link"
              style={{ color: "white", textDecoration: "none" }}
              onClick={() => setTab("EmpSalary")}
            >
              <span className="bi bi-wallet-fill">
                &nbsp;&nbsp;&nbsp;Salary
              </span>
            </button>
          </Link>

          <Link to="/EmpMessages" ref={EmpMessagesRef}>
            <button
              className="btn btn-link"
              style={{ color: "white", textDecoration: "none" }}
              onClick={() => setTab("EmpMessages")}
            >
              <span className="bi bi-chat-right-text-fill">
                &nbsp;&nbsp;&nbsp;Messages
              </span>
            </button>
          </Link>

          <Link to="/EmpNotifications" ref={EmpNotificationRef}>
            <button
              className="btn btn-link"
              style={{ color: "white", textDecoration: "none" }}
              onClick={() => setTab("EmpNotifications")}
            >
              <span className="bi bi-bell-fill">
                &nbsp;&nbsp;&nbsp;Notifications
              </span>
            </button>
          </Link>

          <Link to="/EmpSettings" ref={EmpSettingsRef}>
            <button
              className="btn btn-link"
              style={{ color: "white", textDecoration: "none" }}
              onClick={() => setTab("Settings")}
            >
              <span className="bi bi-gear-wide-connected">
                &nbsp;&nbsp;&nbsp;Settings
              </span>
            </button>
          </Link>
        </div>
        <div className="sidebar-footer">
          <div className="profile-name" style={{ color: "white" }}>
            <Link to="/user" ref={userRef}>
              <button
                className="btn btn-link"
                style={{ color: "white", textDecoration: "none" }}
                onClick={() => setTab("User")}
              >
                <span className="bi bi-person-circle">
                  &nbsp;&nbsp;Username
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarEmp;
