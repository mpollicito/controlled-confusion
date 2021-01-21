import React from "react";
import Card from "./Card";
import deck from "../deck";
import Timer from "./Timer";

// function createCard(singleCard) {
//   return <Card key={singleCard.id} img={singleCard.img} />;
// }

class Gameboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.createCard = this.createCard.bind(this);
    this.compareCards = this.compareCards.bind(this);
    this.state = {
      running: false,
      clickedCardOne: "",
      clickedCardTwo: ""
    };
  }

  componentDidUpdate(prevState) {
    console.log(this.state.clickedCardOne, "LINE25")
    if (this.state.clickedCardOne && this.state.clickedCardTwo){

      console.log(this.state.clickedCardOne , "state card 1");
      console.log(this.state.clickedCardTwo , "state card 2")
      if (this.state.clickedCardOne === this.state.clickedCardTwo){
        // do stuff
        alert("match!")
      }
      else {
 // if they don't match
      }
     
      this.setState({clickedCardOne: "", clickedCardTwo:""})
    }
  }

  createCard(singleCard) {
    return <Card key={singleCard.id} img={singleCard.img} inspectCard={this.compareCards} />;
  }

  handleClick() {
    this.deal();
    this.setState({
      running: true,
    });
  }

  compareCards(myCard) {
    console.log(myCard, "line 33 mycard")
    

    if (!this.state.clickedCardOne){
      this.setState({clickedCardOne: myCard})
    } else if (!this.state.clickedCardTwo){
      this.setState({clickedCardTwo: myCard})
    }

    // if (this.state.clickedCardOne === this.state.clickedCardTwo) {
    //   // keep flipped to front
    // }
    // else {
    //   // return both to flipped
    // }
    // 
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
          <i className="material-icons right"></i>
        </button>
        {deck.map((card) => this.createCard(card))}
      </div>
    );
  }
}

export default Gameboard;
