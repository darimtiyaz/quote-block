import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./index.css"
const Home = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({title:"",valid:"",email:"",range:"",description:""})
 const handleChange = (e) => {
   setFormData({...formData, [e.target.name]: e.target.value})
 }

 const onSubmit = (event) => {
  event.preventDefault();
  localStorage.setItem("currentData", JSON.stringify(formData));

  let previous = localStorage.getItem("users");
  let currData = JSON.parse(localStorage.getItem("currentData"))
  var data = [currData];
  if(previous){
    JSON.parse(previous).map((item)=>{
      data.push(item);
    })
  }
  localStorage.setItem("users", JSON.stringify(data));
  setFormData({title:"",valid:"",email:"",range:"",description:""})
  console.log('formData',formData);
 }
  return (
    <div className='main-form'>
      <button onClick={()=>navigate("./records")} className="nav-button">View Records</button>
      <h2>Contact Form</h2>
      <form onSubmit={onSubmit}>
      <input placeholder="Enter Title" className='input-field' type="text" name="title" value={formData.title}  onChange={handleChange}  required 
       
      /><br/>
      <input placeholder="Enter Email" className='input-field' type="email" name="email" value={formData.email}  onChange={handleChange} required 
        
      /><br/>
      <input placeholder="Enter number bw 0-100" maxLength="2"  pattern ="^[0-9]$" className='input-field' type="number" name="range" value={formData.range}  onChange={handleChange} required
       
      /><br/>
      <select placeholder="Enter Valid" className='input-field' type="boolean"name="valid" value={formData.valid}  onChange={handleChange} required ><option>true</option>
      <option>false</option></select><br/>
      <input placeholder="Enter Description" className='input-field' type="text" name="description" value={formData.description} onChange={handleChange}
      /><br/>
      <button type="submit" className='submit-button'>submit Form</button>
      </form>
    </div>
  )
}

export default Home
