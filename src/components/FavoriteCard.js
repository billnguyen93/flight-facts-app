import React from "react";

function FavoriteCard({favorite}) {

    const {name, image, date, designer} = favorite
    
    return (
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
        </div> 
    )
}

export default FavoriteCard;