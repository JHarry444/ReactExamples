import React from 'react';

export default function Hello(props) {
    console.log(props);
    return (
        <p>Hello, the id is {props.match.params.id}</p>
    );
}