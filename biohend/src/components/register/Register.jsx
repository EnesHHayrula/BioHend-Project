import React from "react";

const Register = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="register.css" rel="stylesheet" />
      <title>Register</title>
      <div className="container">
        <div className="register-container">
          <h2>Register</h2>
          <form id="registerForm" onsubmit="registerSuccess(event)">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required="" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required="" />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required="" />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
      <div id="registerSuccessModal" className="modal">
        <div className="modal-content">
          <p>Registration successful! Redirecting...</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
