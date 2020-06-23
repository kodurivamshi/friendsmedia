import React,{useContext} from 'react';
import {Navbar, NavbarBrand,Nav,NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import { userContext } from "../App";

const Navigate=()=>{
    const {state,dispatch}=useContext(userContext);
    const renderList=()=>{
        if(state){
            return [
                        <NavItem>
                            <NavLink className="nav-link" to="/create">Create post</NavLink>
                        </NavItem>,
                        <NavItem>
                            <NavLink className="nav-link" to="/profile">Profile</NavLink>
                        </NavItem> 
            ]
        }
        else{
            return[
            <NavItem>
            <NavLink className="nav-link" to="/signin">SignIn</NavLink>
            </NavItem>,
            <NavItem>
            <NavLink className="nav-link" to="/signup">SignUp</NavLink>
            </NavItem>
            ]
        }
    }
    return (
            <React.Fragment>
            <Navbar dark expand="md">
            <div className="container">
                    <NavbarBrand className="mr-auto"><NavLink to={state?"/":"signin"}><h2>Friendsmedia</h2></NavLink></NavbarBrand>
                    <Nav navbar>
                       {renderList()}
                    </Nav>    
                    </div>    
            </Navbar>
        </React.Fragment>
    );
}

export default Navigate;