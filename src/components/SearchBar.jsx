import React from 'react'

export default function SearchBar(props) {
    let{value}=props
 
    return (
            <div className="c-topnav">
                <input type="text" onKeyUp={value} placeholder="Search.."/>
            </div>
        )
    }
