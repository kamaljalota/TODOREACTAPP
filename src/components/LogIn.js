import React,{useContext, useState} from 'react';
import {NoteContext} from '../context/NoteState'
import {firebase} from './Firebase';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function LogIn(props) {
    const [user, setUser] = useState({ email : "", password : ""});
    const [isPass, setIsPss] = useState(false);
    const [user2, setUser2] = useState({ phone : "", otp : "",refreshToken:""});
    const context = useContext(NoteContext);
    const { LogIn} = context;
    const handleUsers=(e)=>{
        e.preventDefault();
       
        LogIn(user.email,user.password);
        setUser({ email : "", password : ""});
    }
    const onChange=(e)=>{
        setUser({...user , [e.target.name] : e.target.value});
    }
    const onChangeOtp=(e)=>{
      setUser2({...user2 , [e.target.name] : e.target.value});

  }
  const configureCaptcha=()=>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
        console.log("recaptcha Verified");
      },
      defaultCountry:"IN"
    });

  }
  const onSignInSubmit= (e)=>{
    e.preventDefault();console.log('Otp  sent');
    toast.success('Otp  sent');
    configureCaptcha();
    const phoneNumber = "+91" + user2.phone;
    console.log(phoneNumber);
   
const appVerifier = window.recaptchaVerifier;

firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
      console.log("checking .....");
    }).catch((error) => {
      // Error; SMS not sent
      // ...
      console.log("SMS not sent");
    });
  }
  const onSubmitOtp=(e)=>{
    e.preventDefault();
    toast.info('OTP  checking');
    const code = user2.otp;
    console.log(code);
window.confirmationResult.confirm(code).then((result) => {
  // User signed in successfully.
  const user = result.user;
  console.log(JSON.stringify(user));
  const data =  JSON.parse(JSON.stringify(user.refreshToken))
  setUser2({...user2 , refreshToken: data});
  console.log(user2,data);
  alert("verfied user",user2);
  //setUser2({...user2 , phone : "", otp : ""});
  // ...
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...
});
  }
  return (
    <div><ToastContainer
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
       <div className='container'>
      <form>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="text" className="form-control" id="email"   onChange={onChange} name='email'/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type={isPass ? "text" : "password"} className="form-control" id="password"  onChange={onChange} name='password'/>
 <button onClick={(e)=>{e.preventDefault();
  setIsPss(!isPass)
 }}>{isPass?"Hide it":"Showit"}</button>
  </div>
  
  </form>
{
  //<form onSubmit={onSignInSubmit}><div className="mb-3">
    //<label htmlFor="phone" className="form-label">Phone Number</label>
    //<div id='sign-in-button'></div>
   // <input type="number" className="form-control" id="phone" onChange={onChangeOtp} name='phone'/>
  //  <button type='submit' className='my-2'>Submit</button>
 // </div>
 // </form>
 // <form onSubmit={onSubmitOtp}>
 // <div className="mb-3">
  //  <label htmlFor="otp" className="form-label">OTP</label>
  //  <input type="number" className="form-control" id="otp" onChange={onChangeOtp} name='otp'/>
  //  <button type='submit' className='my-2'>Submit</button>
  //</div></form> disabled ={ user2.refreshToken.length < 1}
}
  <button  type="submit" className="btn btn-primary" onClick={handleUsers}>Login </button>
    </div>
    </div>
    
  )
}
