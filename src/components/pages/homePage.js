import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'


import Nav from '../navigation/topNavigation'

class homePage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <h1>home page</h1>
        <h2>you are logged in</h2>
        
      </div>
    )
  }
}

homePage.propTypes = {
  users_getAll: PropTypes.func.isRequired
}

export default homePage
