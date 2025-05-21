import React from "react";
import { useNavigate } from "react-router-dom";

import "./header.css"; 



const Header: React.FC = () => {

  const navigate = useNavigate();


  const login = () => {
    navigate("/login");
  }

  const register = () => {
    navigate("/register");
  }

  const main = () => {
    navigate("/");
  }


  return (
     <header className="header">
      <h1 onClick={main} className="header-text">Marcus e-commerce</h1>
      <div className="header-buttons">
        <button onClick={login}>Login</button>
        <button onClick={register}>Register</button>
      </div>
    </header>
  );
};

export default Header;
