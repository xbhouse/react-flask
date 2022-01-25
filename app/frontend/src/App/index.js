import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './app.css';
import CreateAppPage from './pages/userViews/CreateAppPage.js';
import OrderTemplatePage from './pages/userViews/OrderTemplatePage.js';
import TemplateListPage from './pages/userViews/TemplateListPage.js';
import TicketListPage from './pages/userViews/TicketListPage.js';
import AdminBlueprintListPage from './pages/adminViews/BlueprintListPage.js';
import UserBlueprintListPage from './pages/userViews/BlueprintListPage.js';
import MakeRequestPage from './pages/userViews/MakeRequestPage.js';
import UserPage from './pages/userViews/UserPage.js';
import AboutPage from './pages/AboutPage.js';


export default class App extends Component {

  render() {
    return (
      <div className="app-container">
        <Routes>
          <Route path="/" element={
            <div>
              <a href="http://localhost:5000/create">Create an app</a>
              <br/>
              <a href="http://localhost:5000/blueprints">See all users' blueprints (admin only)</a>
              <br/>
              <a href="http://localhost:5000/templates">See available templates</a>
              <br/>
            </div>}></Route>
          <Route path="/create" element={<CreateAppPage/>}></Route>
          <Route path="/blueprints" element={<AdminBlueprintListPage/>}></Route>
          <Route path="/order-template" element={<OrderTemplatePage/>}></Route>
          <Route path="/submit" ></Route>
          <Route path="/about" element={<AboutPage/>}></Route>
          <Route path="/my-blueprints" element={<UserBlueprintListPage/>}></Route>
          <Route path="/my-templates" element={<TemplateListPage/>}></Route>
          <Route path="/my-requests" element={<TicketListPage/>}></Route>
          <Route path="/make-request" element={<MakeRequestPage/>}></Route>
        </Routes>
      </div>
    );
  }
}
