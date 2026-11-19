// import React from 'react'

const Map = () => {
    
    const userData = [
        {
            id : 1,
            name : "Aman gupta",
            age : 24,
            gender : "male"
        },
        {
            id : 2,
            name : "Ankit Yadav",
            age : 25,
            gender : "male"
        },
        {
            id:3,
            name : "Amit jha",
            age : 23,
            gender : "male"
        },
        {
            id:4,
            name : "Nishant Marodia",
            age : 26,
            gender : "male"
        },
        {
            id:5,
            name : "chintu Yadav",
            age : 25,
            gender : "male"
        },
        {
            id:4,
            name : "Abhished Patel",
            age : 23,
            gender : "male"
        },
    ]

  return (
    <div>
      <h2>User data</h2>
      <table border="1">
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Age</td>
                <td>Gender</td>
            </tr>
        </thead>
        <tbody>
            {
                userData.map((user)=>{
                    return(
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.gender}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Map
