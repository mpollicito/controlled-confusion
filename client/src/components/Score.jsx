import React from "react";

function Score() {
  return (
    <div>
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input id="input_text" type="text" data-length="3"></input>
              <label for="input_text">Input Initials</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <textarea id="input_text2" data-length="12"></textarea>
              <label for="input_text2">Score</label>
            </div>
          </div>
        </form>
      </div>

      <button class="btn waves-effect waves-light" type="submit" name="action">
        Submit
        <i class="material-icons right">send</i>
      </button>
    </div>
  );
}

export default Score;
