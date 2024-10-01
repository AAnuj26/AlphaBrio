import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

import wish from "/images/wish.svg";
import watch from "/images/watch.jpg";
import prodCompare from "/images/prodcompare.svg";
import view from "/images/view.svg";
import addCart from "/images/add-cart.svg";
import wishList from "/images/wishlist.svg";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={` ${
          location.pathname == "/store" ? `gr-${grid}` : "col-3"
        } mt-3`}
      >
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pak multi colored for students
            </h5>
            <ReactStars
              count={5}
              value={3}
              size={24}
              edit={false}
              activeColor={"#ffd700"}
            />
            <p className={`description ${grid === 12 ? "d-block" : " d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem corporis nulla eaque nemo rem dolorum, id ?asperiores a
            </p>
            <p className="price">₹8000</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src={prodCompare} alt="product compare" />
              </Link>
              <Link>
                <img src={view} alt="view" />
              </Link>
              <Link>
                <img src={addCart} alt="add cart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` ${
          location.pathname == "/store" ? `gr-${grid}` : "col-3"
        } mt-3`}
      >
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wishList} alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              value={3}
              size={24}
              edit={false}
              activeColor={"#ffd700"}
            />
            <p className={`description ${grid === 12 ? "d-block" : " d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem corporis nulla eaque nemo rem dolorum, id ?asperiores a
            </p>
            <p className="price">₹8000</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src={prodCompare} alt="product compare" />
              </Link>
              <Link>
                <img src={view} alt="view" />
              </Link>
              <Link>
                <img src={addCart} alt="add cart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
