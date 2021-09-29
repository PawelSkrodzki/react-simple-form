import React, { useState, useEffect } from 'react';
import { useStateContext } from '../../../context';
import { useHistory } from 'react-router-dom';
import validation from '../../../validation/validation';

const api_url = 'https://baconipsum.com/api/?type=all-meat&paras=2';

const useForm = (validation) => {
  const history = useHistory();
  const initState = useStateContext();

  const { state, setState } = initState;
  const [errors, setErrors] = useState({});

  const updateFormField = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    let name;
    let email;
    let text;
    const errors = validation(({ name, email, text } = state))
    setErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    } else {
      history.push('/summary');
    }
  };

  const getApiData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setState({ ...state, text: data });

      return data;
    } catch (err) {
      throw new Error(`Error:${err}`);
    }
  };

  useEffect(() => {
    getApiData(api_url);
  }, []);

  return { handleSumbit, updateFormField, state, errors };
};

export default useForm;
