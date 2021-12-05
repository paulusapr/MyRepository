import React, { createContext, useReducer } from 'react';
import Reducer from './reducer';

type State = {
  list: Array<string | number | Object>,
  setList: Function
};

const initialState: State = {
  list: [],
  setList: () => {},
};

const Store = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const { list } = state;

  const setList = (payload: Array<string | number | Object>) => {
    dispatch({ type: 'SET_LIST', payload });
  };

  return (
    <Context.Provider value={{ list, setList }}>
      {children}
    </Context.Provider>
  );
};
export const Context = createContext(initialState);
export default Store;
