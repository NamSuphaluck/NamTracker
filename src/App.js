import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';


import Layout from './layouts/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Setting from './pages/Settings/Setting';
import Messages from './pages/Messages/Messages';
import Employees from './pages/Employees/Employees';
import WorkingS from './pages/WorkingStatus/WorkingS';
import Notification from './pages/Notifications/Notification';
import User from './pages/User/User';
import Login from './pages/Login/Login';

import './App.css';

function App() {
  const [token, setToken] = useState('');


  if(token === '') {
    return (
      <Login setToken={setToken}/>
    )
  }else{

    return (
      <div className="App">
        <HashRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<Setting />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/working-status" element={<WorkingS />} />
              <Route path="/notifications" element={<Notification />} />
              <Route path='/user' element={<User setToken={setToken}/>} />
  
            </Route>
          </Routes>
        </HashRouter>
      </div>
    );
  }
}

export default App;
