import React, { Component } from 'react';
import './app.css';
import CreateAppPage from './pages/userViews/CreateAppPage.js';
import TemplateListPage from './pages/userViews/TemplateListPage.js';
import BlueprintListPage from './pages/adminViews/BlueprintListPage.js';


export default class App extends Component {

  render() {
    return (
      <div className="app-container">
        <BlueprintListPage/>
      </div>
    );
  }
}
