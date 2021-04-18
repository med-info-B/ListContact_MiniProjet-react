import React, { Component, Fragment } from 'react'
import { Consumer } from '../context'
import Contact from '../contact/Contact'


class Contacts extends Component {


    render() {
        return (
            <Consumer>
                { value => (
                        <Fragment>
                            <div className="container">
                                <div className="row">
                            {value.contacts.map(contact => (
                               <div className="col-3 m-4">
                                    <Contact className data= {contact}  />
                               </div>
                             ))}
                                </div>
                            </div>
                        </Fragment>
                )}
            </Consumer>
        )
    }
}


export default Contacts;
