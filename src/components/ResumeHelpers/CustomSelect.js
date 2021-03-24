import React from 'react';
import Autocomplete from 'react-autocomplete';
import skills from './skills.json'
const CustomAutocomplete = field => {
    return (
        <Autocomplete
            getItemValue={(item) => item.label}
            items={skills}
            renderItem={(item, isHighlighted) =>
                <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                    {item.label}
                </div>
            }
            value={field.input.value}
            onSelect={value => field.input.onChange(value)}
        />
    )
}
export default CustomAutocomplete