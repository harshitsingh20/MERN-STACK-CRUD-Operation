import React from 'react'
import { AppBar, Toolbar, styled, } from "@mui/material";
import { NavLink } from "react-router-dom";


const Header = styled(AppBar)`
  background: #1485cc;
`;
const Tabs = styled(NavLink)`
  color: #ffffff;
  margin-right: 20px;
  text-decoration: none;
  font-size: 20px;
`;

const Navbar = () => {
    return (
        <Header position="static">
            <Toolbar>
                <Tabs to="./" exact> Home</Tabs>
                <Tabs to="all" exact>All Users</Tabs>
                <Tabs to="add" exact>Add User</Tabs>
            </Toolbar>
        </Header>
    )
}
export default Navbar