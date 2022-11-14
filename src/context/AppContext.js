import { createContext, useReducer } from 'react';

const AppReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initialState = {
  budget: 3000,
  expenses: [
    { id: 12, name: 'shopping', cost: 40 },
    { id: 20, name: 'vacation', cost: 700 },
    { id: 25, name: 'child care', cost: 290 },
  ],
};

export const AppContext = createContext();

// External Components need to be accessed

const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
};
