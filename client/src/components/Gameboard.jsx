import React from "react";
import Card from "./Card";
import deck from "../deck";
import Timer from "./Timer";

function createCard(singleCard) {
    return <Card key={singleCard.id} img={singleCard.img} />;
}

class Gameboard extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        running: false,
      };
    }
  
    handleClick() {
      this.deal();
      this.setState({
        running: true,
      });
    }
  
    renderTimer() {
      return <Timer />;
    }
  
    deal() {
      var currentIndex = deck.length,
        temporaryValue,
        randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
      
            temporaryValue = deck[currentIndex];
            deck[currentIndex] = deck[randomIndex];
            deck[randomIndex] = temporaryValue;
          }
      
          return deck;
        }
        render() {
    return (
        <div>
        {this.state.running && this.renderTimer()}
        <button
          onClick={this.handleClick}
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Start Game
          <i className="material-icons right">Start</i>
        </button>
        {deck.map((card) => createCard(card))}
      </div>
    );
  }   
}

export default Gameboard;