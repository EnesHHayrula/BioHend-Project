import { useState } from "react";
import "./Account.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const initialUser = { username: "", email: "", password: "" };
const Register = () => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      const url = `http://localhost:1337/api/auth/local/register`;
      if (user.email && user.username && user.password) {
        const res = await axios.post(url, user);
        if (res) {
          setUser(initialUser);
          navigate("/login");
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    signUp();
  };
  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  return (
    <div className="user-modal">
      <div className="signup">
        <form id="register" onSubmit={onSubmit}>
          <label htmlFor="email" aria-hidden="true">
            Sign up
          </label>

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleUserChange}
            value={user.email}
          />
          <input
            type="username"
            name="username"
            placeholder="username"
            onChange={handleUserChange}
            value={user.username}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleUserChange}
            value={user.password}
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
};

export default Register;
