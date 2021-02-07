import React from 'react'

export const Dropdown = ({selectForm}) => {
    return (
        <select onClick={(e)=>selectForm(e.target.value)}>
            <option value="book">Book</option>
            <option value="video">Video</option>
        </select>
    )
}
