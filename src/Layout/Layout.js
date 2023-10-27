import './Layout.css'
import Nav from '../components/Navbar/Navbar';
import Lead from '../components/Lead/Lead';
import About from '../components/About/About';
import Exp from '../components/Experience/Exp';
import Edu from '../components/Education/Edu';
import Project from '../components/Projects/Project';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Top from '../components/GoToTop/Top';


export default function Layout() {
  return (
    <>
    <div className="layout">
      <Nav/>
      <Lead/>
      <About/>
      <Exp/>
      <Edu/>
      <Project/>
      <Skills/>
      <Contact/>
      <Top/>
      <Footer/>
      </div>
    </>
  )
}