import React, { Component } from "react";

export default class HandelEvent extends Component {
  handleClick = (e) => {
    alert("Hello An");
  };
  showMessage = (name) => {
    alert("Hello" + name);
  };
  render() {
    return (
      <div>
        <h3>HandelEvent</h3>
        <button
          className="btn btn-danger"
          onClick={(e) => {
            this.showMessage("An Nguyễn");
          }}
        >
          Click
        </button>

        <button className="btn btn-primary ms-2" onClick={this.handleClick}>
          Click
        </button>
        <h3>Handle Event Change</h3>
        <input
          type="text"
          className="form-control w-25"
          onChange={(e) => {
            var tagInput = e.target;
            console.log("Value", tagInput.value);
          }}
        />
      </div>
    );
  }
}
