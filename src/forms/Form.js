import React from 'react';
import FormInput from './FormInput';

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            email: '',
            password: ''
        }
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label for='user'>Username</label>
                <FormInput name='user' handleChange={this.handleChange} />
                <label for='email'>Email</label>
                <FormInput name='email' handleChange={this.handleChange} />
                <label for='password'>Password</label>
                <FormInput name='password' type='password' handleChange={this.handleChange} />
                <button>Submit</button>
            </form>
        );
    }
}