import React from 'react'
import "../styles/register.css"

const RegisterVote = () => {
  const options = ["Opt 1", ,"opt2", "opt3","opt4"]
  
  const handlePoll = (e) =>{
      console.log(e);
      
  }
  return (
    <div className='poll'>
        {/* Form Card */}
      <div className='poll-container'>
        <div className='register-top'><h2>Here you can see the question that will be coming form the Backend and here you will see that question rendering ?</h2></div>
            <div className='options'>
                <label>Options:</label>
                <div className='option-wrap'>
               { options.map((item)=>(
                 <button className='poll-btn' onClick={()=>handlePoll(item)}>{item}</button>
               ))}
                </div>
            </div>
            </div>
            <div className='btn-container'>
                <button className='submit-btn'>Submit</button>
            </div>
    </div>
  )
}

export default RegisterVote
