import React from "react";

import "./CarouselNew.scss";

class CarouselNew extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      slides: this.props.list,
      slide: this.props.list[0],
      index: 0
    };
  }

  nextProperty = () => {
    const idx = this.state.index + 1;
    this.setState({ slide: this.state.slides[idx], index: idx });
  };

  prevProperty = () => {
    const idx = this.state.index - 1;
    this.setState({ slide: this.state.slides[idx], index: idx });
  };

  render() {
    const { slides, slide } = this.state;
    return (
      <div className="CarouselNew">
        <button onClick={this.prevProperty} disabled={this.state.index === 0}>
          Prev
        </button>
        <button
          onClick={this.nextProperty}
          disabled={this.state.index === this.state.slides.length - 1}
        >
          Next
        </button>
        <div className="col">
          <div className={`card-slider active-slide-${this.state.index}`}>
            <div
              className="card-slider-wrapper"
              style={{
                transform: `translateX(-${(this.state.index * 100) /
                  this.state.slides.length}%)`
              }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="card" id={`card-${index}`}>
                  {slide}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselNew;
