import React from 'react'

export default function SearchBar(props) {
    let{functionFilter}=props
    function catchEvent(event){
        functionFilter(event.target.value,"searchBar")
    }
    return (
            <div className="c-topnav">
                <input type="text" onKeyUp={catchEvent} placeholder="Search.."/>
            </div>
        )
    }
