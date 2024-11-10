import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout/Layout";
import LayoutEmp from "./layouts/LayoutEmp/LayoutEmp"
import Dashboard from "./pages/Dashboard/Dashboard";
import Setting from "./pages/Settings/Setting";
import Messages from "./pages/Messages/Messages";
import Employees from "./pages/Employees/Employees";
import WorkingS from "./pages/WorkingStatus/WorkingS";
import Notification from "./pages/Notifications/Notification";
import User from "./pages/User/User";
import Login from "./pages/Login/Login";

import "./App.css";
import EmpDash from "./page_user/EmpDash/EmpDash";
import EmpSet from "./page_user/EmpSet/EmpSet";
import EmpMess from "./page_user/EmpMess/EmpMess";
import EmpWork from "./page_user/EmpWork/EmpWork";
import EmpNoti from "./page_user/EmpNoti/EmpNoti";
import EmpSalary from "./page_user/EmpSalary/EmpSalary";

function App() {
  const [token, setToken] = useState("");
  const [role, setRole] = useState("admin");


  if (token === "" && role === "") {
    return <Login setToken={setToken} setRole={setRole} />;
  } else {
    return (
      <div className="App">
        <HashRouter>
          {role === "admin" && (
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/settings" element={<Setting />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/working-status" element={<WorkingS />} />
                <Route path="/notifications" element={<Notification />} />
                <Route
                  path="/user"
                  element={<User setToken={setToken} setRole={setRole}/>}
                />
              </Route>
            </Routes>
          )}
          {role === "user" && (
            <Routes>
              <Route element={<LayoutEmp />}>
                <Route path="/" element={<EmpDash />} />
                <Route path="/EmpDashboard" element={<EmpDash />} />
                <Route path="/EmpSettings" element={<EmpSet />} />
                <Route path="/EmpSalary" element={<EmpSalary />} />
                <Route path="/EmpMessages" element={<EmpMess />} />
                <Route path="/EmpWorking-status" element={<EmpWork />} />
                <Route path="/EmpNotifications" element={<EmpNoti />} />
                <Route
                  path="/user"
                  element={<User setToken={setToken} setRole={setRole} />}
                />
              </Route>
            </Routes>
          )}
        </HashRouter>
      </div>
    );
  }
}

export default App;
