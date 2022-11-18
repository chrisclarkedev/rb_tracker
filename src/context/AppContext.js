import React from 'react';
import { createContext, useReducer } from 'react';

const AppReducer = (state, action) => {
  // Switch runs check action type returns new state, overrides states, takes copy of current expenses returns and updates app provider
  // Mapping of action object
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };

    case 'DELETE_EXPENSE':
      // Have to return complete state cases
      // Will return a new array that does not have the expense that was deleted
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

// Loaded when the App starts for the first time
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

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
