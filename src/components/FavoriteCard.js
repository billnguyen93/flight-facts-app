import React from "react";

function FavoriteCard({favorite, onRemoveFavorite}) {

    const {id, name, image, date, designer} = favorite

    function handleDeleteClick() {
        onRemoveFavorite(id)
    }
    
    return (
        <div>
            <div class="ui black card"> 
                <div class="image">
                    <img class="ui fluid image" src={image} alt={name}/>
                </div>
                <div class="content">
                    <h1 class="center aligned header">{name}</h1>
                </div>
                    <span class="center aligned date">Released in {date}</span>
                <div class="center aligned description">
                    Designed by: {designer}
                </div>
                <button onClick={handleDeleteClick}>Remove</button>
            </div>
        </div> 
    )
}

export default FavoriteCard;