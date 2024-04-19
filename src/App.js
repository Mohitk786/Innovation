import { Route, Routes } from 'react-router-dom';
import  Home from './components/Home';
import Navbar from './components/Navbar';
import { Projects } from './components/Projects';
import About from './components/About';

function App() {
  return (
    <div className="overflow-x-hidden flex flex-col gap-5 h-auto">
      <Navbar />
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>

    </div>
  );
}

export default App;
