import React from 'react'
import PropTypes from 'prop-types'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const homeRoute = ({isAuthenticated, component: Component, ...rest}) => {
  return (
    <Route {...rest} render={props => isAuthenticated ? <Component {...props}/> : <Redirect to="/login" />} />
  )
}

const mapStateToProps = state => ({
    isAuthenticated: !!state.userReducer.loginData
  })

homeRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(homeRoute)
