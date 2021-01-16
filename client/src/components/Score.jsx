import React from "react";

function Score() {
  return (
    <div>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="input_text" type="text" data-length="3"></input>
              <label for="input_text">Input Initials</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <textarea id="input_text2" data-length="12"></textarea>
              <label for="input_text2">Score</label>
            </div>
          </div>
        </form>
      </div>

      <button className="btn waves-effect waves-light" type="submit" name="action">
        Submit
        <i className="material-icons right">send</i>
      </button>
    </div>
  );
}

export default Score;
