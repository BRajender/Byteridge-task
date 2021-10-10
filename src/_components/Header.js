import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { history } from "../_helpers";
import "../_css/Header.css";

export const Header = () => {
  const [login, setLogin] = useState(false);
 

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setLogin(true);
    }
  }, []);
  return (
    <Navbar>
      <Nav>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/Audit" className="nav-link">
          Auditor
        </NavLink>
        <NavLink to="/dashboard" className="nav-link">
          Dashboard
        </NavLink>
        {login ? (
          <a
            className="nav-link"
            onClick={() => {
              localStorage.removeItem("user");
              history.push("/login")
             
              setLogin(false);
              
              
            }}
          >
            Logout
          </a>
        ) : (
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
        )}
      </Nav>
    </Navbar>
  );
};
