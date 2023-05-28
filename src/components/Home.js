import React from 'react';
import Note from './Note';


export default function Home(props) {
  //const getAlert = props.getAlert;
  const {getAlert} = props;
  console.log(props.getAlert);
  console.log(getAlert);
  console.log(getAlert);
  return (
<div className='container'>
   
    <Note getAlert={props.getAlert}/>
    </div>

  )
}
