import React from 'react';
import { Component } from 'react';
import axios from 'axios';

export default class App extends Component {

    componentWillMount() {
        axios.get('http://0.0.0.0:1337/api/users/').
        then( (data) =>{
                console.log(data);
                this.setState({'users': data.data});
            }
        );
    }

    renderUsers() {
        if(!this.state.users) {
            return '';
        }

        return (
            this.state.users.map((user) => {
                return <li>{user.name}</li>;
            })
        )
    }

    render() {
        return (
            <div>
                React simple starter
                <ul>
                </ul>
            </div>
        );
    }
}
