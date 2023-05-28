import Navbar from "./components/Navbar";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
//import Home from "./components/Home";
//import About from "./components/About";
import NoteState from "./context/NoteState";
import SignUp from "./components/SignUp";
import ProgressBar from "bootstrap-progress-bar";
import LogIn from "./components/LogIn";
import { useState } from "react";
import Alert from "./components/Alert";
import React,{Suspense, lazy} from 'react';
import ToastNotification from "./components/ToastNotification";
import LoadingBar from 'react-top-loading-bar'
import Toasted from "./components/Toasted";
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));


function App() {
  let [alert,setAlert] = useState("");
  const [progress, setProg] = useState(70);
 let getAlert = (msg)=>{
  console.log("ddddddddddd");
  setAlert(msg);
  }
  setTimeout(()=>{
    setAlert("");
  },1000)

  const setProgress = (amt)=>{
    setProg(amt)
  }
  return (
    <div>
      <Router>
      <NoteState getAlert={getAlert}>     
  
   <Navbar/>
   

   <Alert alert={alert}/>
   <Suspense fallback={<div>Loading...</div>}>
   <Routes>
        <Route path="/home" element={<Home getAlert={getAlert}/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<LogIn getAlerting={getAlert}/>} />
          <Route path="/signup" element={<SignUp/>} />
          </Routes>
   </Suspense>
   </NoteState>
   </Router>
   {//<ToastNotification/>
}
<div>


  {// <Toasted/>
}
   </div>
  
   
   
    </div>
  );
}

export default App;
