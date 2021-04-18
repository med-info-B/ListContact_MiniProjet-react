import React, { Component, Fragment } from 'react'
import { Consumer } from '../context'
import InputCo from '../helpers/InputCo'
 class AddContact extends Component {
     state = {
         name : "",
         email : "",
         errors : {}
     }

     onChangeInput = (e) => this.setState({ [e.target.name] : e.target.value })
     submit = (dispatch,size, e) => {
         e.preventDefault(); 
         const {name, phone, email, errors} = this.state;
         if(name === ""){
             this.setState({ errors : {name : "name is required !"}})
             return;
         }
         if(phone === ""){
            this.setState({ errors : {phone : "tel is required !"}})
            return;
        } 
        if(email === ""){
            this.setState({ errors : {email : "email is required !"}})
            return;
        }  

         dispatch({
             type : 'Add_Contact',
             payload : {
                 id : size + 1,
                name :   name,
                phone :   phone,
                email : email
             }
         })
         this.setState({
            name : "",
            phone : "",
            email : "",
            errors: {}
         })
         this.props.history.push('/');
    }
      render() {
        const {name, phone, email, errors } = this.state;
          return (
            <Consumer>
        
                    {
                        value => {
                            const {dispatch} = value;
                            return (
                                <Fragment>
                                    <div className="container">
                                        <form onSubmit={this.submit.bind(this, dispatch, value.contacts.length)}>
                                        <div class="card" style={{ width:'50rem', position:'center'}}>
                                            <div class="card-body">
                                                <h4 class="card-title">  Add Contact </h4>
                                                <div class="card-text">
                                                    <InputCo  label="Nom"   type = "text" name = "nom"   value = {name}   onChange = {this.onChangeInput} error = {errors.name}  />
                                                    <InputCo  label="Tel"   type = "text" name = "tel"   value = {phone}   onChange = {this.onChangeInput} error = {errors.phone}  />
                                                    <InputCo  label="Email" type = "email" name = "email" value = {email} onChange = {this.onChangeInput} error= {errors.email} />
                                                    <button className="btn btn-success btn-block"> Add new Contact </button>
                                                </div>
                                            </div>
                                        </div>
                                        </form>
                                    </div>
                                </Fragment>
                            )
                        }
                    }
                
            </Consumer>
          )}
}

export default AddContact;