/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Calculator extends Component {
  render() {
    return (
      <>
        <div className="calculator-body">
          <div className="output">
            <div className="previous-input" />
            <div className="current-input" />
          </div>
          <button type="button" className="double-space">AC</button>
          <button type="button">DEL</button>
          <button type="button" className="special">/</button>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" className="special">*</button>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button" className="special">+</button>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button" className="special">-</button>
          <button type="button" className="double-space">0</button>
          <button type="button">.</button>
          <button type="button" className="special">=</button>

        </div>
      </>
    );
  }
}

export default Calculator;
