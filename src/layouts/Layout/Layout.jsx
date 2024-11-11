import { Outlet } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.css'
// import EmpUser from '../../page_user/Emp/EmpUser';

function Layout() {
          return (
                    <div className="layout">
                            <Sidebar />
                            <Outlet />
                    </div>
          );
}
export default Layout