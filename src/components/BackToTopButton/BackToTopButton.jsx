import React from "react";
import { useEffect, useState } from "react";
import "./backtotop.css";

function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 255) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="BackToTopButton">
      {backToTopButton && (
        <button className="buttonToTop" onClick={scrollUp}>
          <div className="boxx">B</div>
          <div className="boxx">A</div>
          <div className="boxx">C</div>
          <div className="boxx">K</div>
          {/* <div className="box">E</div>
          <div className="box">R</div> */}
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;