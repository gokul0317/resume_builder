import React, { useState } from 'react';
import Autocomplete from 'react-autocomplete';
import skills from './skills.json'
const CustomAutocomplete = field => {
    const [currentSkills, setCurrentSkills] = useState(skills)

    return (
        <Autocomplete
            getItemValue={(item) => item.label}
            items={currentSkills}
            renderItem={(item, isHighlighted) =>
                <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                    {item.label}
                </div>
            }
            onChange={value => {
                field.input.onChange(value)
                setCurrentSkills(() => {
                    const filtered = skills.filter((elm) => elm.label.includes(value.target?.value))
                    return filtered
                })
            }}
            value={field.input.value}
            onSelect={value => field.input.onChange(value)}
        />
    )
}
export default CustomAutocomplete