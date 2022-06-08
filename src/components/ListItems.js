import React from 'react';
import { TiDelete } from 'react-icons/ti';

const ListItems = (props) => {
  return (
    // Passed down from List component
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge rounded-pill bg-primary mr-3">
          ${props.cost}
        </span>
        <TiDelete size="1.5em"></TiDelete>
      </div>
    </li>
  );
};

export default ListItems;
