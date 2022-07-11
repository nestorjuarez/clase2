import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const ButtonCount = ({ onConfirm, maxQuantity }) => {

    const [value, setValue] = useState(1);

    const handleConfirm = () => {
        if (value <= maxQuantity) {
            onConfirm(value)
        }
        else {
            alert("Value > maxQuantity")
        }
    }
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <Button onClick={() => setValue(value => value+1)} variant="outline-primary">+</Button>
            <h5 className='m-3'>{value}</h5>
            <Button onClick={() => setValue(value => value-1)} variant="outline-danger">-</Button>
            <Button onClick={handleConfirm} variant="success" className='mr-3'>Confirm</Button>
        </div>
    )
}

export default ButtonCount