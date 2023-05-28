import React,{useContext, useState} from 'react';
import {NoteContext} from '../context/NoteState'

export default function AddNote(props) {
  

    const [note, setNote] = useState({title : "", description : "", tag : ""});
    const context = useContext(NoteContext);
    const { addNote} = context;
    const handleAddedNotes =(e)=>{
        e.preventDefault();
 
        props.getAlert("in noteee");
        addNote(note.title,note.description,note.tag);
        setNote({title : "", description : "", tag : ""});
    }
    const onChange = (e)=>{
        setNote({...note , [e.target.name] : e.target.value});
    }
  return (
   
    <div>
      <div className='container'>
       
      <h1>Add Notes</h1>
      <form>
  <div className="mb-3"> 
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" value={note.title} onChange={onChange} name='title' />
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" value={note.description}  onChange={onChange} name='description'/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" value={note.tag} onChange={onChange} name='tag'/>
  </div> 
  <button type="submit" className="btn btn-primary" onClick={handleAddedNotes}>Add Note</button>
 
</form>

    </div>
    </div>
  )
}
