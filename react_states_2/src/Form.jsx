import { useState } from "react"

function Form() {
  let [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  let handleInputChange = (event) =>{
    let fieldName = event.target.name;
    console.log(fieldName);
    let fieldValue = event.target.value;
    console.log(fieldValue);

    setFormData((currData)=>{
      return {...currData, [fieldName]:fieldValue}
    })
  }

  let handleSubmit = (event) =>{
    console.log("Submitted")
    event.preventDefault();
    setFormData({
      username: "",
      password: ""
    });
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
        <input placeholder="Enter Your name" id="username" type="text" value={formData.username} name="username" onChange={handleInputChange}/>
      <label htmlFor="password">Password:</label>
        <input placeholder="Enter Your Password" id="password" type="password" value={formData.password} name="password" onChange={handleInputChange}/>
        <input type="submit" />
    </form>
  )
}

export default Form
