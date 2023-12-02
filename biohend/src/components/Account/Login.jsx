import "./Account.css";
import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";
import { Link } from "react-router-dom";

const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

const Login = () => {
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [LoginFormKeys.Email]: "",
    [LoginFormKeys.Password]: "",
  });
  return (
    <div>
        <div className="user-modal">
      <div className="login">
        <form id="login" onSubmit={onSubmit}>
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={onChange}
            value={values[LoginFormKeys.Email]}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
            value={values[LoginFormKeys.Password]}
          />
          <button className="btn submit" type="submit">
            Login
          </button>
          <Link className="btn submit" to="/register">
            Sign Up
          </Link>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
