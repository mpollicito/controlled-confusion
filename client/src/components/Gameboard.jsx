import React from "react";
import Card from "./Card";
import deck from "../deck";


function createCard(singleCard) {
    return <Card 
         key={singleCard.id}
         img={singleCard.img}
    />
}


function Gameboard() {
    return (
        <div>
            {deck.map(card => createCard(card))}
        </div>
    )
}


export default Gameboard;