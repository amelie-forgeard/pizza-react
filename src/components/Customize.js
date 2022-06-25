import React from 'react'
import Cheese from "../assets/BaseCheese.png";
import Base from "../assets/PizzaBase.png";
import Olive from "../assets/Olive.png";
import Pineapple from "../assets/Pineapple.png";
import Mushroom from "../assets/Mushroom.png";
import Basil from "../assets/Basil.png";
import Tomato from "../assets/Tomato.png";

export default function Customize() {
    return (
        <div style={{ display: "flex" }}>
            <div style={{ border: "2px solid black", flex: 1 }}>
                <div style={{ maxHeight: 500, maxWidth: 500, position: "relative" }}>
                    <img className='ingredients' src={Cheese} alt="base pizza" height="100%" width="100%" />
                    <img className='ingredients' src={Olive} alt="base pizza" height="100%" width="100%" />
                    <img className='ingredients' src={Pineapple} alt="base pizza" height="100%" width="100%" />
                    <img className='ingredients' src={Mushroom} alt="base pizza" height="100%" width="100%" />
                    <img className='ingredients' src={Basil} alt="base pizza" height="100%" width="100%" />
                    <img className='ingredients' src={Tomato} alt="base pizza" height="100%" width="100%" />
                    <img src={Base} alt="base pizza" height="100%" width="100%" />


                </div>
            </div>
            <div style={{ border: "2px solid black", flex: 1 }}>Checkbox</div>
        </div>
    )
}

