import React, { useEffect, useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)
    const [data,setData] = useState(0)

    const handleCount=()=>{
        console.log("handleCount is called.");
        
    }

   

    const handleData=()=>{
        console.log("handleData is called.")
    }

    useEffect(()=>{
         handleCount()
    },[count,data])
   

    useEffect(()=>{
         handleData();
    },[data,count])
  return (
    <div>
      <h1>useEffect</h1>
      <h1>Count : {count}</h1>
      <h1>Data : {data}</h1>
      <button onClick={()=>setCount(count+1)}>Counter+1</button>
      <button onClick={()=>setData(data+1)}>Data+1</button>
    </div>
  )
}

export default Counter
