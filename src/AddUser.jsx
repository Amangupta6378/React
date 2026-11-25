import React from 'react'

const AddUser = ({setName}) => {
   

  return (
    <div>
      <h1>Add user</h1>
        {/* <h1> User : {name}</h1> */}
      <input type='text' placeholder='enter you name' onChange={(event)=>setName(event.target.value)}/>
      
    </div>
  )
}

export default AddUser
