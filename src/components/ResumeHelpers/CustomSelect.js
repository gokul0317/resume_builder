import React, { useState } from 'react';
import Autocomplete from 'react-autocomplete';
import skills from './skills.json'
const CustomAutocomplete = field => {
    const [currentSkills, setCurrentSkills] = useState(skills)
    
    const updateSkillOnSearch = (value) => {
        value = value || ''
        const filtered = skills.filter((elm) => {
            return elm.label.toLowerCase().includes(value.toLowerCase())
        })
        setCurrentSkills(filtered)
    }
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
                updateSkillOnSearch(value.target?.value)
            }}
            value={field.input.value}
            onSelect={value => field.input.onChange(value)}
        />
    )
}
export default CustomAutocomplete