import React from 'react'
import { Link } from 'react-router-dom'

const Page_not_found = () => {
  return (
    <div style={{textAlign:'center'}}>
      <h1>Page Not Found</h1>
      <Link to="/" style={{color:'red'}}>Go To Home</Link>
      <div>

      <img style={{width:'70%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvbuyV48ZpHsWgD2bYsCGR-SzndiBhrb4ASJocN1l1Vh8c9qJciEGacL0&s=10'/>
      </div>
    </div>
  )
}

export default Page_not_found
