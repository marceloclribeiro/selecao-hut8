import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'
function Sidebar(props){

    return (
        <div className="sidebar">
            <img src={props.avatar} className="icon" alt="Icone do usuario"/>
            <h2 className="user-name">{props.name}</h2>
            <p>{props.course}</p>
            <Link to= '/'>
            <h1 className="dashboard-link">Dashboard</h1>
            </Link>
            <Link to= '/courses'>
            <h1 className="courses-link">Meus cursos</h1>
            </Link>

        </div>
    )
}

export default Sidebar