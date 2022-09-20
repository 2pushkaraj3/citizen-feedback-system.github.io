import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
      <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Has</span>
        </Link>
      </div>
      <hr/>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
        <li>
          <DashboardIcon className="icon"/>
          <span>DashBoard</span>
        </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
        <li>
        <CreditCardIcon className="icon"/> 
          <span>Orders</span>
        </li>
        <li>
          <LocalShippingOutlinedIcon className="icon"/>
          <span>Delivery</span>
        </li>
        <p className="title">USEFUL</p>
        <li>
        <AnalyticsIcon className="icon"/>
          <span>Stats</span>
        </li>
        <li>
          <NotificationsNoneIcon className="icon"/>
          <span>Notifications</span>
        </li>
          <p className="title">SERVICE</p>
        <li>
          <FavoriteBorderIcon className="icon"/>
          <span>System Health</span>
        </li>
        <li>
          <SyncAltIcon className="icon"/>
          <span>Logs</span>
        </li>
        <li>
          <SettingsApplicationsIcon className="icon"/>
          <span>Settings</span>
        </li>
          <p className="title">USER</p>
        <li>
          <GroupIcon className="icon"/>
          <span>Profiles</span>
        </li>
        <li>
          <LogoutIcon className="icon"/>
          <span>Logout</span>
        </li>
      </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          // onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          // onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  )
}

export default Sidebar