import { useState } from 'react'

const Skills = () => {
    
const [skills, setSkills] = useState([]);

const handleSkills = (event)=>{
    console.log(event.target.value, event.target.checked);

    if(event.target.checked){
        setSkills([...skills, event.target.value])
    }
    else{
        setSkills(skills.filter((item)=>item !== event.target.value))
    }
} 

  return (
    <div>
      <input type='checkbox' onChange={handleSkills} id='js' value='Javascript'/>
      <label htmlFor="js">Javascript</label>
      <br/>
      <input type='checkbox' onChange={handleSkills} id='python' value='Python'/>
      <label htmlFor="python">python</label>
      <br/>
      <input type='checkbox' onChange={handleSkills} id='java' value='Java'/>
      <label htmlFor="java">Java</label>
      <br/>
      <input type='checkbox' onChange={handleSkills} id='react' value='React'/>
      <label htmlFor="react">React</label>

      <h1>{skills}</h1>
    </div>
  )
}

export default Skills
