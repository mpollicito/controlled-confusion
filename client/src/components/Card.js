import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: props.flipped,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState((prevState, props) => ({ isFlipped: !prevState.isFlipped }));

    const id = event.target.getAttribute("data-id");
    if (id) this.props.inspectCard(id);
    console.log(this.props.clickedCardTwo, "line18 clickcard2")

  }

  render() {
    console.log(this.state.isFlipped, "isFlipped");
    // setTimeout(function )
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" flipSpeedBackToFront="0.00001" flipSpeedFrontToBack="0.00001">
        <div>

          <div className="col s12 m3">
            <div
              onClick={this.handleClick}
              className="card-back card-panel"
              src={this.props.img}
              data-id={this.props.id}
            >

              {/* <span class="white-text">Back Card Image</span> */}
            </div>
          </div>
        </div>

        <div>

          <div className="col s12 m4">

          <div className="col s12 m3">

            <div onClick={this.handleClick} className="card-front card-panel">
              <img src={this.props.img} />
              {/* <span class="white-text">Front Card image</span> */}
            </div>
          </div>
        </div>
      </ReactCardFlip>
    );
  }
}

export default Card;
