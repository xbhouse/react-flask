import './App.css';
import React from 'react';
import { Swagger, Button } from './components';

function App() {
  return (
    <div className='App'>
      <br/>
      <Swagger/>
      <br/>
      <Button param={"users"}/>
      <Button param={"blueprints"}/>
    </div>
  );
}

export default App;
