import React from 'react';

export default function FormInput(props) {
    return <input type={props.type || 'text'}
        placeholder={props.place || props.name || ''}
        onChange={props.handleChange}
        value={props.value || ''}
        name={props.name || ''} />;
}