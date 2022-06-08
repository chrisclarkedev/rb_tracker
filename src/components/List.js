import React from 'react';
import ListItems from './ListItems';

const List = () => {
  const expenses = [
    { id: 1, name: 'Shopping', cost: 90 },
    { id: 2, name: 'Child Care', cost: 350 },
    { id: 3, name: 'Vacation', cost: 400 },
    { id: 4, name: 'Transportation', cost: 85 },
    { id: 5, name: 'Other', cost: 150 },
  ];

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ListItems id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default List;
