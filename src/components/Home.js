import React from "react";
import JordanCard from "./JordanCard";

function Home({jordans, updateJordan, onFavoriteJordan}) {
    const renderJordans = jordans.map((jordan) => (
        <JordanCard
            key={jordan.id} 
            jordan={jordan} 
            updateJordan={updateJordan}
            onFavoriteJordan={onFavoriteJordan}
             
        />
    ))    
    return (
        <div className="ui three cards">{renderJordans}</div>
        
    )

}

export default Home;