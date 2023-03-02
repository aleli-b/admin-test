import React from 'react';
import { NavLink } from 'react-router-dom';



export const Sidebar = () => {
  return (
    <div >
      <ul className='list-group'>
        <NavLink to='/' className={({isActive}) => isActive ? `list-group-item link-active` : 'list-group-item'}>
          Home
        </NavLink>
        <NavLink to='/list' className={({isActive}) => isActive ? `list-group-item link-active` : 'list-group-item'}>
          List
        </NavLink>
        <NavLink to='/contact' className={({isActive}) => isActive ? `list-group-item link-active` : 'list-group-item'}>
          Contact
        </NavLink>
        <NavLink to='/about' className={({isActive}) => isActive ? `list-group-item link-active` : 'list-group-item'}>
          About
        </NavLink>  
        <NavLink to='/login'className={({isActive}) => isActive ? `list-group-item link-active` : 'list-group-item'} >
          Login
        </NavLink>
        <NavLink to='/productAdmin'  className={({isActive}) => isActive ? `list-group-item link-active` : 'list-group-item'}>
          Admin
        </NavLink>
      </ul>
    </div>
  )
}
