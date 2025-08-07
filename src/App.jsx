import react, { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Programmes from './Components/Pages/Programmes';
import Blog from './Components/Pages/Blog';
import Startups from './Components/Pages/Startups';
import Students from './Components/Pages/Students';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Signup from './Components/Pages/Signup';
import West from './Components/Pages/West';
import Kids from './Components/Pages/Kids';
import Classes from './Components/Pages/Classes';
import Footer from './Components/Footer';



function App() {
    const location = useLocation();

    const excludedRoutes = ['/students'];

    const shouldHideLayout = excludedRoutes.includes(location.pathname);
  return (
      <div>
        {!shouldHideLayout &&  <Navbar />}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<Programmes/>}/>
          <Route path='/west' element={<West/>}/>
          <Route path='/kids' element={<Kids/>} />
          <Route path='classes' element={<Classes/>} />
          <Route path='/' element={<Blog/>}/>
          <Route path='/' element={<Startups/>}/>
          <Route path='/students' element={<Students/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
        {!shouldHideLayout && <Footer />}
      </div>
  )
}

export default App;
