import React from 'react';

export default function Data(props) {
    return (<p>
        {`Firstname: ${props.forename}`}
        <br />
        {`Lastname: ${props.surname}`}
    </p>);
}