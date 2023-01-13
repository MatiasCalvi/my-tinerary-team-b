import React from 'react'

export default function SectionDetailsCuatro(props) {
    let {name,photo,capacity}=props

    return (
    <section class="section2" id="AboutUs">
    <table>
    <tr>
    <td>
    <img src={photo} alt={name}/>
    </td>
    <td>
    <span class="title">{name}</span>
    <p> Capacity: {capacity}</p>
    </td>
    </tr>
    </table>
    </section>
  )
}
