import React from 'react'

const SortBar=({sort, handleSort})=> {
    return (
        <div>
            <strong>Sort by:</strong>
            <label>
                <input 
                    type='radio'
                    value='Name'
                    checked={sort === 'Name'}
                    onChange={()=>handleSort('Name')}
                />
                Name
            </label>
            <label>
                <input 
                    type='radio'
                    value='Attending'
                    checked={sort === 'Attending'}
                    onChange={()=>handleSort('Attending')}
                />
                Attending
            </label>

        </div>
    )
}

export default SortBar