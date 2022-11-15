import React from "react";
import JordanCard from "./JordanCard";

function Home({jordans, updateJordan}) {
    const renderJordans = jordans.map((jordan) => (
        <JordanCard 
            jordan={jordan} 
            updateJordan={updateJordan}  
        />
    ))    
    return (
        <div className="ui three cards">{renderJordans}</div>
        
    )

}

export default Home;