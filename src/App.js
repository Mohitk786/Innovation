import { Route, Routes, useLocation } from 'react-router-dom';
import  Home from './components/Home';
import Navbar from './components/Navbar';
import  ContactUs  from './components/ContactUs';
import About from './components/About';
import Gallery from './components/Gallery';
import ProjectDetails from './components/ProjectDetails';
import Footer from './components/Footer';
import PathTracker from './components/PathTracker';

function App() {
  const {pathname} = useLocation();
  return (
    <div className="overflow-x-hidden flex flex-col gap-5 h-auto">
      <Navbar />
      {pathname!=='/' && <PathTracker pathname={pathname}/>}
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/gallery' element={<Gallery/>} />
        <Route path="/projects/:imageId" element={<ProjectDetails/>} />
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
