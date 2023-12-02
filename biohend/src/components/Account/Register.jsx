import { useContext } from "react";
import "./Account.css";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import { Link } from "react-router-dom";

const RegisterFormKeys = {
  Email: "email",
  Password: "password",
  ConfirmPassword: "confirm-password",
};

export default function Register({ onClose, onShow }) {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFormKeys.Email]: "",
    [RegisterFormKeys.Password]: "",
    [RegisterFormKeys.ConfirmPassword]: "",
  });

  return (
    <div className="user-modal">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="signup">
        <form id="register" onSubmit={onSubmit}>
          <label htmlFor="email" aria-hidden="true">
            Sign up
          </label>

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={onChange}
            values={values[RegisterFormKeys.Email]}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
            values={values[RegisterFormKeys.Password]}
          />
          <input
            type="password"
            name="confirm-password"
            placeholder="Confirm Password"
            onChange={onChange}
            values={values[RegisterFormKeys.ConfirmPassword]}
          />
          <button className="btn submit" type="submit">
            Sign up
          </button>
          <Link className="btn submit" to="/login">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}
