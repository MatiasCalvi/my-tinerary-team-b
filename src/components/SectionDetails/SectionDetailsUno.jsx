import React from 'react'

export default function SectionDetailsUno(props) {
  let {name,continent,photo,population}=props
  return (
    <section class="section2" id="AboutUs">
    <table>
    <tr>
    <td>
    <img src={photo} alt={name}/>
    </td>
    <td>
    <span class="title">{name}</span>
    <p className='p-sectionDetails'>Continent: {continent}</p>
    <p> Population: {population}</p>
    </td>
    </tr>
    </table>
    </section>
  )
}
