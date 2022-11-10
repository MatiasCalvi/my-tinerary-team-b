import React from 'react'
import { useEffect,useState } from 'react'

export default function ScrollToTop() {
    
    const [backToTopButton,setBackToButton]=useState(false)
    useEffect(()=>{
    window.addEventListener("scroll",()=>{
        if(window.scrollY>100){
                setBackToButton(true)
        }else{
                setBackToButton(false)           
            }
        })
    },[])

    const scrollUp=()=>{
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }

    return ( <>
        {backToTopButton && ( <p className="c-button__custom" href="" onClick={scrollUp}>&#129045;</p>)}
        </>)
}
