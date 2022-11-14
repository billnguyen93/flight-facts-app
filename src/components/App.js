import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Header from "./Header"
import Background from "./Background.jpg"



function App() {
  
  return (
    <div className="app" style={{
      backgroundImage: `url(https://images.alphacoders.com/683/683741.jpg)`,
      backgroundSize: "auto"
  }}>
      <NavBar />
      <Header />
      <Home />

    </div>
  );
}

export default App;

