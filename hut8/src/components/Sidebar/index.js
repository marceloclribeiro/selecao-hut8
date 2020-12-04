import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'
function Sidebar(props) {
  return (
    <div className='sidebar'>
      <img src={props.avatar} className='icon' alt='Icone do usuario' />
      <div className='user-info'>
        <h2 className='user-name'>{props.name}</h2>
        <p>{props.course}</p>
      </div>
      <NavLink exact to='/' activeClassName='selected'>
        <p className='sidebar-link'>Dashboard</p>
      </NavLink>

      <NavLink exact to='/courses' className='sidebar-link' activeClassName='selected'>
        <p className='sidebar-link'>Meus cursos</p>
      </NavLink>
    </div>
  )
}

export default Sidebar
