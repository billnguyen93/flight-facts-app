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
        <div class="ui three cards">{renderJordans}</div>
        
    )
    
}

export default JordanList;