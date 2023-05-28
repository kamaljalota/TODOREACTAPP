import React,{useContext} from 'react';
import {NoteContext} from '../context/NoteState';


export default function NoteItem(props) {
  const a = useContext(NoteContext);
  const {deleteNote} = a;
    const {note,update} = props;
    const dragStart=(e)=>{
      const target = e.target;
       e.dataTransfer.setData('card_id',target.id);
      setTimeout(()=>{
        target.style.display = 'none';
      },0)
    }

      const dragOver2 =e=>{console.log('p');
      e.stopPropagation();
      
    }
  return (
    <div className='col-md-3 my-2 card'  id="card-1"
    draggable="true"
    onDragStart={dragStart}
    onDragOver={dragOver2}>
    
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
