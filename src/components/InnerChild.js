import React,{useContext, useState} from 'react';
import {NoteContext} from '../context/NoteState'

export default function InnerChild() {
    const a = useContext(NoteContext);
    const {check,checking} = a;
    let[click,setClick] = useState(0);
    const clicking=()=>{
        setClick(click+1)
    }
  return (
    <div>
     {check} {click}
    <button onClick={checking}>click</button>
    <button onClick={clicking}>clicking</button>
    </div>
  )
}
