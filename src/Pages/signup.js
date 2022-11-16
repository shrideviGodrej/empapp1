import React from "react";

const Signup = () => {
  return (
    // ---------------------------------------NAV BAR---------------------------------------------- //

    <header>
      {/* ---------------------------------------Form---------------------------------------------- */}
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="form-group mt-3">
              <label>UserName</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter UserName"
              />
            </div>

            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <div className="links">
              <p className="forgot-password text-right mt-2">
                Forgot <a href="#">password?</a>
                <div className="signup">
                  Already have a Account <a href="/">Sign in</a>
                </div>
              </p>
            </div>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Signup;
