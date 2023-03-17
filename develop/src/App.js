import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Header from './components/header';
import AboutMe from './components/aboutMe';
import Projects from './components/projects';
import { ScrollProvider } from './provider/contextProvider';
function App() {
  return (
    <div className="App">
      <ScrollProvider>
         <NavBar/>
         <Header/>
         <Projects/>
         <AboutMe/>
      </ScrollProvider>
    </div>
  );
}

export default App;
