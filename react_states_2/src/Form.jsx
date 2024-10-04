import { useState } from "react"

function Form() {
  let [fullName, setFullName] = useState("");

  let handleInputChange = (event) =>{
    console.log(event.target.value);
    setFullName(event.target.value)
  }

  return (
    <div>
      <label htmlFor="username">Username:</label>
        <input placeholder="Enter Your name" id="username" type="text" value={fullName} onChange={handleInputChange}/>
      <label htmlFor="password">Password:</label>
        <input placeholder="Enter Your Password" id="password" type="password" value={fullName} onChange={handleInputChange}/>
        <button type="submit">Submit</button>
    </div>
  )
}

export default Form
