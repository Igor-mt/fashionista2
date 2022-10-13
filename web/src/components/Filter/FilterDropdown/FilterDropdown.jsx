import React from 'react'
import './FilterDropdown.css'

const FilterDropdown = ({ filterSubOptions, handleFilterOption, }) => {
    return (
        <div className="filterSubOptions">
            {filterSubOptions.map((filterSubOption) =>
                <button
                    className="filterSubOption"
                    key={filterSubOption}
                    value={filterSubOption}
                    onClick={handleFilterOption}
                >
                    {filterSubOption}
                </button>
            )}
        </div>
    )
}

export default FilterDropdown