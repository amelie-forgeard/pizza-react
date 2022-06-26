import React from "react";
import Cheese from "../assets/BaseCheese.png";
import Base from "../assets/PizzaBase.png";
import Olive from "../assets/Olive.png";
import Pineapple from "../assets/Pineapple.png";
import Mushroom from "../assets/Mushroom.png";
import Basil from "../assets/Basil.png";
import Tomato from "../assets/Tomato.png";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

export default function Customize({ ingredients, setIngredients }) {
    // history = objet qui va permettre de mannipuler le state du navigateur
    let history = useHistory();

    // fct qui gère le changement de state 
    const onChange = (event, name) => {
        // console.log(localStorage);
        let newIngredients = JSON.parse(JSON.stringify(ingredients));
        newIngredients[name] = event;
        setIngredients(newIngredients);
        // je stocke les ingredients sélectionnés dans le localStorage
        localStorage.setItem("ingredients", JSON.stringify(newIngredients));
    };

    return (
        <div style={{ display: "flex" }}>
            <div style={{ flex: 1, padding: 40 }}>
                <div style={{ maxHeight: 500, maxWidth: 500, position: "relative" }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients["basil"] ? 100 : -100,
                            opacity: ingredients["basil"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className="ingredients z4"
                    >
                        <img src={Basil} alt="Pizza Base" height="100%" width="100%" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients["olive"] ? 100 : -100,
                            opacity: ingredients["olive"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className="ingredients z4"
                    >
                        <img src={Olive} alt="Pizza Base" height="100%" width="100%" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients["ananas"] ? 100 : -100,
                            opacity: ingredients["ananas"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className="ingredients z3"
                    >
                        <img src={Pineapple} alt="Pizza Base" height="100%" width="100%" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients["tomato"] ? 100 : -100,
                            opacity: ingredients["tomato"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className="ingredients z4"
                    >
                        <img src={Tomato} alt="Tomato" height="100%" width="100%" />
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{
                            // y: ingredients["cheese"] ? 100 : -100,
                            // opacity: ingredients["cheese"] ? 1 : 0,
                            scale: ingredients["cheese"] ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="cheese z1"
                    >
                        <img src={Cheese} alt="Cheese" height="100%" width="100%" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients["mushroom"] ? 100 : -100,
                            opacity: ingredients["mushroom"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className="ingredients z4"
                    >
                        <img src={Mushroom} alt="Pizza Base" height="100%" width="100%" />
                    </motion.div>

                    <motion.div transition={{ duration: 1 }} className="">
                        <img src={Base} alt="Pizza Base" height="100%" width="100%" />
                    </motion.div>
                </div>
            </div>
            <div style={{ flex: 1, padding: 40 }}>
                <label className="container-checkbox">
                    Ananas
                    <input
                        type="checkbox"
                        checked={ingredients["ananas"]}
                        onChange={(event) =>
                            onChange(event.currentTarget.checked, "ananas")
                        }
                    />
                    <span className="checkmark"></span>
                </label>
                <label className="container-checkbox">
                    Basilic
                    <input
                        type="checkbox"
                        checked={ingredients["basilic"]}
                        onChange={(event) => onChange(event.currentTarget.checked, "basilic")}
                    />
                    <span className="checkmark"></span>
                </label>
                <label className="container-checkbox">
                    Olives
                    <input
                        type="checkbox"
                        checked={ingredients["olives"]}
                        onChange={(event) => onChange(event.currentTarget.checked, "olives")}
                    />
                    <span className="checkmark"></span>
                </label>
                <label className="container-checkbox">
                    Tomates
                    <input
                        type="checkbox"
                        checked={ingredients["tomates"]}
                        onChange={(event) =>
                            onChange(event.currentTarget.checked, "tomates")
                        }
                    />
                    <span className="checkmark"></span>
                </label>
                <label className="container-checkbox">
                    Champignons
                    <input
                        type="checkbox"
                        checked={ingredients["champignons"]}
                        onChange={(event) =>
                            onChange(event.currentTarget.checked, "champignons")
                        }
                    />
                    <span className="checkmark"></span>
                </label>
                <label className="container-checkbox">
                    Fromage
                    <input
                        type="checkbox"
                        checked={ingredients["chefromageese"]}
                        onChange={(event) =>
                            onChange(event.currentTarget.checked, "fromage")
                        }
                    />
                    <span className="checkmark"></span>
                </label>
                {/* bouton: au clic, j'emmene les infos de l'objet history dans le component qui se trouve sur la route /checkout */}
                {/* et je suis redirect vers cette route */}
                <button
                    onClick={() => history.push("/checkout")}
                    className="proceedToCheckout"
                >
                    Récupérer ma pizza
                </button>
            </div>
        </div>
    );
}