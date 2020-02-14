import React from 'react';
import './Form.css';

const Form = ({value, color, onChange, onCreate, onKeyPress}) => {
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} style={{color : color}}></input>
            <div className="create-button" onClick={onCreate}>ADD</div>
        </div>
    )
}

export default Form;