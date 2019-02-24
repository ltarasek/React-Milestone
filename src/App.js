//libraries
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

//user components
import Home from "./views/Home";
import Contact from "./views/Contact"
import People from "./views/People";

export default function App(props) {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <div className="navButton" id ="Home">
                    <Link to="/">Home</Link>
                    </div>
                    <div className="navButton" id="People">
                    <Link to="/People">People</Link>
                    </div>
                    <div className="navButton" id="Contact">
                    <Link to="/Contact">Contact</Link>
                    </div>

                </nav>

                <Route exact path="/" component={Home} />
                <Route exact path="/Contact" component={Contact} />
                <Route exact path="/People" component={People} />
            </div>
        </BrowserRouter>
    );
};