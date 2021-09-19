import React from 'react'
import faker from 'faker'
import './list.css'

function List({people, searchValue, setSearchValue, filteredPeople, setFilteredPeople}) {
    return (
        people.map((person, key) => 
        <div className="card" key={person.id}>
            <div className="cardcontainer">
            <img src={"https://i.pravatar.cc/150"} alt="personimage" className="list_image"/>
            <h2>{person.name}</h2>
            <h4>{person.company}</h4>
            <p>{person.job}</p>
            </div>     
        </div>)
    )
}

export default List

