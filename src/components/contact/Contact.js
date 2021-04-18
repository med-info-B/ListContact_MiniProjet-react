import React, { Component, Fragment } from 'react'
import {Consumer} from '../context'
import './contact.css'
import PropTypes from 'prop-types'

class Contact extends Component {

    state = {
        isActiveShowContact: true
    } 

    showContact(ss) {
        console.log('salam 3alikom', ss)
        this.setState({
            isActiveShowContact: !this.state.isActiveShowContact
        })
    }
    deleteContact(id, dispatch){
        dispatch({
            type : 'DELETE_CONTACT',
            payload : id
        })
        
    }
    render() {
        const {id, name , phone , email } = this.props.data;
        return (
                <Consumer>
                    { value => {
                        const {dispatch}  = value;
                    return ( 
                            <Fragment>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title"> 
                                        {name} 
                                            <i onClick = { this.showContact.bind(this) } className="fa fa-sort-down dropDown-Contact"> </i> 
                                            <i onClick = { this.deleteContact.bind(this, id, dispatch) } class="fa fa-times delete-Contact" aria-hidden="true"></i>
                                        </h4>  
                                        <hr />
                                        <div className="card-text">
                                            {(this.state.isActiveShowContact) ? (
                                            <ul className="list-group">
                                                <li className="list-group-item"> { phone }   </li>
                                                <li className="list-group-item"> { email } </li>
                                            </ul>
                                            ): null }
                                        </div>
                                    </div>
                                </div>
                        </Fragment>
                    )}}
                </Consumer>
        )
    }
}

Contact.defaultProps = {
    name : "name required",
    phone : "tel required",
    email : "email required"
}

Contact.propTypes = {
    data : PropTypes.object.isRequired
}

export default Contact;