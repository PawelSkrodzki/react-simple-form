import React from 'react';
import useForm from './Hooks/useForm';
import validation from '../../validation/validation';
import './Form.css';

const Form = () => {
  const { handleSumbit, updateFormField, state, errors } = useForm(validation);

  return (
    <div className={'form-container'}>
      <form className={'form'} onSubmit={handleSumbit}>
        <h1>Form</h1>
        <div className="form-inputs">
          <div className={'input-texts-container'}>
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            {errors.name && <span className={'error-field'}>{errors.name}</span>}
          </div>

          <input
            id="name"
            name="name"
            type="text"
            className={'form-input name-input'}
            placeholder="Enter your username"
            value={state.name}
            onChange={updateFormField}
          />
          <div className={'input-texts-container'}>
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            {errors.email && <span className={'error-field'}>{errors.email}</span>}
          </div>

          <input
            id="email"
            name="email"
            type="text"
            className={'form-input email-input'}
            placeholder="Enter your email"
            value={state.email}
            onChange={updateFormField}
          />
          <div className={'input-texts-container'}>
            <label htmlFor="text" className="form-label">
              Text:
            </label>
            {errors.text && <span className={'error-field'}>{errors.text}</span>}
          </div>

          <textarea
            id="text"
            name="text"
            type="text"
            className={'form-input text-input'}
            placeholder="Enter your text"
            rows="10"
            cols="20"
            defaultValue={state.text}
            onChange={updateFormField}
          />
          <button className={'form-submit-button'} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
