import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Model from './Model'
import { useSelector } from "react-redux";
import Cart from "../screens/Cart";
import './Navbar.css'
import Admin from "../screens/Admin";


export default function Navbar(props) {
 
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

const handlemycart = ()=>{
  // navigate("/cart");
  setCartview(true)
}

const handleadmin=()=>{
  // setAdminview(true)
  navigate("/admin")
}
  const amount = useSelector((state) => state.amount);
  console.log(amount)

  const [cartview,setCartview] = useState(false);

  const [adminview,setAdminview] = useState(false);

  const userEmail = localStorage.getItem("userEmail")
  return (
    <>
    <nav
  className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
  style={{
    backgroundColor: "#ffffff",
    color: "#333333",
  }}
>
<div className="container-fluid">
          <Link className="navbar-brand fst-italic" to="/">
            Insurance Management System
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 ">
            <li className="nav-item">
            <div style={{borderColor:" #28a745",
                 borderRadius:" 0.25rem",right:"0px" ,bottom:"0px"}}>
              
                </div>
                {adminview?<Model onClose={()=>setAdminview(false)}><Admin/></Model>
                      :null}
              </li>
              <li className="nav-item">
                 
                   <button className="btn btn-danger"
                 onClick={handleadmin}
                 type="submit"
                 
                >
                  Admin
                </button>
                 
                </li>
              
            </ul>
            <li>
              <label onClick={props.togglemode}
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                } `}
                htmlFor="flexSwitchCheckChecked"
              >
                {props.mode === "light" ? "Dark" : "Light"} Mode
              </label>
              </li>
             
           
             
            <div className="form-check form-switch">
              
              <div>
                {!localStorage.getItem("token") ? (
                  <div className="d-flex">
                    <Link
                      className="btn bg-white text-success mx-1"
                      to="/login"
                    >
                      Login
                    </Link>
                    <Link
                      className="btn bg-white text-success mx-1"
                      to="/signup"
                    >
                      SignUp
                    </Link>
                  </div>
                ) : (
                  <div>
              
                  <div>
                   
                  <b style={{marginRight:"1rem"}}>{userEmail}</b>  
                      <button
                        onClick={logout}
                        type="submit"
                        className="btn btn-primary"
                      >
                        Logout
                      </button>
                    
                  </div>
                  </div>
                )}
              </div>
              
            </div>
          </div>
        </div>
</nav>
    
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set Title",
  aboutText: "set text",
};
