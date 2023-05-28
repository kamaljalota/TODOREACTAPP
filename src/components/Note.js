import React,{useContext, useEffect, useRef, useState} from 'react';
import {NoteContext} from '../context/NoteState'
import AddNote from './AddNote';
import NoteItem from './NoteItem';
import { useNavigate } from 'react-router-dom';

export default function Note(props) {
  const drop=(e)=>{
    e.preventDefault();
    const card_id = e.dataTransfer.getData('card_id');
    console.log(card_id);
    const card = document.getElementById(card_id);
    card.style.display = 'block';
   e.target.appendChild(card);

  }
  const dragOver =e=>{console.log('div');
    e.preventDefault();
    
  }
  const navigate = useNavigate();
  const getAlert = props.getAlert;
  console.log(getAlert);
  const [note,setNote] = useState({id:"",etitle : "", edescription : "", etag : ""});
  const ref = useRef(null);
  const refClose = useRef(null);
    const a = useContext(NoteContext);
    const {notes, fetchAll, editNote} = a;
    useEffect(()=>{
      if (sessionStorage.getItem('token')) {
        fetchAll();
      } else {
        navigate("/login");
      }
     // fetchAll();
    },[])
    const update=(note)=>{
      setNote({id : note._id,etitle : note.title, edescription : note.description, etag : note.tag})
console.log(note._id);
      ref.current.click();

    }
    const handleIt=()=>{
      editNote(note.id,note.etitle,note.edescription,note.etag);
      refClose.current.click();
     
    }
    const onChange=(e)=>{
      setNote({...note , [e.target.name] : e.target.value});
    }
  return (
  <>
  <AddNote getAlert={getAlert}/>
  
  <button ref ={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="etitle" value={note.etitle} onChange = {onChange}  name="etitle" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="edescription" value={note.edescription} onChange = {onChange}  name="edescription"/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="etag" onChange = {onChange} value={note.etag} name="etag" />
  </div>
</form>
</div>
      <div className="modal-footer">
        <button  type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={handleIt} className="btn btn-primary" >Save changes</button>
      </div>
    </div>
  </div>
</div>
      <div  id="board-1"
     className ="row board"
     onDrop={drop}
     onDragOver={dragOver}>
      <h1>Notes ----</h1>
{notes.map((note)=>{
    return <NoteItem key={note._id} update={update} note={note}/>
})}
    </div>
    </>

  )
}
