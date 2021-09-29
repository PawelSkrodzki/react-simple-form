/* eslint-disable */
import React, { useContext, useState } from 'react';
// import useForm from '../../utils/useFormHook';
// import { initalState } from '../../App';
import { Route } from 'react-router';
import { useHistory } from 'react-router-dom';
import { useStateContext } from '../../context';
import './CompanySetter.css';

const companyList = ['XYZ Warszawa, Poland', 'ABC Kraków, Poland', 'RNQ Berlin, Germany'];

function CompanySetter() {
  const history = useHistory();
  const initState = useStateContext();
  const { setState, state } = initState;

  const CompanyButton = ({ text, selectFn }) => {
    return (
      <button className={'company-button'} onClick={selectFn}>
        {text}
      </button>
    );
  };

  const selectCompany = (newCompany) => {
    setState({ ...state, company: newCompany });

    history.push('/form');
  };

  return (
    <div className={'company-setter-container'}>
      <h1 className={'title'}>Branch of the company</h1>
      <div className="company-buttons">
        {companyList.map((singleCompany, index) => (
          <CompanyButton key={index} text={singleCompany} selectFn={() => selectCompany(singleCompany)} />
        ))}
      </div>
    </div>
  );
}

export default CompanySetter;
