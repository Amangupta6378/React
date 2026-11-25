// import React from 'react';

import { useState } from "react"
import Counter2 from "./Counter2"
import UseRef from "./UseRef";

// import Counter from "./Counter"

// import College from "./College"



const App = () => {



  // const collegeData = [
  //   {
  //     name:"Chitkara",
  //     city : "Rajupura ",
  //     website : "www.chitkara.com",
  //     students:[
  //       {
  //         name:"Aman Gupta",
  //         age: 24,
  //         email : "aman@gmail.com"
  //       },
  //       {
  //         name:"Amit Jha",
  //         age: 23,
  //         email : "amit@gmail.com"
  //       },
  //       {
  //         name:"Ankit Yadav",
  //         age: 24,
  //         email : "ankit@gmail.com"
  //       },
  //     ]

  //   },
  //   {
  //     name:"Chandigarh University",
  //     city : "Chandigarh ",
  //     website : "www.cu.com",
  //     students:[
  //       {
  //         name:"Rahul Gupta",
  //         age: 25,
  //         email : "rahul@gmail.com"
  //       },
  //       {
  //         name:"Nishant marodia",
  //         age: 24,
  //         email : "nishant@gmail.com"
  //       },
  //       {
  //         name:"Abhishek Patel",
  //         age: 22,
  //         email : "abhishek@gmail.com"
  //       },
  //     ]

  //   },
  //   {
  //     name:"CGC",
  //     city : "landra ",
  //     website : "www.cgc.com",
  //     students:[
  //       {
  //         name:"Payal Gupta",
  //         age: 24,
  //         email : "payal@gmail.com"
  //       },
  //       {
  //         name:"Sameer yadav",
  //         age: 24,
  //         email : "sameer@gmail.com"
  //       },
  //       {
  //         name:"Yash Yadav",
  //         age: 21,
  //         email : "yash@gmail.com"
  //       },
  //     ]

  //   },
  // ]

  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  const [display, setDisplay] = useState(true);




  return (
    <div>
      {/* <College collegeData={collegeData}/> */}
      {/* <Counter2 count={count} data={data}/> */}
    {
      display ? <Counter2 count={count} data={data} /> : null
    }
      
      <button onClick={() => setCount(count + 1)}>Count : {count}</button>
      <button onClick={() => setData(data + 1)}>Data : {data}</button>
      {/* <button onClick={()=>setDisplay(!display)}>Toggle</button> */}
      <button onClick={()=>setDisplay(!display)}>Toggle</button>

      <UseRef/>
      
      

    </div>
  )
}

export default App
