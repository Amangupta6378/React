// import React from 'react'

import Student3 from "./Student3"

const College = ({collegeData}) => {
    return (
        <div>
            {
                collegeData.map((college) => (
                    <div>
                        <h2>Name : {college.name}</h2>
                        <ul>
                            <li>{college.city}</li>
                            <li>{college.website}</li>
                            <li>
                               <Student3 college={college}/>
                            </li>
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}

export default College
