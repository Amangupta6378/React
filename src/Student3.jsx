import React from 'react'

const Student3 = ({college}) => {
    return (
        <div>
            {
                college.students.map((student) => (
                    <div>
                        <h3>Students</h3>
                        <ul>
                            <li>{student.name}</li>
                            <li>{student.age}</li>
                            <li>{student.email}</li>
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}

export default Student3
