import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css"; 
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { logout } from "../../features/auth/authSlice";



const Header: React.FC = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const login = () => {
    navigate("/login");
  }

  const register = () => {
    navigate("/register");
  }

  const main = () => {
    navigate("/");
  }

  const profile = () => {
    navigate("/profile");
  }

  const handleLogout = () => {
    dispatch(logout());
  };


  return (
     <header className="header">
      <h1 onClick={main} className="header-text">Marcus e-commerce</h1>
        {!isAuthenticated ? (
          <div className="header-buttons">
            <button onClick={login}>Login</button>
            <button onClick={register}>Register</button>
          </div>
        ) : (
          <div className="header-buttons">
            <button onClick={profile}>My profile</button>
            <button onClick={handleLogout}>Log out</button>
          </div>
        )}
    </header>
  );
};

export default Header;
