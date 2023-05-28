import React, { useState } from 'react';

export default function Toasted (){
    const [show,setShow] = useState("hide");
    const [showtwo,setShowtwo] = useState("hide");
    const [showthree,setShowthree] = useState("hide");
    const [bar,setBar] = useState("0");
    const [bar2,setBar2] = useState("0");
    const [bar3,setBar3] = useState("0");
  const showing=(e)=>{
    var count=30;var time;
    time = setInterval(function () {
      console.log(count);
      count+= 10;
      setBar3(count+"%")}, 1000);
    console.log('hi',e.target)
    setShow("show");

    setTimeout(()=>{clearInterval(time);setBar3("0%")
        setShow("hide");
    },5000)

  }
  const showingtwo=(e)=>{
    var count=30;var time;
    time = setInterval(function () {
      console.log(count);
      count+= 10;
      setBar2(count+"%")}, 1000);
    console.log('hi',e.target)
    setShowtwo("show");
    setTimeout(()=>{   clearInterval(time);setBar2("0%")
        setShowtwo("hide");
    },5000)

  }
  const showingthree=(e)=>{
    var count=30;var time;
    time = setInterval(function () {
      console.log(count);
      count+= 20;
      setBar(count+"%")}, 1000);
    console.log('hi',e.target)
    setShowthree("show");
    setTimeout(()=>{
      clearInterval(time);
      setBar("0%")
        setShowthree("hide");
    },5000)

  }

  const close=()=>{
    setShow("hide");
  }
  const closetwo=()=>{
    setShowtwo("hide");
  }
  const closethree=()=>{
    
    setShowthree("hide");
  }
  return (
    <>
    <div className="position-fixed top-0 end-0 p-3" style={{"zIndex": "1"}}>
       <div id="liveToast" className={`toast ${show}`} role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
            <i className="fa-solid fa-trash"></i>
            <strong className="me-auto mx-2"><b>SUCCESS</b></strong>
            <small>11 mins ago</small>
            <button type="button" onClick={close}  className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
           <div className="toast-body" style={{color:"green"}}>
             <b>Hello, world! Successsss!!</b>
          </div>
         <div className="progress" style={{height:"5px"}}>
              <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: bar3}}  aria-valuemin="0" aria-valuemax="100"></div>
          </div>
      </div>

  <div id="gig" className={`toast ${showtwo}`} role="alert" aria-live="assertive" aria-atomic="true">
    <div className="toast-header">
      <img src="..." className="rounded me-2" alt="..."/>
      <strong className="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" onClick={closetwo} className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div className="toast-body" style={{color:"red"}}>
     <b> Danger ahead!!!!!!!!!!!</b>
    </div>
    <div className="progress" style={{height:"5px"}}>
  <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: bar2}}  aria-valuemin="0" aria-valuemax="100"></div>
</div>
  </div>
  <div id="liveToasting" className={`toast ${showthree}`} role="alert" aria-live="assertive" aria-atomic="true">
    <div className="toast-header" style={{backgroundColor:"silver"}}>
    <i className="fa-solid fa-trash"></i>
      <strong className="me-auto mx-2"><b>Warn</b></strong>
      <small>11 mins ago</small>
      <button type="button" onClick={closethree}  className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div className="toast-body" style={{color:"yellow"}}>
      <b>Hello, world! Warn!!</b>
    </div>
    <div className="progress" style={{height:"5px"}}>
  <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: bar}}  aria-valuemin="0" aria-valuemax="100"></div>
</div>
  </div>
</div>




<div className='container text-center'>
<button type="button" onClick={showing} className="btn btn-success" id="liveToastBtn">Success</button>
<button type="button" onClick={showingtwo} className="btn btn-danger mx-2" id="liveToastBtn">Danger</button>
<button type="button" onClick={showingthree} className="btn btn-warning mx-2" id="liveToastBtn">Warn</button>


</div>
   </>
  )
}
