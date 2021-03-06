import React, { Component, Fragment } from 'react'
import Modal from './modal'

export class Table extends Component {
  state = {
    users: [],
    modalAttr: {},
  }

  handler = (form) => {
    const {id, name, username, email} = form.elements
    
    const obj = {
      "id": id.placeholder,
      "name": name.value || name.placeholder,
      "username": username.value || username.placeholder,
      "email": email.value || email.placeholder,
    }
    let users = this.state.users
    const userIndx = users.findIndex(user => {
      return user.id == form.elements.id.placeholder
    })
    users[userIndx] = obj;

    this.setState({users: users})
  }

  getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          return response.json()
        })
        .then(myJson => {
          this.setState({users: myJson})
        })
  }

  deleteUser = (id) => {
    let users = this.state.users;
    let userIndx = users.findIndex(user => {
      return user.id == id
    })
    users.splice(userIndx, 1);
    this.setState({users: users})
  }

  editUser = (el) => {
    this.setState({modalAttr: el})
    //document.querySelector('#modal').setAttribute("")
    //this.forceUpdate()
  }

  
  componentDidMount() {
    this.getUsers()  
  }
   
  render() {
    
    return (
      <div id="usersTable">

      
      <Modal el={this.state.modalAttr} handler={this.handler}/>

             
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">username</th>
                    <th scope="col">email</th>
                    <th scope="col" align="right">
                      <a className="btn btn-primary text-white float-right">
                        <i className="fa fa-plus"></i>
                      </a>
                    </th>
                </tr>
            </thead>
            <tbody>
            {
              this.state.users.map(el => (
                
                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td>{el.name}</td>
                  <td>{el.username}</td>
                  <td>{el.email}</td>
                  <td align="right">
                    <a className="btn btn-dark mr-1 text-white" onClick={this.deleteUser.bind(null, el.id)}>
                      <i className="fa fa-trash"></i>
                    </a>
                    <a className="btn btn-dark text-white" data-toggle="modal" 
                       data-target="#exampleModalCenter" onClick={this.editUser.bind(null, el)}>
                      <i className="fa fa-edit"></i>
                    </a>
                  </td>
                </tr>
                              
              ))
              
            }
            </tbody>
        </table>
        



        
        
      </div>
    )
  }
}

export default Table