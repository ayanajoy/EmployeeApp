import React, { useEffect } from 'react'
import  {TextField, Button } from '@mui/material'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Add = (props) => {
  var[emp,setEmp] = useState({Name: "", Age: "", Dept: "", Salary: ""})
  var navigate = useNavigate()
  var location = useLocation()
  console.log("loc: ", location.state)
  
  const inputHandler = (e) => {
    setEmp({...emp, [e.target.name]: e.target.value})
    console.log(emp)
  }

  const addhandler = () => {
    if(location.state !== null) {
      axios.put("http://localhost:3000/update/"+location.state.value._id, emp)
      .then((res)=> {
        alert(res.data.message)
        navigate("/view")
      })
      return;
    } else {
    axios.post("http://localhost:3000/add", emp)
    .then((res)=> {
      alert(res.data.message)
      navigate("/view")
    })
  }
  }

  useEffect(() => {
    if(location.state !== null) {
      setEmp({
        ...emp,
        Name: location.state.value.Name,
        Age: location.state.value.Age,
        Dept: location.state.value.Dept,
        Salary: location.state.value.Salary,
      });
    }
  },[]);

  return (
    <div>
      <br /><br /><br />
      <TextField label="Name" variant="outlined" name='Name' value={emp.Name} onChange={inputHandler}/><br /><br />
      <TextField label="Age" variant="outlined" name='Age' value={emp.Age} onChange={inputHandler}/><br /><br />
      <TextField label="Department" variant="outlined" name='Dept' value={emp.Dept} onChange={inputHandler}/><br /><br />
      <TextField label="Salary" variant="outlined" name='Salary' value={emp.Salary} onChange={inputHandler}/><br /><br />
      <Button variant="contained" color='secondary' onClick={addhandler}>Submit</Button><br />
    </div>
  )
}

export default Add