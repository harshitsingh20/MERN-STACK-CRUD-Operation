import { Table, TableBody, TableCell, TableHead, TableRow, styled, Button } from '@mui/material'
import {getUsers} from "../service/api"
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const AllUsers = () => {

  const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px auto 0 auto;
  `;

  const THead = styled(TableRow)`
    background: #0b6b8b;
    & > th{
      color: white;
      font-size: 20px;
    }
  `


  const [users, setUsers] = useState([])

  useEffect(() => {
   getAllUsers()
  }, [])

  const getAllUsers = async ()=>{
    let response = await getUsers()
    console.log("hello",response.data)
    setUsers(response.data)
  }


  return (
    
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Mobile</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>

      <TableBody>
        {
          users.map(user=>{
            <TableRow>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.mobile}</TableCell>
              <TableCell>
                <Button variant='contained' style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                <Button variant='contained' color='secondary'>Delete</Button>
              </TableCell>
            </TableRow>;
          })

        }
      </TableBody>
    </StyledTable>
  );
}

export default AllUsers