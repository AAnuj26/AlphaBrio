import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <Meta title={"Forgot-Password"} />
      <BreadCrumb title={"Forgot-Password"} />
      <div className="login-wrapper py-3 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Your Password</h3>

                <form action="" className="d-flex flex-column gap-30 ">
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      className="form-control"
                    />
                  </div>

                  <div>
                    <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                      <button className="button border-0">Submit</button>
                      <Link to={"/login"}>Cancel</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
