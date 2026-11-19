import React, { useState } from 'react'

const Radio = () => {

    const [gender, setGender]  = useState("male")

  return (
    <div>
      <input
        type='radio'
        value="male"
        id='male'
        name='gender'
        checked = {gender === 'male'}
        onChange={(event)=>setGender(event.target.value)}
      />
      <label href="male">Male</label>
      <br></br>
      <input
        type='radio'
        value="female"
        id='female'
        name='gender'
         checked = {gender === 'female'}
        onChange={(event)=>setGender(event.target.value)}
      />
      <label href="female">Female</label>

      <h2>Gender : {gender}</h2>
    </div>
  )
}

export default Radio
