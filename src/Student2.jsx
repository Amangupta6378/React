import React from 'react'

const Student2 = ({college}) => {


    return (
        <div>
            <p>This is component 2.</p>
            {/* <h1>name : {props.student.name}</h1>
            <h1>age : {props.student.age}</h1>
            <h1>gender : {props.student.gender}</h1> */}
            {/* <h1>{college[0]}</h1>
            <h1>{college[1]}</h1>
            <h1>{college[2]}</h1> */}

            {
            college.map((item) => (   
                <h1> {item} </h1>
            ))
            }
        </div>
    )
}

export default Student2;
