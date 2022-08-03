import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {addUser, getUser} from '../service/api'
import {useNavigate, useParams} from 'react-router-dom'



const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% 0 0 25%;
  & > div {
        margin-top: 20px;
  }
`;

const EditUser = () => {
  const defaultvalue = {
    name: "",
    username: "",
    email: "",
    mobile: "",
  };

  const [user, setUser] = useState(defaultvalue);

  const navigate = useNavigate();

  const {id} = useParams()

  useEffect(() => {
    return () => {
        loadUserDetails();
    };
  }, [])

  const loadUserDetails = async ()=>{
    const response = await getUser(id)
  }

  const onValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value }); //If we don't use spread operation it override the previus value
    console.log(user);
  };

  const addUserDetails = async () => {
    await addUser(user);
    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="my-input">User name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="my-input">Mobile</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="mobile" />
      </FormControl>

      <FormControl>
        <Button
          variant="contained"
          onClick={() => {
            addUserDetails();
          }}
        >
          Edit
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;