import React, { useState } from 'react'

const Name = () => {

    const [name, setName] = useState("") // name = Aman
    const[password, setPassword] = useState("")
    const[email, setEmail] = useState("")

  return (
    <div>
      {/* <h2>Name : {name}</h2>
      <button onClick={()=>setName("Prabha")}>ChangeName</button>
      <button onClick={()=>setName("Anwar")}>ChangeName</button> */}

      <input 
      type='text' 
      placeholder='Enter your name..'
      value={name}
      onChange={(event)=>setName(event.target.value)}
      />

      <br></br>

      <input
      type='password'
      placeholder='Enter your password..'
      value={password}
      onChange={(event)=> setPassword(event.target.value)}
      />

      <br/>

        <input
      type='email'
      placeholder='Enter your email..'
      value={email}
      onChange={(event)=> setEmail(event.target.value)}
      />


      <h2>Name : {name}</h2>
      <h2>Password : {password}</h2>
      <h2>Email : {email}</h2>
    </div>
  )
}

export default Name
