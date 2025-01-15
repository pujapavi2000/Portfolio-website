import './App.css';
import About from './component/About';
import Contact from './component/contact';
import Footer from './component/footer';
import Hheader from './component/Header';
import Hero from './component/hero';
import PProjects from './component/projects';
import RResume from './component/Resume';


function App() {
  return (
  <div>
 <Hheader/>
 <Hero / >
 <About /> 
 <PProjects/>
 <RResume />
 <Contact/>
 <Footer/>



  </div>
  );
}

export default App;
