import { Outlet } from 'react-router';
import Sidebar from '../../layouts/Sidebar/Sidebar';
import './EmpUser.css';

function EmpUser() {
          return (
                    <div className="empUser">
                              <Sidebar />
                              <Outlet />
                    </div>
          );
}

export default EmpUser;