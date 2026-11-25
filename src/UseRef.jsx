import React, { useRef } from 'react'

const UseRef = () => {

    const inputRef = useRef();
    const h1Ref = useRef()


    const inputHandler = ()=>{
        console.log(inputRef)
        inputRef.current.focus()
        inputRef.current.placeholder = "my name is aman"
        inputRef.current.value = "aman"
        inputRef.current.style.color = 'red'
    }

    const h1Handler = ()=>{
      console.log(h1Ref)
      h1Ref.current.style.color = "Yellow"
      h1Ref.current.style.backgroundColor = "green"
    }

  return (
    <div>
      <input type='text' placeholder='enter your name.' ref={inputRef}/>
      <button onClick={inputHandler}>input</button>

      <h1 ref={h1Ref}>Hello World</h1>
      <button onClick={h1Handler}>H1 Ref</button>
    </div>
  )
}

export default UseRef
