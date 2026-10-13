import React from 'react'
import students from './Data/student'

const App = () => {
  return (
    <div>
      <h1>Student Record</h1>
      <table border="1" style={{margin:"10px"}}>
        <thead>
          <tr>
            <td style={{padding:"10px"}}>Id</td>
            <td style={{padding:"10px"}}>Name</td>
            <td style={{padding:"10px"}}>Course</td>
            <td style={{padding:"10px"}}>Branch</td>
          </tr>
        </thead>

        <tbody>
          {students.map((student)=>(
            <tr>
              <td style={{padding:"10px"}}>{student.Id}</td>
              <td style={{padding:"10px"}}>{student.Name}</td>
              <td style={{padding:"10px"}}>{student.Course}</td>
              <td style={{padding:"10px"}}>{student.Branch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}

export default App