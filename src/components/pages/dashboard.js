import React from 'react'
import {NavLink} from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h3>dashboard</h3>
      <NavLink to="./login">log in</NavLink>
    </div>
  )
}

export default Dashboard
