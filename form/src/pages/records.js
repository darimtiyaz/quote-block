import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
const Records = () => {
  const [userData, setUserData] = useState();
  const navigate = useNavigate();
  useEffect(()=>{
    let data = JSON.parse(localStorage.getItem("users"));
    setUserData(data);
  },[]);
  console.log('userData',userData);
  return (
    <div className='main-form'>
    <button onClick={()=>navigate("/")} >Back To Home</button>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Email</th>
            <th>Valid</th>
            <th>Range</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
        {userData && userData.map((item, index)=>{
          return(
        
          <tr key={index}>
            <td>{item.title}</td>
            <td>{item.email}</td>
            <td>{item.valid}</td>
            <td>{item.range}</td>
            <td>{item.description}</td>
          </tr>
          )})}
        </tbody>
      </table>
    </div>
  )
}

export default Records
