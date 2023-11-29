import { useContext } from "react";
import "./Account.css";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
  email: "email",
  password: "password",
};

export default function AccountModal({ onClose, onShow }) {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFormKeys.email]: "",
    [RegisterFormKeys.password]: "",
  });

  return (
    <div className="user-pop-up">
      <div className="backdrop" onClick={onClose}></div>
      <div className="user-modal">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form id="register" >
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={onChange}
              values={values[RegisterFormKeys.email]}
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              onChange={onChange}
              values={values[RegisterFormKeys.password]}
            />
            <button onSubmit={onSubmit}>Sign up</button>
          </form>
        </div>
        <div className="login">
          <form>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input type="email" name="email" placeholder="Email" required="" />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
