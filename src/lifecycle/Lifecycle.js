import React from 'react';

export default class LifeCycle extends React.Component {


    constructor(props) {
        super(props);
        console.log('constructor');
    }

    render() {
        console.log('render');
        return <p>Hello!</p>
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
}