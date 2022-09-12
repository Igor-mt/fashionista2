import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../ShoppingCart/styles';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { SearchContext } from '../../context/search'

import './SearchBar.css'

const SearchBar = () => {
    const { query, setQuery } = useContext(SearchContext)
    const [timer, setTimer] = useState(null)

    const inputChanged = e => {    
        clearTimeout(timer)
    
        const newTimer = setTimeout(() => {
            setQuery(e.target.value)
        }, 500)
    
        setTimer(newTimer)
      }

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Pesquisa..."
                id="searchBar"
                onChange={inputChanged}
            />
            <Link to={{ pathname: `/catalogo/${query}` }}>
                <Icon icon={faMagnifyingGlass} />
            </Link>
        </div>
    )
}

export default SearchBar;