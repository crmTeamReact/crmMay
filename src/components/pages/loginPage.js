import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import LoginForm from '../forms/loginForm'
import {loginAction} from '../../actions/login'

class loginPage extends Component {

    submit = data => {
        this.props.loginAction(data)
        // this.props.login(data)
        //   .then(() => {
        //     this.props.history.push("/")
        //   })
    }
  
  render() {
    return (
      <div>
        <LoginForm submit={this.submit} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authReducer: state.authReducer.token
})


// loginPage.PropTypes = {
//   history: PropTypes.shape({
//     push: PropTypes.func.isRequired
//   }).isRequired,
//   login: PropTypes.func.isRequired
// }

export default connect(mapStateToProps, {loginAction})(loginPage)
