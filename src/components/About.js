import React, { useState } from 'react'

export default function About() {
  const [current,setName] = useState("");
  const [previous,setPrevious] = useState("");
  const [operation,setOperation] = useState("");
  const getValue=(e)=>{
    if(e.target.value === '.' && current.includes('.')){
      return;
    }
setName(current + e.target.value);
console.log(current);
  }
  const deleteValue=()=>{
    let c = current.toString();
    setName(c.slice(0,-1));
  }
  const clearValue=()=>{
    setName("");
  }
  const getOperationValue=(e)=>{
    if(current === ""){return;} 
    else{
      setPrevious(current);
      setOperation(e.target.value);
      setName("");
  
    } 
   
  }
  const getFinalValue=()=>{
    let val;
    //setName(val);
    switch(operation) {
      case '+':
         val = parseFloat(previous) + parseFloat(current);
        setName(val);
        break;
        case '-':
          val = parseFloat(previous) - parseFloat(current);
         setName(val);
         break;
         case '*':
          val = parseFloat(previous) * parseFloat(current);
         setName(val);
         break;
         case '/':
          val = parseFloat(previous) / parseFloat(current);
         setName(val);
         break;
      default:return;
        // code block
    }
  }
  return (
    <div className='container  my-4 row-2'  style={{"text-align": "center" }}>
      <h2>CALCULATOR</h2>
      <div>
      <textarea rows = "1" cols = "19" name = "description" type="text" value={current}/></div>
    
      <table style={{ 
        "margin":"0 auto",      
        "border": "solid 1px black" }}>
  
  <tr>
  <td><button onClick={getValue} value={0}>0</button></td>
  <td><button onClick={getValue} value={1}>1</button></td>
  <td><button onClick={getValue} value={2}>2</button></td>
  <td> <button onClick={getValue} value={3}>3</button></td>
  <td> <button onClick={getValue} value={4}>4</button></td>
  
  </tr>
  <tr>
  <td> <button onClick={getValue} value={5}>5</button></td>
 
  <td><button onClick={getValue} value={6}>6</button></td>
  <td><button onClick={getValue} value={7}>7</button></td>
  <td> <button onClick={getValue} value={8}>8</button></td>
  <td> <button onClick={getValue} value={9}>9</button></td>
  
 </tr>
 <tr>
  <td> <button onClick={getOperationValue} value={'/'}>/</button></td>
 
  <td><button onClick={getOperationValue} value={'+'}>+</button></td>
  <td><button onClick={getOperationValue} value={'-'}>-</button></td>
  <td><button onClick={getOperationValue} value={'*'}>*</button></td>
  <td> <button onClick={getValue} value={'.'}>.</button></td>
  
 </tr>
 <tr>
  <td colspan="2"> <button onClick={deleteValue} >DEL</button></td>
 
  <td colspan="2"><button onClick={clearValue} >CLEAR</button></td>
  <td colspan="1"><button onClick={getFinalValue} value={'='}>=</button></td>

  
 </tr>
       </table>
    </div>
  )
}
