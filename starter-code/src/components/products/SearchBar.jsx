import React from 'react'

const SearchBar = ()=> {
    return(
        <div>
            Search
            <input type="text" name="searchBar" placeholder="Search"/>
            Only Show Stock
            <input type="checkbox" name="showStock"/>
        </div>
    )
}

export default SearchBar