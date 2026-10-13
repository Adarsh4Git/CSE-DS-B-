// rafce
//   why .jsx -> javascript code cant be accessed so we convet .js to .jsx using 'babble'
import React from 'react'

const Card = () => {
  return (
    <div> 
        <div style={{backgroundColor:'green', border:'2px solid red', height:'400px', width:'400px'}}>
            <h4 style={{color:'magenta'}}>STUDENT ID CARD</h4>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH9obTb_r89lKH1XMvztfmZmrvw8Eg7DPvYZ6C792aUQ&s=10" alt="Mouse Image"  style={{height:'100px', width:'100px'}} />
            </div>
            <div style={{color:'white', textAlign:'center'}}>
                <p>Name : Dogesh</p>
                <p>Class : B.Tech CSE(DS)</p>
                <p>Year : 3 Year</p>
            </div>
        </div>
    </div>
  )
}

export default Card