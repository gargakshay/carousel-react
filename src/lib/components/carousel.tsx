import React, { Component } from "react";
import "./carousel.scss";

interface Props {
  list: JSX.Element[];
  width?: number;
}

interface State {
  index: number;
  length: number;
  width: number;
  list: JSX.Element[];
}
class Carousel extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      length: this.props.list.length,
      width: this.props.width || 200,
      list: this.props.list
    };
  }

  /**
   * Handling for prev action
   */
  onPrev = () => {
    let idx = this.state.index - 1;
    if (idx === 0) {
      this.setState({ index: this.state.list.length - 1 });
    } else {
      this.setState({ index: idx });
    }
  };

  /**
   * Handling for next action
   */
  onNext = () => {
    let idx = (this.state.index + 1) % this.state.list.length;
    this.setState({ index: idx });
  };

  /**
   * Render Prev button
   */

  renderPrevButton = () => {
    return (
      <div
        className={`arrow arrow-left ${
          this.state.index === 0 ? "disabled-btn" : ""
        }`}
        onClick={this.onPrev}
      ></div>
    );
  };

  /**
   * Render Next button
   */
  renderNextButton = () => {
    return (
      <div
        className={`arrow arrow-right ${
          this.state.index === this.state.length - 1 ? "disabled-btn" : ""
        }`}
        onClick={this.onNext}
      ></div>
    );
  };

  /**
   * Render Slides
   */
  renderSlides = () => {
    return (
      <div className="slider-wrapper">
        <div
          className="slides"
          style={{
            transform: `translateX(-${this.state.index * this.state.width -
              this.state.width * 0.5}px)`
          }}
        >
          {this.state.list.map((ele, idx) => (
            <div
              className={`slide`}
              style={{
                width: this.state.width + "px",
                minWidth: this.state.width + "px"
              }}
              key={idx}
            >
              {ele}
            </div>
          ))}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="carousel-container">
        {/* index {this.state.index} */}
        <div
          className="carousel"
          style={{ width: `${this.state.width * 2.5}px` }}
        >
          {this.renderPrevButton()}
          {this.renderSlides()}
          {this.renderNextButton()}
        </div>
      </div>
    );
  }
}

export default Carousel;
