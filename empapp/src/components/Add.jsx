import React from 'react'
import  {TextField, Button } from '@mui/material'
const Add = () => {
  return (
    <div>
      <br /><br /><br /><TextField label="Name" variant="outlined"></TextField><br /><br />
      <TextField label="Age" variant="outlined"></TextField><br /><br />
      <TextField label="Department" variant="outlined"></TextField><br /><br />
      <TextField label="Salary" variant="outlined"></TextField><br /><br />
      <Button variant="contained">Add</Button><br />
    </div>
  )
}

export default Add