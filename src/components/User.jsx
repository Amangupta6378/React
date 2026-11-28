import React,{Link} from 'react'

const User = () => {
    const userData = [
        {id:1, name:'Aman'},
        {id:2, name:'Sohal'},
        {id:3, name:'Amit'},
        {id:4, name:'Ankit'},
        {id:5, name:'Mithilesh'},
        {id:6, name:'Saurav'},
      ]
  return (
    <div>
      <h1>User</h1>
      {
        userData.map((user)=>(
           <div>
             <h4>
                <a href={'/users/'+user.id}>{user.name}</a>
             </h4>
           </div>
        ))
      }
      
    </div>
  )
}

export default User
