import React, { Component } from "react";
// import "./button.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

export default class Button extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, className, icon, onClick } = this.props;
    return (
      <div className={classNames("md button", className)} onClick={onClick}>
        <div className="button-icon">
          <svg
            data-tip
            data-for="genreInfo"
            className={classNames("lnr lnr-icon icon")}
          >
            <use xlinkHref={`#lnr-${icon}`} />
          </svg>
        </div>
        <div className="title">{title}</div>
      </div>
    );
  }
}
