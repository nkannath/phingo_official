import React, { Component } from 'react';
import { render } from 'react-dom';

class Sheet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songs: [
                {id: 1, name: 'Foam'},
                {id: 2, name: 'Taste'},
                {id: 3, name: 'Meat'},
                {id: 4, name: '2001'}

            ]
        }
    }
}

render() {
    return (
        <div>
            <h1>Phingo Dynamic Table</h1>
        </div>
    )
}

export default Sheet;