import "./Sidebar.css";
import Logo_img from "../../Images/logo1.png";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const initPage = "Dashboard";
function Sidebar() {
  const [tab, setTab] = useState("");

  useEffect(() => {
    setTab(initPage);
  }, []);

  const dashboardRef = useRef();
  const employeesRef = useRef();
  const workingStatusRef = useRef();
  const messagesRef = useRef();
  const notificationRef = useRef();
  const settingsRef = useRef();
  const userRef = useRef();

  useEffect(() => {
    if (tab === "Employees") {
      employeesRef.current.click();
    } else if (tab === "Working Status") {
      workingStatusRef.current.click();
    } else if (tab === "Messages") {
      messagesRef.current.click();
    } else if (tab === "Notifications") {
      notificationRef.current.click();
    } else if (tab === "Settings") {
      settingsRef.current.click();
    } else if (tab === "User") {
      userRef.current.click();
    } else if (tab === "Dashboard") {
      dashboardRef.current.click();
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
          <Link to="/dashboard" ref={dashboardRef}>
            <button
              className="btn btn-link"
              style={{ color: "white", textDecoration: "none" }}
              onClick={() => setTab("Dashboard")}
            >
              <span className="bi bi-grid-1x2-fill">
                &nbsp;&nbsp;&nbsp;Dashboard
              </span>
            </button>
          </Link>

          <Link to="/employees" ref={employeesRef}>
            <button
              className="btn btn-link"
              style={{ color: "white", textDecoration: "none" }}
              onClick={() => setTab("Employees")}
            >
              <span className="bi bi-people-fill">
                &nbsp;&nbsp;&nbsp;Employees
              </span>
            </button>
          </Link>

          <Link to="/working-status" ref={workingStatusRef}>
            <button
              className="btn btn-link"
              style={{ color: "white", textDecoration: "none" }}
              onClick={() => setTab("Working Status")}
            >
              <span className="bi bi-clock-history">
                &nbsp;&nbsp;&nbsp;Working Status
              </span>
            </button>
          </Link>

          <Link to="/messages" ref={messagesRef}>
            <button
              className="btn btn-link"
              style={{ color: "white", textDecoration: "none" }}
              onClick={() => setTab("Messages")}
            >
              <span className="bi bi-chat-right-text-fill">
                &nbsp;&nbsp;&nbsp;Messages
              </span>
            </button>
          </Link>

          <Link to="/notifications" ref={notificationRef}>
            <button
              className="btn btn-link"
              style={{ color: "white", textDecoration: "none" }}
              onClick={() => setTab("Notifications")}
            >
              <span className="bi bi-bell-fill">
                &nbsp;&nbsp;&nbsp;Notifications
              </span>
            </button>
          </Link>

          <Link to="/settings" ref={settingsRef}>
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
              <span className="bi bi-person-circle">&nbsp;&nbsp;Username</span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
