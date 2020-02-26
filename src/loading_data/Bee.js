import React from 'react';
import axios from 'axios';

export default class Bee extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            script: ''
        }
    }

    componentDidMount() {
        axios.get('https://gist.githubusercontent.com/The5heepDev/a15539b297a7862af4f12ce07fee6bb7/raw/7164813a9b8d0a3b2dcffd5b80005f1967887475/entire_bee_movie_script')
        .then(res => this.setState({ script: res.data }))
        .catch(err => console.error(err));
    }

    render() {
        return <p>{this.state.script}</p>;
    }
}