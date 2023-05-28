import React,{useContext} from 'react';
import {NoteContext} from '../context/NoteState';


export default function NoteItem(props) {
  const a = useContext(NoteContext);
  const {deleteNote} = a;
    const {note,update} = props;
  return (
    <div className='col-md-3 my-2 mx-2 card'  id="card-1">
    
      <div className="card" >
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <i className="fa-solid fa-trash mx-5" onClick={()=>{deleteNote(note._id)}}></i>
    <i className="far fa-edit" onClick={()=>{update(note)}}></i>
  </div>
</div>
    </div>
  )
}
