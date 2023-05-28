import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBMQoH8J8h1dSar9sRKGBRHr-_DBoZG1gc",
    authDomain: "otp-app-demo-5d3d2.firebaseapp.com",
    projectId: "otp-app-demo-5d3d2",
    storageBucket: "otp-app-demo-5d3d2.appspot.com",
    messagingSenderId: "1047975153413",
    appId: "1:1047975153413:web:b734e6f441a5946086716c"
  };

  firebase.initializeApp(firebaseConfig);

  export  {firebase};