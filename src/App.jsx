import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../src/components/Layout";
import Home from "./pages/Home";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
