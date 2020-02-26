import React from 'react';
import Output from './Output';
import CountButton from './CountButton';

export default class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    handleClick = ({ target }) => {
        if (target.textContent === 'R') {
            this.setState({ value: 0 })
        } else {
            this.setState({ value: this.state.value + Number.parseInt(target.textContent) });
        }
    }

    render() {
        return (
            <div>
                <Output value={this.state.value} />
                <div>
                    <CountButton value='-10' handleClick={this.handleClick} />
                    <CountButton value='-1' handleClick={this.handleClick} />
                    <CountButton value='R' handleClick={this.handleClick} />
                    <CountButton value='+1' handleClick={this.handleClick} />
                    <CountButton value='+10' handleClick={this.handleClick} />
                </div>
            </div>

        );
    }
}