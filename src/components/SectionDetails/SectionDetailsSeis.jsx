import React from 'react'

export default function SectionDetailsSeis(props) {
    let{name, photo, description,date, price }=props
    let date2=date.slice(0,10)
    return (
      <section class="section2" id="AboutUs">
          <table>
          <tr>
          <td>
          <img src={photo} alt={name}/>
          </td>
          <td>
          <span class="title">{name}</span>
          <p className='p-sectionDetails'>{description}</p>
          <p className='p-sectionDetails'> Price: ${price}</p>
          <p>Date: {date2}</p>
          </td>
          </tr>
          </table>
          </section>
    )
}
