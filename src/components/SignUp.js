import React, { useContext, useState } from "react";
import { NoteContext } from "../context/NoteState";
import Child from "./Child";

export default function SignUp() {
  //const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    nameError: "",
    emailError: "",
    passwordError: "",
  });
  const context = useContext(NoteContext);
  const { SignUp } = context;
  const handleAddedUsers = (e) => {
    e.preventDefault();
    if (validate()) {
      //console.warn(this.state);

      SignUp(user.name, user.email, user.password);
      setUser({
        name: "",
        email: "",
        password: "",
        nameError: "",
        emailError: "",
        passwordError: "",
      });
    }

    //navigate("/home")
  };
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";
    console.log('kj',user.name);
    if (!user.name || user.name.length < 5) {
      nameError = "Name field is required";
    }

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!user.email || reg.test(user.email) === false) {
      emailError = "Email Field is Invalid ";
    }
    if (!user.password) {
      passwordError = "Password field is required";
    }

    if (emailError || nameError || passwordError) {
      // setState({nameError,emailError});
      setUser({
        ...user,
        nameError: nameError,
        emailError: emailError,
        passwordError: passwordError,
      });
      return false;
    }
    return true;
  };
  return (
    <div>
      <div className="container">
        {" "}
        {console.log("signup")}
        <form onSubmit={handleAddedUsers}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={onChange}
              name="name"
            />
            <span className="text-danger">{user.nameError}</span>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              onChange={onChange}
              name="email"
            />
            <span className="text-danger">{user.emailError}</span>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="password"
              onChange={onChange}
              name="password"
            />
            <span className="text-danger">{user.passwordError}</span>
          </div>
          <button type="submit" className="btn btn-primary">
            Add Note
          </button>
        </form>
      </div>
      <Child />
    </div>
  );
}
