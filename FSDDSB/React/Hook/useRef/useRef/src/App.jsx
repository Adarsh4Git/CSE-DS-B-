import React from 'react'
import { useRef } from 'react'

function myFunction(){
  const box = useRef(0);
  const update = () =>{
    box.current = 1000;
    console.log("update:", box.current);
  };
  return (
    <div>
      <button onClick={update}>Update</button>
     </div>
  );
}

export default myFunction;