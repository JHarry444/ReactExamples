import React from 'react';
import FormInput from '../forms/FormInput';

export default class Converter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            miles: 0,
            km: 0
        }
    }

    handleChange = ({ target: { name, value } }) => {
        if (name === 'miles') {
            this.setState({
                miles: value,
                km: value / 1.6
            });
        } else {
            this.setState({
                miles: value * 1.6,
                km: value
            });
        }
    }

    render() {
        return (
            <div>
                <FormInput value={this.state.miles} name='miles' handleChange={this.handleChange} />
                <FormInput value={this.state.km} name='km' handleChange={this.handleChange} />
            </div>
        );
    }
}