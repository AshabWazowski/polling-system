import React, { useState } from 'react'
import '../styles/createPoll.css'
import axios from 'axios'

const host = process.env.REACT_APP_HOST_URL;
const CreatePoll = () => {
  const [question, setQuestion] = useState("");
  const [option, setOption] = useState({
    option1:"",
    option2:"",
    option3:"",
    option4:""
  });

  const handleSubmit = async (e) =>{
      e.preventDefault();
      console.log("Form Submit: ", e.target.value);
       console.log("Change: ", option)
        console.log("Question: ", question)
        const data = {
          question: question,
          option: option
        }
        try {
           const response = axios.put(`${host}/api/create-poll`, data)
           console.log(response);
        } catch (error) {
          
        }
      
  }

  const handleChange = (i, e) =>{
       setOption({...option, ["option"+i]: e.target.value})
  }
  return (
    <div className='poll'>
        {/* Form Card */}
      <div className='poll-container'>
        <div className='create-poll-top'><h2>Create Poll</h2></div>
        <form onSubmit={handleSubmit}>
            <div className='question'>
                <label>Question:</label>
                <input type="text" placeholder='Enter your question' className='question-input' value={question} onChange={(e) => setQuestion(e.target.value)}/>
            </div>
            <div className='options'>
                <label>Options:</label>
                <div className='option-wrap'>
                <input type="text" placeholder='Option 1' className='option-input' value={option.option1} onChange={(e)=>handleChange(1, e)}/>
                <input type="text" placeholder='Option 2' className='option-input' value={option.option2} onChange={(e)=>handleChange(2, e)}/>
                <input type="text" placeholder='Option 3' className='option-input' value={option.option3} onChange={(e)=>handleChange(3, e)}/>
                <input type="text" placeholder='Option 4' className='option-input' value={option.option4} onChange={(e)=>handleChange(4, e)}/>
            </div>
            </div>
            <div className='btn-container'>
                <button className='submit-btn'>Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePoll
