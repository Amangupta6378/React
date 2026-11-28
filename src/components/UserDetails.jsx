import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const paramsData = useParams()
    console.log(paramsData.id)
  return (
    <div>
      <h1>User Details</h1>
        <h2>User id is :{paramsData.id}</h2>
    </div>
  )
}

export default UserDetails
