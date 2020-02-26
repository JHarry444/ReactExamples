import React from 'react';
import Data from './Data';

export default function DataSet(props) {
    const data = [
        { forename: 'Matt', surname: 'Farrow' },
        { forename: 'Tigs', surname: 'Knowles' },
        { forename: 'Luke', surname: 'Harrison' }
    ]

    return (
        data.map(person => 
        <Data forename={person.forename} surname={person.surname} />)
        );
}