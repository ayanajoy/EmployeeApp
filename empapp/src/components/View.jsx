import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const View = () => {
    var[user,setUser] = useState([]) 
    var navigate = useNavigate()
    // Fetching data from the server
        axios.get("http://localhost:3000/view")
        .then((res) => {
            setUser(res.data);
        })
    // Deleting a record
    const delValue = (id) => {
        console.log(id)
        axios.delete("http://localhost:3000/delete/"+id)
        .then((res)=> {
            alert(res.data.message)
            window.location.reload()
        })
    }
    // Updating a record
    const updateValue = (value) => {
            navigate("/add", {state: {value}})
    }
  return (
    <div>
        <br /><h1>DETAILS</h1>
        <TableContainer>
            <Table>
                <TableHead><br />
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Age</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Department</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Salary</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {user.map((value) =>{
                        return (
                        <TableRow>
                            <TableCell>{value.Name}</TableCell>
                            <TableCell>{value.Age}</TableCell>
                            <TableCell>{value.Dept}</TableCell>
                            <TableCell>{value.Salary}</TableCell>
                            <TableCell>
                            <Button variant='contained' color='error' onClick={()=> {delValue(value._id)}}>Delete</Button>&nbsp;&nbsp;&nbsp;
                            
                            <Button variant='contained' color='success' onClick={()=> {updateValue(value)}}>Update</Button>
                            </TableCell>
                        </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>

    </div>
  )
    }


export default View