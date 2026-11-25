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

    useEffect(()=>{
        return()=>{
            console.log("Component unmount")
        }
    },[])

    // useEffect(()={},[]) = When component is rendered  == mounting
    // useEffect(()=>{}) = when component is re-rendered == update
    // useEffect(()=>{ return }) = component finised == unmount


    return (
        <div>
            <h1>Counter2 Component : {count}.</h1>
            <h1>Counter2 Data : {data}.</h1>
        </div>
    )
}

export default Counter2;
