import React from "react";
import FavoriteCard from "./FavoriteCard";

function Favorites ({favorites}) {

    const renderFavorites = favorites.map((favorite) => (
        <FavoriteCard 
        key={favorite.id}
        favorite={favorite}
        />
    ))

    return (
            
        <div className="ui three cards">{renderFavorites}</div>  
        
    )
}

export default Favorites;