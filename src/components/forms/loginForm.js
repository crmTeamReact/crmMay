import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InlineError from '../messages/inlineError';

class loginForm extends Component {
    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {}
    }

    onChange = (e) => {
        this.setState({data: {...this.state.data, [e.target.name]: e.target.value}})
    }

    onSubmit = (e) => {
        e.preventDefault()
        let errors = this.validate(this.state.data);
        this.setState({errors});
        if(Object.keys(errors).length === 0){
            this.props.submit(this.state.data)
                .catch(err => {
                    this.setState({errors: err})
                })
                // .then(json => {
                //     console.log("loginform")
                //     if(Object.keys(json).indexOf("message") != -1){
                //         this.setState({errors: {"message": json.message}})
                //     }
                // })
                    
                    
        }
    }

    validate = (data) => {
        let errors = {};
        if(
            !new RegExp("^([a-zA-Z\d\.-])+@([a-zA-Z])+\.([a-z]{2,8})(\.[a-z]{2,8})?$").test(data.email)
        ){
            errors.email = "the email formatting is not correct"
        }
        if (!data.password) errors.password = "type in your password"

        return errors
    }

  render() {
    const {data, errors} = this.state;
    return (
        <div className="container mt-5" style={{maxWidth: '400px'}}>
        <h1 className="mb-3">Login Form</h1>
        <form method="post" id="form" onSubmit={this.onSubmit}>
            {errors.message && <InlineError text={errors.message} />}
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="text" name="email" className="form-control" id="email" 
                       placeholder="Enter email" onChange={this.onChange}>
                </input>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                {errors.email && <InlineError text={errors.email} />}
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" className="form-control" id="password" 
                       placeholder="Password" onChange={this.onChange}>
                </input>
                {errors.password && <InlineError text={errors.password} />}
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        
      </div>
    )
  }
}

loginForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default loginForm
