import React from 'react';
import classes from './Input.module.css'

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }
  switch (props.elementType) {
    case('input'):
        inputElement = <input
                        onChange={props.changed}
                        className={inputClasses.join(' ')}
                        {...props.elementConfig}
                        value={props.value}/>;
        break;
    case('textarea'):
        inputElement = <textarea
                        onChange={props.changed}
                        className={inputClasses.join(' ')}
                        {...props.elementConfig}
                        value={props.value}/>;
        break;
    case('select'): 
        inputElement = <select
                        onChange={props.changed}
                        className={classes.InputElement}
                        value={props.value}>
                            {props.elementConfig.options.map(option => (
                                <option value={option.value} key={option.value}>
                                    {option.displayValue}
                                </option>
                            ))}
                        </select>;
        break;
    default:
        inputElement = <input
                        onChange={props.changed}
                        className={inputClasses.join(' ')}
                        {...props.elementConfig}
                        value={props.value}/>;

  }
  let validationError = null;
    if (props.invalid && props.touched) {
        validationError = <p className={classes.ValidationError}>Please enter a valid value!!</p>;
    }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
      {validationError}
    </div>
  );
};

export default input;