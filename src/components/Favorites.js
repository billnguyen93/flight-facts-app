import React from "react";

function Favorites ({favorites}) {

    const {name, image, date, designer} = favorites

    console.log(favorites)

    return (
        <div className="ui black card"> 
            <div className="image">
                <img class="ui fluid image" src={image} alt={name}/>
            </div>
            <div className="content">
                <h1 class="center aligned header">{name}</h1>
            </div>
                <span class="center aligned date">Released in {date}</span>
            <div className="center aligned description">
                Designed by: {designer}
            </div>
        </div>
    )
}

export default Favorites;