import './App.css';
import {Routes,Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Nav from './components/Navbar/Navbar';
import Lead from './components/Lead/Lead';
import About from './components/About/About';
import Exp from './components/Experience/Exp';
import Edu from './components/Education/Edu';
import Project from './components/Projects/Project';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Nopage from './components/Nopage/Nopage';

export default function App() {
  return (
    <div className="App">
     
     <Routes>
      <Route path="/" element={<Layout/>} />
      <Route path="/nav" element={<Nav/>} />
      <Route path="/Lead" element={<Lead/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Exp" element={<Exp/>} />
      <Route path="/Edu" element={<Edu/>} />
      <Route path="/Project" element={<Project/>} />
      <Route path="/Skills" element={<Skills/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Footer" element={<Footer/>} />
      <Route path="*" element={<Nopage />} />
      </Routes>
  
    </div>
  );
}
