import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Header from "./Header";


function App() {
    const [jordans, setJordans] = useState([]);
    // const [favorites, setFavorites] =  useState(false)

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
    <div className="app" style={{
      backgroundImage: `url(https://images.alphacoders.com/683/683741.jpg)`,
      backgroundSize: "auto"
  }}>
      <NavBar />
      <Header />
      <Home jordans={jordans} updateJordan={updateJordan}/>
      
    </div>
  );
}

export default App;

