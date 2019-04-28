import React from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import {logOutAction} from '../../actions/usersActions'

const topNavigation = ({isAuthenticated, logOutAction}) => {
  return (
    <div className="container-fluid bg-light shadow-sm position-relative" style={{zIndex: '1000'}}>
        <div className="d-flex align-items-center py-1">
          <h2 className="mr-2">Marchelo</h2>
          {!isAuthenticated ? 
              <div className="d-flex ml-auto">
                <NavLink className="p-2 text-secondary" to="/login">log in</NavLink> 
                <NavLink className="p-2 text-secondary" to="/login">sign up</NavLink> 
              </div> :
              <NavLink onClick={logOutAction} className="p-2 text-secondary ml-auto" to="/">sign out</NavLink>
          }
        </div>
    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.userReducer.loginData
})

topNavigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logOutAction: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {logOutAction})(topNavigation)

