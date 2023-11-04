import "./App.css";
import Layout from "./Layout/Layout";
import About from "./pages/About/About";
import Exp from "./pages/Experience/Exp";
import Edu from "./pages/Education/Edu";
import Project from "./pages/Projects/Project";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import Top from "./components/GoToTop/Top";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="App">
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
