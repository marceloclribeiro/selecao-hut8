import React from 'react'
import {NavLink} from 'react-router-dom'
import './styles.css'
function Sidebar(props){

    return (
        <div className="sidebar">
            <img src={props.avatar} className="icon" alt="Icone do usuario"/>
            <h2 className="user-name">{props.name}</h2>
            <p>{props.course}</p>
            <NavLink exact to= '/' className="sidebar-link" activeClassName="selected">
            Dashboard
            </NavLink>
            <NavLink exact to= '/courses' className="sidebar-link" activeClassName="selected">
            Meus cursos
            </NavLink>

        </div>
    )
}

export default Sidebar