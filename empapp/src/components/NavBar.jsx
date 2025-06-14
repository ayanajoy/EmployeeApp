import { AppBar, Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Toolbar from '@mui/material/Toolbar';

const NavBar = () => {
  return (
    <div>
        <AppBar >
            <Toolbar>

          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            EmpApp
          </Typography>&nbsp;&nbsp;
                
                <Link to={"/add"}>
                <Button variant='contained' sx={{ color: 'white' }}>Add</Button>
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={"/view"}>
                <Button variant='contained' sx={{ color: 'white' }}>View</Button>
                </Link>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar