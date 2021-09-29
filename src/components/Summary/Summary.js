import React from 'react';
import { useStateContext } from '../../context';
import './Summary.css';

function Summary() {
  const initState = useStateContext();
  const { state } = initState;
  const { name, email, text, company } = state;
  return (
    <div className={'summary-container'}>
      <h1>The form has been sent!</h1>
      <div className={'data-container'}>
        <h3 className={'data-title'}>Sent data:</h3>
        <p className={'single-data'}>
          <span>Name: </span>
          {name}
        </p>
        <p className={'single-data'}>
          <span>Email: </span>
          {email}
        </p>
        <p className={'single-data'}>
          <span>Text: </span>
          {text}
        </p>
        <p className={'single-data'}>
          <span>Sent to branch: </span>
          {company}
        </p>
      </div>
    </div>
  );
}

export default Summary;
