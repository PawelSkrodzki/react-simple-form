import React, { useState } from 'react';

const StateContext = React.createContext({});

const initalState = {
  company: null,
  name: '',
  email: '',
  text: '',
};

export const useStateContext = () => React.useContext(StateContext);

export const StateProvider = ({ children }) => {
  const [state, setState] = useState(initalState);

  const values = { state, setState };

  return <StateContext.Provider value={values}>{children}</StateContext.Provider>;
};
