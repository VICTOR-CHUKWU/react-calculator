import React, { useState } from 'react';
import calculate from '../logic/Calculate';
import data from './button-data';

const Calculator = () => {
  const [calculator, setCalculator] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const buttonClicked = (e) => {
    const button = e.target.textContent;
    const newState = calculate({ ...calculator }, button);
    setCalculator(newState);
  };

  const nameClass = (button) => {
    if (button === '/' || button === 'x' || button === '-' || button === '+' || button === '=') {
      return 'special';
    }

    if (button === '0') {
      return 'double-space';
    }
    return '';
  };

  const { total, next, operation } = calculator;
  let result = '0';
  if (total) {
    result = `${total} ${operation || ''} ${next || ''}`;
  } else if (next) {
    result = next;
  }
  return (
    <div className="calculate">
      <h2>lets do some maths</h2>
      <div className="calculator-body">
        <div className="output">
          <div className="previous-input">{result}</div>
        </div>
        {
          data.map((item) => (
            <button type="button" key={item} className={nameClass(item)} onClick={(e) => buttonClicked(e)}>{item}</button>
          ))
        }

      </div>
    </div>
  );
};

export default Calculator;
