// import BlogCard from "../components/BlogCard";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Single-Blog"} />
      <BreadCrumb title={"Single-Blog"} />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link
                  to={"/blogs"}
                  className="d-flex align-items-center gap-10 "
                >
                  <HiOutlineArrowLeft className="fs-4" /> Go back to Blogs
                </Link>

                <h3 className="title">
                  A beautiful sunday morning renaissance
                </h3>
                <img src="images/blog-1.jpg" alt="blog" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  deserunt beatae doloribus pariatur aut maiores facere qui!
                  Officia quod quia corporis aperiam. Aperiam accusamus enim
                  quam accusantium. Voluptas, quia ratione.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
