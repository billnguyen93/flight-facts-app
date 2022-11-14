import React, { useEffect, useState } from "react";
import JordanList from "./JordanList"

function Home() {
    const [jordans, setJordans] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3004/jordans")
            .then(resp => resp.json())
            .then((data) => setJordans(data))
    }, [])

    function updateJordan(updatedJordan) {
        const newJordans = jordans.map(jordan => {
            if(updatedJordan.id === jordan.id) {
                return updatedJordan
            } else {
                return jordan
            }
        })
        setJordans(newJordans)
    }

    return (
        <div className="home">
            <JordanList jordans={jordans} updateJordan={updateJordan}/>
        </div>
    )
}

export default Home;