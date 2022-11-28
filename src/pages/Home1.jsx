import React from "react"
import "../Home1Css.css"
import CallToAction from "../components/CallToAction"

export default function Home1 () {
    return (
            <>
          <div className="total">
                <div className="bg-img total">
                    <div className="total flex j-center a-center flex-column ">
                        <div className="flex flex-column a-center">
                            <img src="./img/sun.png" alt="logo" className="w50" />
                            <h3 className=" f-s-big t-a-center shadow">
                            Adventure Awaits, Go Find It.
                            </h3>
                        </div>
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