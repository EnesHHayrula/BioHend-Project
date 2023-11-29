import "./Account.css";

const AccountModal = ({ onClose, onCreate,  }) => {
  return (
    <div className="user-pop-up">
      <div className="backdrop" onClick={onClose}></div>
      <div className="user-modal">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form onSubmit={onCreate}>
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>

            <input type="email" name="email" placeholder="Email" required="" />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button>Sign up</button>
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
};

export default AccountModal;
