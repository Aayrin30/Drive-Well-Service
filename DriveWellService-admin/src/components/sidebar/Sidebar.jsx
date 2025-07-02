import "./sidebar.scss";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import BusinessIcon from '@mui/icons-material/Business';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import { Link, useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const { dispatch} = useContext(DarkModeContext);
  const { dispatch2 } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout=(e)=>{
    e.preventDefault();
    try {
      dispatch2({type: "LOGOUT"})
      navigate("/login")
    } catch (error) {
      dispatch2({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  }

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/user" style={{ textDecoration: "none" }}>
          <span className="logo">Admin Pannel</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">LISTS</p>
          <Link to="/user" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/company" style={{ textDecoration: "none" }}>
            <li>
              <BusinessIcon className="icon" />
              <span>Company</span>
            </li>
          </Link>
          <Link to="/model" style={{ textDecoration: "none" }}>
          <li>
            <DirectionsCarIcon className="icon" />
            <span>Model</span>
          </li>
          </Link>
          <Link to="/service" style={{ textDecoration: "none" }}>
          <li>
            <MiscellaneousServicesIcon className="icon" />
            <span>Serivce</span>
          </li>
          </Link>
          <Link to="/price" style={{ textDecoration: "none" }}>
          <li>
            <AttachMoneyIcon className="icon" />
            <span>Price</span>
          </li>
          </Link>
          <Link to="/appointment" style={{ textDecoration: "none" }}>
          <li>
            <BookOnlineIcon className="icon" />
            <span>Appointment</span>
          </li>
          </Link>
          <p className="title">USEFUL</p>
          <li>
            <ExitToAppIcon className="icon" />
            <span onClick={handleLogout} >Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
