import React from "react";

export default class Memo extends React.Component {
  shouldComponentUpdate() {
    console.log("res");
  }
  render() {
    return (
      <div>
        <span>
          <input>
            <button>Click me here</button>
          </input>
        </span>
      </div>
    );
  }
}
