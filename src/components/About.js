import React from "react";

function About() {
    return (
    <div>
        <div class="ui inverted segment">
            <h1 class="ui center aligned header">
                About the App
            <div class="sub header ui inverted segment">Contact and App Information</div>
            </h1>
        </div>
        <div class="ui centered card">
        <div class="content">
            <div class="center aligned header">Bill Nguyen</div>
            <div class="center aligned description">
                <p>Email: billfl93@gmail.com</p>
                <p>This app was created for a Software Engineering class at Flatiron School using React.</p>
                <p>It shows facts about some of the most popular Jordan models that you are able to favorite and add any Jordan model you like.</p>
                <p>You are also able to remove any Jordan from the Main list and Favorites list.</p>
                <a href="https://github.com/billnguyen93/flight-school-app">GitHub Repo</a>
            </div>
        </div>
        </div>
    </div>
        
        );
    
}

export default About;