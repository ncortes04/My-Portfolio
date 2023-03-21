import './App.css';
import NavBar from './components/navbar';
import Header from './components/header';
import AboutMe from './components/aboutMe';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';
import { ScrollProvider } from './provider/contextProvider';
function App() {
  return (
    <div className="App">
         <NavBar/>
         <Header/>
         <Skills/>
         <AboutMe/>
         <Projects/>
         <Contact/>
         <Footer/>
    </div>
  );
}

export default App;
