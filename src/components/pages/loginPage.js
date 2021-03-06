import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import LoginForm from '../forms/loginForm'
import {loginAction} from '../../actions/usersActions'

class loginPage extends Component {

    submit = data => {
      return this.props.loginAction(data)
        .then(json => {
          if(json.payload.status !== 200) throw new Error(json.payload.message);
          return json
        })
        .then(() => {
          this.props.history.push("/home")
        })
    }
  
  render() {
    return (
      <div>
        <LoginForm submit={this.submit} />
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   authReducer: state.authReducer.token
// })


loginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  loginAction: PropTypes.func.isRequired
}

export default connect(null, {loginAction})(loginPage)
