import React from 'react';
import './custom-input.scss';

const CustomInput = ({handleChange, label, ...otherInputProps}) => {
    return (
        <div className='group'>
            <input className='custom-input' 
                onChange={handleChange} 
                {...otherInputProps} />
            {
                label ? 
                <label 
                    className={`${otherInputProps.value.length ? 'shrink': ''} custom-input-label`}>
                    {label}
                </label> :
                null
            }
        </div>
    )
}

export default CustomInput
