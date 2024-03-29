import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import Total from './components/Total';
import List from './components/List';
import AddForm from './components/AddForm';

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Budget Tracker In React</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <Total />
          </div>
        </div>
        <h3 className="mt-3">Payments</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <List />
          </div>
        </div>
        <h3 className="mt-3">Additional Costs</h3>
        <div className=" mt-3">
          <div className="col-sm">
            <AddForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
