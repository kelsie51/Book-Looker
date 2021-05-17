import React from "react";
import "./index.css";
import bookPhoto from './bookPhoto.JPG';

function Jumbotron({ children }) {
  return (
    <div
      style={{ 
        height: 300, 
        fontSize: "1em",
        clear: "both",
         paddingTop: 125,
          textAlign: "center",
          backgroundImage: `url(${bookPhoto})`,
          backgroundSize: "cover"
      }}
      className="jumbotron"
    >
      <h1 className="header">
        <span style={{ color: '#4285F4' }} >B</span>
        <span style={{ color: '#DB4437' }} >o</span>
        <span style={{ color: '#F4B400' }} >o</span>
        <span style={{ color: '#4285F4' }} >K</span>

        <span style={{ color: '#0F9D58' }} >L</span>
        <span style={{ color: '#DB4437' }} >o</span>
        <span style={{ color: '#4285F4' }} >o</span>
        <span style={{ color: '#DB4437' }} >k</span>
        <span style={{ color: '#F4B400' }} >e</span>
        <span style={{ color: '#4285F4' }} >r</span>
      </h1>
      {children}
    </div>
  );
}

export default Jumbotron;
