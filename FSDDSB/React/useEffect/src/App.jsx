import React, { useEffect, useState } from 'react'

const App = () => {
  const [formData, setformData] =  useState({
    name:"",                  //Creating Database
    email:"",
    password:""
  })

  useEffect(()=>{
    console.log("Form data update", formData)
  },[formData])

  const handleChange =(e)=>{
    setformData({
      ...formData,    // ... -> Spread Operator
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit =(e)=> {
    e.preventDefault();
    alert("Registeration Done Successfully");
    console.log(formData)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='Enter Your Name' value={formData.name} onChange={handleChange} />
        <br />
        <input type="email" name='email' placeholder='Enter Your Email' value={formData.email} onChange={handleChange}/>
        <br />
        <input type="password" name='password' placeholder='Enter Password' value={formData.password} onChange={handleChange} />
        <br />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default App