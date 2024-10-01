// import React from "react";
// import BreadCrumb from "../components/BreadCrumb";
// import Meta from "../components/Meta";

const Checkout = () => {
  return (
    // <React.Fragment>
    //   <Meta title={"Checkout"} />
    //   <BreadCrumb title={"Checkout"} />
    // </React.Fragment>
    <div className="checkout-wrapper">
      <div className="container-xxl">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Alpha-Brio</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item active" aria-current="page">
                    Library
                  </li>
                </ol>
              </nav>
              <h4 className="title">Contact Information</h4>
              <p className="user-details"></p>
            </div>
          </div>
          <div className="col-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
