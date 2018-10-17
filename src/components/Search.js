import React from 'react'; 


const Search = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">Bookstore</a>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" onChange={(event) => props.handleSearch(event)} placeholder="Search" aria-label="Search"/>
            </form>
        </nav> 
    )
}

export default Search