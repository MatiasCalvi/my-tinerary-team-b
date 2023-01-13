import React from 'react'

export default function SectionDetailsDos(props) {
  let{name, photo, description, price ,duration}=props  
  return (
		<section class="section3" id="OurMission">
		<table>
		<tr>
		<td>
		<span class="title">{name}</span>
		<p className='p-sectionDetails'>{description}</p>
		<p className='p-sectionDetails'>Price: {price}</p>
        <p>Duration: {duration}</p>
		</td>
		<td>
		<img src={photo} alt={name}/>
		</td>
		</tr>
		</table>
		</section>
  )
}
