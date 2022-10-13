import FilterDropdown from '../FilterDropdown/FilterDropdown'
import './FilterOption.css'

const FilterOption = ({ children, onClick, toggleFilterSubOptions, products, handleFilterOption }) => {
    let filterSubOptions
    let filterOptionClass

    if (children === 'Cor') {
        filterSubOptions = ['Azul', 'Vermelho', 'Preto', 'Branco', 'Cinza', 'Amarelo', 'Rosa']
    }

    if (!toggleFilterSubOptions) {
        filterOptionClass = 'filterOption closed'
    } else {
        filterOptionClass = 'filterOption open'
    }

    return (
        <div className="filterOptionContainer">
            <button
                type='button'
                onClick={onClick}
                className={filterOptionClass}
            >
                {children}
            </button>

            {toggleFilterSubOptions &&
                <FilterDropdown
                    filterSubOptions={filterSubOptions}
                    products={products}
                    handleFilterOption={handleFilterOption}
                />
            }
        </div>
    )
}

export default FilterOption