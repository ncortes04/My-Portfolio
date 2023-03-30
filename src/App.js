import './App.css';
import NavBar from './components/navbar';
import  Homepage from '../src/components/hompage'
import Resume from './components/Resume';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollProvider } from './provider/contextProvider';
function App() {
  return (
    <div className="App">
      <ScrollProvider>
         <NavBar/>
      </ScrollProvider>
        <BrowserRouter basename='/My-Portfolio'>
            <Routes>
              <Route exact path='/My-Portfolio' element={<Homepage/>}/>
              <Route path='/resume' element={<Resume />}/>
            </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
