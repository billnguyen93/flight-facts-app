import React, { useState } from "react";

function NewForm({addNewJordan}) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [date, setDate] = useState("");
    const [designer, setDesigner] = useState("");
    const [likes, setLikes] = useState(0)

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:3004/jordans", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                image: image,
                date: date,
                designer: designer,
                likes: likes
            }),
        })
            .then(resp => resp.json())
            .then((newJordan) => addNewJordan(newJordan))
            setName("");
            setImage("");
            setDate("");
            setDesigner("");
            
    }

    return (
    <form onSubmit={handleSubmit}>
        <div class="ui inverted form">
            <div class="ui inverted segment">
            <h1 class="ui center aligned header">New Jordan Form</h1>
            </div>
            <div class="one wide field">
                <div class="inline field">
                    <label>Name</label>
                    <input type="text" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div class="inline field">
                    <label>Image</label>
                    <input type="text" placeholder="Image" name="image" value={image} onChange={(e) => setImage(e.target.value)}/>
                </div>
                <div class="inline field">
                    <label>Date Released</label>
                    <input type="text" placeholder="Date Released" name="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                </div>
                <div class="inline field">
                    <label>Designer</label>
                    <input type="text" placeholder="Designer" name="designer" value={designer} onChange={(e) => setDesigner(e.target.value)}/>
                </div>
                <button>Submit</button>
            </div>
        </div>
    </form>
        
    )
}

export default NewForm;