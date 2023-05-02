import React,{useState} from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Events from './Pages/Events';
import ContactUs from './Pages/ContactUs';
import About  from './Pages/About';
import Sponsors from './Pages/Sponsors';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Merchandise from './Pages/Merchandise';
import Preloader from "./components/Preloader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return(
    <>
    <Preloader/>
    <div className="bg-[url('./images/cosmic2.png')] w-full h-screen bg-no-repeat bg-center bg-fixed bg-cover">
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/sponsors' element={<Sponsors/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path="/merchandise" element={<Merchandise/>}/>
    </Routes>
    </div>
    </>
  );
}

export default App;
