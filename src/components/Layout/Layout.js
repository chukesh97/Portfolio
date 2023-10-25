import './Layout.css'
import Nav from '../Navbar/Navbar';
import Lead from '../Lead/Lead';
import About from '../About/About';
import Exp from '../Experience/Exp';
import Edu from '../Education/Edu';
import Project from '../Projects/Project';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';


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
      <Footer/>
      </div>
    </>
  )
}