import  { useContext } from 'react'
import SubjectContext from './Context_api';

const Subject = () => {
    const subject = useContext(SubjectContext)
  return (
    <div>
      <h1>Subject is : {subject}</h1>
    </div>
  )
}

export default Subject
