import React, { useEffect, useState } from "react";
import JordanList from "./JordanList"

function Home() {
    const [jordans, setJordans] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3004/jordans")
            .then(resp => resp.json())
            .then((data) => setJordans(data))
    }, [])

    return (
        <div className="home">
            <JordanList jordans={jordans}/>
        </div>
    )
}

export default Home;