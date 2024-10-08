import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title={"Login"} />
      <div className="login-wrapper py-3 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Login</h3>
                <form action="" className="d-flex flex-column gap-30 ">
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      className="form-control"
                    />
                  </div>
                  <div className="mt-3 ">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>

                  <div>
                    <Link to={"/forgot-password"}>Forgot Password</Link>
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button className="button border-0">Login</button>
                      <Link to={"/sign-up"} className="button signup">
                        SignUp
                      </Link>
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

export default Login;
