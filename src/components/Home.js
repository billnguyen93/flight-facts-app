import React, { useEffect, useState } from "react";
import JordanList from "./JordanList"

function Home() {
    const [jordans, setJordans] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3004/jordans")
            .then(resp => resp.json())
            .then((data) => console.log(data))
    }, [])

    return (
        <div>
            <JordanList jordans={jordans}/>
        </div>
    )
}

export default Home;