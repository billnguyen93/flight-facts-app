import React from "react";

function JordanCard({jordan, updateJordan, onFavoriteJordan, onDeleteJordan}) {

    

    const {id, name, image, date, designer, likes, price} = jordan

    function handleLikeClick() {
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

    function handleFavoriteClick() {
        onFavoriteJordan(jordan)
    }

    function handleDeleteClick() {
        fetch(`http://localhost:3004/jordans/${id}`, {
            method: "DELETE",
        });
        onDeleteJordan(id)
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
            <div class="center aligned description">
                Original Price: ${price}
            </div>
            <div class="ui labeled button" tabindex="0">
         <div class="ui button" onClick={handleLikeClick}>
            <i class="heart icon"></i> Likes: {likes}
         </div>
            <a class="ui basic label" onClick={handleFavoriteClick}>
                Add to Favorites
            </a>
         </div>
         <div class="ui button" onClick={handleDeleteClick}>
             Remove 
         </div>
        </div>
        
        
    )
}      


export default JordanCard;