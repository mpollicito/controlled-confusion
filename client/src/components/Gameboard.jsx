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
            {deck.map(createCard)}
        </div>
    )
}


export default Gameboard;