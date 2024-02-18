import { Route, Routes } from "react-router-dom";
import Layout from "../src/components/Layout";
import Home from "./pages/Home";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import OurStore from "../src/pages/OurStore";
import Blog from "../src/pages/Blog";
import CompareProduct from "./pages/CompareProduct";
import WishList from "./pages/WishList";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import SingleBlog from "./pages/SingleBlog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="store" element={<OurStore />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="blog/:id" element={<SingleBlog />} />
          <Route path="compare-product" element={<CompareProduct />} />
          <Route path="wishlist" element={<WishList />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="single-blog" element={<SingleBlog />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
