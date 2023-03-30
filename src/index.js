import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './components/Form/Form';
import User from './components/User/User';
import Cycles from './components/Cycles/Cycles'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <User /> */}
    {/* <Form /> */}
    <Cycles />
  </React.StrictMode>
);


