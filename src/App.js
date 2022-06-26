// import React, { useState, useEffect } from "react";
import { useState } from "react";

import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Customize from "./components/Customize";
import Checkout from "./components/Checkout";

export default function App() {
    // on crée un state pour la gestion des ingredients:
    // dans le state initial j'ai aucun ingrédient
    const [ingredients, setIngredients] = useState({
        basil: false,
        cheese: false,
        mushroom: false,
        olive: false,
        pineapple: false,
        tomato: false,
    });
    return (
        <div className="App">
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Customize ingredients={ingredients} setIngredients={setIngredients} />
                    </Route>
                    <Route path="/checkout">
                        <Checkout ingredients={ingredients} />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

