import React, { Component } from 'react'

import { getPerson } from '../service/persons'

export default class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: []
        }

    }

    componentDidMount() {
        getPerson().then(person => {
            this.setState({ persons: person })
        });
    }

 
    
    render() {

        console.log(this.state.persons)


        return (
            <div>
            
            </div>
        )
    }
}
