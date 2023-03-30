import './App.css';
import NavBar from './components/navbar';
import  Homepage from '../src/components/hompage'
import Resume from './components/Resume';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollProvider } from './provider/contextProvider';
function App() {
  return (
    <div className="App">
      <ScrollProvider>
         <NavBar/>
      </ScrollProvider>
        <Router>
            <Routes>
              <Route path='/My-Portfolio' element={<Homepage/>}/>
              <Route path='/My-Portfolio/resume' element={<Resume />}/>
            </Routes>
         </Router>
    </div>
  );
}

export default App;
