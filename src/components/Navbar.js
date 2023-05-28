import React,{useEffect} from 'react';
import  {Link, useLocation, useNavigate} from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate();
    const location = useLocation();
    useEffect(()=>{
console.log(location.pathname);
    },[location])
    const logout=()=>{
      sessionStorage.removeItem('token');
      navigate("/login");
    }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/home" ? "active" : "" }`} aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/about" ? "active" : "" }`} to="/about">About</Link>
        </li>
       
      </ul>
   
    </div>
    { !sessionStorage.getItem('token') ?<form>
    <Link type="button" to="/login" className ="btn btn-primary mx-2">LogIn</Link>
    <Link type="button" to="/signup" className="btn btn-primary">Sign up</Link></form> :
    <button onClick={logout} className="btn btn-primary">Logout</button>
}
  </div>
</nav>
    </div>
  )
}
