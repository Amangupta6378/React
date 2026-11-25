// import React, { useState } from 'react';

// import AddUser from "./AddUser"
// import DisplayUser from "./DisplayUser"
import { useState } from 'react';
import Component1 from './context api/Component1';
import SubjectContext from './context api/Context_api';
import Subject from './context api/Subject';
import Component4 from './context api/Component4';
import {  Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

// import { useState } from "react"
// import Counter2 from "./Counter2"
// import UseRef from "./UseRef";

// import Counter from "./Counter"

// import College from "./College"



const App = () => {
  // const [name, setName] = useState("Aman Gupta")
  const [subject, setSubject] = useState("English")



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

  // const [count, setCount] = useState(0);
  // const [data, setData] = useState(0);

  // const [display, setDisplay] = useState(true);




  return (

    
      <SubjectContext.Provider value={subject} >
        <div>
          {/* <select onChange={(event) => setSubject(event.target.value)}>
            <option value="">Select Subject</option>
            <option value="Math">Math</option>
            <option value="English">English</option>
            <option value="History">History</option>
            <option value="Hindi">Hindi</option>
          </select> */}
          {/* <College collegeData={collegeData}/> */}
          {/* <Counter2 count={count} data={data}/> */}
          {/* {
      display ? <Counter2 count={count} data={data} /> : null
    }
      
      <button onClick={() => setCount(count + 1)}>Count : {count}</button>
      <button onClick={() => setData(data + 1)}>Data : {data}</button> */}
          {/* <button onClick={()=>setDisplay(!display)}>Toggle</button> */}
          {/* <button onClick={()=>setDisplay(!display)}>Toggle</button> */}

          {/* <UseRef/> */}
          {/* <AddUser setName = {setName}/>
      <DisplayUser name={name}/> */}
{/* 
          <h1>Context api</h1>
          <Component1 /> */}

          <Navbar/>


          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/contact' element={<Contact/>} />

          </Routes>


        </div>
      </SubjectContext.Provider>
   

  )
}

export default App
