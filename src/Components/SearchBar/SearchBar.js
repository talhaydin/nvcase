import React from 'react'
import './searchbar.css'

function SearchBar (props) {

    const layout = document.querySelector("#layoutId")
    
    const handleLayout = () => {
    layout.classList.add('displayFlex')
    }

    const handleSearch = () => {
        props.setPeople(props.people.filter(item=>{
            if(item.name.toLowerCase().includes(props.searchValue.toLowerCase())){
            return item
        }
            else if (props.searchValue === ""){
            return item
        }
        }))
    }

    const handleClick = () => { 
          handleSearch();
          handleLayout();
    } 

    const handleChange = (e) => {
    props.setsearchValue(e.target.value) 
    }
    
    return (
        <nav className="searchbar">
        <input className="searchbar_input" placeholder="Name" value={props.searchValue} onChange={e => handleChange(e)}></input>
        <button type="button" className="searchbar_button" onClick={handleClick}>Search</button>
        </nav>
    )
}

export default SearchBar
