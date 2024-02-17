// import BlogCard from "../components/BlogCard";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

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
                <h3 className="title">
                  A beautiful sunday morning renaissance
                </h3>
                <img src="images/blog-1.jpg" alt="blog" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
