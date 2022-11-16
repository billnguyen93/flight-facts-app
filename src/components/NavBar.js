import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <div class="ui inverted segment">
        <div class="ui inverted secondary menu">
            <Link to="/">
                <a class="item">
                    Home
                </a>
            </Link>
            <Link to="/new">
                <a class="item">
                    Add New Jordan
                </a>
            </Link>
            <Link to="/favorites">
                <a class="item">
                    Favorite Jordans
                </a>
            </Link>
            <Link to="/about">
            <a class="item">
                About
            </a>
            </Link>
        </div>
        </div>
    )
}

export default NavBar;