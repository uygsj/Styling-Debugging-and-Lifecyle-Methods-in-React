import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [buttonColor, setButtonColor] = useState('lightcoral');

  const goalInputChangeHandler = event => {
    const inputValue = event.target.value;
    setEnteredValue(inputValue);

    if (inputValue.trim().length === 0) {
      setIsValid(false);
      setButtonColor('lightcoral');
    } else if (inputValue.trim().length === 1) {
      setIsValid(true);
      setButtonColor('red');
    } else {
      setIsValid(true);
      setButtonColor('red');
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      setButtonColor('lightcoral');
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label style={{ color: !isValid ? 'red' : 'black' }}>Course Goal</label>
        <input
          style={{
            borderColor: !isValid ? 'salmon' : '#ccc',
            background: !isValid ? 'salmon' : 'transparent'
          }}
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </div>
      <Button
        style={{
          background: buttonColor,
          color: 'white'
        }}
        type="submit"
        disabled={!isValid}
      >
        Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;
