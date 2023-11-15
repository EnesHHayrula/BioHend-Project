export default function Login() {
  return (
    <>
      <div className="container">
        <div className="login-container">
          <h2>Login</h2>
          <form id="loginForm" onsubmit="loginSuccess(event)">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required="" />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required="" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
      <div id="loginSuccessModal" className="modal">
        <div className="modal-content">
          <p>Login successful! Redirecting...</p>
        </div>
      </div>
    </>
  );
}
