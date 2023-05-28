import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "./toast.css";
import "react-toastify/dist/ReactToastify.css";

export default function ToastNotification() {
    const toastDark = () => toast.dark('This is Toast Notification for Dark');
    const toastInfo = () => toast.info('This is Toast Notification for Info');
    const toastSuccess = () => toast.success('This is Toast Notification for Success', {
        position: toast.POSITION.TOP_RIGHT,className: 'toast-message'
    });
    const toastWarn = () => toast.warn('This is Toast Notification for Warn').style ="width : 100px";
    const toastError = () => toast.error('This is Toast Notification for Error');
  
    return (
      <div className="App container text center">
        <h3>Toast Notification in React </h3>
        <button className="btn btn-primary my-2 mx-2" style={{backgroundColor : "black"}} onClick={toastDark}>Toast Notification for  - Dark</button>
        <button className="btn btn-primary my-2 mx-2" onClick={toastInfo} style={{backgroundColor : "orange"}} >Toast Notification for  - Info</button>
        <button className="btn btn-primary mx-2" onClick={toastSuccess} style={{backgroundColor : "green"}} >Toast Notification for  - Success</button>
        <button className="btn btn-primary my-2 mx-2" onClick={toastWarn} style={{backgroundColor : "yellow", color : "black"}} >Toast Notification for  - Warn</button>
        <button className="btn btn-primary mx-2" onClick={toastError} style={{backgroundColor : "red"}} >Toast Notification for  - Error</button>
  
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{width : "200px",height : "200px", border : "2 px"}}
        />
  
      </div>
    );
  }

