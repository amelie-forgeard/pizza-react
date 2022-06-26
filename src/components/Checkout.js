import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Pizzaman from "../assets/PizzaMan.png";


// ici je récupère la pizza avec les ingrédients cochées en checkbox:
export default function Checkout({ ingredients }) {

    const history = useHistory();

    // state qui grèe le message succès:
    const [success, setSuccess] = useState(false);

    return (
        <div style={{ padding: 50, display: "flex" }}>
            <div style={{ flex: 1 }}>
                <div>
                    <h1 style={{ fontFamily: "Comfortaa" }}>Mes Ingredients</h1>
                    {Object.keys(ingredients).reduce((acc, ing) => {
                        return acc + ingredients[ing] ? 1 : 0;
                    }, 0) === 0 && <p>Aucun ingrédient sélectionné</p>}
                    {Object.keys(ingredients).map((ingredient) => {
                        return (
                            ingredients[ingredient] && (
                                <p>
                                    {ingredient[0].toUpperCase()}
                                    {ingredient.substr(1)}
                                </p>
                            )
                        );
                    })}
                    <button
                        className="proceedToCheckout"
                        onClick={() => history.push("/")}
                    >
                        Retour
                    </button>
                    <button
                        onClick={() => setSuccess(true)}
                        className="proceedToCheckout"
                        style={{ marginLeft: 10 }}
                    >
                        Confirmer
                    </button>
                </div>
            </div>
            <div style={{ flex: 1 }}>
                {success && (
                    <div style={{ textAlign: "center" }}>
                        <img src={Pizzaman} alt="pizzaman" height="300px" />
                        <div style={{ fontFamily: "Open Sans Condensed", fontSize: 35 }}>
                            Commande reçue
                        </div>
                        <div style={{ fontFamily: "Comfortaa" }}>
                            Numéro #{Math.round(Math.random() * 100000)}
                        </div>
                        <div style={{ fontFamily: "Indie Flower", fontSize: 20 }}>
                            Votre pizza sera prête dans 20-30 minutes
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}