import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Hero from "./components/Hero";
import ServicesPage from "./pages/ServicesPage";
import {
  ABOUT_PATH,
  BLOG_PATH,
  CONTACT_PATH,
  HOME_PATH,
  SERVICES_PATH,
} from "./utilits/Constant";

function App() {
  return (
    <div className="bg-black">
      <Hero />
      <Routes>
        <Route path={HOME_PATH} element={<Home />} />
        <Route path={ABOUT_PATH} element={<About />} />
        <Route path={BLOG_PATH} element={<Blog />} />
        <Route path={CONTACT_PATH} element={<Contact />} />
        <Route path={SERVICES_PATH} element={<ServicesPage />} />
      </Routes>
    </div>
  );
}

export default App;
