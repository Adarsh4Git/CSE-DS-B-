import React, { useState } from 'react'
// import cat from ''

const DSproduct = () => {
    const[catHeight, setCatHeight]=useState(200);
    const[catWidth, setCatWidth]=useState(200);
    const[red,setRed]=useState(0);
    const[green,setGreen]=useState(0);
    const[blue,setBlue]=useState(0);
    const[rotate, setRotate] = useState(0);

    function setHeight(){
        setCatHeight(catHeight+20);
    }
    function setWidth(){
        setCatWidth(catWidth+20);
    }
    function changeBgColor(){
        setRed((Math.random()*255));
        setGreen((Math.random()*255));
        setBlue((Math.random()*255));
    }

    function rotateImg(){
        setRotate(rotate+30);
    }

  return (
    <div>
        <h2 style={{color:'green', backgroundColor:'brown'}}>Image Manipulation</h2>

        <div style={{backgroundColor:`rgb(${red}, ${green}, ${blue})`, border:'5px solid yellow', height:'400px', width:'400px', marginLeft:'300px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx6nP0ToVsCEwafIsxHDBE0rHO9CuL_KzKT9Y3rceung&s=10" style={{transform:`rotate(${rotate}deg)`}} height={catHeight} width={catWidth}/>

        <div>
            <h3>Cat Height : {catHeight}px</h3>
            <h2>Red:{red}</h2>
            <h2>Green:{green}</h2>
            <h2>Blue:{blue}</h2>
            <h3>Rotation: {rotate}°</h3>

        </div>
    </div>
    <button onClick={setHeight} style={{borderRadius:'50%'}}>Enhance Height</button>
    <button onClick={setWidth} style={{borderRadius:'50%'}}>Enhance Width</button>
    <button onClick={changeBgColor} style={{borderRadius:'50%'}}>BGcolor Change</button>
    <button onClick={rotateImg} style={{borderRadius:'50%'}}>Rotate</button>
    </div>
    
  )
}

export default DSproduct