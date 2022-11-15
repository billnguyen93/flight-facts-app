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
        <div class="ui inverted segment">
            <h1 class="ui center aligned header">
                My Favorites
            </h1>
            <div className="ui three cards">{renderFavorites}</div>  
        </div>   
    )
}

export default Favorites;