import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <Meta title={"SignUp"} />

      <BreadCrumb title={"SignUp"} />

      <div className="login-wrapper py-3 home-wrapper-2 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card ">
                <h3 className="text-center mb-3">Sign up</h3>

                <form action="" className="d-flex flex-column gap-30 ">
                  <div>
                    <input
                      type="name"
                      placeholder="Name"
                      name="name"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      name="mobile "
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <div className="mt-1 d-flex justify-content-center flex-column gap-15 align-items-center">
                      <button className="button border-0">Sign Up</button>
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

export default SignUp;
