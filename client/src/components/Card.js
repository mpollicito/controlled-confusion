import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState((prevState, props) => ({ isFlipped: !prevState.isFlipped }));

    this.props.inspectCard(event.target.getAttribute("src"))

  }


  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div>
            <div className="col s12 m4">
              <div onClick={this.handleClick} className="card-back card-panel" src={this.props.img}>
                {/* <span class="white-text">Back Card Image</span> */}
              </div>
            </div>
        </div>

        <div>
            <div className="col s12 m4">
              <div onClick={this.handleClick} className="card-front card-panel">
              <img src={this.props.img} character={this.props.character} />
              {/* <span class="white-text">Front Card image</span> */}
              </div>
            </div>
        </div>
      </ReactCardFlip>
    );
  }
}

export default Card;
