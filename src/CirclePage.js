import React, { Component } from "react";
// import logo from './logo.svg';
import PropTypes from "prop-types";
import "./CirclePage.css";

class CirclePage extends Component {
  state = {
    autoSelectIndex: null,
    score: null,
  };
  stop = () => {
    alert("Your final score is: " + this.state.score);
    this.setState({
      autoSelectIndex: null,
      score: null,
    });
  };
  play = () => {
    let autoSelectIndex = this.getRandomSelectedCircle(1, 36);
    this.setState({
      autoSelectIndex: autoSelectIndex,
      score: null,
    });
  };

  getRandomSelectedCircle = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  clickedCircle = (clickedIndex) => {
    let { autoSelectIndex, score } = this.state;
    if (autoSelectIndex) {
      if (clickedIndex === autoSelectIndex) {
        this.setState({
          score: score + 1,
        });
      } else {
        this.setState({
          score: score - 1,
        });
      }
      let autoSelectIndexOnSelect = this.getRandomSelectedCircle(1, 36);
      this.setState({
        autoSelectIndex: autoSelectIndexOnSelect,
      });
    }
  };
  render() {
    let { circles } = this.props;
    let { autoSelectIndex, score } = this.state;
    return (
      <div className="circle-page-wrapper">
        <div className="circle-page-header"> Hit the circle</div>
        <div className="circle-page-subheader">
          Test your skill how many circles you can hit?
        </div>
        <div className="circle-page-scorebox">
          <div className="circle-page-score">Score</div>
          <div className="circle-page-score-num">{score}</div>
        </div>
        <div className="circle-page-line"></div>
        <div className="circle-page-circle-wrapper">
          {circles &&
            circles.length > 0 &&
            circles.map((eachcircle, index) => {
              return (
                <div
                  className={
                    autoSelectIndex === index + 1
                      ? "active-circle circle"
                      : "circle"
                  }
                  onClick={() => this.clickedCircle(index + 1)}
                ></div>
              );
            })}
        </div>
        <div className="circle-page-line"></div>
        <div className="circle-page-button-wrapper">
          <div className="circle-page-play" onClick={() => this.play()}>
            Play
          </div>
          <div className="circle-page-stop" onClick={() => this.stop()}>
            Stop
          </div>
        </div>
      </div>
    );
  }
}
CirclePage.defaultProps = {
  circles: [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
  ],
};

CirclePage.propTypes = {
  circles: PropTypes.array,
};
export default CirclePage;
