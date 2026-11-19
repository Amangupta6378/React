import React, { useEffect, useState } from 'react'

const Counter2 = ({count,data}) => {

    const handleCount = () => {
        console.log("handleCount is called.");
    }

    const handleData = ()=>{
        console.log("handleData is called.");
        
    }


  

    useEffect(()=>{
          handleData()
    },[data])
    

    useEffect(()=>{
        handleCount();
    },[count])


    return (
        <div>
            <h1>Counter2 Component : {count}.</h1>
            <h1>Counter2 Data : {data}.</h1>
        </div>
    )
}

export default Counter2
