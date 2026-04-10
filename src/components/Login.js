import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // Add this to handle styling easily

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (username.trim().length < 3) {
      newErrors.username = "Username must be at least 3 characters.";
      isValid = false;
    }
    if (!isLogin && !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format.";
      isValid = false;
    }
    if (!isLogin && !birthday) {
      newErrors.birthday = "Birthday is required.";
      isValid = false;
    }
    if (password.trim().length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setMessageType("");
    
    if (!validateForm()) return;

    const payload = isLogin
      ? { username, password }
      : { username, email, password, birthday };

    try {
      const response = await fetch(`http://localhost:5000/auth/${isLogin ? "login" : "signup"}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(`${isLogin ? "Login" : "Signup"} successful! Welcome, ${username}.`);
        setMessageType("success");
      } else {
        setMessage(result.error || "Something went wrong.");
        setMessageType("error");
      }
    } catch (err) {
      setMessage("Server error. Please try again.");
      setMessageType("error");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        
        <div className="auth-image-side">
          <h2>Welcome to Book Store</h2>
          <p>Discover your next great read with our premium collection of books from worldwide authors.</p>
        </div>

        <div className="auth-form-side">
          <h2>{isLogin ? "Login" : "Sign Up"}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-input"
              />
              {errors.username && <span className="error-msg">{errors.username}</span>}
            </div>

            {!isLogin && (
              <>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                  />
                  {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    className="form-input"
                  />
                  {errors.birthday && <span className="error-msg">{errors.birthday}</span>}
                </div>
              </>
            )}

            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
              />
              {errors.password && <span className="error-msg">{errors.password}</span>}
            </div>

            <button type="submit" className="auth-submit-btn">
              {isLogin ? "Login to Account" : "Create Account"}
            </button>

            {message && (
              <div className={`form-message ${messageType}`}>
                {message}
              </div>
            )}

            <div className="auth-switch">
              {isLogin ? (
                <p>
                  Don't have an account?{" "}
                  <span onClick={() => { setIsLogin(false); setMessage(""); setErrors({}); }}>
                    Sign Up
                  </span>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <span onClick={() => { setIsLogin(true); setMessage(""); setErrors({}); }}>
                    Login
                  </span>
                </p>
              )}
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;
