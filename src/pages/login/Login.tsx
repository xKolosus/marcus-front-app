import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
import { useAuthenticateQuery } from "../../services/authApi";
import { UserLogin } from "types";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState<Partial<UserLogin>>({});
  const [error, setError] = useState<string | null>(null); 

  const skip = !credentials.email || !credentials.password;
  const { data, isError, error: queryError } = useAuthenticateQuery(credentials, { skip });


   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setCredentials({
      email: email.trim().toLowerCase(),
      password,
    });
  };

  useEffect(() => {
    if (data) {
      dispatch(login({ accessToken: data.accessToken, refreshToken: data.refreshToken }));
      navigate("/");
      setCredentials({});
    } else if (isError && queryError) {
      setError((queryError as any).data?.message || "Failed to log in. Please check your credentials.");
      setCredentials({});
    }
  }, [data, isError, queryError, dispatch, navigate]);


  return (
    <div className="login-container">
      <h2>Log in</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="username"
            name="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Log in!</button>
      </form>
      {error && <div className="error-message">{error}</div>}{" "}
    </div>
  );
};

export default Login;
