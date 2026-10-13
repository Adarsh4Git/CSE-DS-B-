// rafce

// import React from 'react'  -> import react from node_modules
// why to import? -> to add the neccessary package or files
import React from 'react'
import Card from './components/Card'  /* called Card from this path -> './components/Card'  */
import Book1 from './components/Book1'
import Student from './components/Student'
import DSproduct from './components/DSproduct'
const App = () => { 
  return (
    <div style={{display:'flex', gap:'10px'}}>
      {/* <Card/> */}
      {/* <Book1/> */}
      {/* <Student name="Rohan" roll="451202" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbcRkRY1hPJqQNJI1_p-iMbupeSTdth2XDEjnjNUQodw&s=10"/>
      <br />
      <Student name="Sohan" roll="451203" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5nA0gDJE3Mu_yuOozZh1Tgy-n4UJOxVpfpDgOmI1Uzw&s=10"/>
      <br />
      <Student name="Jiwan" roll="451204" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwH-7sgE--9scLLkgnEvEQZbBKplByZDAJZLMxK7ndZw&s=10"/> */}
      <DSproduct/>
    </div>
  )
}

export default App
// export default App -> export 'App' function somewhere so that other files can use it