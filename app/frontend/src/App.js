import './App.css';
import React from 'react';
import { Header, List, Button, Form } from './components';

function App() {
  return (
    <div className='App'>
      <Header/>
      <br/>
      <h1>Test API</h1>
      <br/>
      <Form/>
      <br/>
      <Button operation="Get" param="users"/>
      <br/>
      <br/>
      <h1>Catalog</h1>
      <br/>
      <List/>
    </div>
  );
}

export default App;
