import './App.css';
import React from 'react';
import Topbar from "./topbar";
import Sidebar from './Components/Sidebar';
import {useRoutes } from 'hookrouter';
import Home from './Pages/home';
import Search from './Pages/search';

const routes={
  "/":()=><Home/>,
  '/home':()=><Home/>,
  "/search":()=><Search/>
}

function App() {
  const match=useRoutes(routes);

  return (
    <div className="App">
        <Topbar></Topbar>
        <div className="Maincontainer">
          <Sidebar></Sidebar>
          {match}
          {/* <div className="sidebar">
            <label className="Home">Home</label>
            <br></br>
            <label className="Search">Search</label>

          </div> */}
        </div>

    </div>
  );
}

export default App;
