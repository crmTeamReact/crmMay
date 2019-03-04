import React, {Fragment} from 'react'

export default function modal (props) {

   
    
   return (
    <Fragment>
       
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form id="form" action="">
                    <div className="modal-body">
                    
                        <label htmlFor="basic-url">Id</label>
                        <div className="input-group mb-2">
                            <input name="id" refs={props.el.id} type="text" className="form-control" id="userId" disabled placeholder={props.el.id}></input>
                        </div>
                        <label htmlFor="basic-url">Name</label>
                        <div className="input-group mb-2">
                            <input name="name" type="text" className="form-control" id="name" placeholder={props.el.name}></input>
                        </div>
                        <label htmlFor="basic-url">Surname</label>
                        <div className="input-group mb-2">
                            <input name="username" type="text" className="form-control" id="surname" placeholder={props.el.username}></input>
                        </div>
                        <label htmlFor="basic-url">Email</label>
                        <div className="input-group mb-2">
                            <input name="email" type="text" className="form-control" id="email" placeholder={props.el.email}></input>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button onClick={props.handler.bind(null, document.getElementById('form'))} type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
      
    </Fragment>
  )
}

