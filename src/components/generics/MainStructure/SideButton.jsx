import "./SideButton.css";
import React from "react";

class SideButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    // return (
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
    console.log(this.state);
  }

  render() {
    if (this.state.isToggleOn) {
      return (
        <div className="SideButton" onClick={this.handleClick}>
          <svg className="SvgCircle">
            <circle
              cx="50%"
              cy="50%"
              r="15"
              stroke="#29a354"
              strokeWidth="2"
              fill="none"
            />
            <polygon
              fill="#29a354"
              stroke="#29a354"
              strokeWidth="1"
              points="32,25 32,58 60,42"
              transform="translate(3 3) scale(0.4)"
            ></polygon>
          </svg>
        </div>
      );
    } else {
      return (
        <div className="SideButton" onClick={this.handleClick}>
          <svg className="SvgCircle">
            <circle
              cx="50%"
              cy="50%"
              r="15"
              stroke="#f9891c"
              strokeWidth="2"
              fill="none"
            />
            <rect
              width="4"
              height="33"
              x="30"
              y="25"
              fill="#f9891c"
              transform="translate(3 3) scale(0.4)"
            />
            <rect
              width="4"
              height="33"
              x="50"
              y="25"
              fill="#f9891c"
              transform="translate(3 3) scale(0.4)"
            />
          </svg>
        </div>
      );
    }
  }
}

export default SideButton;
