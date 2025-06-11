import { Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const View = () => {
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead><br /><br />
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Age</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Department</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Salary</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    </div>
  )
}

export default View