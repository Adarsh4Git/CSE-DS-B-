import React from 'react'

const Student = (props) => {
  return (
    <div style={{border: '2px solid red', height:'350px', width:'250px'}}>
        <h3>STUDENT RECORD</h3>
        <h3>{props.name}</h3>
        <img src={props.img} alt="" height={'100px'} width={'100px'}/>
        <h3>Roll No : {props.roll}</h3>
        <h3>Course : B.Tech</h3>
    </div>
  )
}

export default Student