import React from 'react';

import B from './B';

export class A extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({value: e.target.value})
    }

    render() {
        return (
            <fieldset>
                <legend>Завдання 1</legend>
                <label htmlFor="value">Введіть текст: </label>
                <input
                    id="value"
                    type="text"
                    onChange={this.handleChange}
                />
                <B value={this.state.value}/>
            </fieldset>

        );
    }
}
