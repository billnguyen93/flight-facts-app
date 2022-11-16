import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Header from "./Header";
import Favorites from "./Favorites";


function App() {
    const [jordans, setJordans] = useState([]);
    const [favorites, setFavorites] =  useState([]);

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

    const handleFavoriteJordan = (jordan) => {
      if(!favorites.includes(jordan)) {
        const updatedFavorites = [...favorites, jordan]
        setFavorites(updatedFavorites)
      } else {
        alert("Already Added!")
      }
    }


  return (
    <div className="app" style={{
      backgroundImage: `url(https://images.alphacoders.com/683/683741.jpg)`,
      backgroundSize: "auto"
  }}>
      <NavBar />
      <Header />
      <Switch>
        <Route path="/favorites">
          <Favorites favorites={favorites}/>
        </Route>
        <Route path="/">
          <Home jordans={jordans} updateJordan={updateJordan} onFavoriteJordan={handleFavoriteJordan}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

