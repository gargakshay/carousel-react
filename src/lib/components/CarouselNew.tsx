import React, { Component } from "react";
import "./CarouselNew.scss";

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
class CarouselNew extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
      length: this.props.list.length,
      width: this.props.width || 200,
      list: this.processList(this.props.list)
    };
  }

  processList(list: JSX.Element[]) {
    if (Array.isArray(list)) {
      let newList = [...list];
      newList.unshift(list[list.length - 1]);
      newList.push(list[0]);
      return newList;
    }
  }

  /**
   * Handling for prev action
   */
  onPrev = () => {
    let idx = this.state.index - 1;
    if (idx === 0) {
      this.setState({ index: this.state.list.length - 2 });
    } else {
      this.setState({ index: idx });
    }
  };

  /**
   * Handling for next action
   */
  onNext = () => {
    let idx = (this.state.index + 1) % (this.state.list.length - 1);
    if (idx === 0) {
      this.setState({ index: 1 });
    } else {
      this.setState({ index: idx });
    }
  };

  /**
   * Render Prev button
   */

  renderPrevButton = () => {
    return <div className="arrow arrow-left" onClick={this.onPrev}></div>;
  };

  /**
   * Render Next button
   */
  renderNextButton = () => {
    return <div className="arrow arrow-right" onClick={this.onNext}></div>;
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
              this.state.width * 0.75}px)`
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
      <div className="carousel-new">
        {/* index {this.state.index} */}
        <div
          className="carousel"
          style={{ width: `${this.state.width * 3}px` }}
        >
          {this.renderPrevButton()}
          {this.renderSlides()}
          {this.renderNextButton()}
        </div>
      </div>
    );
  }
}

export default CarouselNew;
