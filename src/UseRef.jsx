import React, { useRef } from 'react'

const UseRef = () => {

    const inputRef = useRef();

    const inputHandler = ()=>{
        console.log(inputRef)
        inputRef.current.focus()
        inputRef.current.placeholder = "my name is aman"
        inputRef.current.value = "aman"
        inputRef.current.style.color = 'red'
    }

  return (
    <div>
      <input type='text' placeholder='enter your name.' ref={inputRef}/>
      <button onClick={inputHandler}>input</button>
    </div>
  )
}

export default UseRef
