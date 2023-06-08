import "./login.styles.scss";

function Login() {
  return (
    <div className="login-container">
      <p className="section-heading-middle">
        <span className="bold-txt">Startup</span> Login
      </p>

      <div className="input">
        <p className="label">
          Username<sup className="mandate">*</sup>
        </p>
        <input
          className="from-input"
          type="text"
          placeholder="Enter Email or Mobile"
        />
      </div>

      <button className="btn btn-action">LOG IN</button>
    </div>
  );
}

export default Login;
