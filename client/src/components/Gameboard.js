import React from "react";
import Card from "./Card";
import deck from "../deck";
import Timer from "./Timer";

class Gameboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.createCard = this.createCard.bind(this);
    this.setCardState = this.setCardState.bind(this);
    this.state = {
      running: false,
      clickedCardOne: "",
      clickedCardTwo: "",
      myDeck: deck,
      isMatch: false,
    };
  }

  componentDidUpdate(prevState) {
    if (this.state.clickedCardOne && this.state.clickedCardTwo) {
      const cardOne = deck.filter((card) => {
        return card.id == this.state.clickedCardOne;
      })[0];
      const cardTwo = deck.filter((card) => {
        return card.id == this.state.clickedCardTwo;
      })[0];

      console.log(cardOne, "card1");
      console.log(cardTwo, "card2");

      console.log(this.state.clickedCardOne, "state card 1");
      console.log(this.state.clickedCardTwo, "state card 2");
      if (cardOne.img === cardTwo.img) {

        const newDeck = this.state.myDeck.map((deck) => {
          console.log(this.state.clickedCardOne, deck.id)
          if (parseInt(this.state.clickedCardOne) === deck.id) {
            deck.flipped = true;
          }
          if (parseInt(this.state.clickedCardTwo) === deck.id) {
            deck.flipped = true;
          }
          return deck;
        });
        this.setState({ myDeck: newDeck, isMatch: true });

      } else {

        const newDeck = this.state.myDeck.map((deck) => {
          if (parseInt(this.state.clickedCardOne) === deck.id) {
            deck.flipped = false;
          }
          if (parseInt(this.state.clickedCardTwo) === deck.id) {
            deck.flipped = false;
          }
          return deck;
        });
        this.setState({ myDeck: newDeck, isMatch:false });
      }
      this.setState({ clickedCardOne: "", clickedCardTwo: "" });
    }
  }

  createCard(singleCard) {
    return (
      <Card
        key={singleCard.id}
        id={singleCard.id}
        img={singleCard.img}
        inspectCard={this.setCardState}
        flipped={singleCard.flipped}
        isMatch={this.state.isMatch}
        clickedCardOne={this.state.clickedCardOne}
        clickedCardTwo={this.state.clickedCardTwo}
      />
    );
  }

  handleClick() {
    this.deal();
    this.setState({
      running: true,
    });
  }

  setCardState(myCard) {
    console.log(myCard, "line 33 mycard");
    if (!this.state.clickedCardOne) {
      this.setState({ clickedCardOne: myCard });
    } else if (
      !this.state.clickedCardTwo &&
      this.state.clickedCardOne != myCard
    ) {
      this.setState({ clickedCardTwo: myCard });
    }
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
    this.setState({ myDeck: deck });

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
        <div className="row">
          {this.state.myDeck.map((card) => this.createCard(card))}
        </div>
        {console.log(this.state.myDeck, "myDeck line 143")}
      </div>
    );
  }
}

export default Gameboard;
