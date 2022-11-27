import React from 'react'
import '../App.css'
import { Link as NavLink} from 'react-router-dom'

export default function Footer(props) {
    let {logged,role}=props
    return (
    <footer>
        <div className='c-container__footer'>
            <div className='c-box__footer'>
                <div className='logo'>
                    <img src="./img/logo.png" alt="logo" />
                </div>
                <div className='c_terms'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ea reprehenderit vero quia incidunt, nihil cum earum temporibus quibusdam tempore sint numquam adipisci fugit dolores beatae nemo asperiores non. Ratione.</p>
                </div>
             </div>
            <div className='c-box__footer'>
                <h2>Pages</h2>
                <NavLink to="/">
                    <button className="bt-nav-c">Home</button>
                </NavLink>

                    {logged && role==='admin'   ? <NavLink to="/newcity"><button className="bt-nav-c">Add city</button></NavLink>
                                                : <hr className='d-none'/>}
                                
                    {logged && role==='admin'   ? <NavLink to="/newhotel"><button className="bt-nav-c">Add Hotel</button></NavLink>
                                                : <hr className='d-none'/>}

                                
                    {logged && role==='admin'   ?<NavLink to="/mycities"><button className="bt-nav-c">My Cities</button></NavLink>
                                                : <hr className='d-none'/>}

                               
                    {logged ? <NavLink to="/myitineraries"><button className="bt-nav-c">My Itineraries</button></NavLink> 
                            : <hr className='d-none'/>}

                    {logged ? <NavLink to="/myshows"><button className="bt-nav-c">My Shows</button></NavLink> 
                                                : <hr className='d-none'/>}
                    
                    


            </div>
            <div className='c-box__footer'>
                <h2>Social Medias</h2>
                <p href='#'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMdJREFUSEvtle8NQUEQxH+vAkpQgg7QiRKoABWIilABOlACFZCROzb+xMvbvRcfbHLJfbmZm5nb24rCVRXGp3WCDTBwqhLGKGM8K7g4wV9wvQQH4JRQ+0An7e+4TQm2wBg4GsXWXhfBGeiZm2eOMALdfmhsWZp9N8KiFTBJQHNg9uZhuCxaAAJWhRJMgX0KNoerLLRUa6OkkQI1j4L8VLaHwgnUAzuvgny+WAZ/gpsDdX7T386gzsD5psD+Ve2PzKCB9oApPvSvbT04GeqYidwAAAAASUVORK5CYII=" className='icon'/>Facebook</p>
                <p href='#'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUdJREFUSEvdleExBEEQhb+LgAzIABEgAkTgRIAIEAEhyAARkAGXAREgAuq7mrmanZuZ29uq/XNTdX92ut/r97qnb8LIZzIyPptHsA38rLDNmEvgFNgHPoFH4C7k+f05YuQWGWzAR4PkDTgs3Jsj4TXwUCLw8j0oOAMEyk+MqfFLMgsE8yJzBX9JplUoO7VMdU8Ndb/BgUVxOYHenWQAfvOnfQfAfYPgJRAsQlICm7cbwHYGvg8V36a5OcH3QOCY1mlwqQfaMLR68bSwM4F5D5wSG7Q1QMlXsLiTWloVTsp53qwehEv2lCzy2xHw2gMwDbF61S9tgdqycxJu1iA5rjzM5jZ1bH1s2tU6F2EXFWNqCrQpLrQauK/2qgWe90BQK97rYY0vVnDHunlKCqah0TYtkrnAbGC6NlZhz+837x+tl+x1gka36B/CnzgZFPaBJAAAAABJRU5ErkJggg==" className='icon'/>Twitter</p>
                <p href='#'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvllWENwjAQhb8pAAk4AAeAA1AAEnCCBXAACgAHSEACKIC85Eqabg0s1y0h3K82ub5vd++6VnQcVcf69A44A1NnVdKYB420gqdTvKabAzyAg2UvgEFL8Fs3B9gDaxPdAaufA9yTFg1LVyAPriY6MQ8uth8BAsqjGyCPxskHfPRAYjM7FEY3HJI3EleVITbANtq7ALluCRimzQVQe06AWreMvIovqQug1gmgOJoHWncCaPJKsGIV/DFAIxdfNE2OTFRorQlSNOV95UHLP0MtPWtyiQcnNr7/J9Pbmnyviiub4As/E0wZX0UvUwAAAABJRU5ErkJggg==" className='icon'/>Linkedin</p>
                <p href='#'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXRJREFUSEvFlbsuRFEUhr9pNFPQaDRDLy4vwLwBSokErQTxBHgDxNQukSh5AzyBywugVqmU5Je15WTZ+5x9ZnIyuztnr/X/a/3rsls0fFoN4zM0gjlgF+gCkxVZvgH3wDHw5G1jGWwAZ31KtwmcF309gSJ/7BM8uM0XM/EEYl+vQfAJLJuU++Z3AUiF3+MJpGcnQSBHaTxmdVEg+lbEIrkxP2FMpQi+I+DPBiDHcbv/ACSnMh41UhH/w/UZxAgUzQSwBiwCsnkAroCvRM3+cKsIgp49YMtldwpsA7fAkrvLJtgDLi3iaQfyAswCB0AocG2JDoET4A6YcQShwAMRBIk0pTuO4AhQhgNJJEy14QiwCiwYiYp8DbQtu+SGqCqyHNWeK5E9oz2l3i+2Z2UNygZNUoRlphnQcMWO5kb30UmuuypiBKWrQqv5NRFZ7u/SZSeQRtd1iFKZqL9VyNTyC7bv9uCobbMenFwpsuyG9iZnRZdj9AO5y0cZdyMG3QAAAABJRU5ErkJggg==" className='icon'/>Instagram</p>
            </div>
        </div>
        <div className="c-box__copyright">
            <hr/>
            <p>All rights reserved © 2022 <b>TeamB Nehuen Aumedes, Calvi Matias</b></p>
        </div>
    </footer>
  )
}
