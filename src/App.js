import './App.css';
import NavBar from './components/navbar';
import  Homepage from '../src/components/hompage'
import Resume from './components/Resume';
import { Routes, Route } from 'react-router-dom';
import { ScrollProvider } from './provider/contextProvider';
function App() {
  return (
    <div className="App">
      <ScrollProvider>
         <NavBar/>
      </ScrollProvider>
        <Routes>
              <Route path='/' element={<Homepage/>}/>
              <Route path='/resume' element={<Resume />}/>
        </Routes>
    </div>
  );
}

export default App;
