import React from 'react'

export default function SectionDetailsTres(props) {

  let{name, photo, description, price ,duration}=props  

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
		<p className='p-sectionDetails'> Price: {price}</p>
        <p>Duration: {duration}</p>
		</td>
		</tr>
		</table>
		</section>
  )
}
