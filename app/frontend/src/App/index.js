import React, { Component } from 'react';
import { Routes, Route} from "react-router-dom";
import './app.css';
import OrderTemplate from './components/OrderTemplate.js';
import AdminPage from './pages/AdminPage.js';
import MakeRequest from './components/MakeRequest.js';
import CreateApp from './components/CreateApp.js';
import RequestList from './components/RequestList.js';
import UserPage from './pages/UserPage.js';
import About from './components/About.js';
import BlueprintView from './components/BlueprintView.js';
import AllBlueprints from './components/AllBlueprints.js';


export default class App extends Component {

  render() {
    return (
      <div className="app-container">
        <Routes>
          <Route path="/about" element={<UserPage pageContent={<About/>}/>}></Route>
          <Route path="/my-requests" element={<UserPage pageContent={<RequestList/>}/>}></Route>
          <Route path="/make-request" element={<UserPage pageContent={<MakeRequest/>}/>}></Route>
          <Route path="/order-template" element={<UserPage pageContent={<OrderTemplate/>}/>}></Route>
          <Route path="/create" element={<UserPage pageContent={<CreateApp/>}/>}></Route>
          <Route path="/my-blueprint" element={<UserPage pageContent={<BlueprintView/>}/>}></Route>
          <Route path="/blueprints" element={<AdminPage pageContent={<AllBlueprints/>}/>}></Route>
        </Routes>
      </div>
    );
  }
}
