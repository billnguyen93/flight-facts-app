import React from "react";

function JordanCard({jordan, updateJordan}) {

    const {id, name, image, date, designer, likes} = jordan

    function handleLikeClick(e) {
        const jordanObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"likes": likes +1})
        }
        fetch(`http://localhost:3004/jordans/${id}`, jordanObj)
        .then(resp => resp.json())
        .then(data => updateJordan(data))
        
    }

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
            <div class="ui labeled button" tabindex="0">
         <div class="ui button" onClick={handleLikeClick}>
            <i class="heart icon"></i> Likes: {likes}
         </div>
            <a class="ui basic label">
                Add to Favorites
            </a>
         </div>
        </div>
        
        
    )
}      


export default JordanCard;