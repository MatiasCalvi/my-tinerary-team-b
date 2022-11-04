import React from "react"
import "../Home1Css.css"
import NavBar from "../components/NavBar"
import CallToAction from "../components/CallToAction"

export default function Home1 () {
    return (
            <>
          <div className="total">
                <div className="">
                    <NavBar />
                    <div className="total flex j-center a-center flex-column ">
                        <h3 className=" f-s-big t-a-center">
                        Adventure Awaits, Go Find It.
                        </h3>
                        <div className="w-100 flex g-25 a-center flex-column ">
                        <CallToAction className="butt-class" page="Find your next destiny." rute="/cities" />
                        <CallToAction className="butt-class" page="Find the best hotels." rute="/hotels" />
                        </div>
                    </div>
                </div>
            </div>


             </>

    )
}