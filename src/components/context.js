import React, { Component } from 'react'
import axios from 'axios'



const Context = React.createContext();

const reducer = (state, action) =>{
    switch(action.type){
        case 'DELETE_CONTACT' : 
            return {
                contacts: state.contacts.filter(( contact) => contact.id !== action.payload )
            };
        case 'Add_Contact' : 
            return {
                contacts : [action.payload, ...state.contacts] 
            }; 
        default: 
            return state;
    }


}
export class Provider extends Component {
    state = {
        contacts : [
            { id: 1, name: 'mohammed bjj', phone:'0222645654', email: 'med@kke.com'},
            { id: 2, name: 'ahmed sss', phone:'02225445654', email: 'meddd@kke.com'},
            { id: 3, name: 'abdelkader ddd', phone:'0222665654', email: 'mezzzd@kke.com'},
            { id: 4, name: 'meryeme ddd', phone:'0222665654', email: 'mezzzd@kke.com'},
            { id: 5, name: 'Abderrahman ddd', phone:'0222665654', email: 'mezzzd@kke.com'}
        ],
        dispatch : action => this.setState(state => reducer(state, action))        
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
             .then( res => this.setState({
                 contacts : res.data
             }))
             .catch(err => console.log(err)) 
    }
    render() {
        return (
            <Context.Provider value = {this.state} >
                { this.props.children }
            </Context.Provider>
        )
    }
}


export const Consumer = Context.Consumer;
