import React, {createContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
const NoteContext = createContext();


const NoteState = (props)=> {
  let [check,setCheck] = useState(0);
  const initial = [];
  const [notes,setNotesState] = useState(initial);
  const host = "http://localhost:5000";
   
    const navigate = useNavigate();
    const fetchAll = async()=>{
      const response = await fetch(`${host}/api/notes/fetchnotes`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          'auth-token' : sessionStorage.getItem('token')
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }
         // body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
       const json= await response.json(); // parses JSON response into native JavaScript objects
       console.log('fetch',json);
       console.log('fetch',json.notes);
       setNotesState(json.notes);
    }
      

      // Add a note 

      const addNote =async(title, description, tag)=>{
        console.log('welcome',title,description)
        const response = await fetch(`${host}/api/notes/createnotes`, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            'auth-token' : sessionStorage.getItem('token')
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
            body: JSON.stringify({title, description, tag}) // body data type must match "Content-Type" header
        });
         const json= await response.json(); // parses JSON response into native JavaScript objects
         console.log(json);
      const note ={  
        "_id": "63bc51c04e0647a6bggha135fa9d69",
      "user": "63b7ec3f320d4f5cdc7acd29",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-01-09T17:41:20.757Z",
      "__v": 0
    }

        setNotesState(notes.concat(json.notes));
        
      }
         //  Delete a note 

         const deleteNote =async(id)=>{
          console.log(id);
          const response = await fetch(`${host}/api/notes/delete/${id}`, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json',
              'auth-token' : sessionStorage.getItem('token')
              // 'Content-Type': 'application/x-www-form-urlencoded',
            }
             // body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
           const json= await response.json(); // parses JSON response into native JavaScript objects
           console.log(json);
          const newNote = notes.filter((note)=>{ return note._id !== id})
          console.log('welcome',newNote,id)
          setNotesState(newNote);
         }
            // Edit a note 

      const editNote =async(id,title,description,tag)=>{
        console.log('welcome',title,description,tag);
        const response = await fetch(`${host}/api/notes/update/${id}`, {
          method: 'PUT', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            'auth-token' : sessionStorage.getItem('token')
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
            body: JSON.stringify({title,description,tag}) // body data type must match "Content-Type" header
        });
         const json= await response.json(); // parses JSON response into native JavaScript objects
         console.log('check',json.notes);
         const newOne = JSON.parse(JSON.stringify(notes));
         console.log('checknew',newOne);
         for(let i =0;i<newOne.length;i++){
          let elm = newOne[i];
          if(elm._id === id){
            newOne[i].title = title;
            newOne[i].description = description;
            newOne[i].tag = tag;
            break;
          }
         }
         setNotesState(newOne);
      }

      const SignUp =async(name,email,password)=>{
        const response = await fetch(`${host}/api/auth`, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
           // 'auth-token' : sessionStorage.getItem('token')
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
            body: JSON.stringify({name,email,password}) // body data type must match "Content-Type" header
        });
         const json= await response.json(); // parses JSON response into native JavaScript objects
         console.log(json.token);
         if(json.success){
        // sessionStorage.setItem("token",json.token);
        navigate("/login");
         }else{
          alert("not valid")
         }
      }

      const LogIn =async(email,password)=>{
        console.log('login',{email,password});
        const response = await fetch(`${host}/api/auth/login`, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
           // 'auth-token' : sessionStorage.getItem('token')
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
            body: JSON.stringify({email,password}) // body data type must match "Content-Type" header
        });
         const json= await response.json(); // parses JSON response into native JavaScript objects
         console.log('login',json.token);
         console.log('login',json.errors);
         if(json.success){
         sessionStorage.setItem("token",json.token);
        navigate("/home");
      }else{
        props.getAlert(json.errors);
       }
      }
const checking=()=>{
      setCheck(check+1);
}
  return (
    <NoteContext.Provider value={{notes,setNotesState, addNote, deleteNote, editNote, fetchAll , SignUp, LogIn,check,checking}}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState
export {NoteContext}