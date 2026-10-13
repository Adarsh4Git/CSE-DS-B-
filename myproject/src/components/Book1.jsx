// rafce -> creates boiler plate code
import React from 'react'

const Book = () => {
  return (
    /* code starts from here */
    <div style={{backgroundColor:'gray', border:'2px solid white', height:'500px', width:'400px'}}>
        <h3 style={{color:'yellow'}}>BOOK SHOP</h3>
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTRr1lQ_CeFpIhtHMVUJ7stDYRHni_IQj3YAJCJaUtzOu_WMi6b0FgfLw0tOW_HLQu0-MUkK0O2jwb8_w-1BTsxK04G6hOq7A" alt="Physics Book"  style={{height:'240px', width:'200px'}} />
            <p style={{color:'white'}}>Concept Of Physics</p>
            <p>Price : $45.86</p>
        </div>
    </div> 
  )
}

export default Book