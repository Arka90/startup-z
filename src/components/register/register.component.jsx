function Register() {
  return (
    <div className="login-container">
      <p className="section-heading-middle">
        <span className="bold-txt">Startup</span> Login
      </p>

      <div className="input">
        <p className="label">
          Country<sup className="mandate">*</sup>
        </p>
        <input
          className="from-input"
          type="text"
          placeholder="Enter Email or Mobile"
        />
      </div>

      <div className="input">
        <p className="label">
          Startup Name<sup className="mandate">*</sup>
        </p>
        <input
          className="from-input"
          type="text"
          placeholder="Enter Email or Mobile"
        />
      </div>

      <div className="input">
        <p className="label">
          Mobile<sup className="mandate">*</sup>
        </p>
        <input
          className="from-input"
          type="text"
          placeholder="Enter Email or Mobile"
        />
      </div>

      <div className="input">
        <p className="label">
          Email<sup className="mandate">*</sup>
        </p>
        <input
          className="from-input"
          type="text"
          placeholder="Enter Email or Mobile"
        />
      </div>

      <button disabled className="btn btn-action">
        REGISTER
      </button>
    </div>
  );
}

export default Register;
