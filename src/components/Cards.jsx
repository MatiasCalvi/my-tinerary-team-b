import React from 'react'
import '../App.css'
import { Link as Navlink } from 'react-router-dom'

export default function cards(props) {
  let{name,capacity,photo}=props
  return (<>
    <div className="blog-card">
        <div className="meta">
            <div className="photo"><img src={photo} alt={name}/></div>
            <ul className="details">
            <Navlink to='#'><li className="author"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMdJREFUSEvtle8NQUEQxH+vAkpQgg7QiRKoABWIilABOlACFZCROzb+xMvbvRcfbHLJfbmZm5nb24rCVRXGp3WCDTBwqhLGKGM8K7g4wV9wvQQH4JRQ+0An7e+4TQm2wBg4GsXWXhfBGeiZm2eOMALdfmhsWZp9N8KiFTBJQHNg9uZhuCxaAAJWhRJMgX0KNoerLLRUa6OkkQI1j4L8VLaHwgnUAzuvgny+WAZ/gpsDdX7T386gzsD5psD+Ve2PzKCB9oApPvSvbT04GeqYidwAAAAASUVORK5CYII=" className='icon2'/>{name} Facebook</li></Navlink>
            <Navlink to='#'><li className="author"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUdJREFUSEvdleExBEEQhb+LgAzIABEgAkTgRIAIEAEhyAARkAGXAREgAuq7mrmanZuZ29uq/XNTdX92ut/r97qnb8LIZzIyPptHsA38rLDNmEvgFNgHPoFH4C7k+f05YuQWGWzAR4PkDTgs3Jsj4TXwUCLw8j0oOAMEyk+MqfFLMgsE8yJzBX9JplUoO7VMdU8Ndb/BgUVxOYHenWQAfvOnfQfAfYPgJRAsQlICm7cbwHYGvg8V36a5OcH3QOCY1mlwqQfaMLR68bSwM4F5D5wSG7Q1QMlXsLiTWloVTsp53qwehEv2lCzy2xHw2gMwDbF61S9tgdqycxJu1iA5rjzM5jZ1bH1s2tU6F2EXFWNqCrQpLrQauK/2qgWe90BQK97rYY0vVnDHunlKCqah0TYtkrnAbGC6NlZhz+837x+tl+x1gka36B/CnzgZFPaBJAAAAABJRU5ErkJggg==" className='icon2'/>{name} Twitter</li></Navlink>
            <Navlink to='#'><li className="author"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXRJREFUSEvFlbsuRFEUhr9pNFPQaDRDLy4vwLwBSokErQTxBHgDxNQukSh5AzyBywugVqmU5Je15WTZ+5x9ZnIyuztnr/X/a/3rsls0fFoN4zM0gjlgF+gCkxVZvgH3wDHw5G1jGWwAZ31KtwmcF309gSJ/7BM8uM0XM/EEYl+vQfAJLJuU++Z3AUiF3+MJpGcnQSBHaTxmdVEg+lbEIrkxP2FMpQi+I+DPBiDHcbv/ACSnMh41UhH/w/UZxAgUzQSwBiwCsnkAroCvRM3+cKsIgp49YMtldwpsA7fAkrvLJtgDLi3iaQfyAswCB0AocG2JDoET4A6YcQShwAMRBIk0pTuO4AhQhgNJJEy14QiwCiwYiYp8DbQtu+SGqCqyHNWeK5E9oz2l3i+2Z2UNygZNUoRlphnQcMWO5kb30UmuuypiBKWrQqv5NRFZ7u/SZSeQRtd1iFKZqL9VyNTyC7bv9uCobbMenFwpsuyG9iZnRZdj9AO5y0cZdyMG3QAAAABJRU5ErkJggg==" className='icon2'/>{name} Instagram</li></Navlink>
            </ul>
        </div>
        <div className="description">
            <h1>{name}</h1>
            <h2>certain places make you live unique moments</h2>
            <p>Capacity: {capacity}</p>
            <p className="read-more">
            <Navlink to='/'>Read More</Navlink>
            </p>
        </div>
    </div>
  </>
  )
}
