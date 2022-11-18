import React, { useContext } from 'react';
import ListItems from './ListItems';
import { AppContext } from '../context/AppContext';

const List = () => {
  const { expenses } = useContext(AppContext);

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ListItems id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default List;
