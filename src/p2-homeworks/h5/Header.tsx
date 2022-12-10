import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";

function Header() {
    return (
        <div>
            <NavLink to={PATH.PRE_JUNIOR} style={({isActive}) => isActive ? {
                color: 'red',
                margin: '5px'
            } : {color: 'black', margin: '5px'}}> Pre-Junior </NavLink>
            <NavLink to={PATH.JUNIOR}
                     style={({isActive}) => isActive ? {
                         color: 'red',
                         margin: '5px'
                     } : {color: 'black', margin: '5px'}}> Junior </NavLink>
            <NavLink to={PATH.SUPER_JUNIOR}
                     style={({isActive}) => isActive ? {
                         color: 'red',
                         margin: '5px'
                     } : {color: 'black', margin: '5px'}}> Super-Junior </NavLink>
        </div>
    )
}

export default Header
