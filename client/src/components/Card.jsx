import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";

class Card extends Component {
    constructor(props) {
      super(props);
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
      event.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
   
    render() {
      return (
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div> 
            <div class="row">
                <div class="col s12 m5">
                    <div onClick={this.handleClick} class="card-panel teal">
                    <span class="white-text">Front Card image</span>
                    </div>
                </div>
            </div> 
        </div>

        <div> 
            <div class="row">
                <div class="col s12 m5">
                    <div onClick={this.handleClick} class="card-panel black">
                    <span class="white-text">Back Card image</span>
                    </div>
                </div>
            </div>
        </div>
      </ReactCardFlip>

      )
    }
  }

export default Card;



