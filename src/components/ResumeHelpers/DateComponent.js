import React from 'react';
import { Input } from 'reactstrap'

const CustomDate = field => {
    return (
        <Input
            type="date"
            onChange={value => {
                field.input.onChange(value)
            }}
            value={field.input.value}
        />
    )
}
export default CustomDate