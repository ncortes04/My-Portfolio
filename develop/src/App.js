import './App.css';
import NavBar from './components/navbar';
import Header from './components/header';
import AboutMe from './components/aboutMe';
import Projects from './components/projects';
import Skills from './components/skills';
import { ScrollProvider } from './provider/contextProvider';
function App() {
  return (
    <div className="App">
      <ScrollProvider>
         <NavBar/>
         <Header/>
         <Skills/>
         <AboutMe/>
         <Projects/>
      </ScrollProvider>
    </div>
  );
}

export default App;
