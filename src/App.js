import React,{useEffect, useState} from "react";
import { Route, Router, Routes, useLocation } from "react-router-dom";
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
  // const [preloader, setPreloader] = useState("visible fixed left-0 top-0 w-full");
  // const [maincontent, setmaincontent] = useState("invisible h-0");
  const [preloader, setPreloader] = useState("visible fixed left-0 top-0 w-full");
  const [maincontent, setmaincontent] = useState("invisible");

  setTimeout(() => {
    setPreloader("hidden");
    setmaincontent("visible");
  }, 4000);
  

  return(
    <>
    <div className={preloader}>
    <Preloader/>
    </div>
    <div className={maincontent}>
    <div className="z-50 bg-opacity-60 bg-slate-800 fixed left-0 top-0 w-screen">
    <Navbar/>
    </div>
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
