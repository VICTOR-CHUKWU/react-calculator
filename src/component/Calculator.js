/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import calculate from '../logic/Calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  buttonClicked = (e) => {
    const buttonName = e.target.textContent;
    const newObj = calculate({ ...this.state }, buttonName);
    this.setState(newObj);
  };

  render() {
    const { total, next, operation } = this.state;
    let result = '';
    if (total) {
      result = `${total} ${operation || ''} ${next || ''}`;
    } else if (next) {
      result = next;
    }
    return (
      <>
        <div className="calculator-body">
          <div className="output">
            <div className="previous-input">{result}</div>
          </div>
          <button type="button" onClick={(e) => this.buttonClicked(e)}>AC</button>
          <button type="button" onClick={(e) => this.buttonClicked(e)}>+/-</button>
          <button type="button" onClick={(e) => this.buttonClicked(e)}>%</button>
          <button type="button" className="special" onClick={(e) => this.buttonClicked(e)}>/</button>
          <button type="button" onClick={(e) => this.buttonClicked(e)}>1</button>
          <button type="button" onClick={(e) => this.buttonClicked(e)}>2</button>
          <button type="button" onClick={(e) => this.buttonClicked(e)}>3</button>
          <button type="button" className="special" onClick={(e) => this.buttonClicked(e)}>x</button>
          <button type="button" onClick={(e) => this.buttonClicked(e)}>4</button>
          <button type="button" onClick={(e) => this.buttonClicked(e)}>5</button>
          <button type="button" onClick={(e) => this.buttonClicked(e)}>6</button>
          <button type="button" className="special" onClick={(e) => this.buttonClicked(e)}>+</button>
          <button type="button" onClick={(e) => this.buttonClicked(e)}>7</button>
          <button type="button" onClick={(e) => this.buttonClicked(e)}>8</button>
          <button type="button" onClick={(e) => this.buttonClicked(e)}>9</button>
          <button type="button" className="special" onClick={(e) => this.buttonClicked(e)}>-</button>
          <button type="button" className="double-space" onClick={(e) => this.buttonClicked(e)}>0</button>
          <button type="button" onClick={(e) => this.buttonClicked(e)}>.</button>
          <button type="button" className="special" onClick={(e) => this.buttonClicked(e)}>=</button>

        </div>
      </>
    );
  }
}

export default Calculator;
