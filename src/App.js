import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import About from "./pages/About/About";
import Exp from "./pages/Experience/Exp";
import Edu from "./pages/Education/Edu";
import Project from "./pages/Projects/Project";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import Top from "./components/GoToTop/Top";
import Footer from "./components/Footer/Footer";
import Nopage from "./pages/Nopage/Nopage";

export default function App() {
  return (
    <div className="App">
     {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Layout />} />
            <Route path="/about" element={<About />} />
            <Route path="/exp" element={<Exp />} />
            <Route path="/edu" element={<Edu />} />
            <Route path="/project" element={<Project />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter> */}
      <Layout />
      <About />
      <Exp />
      <Edu />
      <Project />
      <Skills />
      <Contact />
      <Top />
      <Footer />
    </div>
  );
}
