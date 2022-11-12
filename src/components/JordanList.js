import React from "react";
import JordanCard from "./JordanCard";

function JordanList({jordans}) {
    const renderJordans = jordans.map((jordan) => (
        <JordanCard 
            key={jordan.id}
            name={jordan.name}
            image={jordan.image}
            date={jordan.date}
            designer={jordan.designer}   
        />
    ))    
    return (
        <ul className="cards">{renderJordans}</ul>
    )
    
}

export default JordanList;