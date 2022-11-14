import React from "react";

function JordanCard({name, image, date, designer}) {
    return (
        <div class="ui card"> 
            <div class="image">
                <img class="ui fluid image" src={image} alt={name}/>
            </div>
            <div class="content">
                <h2 class="header">{name}</h2>
            </div>
                <span class="date">Released in {date}</span>
            <div class="description">
                Designed by: {designer}
            </div>
            <div class="ui labeled button" tabindex="0">
         <div class="ui button">
            <i class="heart icon"></i> Like
         </div>
            <a class="ui basic label">
                Add to Favorites
            </a>
         </div>
        </div>
        
        
    )
}      


export default JordanCard;